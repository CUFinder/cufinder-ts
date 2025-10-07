import { CarParams, CarResponse } from '../shared/types';
import { BaseService } from './base';

/**
 * CAR - Company Revenue Finder API (V2)
 * Estimates a company's annual revenue based on name
 */
export class Car extends BaseService {
    /**
     * Get company revenue
     * @param params - CAR V2 parameters
     * @returns Promise resolving to revenue data
     */
    public async getRevenue(params: CarParams): Promise<CarResponse> {
        this.validateRequired(params.query, 'query');

        try {
            const response = await this.client.post<CarResponse>('/car', {
                query: params.query.trim(),
            });

            return response.data;
        } catch (error) {
            throw this.handleError(error, 'CAR Service');
        }
    }
}
