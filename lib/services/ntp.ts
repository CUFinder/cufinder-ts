import { NtpResponse } from '../shared/types';
import { BaseService } from './base';

/**
 * NTP - Company Phone Finder API (V2)
 * Returns up to two verified phone numbers for a company
 */
export class NtpService extends BaseService {
    /**
     * Get company phones from company name
     * @param companyName - The name of the company to get phone numbers for
     * @returns Promise resolving to company phone information
     * @example
     * ```typescript
     * const result = await client.ntp('apple');
     * console.log(result.phones);
     * ```
     */
    public async getPhones(companyName: string): Promise<NtpResponse> {
        try {
            const response = await this.client.post('/ntp', {
                company_name: companyName.trim(),
            });

            return this.parseResponseData<NtpResponse>(response.data);
        } catch (error) {
            throw this.handleError(error, 'NTP Service');
        }
    }
}
