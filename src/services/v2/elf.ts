import { BaseResponse, FundraisingInfo } from '../../shared/models';
import { ElfV2Params, ElfV2Response } from '../../shared/types';
import { BaseService } from '../base';

/**
 * ELF - Company Fundraising API (V2)
 * Returns detailed funding information about a company
 */
export class ElfV2 extends BaseService {
  /**
   * Get company fundraising information
   * @param params - ELF V2 parameters
   * @returns Promise resolving to fundraising data
   */
  public async getFundraising(params: ElfV2Params): Promise<ElfV2Response> {
    this.validateRequired(params.query, 'query');

    try {
      const response = await this.client.post<ElfV2Response>(
        '/v2/elf',
        {
          query: params.query.trim(),
        }
      );

      return response.data;
    } catch (error) {
      throw this.handleError(error, 'ELF V2 Service');
    }
  }
}
