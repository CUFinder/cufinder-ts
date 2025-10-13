import { FclResponse } from '../shared/types';
import { BaseService } from './base';

/**
 * FCL - Company Lookalikes Finder API (V2)
 * Provides a list of similar companies based on an input company's profile
 */
export class FclService extends BaseService {
    /**
     * Get company lookalikes
     * @param query - The company name to find lookalikes for
     * @returns Promise resolving to similar companies
     * @example
     * ```typescript
     * const result = await client.fcl('apple');
     * console.log(result.lookalikes);
     * ```
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
