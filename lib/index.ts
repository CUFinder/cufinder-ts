/**
 * Cufinder SDK - Type-safe TypeScript SDK for the Cufinder B2B Data Enrichment API
 *
 * @example
 * ```typescript
 * import { Cufinder } from '@cufinder/cufinder-ts';
 *
 * const client = new Cufinder('your-api-key-here');
 *
 * // API usage
 * const company = await client.cuf('apple', 'US');
 * console.log(company.domain); // 'apple.com'
 *
 * const person = await client.tep('john doe', 'apple');
 * console.log(person.name); // Enriched person data
 * ```
 */

// Main client export
export { Cufinder } from './client';

// Base API client export
export { BaseApiClient } from './base_api_client';

// Model exports
export * from './shared/models';

// Type exports
export * from './shared/types';

// Service exports (for advanced usage)
export * from './services';

// Default export for convenience
export { Cufinder as default } from './client';
