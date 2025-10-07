import { LcufV2Params, LcufV2Response } from '../../shared/types';
import { BaseService } from '../base';

/**
 * LCUF - Company LinkedIn URL Finder API (V2)
 * Finds the official LinkedIn company profile URL from a company name
 */
export declare class LcufV2 extends BaseService {
  getLinkedInUrl(params: LcufV2Params): Promise<LcufV2Response>;
}
