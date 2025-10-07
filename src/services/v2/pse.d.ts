import { PseV2Params, PseV2Response } from '../../shared/types';
import { BaseService } from '../base';

/**
 * PSE - Person Search API (V2)
 * Search for people by various criteria
 */
export declare class PseV2 extends BaseService {
  searchPeople(params?: PseV2Params): Promise<PseV2Response>;
}
