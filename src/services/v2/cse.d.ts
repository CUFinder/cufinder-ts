import { CseV2Params, CseV2Response } from '../../shared/types';
import { BaseService } from '../base';

/**
 * CSE - Company Search API (V2)
 * Search for companies by keyword, partial name, industry, location, or other filters
 */
export declare class CseV2 extends BaseService {
  searchCompanies(params?: CseV2Params): Promise<CseV2Response>;
}
