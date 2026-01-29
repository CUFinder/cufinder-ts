import { BaseService } from './base';
import { RelResponse } from '../shared/types';

/**
 * REL - Reverse Email Lookup API (V2)
 */
export class RelService extends BaseService {
    /**
     * Reverse email lookup
     * @param email - The email address to lookup
     */
    public async reverseEmailLookup(email: string): Promise<RelResponse> {
        try {
            const response = await this.client.post('/rel', {
                email: email.trim(),
            });

            return this.parseResponseData<RelResponse>(response.data);
        } catch (error) {
            throw this.handleError(error, 'REL Service');
        }
    }
}
