import { CufinderClient } from '../src/client';
import axios from 'axios';

// Mock axios
jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('CufinderClient', () => {
    let client: CufinderClient;
    const mockAxiosInstance = {
        defaults: {
            baseURL: 'https://api.cufinder.io/v2',
            timeout: 30000,
            headers: {},
        },
        interceptors: {
            request: { use: jest.fn() },
            response: { use: jest.fn() },
        },
        request: jest.fn(),
    };

    beforeEach(() => {
        mockedAxios.create.mockReturnValue(mockAxiosInstance as any);
        mockAxiosInstance.defaults.headers['x-api-key'] = 'test-api-key-123456789';
        client = new CufinderClient({
            apiKey: 'test-api-key-123456789',
        });
    });

    afterEach(() => {
        jest.clearAllMocks();
    });

    describe('constructor', () => {
        it('should throw error for missing API key', () => {
            expect(() => {
                new CufinderClient({} as any);
            }).toThrow('API key is required');
        });

        it('should initialize with correct config', () => {
            expect(mockedAxios.create).toHaveBeenCalledWith({
                baseURL: 'https://api.cufinder.io/v2',
                timeout: 30000,
                headers: {
                    'x-api-key': 'test-api-key-123456789',
                    'Content-Type': 'application/x-www-form-urlencoded',
                    'User-Agent': '@cufinder/cufinder-ts/1.0.0',
                },
            });
        });

        it('should use custom base URL', () => {
            new CufinderClient({
                apiKey: 'test-api-key-123456789',
                baseUrl: 'https://custom.api.com',
            });

            expect(mockedAxios.create).toHaveBeenCalledWith(
                expect.objectContaining({
                    baseURL: 'https://custom.api.com',
                })
            );
        });

        it('should use custom timeout', () => {
            new CufinderClient({
                apiKey: 'test-api-key-123456789',
                timeout: 60000,
            });

            expect(mockedAxios.create).toHaveBeenCalledWith(
                expect.objectContaining({
                    timeout: 60000,
                })
            );
        });

        it('should set up request and response interceptors', () => {
            expect(mockAxiosInstance.interceptors.request.use).toHaveBeenCalled();
            expect(mockAxiosInstance.interceptors.response.use).toHaveBeenCalled();
        });
    });

    describe('request', () => {
        const mockResponse = {
            data: { success: true },
            status: 200,
            statusText: 'OK',
            headers: { 'content-type': 'application/json' },
        };

        it('should make a successful request', async () => {
            mockAxiosInstance.request.mockResolvedValue(mockResponse);

            const result = await client.request({
                method: 'GET',
                url: '/test',
            });

            expect(result).toEqual({
                data: { success: true },
                status: 200,
                statusText: 'OK',
                headers: { 'content-type': 'application/json' },
            });

            expect(mockAxiosInstance.request).toHaveBeenCalledWith({
                method: 'GET',
                url: '/test',
                headers: {},
            });
        });

        it('should handle request errors', async () => {
            const error = new Error('Request failed');
            mockAxiosInstance.request.mockRejectedValue(error);

            await expect(
                client.request({
                    method: 'GET',
                    url: '/test',
                })
            ).rejects.toThrow();
        });
    });

    describe('get', () => {
        it('should make GET request', async () => {
            const mockResponse = {
                data: { result: 'test' },
                status: 200,
                statusText: 'OK',
                headers: {},
            };
            mockAxiosInstance.request.mockResolvedValue(mockResponse);

            const result = await client.get(
                '/test',
                { param: 'value' },
                { 'Custom-Header': 'value' }
            );

            expect(mockAxiosInstance.request).toHaveBeenCalledWith({
                method: 'GET',
                url: '/test',
                params: { param: 'value' },
                headers: { 'Custom-Header': 'value' },
                data: undefined,
                timeout: undefined,
            });

            expect(result).toEqual(mockResponse);
        });
    });

    describe('post', () => {
        it('should make POST request', async () => {
            const mockResponse = {
                data: { result: 'test' },
                status: 200,
                statusText: 'OK',
                headers: {},
            };
            mockAxiosInstance.request.mockResolvedValue(mockResponse);

            const result = await client.post(
                '/test',
                { data: 'value' },
                { 'Custom-Header': 'value' }
            );

            expect(mockAxiosInstance.request).toHaveBeenCalledWith({
                method: 'POST',
                url: '/test',
                data: { data: 'value' },
                headers: { 'Custom-Header': 'value' },
                params: undefined,
                timeout: undefined,
            });

            expect(result).toEqual(mockResponse);
        });
    });

    describe('utility methods', () => {
        it('should get masked API key', () => {
            const apiKey = client.getApiKey();
            expect(apiKey).toBe('test...6789');
        });

        it('should get base URL', () => {
            const baseUrl = client.getBaseUrl();
            expect(baseUrl).toBe('https://api.cufinder.io/v2');
        });

        it('should update API key', () => {
            client.setApiKey('new-api-key');
            expect(mockAxiosInstance.defaults.headers['x-api-key']).toBe('new-api-key');
        });

        it('should update base URL', () => {
            client.setBaseUrl('https://new.api.com');
            expect(mockAxiosInstance.defaults.baseURL).toBe('https://new.api.com');
        });

        it('should update timeout', () => {
            client.setTimeout(45000);
            expect(mockAxiosInstance.defaults.timeout).toBe(45000);
        });

        it('should throw error for empty API key', () => {
            expect(() => {
                client.setApiKey('');
            }).toThrow('API key cannot be empty');
        });
    });
});
