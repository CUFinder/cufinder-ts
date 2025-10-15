import { CecResponse } from '../shared/types';
import { BaseService } from './base';

/**
 * CEC - Company Employee Count API (V2)
 * Returns an estimated number of employees for a company
 */
export class CecService extends BaseService {
    /**
     * Get company employee count
     * @param query - The company name to get employee count for
     * @returns Promise resolving to employee count data
     * @example
     * ```typescript
     * const result = await client.cec('apple');
     * console.log(result.countries);
     * ```
     */
    public async getEmployeeCountries(query: string): Promise<CecResponse> {
        try {
            const response = await this.client.post('/cec', {
                query: query.trim(),
            });

            return this.parseResponseData<CecResponse>(response.data);
        } catch (error) {
            throw this.handleError(error, 'CEC Service');
        }
    }
}
