import { CecV2Params, CecV2Response } from '../../shared/types';
import { BaseService } from '../base';

/**
 * CEC - Company Employees Countries API (V2)
 * Returns an estimated number of employees for a company
 */
export class CecV2 extends BaseService {
  /**
   * Get company employee countries
   * @param params - CEC V2 parameters
   * @returns Promise resolving to employee countries data
   */
  public async getEmployeeCountries(params: CecV2Params): Promise<CecV2Response> {
    this.validateRequired(params.query, 'query');

    try {
      const response = await this.client.post<CecV2Response>(
        '/v2/cec',
        {
          query: params.query.trim(),
        }
      );

      return response.data;
    } catch (error) {
      throw this.handleError(error, 'CEC V2 Service');
    }
  }
}
