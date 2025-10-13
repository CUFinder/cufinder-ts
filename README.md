# CUFinder Typescript SDK

A Typescript SDK for the CUFinder API that provides access to all company and person enrichment services.

## Installation

```bash
npm install @cufinder/cufinder-ts
```

## Quick Start

```typescript
import { Cufinder } from '@cufinder/cufinder-ts';

// Initialize the client
const client = new Cufinder('your-api-key-here');

// API usage
const company = await client.cuf('apple', 'US');
console.log('Company domain:', company.domain);

// Search for companies
const companies = await client.cse({
  name: 'technology',
  country: 'US'
});
console.log('Found companies:', companies.companies);
```

## Client Configuration

```typescript
interface CufinderClientConfig {
  timeout?: number;         // Optional: Request timeout in ms (default: 30000)
}

// Initialize with API key only
const client = new Cufinder('your-api-key-here');

// Initialize with API key and options
const client = new Cufinder('your-api-key-here', { timeout: 60000 });
```

## API Endpoints Coverage

This SDK covers all 20 Cufinder API endpoints:

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


## API Reference

### Company Services

#### `sdk.cuf(params)`
**CUF - Company Name to Domain API** - Returns the official website URL of a company based on its name.

```typescript
const result = await sdk.cuf({
  company_name: 'TechCorp',
  country_code: 'US'
});
// Returns: { query: 'TechCorp', domain: 'https://techcorp.com', credit_count: 0, ... }
```

#### `sdk.lcuf(params)`
**LCUF - Company LinkedIn URL Finder API** - Finds the official LinkedIn company profile URL from a company name.

```typescript
const result = await sdk.lcuf({
  company_name: 'TechCorp'
});
// Returns: { query: 'TechCorp', company: { name: 'TechCorp', linkedin_url: '...', ... }, ... }
```

#### `sdk.dtc(params)`
**DTC - Domain to Company Name API** - Retrieves the registered company name associated with a given website domain.

```typescript
const result = await sdk.dtc({
  company_website: 'https://techcorp.com'
});
// Returns: { query: 'https://techcorp.com', company_name: 'TechCorp', ... }
```

#### `sdk.dte(params)`
**DTE - Company Email Finder API** - Returns up to five general or role-based business email addresses for a company.

```typescript
const result = await sdk.dte({
  company_website: 'https://techcorp.com'
});
// Returns: { query: 'https://techcorp.com', emails: ['info@techcorp.com', 'contact@techcorp.com'], ... }
```

#### `sdk.ntp(params)`
**NTP - Company Phone Finder API** - Returns up to two verified phone numbers for a company.

```typescript
const result = await sdk.ntp({
  company_name: 'TechCorp'
});
// Returns: { query: 'TechCorp', phones: ['+1-555-123-4567', '+1-555-123-4568'], ... }
```

#### `sdk.fcl(params)`
**FCL - Company Lookalikes Finder API** - Provides a list of similar companies based on an input company's profile.

```typescript
const result = await sdk.fcl({
  query: 'TechCorp'
});
// Returns: { query: 'TechCorp', companies: [{ name: 'Similar Company', ... }], ... }
```

#### `sdk.elf(params)`
**ELF - Company Fundraising API** - Returns detailed funding information about a company.

```typescript
const result = await sdk.elf({
  query: 'TechCorp'
});
// Returns: { query: 'TechCorp', fundraising_info: { funding_last_round_type: 'Series B', ... }, ... }
```

#### `sdk.car(params)`
**CAR - Company Revenue Finder API** - Estimates a company's annual revenue based on name.

```typescript
const result = await sdk.car({
  query: 'TechCorp'
});
// Returns: { query: 'TechCorp', annual_revenue: '$75M', ... }
```

#### `sdk.fcc(params)`
**FCC - Company Subsidiaries Finder API** - Identifies known subsidiaries of a parent company.

```typescript
const result = await sdk.fcc({
  query: 'TechCorp'
});
// Returns: { query: 'TechCorp', subsidiaries: ['Subsidiary A', 'Subsidiary B'], ... }
```

#### `sdk.fts(params)`
**FTS - Company Tech Stack Finder API** - Detects the technologies a company uses.

