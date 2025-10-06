import { BaseResponse, Person } from '../../shared/models';
import { RelV2Params, RelV2Response } from '../../shared/types';
import { BaseService } from '../base';

/**
 * REL - Reverse Email Lookup API (V2)
 * Enriches an email address with detailed person and company information
 */
export class RelV2 extends BaseService {
  /**
   * Reverse email lookup
   * @param params - REL V2 parameters
   * @returns Promise resolving to person information
   */
  public async reverseEmailLookup(params: RelV2Params): Promise<RelV2Response> {
    this.validateRequired(params.email, 'email');

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(params.email.trim())) {
      throw new Error('Invalid email address format');
    }

    try {
      const response = await this.client.post<RelV2Response>(
        '/v2/rel',
        {
          email: params.email.trim(),
        }
      );

      return response.data;
    } catch (error) {
      throw this.handleError(error, 'REL V2 Service');
    }
  }
}
