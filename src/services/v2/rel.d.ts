import { RelV2Params, RelV2Response } from '../../shared/types';
import { BaseService } from '../base';

/**
 * REL - Reverse Email Lookup API (V2)
 * Enriches an email address with detailed person and company information
 */
export declare class RelV2 extends BaseService {
  reverseEmailLookup(params: RelV2Params): Promise<RelV2Response>;
}
