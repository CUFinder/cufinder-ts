import { FclParams, FclResponse } from '../shared/types';
import { BaseService } from './base';

/**
 * FCL - Company Lookalikes Finder API (V2)
 * Provides a list of similar companies based on an input company's profile
 */
export class Fcl extends BaseService {
    /**
     * Get company lookalikes
     * @param params - FCL V2 parameters
     * @returns Promise resolving to similar companies
     */
    public async getLookalikes(params: FclParams): Promise<FclResponse> {
        this.validateRequired(params.query, 'query');

        try {
            const response = await this.client.post<FclResponse>('/fcl', {
                query: params.query.trim(),
            });

            return response.data;
        } catch (error) {
            throw this.handleError(error, 'FCL Service');
        }
    }
}
