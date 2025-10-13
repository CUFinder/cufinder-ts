/**
 * Base response model for all CUFinder API responses
 */
export interface BaseResponse {
    query: string;
    credit_count: number;
    meta_data: {
        user_id: number;
        service_name: string;
        spent_time: number;
        status_code?: number;
        message?: string;
        query_log: string;
    };
}

/**
 * Base error response model
 */
export interface BaseErrorResponse {
    query: string;
    credit_count: number;
    meta_data: {
        user_id: number;
        service_name: string;
        spent_time: number;
        status_code: number;
        message: string;
        query_log: string;
    };
}

/**
 * API response wrapper
 */
export interface ApiResponse<T = unknown> {
    status: number;
    data: T;
    message?: string;
    error?: string;
}
