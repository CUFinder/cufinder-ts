import { BaseApiClient } from '../../lib/base_api_client';
import { NacService } from '../../lib/services/nac';
import { NacResponse } from '../../lib/shared/types';

jest.mock('../../lib/base_api_client');

describe('NAC', () => {
    let service: NacService;
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

        service = new NacService(mockClient);
    });

    afterEach(() => {
        jest.clearAllMocks();
    });

    describe('normalizeCompanyName', () => {
        const mockResponse: NacResponse = {
            query: 'acme llc',
            credit_count: 0,
            company: 'Acme LLC',
        };

        it('should successfully normalize company name', async () => {
            mockClient.post.mockResolvedValue({
                data: { status: 1, data: mockResponse },
                status: 200,
                statusText: 'OK',
                headers: {},
            });

            const result = await service.normalizeCompanyName('acme llc');

            expect(result).toEqual(mockResponse);
            expect(mockClient.post).toHaveBeenCalledWith('/nac', {
                company: 'acme llc',
            });
        });

        it('should trim company parameter', async () => {
            mockClient.post.mockResolvedValue({
                data: { status: 1, data: mockResponse },
                status: 200,
                statusText: 'OK',
                headers: {},
            });

            await service.normalizeCompanyName('  acme llc  ');

            expect(mockClient.post).toHaveBeenCalledWith('/nac', {
                company: 'acme llc',
            });
        });

        it('should handle client errors', async () => {
            const error = new Error('Network error');
            mockClient.post.mockRejectedValue(error);

            await expect(service.normalizeCompanyName('acme llc')).rejects.toThrow('Network error');
        });
    });
});
