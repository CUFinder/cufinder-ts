import { BaseResponse, LookalikeCompany } from '../../shared/models';
import { FclV2Params, FclV2Response } from '../../shared/types';
import { BaseService } from '../base';

/**
 * FCL - Company Lookalikes Finder API (V2)
 * Provides a list of similar companies based on an input company's profile
 */
export class FclV2 extends BaseService {
  /**
   * Get company lookalikes
   * @param params - FCL V2 parameters
   * @returns Promise resolving to similar companies
   */
  public async getLookalikes(params: FclV2Params): Promise<FclV2Response> {
    this.validateRequired(params.query, 'query');

    try {
      const response = await this.client.post<FclV2Response>(
        '/v2/fcl',
        {
          query: params.query.trim(),
        }
      );

      return response.data;
    } catch (error) {
      throw this.handleError(error, 'FCL V2 Service');
    }
  }
}
