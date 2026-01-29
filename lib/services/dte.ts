import { BaseService } from './base';
import { DteResponse } from '../shared/types';

/**
 * DTE - Company Email Finder API (V2)
 */
export class DteService extends BaseService {
    /**
     * Get company emails from domain
     * @param websiteUrl - The website URL to get emails for
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
