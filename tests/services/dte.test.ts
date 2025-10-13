import { BaseApiClient } from '../../lib/base_api_client';
import { DteService } from '../../lib/services/dte';
import { DteResponse } from '../../lib/shared/types';

jest.mock('../../lib/base_api_client');

describe('Dte', () => {
    let service: Dte;
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

        service = new DteService(mockClient);
    });

    afterEach(() => {
        jest.clearAllMocks();
    });

    describe('getEmails', () => {
        const mockResponse: DteResponse = {
            query: 'https://example.com',
            credit_count: 1,
            meta_data: {
                user_id: 123,
                service_name: 'dte',
                spent_time: 200,
                query_log: 'test-log',
            },
            emails: ['contact@example.com', 'info@example.com'],
        };

        const validParams = {
            company_website: 'https://example.com',
        };

        it('should successfully get emails', async () => {
            mockClient.post.mockResolvedValue({
                data: mockResponse,
                status: 200,
                statusText: 'OK',
                headers: {},
            });

            const result = await service.getEmails(validParams.company_website);

            expect(result).toEqual(mockResponse);
            expect(mockClient.post).toHaveBeenCalledWith('/dte', {
                company_website: validParams.company_website.trim(),
            });
        });

        it('should accept valid URL', async () => {
            mockClient.post.mockResolvedValue({
                data: mockResponse,
                status: 200,
                statusText: 'OK',
                headers: {},
            });
            await service.getEmails('  https://example.com  ');

            expect(mockClient.post).toHaveBeenCalledWith('/dte', {
                company_website: 'https://example.com',
            });
        });

        it('should handle client errors', async () => {
            const error = new Error('Network error');
            mockClient.post.mockRejectedValue(error);

            await expect(service.getEmails(validParams.company_website)).rejects.toThrow(
                'Network error'
            );
        });
    });
});
