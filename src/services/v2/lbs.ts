import { LbsV2Params, LbsV2Response } from '../../shared/types';
import { BaseService } from '../base';

/**
 * LBS - Local Business Search API (V2)
 * Search for local businesses by location, industry, or name
 */
export class LbsV2 extends BaseService {
  /**
   * Search local businesses
   * @param params - LBS V2 parameters
   * @returns Promise resolving to local business search results
   */
  public async searchLocalBusinesses(params: LbsV2Params = {}): Promise<LbsV2Response> {
    try {
      const searchParams: Record<string, any> = {};
      
      // Add non-undefined parameters
      if (params['name'] !== undefined) searchParams['name'] = params['name'];
      if (params['country'] !== undefined) searchParams['country'] = params['country'];
      if (params['state'] !== undefined) searchParams['state'] = params['state'];
      if (params['city'] !== undefined) searchParams['city'] = params['city'];
      if (params['industry'] !== undefined) searchParams['industry'] = params['industry'];
      if (params['page'] !== undefined) searchParams['page'] = params['page'];

      const response = await this.client.post<LbsV2Response>(
        '/v2/lbs',
        searchParams
      );

      return response.data;
    } catch (error) {
      throw this.handleError(error, 'LBS V2 Service');
    }
  }
}
