import { LcufResponse } from '../shared/types';
import { BaseService } from './base';

/**
 * LCUF - Company LinkedIn URL Finder API (V2)
 * Finds the official LinkedIn company profile URL from a company name
 */
export class LcufService extends BaseService {
    /**
     * Get LinkedIn URL from company name
     * @param companyName - The name of the company to find LinkedIn URL for
     * @returns Promise resolving to LinkedIn URL information
     * @example
     * ```typescript
     * const linkedin = await client.lcuf('apple');
     * console.log(linkedin.linkedin_url); // 'https://linkedin.com/company/apple'
     * ```
     */
    public async getLinkedInUrl(companyName: string): Promise<LcufResponse> {
        try {
            const response = await this.client.post('/lcuf', {
                company_name: companyName.trim(),
            });

            return this.parseResponseData<LcufResponse>(response.data);
        } catch (error) {
            throw this.handleError(error, 'LCUF Service');
        }
    }
}
