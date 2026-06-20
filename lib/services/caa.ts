import { BaseService } from './base';
import { CaaResponse } from '../shared/types';

/**
 * CAA - Company Activity API (V2)
 */
export class CaaService extends BaseService {
    /**
     * Get company activities
     * @param query - The company name / website / linkedin URL
     * @param page - The page of result
     */
    public async getCompanyActivities(query: string, page?: number): Promise<CaaResponse> {
        try {
            const response = await this.client.post('/caa', {
                query: query.trim(),
                page: page,
            });

            return this.parseResponseData<CaaResponse>(response.data);
        } catch (error) {
            throw this.handleError(error, 'CAA Service');
        }
    }
}
