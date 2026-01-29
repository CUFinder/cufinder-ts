import { BaseService } from './base';
import { ElfResponse } from '../shared/types';

/**
 * ELF - Company Fundraising API (V2)
 */
export class ElfService extends BaseService {
    /**
     * Get company fundraising information
     * @param query - The company name to get fundraising info for
     */
    public async getFundraising(query: string): Promise<ElfResponse> {
        try {
            const response = await this.client.post('/elf', {
                query: query.trim(),
            });

            return this.parseResponseData<ElfResponse>(response.data);
        } catch (error) {
            throw this.handleError(error, 'ELF Service');
        }
    }
}
