import { BaseService } from './base';
import { LbsParams, LbsResponse } from '../shared/types';

/**
 * LBS - Local Business Search API (V2)
 */
export class LbsService extends BaseService {
    /**
     * Search local businesses
     * @param params - Search parameters
     */
    public async searchLocalBusinesses(params: LbsParams = {}): Promise<LbsResponse> {
        try {
            const searchParams: Record<string, any> = {};

            // Add non-undefined parameters
            if (params['name'] !== undefined) searchParams['name'] = params['name'];
            if (params['country'] !== undefined) searchParams['country'] = params['country'];
            if (params['state'] !== undefined) searchParams['state'] = params['state'];
            if (params['city'] !== undefined) searchParams['city'] = params['city'];
            if (params['industry'] !== undefined) searchParams['industry'] = params['industry'];
            if (params['page'] !== undefined) searchParams['page'] = params['page'];

            const response = await this.client.post('/lbs', searchParams);

            return this.parseResponseData<LbsResponse>(response.data);
        } catch (error) {
            throw this.handleError(error, 'LBS Service');
        }
    }
}
