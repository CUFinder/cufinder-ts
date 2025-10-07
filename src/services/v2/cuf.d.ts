import { CufV2Params, CufV2Response } from '../../shared/types';
import { BaseService } from '../base';

/**
 * CUF - Company Name to Domain API (V2)
 * Returns the official website URL of a company based on its name
 */
export declare class CufV2 extends BaseService {
  getDomain(params: CufV2Params): Promise<CufV2Response>;
}
