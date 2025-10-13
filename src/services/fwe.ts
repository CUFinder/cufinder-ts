import { FweParams, FweResponse } from '../shared/types';
import { BaseService } from './base';

/**
 * FWE - LinkedIn Profile Email Finder API (V2)
 * Extracts a verified business email address from a LinkedIn profile URL
 */
export class Fwe extends BaseService {
    /**
     * Get email from LinkedIn profile
     * @param params - FWE V2 parameters
     * @returns Promise resolving to email address
     */
    public async getEmailFromProfile(params: FweParams): Promise<FweResponse> {
        this.validateRequired(params.linkedin_url, 'linkedin_url');

        try {
            const response = await this.client.post('/fwe', {
                linkedin_url: params.linkedin_url.trim(),
            });

            return this.parseResponseData<FweResponse>(response.data);
        } catch (error) {
            throw this.handleError(error, 'FWE Service');
        }
    }
}
