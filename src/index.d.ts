/**
 * Cufinder SDK - Type-safe TypeScript SDK for the Cufinder B2B Data Enrichment API
 * 
 * @example
 * ```typescript
 * import { CufinderSDK } from '@cufinder/cufinder-ts';
 * 
 * const sdk = new CufinderSDK({
 *   apiKey: 'your-api-key-here'
 * });
 * 
 * // V1 API usage
 * const domain = await sdk.v1.cuf.getDomain({
 *   api_key: 'your-api-key',
 *   company_name: 'TechCorp'
 * });
 * 
 * // V2 API usage
 * const emails = await sdk.v2.dte.getEmails({
 *   company_website: 'https://techcorp.com'
 * });
 * 
 * // Search for companies
 * const companies = await sdk.v2.cse.searchCompanies({
 *   name: 'technology',
 *   country: 'US'
 * });
 * ```
 */

// Main SDK export
export { CufinderSDK } from './sdk';

// Client export
export { CufinderClient } from './client';

// Model exports
export * from './shared/models';

// Type exports
export * from './shared/types';

// Service exports (for advanced usage)
export * from './services/v1';
export * from './services/v2';

// Default export for convenience
export { CufinderSDK as default } from './sdk';

// Version information
export declare const VERSION: string;

// SDK metadata
export declare const SDK_INFO: {
  readonly name: string;
  readonly version: string;
  readonly description: string;
  readonly homepage: string;
  readonly repository: string;
  readonly author: string;
  readonly license: string;
};
