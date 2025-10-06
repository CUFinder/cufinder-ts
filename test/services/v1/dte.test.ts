import { DteV1 } from '../../../src/services/v1/dte';
import { CufinderClient } from '../../../src/client';
import { DteV1Response } from '../../../src/shared/types';

jest.mock('../../../src/client');

describe('DteV1', () => {
  let service: DteV1;
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

    service = new DteV1(mockClient);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('getEmails', () => {
    const mockResponse: DteV1Response = {
      query: 'example.com',
      credit_count: 1,
      meta_data: {
        user_id: 123,
        service_name: 'dte',
        spent_time: 200,
        query_log: 'test-log'
      },
      emails: ['contact@example.com', 'info@example.com']
    };

    const validParams = {
      api_key: 'test-api-key',
      company_domain: 'example.com'
    };

    it('should successfully get emails', async () => {
      mockClient.post.mockResolvedValue({ 
        data: mockResponse, 
        status: 200, 
        statusText: "OK", 
        headers: {} 
      });

      const result = await service.getEmails(validParams);

      expect(result).toEqual(mockResponse);
      expect(mockClient.post).toHaveBeenCalledWith('/dte', {
        apiKey: validParams.api_key,
        companyDomain: validParams.company_domain
      });
    });

    it('should throw error for missing api_key', async () => {
      const invalidParams = { ...validParams, api_key: '' };

      await expect(service.getEmails(invalidParams)).rejects.toThrow(
        'API key is required and must be a non-empty string'
      );
    });

    it('should throw error for missing company_domain', async () => {
      const invalidParams = { ...validParams, company_domain: '' };

      await expect(service.getEmails(invalidParams)).rejects.toThrow(
        'Parameter \'company_domain\' is required'
      );
    });

    it('should handle client errors', async () => {
      const error = new Error('Network error');
      mockClient.post.mockRejectedValue(error);

      await expect(service.getEmails(validParams)).rejects.toThrow('Network error');
    });
  });
});