```typescript
const result = await sdk.fts({
  query: 'TechCorp'
});
// Returns: { query: 'TechCorp', technologies: ['React', 'Node.js', 'AWS'], ... }
```

#### `sdk.enc(params)`
**ENC - Company Enrichment API** - Provides a complete company profile from a company name.

```typescript
const result = await sdk.enc({
  query: 'TechCorp'
});
// Returns: { query: 'TechCorp', company: { name: 'TechCorp', domain: 'techcorp.com', ... }, ... }
```

#### `sdk.cec(params)`
**CEC - Company Employees Countries API** - Returns an estimated number of employees for a company.

```typescript
const result = await sdk.cec({
  query: 'TechCorp'
});
// Returns: { query: 'TechCorp', countries: { 'US': 500, 'UK': 100 }, ... }
```

#### `sdk.clo(params)`
**CLO - Company Locations API** - Returns the known physical office locations of a company.

```typescript
const result = await sdk.clo({
  query: 'TechCorp'
});
// Returns: { query: 'TechCorp', locations: [{ country: 'US', city: 'San Francisco', ... }], ... }
```

#### `sdk.cse(params?)`
**CSE - Company Search API** - Search for companies by keyword, partial name, industry, location, or other filters.

```typescript
const result = await sdk.cse({
  name: 'technology',
  country: 'US',
  industry: 'Software',
  employee_size: '201-500',
  page: 1
});
// Returns: { companies: [...], ... }
```

### Person Services

#### `sdk.rel(params)`
**REL - Reverse Email Lookup API** - Enriches an email address with detailed person and company information.

```typescript
const result = await sdk.rel({
  email: 'john.doe@techcorp.com'
});
// Returns: { query: 'john.doe@techcorp.com', person: { full_name: 'John Doe', ... }, ... }
```

#### `sdk.tep(params)`
**TEP - Person Enrichment API** - Returns enriched person data based on full name and company name.

```typescript
const result = await sdk.tep({
  full_name: 'John Doe',
  company: 'TechCorp'
});
// Returns: { query: 'John Doe at TechCorp', person: { full_name: 'John Doe', ... }, ... }
```

#### `sdk.pse(params?)`
**PSE - Person Search API** - Search for people by name, company, job title, location, or other filters.

```typescript
const result = await sdk.pse({
  full_name: 'John',
  company_name: 'TechCorp',
  job_title_role: 'Engineer',
  country: 'US',
  page: 1
});
// Returns: { peoples: [...], ... }
```

### LinkedIn Services

#### `sdk.epp(params)`
**EPP - LinkedIn Profile Enrichment API** - Takes a LinkedIn profile URL and returns enriched person and company data.

```typescript
const result = await sdk.epp({
  linkedin_url: 'https://linkedin.com/in/john-doe'
});
// Returns: { query: 'https://linkedin.com/in/john-doe', person: { full_name: 'John Doe', ... }, ... }
```

#### `sdk.fwe(params)`
**FWE - LinkedIn Profile Email Finder API** - Extracts a verified business email address from a LinkedIn profile URL.

```typescript
const result = await sdk.fwe({
  linkedin_url: 'https://linkedin.com/in/john-doe'
});
// Returns: { query: 'https://linkedin.com/in/john-doe', work_email: 'john.doe@techcorp.com', ... }
```

### Search Services

#### `sdk.lbs(params?)`
**LBS - Local Business Search API** - Search for local businesses by location, industry, or name.

```typescript
const result = await sdk.lbs({
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
} from '@cufinder/cufinder-ts';

try {
  const result = await sdk.cuf({
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
  // Request types
  CufParams,
  LcufParams,
  DtcParams,
  DteParams,
  NtpParams,
  RelParams,
  FclParams,
  ElfParams,
  CarParams,
  FccParams,
  FtsParams,
  EppParams,
  FweParams,
  TepParams,
  EncParams,
  CecParams,
  CloParams,
  CseParams,
  PseParams,
  LbsParams,

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
} from '@cufinder/cufinder-ts';
```

## Support

For support, please open an issue on the [GitHub repository](https://github.com/cufinder/cufinder-ts/issues).
