/**
 * V2 API Service Parameter Types
 * These are the parameter types for the 20 V2 API services
 */

// CUF - Company Name to Domain API (V2)
export interface CufV2Params {
  company_name: string;
  country_code: string;
}

// LCUF - Company LinkedIn URL Finder API (V2)
export interface LcufV2Params {
  company_name: string;
}

// DTC - Domain to Company Name API (V2)
export interface DtcV2Params {
  company_website: string;
}

// DTE - Company Email Finder API (V2)
export interface DteV2Params {
  company_website: string;
}

// NTP - Company Phone Finder API (V2)
export interface NtpV2Params {
  company_name: string;
}

// REL - Reverse Email Lookup API (V2)
export interface RelV2Params {
  email: string;
}

// FCL - Company Lookalikes Finder API (V2)
export interface FclV2Params {
  query: string;
}

// ELF - Company Fundraising API (V2)
export interface ElfV2Params {
  query: string;
}

// CAR - Company Revenue Finder API (V2)
export interface CarV2Params {
  query: string;
}

// FCC - Company Subsidiaries Finder API (V2)
export interface FccV2Params {
  query: string;
}

// FTS - Company Tech Stack Finder API (V2)
export interface FtsV2Params {
  query: string;
}

// EPP - LinkedIn Profile Enrichment API (V2)
export interface EppV2Params {
  linkedin_url: string;
}

// FWE - LinkedIn Profile Email Finder API (V2)
export interface FweV2Params {
  linkedin_url: string;
}

// TEP - Person Enrichment API (V2)
export interface TepV2Params {
  full_name: string;
  company: string;
}

// ENC - Company Enrichment API (V2)
export interface EncV2Params {
  query: string;
}

// CEC - Company Employees Countries API (V2)
export interface CecV2Params {
  query: string;
}

// CLO - Company Locations API (V2)
export interface CloV2Params {
  query: string;
}

// CSE - Company Search API (V2)
export interface CseV2Params {
  name?: string;
  country?: string;
  state?: string;
  city?: string;
  followers_count_min?: number;
  followers_count_max?: number;
  industry?: string;
  employee_size?: string;
  founded_after_year?: number;
  founded_before_year?: number;
  funding_amount_max?: number;
  funding_amount_min?: number;
  products_services?: string[];
  is_school?: boolean;
  annual_revenue_min?: number;
  annual_revenue_max?: number;
  page?: number;
}

// PSE - Person Search API (V2)
export interface PseV2Params {
  full_name?: string;
  country?: string;
  state?: string;
  city?: string;
  job_title_role?: string;
  job_title_level?: string;
  company_country?: string;
  company_state?: string;
  company_city?: string;
  company_name?: string;
  company_linkedin_url?: string;
  company_industry?: string;
  company_employee_size?: string;
  company_products_services?: string[];
  company_annual_revenue_min?: number;
  company_annual_revenue_max?: number;
  page?: number;
}

// LBS - Local Business Search API (V2)
export interface LbsV2Params {
  name?: string;
  country?: string;
  state?: string;
  city?: string;
  industry?: string;
  page?: number;
}

// Re-export response types
export * from '../models/responses.model';
