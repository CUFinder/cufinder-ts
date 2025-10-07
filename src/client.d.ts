import {
  CufinderClientConfig,
  RequestConfig as SDKRequestConfig,
  Response,
  CufinderError,
  NetworkError,
  AuthenticationError,
  RateLimitError,
  ValidationError,
  CreditLimitError,
} from './shared/types';

/**
 * Main Cufinder API client class
 * Provides a type-safe interface for interacting with the Cufinder B2B data enrichment API
 * Follows SOLID principles:
 * - Single Responsibility: Handles HTTP communication only
 * - Open/Closed: Extensible through service classes
 * - Liskov Substitution: Can be replaced with mock implementations
 * - Interface Segregation: Provides focused interfaces
 * - Dependency Inversion: Depends on abstractions, not concretions
 */
export declare class CufinderClient {
  constructor(config: CufinderClientConfig);

  /**
   * Make a raw HTTP request to the API
   * @param config Request configuration
   * @returns Promise resolving to the response
   */
  request<T = unknown>(config: SDKRequestConfig): Promise<Response<T>>;

  /**
   * Make a GET request
   * @param url Request URL
   * @param params Query parameters
   * @param headers Additional headers
   * @returns Promise resolving to the response
   */
  get<T = unknown>(
    url: string,
    params?: Record<string, unknown>,
    headers?: Record<string, string>
  ): Promise<Response<T>>;

  /**
   * Make a POST request
   * @param url Request URL
   * @param data Request body
   * @param headers Additional headers
   * @returns Promise resolving to the response
   */
  post<T = unknown>(
    url: string,
    data?: unknown,
    headers?: Record<string, string>
  ): Promise<Response<T>>;

  /**
   * Make a PUT request
   * @param url Request URL
   * @param data Request body
   * @param headers Additional headers
   * @returns Promise resolving to the response
   */
  put<T = unknown>(
    url: string,
    data?: unknown,
    headers?: Record<string, string>
  ): Promise<Response<T>>;

  /**
   * Make a DELETE request
   * @param url Request URL
   * @param headers Additional headers
   * @returns Promise resolving to the response
   */
  delete<T = unknown>(
    url: string,
    headers?: Record<string, string>
  ): Promise<Response<T>>;

  /**
   * Make a PATCH request
   * @param url Request URL
   * @param data Request body
   * @param headers Additional headers
   * @returns Promise resolving to the response
   */
  patch<T = unknown>(
    url: string,
    data?: unknown,
    headers?: Record<string, string>
  ): Promise<Response<T>>;

  /**
   * Get the current API key (masked for security)
   * @returns Masked API key
   */
  getApiKey(): string;

  /**
   * Get the base URL
   * @returns Base URL
   */
  getBaseUrl(): string;

  /**
   * Update the API key
   * @param apiKey New API key
   */
  setApiKey(apiKey: string): void;

  /**
   * Update the base URL
   * @param baseUrl New base URL
   */
  setBaseUrl(baseUrl: string): void;

  /**
   * Update the request timeout
   * @param timeout Timeout in milliseconds
   */
  setTimeout(timeout: number): void;
}
