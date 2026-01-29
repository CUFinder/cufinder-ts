import { NaaResponse } from '../shared/types';
import { BaseService } from './base';

/**
 * NAA - Address Normalizer API (V2)
 */
export class NaaService extends BaseService {
    /**
     * Get normalized address
     * @param address - The address you want to normalize
     * @example
     * ```typescript
     * const result = await client.naa('1095 avenue of the Americas, 6th Avenue ny 10036')
     * console.log(result.address); // 1095 AVENUE OF THE AMERICAS 6TH AVENUE NY 10036
     * ```
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
