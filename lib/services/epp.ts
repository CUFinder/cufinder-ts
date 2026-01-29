import { BaseService } from './base';
import { EppResponse } from '../shared/types';

/**
 * EPP - LinkedIn Profile Enrichment API (V2)
 */
export class EppService extends BaseService {
    /**
     * Enrich LinkedIn profile
     * @param linkedinUrl - The LinkedIn profile URL to enrich
     */
    public async enrichProfile(linkedinUrl: string): Promise<EppResponse> {
        try {
            const response = await this.client.post('/epp', {
                linkedin_url: linkedinUrl.trim(),
            });

            return this.parseResponseData<EppResponse>(response.data);
        } catch (error) {
            throw this.handleError(error, 'EPP Service');
        }
    }
}
