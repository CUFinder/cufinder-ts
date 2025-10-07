import { DtcParams, DtcResponse } from '../shared/types';
import { BaseService } from './base';

/**
 * DTC - Domain to Company Name API (V2)
 * Retrieves the registered company name associated with a given website domain
 */
export class Dtc extends BaseService {
    /**
     * Get company name from domain
     * @param params - DTC V2 parameters
     * @returns Promise resolving to company name information
     */
    public async getCompanyName(params: DtcParams): Promise<DtcResponse> {
        this.validateRequired(params.company_website, 'company_website');

        // Basic URL validation
        try {
            new URL(params.company_website.trim());
        } catch {
            throw new Error('Invalid website URL format');
        }

        try {
            const response = await this.client.post<DtcResponse>('/dtc', {
                company_website: params.company_website.trim(),
            });

            return response.data;
        } catch (error) {
            throw this.handleError(error, 'DTC Service');
        }
    }
}
