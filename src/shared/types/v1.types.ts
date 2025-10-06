/**
 * V1 API Service Parameter Types
 * These are the parameter types for the 5 V1 API services
 */

// CUF - Company Name to Domain API (V1)
export interface CufV1Params {
  api_key: string;
  company_name: string;
}

// LCUF - Company LinkedIn URL Finder API (V1)
export interface LcufV1Params {
  api_key: string;
  company_name: string;
}

// DTC - Domain to Company Name API (V1)
export interface DtcV1Params {
  api_key: string;
  company_website: string;
}

// DTE - Company Email Finder API (V1)
export interface DteV1Params {
  api_key: string;
  company_domain: string;
}

// NTP - Company Phone Finder API (V1)
export interface NtpV1Params {
  api_key: string;
  company_name: string;
}

// Re-export response types
export * from '../models/responses.model';
