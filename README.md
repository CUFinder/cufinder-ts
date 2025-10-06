# Cufinder SDK

A comprehensive, type-safe TypeScript SDK for the Cufinder B2B Data Enrichment API. This SDK provides a modern, promise-based interface for interacting with all 25 Cufinder API endpoints across V1 and V2 versions, following SOLID principles and best practices.

## Features

- 🚀 **Type-safe**: Full TypeScript support with comprehensive type definitions
- 🌐 **Universal**: Works in Node.js and modern browsers
- 🔧 **Modern API**: Promise-based with async/await support
- 📦 **Versioned**: Support for both V1 and V2 API versions
- 🛡️ **Error Handling**: Comprehensive error handling with custom error types
- 🧪 **Well-tested**: Extensive test coverage with Jest
- 📚 **Well-documented**: Comprehensive JSDoc documentation
- 🎯 **Complete Coverage**: All 25 Cufinder API endpoints implemented (5 V1 + 20 V2)
- 🏗️ **SOLID Principles**: Clean architecture following SOLID design principles
- 🔄 **Modular Design**: Each service in separate files for maintainability

## Installation

```bash
npm install @cufinder/sdk
```

## Quick Start

```typescript
import { CufinderSDK } from '@cufinder/sdk';

// Initialize the SDK
const sdk = new CufinderSDK({
  apiKey: 'your-api-key-here'
});

// V1 API usage
const domain = await sdk.v1.cuf.getDomain({
  apiKey: 'your-api-key',
  companyName: 'TechCorp'
});
console.log('Company domain:', domain.url);

// V2 API usage
const company = await sdk.v2.cuf.getDomain({
  company_name: 'TechCorp',
  country_code: 'US'
});
console.log('Company domain:', company.domain);

// Search for companies
const companies = await sdk.v2.cse.searchCompanies({
  name: 'technology',
  country: 'US'
});
console.log('Found companies:', companies.companies);
```

## SDK Configuration

```typescript
interface CufinderClientConfig {
  apiKey: string;           // Required: Your API key
  baseUrl?: string;         // Optional: API base URL (default: https://api.cufinder.io)
  timeout?: number;         // Optional: Request timeout in ms (default: 30000)
  retries?: number;         // Optional: Number of retries (default: 3)
  retryDelay?: number;      // Optional: Delay between retries in ms (default: 1000)
}
```

## API Reference

### V1 API Services (5 endpoints)

#### `sdk.v1.cuf.getDomain(params)`
**CUF - Company Name to Domain API (V1)** - Returns the official website URL of a company based on its name.

```typescript
const result = await sdk.v1.cuf.getDomain({
  apiKey: 'your-api-key',
  companyName: 'TechCorp'
});
// Returns: { query: 'TechCorp', url: 'https://techcorp.com', credit_count: 0, ... }
```

#### `sdk.v1.lcuf.getLinkedInUrl(params)`
**LCUF - Company LinkedIn URL Finder API (V1)** - Finds the official LinkedIn company profile URL from a company name.

```typescript
const result = await sdk.v1.lcuf.getLinkedInUrl({
  apiKey: 'your-api-key',
  companyName: 'TechCorp'
});
// Returns: { query: 'TechCorp', url: 'https://linkedin.com/company/techcorp', ... }
```

#### `sdk.v1.dtc.getCompanyName(params)`
**DTC - Domain to Company Name API (V1)** - Retrieves the registered company name associated with a given website domain.

```typescript
const result = await sdk.v1.dtc.getCompanyName({
  apiKey: 'your-api-key',
  companyWebsite: 'https://techcorp.com'
});
// Returns: { query: 'https://techcorp.com', company_name: 'TechCorp', ... }
```

#### `sdk.v1.dte.getEmails(params)`
**DTE - Company Email Finder API (V1)** - Returns up to five general or role-based business email addresses for a company.

```typescript
const result = await sdk.v1.dte.getEmails({
  apiKey: 'your-api-key',
  companyDomain: 'techcorp.com'
});
// Returns: { query: 'techcorp.com', emails: ['info@techcorp.com', 'contact@techcorp.com'], ... }
```

#### `sdk.v1.ntp.getPhones(params)`
**NTP - Company Phone Finder API (V1)** - Returns up to two verified phone numbers for a company.

```typescript
const result = await sdk.v1.ntp.getPhones({
  apiKey: 'your-api-key',
  companyName: 'TechCorp'
});
// Returns: { query: 'TechCorp', phones: ['+1-555-123-4567', '+1-555-123-4568'], ... }
```

