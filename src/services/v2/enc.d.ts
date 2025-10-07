import { EncV2Params, EncV2Response } from '../../shared/types';
import { BaseService } from '../base';

/**
 * ENC - Company Enrichment API (V2)
 * Provides a complete company profile from a company name
 */
export declare class EncV2 extends BaseService {
  enrichCompany(params: EncV2Params): Promise<EncV2Response>;
}
