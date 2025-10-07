import { FccParams, FccResponse } from '../shared/types';
import { BaseService } from './base';

/**
 * FCC - Company Subsidiaries Finder API (V2)
 * Returns subsidiary companies information
 */
export declare class Fcc extends BaseService {
  getSubsidiaries(params: FccParams): Promise<FccResponse>;
}