### V2 API Services (20 endpoints)

#### Company Services

##### `sdk.v2.cuf.getDomain(params)`
**CUF - Company Name to Domain API (V2)** - Returns the official website URL of a company based on its name.

```typescript
const result = await sdk.v2.cuf.getDomain({
  company_name: 'TechCorp',
  country_code: 'US'
});
// Returns: { query: 'TechCorp', domain: 'https://techcorp.com', credit_count: 0, ... }
```

##### `sdk.v2.lcuf.getLinkedInUrl(params)`
**LCUF - Company LinkedIn URL Finder API (V2)** - Finds the official LinkedIn company profile URL from a company name.

```typescript
const result = await sdk.v2.lcuf.getLinkedInUrl({
  company_name: 'TechCorp'
});
// Returns: { query: 'TechCorp', company: { name: 'TechCorp', linkedin_url: '...', ... }, ... }
```

##### `sdk.v2.dtc.getCompanyName(params)`
**DTC - Domain to Company Name API (V2)** - Retrieves the registered company name associated with a given website domain.

```typescript
const result = await sdk.v2.dtc.getCompanyName({
  company_website: 'https://techcorp.com'
});
// Returns: { query: 'https://techcorp.com', company_name: 'TechCorp', ... }
```

##### `sdk.v2.dte.getEmails(params)`
**DTE - Company Email Finder API (V2)** - Returns up to five general or role-based business email addresses for a company.

```typescript
const result = await sdk.v2.dte.getEmails({
  company_website: 'https://techcorp.com'
});
// Returns: { query: 'https://techcorp.com', emails: ['info@techcorp.com', 'contact@techcorp.com'], ... }
```

##### `sdk.v2.ntp.getPhones(params)`
**NTP - Company Phone Finder API (V2)** - Returns up to two verified phone numbers for a company.

```typescript
const result = await sdk.v2.ntp.getPhones({
  company_name: 'TechCorp'
});
// Returns: { query: 'TechCorp', phones: ['+1-555-123-4567', '+1-555-123-4568'], ... }
```

##### `sdk.v2.fcl.getLookalikes(params)`
**FCL - Company Lookalikes Finder API (V2)** - Provides a list of similar companies based on an input company's profile.

```typescript
const result = await sdk.v2.fcl.getLookalikes({
  query: 'TechCorp'
});
// Returns: { query: 'TechCorp', companies: [{ name: 'Similar Company', ... }], ... }
```

##### `sdk.v2.elf.getFundraising(params)`
**ELF - Company Fundraising API (V2)** - Returns detailed funding information about a company.

```typescript
const result = await sdk.v2.elf.getFundraising({
  query: 'TechCorp'
});
// Returns: { query: 'TechCorp', fundraising_info: { funding_last_round_type: 'Series B', ... }, ... }
```

##### `sdk.v2.car.getRevenue(params)`
**CAR - Company Revenue Finder API (V2)** - Estimates a company's annual revenue based on name.

```typescript
const result = await sdk.v2.car.getRevenue({
  query: 'TechCorp'
});
// Returns: { query: 'TechCorp', annual_revenue: '$75M', ... }
```

##### `sdk.v2.fcc.getSubsidiaries(params)`
**FCC - Company Subsidiaries Finder API (V2)** - Identifies known subsidiaries of a parent company.

```typescript
const result = await sdk.v2.fcc.getSubsidiaries({
  query: 'TechCorp'
});
// Returns: { query: 'TechCorp', subsidiaries: ['Subsidiary A', 'Subsidiary B'], ... }
```

##### `sdk.v2.fts.getTechStack(params)`
**FTS - Company Tech Stack Finder API (V2)** - Detects the technologies a company uses.

```typescript
const result = await sdk.v2.fts.getTechStack({
  query: 'TechCorp'
});
// Returns: { query: 'TechCorp', technologies: ['React', 'Node.js', 'AWS'], ... }
```

##### `sdk.v2.enc.enrichCompany(params)`
**ENC - Company Enrichment API (V2)** - Provides a complete company profile from a company name.

```typescript
const result = await sdk.v2.enc.enrichCompany({
  query: 'TechCorp'
});
// Returns: { query: 'TechCorp', company: { name: 'TechCorp', domain: 'techcorp.com', ... }, ... }
```

##### `sdk.v2.cec.getEmployeeCountries(params)`
**CEC - Company Employees Countries API (V2)** - Returns an estimated number of employees for a company.

