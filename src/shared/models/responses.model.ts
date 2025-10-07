import { BaseResponse } from './base.model';
import { CompanySearchResult, LocalBusinessResult, LookalikeCompany, FundraisingInfo, Subsidiary, TechStack, EnrichedCompany } from './company.model';
import { Person, EnrichedPerson, PersonSearchResult } from './person.model';

// V1 Service Response Types

/**
 * CUF V1 Response - Company Name to Domain
 */
export interface CufV1Response extends BaseResponse {
  domain: string;
}

/**
 * LCUF V1 Response - Company LinkedIn URL Finder
 */
export interface LcufV1Response extends BaseResponse {
  linkedin_url: string;
}

/**
 * DTC V1 Response - Domain to Company Name
 */
export interface DtcV1Response extends BaseResponse {
  company_name: string;
}

/**
 * DTE V1 Response - Company Email Finder
 */
export interface DteV1Response extends BaseResponse {
  emails: string[];
}

/**
 * NTP V1 Response - Company Phone Finder
 */
export interface NtpV1Response extends BaseResponse {
  phone: string;
}

// V2 Service Response Types

/**
 * CUF V2 Response - Company Name to Domain
 */
export interface CufV2Response extends BaseResponse {
  domain: string;
}

/**
 * LCUF V2 Response - Company LinkedIn URL Finder
 */
export interface LcufV2Response extends BaseResponse {
  linkedin_url: string;
}

/**
 * DTC V2 Response - Domain to Company Name
 */
export interface DtcV2Response extends BaseResponse {
  company_name: string;
}

/**
 * DTE V2 Response - Company Email Finder
 */
export interface DteV2Response extends BaseResponse {
  emails: string[];
}

/**
 * NTP V2 Response - Company Phone Finder
 */
export interface NtpV2Response extends BaseResponse {
  phone: string;
}

/**
 * REL V2 Response - Reverse Email Lookup
 */
export interface RelV2Response extends BaseResponse {
  person: Person;
}

/**
 * FCL V2 Response - Company Lookalikes Finder
 */
export interface FclV2Response extends BaseResponse {
  lookalikes: LookalikeCompany[];
}

/**
 * ELF V2 Response - Company Fundraising API
 */
export interface ElfV2Response extends BaseResponse {
  fundraising: FundraisingInfo;
}

/**
 * CAR V2 Response - Company Revenue Finder
 */
export interface CarV2Response extends BaseResponse {
  revenue: {
    annual_revenue: string;
    currency: string;
  };
}

/**
 * FCC V2 Response - Company Subsidiaries Finder
 */
export interface FccV2Response extends BaseResponse {
  subsidiaries: Subsidiary[];
}

/**
 * FTS V2 Response - Company Tech Stack Finder
 */
export interface FtsV2Response extends BaseResponse {
  tech_stack: TechStack;
}

/**
 * EPP V2 Response - LinkedIn Profile Enrichment
 */
export interface EppV2Response extends BaseResponse {
  person: EnrichedPerson;
}

/**
 * FWE V2 Response - LinkedIn Profile Email Finder
 */
export interface FweV2Response extends BaseResponse {
  email: string;
}

/**
 * TEP V2 Response - Person Enrichment
 */
export interface TepV2Response extends BaseResponse {
  person: EnrichedPerson;
}

/**
 * ENC V2 Response - Company Enrichment
 */
export interface EncV2Response extends BaseResponse {
  company: EnrichedCompany;
}

/**
 * CEC V2 Response - Company Employees Countries
 */
export interface CecV2Response extends BaseResponse {
  countries: Record<string, number>;
}

/**
 * CLO V2 Response - Company Locations
 */
export interface CloV2Response extends BaseResponse {
  locations: Array<{
    country: string;
    state: string;
    city: string;
    address: string;
  }>;
}

/**
 * CSE V2 Response - Company Search
 */
export interface CseV2Response extends BaseResponse {
  companies: CompanySearchResult[];
  total_results: number;
  page: number;
}

/**
 * PSE V2 Response - Person Search
 */
export interface PseV2Response extends BaseResponse {
  people: PersonSearchResult[];
  total_results: number;
  page: number;
}

/**
 * LBS V2 Response - Local Business Search
 */
export interface LbsV2Response extends BaseResponse {
  businesses: LocalBusinessResult[];
  total_results: number;
  page: number;
}
