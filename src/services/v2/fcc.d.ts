import { FccV2Params, FccV2Response } from '../../shared/types';
import { BaseService } from '../base';

/**
 * FCC - Company Subsidiaries Finder API (V2)
 * Returns subsidiary companies information
 */
export declare class FccV2 extends BaseService {
  getSubsidiaries(params: FccV2Params): Promise<FccV2Response>;
}
