import { ISCResponse } from '../shared/types';
import { BaseService } from './base';

/**
 * ISC - Company Saas Checker API (V2)
 * Checks a company is SaaS or not
 */
export class IscService extends BaseService {
    /**
     * Check company you want to know is saas or not
     * @param url - The company domain you want to check is saas or not
     * @example
     * ```typescript
     * const result = await client.isc('stripe.com')
     * console.log(result.is_saas);
     * ```
     */
    public async isSaas(url: string): Promise<ISCResponse> {
        try {
            const response = await this.client.post('/isc', {
                url: url.trim(),
            });

            return this.parseResponseData<ISCResponse>(response.data);
        } catch (error) {
            throw this.handleError(error, 'ISP Service');
        }
    }
}
