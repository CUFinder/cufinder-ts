import { BaseService } from './base';
import { CecResponse } from '../shared/types';

/**
 * CEC - Company Employee Count API (V2)
 */
export class CecService extends BaseService {
    /**
     * Get company employee count
     * @param query - The company name to get employee count for
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
