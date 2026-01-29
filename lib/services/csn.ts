import { BaseService } from './base';
import { CsnResponse } from '../shared/types';

/**
 * CSN - Company Snapshot API (V2)
 */
export class CsnService extends BaseService {
    /**
     * Get company snapshot info
     * @param url - The company domain you want to check
     */
    public async getCompanySnapshot(url: string): Promise<CsnResponse> {
        try {
            const response = await this.client.post('/csn', {
                url: url.trim(),
            });

            return this.parseResponseData<CsnResponse>(response.data);
        } catch (error) {
            throw this.handleError(error, 'CSN Service');
        }
    }
}
