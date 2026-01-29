import { NaoResponse } from '../shared/types';
import { BaseService } from './base';

/**
 * NAO - Phone Number Normalizer API (V2)
 */
export class NaoService extends BaseService {
    /**
     * Normalize phone number
     * @param phone - The phone number you want to normalize
     * @example
     * ```typescript
     * const result = await client.nao('+18006676389')
     * console.log(result.phone); // +1 800 667 6389
     * ```
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
