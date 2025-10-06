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
export class CufinderSDK {
  private readonly client: CufinderClient;

  // V1 Services
  public readonly v1: {
    cuf: CufV1;
    lcuf: LcufV1;
    dtc: DtcV1;
    dte: DteV1;
    ntp: NtpV1;
  };

  // V2 Services
  public readonly v2: {
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

  constructor(config: CufinderClientConfig) {
    this.client = new CufinderClient(config);

    // Initialize V1 services
    this.v1 = {
      cuf: new CufV1(this.client),
      lcuf: new LcufV1(this.client),
      dtc: new DtcV1(this.client),
      dte: new DteV1(this.client),
      ntp: new NtpV1(this.client),
    };

    // Initialize V2 services
    this.v2 = {
      cuf: new CufV2(this.client),
      lcuf: new LcufV2(this.client),
      dtc: new DtcV2(this.client),
      dte: new DteV2(this.client),
      ntp: new NtpV2(this.client),
      rel: new RelV2(this.client),
      fcl: new FclV2(this.client),
      elf: new ElfV2(this.client),
      car: new CarV2(this.client),
      fcc: new FccV2(this.client),
      fts: new FtsV2(this.client),
      epp: new EppV2(this.client),
      fwe: new FweV2(this.client),
      tep: new TepV2(this.client),
      enc: new EncV2(this.client),
      cec: new CecV2(this.client),
      clo: new CloV2(this.client),
      cse: new CseV2(this.client),
      pse: new PseV2(this.client),
      lbs: new LbsV2(this.client),
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
