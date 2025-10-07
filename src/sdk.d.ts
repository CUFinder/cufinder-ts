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

  // V1 Services
  readonly v1: {
    cuf: CufV1;
    lcuf: LcufV1;
    dtc: DtcV1;
    dte: DteV1;
    ntp: NtpV1;
  };

  // V2 Services
  readonly v2: {
    cuf: CufV2;
    lcuf: LcufV2;
    dtc: DtcV2;
    dte: DteV2;
    ntp: NtpV2;
    rel: RelV2;
    fcl: FclV2;
    elf: ElfV2;
    car: CarV2;
    fcc: FccV2;
    fts: FtsV2;
    epp: EppV2;
    fwe: FweV2;
    tep: TepV2;
    enc: EncV2;
    cec: CecV2;
    clo: CloV2;
    cse: CseV2;
    pse: PseV2;
    lbs: LbsV2;
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
