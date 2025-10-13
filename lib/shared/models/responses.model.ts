import { BaseResponse } from './base.model';
import {
    CompanySearchResult,
    EnrichedCompany,
    FundraisingInfo,
    LocalBusinessResult,
    LookalikeCompany,
    Subsidiary,
    TechStack,
} from './company.model';
import { EnrichedPerson, Person, PersonSearchResult } from './person.model';

// Service Response Types

/**
 * CUF Response - Company Name to Domain
 */
export interface CufResponse extends BaseResponse {
    domain: string;
}

/**
 * LCUF Response - Company LinkedIn URL Finder
 */
export interface LcufResponse extends BaseResponse {
    linkedin_url: string;
}

/**
 * DTC Response - Domain to Company Name
 */
export interface DtcResponse extends BaseResponse {
    company_name: string;
}

/**
 * DTE Response - Company Email Finder
 */
export interface DteResponse extends BaseResponse {
    emails: string[];
}

/**
 * NTP Response - Company Phone Finder
 */
export interface NtpResponse extends BaseResponse {
    phone: string;
}

/**
 * REL Response - Reverse Email Lookup
 */
export interface RelResponse extends BaseResponse {
    person: Person;
}

/**
 * FCL Response - Company Lookalikes Finder
 */
export interface FclResponse extends BaseResponse {
    lookalikes: LookalikeCompany[];
}

/**
 * ELF Response - Company Fundraising API
 */
export interface ElfResponse extends BaseResponse {
    fundraising: FundraisingInfo;
}

/**
 * CAR Response - Company Revenue Finder
 */
export interface CarResponse extends BaseResponse {
    annual_revenue: string;
}

/**
 * FCC Response - Company Subsidiaries Finder
 */
export interface FccResponse extends BaseResponse {
    subsidiaries: Subsidiary[];
}

/**
 * FTS Response - Company Tech Stack Finder
 */
export interface FtsResponse extends BaseResponse {
    tech_stack: TechStack;
}

/**
 * EPP Response - LinkedIn Profile Enrichment
 */
export interface EppResponse extends BaseResponse {
    person: EnrichedPerson;
}

/**
 * FWE Response - LinkedIn Profile Email Finder
 */
export interface FweResponse extends BaseResponse {
    email: string;
}

/**
 * TEP Response - Person Enrichment
 */
export interface TepResponse extends BaseResponse {
    person: EnrichedPerson;
}

/**
 * ENC Response - Company Enrichment
 */
export interface EncResponse extends BaseResponse {
    company: EnrichedCompany;
}

/**
 * CEC Response - Company Employees Countries
 */
export interface CecResponse extends BaseResponse {
    countries: Record<string, number>;
}

/**
 * CLO Response - Company Locations
 */
export interface CloResponse extends BaseResponse {
    locations: Array<{
        country: string;
        state: string;
        city: string;
        address: string;
    }>;
}

/**
 * CSE Response - Company Search
 */
export interface CseResponse extends BaseResponse {
    companies: CompanySearchResult[];
}

/**
 * PSE Response - Person Search
 */
export interface PseResponse extends BaseResponse {
    peoples: PersonSearchResult[];
}

/**
 * LBS Response - Local Business Search
 */
export interface LbsResponse extends BaseResponse {
    companies: LocalBusinessResult[];
}
