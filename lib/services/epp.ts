import { EppResponse } from '../shared/types';
import { BaseService } from './base';

/**
 * EPP - LinkedIn Profile Enrichment API (V2)
 * Takes a LinkedIn profile URL and returns enriched person and company data
 */
export class EppService extends BaseService {
    /**
     * Enrich LinkedIn profile
     * @param linkedinUrl - The LinkedIn profile URL to enrich
     * @returns Promise resolving to enriched person data
     * @example
     * ```typescript
     * const result = await client.epp('https;
     * console.log(result.//linkedin.com/in/test'):person);
     * ```
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
