import { BaseService } from './base';
import { FtsResponse } from '../shared/types';

/**
 * FTS - Company Tech Stack Finder API (V2)
 */
export class FtsService extends BaseService {
    /**
     * Get company tech stack
     * @param query - The company name to get tech stack for
     */
    public async getTechStack(query: string): Promise<FtsResponse> {
        try {
            const response = await this.client.post('/fts', {
                query: query.trim(),
            });

            return this.parseResponseData<FtsResponse>(response.data);
        } catch (error) {
            throw this.handleError(error, 'FTS Service');
        }
    }
}
