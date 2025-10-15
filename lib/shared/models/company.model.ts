/**
 * Company data model
 */
export interface Company {
    name: string | null;
    website: string | null;
    employee_count: string | null;
    size: string | null;
    industry: string | null;
    description: string | null;
    linkedin_url: string | null;
    type: string | null;
    domain: string | null;
    country: string | null;
    state: string | null;
    city: string | null;
    address: string | null;
    founded_year: string | null;
    logo_url: string | null;
    followers_count: number | null;
}

/**
 * Company location model
 */
export interface CompanyLocation {
    country: string | null;
    state: string | null;
    city: string | null;
    postal_code: string | null;
    line1: string | null;
    line2: string | null;
    latitude: number | null;
    longitude: number | null;
}

/**
 * Company technology model
 */
export interface CompanyTechnology {
    category: string | null;
    super_category: string | null;
    technology_name: string | null;
    technology_website: string | null;
}

/**
 * Enriched company model
 */
export interface EnrichedCompany {
    name: string | null;
    website: string | null;
    domain: string | null;
    logo: string | null;
    overview: string | null;
    founded_date: string | null;
    industry: string | null;
    annual_revenue: string | null;
    followers: number;
    is_school: boolean;
    is_investor: boolean;
    has_email: boolean;
    has_phone: boolean;
    suggesstions: string[];
    locations: CompanyLocation[];
    technologies: CompanyTechnology[];
    affiliated_pages: string[];
    specialties: string[];
    employees: {
        range: string | null;
        count: number;
    };
    main_location: {
        geo: string | null;
        city: string | null;
        continent: string | null;
        state: string | null;
        country: string | null;
        address: string | null;
        postal_code: string | null;
    };
    geo_location: {
        google_maps_id: string | null;
        rating: number | null;
        reviews_count: number | null;
    };
    industry_details: object;
    funding: {
        rounds: string | null;
        organization: string | null;
        number_of_rounds: number;
        number_of_other_investors: number;
        last_round_type: string | null;
        last_round_money_raised_amount_currency_code: string | null;
        last_round_money_raised_amount: string | null;
        last_round_investors: string | null;
        last_round_founding_url: string | null;
        updated_at: string | null;
    };
    social: {
        linkedin: string | null;
        twitter: string | null;
        facebook: string | null;
        youtube: string | null;
        instagram: string | null;
    };
    connections: {
        emails: string[];
        phones: string[];
    };
}

/**
 * Company search result model
 */
export interface CompanySearchResult {
    name: string | null;
    website: string | null;
    domain: string | null;
    employees: {
        range: string | null;
    };
    industry: string | null;
    overview: string | null;
    type: string | null;
    main_location: {
        country: string | null;
        state: string | null;
        city: string | null;
        address: string | null;
    };
    social: {
        facebook: string | null;
        linkedin: string | null;
        twitter: string | null;
    };
}

/**
 * Local business result model
 */
export interface LocalBusinessResult {
    name: string | null;
    website: string | null;
    industry: string | null;
    industry_details: {
        level_1: string | null;
        level_2: string | null;
        naics_code: string | null;
        sic_code: string | null;
    };
    main_location: {
        country: string | null;
        state: string | null;
        city: string | null;
        address: string | null;
    };
    geo_location: {
        google_maps_id: string | null;
        rating: number | null;
        reviews_count: number | null;
    };
    social: {
        linkedin: string | null;
        twitter: string | null;
        facebook: string | null;
        instagram: string | null;
        youtube: string | null;
    };
    connections: {
        phones: string[];
        emails: string[];
        phone_type: string | null;
    };
}

/**
 * Lookalike company model
 */
export interface LookalikeCompany {
    name: string | null;
    website: string | null;
    employee_count: string | null;
    size: string | null;
    industry: string | null;
    description: string | null;
    linkedin_url: string | null;
    type: string | null;
    domain: string | null;
    country: string | null;
    state: string | null;
    city: string | null;
    address: string | null;
    founded_year: string | null;
    logo_url: string | null;
    followers_count: number | null;
}

/**
 * Fundraising info model
 */
export interface FundraisingInfo {
    funding_last_round_type: string | null;
    funding_ammount_currency_code: string | null;
    funding_money_raised: string | null;
    funding_last_round_investors_url: string | null;
}

export interface CloCompanyLocation {
    country: string;
    state: string;
    city: string;
    postal_code: string;
    line1: string;
    line2: string;
    latitude: number;
    longitude: number;
}
