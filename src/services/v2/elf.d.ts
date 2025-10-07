import { ElfV2Params, ElfV2Response } from '../../shared/types';
import { BaseService } from '../base';

/**
 * ELF - Company Fundraising API (V2)
 * Returns fundraising information for a company
 */
export declare class ElfV2 extends BaseService {
  getFundraising(params: ElfV2Params): Promise<ElfV2Response>;
}
