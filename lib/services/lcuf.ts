import { BaseService } from './base';
import { LcufResponse } from '../shared/types';

/**
 * LCUF - Company LinkedIn URL Finder API (V2)
 */
export class LcufService extends BaseService {
    /**
     * Get LinkedIn URL from company name
     * @param companyName - The name of the company to find LinkedIn URL for
     * ```
     */
    public async getLinkedInUrl(companyName: string): Promise<LcufResponse> {
        try {
            const response = await this.client.post('/lcuf', {
                company_name: companyName.trim(),
            });

            return this.parseResponseData<LcufResponse>(response.data);
        } catch (error) {
            throw this.handleError(error, 'LCUF Service');
        }
    }
}
