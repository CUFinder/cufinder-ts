import { BaseService } from './base';
import { CbcResponse } from '../shared/types';

/**
 * CBC - Company B2B or B2C Checker API (V2)
 */
export class CbcService extends BaseService {
    /**
     * Get a company's business type
     * @param url - The company domain you want to check
     */
    public async getCompanyBusinessType(url: string): Promise<CbcResponse> {
        try {
            const response = await this.client.post('/cbc', {
                url: url.trim(),
            });

            return this.parseResponseData<CbcResponse>(response.data);
        } catch (error) {
            throw this.handleError(error, 'CBC Service');
        }
    }
}
