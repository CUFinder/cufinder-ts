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
 * // API usage
 * const company = await sdk.cuf({
 *   company_name: 'TechCorp',
 *   country_code: 'US'
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
export * from './services';

// Default export for convenience
export { CufinderSDK as default } from './sdk';

// Version information
export const VERSION = '1.1.0';

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
