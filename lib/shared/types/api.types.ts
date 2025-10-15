/**
 * API Service Parameter Types
 * These are the parameter types for all API services
 */

// CUF - Company Name to Domain API
export interface CufParams {
    company_name: string;
    country_code: string;
}

// LCUF - Company LinkedIn URL Finder API
export interface LcufParams {
    company_name: string;
}

// DTC - Domain to Company Name API
export interface DtcParams {
    company_website: string;
}

// DTE - Company Email Finder API
export interface DteParams {
    company_website: string;
}

// NTP - Company Phone Finder API
export interface NtpParams {
    company_name: string;
}

// REL - Reverse Email Lookup API
export interface RelParams {
    email: string;
}

// FCL - Company Lookalikes Finder API
export interface FclParams {
    query: string;
}

// ELF - Company Fundraising API
export interface ElfParams {
    query: string;
}

// CAR - Company Revenue Finder API
export interface CarParams {
    query: string;
}

// FCC - Company Subsidiaries Finder API
export interface FccParams {
    query: string;
}

// FTS - Company Tech Stack Finder API
export interface FtsParams {
    query: string;
}

// EPP - LinkedIn Profile Enrichment API
export interface EppParams {
    linkedin_url: string;
}

// FWE - LinkedIn Profile Email Finder API
export interface FweParams {
    linkedin_url: string;
}

// TEP - Person Enrichment API
export interface TepParams {
    full_name: string;
    company: string;
}

// ENC - Company Enrichment API
export interface EncParams {
    query: string;
}

// CEC - Company Employee Count API
export interface CecParams {
    query: string;
}

// CLO - Company Locations API
export interface CloParams {
    query: string;
}

// CSE - Company Search API
export interface CseParams {
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

// PSE - Person Search API
export interface PseParams {
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

// LBS - Local Business Search API
export interface LbsParams {
    name?: string;
    country?: string;
    state?: string;
    city?: string;
    industry?: string;
    page?: number;
}

// Re-export response types
export * from '../models/responses.model';
