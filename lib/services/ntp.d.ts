import { NtpParams, NtpResponse } from '../shared/types';
import { BaseService } from './base';

/**
 * NTP - Company Phone Finder API (V2)
 * Returns up to two verified phone numbers for a company
 */
export declare class NtpService extends BaseService {
  getPhones(params: NtpParams): Promise<NtpResponse>;
}
