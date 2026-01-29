import { BaseService } from './base';
import { NaaResponse } from '../shared/types';

/**
 * NAA - Address Normalizer API (V2)
 */
export class NaaService extends BaseService {
    /**
     * Get normalized address
     * @param address - The address you want to normalize
     */
    public async normalizeAddress(address: string): Promise<NaaResponse> {
        try {
            const response = await this.client.post('/naa', {
                address: address.trim(),
            });

            return this.parseResponseData<NaaResponse>(response.data);
        } catch (error) {
            throw this.handleError(error, 'NAA Service');
        }
    }
}
