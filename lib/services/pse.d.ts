import { PseParams, PseResponse } from '../shared/types';
import { BaseService } from './base';

/**
 * PSE - Person Search API (V2)
 * Search for people by various criteria
 */
export declare class PseService extends BaseService {
  searchPeople(params?: PseParams): Promise<PseResponse>;
}
