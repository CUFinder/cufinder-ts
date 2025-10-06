import { LcufV1 } from '../../../src/services/v1/lcuf';
import { CufinderClient } from '../../../src/client';
import { LcufV1Response } from '../../../src/shared/types';

jest.mock('../../../src/client');

describe('LcufV1', () => {
  let service: LcufV1;
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

    service = new LcufV1(mockClient);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('getLinkedInUrl', () => {
    const mockResponse: LcufV1Response = {
      query: 'TechCorp',
      credit_count: 1,
      meta_data: {
        user_id: 123,
        service_name: 'lcuf',
        spent_time: 180,
        query_log: 'test-log'
      },
      linkedin_url: 'https://linkedin.com/company/techcorp'
    };

    const validParams = {
      api_key: 'test-api-key',
      company_name: 'TechCorp'
    };

    it('should successfully get LinkedIn URL', async () => {
      mockClient.post.mockResolvedValue({ 
        data: mockResponse, 
        status: 200, 
        statusText: "OK", 
        headers: {} 
      });

      const result = await service.getLinkedInUrl(validParams);

      expect(result).toEqual(mockResponse);
      expect(mockClient.post).toHaveBeenCalledWith('/lcuf', {
        apiKey: validParams.api_key,
        companyName: validParams.company_name
      });
    });

    it('should throw error for missing api_key', async () => {
      const invalidParams = { ...validParams, api_key: '' };

      await expect(service.getLinkedInUrl(invalidParams)).rejects.toThrow(
        'API key is required and must be a non-empty string'
      );
    });

    it('should throw error for missing company_name', async () => {
      const invalidParams = { ...validParams, company_name: '' };

      await expect(service.getLinkedInUrl(invalidParams)).rejects.toThrow(
        'Parameter \'company_name\' is required'
      );
    });

    it('should handle client errors', async () => {
      const error = new Error('Network error');
      mockClient.post.mockRejectedValue(error);

      await expect(service.getLinkedInUrl(validParams)).rejects.toThrow('Network error');
    });
  });
});
