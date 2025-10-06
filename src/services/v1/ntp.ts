import { NtpV1Params, NtpV1Response } from '../../shared/types';
import { BaseService } from '../base';

/**
 * NTP - Company Phone Finder API (V1)
 * Returns up to two verified phone numbers for a company
 */
export class NtpV1 extends BaseService {
  /**
   * Get company phones from company name
   * @param params - NTP V1 parameters
   * @returns Promise resolving to company phone information
   * @example
   * ```typescript
   * const phones = await sdk.v1.ntp({
   api_key: 'your-api-key',
   company_name: 'TechCorp'
 });
 console.log(phones.phone); // '+1-555-123-4567'
   * ```
   * @example
   * ```typescript
   * const phones = await sdk.v1.ntp({
   *   api_key: 'your-api-key',
   *   company_name: 'TechCorp'
   * });
   * console.log(phones.phone); // '+1-555-123-4567'
   * ```
   */
  public async getPhones(params: NtpV1Params): Promise<NtpV1Response> {
    this.validateApiKey(params.api_key);
    this.validateRequired(params.company_name, 'company_name');

    try {
      const response = await this.client.post<NtpV1Response>(
        '/ntp',
        {
          apiKey: params.api_key,
          companyName: params.company_name,
        }
      );

      return response.data;
    } catch (error) {
      throw this.handleError(error, 'NTP V1 Service');
    }
  }
}
