import { CarResponse } from '../shared/types';
import { BaseService } from './base';

/**
 * CAR - Company Revenue Finder API (V2)
 * Estimates a company's annual revenue based on name
 */
export class CarService extends BaseService {
    /**
     * Get company revenue
     * @param query - The company name to get revenue info for
     * @returns Promise resolving to revenue data
     * @example
     * ```typescript
     * const revenue = await client.car('apple');
     * console.log(revenue.revenue.annual_revenue); // '$394.3B'
     * ```
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
