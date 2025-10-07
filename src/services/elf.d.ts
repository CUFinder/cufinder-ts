import { ElfParams, ElfResponse } from '../shared/types';
import { BaseService } from './base';

/**
 * ELF - Company Fundraising API (V2)
 * Returns fundraising information for a company
 */
export declare class Elf extends BaseService {
  getFundraising(params: ElfParams): Promise<ElfResponse>;
}
