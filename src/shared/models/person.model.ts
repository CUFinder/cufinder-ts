/**
 * Person data model
 */
export interface Person {
  first_name: string | null;
  last_name: string | null;
  full_name: string | null;
  linkedin_url: string | null;
  summary: string | null;
  followers_count: number | null;
  facebook: string | null;
  twitter: string | null;
  avatar: string | null;
  country: string | null;
  state: string | null;
  city: string | null;
  job_title: string | null;
  job_title_categories: string[];
  company_name: string | null;
  company_linkedin: string | null;
  company_website: string | null;
  company_size: string | null;
  company_industry: string | null;
  company_facebook: string | null;
  company_twitter: string | null;
  company_country: string | null;
  company_state: string | null;
  company_city: string | null;
}

/**
 * People company model
 */
export interface PeopleCompany {
  id: string | null;
  name: string | null;
  website: string | null;
  size: string | null;
  industry: string | null;
  main_location: {
    country: string | null;
    state: string | null;
    city: string | null;
  };
  social: {
    linkedin: string | null;
    twitter: string | null;
    facebook: string | null;
  };
}

/**
 * People location model
 */
export interface PeopleLocation {
  country: string | null;
  state: string | null;
  city: string | null;
}

/**
 * Job title category model
 */
export interface JobTitleCategory {
  category: string;
  super_category: string;
}

/**
 * People current job model
 */
export interface PeopleCurrentJob {
  title: string | null;
  role: string | null;
  level: string | null;
  categories: JobTitleCategory[];
}

/**
 * People connections model
 */
export interface PeopleConnections {
  has_work_email: boolean;
  has_personal_email: boolean;
  has_phone: boolean;
  work_email: string | null;
  personal_email: string | null;
  phone: string | null;
  is_accept_all: boolean;
  is_accept_email: boolean;
}

/**
 * People social model
 */
export interface PeopleSocial {
  linkedin_username: string | null;
  linkedin_connections: number;
  linkedin: string | null;
  twitter: string | null;
  facebook: string | null;
  github: string | null;
}

/**
 * Experience company model
 */
export interface ExperienceCompany {
  name: string | null;
  size: string | null;
  id: string | null;
  founded: string | null;
  industry: string | null;
  location: string | null;
  linkedin_url: string | null;
  linkedin_id: string | null;
  facebook_url: string | null;
  twitter_url: string | null;
  website: string | null;
  job_company_id_mongo: string | null;
}

/**
 * People experience model
 */
export interface PeopleExperience {
  company: ExperienceCompany;
  location_names: string[];
  end_date: string | null;
  start_date: string | null;
  title: {
    name: string | null;
    role: string | null;
    sub_role: string | null;
    levels: string[];
  };
  is_primary: boolean;
  summary: string | null;
}

/**
 * People education model
 */
export interface PeopleEducation {
  school: {
    name: string | null;
    type: string | null;
    id: string | null;
    location: {
      name: string | null;
      locality: string | null;
      region: string | null;
      country: string | null;
      continent: string | null;
    };
    linkedin_url: string | null;
    facebook_url: string | null;
    twitter_url: string | null;
    linkedin_id: string | null;
    website: string | null;
    domain: string | null;
    job_company_id_mongo: string | null;
    university_id_mongo: string | null;
  };
  end_date: string | null;
  start_date: string | null;
  gpa: string | null;
  degrees: string[];
  majors: string[];
  minors: string[];
  summary: string | null;
}

/**
 * People certification model
 */
export interface PeopleCertification {
  organization: string | null;
  start_date: string | null;
  end_date: string | null;
  name: string | null;
}

/**
 * Enriched person model
 */
export interface EnrichedPerson {
  mng_id: string;
  first_name: string | null;
  last_name: string | null;
  full_name: string | null;
  logo: string | null;
  overview: string | null;
  experience: number;
  connections: PeopleConnections;
  interests: string[];
  skills: string[];
  educations: PeopleEducation[];
  experiences: PeopleExperience[];
  certifications: PeopleCertification[];
  company: PeopleCompany;
  location: PeopleLocation;
  current_job: PeopleCurrentJob;
  social: PeopleSocial;
}

/**
 * Person search result model
 */
export interface PersonSearchResult {
  full_name: string | null;
  first_name: string | null;
  last_name: string | null;
  overview: string | null;
  current_job: {
    title: string | null;
    category: string[];
  };
  logo: string | null;
  company: {
    name: string | null;
    linkedin: string | null;
    website: string | null;
    size: string | null;
    industry: string | null;
    main_location: {
      country: string | null;
      state: string | null;
      city: string | null;
    };
    social: {
      linkedin: string | null;
      facebook: string | null;
      twitter: string | null;
    };
  };
  location: {
    country: string | null;
    state: string | null;
    city: string | null;
  };
  social: {
    linkedin: string | null;
    connections: number;
    facebook: string | null;
    twitter: string | null;
  };
}

/**
 * Work experience model
 */
export interface WorkExperience {
  company: string;
  title: string;
  start_date: string;
  end_date: string;
  current: boolean;
}

/**
 * Education model
 */
export interface Education {
  school: string;
  degree: string;
  field_of_study: string;
  graduation_year: number;
}
