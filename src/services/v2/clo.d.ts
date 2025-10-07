import { CloV2Params, CloV2Response } from '../../shared/types';
import { BaseService } from '../base';

/**
 * CLO - Company Locations API (V2)
 * Returns company location information
 */
export declare class CloV2 extends BaseService {
  getLocations(params: CloV2Params): Promise<CloV2Response>;
}
