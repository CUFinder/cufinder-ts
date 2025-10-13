import { FtsParams, FtsResponse } from '../shared/types';
import { BaseService } from './base';

/**
 * FTS - Company Tech Stack Finder API (V2)
 * Returns technology stack information for a company
 */
export declare class FtsService extends BaseService {
  getTechStack(params: FtsParams): Promise<FtsResponse>;
}
