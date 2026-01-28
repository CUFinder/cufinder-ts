import { CcpResponse } from '../shared/types';
import { BaseService } from './base';

/**
 * CCP - Company Career Page Finder API (V2)
 * Find career page of companies
 */
export class CcpService extends BaseService {
    /**
     * Find companies careers page
     * @param url - The company domain you want to find it's career page
     * @example
     * ```typescript
     * const result = await client.ccp('stripe.com')
     * console.log(result.careers_page_url);
     * ```
     */
    public async findCareersPage(url: string): Promise<CcpResponse> {
        try {
            const response = await this.client.post('/ccp', {
                url: url.trim(),
            });

            return this.parseResponseData<CcpResponse>(response.data);
        } catch (error) {
            throw this.handleError(error, 'CCP Service');
        }
    }
}