```typescript
const result = await sdk.v2.cec.getEmployeeCountries({
  query: 'TechCorp'
});
// Returns: { query: 'TechCorp', countries: { 'US': 500, 'UK': 100 }, ... }
```

##### `sdk.v2.clo.getLocations(params)`
**CLO - Company Locations API (V2)** - Returns the known physical office locations of a company.

```typescript
const result = await sdk.v2.clo.getLocations({
  query: 'TechCorp'
});
// Returns: { query: 'TechCorp', locations: [{ country: 'US', city: 'San Francisco', ... }], ... }
```

##### `sdk.v2.cse.searchCompanies(params?)`
**CSE - Company Search API (V2)** - Search for companies by keyword, partial name, industry, location, or other filters.

```typescript
const result = await sdk.v2.cse.searchCompanies({
  name: 'technology',
  country: 'US',
  industry: 'Software',
  employee_size: '201-500',
  page: 1
});
// Returns: { companies: [...], ... }
```

#### Person Services

##### `sdk.v2.rel.reverseEmailLookup(params)`
**REL - Reverse Email Lookup API (V2)** - Enriches an email address with detailed person and company information.

```typescript
const result = await sdk.v2.rel.reverseEmailLookup({
  email: 'john.doe@techcorp.com'
});
// Returns: { query: 'john.doe@techcorp.com', person: { full_name: 'John Doe', ... }, ... }
```

##### `sdk.v2.tep.enrichPerson(params)`
**TEP - Person Enrichment API (V2)** - Returns enriched person data based on full name and company name.

```typescript
const result = await sdk.v2.tep.enrichPerson({
  full_name: 'John Doe',
  company: 'TechCorp'
});
// Returns: { query: 'John Doe at TechCorp', person: { full_name: 'John Doe', ... }, ... }
```

##### `sdk.v2.pse.searchPeople(params?)`
**PSE - Person Search API (V2)** - Search for people by name, company, job title, location, or other filters.

```typescript
const result = await sdk.v2.pse.searchPeople({
  full_name: 'John',
  company_name: 'TechCorp',
  job_title_role: 'Engineer',
  country: 'US',
  page: 1
});
// Returns: { peoples: [...], ... }
```

#### LinkedIn Services

##### `sdk.v2.epp.enrichProfile(params)`
**EPP - LinkedIn Profile Enrichment API (V2)** - Takes a LinkedIn profile URL and returns enriched person and company data.

```typescript
const result = await sdk.v2.epp.enrichProfile({
  linkedin_url: 'https://linkedin.com/in/john-doe'
});
// Returns: { query: 'https://linkedin.com/in/john-doe', person: { full_name: 'John Doe', ... }, ... }
```

##### `sdk.v2.fwe.getEmailFromProfile(params)`
**FWE - LinkedIn Profile Email Finder API (V2)** - Extracts a verified business email address from a LinkedIn profile URL.

```typescript
const result = await sdk.v2.fwe.getEmailFromProfile({
  linkedin_url: 'https://linkedin.com/in/john-doe'
});
// Returns: { query: 'https://linkedin.com/in/john-doe', work_email: 'john.doe@techcorp.com', ... }
```

#### Search Services

##### `sdk.v2.lbs.searchLocalBusinesses(params?)`
**LBS - Local Business Search API (V2)** - Search for local businesses by location, industry, or name.

```typescript
const result = await sdk.v2.lbs.searchLocalBusinesses({
  name: 'coffee',
  city: 'San Francisco',
  industry: 'Food & Beverage',
  page: 1
});
// Returns: { companies: [...], ... }
```

## Error Handling

The SDK provides comprehensive error handling with custom error types:

```typescript
import { 
  CufinderError, 
  AuthenticationError, 
  ValidationError, 
  RateLimitError, 
  CreditLimitError,
  NotFoundError,
  NetworkError
} from '@cufinder/sdk';

try {
  const result = await sdk.v2.cuf.getDomain({
    company_name: 'TechCorp',
    country_code: 'US'
  });
} catch (error) {
  if (error instanceof AuthenticationError) {
    console.log('Authentication failed:', error.message);
  } else if (error instanceof CreditLimitError) {
    console.log('Credit limit exceeded');
  } else if (error instanceof RateLimitError) {
    console.log('Rate limit exceeded. Retry after:', error.details?.retryAfter);
  } else if (error instanceof ValidationError) {
    console.log('Validation error:', error.message, error.details);
  } else if (error instanceof NotFoundError) {
    console.log('Resource not found:', error.message);
  } else if (error instanceof NetworkError) {
    console.log('Network error:', error.message);
  } else {
    console.log('Unknown error:', error.message);
  }
}
```

