import { DtcV1Params, DtcV1Response } from '../../shared/types';
import { BaseService } from '../base';

/**
 * DTC - Domain to Company Name API (V1)
 * Retrieves the registered company name associated with a given website domain
 */
export class DtcV1 extends BaseService {
  /**
   * Get company name from domain
   * @param params - DTC V1 parameters
   * @returns Promise resolving to company name information
   * @example
   * ```typescript
   * const company = await sdk.v1.dtc({
   api_key: 'your-api-key',
   company_website: 'https://techcorp.com'
 });
 console.log(company.company_name); // 'TechCorp Inc.'
   * ```
   * @example
   * ```typescript
   * const company = await sdk.v1.dtc({
   *   api_key: 'your-api-key',
   *   company_website: 'https://techcorp.com'
   * });
   * console.log(company.company_name); // 'TechCorp Inc.'
   * ```
   */
  public async getCompanyName(params: DtcV1Params): Promise<DtcV1Response> {
    this.validateApiKey(params.api_key);
    this.validateRequired(params.company_website, 'company_website');

    try {
      const response = await this.client.post<DtcV1Response>(
        '/dtc',
        {
          apiKey: params.api_key,
          companyWebsite: params.company_website,
        }
      );

      return response.data;
    } catch (error) {
      throw this.handleError(error, 'DTC V1 Service');
    }
  }
}
