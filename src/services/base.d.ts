import { CufinderClient } from '../client';
import { CufinderError } from '../shared/types';

/**
 * Base service class that provides common functionality for all services
 * Follows SOLID principles by providing a single responsibility base class
 */
export declare abstract class BaseService {
  protected client: CufinderClient;

  constructor(client: CufinderClient);

  /**
   * Validate that a required parameter is provided
   * @param value - The value to validate
   * @param paramName - The name of the parameter for error messages
   */
  protected validateRequired(value: any, paramName: string): void;

  /**
   * Validate API key format
   * @param apiKey - The API key to validate
   */
  protected validateApiKey(apiKey: string): void;

  /**
   * Handle service errors consistently
   * @param error - The error to handle
   * @param serviceName - The name of the service for error context
   */
  protected handleError(error: any, serviceName: string): CufinderError;
}
