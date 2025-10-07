import { FtsV2Params, FtsV2Response } from '../../shared/types';
import { BaseService } from '../base';

/**
 * FTS - Company Tech Stack Finder API (V2)
 * Returns technology stack information for a company
 */
export declare class FtsV2 extends BaseService {
  getTechStack(params: FtsV2Params): Promise<FtsV2Response>;
}
