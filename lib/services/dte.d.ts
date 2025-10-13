import { DteParams, DteResponse } from '../shared/types';
import { BaseService } from './base';

/**
 * DTE - Company Email Finder API (V2)
 * Returns up to five general or role-based business email addresses for a company
 */
export declare class DteService extends BaseService {
  getEmails(params: DteParams): Promise<DteResponse>;
}
