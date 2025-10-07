import { EppV2Params, EppV2Response } from '../../shared/types';
import { BaseService } from '../base';

/**
 * EPP - LinkedIn Profile Enrichment API (V2)
 * Takes a LinkedIn profile URL and returns enriched person and company data
 */
export declare class EppV2 extends BaseService {
  enrichProfile(params: EppV2Params): Promise<EppV2Response>;
}
