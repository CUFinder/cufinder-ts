import { BaseService } from './base';
import { BcdResponse } from '../shared/types';

/**
 * BCD - B2B Customers Finder API (V2)
 */
export class BcdService extends BaseService {
    /**
     * Extract B2B Customers From the Domain
     * @param params - The domain to extract B2B customers for
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
