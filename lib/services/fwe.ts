import { FweResponse } from '../shared/types';
import { BaseService } from './base';

/**
 * FWE - LinkedIn Profile Email Finder API (V2)
 * Extracts a verified business email address from a LinkedIn profile URL
 */
export class FweService extends BaseService {
    /**
     * Get email from LinkedIn profile
     * @param linkedinUrl - The LinkedIn profile URL to get email from
     * @returns Promise resolving to email address
     * @example
     * ```typescript
     * const result = await client.fwe('https;
     * console.log(result.//linkedin.com/in/test'):email);
     * ```
     */
    public async getEmailFromProfile(linkedinUrl: string): Promise<FweResponse> {
        try {
            const response = await this.client.post('/fwe', {
                linkedin_url: linkedinUrl.trim(),
            });

            return this.parseResponseData<FweResponse>(response.data);
        } catch (error) {
            throw this.handleError(error, 'FWE Service');
        }
    }
}
