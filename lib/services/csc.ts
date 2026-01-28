import { CSCResponse } from '../shared/types';
import { BaseService } from './base';

/**
 * CSC - Company Mission Statement API (V2)
 */
export class CscService extends BaseService {
    /**
     * Get company mission statement
     * @param url - The company domain you want to check
     * @example
     * ```typescript
     * const result = await client.csc('stripe.com')
     * console.log(result.mission_statement);
     * ```
     */
    public async getCompanyMissionStatment(url: string): Promise<CSCResponse> {
        try {
            const response = await this.client.post('/csc', {
                url: url.trim(),
            });

            return this.parseResponseData<CSCResponse>(response.data);
        } catch (error) {
            throw this.handleError(error, 'CSC Service');
        }
    }
}
