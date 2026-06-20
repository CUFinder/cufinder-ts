import { BaseApiClient } from '../../lib/base_api_client';
import { CjaService } from '../../lib/services/cja';
import { CjaResponse } from '../../lib/shared/types';

jest.mock('../../lib/base_api_client');

describe('CJA', () => {
    let service: CjaService;
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

        service = new CjaService(mockClient);
    });

    afterEach(() => {
        jest.clearAllMocks();
    });

    describe('searchCompanyJobs', () => {
        const mockResponse: CjaResponse = {
            query: 'Google',
            credit_count: 2,
            jobs: [
                {
                    company: {
                        name: 'Google',
                        industry: 'Technology',
                        website: 'google.com',
                        linkedin: 'linkedin.com/company/google',
                        followers_count: 1000000,
                        employees: { range: '10001+' },
                        founded_date: '1998',
                        annual_revenue: '$100B+',
                        funding_amount: 0,
                        main_location: {
                            country: 'United States',
                            state: 'California',
                            city: 'Mountain View',
                        },
                    },
                    job: {
                        job_id: '123',
                        title: 'Software Engineer',
                        url: 'linkedin.com/jobs/123',
                        location: 'Mountain View, CA',
                        posted_at: '2024-01-15',
                        posted_at_text: '2 days ago',
                    },
                },
            ],
        };

        it('should successfully search company jobs', async () => {
            mockClient.post.mockResolvedValue({
                data: { status: 1, data: mockResponse },
                status: 200,
                statusText: 'OK',
                headers: {},
            });

            const result = await service.searchCompanyJobs({ name: 'Google' });

            expect(result).toEqual(mockResponse);
            expect(mockClient.post).toHaveBeenCalledWith('/cja', {
                name: 'Google',
            });
        });

        it('should send all provided parameters', async () => {
            mockClient.post.mockResolvedValue({
                data: { status: 1, data: mockResponse },
                status: 200,
                statusText: 'OK',
                headers: {},
            });

            await service.searchCompanyJobs({
                name: 'Google',
                country: 'US',
                industry: 'Technology',
                page: 1,
            });

            expect(mockClient.post).toHaveBeenCalledWith('/cja', {
                name: 'Google',
                country: 'US',
                industry: 'Technology',
                page: 1,
            });
        });

        it('should send empty params when called with no arguments', async () => {
            mockClient.post.mockResolvedValue({
                data: { status: 1, data: mockResponse },
                status: 200,
                statusText: 'OK',
                headers: {},
            });

            await service.searchCompanyJobs();

            expect(mockClient.post).toHaveBeenCalledWith('/cja', {});
        });

        it('should handle client errors', async () => {
            const error = new Error('Network error');
            mockClient.post.mockRejectedValue(error);

            await expect(service.searchCompanyJobs({ name: 'Google' })).rejects.toThrow(
                'Network error'
            );
        });
    });
});
