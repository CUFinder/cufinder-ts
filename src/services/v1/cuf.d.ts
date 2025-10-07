import { CufV1Params, CufV1Response } from '../../shared/types';
import { BaseService } from '../base';

/**
 * CUF - Company Name to Domain API (V1)
 * Returns the official website URL of a company based on its name
 */
export declare class CufV1 extends BaseService {
  /**
   * Get company domain from company name
   * @param params - CUF V1 parameters
   * @returns Promise resolving to company domain information
   * @example
   * ```typescript
   * const domain = await sdk.v1.cuf({
   *   api_key: 'your-api-key',
   *   company_name: 'TechCorp'
   * });
   * console.log(domain.domain); // 'techcorp.com'
   * ```
   */
  getDomain(params: CufV1Params): Promise<CufV1Response>;
}
