import { ElfResponse } from '../shared/types';
import { BaseService } from './base';

/**
 * ELF - Company Fundraising API (V2)
 * Returns detailed funding information about a company
 */
export class ElfService extends BaseService {
    /**
     * Get company fundraising information
     * @param query - The company name to get fundraising info for
     * @returns Promise resolving to fundraising data
     * @example
     * ```typescript
     * const result = await client.elf('apple');
     * console.log(result.fundraising);
     * ```
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
