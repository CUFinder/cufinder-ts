import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
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
export class CufinderClient {
  private readonly httpClient: AxiosInstance;

  constructor(config: CufinderClientConfig) {
    if (!config.apiKey) {
      throw new ValidationError('API key is required');
    }

    // Initialize HTTP client
    this.httpClient = axios.create({
      baseURL: config.baseUrl || 'https://api.cufinder.io',
      timeout: config.timeout || 30000,
      headers: {
        'x-api-key': config.apiKey,
        'Content-Type': 'application/x-www-form-urlencoded',
        'User-Agent': '@cufinder/cufinder-ts/1.0.0',
      },
    });

    // Add request interceptor for logging and error handling
    this.httpClient.interceptors.request.use(
      (config) => {
        // Add request ID for tracking
        config.headers['X-Request-ID'] = this.generateRequestId();
        return config;
      },
      (error) => {
        return Promise.reject(this.handleRequestError(error));
      }
    );

    // Add response interceptor for error handling
    this.httpClient.interceptors.response.use(
      (response) => response,
      (error) => {
        return Promise.reject(this.handleResponseError(error));
      }
    );
  }

  /**
   * Make a raw HTTP request to the API
   * @param config Request configuration
   * @returns Promise resolving to the response
   */
  public async request<T = unknown>(config: SDKRequestConfig): Promise<Response<T>> {
    try {
      const axiosConfig: AxiosRequestConfig = {
        method: config.method,
        url: config.url,
        headers: config.headers,
        params: config.params,
        data: config.data,
        timeout: config.timeout,
      };

      const response: AxiosResponse<T> = await this.httpClient.request(axiosConfig);

      return {
        data: response.data,
        status: response.status,
        statusText: response.statusText,
        headers: response.headers as Record<string, string>,
      };
    } catch (error) {
      throw this.handleRequestError(error);
    }
  }

  /**
   * Make a GET request
   * @param url Request URL
   * @param params Query parameters
   * @param headers Additional headers
   * @returns Promise resolving to the response
   */
  public async get<T = unknown>(
    url: string,
    params?: Record<string, unknown>,
    headers?: Record<string, string>
  ): Promise<Response<T>> {
    return this.request<T>({
      method: 'GET',
      url,
      params,
      headers,
    });
  }

  /**
   * Make a POST request
   * @param url Request URL
   * @param data Request body
   * @param headers Additional headers
   * @returns Promise resolving to the response
   */
  public async post<T = unknown>(
    url: string,
    data?: unknown,
    headers?: Record<string, string>
  ): Promise<Response<T>> {
    return this.request<T>({
      method: 'POST',
      url,
      data,
      headers,
    });
  }

  /**
   * Make a PUT request
   * @param url Request URL
   * @param data Request body
   * @param headers Additional headers
   * @returns Promise resolving to the response
   */
  public async put<T = unknown>(
    url: string,
    data?: unknown,
    headers?: Record<string, string>
  ): Promise<Response<T>> {
    return this.request<T>({
      method: 'PUT',
      url,
      data,
      headers,
    });
  }

  /**
   * Make a DELETE request
   * @param url Request URL
   * @param headers Additional headers
   * @returns Promise resolving to the response
   */
  public async delete<T = unknown>(
    url: string,
    headers?: Record<string, string>
  ): Promise<Response<T>> {
    return this.request<T>({
      method: 'DELETE',
      url,
      headers,
    });
  }

  /**
   * Make a PATCH request
   * @param url Request URL
   * @param data Request body
   * @param headers Additional headers
   * @returns Promise resolving to the response
   */
  public async patch<T = unknown>(
    url: string,
    data?: unknown,
    headers?: Record<string, string>
  ): Promise<Response<T>> {
    return this.request<T>({
      method: 'PATCH',
      url,
      data,
      headers,
    });
  }

  /**
   * Get the current API key (masked for security)
   * @returns Masked API key
   */
  public getApiKey(): string {
    const apiKey = this.httpClient.defaults.headers['x-api-key'] as string;
    if (!apiKey) return '';
    
    return apiKey.length > 8 ? `${apiKey.substring(0, 4)}...${apiKey.substring(apiKey.length - 4)}` : '****';
  }

  /**
   * Get the base URL
   * @returns Base URL
   */
  public getBaseUrl(): string {
    return this.httpClient.defaults.baseURL || '';
  }

  /**
   * Update the API key
   * @param apiKey New API key
   */
  public setApiKey(apiKey: string): void {
    if (!apiKey) {
      throw new ValidationError('API key cannot be empty');
    }
    this.httpClient.defaults.headers['x-api-key'] = apiKey;
  }

  /**
   * Update the base URL
   * @param baseUrl New base URL
   */
  public setBaseUrl(baseUrl: string): void {
    this.httpClient.defaults.baseURL = baseUrl;
  }

  /**
   * Update the request timeout
   * @param timeout Timeout in milliseconds
   */
  public setTimeout(timeout: number): void {
    this.httpClient.defaults.timeout = timeout;
  }

  /**
   * Generate a unique request ID
   * @returns Request ID
   */
  private generateRequestId(): string {
    return `req_${Date.now()}_${Math.random().toString(36).substring(2, 15)}`;
  }

  /**
   * Handle request errors
   * @param error Error object
   * @returns Formatted error
   */
  private handleRequestError(error: unknown): CufinderError {
    if (axios.isAxiosError(error)) {
      if (error.code === 'ECONNABORTED') {
        return new NetworkError('Request timeout', 408);
      }
      if (error.code === 'ENOTFOUND' || error.code === 'ECONNREFUSED') {
        return new NetworkError('Unable to connect to API', 0);
      }
    }

    return new CufinderError(
      error instanceof Error ? error.message : 'Unknown request error',
      'REQUEST_ERROR'
    );
  }

  /**
   * Handle response errors
   * @param error Error object
   * @returns Formatted error
   */
  private handleResponseError(error: unknown): CufinderError {
    if (axios.isAxiosError(error) && error.response) {
      const { status, data } = error.response;
      const message = (data as { message?: string })?.message || error.message;

      switch (status) {
        case 401:
          return new AuthenticationError(message);
        case 400:
          return new ValidationError(message, data as Record<string, unknown>);
        case 402:
          return new CreditLimitError(message);
        case 429:
          const retryAfter = error.response.headers['retry-after'];
          return new RateLimitError(message, retryAfter ? parseInt(retryAfter, 10) : undefined);
        case 500:
        case 502:
        case 503:
        case 504:
          return new NetworkError(`Server error: ${message}`, status);
        default:
          return new CufinderError(message, 'API_ERROR', status, data as Record<string, unknown>);
      }
    }

    return this.handleRequestError(error);
  }
}
