import { NtpV1Params, NtpV1Response } from '../../shared/types';
import { BaseService } from '../base';

/**
 * NTP - Company Phone Finder API (V1)
 * Returns up to two verified phone numbers for a company
 */
export declare class NtpV1 extends BaseService {
  /**
   * Get company phones from company name
   * @param params - NTP V1 parameters
   * @returns Promise resolving to company phone information
   * @example
   * ```typescript
   * const phones = await sdk.v1.ntp({
   *   api_key: 'your-api-key',
   *   company_name: 'TechCorp'
   * });
   * console.log(phones.phone); // '+1-555-123-4567'
   * ```
   */
  getPhones(params: NtpV1Params): Promise<NtpV1Response>;
}
