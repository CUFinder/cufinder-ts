import { DtcResponse } from '../shared/types';
import { BaseService } from './base';

/**
 * DTC - Domain to Company Name API (V2)
 * Retrieves the registered company name associated with a given website domain
 */
export class DtcService extends BaseService {
    /**
     * Get company name from domain
     * @param websiteUrl - The website URL to get company name for
     * @returns Promise resolving to company name information
     * @example
     * ```typescript
     * const company = await client.dtc('https://apple.com');
     * console.log(company.company_name); // 'Apple Inc.'
     * ```
     */
    public async getCompanyName(websiteUrl: string): Promise<DtcResponse> {
        try {
            const response = await this.client.post('/dtc', {
                company_website: websiteUrl.trim(),
            });

            return this.parseResponseData<DtcResponse>(response.data);
        } catch (error) {
            throw this.handleError(error, 'DTC Service');
        }
    }
}
