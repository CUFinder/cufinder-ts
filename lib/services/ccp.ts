import { BaseService } from './base';
import { CcpResponse } from '../shared/types';

/**
 * CCP - Company Career Page Finder API (V2)
 */
export class CcpService extends BaseService {
    /**
     * Find companies careers page
     * @param url - The company domain you want to find it's career page
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
