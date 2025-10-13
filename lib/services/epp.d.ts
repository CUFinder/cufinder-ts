import { EppParams, EppResponse } from '../shared/types';
import { BaseService } from './base';

/**
 * EPP - LinkedIn Profile Enrichment API (V2)
 * Takes a LinkedIn profile URL and returns enriched person and company data
 */
export declare class Epp extends BaseService {
  enrichProfile(params: EppParams): Promise<EppResponse>;
}
