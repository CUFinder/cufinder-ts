import { FtsResponse } from '../shared/types';
import { BaseService } from './base';

/**
 * FTS - Company Tech Stack Finder API (V2)
 * Detects the technologies a company uses
 */
export class FtsService extends BaseService {
    /**
     * Get company tech stack
     * @param query - The company name to get tech stack for
     * @returns Promise resolving to tech stack data
     * @example
     * ```typescript
     * const result = await client.fts('apple');
     * console.log(result.tech_stack);
     * ```
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
