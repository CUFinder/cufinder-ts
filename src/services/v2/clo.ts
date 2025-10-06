import { BaseResponse, CompanyLocation } from '../../shared/models';
import { CloV2Params, CloV2Response } from '../../shared/types';
import { BaseService } from '../base';

/**
 * CLO - Company Locations API (V2)
 * Returns the known physical office locations of a company
 */
export class CloV2 extends BaseService {
  /**
   * Get company locations
   * @param params - CLO V2 parameters
   * @returns Promise resolving to locations data
   */
  public async getLocations(params: CloV2Params): Promise<CloV2Response> {
    this.validateRequired(params.query, 'query');

    try {
      const response = await this.client.post<CloV2Response>(
        '/v2/clo',
        {
          query: params.query.trim(),
        }
      );

      return response.data;
    } catch (error) {
      throw this.handleError(error, 'CLO V2 Service');
    }
  }
}
