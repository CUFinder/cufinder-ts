/**
 * API Service Parameter Types
 * These are the parameter types for all API services
 */

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
