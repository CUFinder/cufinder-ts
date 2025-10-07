import { CufinderClient } from '../client';
import { CufinderError } from '../shared/types';

/**
 * Base service class that provides common functionality for all services
 * Follows SOLID principles by providing a single responsibility base class
 */
export abstract class BaseService {
    protected client: CufinderClient;

    constructor(client: CufinderClient) {
        this.client = client;
    }

    /**
     * Validate that a required parameter is provided
     * @param value - The value to validate
     * @param paramName - The name of the parameter for error messages
     */
    protected validateRequired(value: any, paramName: string): void {
        if (value === undefined || value === null || value === '') {
            throw new CufinderError(
                `Parameter '${paramName}' is required`,
                'VALIDATION_ERROR',
                400
            );
        }
    }

    /**
     * Validate API key format
     * @param apiKey - The API key to validate
     */
    protected validateApiKey(apiKey: string): void {
        if (!apiKey || typeof apiKey !== 'string' || apiKey.trim().length === 0) {
            throw new CufinderError(
                'API key is required and must be a non-empty string',
                'VALIDATION_ERROR',
                400
            );
        }
    }

    /**
     * Handle service errors consistently
     * @param error - The error to handle
     * @param serviceName - The name of the service for error context
     */
    protected handleError(error: any, serviceName: string): CufinderError {
        if (error instanceof CufinderError) {
            return error;
        }

        // Handle HTTP errors
        if (error.response) {
            const { status, data } = error.response;
            const message = data?.message || error.message || 'Unknown error occurred';

            return new CufinderError(`${serviceName}: ${message}`, 'API_ERROR', status, data);
        }

        // Handle network errors
        if (error.request) {
            return new CufinderError(
                `${serviceName}: Network error - unable to reach API`,
                'NETWORK_ERROR',
                0
            );
        }

        // Handle other errors
        return new CufinderError(
            `${serviceName}: ${error.message || 'Unknown error occurred'}`,
            'UNKNOWN_ERROR',
            500
        );
    }
}
