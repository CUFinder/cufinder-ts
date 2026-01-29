import { BaseService } from './base';
import { FclResponse } from '../shared/types';

/**
 * FCL - Company Lookalikes Finder API (V2)
 */
export class FclService extends BaseService {
    /**
     * Get company lookalikes
     * @param query - The company name to find lookalikes for
     */
    public async getLookalikes(query: string): Promise<FclResponse> {
        try {
            const response = await this.client.post('/fcl', {
                query: query.trim(),
            });

            return this.parseResponseData<FclResponse>(response.data);
        } catch (error) {
            throw this.handleError(error, 'FCL Service');
        }
    }
}
