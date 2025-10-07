import { CufParams, CufResponse } from '../shared/types';
import { BaseService } from './base';

/**
 * CUF - Company Name to Domain API
 * Returns the official website URL of a company based on its name
 */
export class Cuf extends BaseService {
    /**
   * Get company domain from company name
   * @param params - CUF parameters
   * @returns Promise resolving to company domain information
   * @example
   * ```typescript
   * const domain = await sdk.cuf({
   company_name: 'TechCorp',
   country_code: 'US'
 });
 console.log(domain.domain); // 'techcorp.com'
   * ```
   * @example
   * ```typescript
   * const domain = await sdk.cuf({
   *   company_name: 'TechCorp',
   *   country_code: 'US'
   * });
   * console.log(domain.domain); // 'techcorp.com'
   * ```
   */
    public async getDomain(params: CufParams): Promise<CufResponse> {
        this.validateRequired(params.company_name, 'company_name');
        this.validateRequired(params.country_code, 'country_code');

        try {
            const response = await this.client.post<CufResponse>('/cuf', {
                company_name: params.company_name.trim(),
                country_code: params.country_code.trim().toUpperCase(),
            });

            return response.data;
        } catch (error) {
            throw this.handleError(error, 'CUF Service');
        }
    }
}
