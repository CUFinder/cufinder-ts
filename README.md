# CUFinder Typescript SDK

[![](https://img.shields.io/badge/repo%20status-Active-28a745)](https://github.com/cufinder/cufinder-ts)
[![License: MIT](https://img.shields.io/badge/License-MIT-514BEE.svg)](https://opensource.org/licenses/MIT)
[![npm version](https://img.shields.io/npm/v/@cufinder/cufinder-ts.svg)](https://www.npmjs.com/package/@cufinder/cufinder-ts)

A Typescript SDK for the CUFinder API that provides access to all company and person enrichment services.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [API Reference](#api-reference)
- [Error Handling](#error-handling)
- [Types](#types)
- [Support](#support)

## Installation

```bash
npm i @cufinder/cufinder-ts
```
or
```bash
yarn add @cufinder/cufinder-ts
```
or
```bash
pnpm add @cufinder/cufinder-ts
```

## Usage

```typescript
import { Cufinder } from '@cufinder/cufinder-ts';

// Initialize the client
const client = new Cufinder('your-api-key-here');

// Initialize with more options
const client = new Cufinder('your-api-key-here', { timeout: 60000 });
```

## API Reference

This SDK covers all 20 Cufinder API (v2) endpoints:

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
- **CEC** - Company Employee Count API
- **CLO** - Company Locations API
- **CSE** - Company Search API
- **PSE** - Person Search API
- **LBS** - Local Business Search API (Google Maps Search API)


**CUF - Company Name to Domain API**

Returns the official website URL of a company based on its name.

```typescript
const result = await client.cuf('cufinder', 'US');
console.log(result);
```

**LCUF - Company LinkedIn URL Finder API**

Finds the official LinkedIn company profile URL from a company name.

```typescript
const result = await client.lcuf('cufinder');
console.log(result);
```

**DTC - Domain to Company Name API**

Retrieves the registered company name associated with a given website domain.

```typescript
const result = await client.dtc('cufinder.io');
console.log(result);
```

**DTE - Company Email Finder API**

Returns up to five general or role-based business email addresses for a company.

```typescript
const result = await client.dte('cufinder.io');
console.log(result);
```

**NTP - Company Phone Finder API**

Returns up to two verified phone numbers for a company.

```typescript
const result = await client.ntp('apple');
console.log(result);
```

**REL - Reverse Email Lookup API**

Enriches an email address with detailed person and company information.

```typescript
const result = await client.rel('iain.mckenzie@stripe.com');
console.log(result);
```

**FCL - Company Lookalikes Finder API**

Provides a list of similar companies based on an input company's profile.

```typescript
const result = await client.fcl('apple');
console.log(result);
```

**ELF - Company Fundraising API**

Returns detailed funding information about a company.

```typescript
const result = await client.elf('cufinder');
console.log(result);
```

**CAR - Company Revenue Finder API**

Estimates a company's annual revenue based on name.

```typescript
const result = await client.car('apple');
console.log(result);
```

**FCC - Company Subsidiaries Finder API**

Identifies known subsidiaries of a parent company.

```typescript
const result = await client.fcc('amazon');
console.log(result);
```

**FTS - Company Tech Stack Finder API**

Detects the technologies a company uses.

```typescript
const result = await client.fts('cufinder');
console.log(result);
```

**EPP - LinkedIn Profile Enrichment API**

Takes a LinkedIn profile URL and returns enriched person and company data.

```typescript
const result = await client.epp('linkedin.com/in/iain-mckenzie');
console.log(result);
```

**FWE - LinkedIn Profile Email Finder API**

Extracts a verified business email address from a LinkedIn profile URL.

```typescript
const result = await client.fwe('linkedin.com/in/iain-mckenzie');
console.log(result);
```

**TEP - Person Enrichment API**

Returns enriched person data based on full name and company name.

```typescript
const result = await client.tep('iain mckenzie', 'stripe');
console.log(result);
```

**ENC - Company Enrichment API**

Provides a complete company profile from a company name.

```typescript
const result = await client.enc('cufinder');
console.log(result);
```

**CEC - Company Employee Count API**

Returns an estimated number of employees for a company.

```typescript
const result = await client.cec('cufinder');
console.log(result);
```

**CLO - Company Locations API**

Returns the known physical office locations of a company.

```typescript
const result = await client.clo('apple');
console.log(result);
```

**CSE - Company Search API**

Search for companies by keyword, partial name, industry, location, or other filters.

```typescript
const result = await client.cse({
  name: 'cufinder',
  country: 'germany',
  state: 'hamburg',
  city: 'hamburg'
});
console.log(result);
```

**PSE - Person Search API**

Search for people by name, company, job title, location, or other filters.

```typescript
const result = await client.pse({
  full_name: 'iain mckenzie',
  company_name: 'stripe'
});
console.log(result);
```

**LBS - Local Business Search API (Google Maps Search API)**

Search for local businesses by location, industry, or name.

```typescript
const result = await client.lbs({
  country: 'united states',
  state: 'california',
  page: 1
});
console.log(result);
```

## Error Handling

The SDK provides comprehensive error handling with custom error types:

```typescript
import {
  CufinderError,
  AuthenticationError,
  CreditLimitError,
  NotFoundError,
  PayloadError,
  RateLimitError,
  ServerError,
  NetworkError
} from '@cufinder/cufinder-ts';

try {
  const result = await client.cuf('cufinder', 'US');
} catch (error) {
  if (error instanceof AuthenticationError) {
    // 401 - Invalid API key
    console.log('Authentication failed:', error.message);
  } else if (error instanceof CreditLimitError) {
    // 400 - Not enough credit
    console.log('Not enough credit:', error.message);
  } else if (error instanceof NotFoundError) {
    // 404 - Not found result
    console.log('Not found result:', error.message);
  } else if (error instanceof PayloadError) {
    // 422 - Error in the payload
    console.log('Payload error:', error.message, error.details);
  } else if (error instanceof RateLimitError) {
    // 429 - Rate limit exceeded
    console.log('Rate limit exceeded. Retry after:', error.details?.retryAfter);
  } else if (error instanceof ServerError) {
    // 500, 501, ... - Server errors
    console.log('Server error:', error.message, 'Status:', error.statusCode);
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
  CreditLimitError,
  NotFoundError,
  PayloadError,
  RateLimitError,
  ServerError,
  NetworkError
} from '@cufinder/cufinder-ts';
```

## Support

For support, please open an issue on the [GitHub repository](https://github.com/cufinder/cufinder-ts/issues).
