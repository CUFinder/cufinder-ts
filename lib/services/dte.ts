import { DteParams, DteResponse } from '../shared/types';
import { BaseService } from './base';

/**
 * DTE - Company Email Finder API (V2)
 * Returns up to five general or role-based business email addresses for a company
 */
export class Dte extends BaseService {
    /**
     * Get company emails from domain
     * @param params - DTE V2 parameters
     * @returns Promise resolving to company email information
     * @example
     * ```typescript
     * const emails = await sdk.dte({
     *   company_website: 'https://example.com'
     * });
     * console.log(emails.emails); // ['contact@example.com', 'info@example.com']
     * ```
     */
    public async getEmails(params: DteParams): Promise<DteResponse> {
        this.validateRequired(params.company_website, 'company_website');

        // Basic URL validation
        try {
            new URL(params.company_website.trim());
        } catch {
            throw new Error('Invalid website URL format');
        }

        try {
            const response = await this.client.post('/dte', {
                company_website: params.company_website.trim(),
            });

            return this.parseResponseData<DteResponse>(response.data);
        } catch (error) {
            throw this.handleError(error, 'DTE Service');
        }
    }
}
