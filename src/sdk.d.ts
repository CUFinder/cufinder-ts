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
 * Provides access to all V1 and V2 API services
 * Follows SOLID principles by providing a clean interface to all services
 */
export declare class CufinderSDK {
  private readonly client: CufinderClient;

  // V1 Services as direct functions
  readonly v1: {
    cuf: (params: Parameters<CufV1['getDomain']>[0]) => ReturnType<CufV1['getDomain']>;
    lcuf: (params: Parameters<LcufV1['getLinkedInUrl']>[0]) => ReturnType<LcufV1['getLinkedInUrl']>;
    dtc: (params: Parameters<DtcV1['getCompanyName']>[0]) => ReturnType<DtcV1['getCompanyName']>;
    dte: (params: Parameters<DteV1['getEmails']>[0]) => ReturnType<DteV1['getEmails']>;
    ntp: (params: Parameters<NtpV1['getPhones']>[0]) => ReturnType<NtpV1['getPhones']>;
  };

  // V2 Services as direct functions
  readonly v2: {
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

  constructor(config: CufinderClientConfig);

  /**
   * Get the underlying HTTP client for advanced usage
   * @returns The CufinderClient instance
   */
  getClient(): CufinderClient;

  /**
   * Get SDK version information
   * @returns SDK version and metadata
   */
  getVersion(): { version: string; name: string; description: string };
}
