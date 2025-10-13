import { CecParams, CecResponse } from '../shared/types';
import { BaseService } from './base';

/**
 * CEC - Company Employees Countries API (V2)
 * Returns an estimated number of employees for a company
 */
export declare class Cec extends BaseService {
  getEmployeeCountries(params: CecParams): Promise<CecResponse>;
}
