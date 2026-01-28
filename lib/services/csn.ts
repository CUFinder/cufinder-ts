import { CSNResponse } from '../shared/types';
import { BaseService } from './base';

/**
 * CSN - Company Snapshot API (V2)
 */
export class CsnService extends BaseService {
    /**
     * Get company snapshot info
     * @param url - The company domain you want to check
     * @example
     * ```typescript
     * const result = await client.csn('stripe.com')
     * console.log(result.company_snapshot);
     * ```
     */
    public async getCompanySnapshot(url: string): Promise<CSNResponse> {
        try {
            const response = await this.client.post('/csn', {
                url: url.trim(),
            });

            return this.parseResponseData<CSNResponse>(response.data);
        } catch (error) {
            throw this.handleError(error, 'CSN Service');
        }
    }
}
