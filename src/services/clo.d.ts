import { CloParams, CloResponse } from '../shared/types';
import { BaseService } from './base';

/**
 * CLO - Company Locations API (V2)
 * Returns company location information
 */
export declare class Clo extends BaseService {
  getLocations(params: CloParams): Promise<CloResponse>;
}
