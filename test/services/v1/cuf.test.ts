import { CufV1 } from '../../../src/services/v1/cuf';
import { CufinderClient } from '../../../src/client';
import { CufV1Response } from '../../../src/shared/types';

// Mock the client
jest.mock('../../../src/client');

describe('CufV1', () => {
  let service: CufV1;
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

    service = new CufV1(mockClient);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('getDomain', () => {
    const mockResponse: CufV1Response = {
      query: 'TechCorp',
      credit_count: 1,
      meta_data: {
        user_id: 123,
        service_name: 'cuf',
        spent_time: 150,
        query_log: 'test-log'
      },
      domain: 'techcorp.com'
    };

    const validParams = {
      api_key: 'test-api-key',
      company_name: 'TechCorp'
    };

    it('should successfully get domain', async () => {
      mockClient.post.mockResolvedValue({ 
        data: mockResponse,
        status: 200,
        statusText: 'OK',
        headers: {}
      });

      const result = await service.getDomain(validParams);

      expect(result).toEqual(mockResponse);
      expect(mockClient.post).toHaveBeenCalledWith('/cuf', {
        apiKey: validParams.api_key,
        companyName: validParams.company_name
      });
    });

    it('should throw error for missing api_key', async () => {
      const invalidParams = { ...validParams, api_key: '' };

      await expect(service.getDomain(invalidParams)).rejects.toThrow(
        'API key is required and must be a non-empty string'
      );
    });

    it('should throw error for missing company_name', async () => {
      const invalidParams = { ...validParams, company_name: '' };

      await expect(service.getDomain(invalidParams)).rejects.toThrow(
        'Parameter \'company_name\' is required'
      );
    });

    it('should handle client errors', async () => {
      const error = new Error('Network error');
      mockClient.post.mockRejectedValue(error);

      await expect(service.getDomain(validParams)).rejects.toThrow('Network error');
    });

    it('should handle HTTP errors', async () => {
      const httpError = {
        response: {
          status: 400,
          data: { message: 'Bad request' }
        }
      };
      mockClient.post.mockRejectedValue(httpError);

      await expect(service.getDomain(validParams)).rejects.toThrow();
    });
  });
});
