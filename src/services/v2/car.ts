import { CarV2Params, CarV2Response } from '../../shared/types';
import { BaseService } from '../base';

/**
 * CAR - Company Revenue Finder API (V2)
 * Estimates a company's annual revenue based on name
 */
export class CarV2 extends BaseService {
  /**
   * Get company revenue
   * @param params - CAR V2 parameters
   * @returns Promise resolving to revenue data
   */
  public async getRevenue(params: CarV2Params): Promise<CarV2Response> {
    this.validateRequired(params.query, 'query');

    try {
      const response = await this.client.post<CarV2Response>(
        '/v2/car',
        {
          query: params.query.trim(),
        }
      );

      return response.data;
    } catch (error) {
      throw this.handleError(error, 'CAR V2 Service');
    }
  }
}
