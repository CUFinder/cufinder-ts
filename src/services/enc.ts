import { EncParams, EncResponse } from '../shared/types';
import { BaseService } from './base';

/**
 * ENC - Company Enrichment API (V2)
 * Provides a complete company profile from a company name
 */
export class Enc extends BaseService {
    /**
     * Enrich company data
     * @param params - ENC V2 parameters
     * @returns Promise resolving to enriched company data
     */
    public async enrichCompany(params: EncParams): Promise<EncResponse> {
        this.validateRequired(params.query, 'query');

        try {
            const response = await this.client.post('/enc', {
                query: params.query.trim(),
            });

            return this.parseResponseData<EncResponse>(response.data);
        } catch (error) {
            throw this.handleError(error, 'ENC Service');
        }
    }
}
