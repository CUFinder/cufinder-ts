import { NtpV2Params, NtpV2Response } from '../../shared/types';
import { BaseService } from '../base';

/**
 * NTP - Company Phone Finder API (V2)
 * Returns up to two verified phone numbers for a company
 */
export class NtpV2 extends BaseService {
  /**
   * Get company phones from company name
   * @param params - NTP V2 parameters
   * @returns Promise resolving to company phone information
   */
  public async getPhones(params: NtpV2Params): Promise<NtpV2Response> {
    this.validateRequired(params.company_name, 'company_name');

    try {
      const response = await this.client.post<NtpV2Response>(
        '/v2/ntp',
        {
          company_name: params.company_name.trim(),
        }
      );

      return response.data;
    } catch (error) {
      throw this.handleError(error, 'NTP V2 Service');
    }
  }
}
