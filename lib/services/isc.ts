import { BaseService } from './base';
import { IscResponse } from '../shared/types';

/**
 * ISC - Company Saas Checker API (V2)
 */
export class IscService extends BaseService {
    /**
     * Check company you want to know is saas or not
     * @param url - The company domain you want to check is saas or not
     */
    public async isSaas(url: string): Promise<IscResponse> {
        try {
            const response = await this.client.post('/isc', {
                url: url.trim(),
            });

            return this.parseResponseData<IscResponse>(response.data);
        } catch (error) {
            throw this.handleError(error, 'ISP Service');
        }
    }
}
