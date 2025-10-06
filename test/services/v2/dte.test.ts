import { DteV2 } from '../../../src/services/v2/dte';
import { CufinderClient } from '../../../src/client';
import { DteV2Response } from '../../../src/shared/types';

jest.mock('../../../src/client');

describe('DteV2', () => {
  let service: DteV2;
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

    service = new DteV2(mockClient);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('getEmails', () => {
    const mockResponse: DteV2Response = {
      query: 'https://example.com',
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
      company_website: 'https://example.com'
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
      expect(mockClient.post).toHaveBeenCalledWith('/v2/dte', {
        company_website: validParams.company_website.trim()
      });
    });

    it('should throw error for missing company_website', async () => {
      const invalidParams = { ...validParams, company_website: '' };

      await expect(service.getEmails(invalidParams)).rejects.toThrow(
        'Parameter \'company_website\' is required'
      );
    });

    it('should throw error for invalid website URL format', async () => {
      const invalidParams = { ...validParams, company_website: 'invalid-url' };

      await expect(service.getEmails(invalidParams)).rejects.toThrow(
        'Invalid website URL format'
      );
    });

    it('should accept valid URL', async () => {
      mockClient.post.mockResolvedValue({ 
        data: mockResponse, 
        status: 200, 
        statusText: "OK", 
        headers: {} 
      });
      const params = { company_website: '  https://example.com  ' };

      await service.getEmails(params);

      expect(mockClient.post).toHaveBeenCalledWith('/v2/dte', {
        company_website: 'https://example.com'
      });
    });

    it('should handle client errors', async () => {
      const error = new Error('Network error');
      mockClient.post.mockRejectedValue(error);

      await expect(service.getEmails(validParams)).rejects.toThrow('Network error');
    });
  });
});
