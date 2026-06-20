import { BaseApiClient } from '../../lib/base_api_client';
import { CaaService } from '../../lib/services/caa';
import { CaaResponse } from '../../lib/shared/types';

jest.mock('../../lib/base_api_client');

describe('CAA', () => {
    let service: CaaService;
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

        service = new CaaService(mockClient);
    });

    afterEach(() => {
        jest.clearAllMocks();
    });

    describe('getCompanyActivities', () => {
        const mockResponse: CaaResponse = {
            query: 'TechCorp',
            credit_count: 2,
            activities: [
                { type: 'hiring', description: 'Hiring 50 engineers' },
                { type: 'funding', description: 'Raised $10M Series A' },
            ],
        };

        it('should successfully get company activities', async () => {
            mockClient.post.mockResolvedValue({
                data: { status: 1, data: mockResponse },
                status: 200,
                statusText: 'OK',
                headers: {},
            });

            const result = await service.getCompanyActivities({ query: 'TechCorp' });

            expect(result).toEqual(mockResponse);
            expect(mockClient.post).toHaveBeenCalledWith('/caa', {
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

            await service.getCompanyActivities({ query: 'TechCorp', page: 2 });

            expect(mockClient.post).toHaveBeenCalledWith('/caa', {
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

            await service.getCompanyActivities({ query: '  TechCorp  ' });

            expect(mockClient.post).toHaveBeenCalledWith('/caa', {
                query: 'TechCorp',
                page: undefined,
            });
        });

        it('should handle client errors', async () => {
            const error = new Error('Network error');
            mockClient.post.mockRejectedValue(error);

            await expect(service.getCompanyActivities({ query: 'TechCorp' })).rejects.toThrow(
                'Network error'
            );
        });
    });
});
