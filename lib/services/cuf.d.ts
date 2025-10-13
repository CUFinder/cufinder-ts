import { CufParams, CufResponse } from '../shared/types';
import { BaseService } from './base';

/**
 * CUF - Company Name to Domain API (V2)
 * Returns the official website URL of a company based on its name
 */
export declare class Cuf extends BaseService {
  getDomain(params: CufParams): Promise<CufResponse>;
}
