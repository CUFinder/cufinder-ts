import { CloResponse } from '../shared/types';
import { BaseService } from './base';

/**
 * CLO - Company Locations API (V2)
 * Returns the known physical office locations of a company
 */
export class CloService extends BaseService {
    /**
     * Get company locations
     * @param query - The company name to get locations for
     * @returns Promise resolving to locations data
     * @example
     * ```typescript
     * const result = await client.clo('apple');
     * console.log(result.locations);
     * ```
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
