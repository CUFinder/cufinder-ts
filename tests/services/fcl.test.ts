import { Fcl } from '../../lib/services/fcl';
import { BaseApiClient } from "../../lib/base_api_client";
import { FclResponse } from '../../lib/shared/types';

jest.mock("../../lib/base_api_client");

describe('Fcl', () => {
    let service: Fcl;
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

        service = new Fcl(mockClient);
    });

    afterEach(() => {
        jest.clearAllMocks();
    });

    describe('service methods', () => {
        const mockResponse: FclResponse = {
            query: 'test-query',
            credit_count: 1,
            meta_data: {
                user_id: 123,
                service_name: 'fcl',
                spent_time: 200,
                query_log: 'test-log',
            },
            lookalikes: [],
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
