import { ElfParams, ElfResponse } from '../shared/types';
import { BaseService } from './base';

/**
 * ELF - Company Fundraising API (V2)
 * Returns detailed funding information about a company
 */
export class Elf extends BaseService {
    /**
     * Get company fundraising information
     * @param params - ELF V2 parameters
     * @returns Promise resolving to fundraising data
     */
    public async getFundraising(params: ElfParams): Promise<ElfResponse> {
        this.validateRequired(params.query, 'query');

        try {
            const response = await this.client.post<ElfResponse>('/elf', {
                query: params.query.trim(),
            });

            return response.data;
        } catch (error) {
            throw this.handleError(error, 'ELF Service');
        }
    }
}
