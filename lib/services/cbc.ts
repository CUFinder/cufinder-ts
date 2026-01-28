import { CBCResponse } from '../shared/types';
import { BaseService } from './base';

/**
 * CBC - Company B2B or B2C Checker API (V2)
 * Checks a company's business type is `B2B` or `B2C`
 */
export class CbcService extends BaseService {
    /**
     * Get a company's business type
     * @param url - The company domain you want to check
     * @example
     * ```typescript
     * const result = await client.cbc('stripe.com')
     * console.log(result.business_type);
     * ```
     */
    public async getCompanyBusinessType(url: string): Promise<CBCResponse> {
        try {
            const response = await this.client.post('/cbc', {
                url: url.trim(),
            });

            return this.parseResponseData<CBCResponse>(response.data);
        } catch (error) {
            throw this.handleError(error, 'CBC Service');
        }
    }
}
