import { FclV2Params, FclV2Response } from '../../shared/types';
import { BaseService } from '../base';

/**
 * FCL - Company Lookalikes Finder API (V2)
 * Finds companies similar to the target company
 */
export declare class FclV2 extends BaseService {
  getLookalikes(params: FclV2Params): Promise<FclV2Response>;
}
