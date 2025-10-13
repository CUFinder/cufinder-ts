import { RelResponse } from '../shared/types';
import { BaseService } from './base';

/**
 * REL - Reverse Email Lookup API (V2)
 * Enriches an email address with detailed person and company information
 */
export class RelService extends BaseService {
    /**
     * Reverse email lookup
     * @param email - The email address to lookup
     * @returns Promise resolving to person information
     * @example
     * ```typescript
     * const result = await client.rel('test@example.com');
     * console.log(result.person);
     * ```
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
