import { BaseApiClient } from '../lib/base_api_client';
import { Cufinder } from '../lib/client';

// Mock the base API client
jest.mock('../lib/base_api_client');

describe('Cufinder', () => {
    let client: Cufinder;
    let mockBaseClient: jest.Mocked<BaseApiClient>;

    beforeEach(() => {
        mockBaseClient = {
            post: jest.fn(),
            get: jest.fn(),
            put: jest.fn(),
            delete: jest.fn(),
            patch: jest.fn(),
            getApiKey: jest.fn(),
            getBaseUrl: jest.fn(),
            setApiKey: jest.fn(),
            setTimeout: jest.fn(),
        } as any;

        (BaseApiClient as jest.Mock).mockImplementation(() => mockBaseClient);

        client = new Cufinder('test-api-key');
    });

    afterEach(() => {
        jest.clearAllMocks();
    });

    describe('constructor', () => {
        it('should initialize with correct config', () => {
            expect(BaseApiClient).toHaveBeenCalledWith({
                apiKey: 'test-api-key',
            });
        });

        it('should initialize all services', () => {
            expect(client.cuf).toBeDefined();
            expect(client.lcuf).toBeDefined();
            expect(client.dtc).toBeDefined();
            expect(client.dte).toBeDefined();
            expect(client.ntp).toBeDefined();
            expect(client.rel).toBeDefined();
            expect(client.fcl).toBeDefined();
            expect(client.elf).toBeDefined();
            expect(client.car).toBeDefined();
            expect(client.fcc).toBeDefined();
            expect(client.fts).toBeDefined();
            expect(client.epp).toBeDefined();
            expect(client.fwe).toBeDefined();
            expect(client.tep).toBeDefined();
            expect(client.enc).toBeDefined();
            expect(client.cec).toBeDefined();
            expect(client.clo).toBeDefined();
            expect(client.cse).toBeDefined();
            expect(client.pse).toBeDefined();
            expect(client.lbs).toBeDefined();
        });
    });

    describe('getClient', () => {
        it('should return the underlying client', () => {
            const baseClient = client.getClient();
            expect(baseClient).toBe(mockBaseClient);
        });
    });

    describe('service integration', () => {
        it('should allow calling services as direct functions', () => {
            expect(client.cuf).toBeDefined();
            expect(client.lcuf).toBeDefined();
            expect(client.dtc).toBeDefined();
            expect(client.dte).toBeDefined();
            expect(client.ntp).toBeDefined();
            expect(client.rel).toBeDefined();
            expect(client.cse).toBeDefined();
            expect(client.pse).toBeDefined();

            // Test that they are functions
            expect(client.cuf).toBeDefined();
            expect(client.lcuf).toBeDefined();
            expect(client.dtc).toBeDefined();
            expect(client.dte).toBeDefined();
            expect(client.ntp).toBeDefined();
            expect(client.rel).toBeDefined();
            expect(client.cse).toBeDefined();
            expect(client.pse).toBeDefined();
            expect(client.fcl).toBeDefined();
            expect(client.elf).toBeDefined();
            expect(client.car).toBeDefined();
            expect(client.fcc).toBeDefined();
            expect(client.fts).toBeDefined();
            expect(client.epp).toBeDefined();
            expect(client.fwe).toBeDefined();
            expect(client.tep).toBeDefined();
            expect(client.enc).toBeDefined();
            expect(client.cec).toBeDefined();
            expect(client.clo).toBeDefined();
            expect(client.lbs).toBeDefined();

            // Test that they are functions
            expect(typeof client.cuf).toBe('function');
            expect(typeof client.lcuf).toBe('function');
            expect(typeof client.dtc).toBe('function');
            expect(typeof client.dte).toBe('function');
            expect(typeof client.ntp).toBe('function');
            expect(typeof client.rel).toBe('function');
            expect(typeof client.cse).toBe('function');
            expect(typeof client.pse).toBe('function')
            expect(typeof client.fcl).toBe('function');
            expect(typeof client.elf).toBe('function');
            expect(typeof client.car).toBe('function');
            expect(typeof client.fcc).toBe('function');
            expect(typeof client.fts).toBe('function');
            expect(typeof client.epp).toBe('function');
            expect(typeof client.fwe).toBe('function');
            expect(typeof client.tep).toBe('function');
            expect(typeof client.enc).toBe('function');
            expect(typeof client.cec).toBe('function');
            expect(typeof client.clo).toBe('function');
            expect(typeof client.lbs).toBe('function');
        });
    });
});
