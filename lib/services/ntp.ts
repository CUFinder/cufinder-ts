import { NtpParams, NtpResponse } from '../shared/types';
import { BaseService } from './base';

/**
 * NTP - Company Phone Finder API (V2)
 * Returns up to two verified phone numbers for a company
 */
export class Ntp extends BaseService {
    /**
     * Get company phones from company name
     * @param params - NTP V2 parameters
     * @returns Promise resolving to company phone information
     */
    public async getPhones(params: NtpParams): Promise<NtpResponse> {
        this.validateRequired(params.company_name, 'company_name');

        try {
            const response = await this.client.post('/ntp', {
                company_name: params.company_name.trim(),
            });

            return this.parseResponseData<NtpResponse>(response.data);
        } catch (error) {
            throw this.handleError(error, 'NTP Service');
        }
    }
}
