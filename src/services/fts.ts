import { FtsParams, FtsResponse } from '../shared/types';
import { BaseService } from './base';

/**
 * FTS - Company Tech Stack Finder API (V2)
 * Detects the technologies a company uses
 */
export class Fts extends BaseService {
    /**
     * Get company tech stack
     * @param params - FTS V2 parameters
     * @returns Promise resolving to tech stack data
     */
    public async getTechStack(params: FtsParams): Promise<FtsResponse> {
        this.validateRequired(params.query, 'query');

        try {
            const response = await this.client.post('/fts', {
                query: params.query.trim(),
            });

            return this.parseResponseData<FtsResponse>(response.data);
        } catch (error) {
            throw this.handleError(error, 'FTS Service');
        }
    }
}
