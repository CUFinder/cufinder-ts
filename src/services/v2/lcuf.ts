import { LcufV2Params, LcufV2Response } from '../../shared/types';
import { BaseService } from '../base';

/**
 * LCUF - Company LinkedIn URL Finder API (V2)
 * Finds the official LinkedIn company profile URL from a company name
 */
export class LcufV2 extends BaseService {
  /**
   * Get LinkedIn URL from company name
   * @param params - LCUF V2 parameters
   * @returns Promise resolving to LinkedIn URL information
   * @example
   * ```typescript
   * const linkedin = await sdk.v2.lcuf({
   company_name: 'TechCorp'
 });
 console.log(linkedin.linkedin_url); // 'https://linkedin.com/company/techcorp'
   * ```
   * @example
   * ```typescript
   * const linkedin = await sdk.v2.lcuf({
   *   company_name: 'TechCorp'
   * });
   * console.log(linkedin.linkedin_url); // 'https://linkedin.com/company/techcorp'
   * ```
   */
  public async getLinkedInUrl(params: LcufV2Params): Promise<LcufV2Response> {
    this.validateRequired(params.company_name, 'company_name');

    try {
      const response = await this.client.post<LcufV2Response>(
        '/v2/lcuf',
        {
          company_name: params.company_name.trim(),
        }
      );

      return response.data;
    } catch (error) {
      throw this.handleError(error, 'LCUF V2 Service');
    }
  }
}
