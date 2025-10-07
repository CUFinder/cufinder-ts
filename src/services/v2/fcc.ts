import { FccV2Params, FccV2Response } from '../../shared/types';
import { BaseService } from '../base';

/**
 * FCC - Company Subsidiaries Finder API (V2)
 * Identifies known subsidiaries of a parent company
 */
export class FccV2 extends BaseService {
  /**
   * Get company subsidiaries
   * @param params - FCC V2 parameters
   * @returns Promise resolving to subsidiaries data
   */
  public async getSubsidiaries(params: FccV2Params): Promise<FccV2Response> {
    this.validateRequired(params.query, 'query');

    try {
      const response = await this.client.post<FccV2Response>(
        '/v2/fcc',
        {
          query: params.query.trim(),
        }
      );

      return response.data;
    } catch (error) {
      throw this.handleError(error, 'FCC V2 Service');
    }
  }
}
