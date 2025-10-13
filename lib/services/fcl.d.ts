import { FclParams, FclResponse } from '../shared/types';
import { BaseService } from './base';

/**
 * FCL - Company Lookalikes Finder API (V2)
 * Finds companies similar to the target company
 */
export declare class FclService extends BaseService {
  getLookalikes(params: FclParams): Promise<FclResponse>;
}
