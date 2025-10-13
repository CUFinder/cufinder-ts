import { RelParams, RelResponse } from '../shared/types';
import { BaseService } from './base';

/**
 * REL - Reverse Email Lookup API (V2)
 * Enriches an email address with detailed person and company information
 */
export declare class RelService extends BaseService {
  reverseEmailLookup(params: RelParams): Promise<RelResponse>;
}
