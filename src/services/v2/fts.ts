import { FtsV2Params, FtsV2Response } from '../../shared/types';
import { FtsV2Params, FtsV2Response } from '../../shared/types';
import { BaseService } from '../base';

/**
 * FTS - Company Tech Stack Finder API (V2)
 * Detects the technologies a company uses
 */
export class FtsV2 extends BaseService {
  /**
   * Get company tech stack
   * @param params - FTS V2 parameters
   * @returns Promise resolving to tech stack data
   */
  public async getTechStack(params: FtsV2Params): Promise<FtsV2Response> {
    this.validateRequired(params.query, 'query');

    try {
      const response = await this.client.post<FtsV2Response>(
        '/v2/fts',
        {
          query: params.query.trim(),
        }
      );

      return response.data;
    } catch (error) {
      throw this.handleError(error, 'FTS V2 Service');
    }
  }
}
