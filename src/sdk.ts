import { CufinderClient } from './client';
import { CufinderClientConfig } from './shared/types';

// V1 Services
import {
  CufV1,
  LcufV1,
  DtcV1,
  DteV1,
  NtpV1,
} from './services/v1';

// V2 Services
import {
  CufV2,
  LcufV2,
  DtcV2,
  DteV2,
  NtpV2,
  RelV2,
  FclV2,
  ElfV2,
  CarV2,
  FccV2,
  FtsV2,
  EppV2,
  FweV2,
  TepV2,
  EncV2,
  CecV2,
  CloV2,
  CseV2,
  PseV2,
  LbsV2,
} from './services/v2';

/**
 * Main CUFinder SDK class
 * Provides access to all V1 and V2 API services as direct functions
 * Usage: sdk.v1.cuf(params), sdk.v2.dte(params)
 */
export class CufinderSDK {
  private readonly client: CufinderClient;

  // V1 Services as direct functions
  public readonly v1: {
    cuf: (params: Parameters<CufV1['getDomain']>[0]) => ReturnType<CufV1['getDomain']>;
    lcuf: (params: Parameters<LcufV1['getLinkedInUrl']>[0]) => ReturnType<LcufV1['getLinkedInUrl']>;
    dtc: (params: Parameters<DtcV1['getCompanyName']>[0]) => ReturnType<DtcV1['getCompanyName']>;
    dte: (params: Parameters<DteV1['getEmails']>[0]) => ReturnType<DteV1['getEmails']>;
    ntp: (params: Parameters<NtpV1['getPhones']>[0]) => ReturnType<NtpV1['getPhones']>;
  };

  // V2 Services as direct functions
  public readonly v2: {
    cuf: (params: Parameters<CufV2['getDomain']>[0]) => ReturnType<CufV2['getDomain']>;
    lcuf: (params: Parameters<LcufV2['getLinkedInUrl']>[0]) => ReturnType<LcufV2['getLinkedInUrl']>;
    dtc: (params: Parameters<DtcV2['getCompanyName']>[0]) => ReturnType<DtcV2['getCompanyName']>;
    dte: (params: Parameters<DteV2['getEmails']>[0]) => ReturnType<DteV2['getEmails']>;
    ntp: (params: Parameters<NtpV2['getPhones']>[0]) => ReturnType<NtpV2['getPhones']>;
    rel: (params: Parameters<RelV2['reverseEmailLookup']>[0]) => ReturnType<RelV2['reverseEmailLookup']>;
    fcl: (params: Parameters<FclV2['getLookalikes']>[0]) => ReturnType<FclV2['getLookalikes']>;
    elf: (params: Parameters<ElfV2['getFundraising']>[0]) => ReturnType<ElfV2['getFundraising']>;
    car: (params: Parameters<CarV2['getRevenue']>[0]) => ReturnType<CarV2['getRevenue']>;
    fcc: (params: Parameters<FccV2['getSubsidiaries']>[0]) => ReturnType<FccV2['getSubsidiaries']>;
    fts: (params: Parameters<FtsV2['getTechStack']>[0]) => ReturnType<FtsV2['getTechStack']>;
    epp: (params: Parameters<EppV2['enrichProfile']>[0]) => ReturnType<EppV2['enrichProfile']>;
    fwe: (params: Parameters<FweV2['getEmailFromProfile']>[0]) => ReturnType<FweV2['getEmailFromProfile']>;
    tep: (params: Parameters<TepV2['enrichPerson']>[0]) => ReturnType<TepV2['enrichPerson']>;
    enc: (params: Parameters<EncV2['enrichCompany']>[0]) => ReturnType<EncV2['enrichCompany']>;
    cec: (params: Parameters<CecV2['getEmployeeCountries']>[0]) => ReturnType<CecV2['getEmployeeCountries']>;
    clo: (params: Parameters<CloV2['getLocations']>[0]) => ReturnType<CloV2['getLocations']>;
    cse: (params?: Parameters<CseV2['searchCompanies']>[0]) => ReturnType<CseV2['searchCompanies']>;
    pse: (params?: Parameters<PseV2['searchPeople']>[0]) => ReturnType<PseV2['searchPeople']>;
    lbs: (params?: Parameters<LbsV2['searchLocalBusinesses']>[0]) => ReturnType<LbsV2['searchLocalBusinesses']>;
  };

