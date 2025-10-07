import { TepV2Params, TepV2Response } from '../../shared/types';
import { BaseService } from '../base';

/**
 * TEP - Person Enrichment API (V2)
 * Returns enriched person data based on full name and company name
 */
export declare class TepV2 extends BaseService {
  enrichPerson(params: TepV2Params): Promise<TepV2Response>;
}
