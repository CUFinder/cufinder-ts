import { FweParams, FweResponse } from '../shared/types';
import { BaseService } from './base';

/**
 * FWE - LinkedIn Profile Email Finder API (V2)
 * Extracts a verified business email address from a LinkedIn profile URL
 */
export declare class Fwe extends BaseService {
  getEmailFromProfile(params: FweParams): Promise<FweResponse>;
}
