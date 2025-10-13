import { CseParams, CseResponse } from '../shared/types';
import { BaseService } from './base';

/**
 * CSE - Company Search API (V2)
 * Search for companies by keyword, partial name, industry, location, or other filters
 */
export declare class CseService extends BaseService {
  searchCompanies(params?: CseParams): Promise<CseResponse>;
}
