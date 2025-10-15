/**
 * Base response model for all CUFinder API responses
 */
export interface BaseResponse {
    query: string;
    credit_count: number;
}

/**
 * Base error response model
 */
export interface BaseErrorResponse {
    query: string;
    credit_count: number;
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
