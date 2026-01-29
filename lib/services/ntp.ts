import { BaseService } from './base';
import { NtpResponse } from '../shared/types';

/**
 * NTP - Company Phone Finder API (V2)
 */
export class NtpService extends BaseService {
    /**
     * Get company phones from company name
     * @param companyName - The name of the company to get phone numbers for
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
