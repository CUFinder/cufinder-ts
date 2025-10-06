import { DteV2Params, DteV2Response } from '../../shared/types';
import { BaseService } from '../base';

/**
 * DTE - Company Email Finder API (V2)
 * Returns up to five general or role-based business email addresses for a company
 */
export class DteV2 extends BaseService {
  /**
   * Get company emails from domain
   * @param params - DTE V2 parameters
   * @returns Promise resolving to company email information
   * @example
   * ```typescript
   * const emails = await sdk.v2.dte({
   company_website: 'https://example.com'
 });
 console.log(emails.emails); // ['contact@example.com', 'info@example.com']
   * ```
   * @example
   * ```typescript
   * const emails = await sdk.v2.dte({
   *   company_website: 'https://example.com'
   * });
   * console.log(emails.emails); // ['contact@example.com', 'info@example.com']
   * ```
   */
  public async getEmails(params: DteV2Params): Promise<DteV2Response> {
    this.validateRequired(params.company_website, 'company_website');

    // Basic URL validation
    try {
      new URL(params.company_website.trim());
    } catch {
      throw new Error('Invalid website URL format');
    }

    try {
      const response = await this.client.post<DteV2Response>(
        '/v2/dte',
        {
          company_website: params.company_website.trim(),
        }
      );

      return response.data;
    } catch (error) {
      throw this.handleError(error, 'DTE V2 Service');
    }
  }
}
