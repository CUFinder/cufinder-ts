import { FweV2Params, FweV2Response } from '../../shared/types';
import { BaseService } from '../base';

/**
 * FWE - LinkedIn Profile Email Finder API (V2)
 * Extracts a verified business email address from a LinkedIn profile URL
 */
export declare class FweV2 extends BaseService {
  getEmailFromProfile(params: FweV2Params): Promise<FweV2Response>;
}
