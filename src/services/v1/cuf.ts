import { CufV1Params, CufV1Response } from '../../shared/types';
import { BaseService } from '../base';

/**
 * CUF - Company Name to Domain API (V1)
 * Returns the official website URL of a company based on its name
 */
export class CufV1 extends BaseService {
  /**
   * Get company domain from company name
   * @param params - CUF V1 parameters
   * @returns Promise resolving to company domain information
   * @example
   * ```typescript
   * const domain = await sdk.v1.cuf({
   api_key: 'your-api-key',
   company_name: 'TechCorp'
 });
 console.log(domain.domain); // 'techcorp.com'
   * ```
   * @example
   * ```typescript
   * const domain = await sdk.v1.cuf({
   *   api_key: 'your-api-key',
   *   company_name: 'TechCorp'
   * });
   * console.log(domain.domain); // 'techcorp.com'
   * ```
   */
  public async getDomain(params: CufV1Params): Promise<CufV1Response> {
    this.validateApiKey(params.api_key);
    this.validateRequired(params.company_name, 'company_name');

    try {
      const response = await this.client.post<CufV1Response>(
        '/cuf',
        {
          apiKey: params.api_key,
          companyName: params.company_name,
        }
      );

      return response.data;
    } catch (error) {
      throw this.handleError(error, 'CUF V1 Service');
    }
  }
}
