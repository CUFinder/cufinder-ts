import { CecParams, CecResponse } from '../shared/types';
import { BaseService } from './base';

/**
 * CEC - Company Employee Count API (V2)
 * Returns an estimated number of employees for a company
 */
export declare class CecService extends BaseService {
  getEmployeeCount(params: CecParams): Promise<CecResponse>;
}
