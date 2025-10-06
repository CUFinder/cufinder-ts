import { CufV2Params, CufV2Response } from '../../shared/types';
import { BaseService } from '../base';

/**
 * CUF - Company Name to Domain API (V2)
 * Returns the official website URL of a company based on its name
 */
export class CufV2 extends BaseService {
  /**
   * Get company domain from company name
   * @param params - CUF V2 parameters
   * @returns Promise resolving to company domain information
   * @example
   * ```typescript
   * const domain = await sdk.v2.cuf({
   company_name: 'TechCorp',
   country_code: 'US'
 });
 console.log(domain.domain); // 'techcorp.com'
   * ```
   * @example
   * ```typescript
   * const domain = await sdk.v2.cuf({
   *   company_name: 'TechCorp',
   *   country_code: 'US'
   * });
   * console.log(domain.domain); // 'techcorp.com'
   * ```
   */
  public async getDomain(params: CufV2Params): Promise<CufV2Response> {
    this.validateRequired(params.company_name, 'company_name');
    this.validateRequired(params.country_code, 'country_code');

    // Validate country code format (ISO 3166-1 alpha-2)
    const countryCodeRegex = /^[A-Z]{2}$/;
    if (!countryCodeRegex.test(params.country_code.trim().toUpperCase())) {
      throw new Error('Country code must be a valid 2-letter ISO 3166-1 alpha-2 code (e.g., US, GB)');
    }

    try {
      const response = await this.client.post<CufV2Response>(
        '/v2/cuf',
        {
          company_name: params.company_name.trim(),
          country_code: params.country_code.trim().toUpperCase(),
        }
      );

      return response.data;
    } catch (error) {
      throw this.handleError(error, 'CUF V2 Service');
    }
  }
}