## Types

The SDK exports comprehensive TypeScript types:

```typescript
import type {
  // V1 Request types
  CufV1Params,
  LcufV1Params,
  DtcV1Params,
  DteV1Params,
  NtpV1Params,
  
  // V2 Request types
  CufV2Params,
  LcufV2Params,
  DtcV2Params,
  DteV2Params,
  NtpV2Params,
  RelV2Params,
  FclV2Params,
  ElfV2Params,
  CarV2Params,
  FccV2Params,
  FtsV2Params,
  EppV2Params,
  FweV2Params,
  TepV2Params,
  EncV2Params,
  CecV2Params,
  CloV2Params,
  CseV2Params,
  PseV2Params,
  LbsV2Params,
  
  // Response types
  BaseResponse,
  ApiResponse,
  
  // Model types
  Company,
  Person,
  EnrichedCompany,
  EnrichedPerson,
  CompanySearchResult,
  PersonSearchResult,
  LocalBusinessResult,
  LookalikeCompany,
  FundraisingInfo,
  CompanyLocation,
  
  // Configuration
  CufinderClientConfig,
  
  // Error types
  CufinderError,
  AuthenticationError,
  ValidationError,
  RateLimitError,
  CreditLimitError,
  NotFoundError,
  NetworkError
} from '@cufinder/sdk';
```

## Advanced Usage

### Direct HTTP Client Access

For advanced usage, you can access the underlying HTTP client:

```typescript
const client = sdk.getClient();

// Make custom requests
const response = await client.post('/custom-endpoint', {
  custom_data: 'value'
});
```

### SDK Information

```typescript
const info = sdk.getVersion();
console.log(info);
// { version: '1.0.0', name: '@cufinder/sdk', description: '...' }
```

## Development

### Building

```bash
npm run build
```

### Testing

```bash
npm test
npm run test:watch
```

### Linting

```bash
npm run lint
npm run lint:fix
```

### Type Checking

```bash
npm run type-check
```

## Browser Support

This SDK is compatible with modern browsers that support:
- ES2020 features
- Fetch API
- Promise/async-await

For older browsers, you may need to include polyfills for:
- `fetch`
- `Promise`
- `Object.assign`
- `Array.includes`

## Node.js Support

- Node.js 16.0.0 or higher
- Uses `axios` for HTTP requests in Node.js environments

## API Endpoints Coverage

This SDK implements all 25 Cufinder API endpoints:

### V1 API Endpoints (5)
- **CUF** - Company Name to Domain API
- **LCUF** - Company LinkedIn URL Finder API
- **DTC** - Domain to Company Name API
- **DTE** - Company Email Finder API
- **NTP** - Company Phone Finder API

### V2 API Endpoints (20)
- **CUF** - Company Name to Domain API
- **LCUF** - Company LinkedIn URL Finder API
- **DTC** - Domain to Company Name API
- **DTE** - Company Email Finder API
- **NTP** - Company Phone Finder API
- **REL** - Reverse Email Lookup API
- **FCL** - Company Lookalikes Finder API
- **ELF** - Company Fundraising API
- **CAR** - Company Revenue Finder API
- **FCC** - Company Subsidiaries Finder API
- **FTS** - Company Tech Stack Finder API
- **EPP** - LinkedIn Profile Enrichment API
- **FWE** - LinkedIn Profile Email Finder API
- **TEP** - Person Enrichment API
- **ENC** - Company Enrichment API
- **CEC** - Company Employees Countries API
- **CLO** - Company Locations API
- **CSE** - Company Search API
- **PSE** - Person Search API
- **LBS** - Local Business Search API

## Architecture

The SDK follows SOLID principles:

- **Single Responsibility**: Each service class handles one specific API endpoint
- **Open/Closed**: Easy to extend with new services without modifying existing code
- **Liskov Substitution**: All services extend BaseService and can be used interchangeably
- **Interface Segregation**: Focused interfaces for each service type
- **Dependency Inversion**: Services depend on abstractions (BaseService, CufinderClient)

## License

MIT

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests
5. Run the test suite
6. Submit a pull request

## Support

For support, please open an issue on the [GitHub repository](https://github.com/cufinder/sdk/issues).