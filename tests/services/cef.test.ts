import { BaseApiClient } from '../../lib/base_api_client';
import { CefService } from '../../lib/services/cef';
import { CefResponse } from '../../lib/shared/types';

jest.mock('../../lib/base_api_client');

describe('CEF', () => {
    let service: CefService;
    let mockClient: jest.Mocked<BaseApiClient>;

    beforeEach(() => {
        mockClient = {
            post: jest.fn(),
            get: jest.fn(),
            put: jest.fn(),
            delete: jest.fn(),
            patch: jest.fn(),
            getApiKey: jest.fn(),
            getBaseUrl: jest.fn(),
            setApiKey: jest.fn(),
            setBaseUrl: jest.fn(),
            setTimeout: jest.fn(),
        } as any;

        service = new CefService(mockClient);
    });

    afterEach(() => {
        jest.clearAllMocks();
    });

    describe('findCompanyEmployees', () => {
        const mockResponse: CefResponse = {
            query: 'TechCorp',
            credit_count: 2,
            employees: [
                { name: 'John Doe', title: 'Engineer' },
                { name: 'Jane Smith', title: 'Designer' },
            ],
        };

        it('should successfully find company employees', async () => {
            mockClient.post.mockResolvedValue({
                data: { status: 1, data: mockResponse },
                status: 200,
                statusText: 'OK',
                headers: {},
            });

            const result = await service.findCompanyEmployees({ query: 'TechCorp' });

            expect(result).toEqual(mockResponse);
            expect(mockClient.post).toHaveBeenCalledWith('/cef', {
                query: 'TechCorp',
                page: undefined,
            });
        });

        it('should send page parameter when provided', async () => {
            mockClient.post.mockResolvedValue({
                data: { status: 1, data: mockResponse },
                status: 200,
                statusText: 'OK',
                headers: {},
            });

            await service.findCompanyEmployees({ query: 'TechCorp', page: 2 });

            expect(mockClient.post).toHaveBeenCalledWith('/cef', {
                query: 'TechCorp',
                page: 2,
            });
        });

        it('should trim query parameter', async () => {
            mockClient.post.mockResolvedValue({
                data: { status: 1, data: mockResponse },
                status: 200,
                statusText: 'OK',
                headers: {},
            });

            await service.findCompanyEmployees({ query: '  TechCorp  ' });

            expect(mockClient.post).toHaveBeenCalledWith('/cef', {
                query: 'TechCorp',
                page: undefined,
            });
        });

        it('should handle client errors', async () => {
            const error = new Error('Network error');
            mockClient.post.mockRejectedValue(error);

            await expect(service.findCompanyEmployees({ query: 'TechCorp' })).rejects.toThrow(
                'Network error'
            );
        });
    });
});
