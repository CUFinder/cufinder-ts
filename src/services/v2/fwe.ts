import { FweV2Params, FweV2Response } from '../../shared/types';
import { FweV2Params, FweV2Response } from '../../shared/types';
import { BaseService } from '../base';

/**
 * FWE - LinkedIn Profile Email Finder API (V2)
 * Extracts a verified business email address from a LinkedIn profile URL
 */
export class FweV2 extends BaseService {
  /**
   * Get email from LinkedIn profile
   * @param params - FWE V2 parameters
   * @returns Promise resolving to email address
   */
  public async getEmailFromProfile(params: FweV2Params): Promise<FweV2Response> {
    this.validateRequired(params.linkedin_url, 'linkedin_url');

    // Basic LinkedIn URL validation
    const linkedinUrlRegex = /^https?:\/\/(www\.)?linkedin\.com\/in\/[a-zA-Z0-9-]+\/?$/;
    if (!linkedinUrlRegex.test(params.linkedin_url.trim())) {
      throw new Error('Invalid LinkedIn profile URL format. Expected format: https://linkedin.com/in/username');
    }

    try {
      const response = await this.client.post<FweV2Response>(
        '/v2/fwe',
        {
          linkedin_url: params.linkedin_url.trim(),
        }
      );

      return response.data;
    } catch (error) {
      throw this.handleError(error, 'FWE V2 Service');
    }
  }
}
