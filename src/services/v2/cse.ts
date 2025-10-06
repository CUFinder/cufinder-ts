import { BaseResponse, CompanySearchResult } from '../../shared/models';
import { CseV2Params, CseV2Response } from '../../shared/types';
import { BaseService } from '../base';

/**
 * CSE - Company Search API (V2)
 * Search for companies by keyword, partial name, industry, location, or other filters
 */
export class CseV2 extends BaseService {
  /**
   * Search companies
   * @param params - CSE V2 parameters
   * @returns Promise resolving to company search results
   * @example
   * ```typescript
   * const companies = await sdk.v2.cse({
   name: 'technology',
   country: 'US'
 });
 console.log(companies.companies); // Array of company results
   * ```
   */
  public async searchCompanies(params: CseV2Params = {}): Promise<CseV2Response> {
    try {
      const searchParams: Record<string, any> = {};
      
      // Add non-undefined parameters
      if (params.name !== undefined) searchParams.name = params.name;
      if (params.country !== undefined) searchParams.country = params.country;
      if (params.state !== undefined) searchParams.state = params.state;
      if (params.city !== undefined) searchParams.city = params.city;
      if (params.followers_count_min !== undefined) searchParams.followers_count_min = params.followers_count_min;
      if (params.followers_count_max !== undefined) searchParams.followers_count_max = params.followers_count_max;
      if (params.industry !== undefined) searchParams.industry = params.industry;
      if (params.employee_size !== undefined) searchParams.employee_size = params.employee_size;
      if (params.founded_after_year !== undefined) searchParams.founded_after_year = params.founded_after_year;
      if (params.founded_before_year !== undefined) searchParams.founded_before_year = params.founded_before_year;
      if (params.funding_amount_max !== undefined) searchParams.funding_amount_max = params.funding_amount_max;
      if (params.funding_amount_min !== undefined) searchParams.funding_amount_min = params.funding_amount_min;
      if (params.products_services !== undefined) searchParams.products_services = params.products_services;
      if (params.is_school !== undefined) searchParams.is_school = params.is_school;
      if (params.annual_revenue_min !== undefined) searchParams.annual_revenue_min = params.annual_revenue_min;
      if (params.annual_revenue_max !== undefined) searchParams.annual_revenue_max = params.annual_revenue_max;
      if (params.page !== undefined) searchParams.page = params.page;

      const response = await this.client.post<CseV2Response>(
        '/v2/cse',
        searchParams
      );

      return response.data;
    } catch (error) {
      throw this.handleError(error, 'CSE V2 Service');
    }
  }
}