  constructor(config: CufinderClientConfig) {
    this.client = new CufinderClient(config);

    // Initialize V1 service instances
    const cufV1 = new CufV1(this.client);
    const lcufV1 = new LcufV1(this.client);
    const dtcV1 = new DtcV1(this.client);
    const dteV1 = new DteV1(this.client);
    const ntpV1 = new NtpV1(this.client);

    // Initialize V2 service instances
    const cufV2 = new CufV2(this.client);
    const lcufV2 = new LcufV2(this.client);
    const dtcV2 = new DtcV2(this.client);
    const dteV2 = new DteV2(this.client);
    const ntpV2 = new NtpV2(this.client);
    const relV2 = new RelV2(this.client);
    const fclV2 = new FclV2(this.client);
    const elfV2 = new ElfV2(this.client);
    const carV2 = new CarV2(this.client);
    const fccV2 = new FccV2(this.client);
    const ftsV2 = new FtsV2(this.client);
    const eppV2 = new EppV2(this.client);
    const fweV2 = new FweV2(this.client);
    const tepV2 = new TepV2(this.client);
    const encV2 = new EncV2(this.client);
    const cecV2 = new CecV2(this.client);
    const cloV2 = new CloV2(this.client);
    const cseV2 = new CseV2(this.client);
    const pseV2 = new PseV2(this.client);
    const lbsV2 = new LbsV2(this.client);

    // Expose V1 services as direct functions
    this.v1 = {
      cuf: (params) => cufV1.getDomain(params),
      lcuf: (params) => lcufV1.getLinkedInUrl(params),
      dtc: (params) => dtcV1.getCompanyName(params),
      dte: (params) => dteV1.getEmails(params),
      ntp: (params) => ntpV1.getPhones(params),
    };

    // Expose V2 services as direct functions
    this.v2 = {
      cuf: (params) => cufV2.getDomain(params),
      lcuf: (params) => lcufV2.getLinkedInUrl(params),
      dtc: (params) => dtcV2.getCompanyName(params),
      dte: (params) => dteV2.getEmails(params),
      ntp: (params) => ntpV2.getPhones(params),
      rel: (params) => relV2.reverseEmailLookup(params),
      fcl: (params) => fclV2.getLookalikes(params),
      elf: (params) => elfV2.getFundraising(params),
      car: (params) => carV2.getRevenue(params),
      fcc: (params) => fccV2.getSubsidiaries(params),
      fts: (params) => ftsV2.getTechStack(params),
      epp: (params) => eppV2.enrichProfile(params),
      fwe: (params) => fweV2.getEmailFromProfile(params),
      tep: (params) => tepV2.enrichPerson(params),
      enc: (params) => encV2.enrichCompany(params),
      cec: (params) => cecV2.getEmployeeCountries(params),
      clo: (params) => cloV2.getLocations(params),
      cse: (params) => cseV2.searchCompanies(params),
      pse: (params) => pseV2.searchPeople(params),
      lbs: (params) => lbsV2.searchLocalBusinesses(params),
    };
  }

  /**
   * Get the underlying HTTP client for advanced usage
   * @returns The CufinderClient instance
   */
  public getClient(): CufinderClient {
    return this.client;
  }

  /**
   * Get SDK version information
   * @returns SDK version and metadata
   */
  public getVersion(): { version: string; name: string; description: string } {
    return {
      version: '1.0.0',
      name: '@cufinder/cufinder-ts',
      description: 'Type-safe TypeScript SDK for the Cufinder B2B Data Enrichment API',
    };
  }
}
