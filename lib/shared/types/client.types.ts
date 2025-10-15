/**
 * Client configuration and HTTP types
 */

export interface CufinderClientConfig {
    timeout?: number;
}

export interface RequestConfig {
    method: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';
    url: string;
    headers?: Record<string, string>;
    params?: Record<string, unknown>;
    data?: unknown;
    timeout?: number;
}

export interface Response<T = unknown> {
    data: T;
    status: number;
    statusText: string;
    headers: Record<string, string>;
}

/**
 * SDK Error types
 */
export class CufinderError extends Error {
    constructor(
        message: string,
        public code: string,
        public statusCode?: number,
        public details?: Record<string, unknown>
    ) {
        super(message);
        this.name = 'CufinderError';
    }
}

export class NetworkError extends CufinderError {
    constructor(message: string, statusCode?: number) {
        super(message, 'NETWORK_ERROR', statusCode);
        this.name = 'NetworkError';
    }
}

export class AuthenticationError extends CufinderError {
    constructor(message: string = 'Authentication failed') {
        super(message, 'AUTH_ERROR', 401);
        this.name = 'AuthenticationError';
    }
}

export class RateLimitError extends CufinderError {
    constructor(message: string = 'Rate limit exceeded', retryAfter?: number) {
        super(message, 'RATE_LIMIT_ERROR', 429, { retryAfter });
        this.name = 'RateLimitError';
    }
}

export class CreditLimitError extends CufinderError {
    constructor(message: string = 'Not enough credit') {
        super(message, 'CREDIT_LIMIT_ERROR', 400);
        this.name = 'CreditLimitError';
    }
}

export class NotFoundError extends CufinderError {
    constructor(message: string = 'Not found result') {
        super(message, 'NOT_FOUND_ERROR', 404);
        this.name = 'NotFoundError';
    }
}

export class PayloadError extends CufinderError {
    constructor(message: string = 'Error in the payload', details?: Record<string, unknown>) {
        super(message, 'PAYLOAD_ERROR', 422, details);
        this.name = 'PayloadError';
    }
}

export class ServerError extends CufinderError {
    constructor(message: string = 'Server error', statusCode: number = 500) {
        super(message, 'SERVER_ERROR', statusCode);
        this.name = 'ServerError';
    }
}

/**
 * Utility types
 */
export type DeepPartial<T> = {
    [P in keyof T]?: T[P] extends object ? DeepPartial<T[P]> : T[P];
};

export type RequiredFields<T, K extends keyof T> = T & Required<Pick<T, K>>;

export type OptionalFields<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>;
