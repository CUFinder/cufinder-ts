import { LcufV1Params, LcufV1Response } from '../../shared/types';
import { BaseService } from '../base';

/**
 * LCUF - Company LinkedIn URL Finder API (V1)
 * Finds the official LinkedIn company profile URL from a company name
 */
export class LcufV1 extends BaseService {
  /**
   * Get LinkedIn URL from company name
   * @param params - LCUF V1 parameters
   * @returns Promise resolving to LinkedIn URL information
   * @example
   * ```typescript
   * const linkedin = await sdk.v1.lcuf({
   api_key: 'your-api-key',
   company_name: 'TechCorp'
 });
 console.log(linkedin.linkedin_url); // 'https://linkedin.com/company/techcorp'
   * ```
   * @example
   * ```typescript
   * const linkedin = await sdk.v1.lcuf({
   *   api_key: 'your-api-key',
   *   company_name: 'TechCorp'
   * });
   * console.log(linkedin.linkedin_url); // 'https://linkedin.com/company/techcorp'
   * ```
   */
  public async getLinkedInUrl(params: LcufV1Params): Promise<LcufV1Response> {
    this.validateApiKey(params.api_key);
    this.validateRequired(params.company_name, 'company_name');

    try {
      const response = await this.client.post<LcufV1Response>(
        '/lcuf',
        {
          apiKey: params.api_key,
          companyName: params.company_name,
        }
      );

      return response.data;
    } catch (error) {
      throw this.handleError(error, 'LCUF V1 Service');
    }
  }
}
