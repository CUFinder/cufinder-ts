import { NtpV2Params, NtpV2Response } from '../../shared/types';
import { BaseService } from '../base';

/**
 * NTP - Company Phone Finder API (V2)
 * Returns up to two verified phone numbers for a company
 */
export declare class NtpV2 extends BaseService {
  getPhones(params: NtpV2Params): Promise<NtpV2Response>;
}
