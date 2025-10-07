import { PseV2Params, PseV2Response } from '../../shared/types';
import { BaseService } from '../base';

/**
 * PSE - Person Search API (V2)
 * Search for people by name, company, job title, location, or other filters
 */
export class PseV2 extends BaseService {
  /**
   * Search people
   * @param params - PSE V2 parameters
   * @returns Promise resolving to person search results
   */
  public async searchPeople(params: PseV2Params = {}): Promise<PseV2Response> {
    try {
      const searchParams: Record<string, any> = {};
      
      // Add non-undefined parameters
      if (params['full_name'] !== undefined) searchParams['full_name'] = params['full_name'];
      if (params['country'] !== undefined) searchParams['country'] = params['country'];
      if (params['state'] !== undefined) searchParams['state'] = params['state'];
      if (params['city'] !== undefined) searchParams['city'] = params['city'];
      if (params['job_title_role'] !== undefined) searchParams['job_title_role'] = params['job_title_role'];
      if (params['job_title_level'] !== undefined) searchParams['job_title_level'] = params['job_title_level'];
      if (params['company_country'] !== undefined) searchParams['company_country'] = params['company_country'];
      if (params['company_state'] !== undefined) searchParams['company_state'] = params['company_state'];
      if (params['company_city'] !== undefined) searchParams['company_city'] = params['company_city'];
      if (params['company_name'] !== undefined) searchParams['company_name'] = params['company_name'];
      if (params['company_linkedin_url'] !== undefined) searchParams['company_linkedin_url'] = params['company_linkedin_url'];
      if (params['company_industry'] !== undefined) searchParams['company_industry'] = params['company_industry'];
      if (params['company_employee_size'] !== undefined) searchParams['company_employee_size'] = params['company_employee_size'];
      if (params['company_products_services'] !== undefined) searchParams['company_products_services'] = params['company_products_services'];
      if (params['company_annual_revenue_min'] !== undefined) searchParams['company_annual_revenue_min'] = params['company_annual_revenue_min'];
      if (params['company_annual_revenue_max'] !== undefined) searchParams['company_annual_revenue_max'] = params['company_annual_revenue_max'];
      if (params['page'] !== undefined) searchParams['page'] = params['page'];

      const response = await this.client.post<PseV2Response>(
        '/v2/pse',
        searchParams
      );

      return response.data;
    } catch (error) {
      throw this.handleError(error, 'PSE V2 Service');
    }
  }
}
