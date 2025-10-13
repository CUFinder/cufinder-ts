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
     * ```
     * @example
     * ```typescript
     * const domain = await sdk.cuf({
     *   company_name: 'apple',
     *   country_code: 'US'
     * });
     * console.log(domain.domain); // 'techcorp.com'
     * ```
     */
    public async getDomain(params: CufParams): Promise<CufResponse> {
        this.validateRequired(params.company_name, 'company_name');
        this.validateRequired(params.country_code, 'country_code');

        // Validate country code format
        const countryCode = params.country_code.trim().toUpperCase();
        if (countryCode.length !== 2 || !/^[A-Z]{2}$/.test(countryCode)) {
            throw new Error('Country code must be a valid 2-letter ISO 3166-1 alpha-2 code');
        }

        try {
            const response = await this.client.post('/cuf', {
                company_name: params.company_name.trim(),
                country_code: countryCode,
            });

            return this.parseResponseData<CufResponse>(response.data);
        } catch (error) {
            throw this.handleError(error, 'CUF Service');
        }
    }
}
