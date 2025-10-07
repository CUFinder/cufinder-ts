import { DteV2Params, DteV2Response } from '../../shared/types';
import { BaseService } from '../base';

/**
 * DTE - Company Email Finder API (V2)
 * Returns up to five general or role-based business email addresses for a company
 */
export declare class DteV2 extends BaseService {
  getEmails(params: DteV2Params): Promise<DteV2Response>;
}
