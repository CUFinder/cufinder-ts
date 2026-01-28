import { BaseApiClient } from './base_api_client';
import {
    BcdResponse,
    CarResponse,
    CcpResponse,
    CecResponse,
    CloResponse,
    CseResponse,
    CufResponse,
    DtcResponse,
    DteResponse,
    ElfResponse,
    EncResponse,
    EppResponse,
    FccResponse,
    FclResponse,
    FtsResponse,
    FweResponse,
    ISCResponse,
    LbsResponse,
    LcufResponse,
    NtpResponse,
    PseResponse,
    RelResponse,
    TepResponse,
} from './shared/models/responses.model';
import { CseParams, CufinderClientConfig, LbsParams, PseParams } from './shared/types';

// Services
import {
    BcdService,
    CarService,
    CcpService,
    CecService,
    CloService,
    CseService,
    CufService,
    DtcService,
    DteService,
    ElfService,
    EncService,
    EppService,
    FccService,
    FclService,
    FtsService,
    FweService,
    IscService,
    LbsService,
    LcufService,
    NtpService,
    PseService,
    RelService,
    TepService,
} from './services';

/**
 * Main Cufinder client class
 * Provides access to all API services
 *
 * @example
 * ```typescript
 * import { Cufinder } from '@cufinder/cufinder-ts';
 *
 * const client = new Cufinder('your-api-key');
 * ```
 */
export class Cufinder {
    private readonly client: BaseApiClient;

    /**
     * Get company domain from company name
     * @param companyName - The name of the company to find the domain for
     * @param countryCode - The 2-letter ISO country code (e.g., 'US', 'GB')
     * @returns Promise resolving to company domain information
     * @example
     * ```typescript
     * const result = await client.cuf('cufinder', 'US');
     * console.log(result);
     * ```
     */
    public readonly cuf: (companyName: string, countryCode: string) => Promise<CufResponse>;

    /**
     * Get LinkedIn URL from company name
     * @param companyName - The name of the company to find LinkedIn URL for
     * @returns Promise resolving to LinkedIn URL information
     * @example
     * ```typescript
     * const result = await client.lcuf('cufinder');
     * console.log(result);
     * ```
     */
    public readonly lcuf: (companyName: string) => Promise<LcufResponse>;

    /**
     * Get company name from domain
     * @param websiteUrl - The website URL to get company name for
     * @returns Promise resolving to company name information
     * @example
     * ```typescript
     * const result = await client.dtc('cufinder.io');
     * console.log(result);
     * ```
     */
    public readonly dtc: (websiteUrl: string) => Promise<DtcResponse>;

    /**
     * Get company emails from domain
     * @param websiteUrl - The website URL to get emails for
     * @returns Promise resolving to company email information
     * @example
     * ```typescript
     * const result = await client.dte('cufinder.io');
     * console.log(result);
     * ```
     */
    public readonly dte: (websiteUrl: string) => Promise<DteResponse>;

    /**
     * Get company phone numbers
     * @param companyName - The name of the company to get phone numbers for
     * @returns Promise resolving to phone number information
     * @example
     * ```typescript
     * const result = await client.ntp('apple');
     * console.log(result);
     * ```
     */
    public readonly ntp: (companyName: string) => Promise<NtpResponse>;

    /**
     * Reverse email lookup
     * @param email - The email address to lookup
     * @returns Promise resolving to person information
     * @example
     * ```typescript
     * const result = await client.rel('iain.mckenzie@stripe.com');
     * console.log(result);
     * ```
     */
    public readonly rel: (email: string) => Promise<RelResponse>;

    /**
     * Find company lookalikes
     * @param query - The company name to find lookalikes for
     * @returns Promise resolving to lookalike companies
     * @example
     * ```typescript
     * const result = await client.fcl('apple');
     * console.log(result);
     * ```
     */
    public readonly fcl: (query: string) => Promise<FclResponse>;

