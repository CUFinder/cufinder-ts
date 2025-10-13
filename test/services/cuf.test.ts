import { Cuf } from '../../src/services/cuf';
import { BaseApiClient } from '../../src/base_api_client';
import { CufResponse } from '../../src/shared/types';

jest.mock('../../src/base_api_client');

describe('Cuf', () => {
    let service: Cuf;
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

        service = new Cuf(mockClient);
    });

    afterEach(() => {
        jest.clearAllMocks();
    });

    describe('getDomain', () => {
        const mockResponse: CufResponse = {
            query: 'TechCorp',
            credit_count: 1,
            meta_data: {
                user_id: 123,
                service_name: 'cuf',
                spent_time: 150,
                query_log: 'test-log',
            },
            domain: 'techcorp.com',
        };

        const validParams = {
            company_name: 'TechCorp',
            country_code: 'US',
        };

        it('should successfully get domain', async () => {
            mockClient.post.mockResolvedValue({
                data: mockResponse,
                status: 200,
                statusText: 'OK',
                headers: {},
            });

            const result = await service.getDomain(validParams);

            expect(result).toEqual(mockResponse);
            expect(mockClient.post).toHaveBeenCalledWith('/cuf', {
                company_name: validParams.company_name.trim(),
                country_code: validParams.country_code.trim().toUpperCase(),
            });
        });

        it('should throw error for missing company_name', async () => {
            const invalidParams = { ...validParams, company_name: '' };

            await expect(service.getDomain(invalidParams)).rejects.toThrow(
                "Parameter 'company_name' is required"
            );
        });

        it('should throw error for missing country_code', async () => {
            const invalidParams = { ...validParams, country_code: '' };

            await expect(service.getDomain(invalidParams)).rejects.toThrow(
                "Parameter 'country_code' is required"
            );
        });

        it('should throw error for invalid country code format', async () => {
            const invalidParams = { ...validParams, country_code: 'USA' };

            await expect(service.getDomain(invalidParams)).rejects.toThrow(
                'Country code must be a valid 2-letter ISO 3166-1 alpha-2 code'
            );
        });

        it('should accept valid 2-letter country code', async () => {
            mockClient.post.mockResolvedValue({
                data: mockResponse,
                status: 200,
                statusText: 'OK',
                headers: {},
            });
            const params = { company_name: 'TechCorp', country_code: 'gb' };

            await service.getDomain(params);

            expect(mockClient.post).toHaveBeenCalledWith('/cuf', {
                company_name: 'TechCorp',
                country_code: 'GB',
            });
        });

        it('should handle client errors', async () => {
            const error = new Error('Network error');
            mockClient.post.mockRejectedValue(error);

            await expect(service.getDomain(validParams)).rejects.toThrow('Network error');
        });
    });
});
