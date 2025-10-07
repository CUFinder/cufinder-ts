import { DteV1Params, DteV1Response } from '../../shared/types';
import { BaseService } from '../base';

/**
 * DTE - Company Email Finder API (V1)
 * Returns up to five general or role-based business email addresses for a company
 */
export declare class DteV1 extends BaseService {
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
  getEmails(params: DteV1Params): Promise<DteV1Response>;
}
