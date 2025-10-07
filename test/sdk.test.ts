import { CufinderSDK } from '../src/sdk';
import { CufinderClient } from '../src/client';

// Mock the client
jest.mock('../src/client');

describe('CufinderSDK', () => {
    let sdk: CufinderSDK;
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

        (CufinderClient as jest.Mock).mockImplementation(() => mockClient);

        sdk = new CufinderSDK({
            apiKey: 'test-api-key',
        });
    });

    afterEach(() => {
        jest.clearAllMocks();
    });

    describe('constructor', () => {
        it('should initialize with correct config', () => {
            expect(CufinderClient).toHaveBeenCalledWith({
                apiKey: 'test-api-key',
            });
        });

        it('should initialize all services', () => {
            expect(sdk.cuf).toBeDefined();
            expect(sdk.lcuf).toBeDefined();
            expect(sdk.dtc).toBeDefined();
            expect(sdk.dte).toBeDefined();
            expect(sdk.ntp).toBeDefined();
            expect(sdk.rel).toBeDefined();
            expect(sdk.fcl).toBeDefined();
            expect(sdk.elf).toBeDefined();
            expect(sdk.car).toBeDefined();
            expect(sdk.fcc).toBeDefined();
            expect(sdk.fts).toBeDefined();
            expect(sdk.epp).toBeDefined();
            expect(sdk.fwe).toBeDefined();
            expect(sdk.tep).toBeDefined();
            expect(sdk.enc).toBeDefined();
            expect(sdk.cec).toBeDefined();
            expect(sdk.clo).toBeDefined();
            expect(sdk.cse).toBeDefined();
            expect(sdk.pse).toBeDefined();
            expect(sdk.lbs).toBeDefined();
        });
    });

    describe('getClient', () => {
        it('should return the underlying client', () => {
            const client = sdk.getClient();
            expect(client).toBe(mockClient);
        });
    });

    describe('getVersion', () => {
        it('should return version information', () => {
            const version = sdk.getVersion();
            expect(version).toEqual({
                version: '1.1.0',
                name: '@cufinder/cufinder-ts',
                description: 'Type-safe TypeScript SDK for the Cufinder B2B Data Enrichment API',
            });
        });
    });

    describe('service integration', () => {
        it('should allow calling services as direct functions', () => {
            expect(sdk.cuf).toBeDefined();
            expect(sdk.lcuf).toBeDefined();
            expect(sdk.dtc).toBeDefined();
            expect(sdk.dte).toBeDefined();
            expect(sdk.ntp).toBeDefined();
            expect(sdk.rel).toBeDefined();
            expect(sdk.cse).toBeDefined();
            expect(sdk.pse).toBeDefined();

            // Test that they are functions
            expect(typeof sdk.cuf).toBe('function');
            expect(typeof sdk.lcuf).toBe('function');
            expect(typeof sdk.dtc).toBe('function');
            expect(typeof sdk.dte).toBe('function');
            expect(typeof sdk.ntp).toBe('function');
            expect(typeof sdk.rel).toBe('function');
            expect(typeof sdk.cse).toBe('function');
            expect(typeof sdk.pse).toBe('function');
            expect(sdk.fcl).toBeDefined();
            expect(sdk.elf).toBeDefined();
            expect(sdk.car).toBeDefined();
            expect(sdk.fcc).toBeDefined();
            expect(sdk.fts).toBeDefined();
            expect(sdk.epp).toBeDefined();
            expect(sdk.fwe).toBeDefined();
            expect(sdk.tep).toBeDefined();
            expect(sdk.enc).toBeDefined();
            expect(sdk.cec).toBeDefined();
            expect(sdk.clo).toBeDefined();
            expect(sdk.lbs).toBeDefined();

            // Test that they are functions
            expect(typeof sdk.fcl).toBe('function');
            expect(typeof sdk.elf).toBe('function');
            expect(typeof sdk.car).toBe('function');
            expect(typeof sdk.fcc).toBe('function');
            expect(typeof sdk.fts).toBe('function');
            expect(typeof sdk.epp).toBe('function');
            expect(typeof sdk.fwe).toBe('function');
            expect(typeof sdk.tep).toBe('function');
            expect(typeof sdk.enc).toBe('function');
            expect(typeof sdk.cec).toBe('function');
            expect(typeof sdk.clo).toBe('function');
            expect(typeof sdk.lbs).toBe('function');
        });
    });
});
