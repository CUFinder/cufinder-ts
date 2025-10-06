import { CseV2 } from '../../../src/services/v2/cse';
import { CufinderClient } from '../../../src/client';
import { CseV2Response } from '../../../src/shared/types';

jest.mock('../../../src/client');

describe('CseV2', () => {
  let service: CseV2;
  let mockClient: jest.Mocked<CufinderClient>;

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

    service = new CseV2(mockClient);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('searchCompanies', () => {
    const mockResponse: CseV2Response = {
      query: 'technology',
      credit_count: 1,
      meta_data: {
        user_id: 123,
        service_name: 'cse',
        spent_time: 300,
        query_log: 'test-log'
      },
      companies: [
        {
          name: 'TechCorp',
          website: 'https://techcorp.com',
          domain: 'techcorp.com',
          employees: { range: '11-50', count: 25 },
          industry: 'Technology',
          overview: 'A technology company',
          type: 'Private',
          logo: 'https://logo.url',
          followers: 1000,
          main_location: {
            country: 'US',
            state: 'CA',
            city: 'San Francisco',
            address: '123 Tech St'
          },
          social: {
            facebook: 'https://facebook.com/techcorp',
            linkedin: 'https://linkedin.com/company/techcorp',
            twitter: 'https://twitter.com/techcorp'
          }
        }
      ],
      total_results: 1,
      page: 1
    };

    const validParams = {
      name: 'technology',
      country: 'US'
    };

    it('should successfully search companies with all parameters', async () => {
      mockClient.post.mockResolvedValue({ 
        data: mockResponse, 
        status: 200, 
        statusText: "OK", 
        headers: {} 
      });
      const params = {
        name: 'technology',
        country: 'US',
        state: 'CA',
        city: 'San Francisco',
        followers_count_min: 100,
        followers_count_max: 10000,
        industry: 'Technology',
        employee_size: '11-50',
        founded_after_year: 2020,
        founded_before_year: 2024,
        funding_amount_max: 1000000,
        funding_amount_min: 100000,
        products_services: ['software', 'ai'],
        is_school: false,
        annual_revenue_min: 1000000,
        annual_revenue_max: 10000000,
        page: 1
      };

      const result = await service.searchCompanies(params);

      expect(result).toEqual(mockResponse);
      expect(mockClient.post).toHaveBeenCalledWith('/v2/cse', params);
    });

    it('should successfully search companies with minimal parameters', async () => {
      mockClient.post.mockResolvedValue({ 
        data: mockResponse, 
        status: 200, 
        statusText: "OK", 
        headers: {} 
      });

      const result = await service.searchCompanies(validParams);

      expect(result).toEqual(mockResponse);
      expect(mockClient.post).toHaveBeenCalledWith('/v2/cse', validParams);
    });

    it('should successfully search companies with no parameters', async () => {
      mockClient.post.mockResolvedValue({ 
        data: mockResponse, 
        status: 200, 
        statusText: "OK", 
        headers: {} 
      });

      const result = await service.searchCompanies();

      expect(result).toEqual(mockResponse);
      expect(mockClient.post).toHaveBeenCalledWith('/v2/cse', {});
    });

    it('should handle client errors', async () => {
      const error = new Error('Network error');
      mockClient.post.mockRejectedValue(error);

      await expect(service.searchCompanies(validParams)).rejects.toThrow('Network error');
    });

    it('should filter out undefined parameters', async () => {
      mockClient.post.mockResolvedValue({ 
        data: mockResponse, 
        status: 200, 
        statusText: "OK", 
        headers: {} 
      });
      const params = {
        name: 'technology',
        country: undefined,
        state: 'CA',
        city: undefined,
        page: 1
      };

      await service.searchCompanies(params);

      expect(mockClient.post).toHaveBeenCalledWith('/v2/cse', {
        name: 'technology',
        state: 'CA',
        page: 1
      });
    });
  });
});
