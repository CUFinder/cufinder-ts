import { EncResponse } from '../shared/types';
import { BaseService } from './base';

/**
 * ENC - Company Enrichment API (V2)
 * Provides a complete company profile from a company name
 */
export class EncService extends BaseService {
    /**
     * Enrich company data
     * @param query - The company name to enrich
     * @returns Promise resolving to enriched company data
     * @example
     * ```typescript
     * const result = await client.enc('apple');
     * console.log(result.company);
     * ```
     */
    public async enrichCompany(query: string): Promise<EncResponse> {
        try {
            const response = await this.client.post('/enc', {
                query: query.trim(),
            });

            return this.parseResponseData<EncResponse>(response.data);
        } catch (error) {
            throw this.handleError(error, 'ENC Service');
        }
    }
}
