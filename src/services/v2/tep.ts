import { TepV2Params, TepV2Response } from '../../shared/types';
import { BaseService } from '../base';

/**
 * TEP - Person Enrichment API (V2)
 * Returns enriched person data based on full name and company name
 */
export class TepV2 extends BaseService {
  /**
   * Enrich person data
   * @param params - TEP V2 parameters
   * @returns Promise resolving to enriched person data
   */
  public async enrichPerson(params: TepV2Params): Promise<TepV2Response> {
    this.validateRequired(params.full_name, 'full_name');
    this.validateRequired(params.company, 'company');

    try {
      const response = await this.client.post<TepV2Response>(
        '/v2/tep',
        {
          full_name: params.full_name.trim(),
          company: params.company.trim(),
        }
      );

      return response.data;
    } catch (error) {
      throw this.handleError(error, 'TEP V2 Service');
    }
  }
}
