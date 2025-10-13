import { EncService } from '../../lib/services/enc';
import { BaseApiClient } from '../../lib/base_api_client';
import { EncResponse } from '../../lib/shared/types';

jest.mock('../../lib/base_api_client');

describe('Enc', () => {
    let service: Enc;
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

        service = new EncService(mockClient);
    });

    afterEach(() => {
        jest.clearAllMocks();
    });

    describe('service methods', () => {
        const mockResponse: EncResponse = {
            query: 'test-query',
            credit_count: 1,
            meta_data: {
                user_id: 123,
                service_name: 'enc',
                spent_time: 200,
                query_log: 'test-log',
            },
            company: {
                mng_id: '1234567890',
                name: 'Test Company',
                website: 'https://example.com',
                domain: 'example.com',
                industry: 'Technology',
                overview: 'A technology company',
                logo: 'https://example.com/logo.png',
                founded_date: '2020-01-01',
                annual_revenue: '1000000',
                followers: 1000,
                is_school: false,
                is_investor: false,
                has_email: true,
                has_phone: true,
                suggesstions: ['Test Suggestion'],
                locations: [],
                technologies: [],
                affiliated_pages: [],
                specialties: [],
                employees: { range: '1-10', count: 5 },
                main_location: {
                    country: 'US',
                    state: 'CA',
                    city: 'San Francisco',
                    address: '123 Tech St',
                    geo: '1234567890',
                    continent: 'North America',
                    postal_code: '12345',
                },
                geo_location: { google_maps_id: '1234567890', rating: 4.5, reviews_count: 100 },
                industry_details: {},
                funding: {
                    rounds: 'Series A',
                    organization: 'Test Organization',
                    number_of_rounds: 1,
                    number_of_other_investors: 0,
                    last_round_type: 'Series A',
                    last_round_money_raised_amount_currency_code: 'USD',
                    last_round_money_raised_amount: '1000000',
                    last_round_investors: 'Test Investors',
                    last_round_founding_url: 'https://example.com',
                    updated_at: '2020-01-01',
                },
                social: {
                    linkedin: 'https://linkedin.com/company/test',
                    twitter: 'https://twitter.com/test',
                    facebook: 'https://facebook.com/test',
                    youtube: 'https://youtube.com/test',
                    instagram: 'https://instagram.com/test',
                },
                connections: { emails: ['test@example.com'], phones: ['1234567890'] },
            },
        };

        const validParams = {
            // Add appropriate test parameters based on service
        };

        it('should handle successful requests', async () => {
            mockClient.post.mockResolvedValue({
                data: mockResponse,
                status: 200,
                statusText: 'OK',
                headers: {},
            });

            // Add appropriate method call based on service
            // const result = await service.methodName(validParams);
            // expect(result).toEqual(mockResponse);
        });

        it('should handle client errors', async () => {
            const error = new Error('Network error');
            mockClient.post.mockRejectedValue(error);

            // await expect(service.methodName(validParams)).rejects.toThrow('Network error');
        });
    });
});
