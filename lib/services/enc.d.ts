import { EncParams, EncResponse } from '../shared/types';
import { BaseService } from './base';

/**
 * ENC - Company Enrichment API (V2)
 * Provides a complete company profile from a company name
 */
export declare class EncService extends BaseService {
  enrichCompany(params: EncParams): Promise<EncResponse>;
}
