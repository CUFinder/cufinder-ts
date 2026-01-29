import { BaseService } from './base';
import { NaoResponse } from '../shared/types';

/**
 * NAO - Phone Number Normalizer API (V2)
 */
export class NaoService extends BaseService {
    /**
     * Normalize phone number
     * @param phone - The phone number you want to normalize
     */
    public async normalizePhone(phone: string): Promise<NaoResponse> {
        try {
            const response = await this.client.post('/nao', {
                phone: phone.trim(),
            });

            return this.parseResponseData<NaoResponse>(response.data);
        } catch (error) {
            throw this.handleError(error, 'NAO Service');
        }
    }
}
