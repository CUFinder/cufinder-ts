import { LbsV2Params, LbsV2Response } from '../../shared/types';
import { BaseService } from '../base';

/**
 * LBS - Local Business Search API (V2)
 * Search for local businesses by location, industry, or name
 */
export declare class LbsV2 extends BaseService {
  searchLocalBusinesses(params?: LbsV2Params): Promise<LbsV2Response>;
}
