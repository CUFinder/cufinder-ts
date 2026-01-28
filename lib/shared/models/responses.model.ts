import { BaseResponse } from './base.model';
import {
    CloCompanyLocation,
    Company,
    CompanySearchResult,
    CompanySnapshotInfo,
    FundraisingInfo,
    LocalBusinessResult,
    LookalikeCompany,
} from './company.model';
import { Person, PersonSearchResult, TepPerson } from './person.model';

// Service Response Types

/**
 * CUF Response
 */
export interface CufResponse extends BaseResponse {
    domain: string;
}

/**
 * LCUF Response
 */
export interface LcufResponse extends BaseResponse {
    linkedin_url: string;
}

/**
 * DTC Response
 */
export interface DtcResponse extends BaseResponse {
    company_name: string;
}

/**
 * DTE Response
 */
export interface DteResponse extends BaseResponse {
    emails: string[];
}

/**
 * NTP Response
 */
export interface NtpResponse extends BaseResponse {
    phones: string[];
}

/**
 * REL Response
 */
export interface RelResponse extends BaseResponse {
    person: Person;
}

/**
 * FCL Response
 */
export interface FclResponse extends BaseResponse {
    companies: LookalikeCompany[];
}

/**
 * ELF Response
 */
export interface ElfResponse extends BaseResponse {
    fundraising_info: FundraisingInfo;
}

/**
 * CAR Response
 */
export interface CarResponse extends BaseResponse {
    annual_revenue: string;
}

/**
 * FCC Response
 */
export interface FccResponse extends BaseResponse {
    subsidiaries: string[];
}

/**
 * FTS Response
 */
export interface FtsResponse extends BaseResponse {
    technologies: string[];
}

/**
 * EPP Response
 */
export interface EppResponse extends BaseResponse {
    person: Person;
}

/**
 * FWE Response
 */
export interface FweResponse extends BaseResponse {
    work_email: string;
}

/**
 * TEP Response
 */
export interface TepResponse extends BaseResponse {
    person: TepPerson;
}

/**
 * ENC Response
 */
export interface EncResponse extends BaseResponse {
    company: Company;
}

/**
 * CEC Response
 */
export interface CecResponse extends BaseResponse {
    countries: Record<string, number>;
}

/**
 * CLO Response
 */
export interface CloResponse extends BaseResponse {
    locations: CloCompanyLocation[];
}

/**
 * CSE Response
 */
export interface CseResponse extends BaseResponse {
    companies: CompanySearchResult[];
}

/**
 * PSE Response
 */
export interface PseResponse extends BaseResponse {
    peoples: PersonSearchResult[];
}

/**
 * LBS Response
 */
export interface LbsResponse extends BaseResponse {
    companies: LocalBusinessResult[];
}

/**
 * BCD Response
 */
export interface BcdResponse extends BaseResponse {
    customers: string[];
}

/**
 * CCP Response
 */
export interface CcpResponse extends BaseResponse {
    careers_page_url: string | null;
}

/**
 * ISP Response
 */
export interface ISCResponse extends BaseResponse {
    is_saas: 'yes' | 'no';
}

/**
 * CBC Response
 */
export interface CBCResponse extends BaseResponse {
    business_type: 'B2B' | 'B2C';
}

/**
 * CSC Response
 */
export interface CSCResponse extends BaseResponse {
    mission_statement: string;
}

/**
 * CSN Response
 */
export interface CSNResponse extends BaseResponse {
    company_snapshot: CompanySnapshotInfo;
}
