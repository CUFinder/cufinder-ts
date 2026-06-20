import { BaseService } from './base';
import { CefResponse } from '../shared/types';

/**
 * CEF - Company Employee Finder API (V2)
 */
export class CefService extends BaseService {
    /**
     * Get company employees
     * @param query - The company name / website / linkedin URL
     * @param page - The page of result
     */
    public async findCompanyEmployees(query: string, page?: number): Promise<CefResponse> {
        try {
            const response = await this.client.post('/cef', {
                query: query.trim(),
                page: page,
            });

            return this.parseResponseData<CefResponse>(response.data);
        } catch (error) {
            throw this.handleError(error, 'CEF Service');
        }
    }
}