    /**
     * Get company fundraising information
     * @param query - The company name to get fundraising info for
     * @returns Promise resolving to fundraising data
     * @example
     * ```typescript
     * const result = await client.elf('cufinder');
     * console.log(result);
     * ```
     */
    public readonly elf: (query: string) => Promise<ElfResponse>;

    /**
     * Get company revenue information
     * @param query - The company name to get revenue info for
     * @returns Promise resolving to revenue data
     * @example
     * ```typescript
     * const result = await client.car('apple');
     * console.log(result);
     * ```
     */
    public readonly car: (query: string) => Promise<CarResponse>;

    /**
     * Get company subsidiaries
     * @param query - The company name to get subsidiaries for
     * @returns Promise resolving to subsidiaries information
     * @example
     * ```typescript
     * const result = await client.fcc('amazon');
     * console.log(result);
     * ```
     */
    public readonly fcc: (query: string) => Promise<FccResponse>;

    /**
     * Get company tech stack
     * @param query - The company name to get tech stack for
     * @returns Promise resolving to tech stack information
     * @example
     * ```typescript
     * const result = await client.fts('cufinder');
     * console.log(result);
     * ```
     */
    public readonly fts: (query: string) => Promise<FtsResponse>;

    /**
     * Enrich LinkedIn profile
     * @param linkedinUrl - The LinkedIn profile URL to enrich
     * @returns Promise resolving to enriched person data
     * @example
     * ```typescript
     * const result = await client.epp('linkedin.com/in/iain-mckenzie');
     * console.log(result);
     * ```
     */
    public readonly epp: (linkedinUrl: string) => Promise<EppResponse>;

    /**
     * Get email from LinkedIn profile
     * @param linkedinUrl - The LinkedIn profile URL to get email from
     * @returns Promise resolving to email information
     * @example
     * ```typescript
     * const result = await client.fwe('linkedin.com/in/iain-mckenzie');
     * console.log(result);
     * ```
     */
    public readonly fwe: (linkedinUrl: string) => Promise<FweResponse>;

    /**
     * Enrich person data
     * @param fullName - The full name of the person to enrich
     * @param company - The company name where the person works
     * @returns Promise resolving to enriched person data
     * @example
     * ```typescript
     * const result = await client.tep('iain mckenzie', 'stripe');
     * console.log(result);
     * ```
     */
    public readonly tep: (fullName: string, company: string) => Promise<TepResponse>;

    /**
     * Enrich company data
     * @param query - The company name to enrich
     * @returns Promise resolving to enriched company data
     * @example
     * ```typescript
     * const result = await client.enc('cufinder');
     * console.log(result);
     * ```
     */
    public readonly enc: (query: string) => Promise<EncResponse>;

    /**
     * Get company employee countries
     * @param query - The company name to get employee countries for
     * @returns Promise resolving to employee countries data
     * @example
     * ```typescript
     * const result = await client.cec('cufinder');
     * console.log(result);
     * ```
     */
    public readonly cec: (query: string) => Promise<CecResponse>;

    /**
     * Get company locations
     * @param query - The company name to get locations for
     * @returns Promise resolving to company locations
     * @example
     * ```typescript
     * const result = await client.clo('apple');
     * console.log(result);
     * ```
     */
    public readonly clo: (query: string) => Promise<CloResponse>;

    /**
     * Search for companies
     * @param params - Optional search parameters
     * @returns Promise resolving to company search results
     * @example
     * ```typescript
     * const result = await client.cse({
     *   name: 'cufinder',
     *   country: 'germany',
     *   state: 'hamburg',
     *   city: 'hamburg'
     * });
     * console.log(result);
     * ```
     */
    public readonly cse: (params?: CseParams) => Promise<CseResponse>;

    /**
     * Search for people
     * @param params - Optional search parameters
     * @returns Promise resolving to people search results
     * @example
     * ```typescript
     * const result = await client.pse({
     *   full_name: 'iain mckenzie',
     *   company_name: 'stripe'
     * });
     * console.log(result);
     * ```
     */
    public readonly pse: (params?: PseParams) => Promise<PseResponse>;

