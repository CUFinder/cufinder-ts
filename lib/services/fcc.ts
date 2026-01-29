import { BaseService } from './base';
import { FccResponse } from '../shared/types';

/**
 * FCC - Company Subsidiaries Finder API (V2)
 */
export class FccService extends BaseService {
    /**
     * Get company subsidiaries
     * @param query - The company name to get subsidiaries for
     */
    public async getSubsidiaries(query: string): Promise<FccResponse> {
        try {
            const response = await this.client.post('/fcc', {
                query: query.trim(),
            });

            return this.parseResponseData<FccResponse>(response.data);
        } catch (error) {
            throw this.handleError(error, 'FCC Service');
        }
    }
}
