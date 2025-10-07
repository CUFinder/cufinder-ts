import { CloParams, CloResponse } from '../shared/types';
import { BaseService } from './base';

/**
 * CLO - Company Locations API (V2)
 * Returns the known physical office locations of a company
 */
export class Clo extends BaseService {
    /**
     * Get company locations
     * @param params - CLO V2 parameters
     * @returns Promise resolving to locations data
     */
    public async getLocations(params: CloParams): Promise<CloResponse> {
        this.validateRequired(params.query, 'query');

        try {
            const response = await this.client.post<CloResponse>('/clo', {
                query: params.query.trim(),
            });

            return response.data;
        } catch (error) {
            throw this.handleError(error, 'CLO Service');
        }
    }
}
