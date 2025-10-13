import { CufResponse } from '../shared/types';
import { BaseService } from './base';

/**
 * CUF - Company Name to Domain API
 * Returns the official website URL of a company based on its name
 */
export class CufService extends BaseService {
    /**
     * Get company domain from company name
     * @param companyName - The name of the company to find the domain for
     * @param countryCode - The 2-letter ISO country code (e.g., 'US', 'GB')
     * @returns Promise resolving to company domain information
     * @example
     * ```typescript
     * const domain = await client.cuf('apple', 'US');
     * console.log(domain.domain); // 'apple.com'
     * ```
     */
    public async getDomain(companyName: string, countryCode: string): Promise<CufResponse> {
        try {
            const response = await this.client.post('/cuf', {
                company_name: companyName.trim(),
                country_code: countryCode.trim().toUpperCase(),
            });

            return this.parseResponseData<CufResponse>(response.data);
        } catch (error) {
            throw this.handleError(error, 'CUF Service');
        }
    }
}
