import { LbsParams, LbsResponse } from '../shared/types';
import { BaseService } from './base';

/**
 * LBS - Local Business Search API (V2)
 * Search for local businesses by location, industry, or name
 */
export declare class Lbs extends BaseService {
  searchLocalBusinesses(params?: LbsParams): Promise<LbsResponse>;
}
