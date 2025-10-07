import { CecV2Params, CecV2Response } from '../../shared/types';
import { BaseService } from '../base';

/**
 * CEC - Company Employees Countries API (V2)
 * Returns an estimated number of employees for a company
 */
export declare class CecV2 extends BaseService {
  getEmployeeCountries(params: CecV2Params): Promise<CecV2Response>;
}
