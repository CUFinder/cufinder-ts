import { TepParams, TepResponse } from '../shared/types';
import { BaseService } from './base';

/**
 * TEP - Person Enrichment API (V2)
 * Returns enriched person data based on full name and company name
 */
export declare class Tep extends BaseService {
  enrichPerson(params: TepParams): Promise<TepResponse>;
}
