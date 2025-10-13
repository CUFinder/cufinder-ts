import { RelParams, RelResponse } from '../shared/types';
import { BaseService } from './base';

/**
 * REL - Reverse Email Lookup API (V2)
 * Enriches an email address with detailed person and company information
 */
export class Rel extends BaseService {
    /**
     * Reverse email lookup
     * @param params - REL V2 parameters
     * @returns Promise resolving to person information
     */
    public async reverseEmailLookup(params: RelParams): Promise<RelResponse> {
        this.validateRequired(params.email, 'email');

        try {
            const response = await this.client.post('/rel', {
                email: params.email.trim(),
            });

            return this.parseResponseData<RelResponse>(response.data);
        } catch (error) {
            throw this.handleError(error, 'REL Service');
        }
    }
}
