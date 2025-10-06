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
 *   apiKey: 'your-api-key',
 *   companyName: 'TechCorp'
 * });
 * 
 * // V2 API usage
 * const company = await sdk.v2.cuf.getDomain({
 *   company_name: 'TechCorp',
 *   country_code: 'US'
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
export const VERSION = '1.0.0';

// SDK metadata
export const SDK_INFO = {
  name: '@cufinder/cufinder-ts',
  version: VERSION,
  description: 'Type-safe TypeScript SDK for the Cufinder B2B Data Enrichment API',
  homepage: 'https://github.com/cufinder/cufinder-ts',
  repository: 'https://github.com/cufinder/cufinder-ts.git',
  author: 'Cufinder Team',
  license: 'MIT',
} as const;
