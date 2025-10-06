import { NtpV1 } from '../../../src/services/v1/ntp';
import { CufinderClient } from '../../../src/client';
import { NtpV1Response } from '../../../src/shared/types';

jest.mock('../../../src/client');

describe('NtpV1', () => {
  let service: NtpV1;
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

    service = new NtpV1(mockClient);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('getPhones', () => {
    const mockResponse: NtpV1Response = {
      query: 'TechCorp',
      credit_count: 1,
      meta_data: {
        user_id: 123,
        service_name: 'ntp',
        spent_time: 170,
        query_log: 'test-log'
      },
      phone: '+1-555-123-4567'
    };

    const validParams = {
      api_key: 'test-api-key',
      company_name: 'TechCorp'
    };

    it('should successfully get phone', async () => {
      mockClient.post.mockResolvedValue({ 
        data: mockResponse, 
        status: 200, 
        statusText: "OK", 
        headers: {} 
      });

      const result = await service.getPhones(validParams);

      expect(result).toEqual(mockResponse);
      expect(mockClient.post).toHaveBeenCalledWith('/ntp', {
        apiKey: validParams.api_key,
        companyName: validParams.company_name
      });
    });

    it('should throw error for missing api_key', async () => {
      const invalidParams = { ...validParams, api_key: '' };

      await expect(service.getPhones(invalidParams)).rejects.toThrow(
        'API key is required and must be a non-empty string'
      );
    });

    it('should throw error for missing company_name', async () => {
      const invalidParams = { ...validParams, company_name: '' };

      await expect(service.getPhones(invalidParams)).rejects.toThrow(
        'Parameter \'company_name\' is required'
      );
    });

    it('should handle client errors', async () => {
      const error = new Error('Network error');
      mockClient.post.mockRejectedValue(error);

      await expect(service.getPhones(validParams)).rejects.toThrow('Network error');
    });
  });
});
