import { EppV2Params, EppV2Response } from '../../shared/types';
import { BaseService } from '../base';

/**
 * EPP - LinkedIn Profile Enrichment API (V2)
 * Takes a LinkedIn profile URL and returns enriched person and company data
 */
export class EppV2 extends BaseService {
  /**
   * Enrich LinkedIn profile
   * @param params - EPP V2 parameters
   * @returns Promise resolving to enriched person data
   */
  public async enrichProfile(params: EppV2Params): Promise<EppV2Response> {
    this.validateRequired(params.linkedin_url, 'linkedin_url');

    // Basic LinkedIn URL validation
    const linkedinUrlRegex = /^https?:\/\/(www\.)?linkedin\.com\/in\/[a-zA-Z0-9-]+\/?$/;
    if (!linkedinUrlRegex.test(params.linkedin_url.trim())) {
      throw new Error('Invalid LinkedIn profile URL format. Expected format: https://linkedin.com/in/username');
    }

    try {
      const response = await this.client.post<EppV2Response>(
        '/v2/epp',
        {
          linkedin_url: params.linkedin_url.trim(),
        }
      );

      return response.data;
    } catch (error) {
      throw this.handleError(error, 'EPP V2 Service');
    }
  }
}
