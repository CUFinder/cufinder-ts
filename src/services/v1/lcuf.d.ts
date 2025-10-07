import { LcufV1Params, LcufV1Response } from '../../shared/types';
import { BaseService } from '../base';

/**
 * LCUF - Company LinkedIn URL Finder API (V1)
 * Finds the official LinkedIn company profile URL from a company name
 */
export declare class LcufV1 extends BaseService {
  /**
   * Get LinkedIn URL from company name
   * @param params - LCUF V1 parameters
   * @returns Promise resolving to LinkedIn URL information
   * @example
   * ```typescript
   * const linkedin = await sdk.v1.lcuf({
   *   api_key: 'your-api-key',
   *   company_name: 'TechCorp'
   * });
   * console.log(linkedin.linkedin_url); // 'https://linkedin.com/company/techcorp'
   * ```
   */
  getLinkedInUrl(params: LcufV1Params): Promise<LcufV1Response>;
}
