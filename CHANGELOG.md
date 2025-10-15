# Cufinder TypeScript SDK Changelog

## 1.3.0 (October 15, 2025)

#### Bug Fixes
- **Updated NTP response type**: Changed `NtpResponse.phones` from `string` to `string[]` to match API response format
- **Updated error handling**: Fixed HTTP status code mappings to match API specifications
  - **400**: Now correctly maps to `CreditLimitError` (not enough credit)
  - **401**: Maps to `AuthenticationError` (invalid API key)
  - **404**: Maps to `NotFoundError` (not found result)
  - **422**: Maps to `PayloadError` (error in the payload)
  - **500, 501, 502, 503, 504, 505, 506, 507, 508, 510, 511**: Maps to `ServerError` (server errors)
- **Added new error classes**: `PayloadError` and `ServerError` for better error categorization
- **Updated error messages**: Improved default error messages to match API responses

#### Maintenance
- **Updated JSDoc examples**: Synchronized all JSDoc `@example` tags in `client.ts` to match README.md examples
- **Improved documentation consistency**: Ensured all service examples use consistent `const result = await client.method(...)` and `console.log(result)` format




## 1.2.0 (October 13, 2025)

#### Breaking Changes
- **Constructor signature updated**: Changed from `new CufinderSDK(config)` to `new Cufinder(apiKey, options?)`
- **Service methods now use positional parameters**: All services with 1-2 parameters now accept direct arguments instead of objects
  - `client.cuf('apple', 'US')` instead of `client.cuf({ companyName: 'apple', countryCode: 'US' })`
  - `client.tep('john doe', 'apple')` instead of `client.tep({ fullName: 'john doe', company: 'apple' })`
- **Removed client options**: `retry`, `retryDelay`, and `baseUrl` options have been removed from client configuration
- **Renamed main class**: `CufinderSDK` renamed to `Cufinder`
- **Directory structure**: Changed from `src/` to `lib/` and `test/` to `tests/`

#### Features
- **Comprehensive V2 API services**: Added all V2 services including CUF, LCUF, DTC, DTE, TEP, CSE, PSE, LBS, and more
- **Enhanced type safety**: All services now use explicit `Promise<ResponseType>` return types
- **Extensive JSDoc documentation**: Added complete `@example` sections for all service methods and main client
- **Improved error handling**: Better response parsing with automatic handling of API response wrapper format
- **Service architecture**: Renamed all service classes to `XxxService` pattern (e.g., `CufService`, `TepService`)

#### API Improvements
- **Response parsing fix**: Fixed handling of API responses wrapped in `{ status: 1, data: {...} }` format
- **Removed client-side validation**: All parameter validation now handled by the API server
- **Simplified service interface**: Services expose direct methods without complex parameter objects
- **Better TypeScript inference**: Fixed minification issues that caused `typeof client` to be `any`

#### Refactor & Structure Improvements
- **Complete SDK restructuring**: Renamed files and classes for better organization
  - `client.ts` → `base_api_client.ts` (renamed `CufinderClient` to `BaseApiClient`)
  - `sdk.ts` → `client.ts` (renamed `CufinderSDK` to `Cufinder`)
- **Removed deprecated methods**: Eliminated `getClient()` method and `getVersion()` method
- **Updated build system**: Improved tsup configuration with proper TypeScript declarations
- **Test suite updates**: Updated all tests to reflect new structure and parameter format

#### Bug Fixes
- **Fixed response parsing**: Corrected handling of wrapped API responses across all services
- **Fixed TypeScript types**: Resolved issues with class name minification affecting type inference
- **Removed unused code**: Cleaned up unused imports, methods, and validation logic
- **Fixed service exports**: Ensured all services are properly exported and accessible

#### Maintenance
- **Updated development tools**: Enhanced linter, prettier, and TypeScript configurations
- **Improved build process**: Added prebuild script and better error handling
- **Documentation updates**: Comprehensive README updates with new usage examples
- **Code quality**: Added ESLint rules and Prettier formatting for consistent code style




## 1.1.0

#### Features
- Added comprehensive V2 API services including LBS (Local Business Search), CUF (Company URL Finder), EPP (Email Pattern Predictor), and more
- Implemented type-safe service architecture with proper error handling
- Added extensive JSDoc documentation for all services

#### Refactor & Structure Improvement
- Complete SDK structure overhaul with improved service organization
- Removed all deprecated V1 services and replaced with V2 equivalents
- Implemented base service class for consistent error handling and validation
- Updated build system with tsup for better bundling
- Added proper TypeScript declarations for all services

#### Bug Fixes
- Fixed inline validation issues in CUF, EPP, FWE, and REL services
- Improved error handling across all services
- Removed unused imports and methods

#### Maintenance
- Updated linter and prettier configuration
- Added prebuild script for clean builds
- Improved package.json scripts for development workflow
- Updated README documentation




## 1.0.2

Initial stable release with basic API functionality.




## 1.0.0

First release of the Cufinder TypeScript SDK.
