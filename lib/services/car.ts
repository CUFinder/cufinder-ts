import { BaseService } from './base';
import { CarResponse } from '../shared/types';

/**
 * CAR - Company Revenue Finder API (V2)
 */
export class CarService extends BaseService {
    /**
     * Get company revenue
     * @param query - The company name to get revenue info for
     */
    public async getRevenue(query: string): Promise<CarResponse> {
        try {
            const response = await this.client.post('/car', {
                query: query.trim(),
            });

            return this.parseResponseData<CarResponse>(response.data);
        } catch (error) {
            throw this.handleError(error, 'CAR Service');
        }
    }
}
