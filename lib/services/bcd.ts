import { BcdResponse } from '../shared/types';
import { BaseService } from './base';

/**
 * BCD - B2B Customers Finder API (V2)
 * Search for local businesses by location, industry, or name
 */
export class BcdService extends BaseService {
    /**
     * Extract B2B Customers From the Domain
     * @param params - The domain to extract B2B customers for
     * @example
     * ```typescript
     * const result = await client.bcd('stripe.com')
     * console.log(result.customers);
     * ```
     */
    public async extractB2BCustomers(url: string): Promise<BcdResponse> {
        try {
            const response = await this.client.post('/bcd', {
                url: url.trim(),
            });

            return this.parseResponseData<BcdResponse>(response.data);
        } catch (error) {
            throw this.handleError(error, 'BCD Service');
        }
    }
}
