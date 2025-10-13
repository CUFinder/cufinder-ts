import { DteResponse } from '../shared/types';
import { BaseService } from './base';

/**
 * DTE - Company Email Finder API (V2)
 * Returns up to five general or role-based business email addresses for a company
 */
export class DteService extends BaseService {
    /**
     * Get company emails from domain
     * @param websiteUrl - The website URL to get emails for
     * @returns Promise resolving to company email information
     * @example
     * ```typescript
     * const emails = await sdk.dte({
     *   company_website: 'https://example.com'
     * });
     * console.log(emails.emails); // ['contact@example.com', 'info@example.com']
     * ```
     */
    public async getEmails(websiteUrl: string): Promise<DteResponse> {
        try {
            const response = await this.client.post('/dte', {
                company_website: websiteUrl.trim(),
            });

            return this.parseResponseData<DteResponse>(response.data);
        } catch (error) {
            throw this.handleError(error, 'DTE Service');
        }
    }
}