    /**
     * Search for local businesses
     * @param params - Optional search parameters
     * @returns Promise resolving to local business search results
     * @example
     * ```typescript
     * const result = await client.lbs({
     *   country: 'united states',
     *   state: 'california',
     *   page: 1
     * });
     * console.log(result);
     * ```
     */
    public readonly lbs: (params?: LbsParams) => Promise<LbsResponse>;

    /**
     * Extract B2B Customers From the Domain
     * @param url - The domain to extract B2B customers for
     * @returns List of business names
     * @example
     * ```typescript
     * const result = await client.bcd('stripe.com');
     * console.log(result);
     * ```
     */
    public readonly bcd: (url: string) => Promise<BcdResponse>;

    /**
     * Extract B2B Customers From the Domain
     * @param url - The company domain you want to find it's career page
     * @returns List of business names
     * @example
     * ```typescript
     * const result = await client.ccp('stripe.com');
     * console.log(result);
     * ```
     */
    public readonly ccp: (url: string) => Promise<CcpResponse>;

    /**
     * Check company you want to know is saas or not
     * @param url - The company domain you want to check is saas or not
     * @example
     * ```typescript
     * const result = await client.isc('stripe.com')
     * console.log(result.is_saas);
     * ```
     */
    public readonly isc: (url: string) => Promise<ISCResponse>;

    constructor(apiKey: string, options?: CufinderClientConfig) {
        this.client = new BaseApiClient({ apiKey, ...options });

        // Initialize service instances
        const cuf = new CufService(this.client);
        const lcuf = new LcufService(this.client);
        const dtc = new DtcService(this.client);
        const dte = new DteService(this.client);
        const ntp = new NtpService(this.client);
        const rel = new RelService(this.client);
        const fcl = new FclService(this.client);
        const elf = new ElfService(this.client);
        const car = new CarService(this.client);
        const fcc = new FccService(this.client);
        const fts = new FtsService(this.client);
        const epp = new EppService(this.client);
        const fwe = new FweService(this.client);
        const tep = new TepService(this.client);
        const enc = new EncService(this.client);
        const cec = new CecService(this.client);
        const clo = new CloService(this.client);
        const cse = new CseService(this.client);
        const pse = new PseService(this.client);
        const lbs = new LbsService(this.client);
        const bcd = new BcdService(this.client);
        const ccp = new CcpService(this.client);
        const isc = new IscService(this.client);

        // Expose services as direct functions
        this.cuf = (companyName, countryCode) => cuf.getDomain(companyName, countryCode);
        this.lcuf = companyName => lcuf.getLinkedInUrl(companyName);
        this.dtc = websiteUrl => dtc.getCompanyName(websiteUrl);
        this.dte = websiteUrl => dte.getEmails(websiteUrl);
        this.ntp = companyName => ntp.getPhones(companyName);
        this.rel = email => rel.reverseEmailLookup(email);
        this.fcl = query => fcl.getLookalikes(query);
        this.elf = query => elf.getFundraising(query);
        this.car = query => car.getRevenue(query);
        this.fcc = query => fcc.getSubsidiaries(query);
        this.fts = query => fts.getTechStack(query);
        this.epp = linkedinUrl => epp.enrichProfile(linkedinUrl);
        this.fwe = linkedinUrl => fwe.getEmailFromProfile(linkedinUrl);
        this.tep = (fullName, company) => tep.enrichPerson(fullName, company);
        this.enc = query => enc.enrichCompany(query);
        this.cec = query => cec.getEmployeeCountries(query);
        this.clo = query => clo.getLocations(query);
        this.cse = params => cse.searchCompanies(params);
        this.pse = params => pse.searchPeople(params);
        this.lbs = params => lbs.searchLocalBusinesses(params);
        this.bcd = url => bcd.extractB2BCustomers(url);
        this.ccp = url => ccp.findCareersPage(url);
        this.isc = url => isc.isSaas(url);
    }
}
