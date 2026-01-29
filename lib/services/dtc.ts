import { BaseService } from './base';
import { DtcResponse } from '../shared/types';

/**
 * DTC - Domain to Company Name API (V2)
 */
export class DtcService extends BaseService {
    /**
     * Get company name from domain
     * @param websiteUrl - The website URL to get company name for
     */
    public async getCompanyName(websiteUrl: string): Promise<DtcResponse> {
        try {
            const response = await this.client.post('/dtc', {
                company_website: websiteUrl.trim(),
            });

            return this.parseResponseData<DtcResponse>(response.data);
        } catch (error) {
            throw this.handleError(error, 'DTC Service');
        }
    }
}
