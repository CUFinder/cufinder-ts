import { DtcV2Params, DtcV2Response } from '../../shared/types';
import { DtcV2Params, DtcV2Response } from '../../shared/types';
import { BaseService } from '../base';

/**
 * DTC - Domain to Company Name API (V2)
 * Retrieves the registered company name associated with a given website domain
 */
export class DtcV2 extends BaseService {
  /**
   * Get company name from domain
   * @param params - DTC V2 parameters
   * @returns Promise resolving to company name information
   */
  public async getCompanyName(params: DtcV2Params): Promise<DtcV2Response> {
    this.validateRequired(params.company_website, 'company_website');

    // Basic URL validation
    try {
      new URL(params.company_website.trim());
    } catch {
      throw new Error('Invalid website URL format');
    }

    try {
      const response = await this.client.post<DtcV2Response>(
        '/v2/dtc',
        {
          company_website: params.company_website.trim(),
        }
      );

      return response.data;
    } catch (error) {
      throw this.handleError(error, 'DTC V2 Service');
    }
  }
}
