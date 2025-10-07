import { DtcV2Params, DtcV2Response } from '../../shared/types';
import { BaseService } from '../base';

/**
 * DTC - Domain to Company Name API (V2)
 * Retrieves the registered company name associated with a given website domain
 */
export declare class DtcV2 extends BaseService {
  getCompanyName(params: DtcV2Params): Promise<DtcV2Response>;
}
