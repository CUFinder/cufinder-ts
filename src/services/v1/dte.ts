import { DteV1Params, DteV1Response } from '../../shared/types';
import { BaseService } from '../base';

/**
 * DTE - Company Email Finder API (V1)
 * Returns up to five general or role-based business email addresses for a company
 */
export class DteV1 extends BaseService {
  /**
   * Get company emails from domain
   * @param params - DTE V1 parameters
   * @returns Promise resolving to company email information
   * @example
   * ```typescript
   * const emails = await sdk.v1.dte({
   *   api_key: 'your-api-key',
   *   company_domain: 'example.com'
   * });
   * console.log(emails.emails); // ['contact@example.com', 'info@example.com']
   * ```
   */
  public async getEmails(params: DteV1Params): Promise<DteV1Response> {
    this.validateApiKey(params.api_key);
    this.validateRequired(params.company_domain, 'company_domain');

    try {
      const response = await this.client.post<DteV1Response>(
        '/dte',
        {
          apiKey: params.api_key,
          companyDomain: params.company_domain,
        }
      );

      return response.data;
    } catch (error) {
      throw this.handleError(error, 'DTE V1 Service');
    }
  }
}
