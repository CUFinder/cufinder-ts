import { CufinderClient } from './client';
import { CufinderClientConfig } from './shared/types';

// Services
import {
    Car,
    Cec,
    Clo,
    Cse,
    Cuf,
    Dtc,
    Dte,
    Elf,
    Enc,
    Epp,
    Fcc,
    Fcl,
    Fts,
    Fwe,
    Lbs,
    Lcuf,
    Ntp,
    Pse,
    Rel,
    Tep,
} from './services';

/**
 * Main CUFinder SDK class
 * Provides access to all API services as direct functions
 * Usage: sdk.cuf(params), sdk.dte(params)
 */
export class CufinderSDK {
    private readonly client: CufinderClient;

    // Services as direct functions
    public readonly cuf: (params: Parameters<Cuf['getDomain']>[0]) => ReturnType<Cuf['getDomain']>;
    public readonly lcuf: (
        params: Parameters<Lcuf['getLinkedInUrl']>[0]
    ) => ReturnType<Lcuf['getLinkedInUrl']>;
    public readonly dtc: (
        params: Parameters<Dtc['getCompanyName']>[0]
    ) => ReturnType<Dtc['getCompanyName']>;
    public readonly dte: (params: Parameters<Dte['getEmails']>[0]) => ReturnType<Dte['getEmails']>;
    public readonly ntp: (params: Parameters<Ntp['getPhones']>[0]) => ReturnType<Ntp['getPhones']>;
    public readonly rel: (
        params: Parameters<Rel['reverseEmailLookup']>[0]
    ) => ReturnType<Rel['reverseEmailLookup']>;
    public readonly fcl: (
        params: Parameters<Fcl['getLookalikes']>[0]
    ) => ReturnType<Fcl['getLookalikes']>;
    public readonly elf: (
        params: Parameters<Elf['getFundraising']>[0]
    ) => ReturnType<Elf['getFundraising']>;
    public readonly car: (
        params: Parameters<Car['getRevenue']>[0]
    ) => ReturnType<Car['getRevenue']>;
    public readonly fcc: (
        params: Parameters<Fcc['getSubsidiaries']>[0]
    ) => ReturnType<Fcc['getSubsidiaries']>;
    public readonly fts: (
        params: Parameters<Fts['getTechStack']>[0]
    ) => ReturnType<Fts['getTechStack']>;
    public readonly epp: (
        params: Parameters<Epp['enrichProfile']>[0]
    ) => ReturnType<Epp['enrichProfile']>;
    public readonly fwe: (
        params: Parameters<Fwe['getEmailFromProfile']>[0]
    ) => ReturnType<Fwe['getEmailFromProfile']>;
    public readonly tep: (
        params: Parameters<Tep['enrichPerson']>[0]
    ) => ReturnType<Tep['enrichPerson']>;
    public readonly enc: (
        params: Parameters<Enc['enrichCompany']>[0]
    ) => ReturnType<Enc['enrichCompany']>;
    public readonly cec: (
        params: Parameters<Cec['getEmployeeCountries']>[0]
    ) => ReturnType<Cec['getEmployeeCountries']>;
    public readonly clo: (
        params: Parameters<Clo['getLocations']>[0]
    ) => ReturnType<Clo['getLocations']>;
    public readonly cse: (
        params?: Parameters<Cse['searchCompanies']>[0]
    ) => ReturnType<Cse['searchCompanies']>;
    public readonly pse: (
        params?: Parameters<Pse['searchPeople']>[0]
    ) => ReturnType<Pse['searchPeople']>;
    public readonly lbs: (
        params?: Parameters<Lbs['searchLocalBusinesses']>[0]
    ) => ReturnType<Lbs['searchLocalBusinesses']>;

    constructor(apiKey: string, options?: CufinderClientConfig) {
        this.client = new CufinderClient({ apiKey, ...options });

        // Initialize service instances
        const cuf = new Cuf(this.client);
        const lcuf = new Lcuf(this.client);
        const dtc = new Dtc(this.client);
        const dte = new Dte(this.client);
        const ntp = new Ntp(this.client);
        const rel = new Rel(this.client);
        const fcl = new Fcl(this.client);
        const elf = new Elf(this.client);
        const car = new Car(this.client);
        const fcc = new Fcc(this.client);
        const fts = new Fts(this.client);
        const epp = new Epp(this.client);
        const fwe = new Fwe(this.client);
        const tep = new Tep(this.client);
        const enc = new Enc(this.client);
        const cec = new Cec(this.client);
        const clo = new Clo(this.client);
        const cse = new Cse(this.client);
        const pse = new Pse(this.client);
        const lbs = new Lbs(this.client);

        // Expose services as direct functions
        this.cuf = params => cuf.getDomain(params);
        this.lcuf = params => lcuf.getLinkedInUrl(params);
        this.dtc = params => dtc.getCompanyName(params);
        this.dte = params => dte.getEmails(params);
        this.ntp = params => ntp.getPhones(params);
        this.rel = params => rel.reverseEmailLookup(params);
        this.fcl = params => fcl.getLookalikes(params);
        this.elf = params => elf.getFundraising(params);
        this.car = params => car.getRevenue(params);
        this.fcc = params => fcc.getSubsidiaries(params);
        this.fts = params => fts.getTechStack(params);
        this.epp = params => epp.enrichProfile(params);
        this.fwe = params => fwe.getEmailFromProfile(params);
        this.tep = params => tep.enrichPerson(params);
        this.enc = params => enc.enrichCompany(params);
        this.cec = params => cec.getEmployeeCountries(params);
        this.clo = params => clo.getLocations(params);
        this.cse = params => cse.searchCompanies(params);
        this.pse = params => pse.searchPeople(params);
        this.lbs = params => lbs.searchLocalBusinesses(params);
    }

    /**
     * Get the underlying HTTP client for advanced usage
     * @returns The CufinderClient instance
     */
    public getClient(): CufinderClient {
        return this.client;
    }
}
