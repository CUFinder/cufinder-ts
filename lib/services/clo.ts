import { BaseService } from './base';
import { CloResponse } from '../shared/types';

/**
 * CLO - Company Locations API (V2)
 */
export class CloService extends BaseService {
    /**
     * Get company locations
     * @param query - The company name to get locations for
     */
    public async getLocations(query: string): Promise<CloResponse> {
        try {
            const response = await this.client.post('/clo', {
                query: query.trim(),
            });

            return this.parseResponseData<CloResponse>(response.data);
        } catch (error) {
            throw this.handleError(error, 'CLO Service');
        }
    }
}
