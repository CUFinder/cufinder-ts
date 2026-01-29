import { BaseService } from './base';
import { CscResponse } from '../shared/types';

/**
 * CSC - Company Mission Statement API (V2)
 */
export class CscService extends BaseService {
    /**
     * Get company mission statement
     * @param url - The company domain you want to check
     */
    public async getCompanyMissionStatment(url: string): Promise<CscResponse> {
        try {
            const response = await this.client.post('/csc', {
                url: url.trim(),
            });

            return this.parseResponseData<CscResponse>(response.data);
        } catch (error) {
            throw this.handleError(error, 'CSC Service');
        }
    }
}
