import { CecParams, CecResponse } from '../shared/types';
import { BaseService } from './base';

/**
 * CEC - Company Employees Countries API (V2)
 * Returns an estimated number of employees for a company
 */
export class Cec extends BaseService {
    /**
     * Get company employee countries
     * @param params - CEC V2 parameters
     * @returns Promise resolving to employee countries data
     */
    public async getEmployeeCountries(params: CecParams): Promise<CecResponse> {
        this.validateRequired(params.query, 'query');

        try {
            const response = await this.client.post('/cec', {
                query: params.query.trim(),
            });

            return this.parseResponseData<CecResponse>(response.data);
        } catch (error) {
            throw this.handleError(error, 'CEC Service');
        }
    }
}
