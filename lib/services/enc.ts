import { BaseService } from './base';
import { EncResponse } from '../shared/types';

/**
 * ENC - Company Enrichment API (V2)
 */
export class EncService extends BaseService {
    /**
     * Enrich company data
     * @param query - The company name to enrich
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
