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
    it('should allow calling V1 services', () => {
      expect(sdk.v1.cuf.getDomain).toBeDefined();
      expect(sdk.v1.lcuf.getLinkedInUrl).toBeDefined();
      expect(sdk.v1.dtc.getCompanyName).toBeDefined();
      expect(sdk.v1.dte.getEmails).toBeDefined();
      expect(sdk.v1.ntp.getPhones).toBeDefined();
    });
  });

  describe('V2 service integration', () => {
    it('should allow calling V2 services', () => {
      expect(sdk.v2.cuf.getDomain).toBeDefined();
      expect(sdk.v2.lcuf.getLinkedInUrl).toBeDefined();
      expect(sdk.v2.dtc.getCompanyName).toBeDefined();
      expect(sdk.v2.dte.getEmails).toBeDefined();
      expect(sdk.v2.ntp.getPhones).toBeDefined();
      expect(sdk.v2.rel.reverseEmailLookup).toBeDefined();
      expect(sdk.v2.fcl.getLookalikes).toBeDefined();
      expect(sdk.v2.elf.getFundraising).toBeDefined();
      expect(sdk.v2.car.getRevenue).toBeDefined();
      expect(sdk.v2.fcc.getSubsidiaries).toBeDefined();
      expect(sdk.v2.fts.getTechStack).toBeDefined();
      expect(sdk.v2.epp.enrichProfile).toBeDefined();
      expect(sdk.v2.fwe.getEmailFromProfile).toBeDefined();
      expect(sdk.v2.tep.enrichPerson).toBeDefined();
      expect(sdk.v2.enc.enrichCompany).toBeDefined();
      expect(sdk.v2.cec.getEmployeeCountries).toBeDefined();
      expect(sdk.v2.clo.getLocations).toBeDefined();
      expect(sdk.v2.cse.searchCompanies).toBeDefined();
      expect(sdk.v2.pse.searchPeople).toBeDefined();
      expect(sdk.v2.lbs.searchLocalBusinesses).toBeDefined();
    });
  });
});
