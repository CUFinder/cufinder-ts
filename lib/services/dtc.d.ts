import { DtcParams, DtcResponse } from '../shared/types';
import { BaseService } from './base';

/**
 * DTC - Domain to Company Name API (V2)
 * Retrieves the registered company name associated with a given website domain
 */
export declare class DtcService extends BaseService {
  getCompanyName(params: DtcParams): Promise<DtcResponse>;
}
