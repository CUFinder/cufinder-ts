import { DtcV1 } from '../../../src/services/v1/dtc';
import { CufinderClient } from '../../../src/client';
import { DtcV1Response } from '../../../src/shared/types';

jest.mock('../../../src/client');

describe('DtcV1', () => {
  let service: DtcV1;
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

    service = new DtcV1(mockClient);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('getCompanyName', () => {
    const mockResponse: DtcV1Response = {
      query: 'https://techcorp.com',
      credit_count: 1,
      meta_data: {
        user_id: 123,
        service_name: 'dtc',
        spent_time: 160,
        query_log: 'test-log'
      },
      company_name: 'TechCorp Inc.'
    };

    const validParams = {
      api_key: 'test-api-key',
      company_website: 'https://techcorp.com'
    };

    it('should successfully get company name', async () => {
      mockClient.post.mockResolvedValue({ 
        data: mockResponse, 
        status: 200, 
        statusText: "OK", 
        headers: {} 
      });

      const result = await service.getCompanyName(validParams);

      expect(result).toEqual(mockResponse);
      expect(mockClient.post).toHaveBeenCalledWith('/dtc', {
        apiKey: validParams.api_key,
        companyWebsite: validParams.company_website
      });
    });

    it('should throw error for missing api_key', async () => {
      const invalidParams = { ...validParams, api_key: '' };

      await expect(service.getCompanyName(invalidParams)).rejects.toThrow(
        'API key is required and must be a non-empty string'
      );
    });

    it('should throw error for missing company_website', async () => {
      const invalidParams = { ...validParams, company_website: '' };

      await expect(service.getCompanyName(invalidParams)).rejects.toThrow(
        'Parameter \'company_website\' is required'
      );
    });

    it('should handle client errors', async () => {
      const error = new Error('Network error');
      mockClient.post.mockRejectedValue(error);

      await expect(service.getCompanyName(validParams)).rejects.toThrow('Network error');
    });
  });
});
