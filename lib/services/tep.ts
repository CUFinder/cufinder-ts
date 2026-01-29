import { BaseService } from './base';
import { TepResponse } from '../shared/types';

/**
 * TEP - Person Enrichment API (V2)
 */
export class TepService extends BaseService {
    /**
     * Enrich person data
     * @param fullName - The full name of the person to enrich
     * @param company - The company name where the person works
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
