import { TepResponse } from '../shared/types';
import { BaseService } from './base';

/**
 * TEP - Person Enrichment API (V2)
 * Returns enriched person data based on full name and company name
 */
export class TepService extends BaseService {
    /**
     * Enrich person data
     * @param fullName - The full name of the person to enrich
     * @param company - The company name where the person works
     * @returns Promise resolving to enriched person data
     * @example
     * ```typescript
     * const person = await client.tep('john doe', 'apple');
     * console.log(person.name); // Enriched person data
     * ```
     */
    public async enrichPerson(fullName: string, company: string): Promise<TepResponse> {
        try {
            const response = await this.client.post('/tep', {
                full_name: fullName.trim(),
                company: company.trim(),
            });

            return this.parseResponseData<TepResponse>(response.data);
        } catch (error) {
            throw this.handleError(error, 'TEP Service');
        }
    }
}
