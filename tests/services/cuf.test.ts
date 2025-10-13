import { CufService } from '../../lib/services/cuf';
import { BaseApiClient } from '../../lib/base_api_client';
import { CufResponse } from '../../lib/shared/types';

jest.mock('../../lib/base_api_client');

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

        service = new CufService(mockClient);
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

            const result = await service.getDomain(
                validParams.company_name,
                validParams.country_code
            );

            expect(result).toEqual(mockResponse);
            expect(mockClient.post).toHaveBeenCalledWith('/cuf', {
                company_name: validParams.company_name.trim(),
                country_code: validParams.country_code.trim().toUpperCase(),
            });
        });

        it('should accept valid 2-letter country code', async () => {
            mockClient.post.mockResolvedValue({
                data: mockResponse,
                status: 200,
                statusText: 'OK',
                headers: {},
            });
            await service.getDomain('TechCorp', 'gb');

            expect(mockClient.post).toHaveBeenCalledWith('/cuf', {
                company_name: 'TechCorp',
                country_code: 'GB',
            });
        });

        it('should handle client errors', async () => {
            const error = new Error('Network error');
            mockClient.post.mockRejectedValue(error);

            await expect(
                service.getDomain(validParams.company_name, validParams.country_code)
            ).rejects.toThrow('Network error');
        });
    });
});
