import { CufinderClient } from '../src/client';
import { BaseService } from '../src/services/base';
import { CufinderError } from '../src/shared/types';

/**
 * Mock class for testing BaseService functionality
 */
class MockService extends BaseService {
    public async testMethod() {
        return { success: true };
    }
}

describe('BaseService', () => {
    let mockClient: jest.Mocked<CufinderClient>;
    let service: MockService;

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

        service = new MockService(mockClient);
    });

    describe('validateRequired', () => {
        it('should throw error for undefined value', () => {
            expect(() => {
                (service as any).validateRequired(undefined, 'testParam');
            }).toThrow("Parameter 'testParam' is required");
        });

        it('should throw error for null value', () => {
            expect(() => {
                (service as any).validateRequired(null, 'testParam');
            }).toThrow("Parameter 'testParam' is required");
        });

        it('should throw error for empty string', () => {
            expect(() => {
                (service as any).validateRequired('', 'testParam');
            }).toThrow("Parameter 'testParam' is required");
        });

        it('should not throw for valid value', () => {
            expect(() => {
                (service as any).validateRequired('valid', 'testParam');
            }).not.toThrow();
        });
    });

    describe('validateApiKey', () => {
        it('should throw error for undefined api key', () => {
            expect(() => {
                (service as any).validateApiKey(undefined);
            }).toThrow('API key is required and must be a non-empty string');
        });

        it('should throw error for empty api key', () => {
            expect(() => {
                (service as any).validateApiKey('');
            }).toThrow('API key is required and must be a non-empty string');
        });

        it('should throw error for whitespace-only api key', () => {
            expect(() => {
                (service as any).validateApiKey('   ');
            }).toThrow('API key is required and must be a non-empty string');
        });

        it('should not throw for valid api key', () => {
            expect(() => {
                (service as any).validateApiKey('valid-api-key');
            }).not.toThrow();
        });
    });

    describe('handleError', () => {
        it('should return CufinderError as-is', () => {
            const error = new CufinderError('Test error', 'TEST_ERROR');

            const result = (service as any).handleError(error, 'TestService');
            expect(result).toBe(error);
        });

        it('should handle HTTP errors', () => {
            const error = {
                response: {
                    status: 400,
                    data: { message: 'Bad request' },
                },
            };

            const result = (service as any).handleError(error, 'TestService');
            expect(result.message).toContain('TestService: Bad request');
            expect(result.code).toBe('API_ERROR');
            expect(result.statusCode).toBe(400);
        });

        it('should handle network errors', () => {
            const error = {
                request: {},
            };

            const result = (service as any).handleError(error, 'TestService');
            expect(result.message).toContain('TestService: Network error');
            expect(result.code).toBe('NETWORK_ERROR');
        });

        it('should handle unknown errors', () => {
            const error = new Error('Unknown error');

            const result = (service as any).handleError(error, 'TestService');
            expect(result.message).toContain('TestService: Unknown error');
            expect(result.code).toBe('UNKNOWN_ERROR');
        });
    });
});
