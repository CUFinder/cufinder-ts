import { LcufParams, LcufResponse } from '../shared/types';
import { BaseService } from './base';

/**
 * LCUF - Company LinkedIn URL Finder API (V2)
 * Finds the official LinkedIn company profile URL from a company name
 */
export class Lcuf extends BaseService {
    /**
     * Get LinkedIn URL from company name
     * @param params - LCUF V2 parameters
     * @returns Promise resolving to LinkedIn URL information
     * @example
     * ```typescript
     * const linkedin = await sdk.lcuf({
     *   company_name: 'TechCorp'
     * });
     * console.log(linkedin.linkedin_url); // 'https://linkedin.com/company/techcorp'
     * ```
     */
    public async getLinkedInUrl(params: LcufParams): Promise<LcufResponse> {
        this.validateRequired(params.company_name, 'company_name');

        try {
            const response = await this.client.post('/lcuf', {
                company_name: params.company_name.trim(),
            });

            return this.parseResponseData<LcufResponse>(response.data);
        } catch (error) {
            throw this.handleError(error, 'LCUF Service');
        }
    }
}
