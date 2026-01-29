import { BaseService } from './base';
import { FweResponse } from '../shared/types';

/**
 * FWE - LinkedIn Profile Email Finder API (V2)
 */
export class FweService extends BaseService {
    /**
     * Get email from LinkedIn profile
     * @param linkedinUrl - The LinkedIn profile URL to get email from
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
