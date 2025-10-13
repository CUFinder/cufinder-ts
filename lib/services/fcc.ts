import { FccResponse } from '../shared/types';
import { BaseService } from './base';

/**
 * FCC - Company Subsidiaries Finder API (V2)
 * Identifies known subsidiaries of a parent company
 */
export class FccService extends BaseService {
    /**
     * Get company subsidiaries
     * @param query - The company name to get subsidiaries for
     * @returns Promise resolving to subsidiaries data
     * @example
     * ```typescript
     * const result = await client.fcc('apple');
     * console.log(result.subsidiaries);
     * ```
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
