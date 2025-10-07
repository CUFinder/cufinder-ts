import { EppParams, EppResponse } from '../shared/types';
import { BaseService } from './base';

/**
 * EPP - LinkedIn Profile Enrichment API (V2)
 * Takes a LinkedIn profile URL and returns enriched person and company data
 */
export class Epp extends BaseService {
    /**
     * Enrich LinkedIn profile
     * @param params - EPP V2 parameters
     * @returns Promise resolving to enriched person data
     */
    public async enrichProfile(params: EppParams): Promise<EppResponse> {
        this.validateRequired(params.linkedin_url, 'linkedin_url');

        // Basic LinkedIn URL validation
        const linkedinUrlRegex = /^https?:\/\/(www\.)?linkedin\.com\/in\/[a-zA-Z0-9-]+\/?$/;
        if (!linkedinUrlRegex.test(params.linkedin_url.trim())) {
            throw new Error(
                'Invalid LinkedIn profile URL format. Expected format: https://linkedin.com/in/username'
            );
        }

        try {
            const response = await this.client.post<EppResponse>('/epp', {
                linkedin_url: params.linkedin_url.trim(),
            });

            return response.data;
        } catch (error) {
            throw this.handleError(error, 'EPP Service');
        }
    }
}
