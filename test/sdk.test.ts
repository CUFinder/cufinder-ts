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
      apiKey: 'test-api-key'
    });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('constructor', () => {
    it('should initialize with correct config', () => {
      expect(CufinderClient).toHaveBeenCalledWith({
        apiKey: 'test-api-key'
      });
    });

    it('should initialize V1 services', () => {
      expect(sdk.v1.cuf).toBeDefined();
      expect(sdk.v1.lcuf).toBeDefined();
      expect(sdk.v1.dtc).toBeDefined();
      expect(sdk.v1.dte).toBeDefined();
      expect(sdk.v1.ntp).toBeDefined();
    });

    it('should initialize V2 services', () => {
      expect(sdk.v2.cuf).toBeDefined();
      expect(sdk.v2.lcuf).toBeDefined();
      expect(sdk.v2.dtc).toBeDefined();
      expect(sdk.v2.dte).toBeDefined();
      expect(sdk.v2.ntp).toBeDefined();
      expect(sdk.v2.rel).toBeDefined();
      expect(sdk.v2.fcl).toBeDefined();
      expect(sdk.v2.elf).toBeDefined();
      expect(sdk.v2.car).toBeDefined();
      expect(sdk.v2.fcc).toBeDefined();
      expect(sdk.v2.fts).toBeDefined();
      expect(sdk.v2.epp).toBeDefined();
      expect(sdk.v2.fwe).toBeDefined();
      expect(sdk.v2.tep).toBeDefined();
      expect(sdk.v2.enc).toBeDefined();
      expect(sdk.v2.cec).toBeDefined();
      expect(sdk.v2.clo).toBeDefined();
      expect(sdk.v2.cse).toBeDefined();
      expect(sdk.v2.pse).toBeDefined();
      expect(sdk.v2.lbs).toBeDefined();
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
        version: '1.0.0',
        name: '@cufinder/cufinder-ts',
        description: 'Type-safe TypeScript SDK for the Cufinder B2B Data Enrichment API'
      });
    });
  });

  describe('V1 service integration', () => {
    it('should allow calling V1 services as direct functions', () => {
      expect(sdk.v1.cuf).toBeDefined();
      expect(sdk.v1.lcuf).toBeDefined();
      expect(sdk.v1.dtc).toBeDefined();
      expect(sdk.v1.dte).toBeDefined();
      expect(sdk.v1.ntp).toBeDefined();
      
      // Test that they are functions
      expect(typeof sdk.v1.cuf).toBe('function');
      expect(typeof sdk.v1.lcuf).toBe('function');
      expect(typeof sdk.v1.dtc).toBe('function');
      expect(typeof sdk.v1.dte).toBe('function');
      expect(typeof sdk.v1.ntp).toBe('function');
    });
  });

  describe('V2 service integration', () => {
    it('should allow calling V2 services as direct functions', () => {
      expect(sdk.v2.cuf).toBeDefined();
      expect(sdk.v2.lcuf).toBeDefined();
      expect(sdk.v2.dtc).toBeDefined();
      expect(sdk.v2.dte).toBeDefined();
      expect(sdk.v2.ntp).toBeDefined();
      expect(sdk.v2.rel).toBeDefined();
      expect(sdk.v2.cse).toBeDefined();
      expect(sdk.v2.pse).toBeDefined();
      
      // Test that they are functions
      expect(typeof sdk.v2.cuf).toBe('function');
      expect(typeof sdk.v2.lcuf).toBe('function');
      expect(typeof sdk.v2.dtc).toBe('function');
      expect(typeof sdk.v2.dte).toBe('function');
      expect(typeof sdk.v2.ntp).toBe('function');
      expect(typeof sdk.v2.rel).toBe('function');
      expect(typeof sdk.v2.cse).toBe('function');
      expect(typeof sdk.v2.pse).toBe('function');
      expect(sdk.v2.fcl).toBeDefined();
      expect(sdk.v2.elf).toBeDefined();
      expect(sdk.v2.car).toBeDefined();
      expect(sdk.v2.fcc).toBeDefined();
      expect(sdk.v2.fts).toBeDefined();
      expect(sdk.v2.epp).toBeDefined();
      expect(sdk.v2.fwe).toBeDefined();
      expect(sdk.v2.tep).toBeDefined();
      expect(sdk.v2.enc).toBeDefined();
      expect(sdk.v2.cec).toBeDefined();
      expect(sdk.v2.clo).toBeDefined();
      expect(sdk.v2.lbs).toBeDefined();
      
      // Test that they are functions
      expect(typeof sdk.v2.fcl).toBe('function');
      expect(typeof sdk.v2.elf).toBe('function');
      expect(typeof sdk.v2.car).toBe('function');
      expect(typeof sdk.v2.fcc).toBe('function');
      expect(typeof sdk.v2.fts).toBe('function');
      expect(typeof sdk.v2.epp).toBe('function');
      expect(typeof sdk.v2.fwe).toBe('function');
      expect(typeof sdk.v2.tep).toBe('function');
      expect(typeof sdk.v2.enc).toBe('function');
      expect(typeof sdk.v2.cec).toBe('function');
      expect(typeof sdk.v2.clo).toBe('function');
      expect(typeof sdk.v2.lbs).toBe('function');
    });
  });
});
