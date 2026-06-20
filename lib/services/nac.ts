import { BaseService } from './base';
import { NacResponse } from '../shared/types';

/**
 * NAC - Company Name Normalizer API (V2)
 */
export class NacService extends BaseService {
    /**
     * Get normalized company name
     * @param company - The company name you want to normalize
     */
    public async normalizeCompanyName(company: string): Promise<NacResponse> {
        try {
            const response = await this.client.post('/nac', {
                company: company.trim(),
            });

            return this.parseResponseData<NacResponse>(response.data);
        } catch (error) {
            throw this.handleError(error, 'NAC Service');
        }
    }
}
