import { LcufParams, LcufResponse } from '../shared/types';
import { BaseService } from './base';

/**
 * LCUF - Company LinkedIn URL Finder API (V2)
 * Finds the official LinkedIn company profile URL from a company name
 */
export declare class LcufService extends BaseService {
  getLinkedInUrl(params: LcufParams): Promise<LcufResponse>;
}
