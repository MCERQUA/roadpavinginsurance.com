// Rich, niche-accurate content blocks + centralized COPY for Road Paving Insurance.

import {
  PhoneCall, FileSearch, FileSignature, ShieldCheck,
  Truck, HardHat, Package, Wrench, Layers, Building2,
} from "lucide-react";

/* ============================================================
   COPY — centralized display strings consumed by components/pages.
   ============================================================ */
export const COPY = {
  hero: {
    h1Lead: "Road paving contractor insurance that protects",
    h1Highlight: "your crew, your iron, and your contracts",
    subcopy:
      "General liability, workers' comp, commercial auto, contractor's equipment, inland marine, umbrella, surety bonds, and builder's risk — purpose-built for road paving and asphalt contractors. DOT-project experience. A-rated carriers. 15-minute quotes.",
    statValue: "450+",
    statLabel: "Paving contractors insured — highway, commercial, and municipal",
    imageAlt: "Asphalt paving crew laying hot mix on a highway resurfacing project",
  },
  nav: { ariaLabel: "Road Paving Insurance home" },
  footer: {
    ctaTitle: "Ready to protect your paving operation?",
    ctaSubcopy: "15-minute quotes. 2-hour claims response. Insurance for road paving contractors nationwide.",
    description:
      "Specialized insurance for road paving contractors — general liability, workers' comp, commercial auto, contractor's equipment, inland marine, umbrella, surety bonds, and builder's risk. A division of Contractors Choice Agency — founded 2005, licensed all 50 states.",
  },
  servicesGrid: {
    h2Lead: "Coverage built line-by-line for",
    h2Highlight: "paving contractors",
    lead: "Generic commercial policies undervalue paving equipment, miss DOT bonding requirements, and use wrong class codes for asphalt crews. We build programs designed for road paving operations.",
  },
  why: {
    eyebrow: "Why paving contractors switch to us",
    h2Lead: "The coverage gaps that",
    h2Highlight: "cost paving contractors the most",
    lead: "Most agents hand a paving company a generic contractor policy and call it done. Then a stolen milling machine, a highway fatality, or a failed DOT bond hits — and the exclusion kicks in. We underwrite the parts of your operation everyone else leaves out.",
    sidebarTitle: "Run by people who know construction",
    sidebarBody:
      "Contractors Choice Agency was founded in 2005 by Josh Cotner, who ran equipment, read specs, and filed insurance certificates before opening the agency. We know what a milling machine replacement costs and what a DOT bond failure means for your bidding capacity.",
  },
  coverage: {
    eyebrow: "Where we write",
    h2Lead: "Paving contractor coverage.",
    h2Highlight: "All 50 states.",
    lead: "From TxDOT highway resurfacing in Texas and Caltrans work in California to FDOT contracts in Florida and small municipal paving programs across the Midwest — Contractors Choice Agency writes road paving insurance in every state where asphalt gets laid.",
    imageAlt: "Road paving crew operating a paver and roller on a highway resurfacing project",
    badgeTitle: "National coverage for paving contractors.",
    badgeSub: "Writing paving programs in all 50 states since 2005.",
  },
  process: {
    lead: "No two-week back-and-forth. A real conversation, real markets, and a program you can actually understand — built around your crew size, equipment list, and contract requirements.",
  },
  testimonials: {
    eyebrow: "From paving contractors",
    h2Lead: "Contractors who found",
    h2Highlight: "coverage that held up at claim time",
  },
  finalCta: {
    h2Lead: "Protect Your Paving Operation",
    h2Highlight: "with coverage built for the asphalt business.",
    lead: "Whether you need GL and WC today or a full program — equipment, umbrella, bonds, and auto — one call gets you real quotes from specialty contractor markets. Not a voicemail and a two-week wait.",
  },
  ctaBand: {
    defaultTitle: "Ready to protect your paving operation?",
    defaultDescription:
      "Get a 15-minute quote from specialists who understand road paving — GL, WC, equipment, surety bonds, and DOT contract requirements.",
  },
  faq: {
    defaultTitleLead: "Road paving contractor insurance,",
    defaultTitleHighlight: "in plain English",
  },
  servicesPage: {
    metaTitle: "Road Paving Contractor Insurance Coverage & Services",
    metaDescription:
      "Eight lines of insurance built for road paving contractors: GL, workers' comp, commercial auto, equipment, inland marine, umbrella, surety bonds, and builder's risk. Licensed all 50 states.",
    h1Lead: "Insurance built line-by-line for",
    h1Highlight: "road paving contractors",
    lead: "Each policy below addresses a specific exposure in road paving — from the GL every DOT contract requires to the contractor's equipment coverage your milling machines and pavers need.",
    ogTitle: "Road Paving Contractor Insurance | Contractors Choice Agency",
    ogDescription:
      "GL, workers' comp, commercial auto, equipment, inland marine, umbrella, surety bonds, and builder's risk — written specifically for road paving and asphalt contractors.",
    ctaTitle: "Not sure which lines you need?",
    ctaDescription:
      "Most paving contractors bundle GL + WC + commercial auto + equipment + umbrella into one coordinated program and add bonds as contracts require. We'll build the right mix in one call.",
  },
  blogPage: {
    metaTitle: "Road Paving Contractor Insurance Blog — Guides & Insights",
    metaDescription:
      "Practical insurance guidance for road paving contractors: GL limits for DOT work, workers' comp class codes for asphalt crews, equipment coverage for pavers and rollers, and surety bond requirements.",
    h1Lead: "Road paving contractor insurance,",
    h1Highlight: "decoded",
    lead: "Plain-English guides on the coverage that matters for paving operations — GL and umbrella for DOT projects, WC class codes for asphalt crews, equipment insurance for heavy iron, and surety bonds for public contracts.",
    ogTitle: "Road Paving Contractor Insurance Blog | Contractors Choice Agency",
    ogDescription:
      "Practical insurance guidance for paving contractors: GL, WC class codes, equipment coverage, DOT bonds, and program structure for highway and commercial paving crews.",
  },
  serviceDetail: {
    h1Suffix: "for road paving contractors",
    imageAltSuffix: "road paving contracting",
    category: "Road Paving Contractor Insurance",
  },
  about: {
    metaTitle: "About Road Paving Insurance | Contractors Choice Agency",
    metaDescription:
      "Road Paving Insurance is the paving-focused division of Contractors Choice Agency, founded in 2005 by Josh Cotner. GL, WC, equipment, bonds, and commercial auto for road paving contractors. Licensed all 50 states.",
    h1Lead: "Built by people who know construction,",
    h1Highlight: "for road paving contractors",
    lead: "Road Paving Insurance is the paving-focused division of Contractors Choice Agency — founded in 2005 by Josh Cotner, who knows exactly what happens when a GL exclusion shows up in a DOT claim denial or a surety bond falls through the day before bid submission.",
    imageAlt: "Road paving contractor operating a paver on a highway resurfacing project",
    storyEyebrow: "Our story",
    storyTitle: "From the jobsite to the agency.",
    storyLead:
      "Josh Cotner ran equipment, read specs, and filed certificates before founding CCA in 2005. That background is why we understand what's at stake when a milling machine is stolen, a flagging crew gets hurt on a highway, and the insurance carrier cites a coverage gap.",
    valuesTitle: "Four things we won't compromise on.",
    timeline: [
      { year: "2005", title: "Contractors Choice Agency founded", desc: "Josh Cotner opens CCA in Chandler, AZ, after years working in the trades — built to insure contractors and operators the right way." },
      { year: "15 yrs", title: "Expanded to specialty contractor markets", desc: "After placing programs for dozens of trade and contractor categories, CCA extends deep expertise to road paving, asphalt, and highway construction." },
      { year: "Today", title: "Dedicated paving contractor division", desc: "Road Paving Insurance focuses CCA's expertise on paving contractors — operations where equipment value, DOT bond requirements, and WC class codes are the real risks." },
    ],
    values: [
      { icon: "HardHat", title: "Contractor-first, always", desc: "Josh spent years in the trades before starting the agency. We speak the language of road paving because we know what happens when coverage fails at claim time." },
      { icon: "ShieldCheck", title: "Coverage that closes the gaps", desc: "Wrong equipment values, missing inland marine, and bad WC class codes — we address the risks standard contractor markets miss." },
      { icon: "Award", title: "A-rated markets only", desc: "We shop carriers with the financial strength and contractor experience to be there when a stolen paver, a highway fatality, or a bond call hits." },
      { icon: "Handshake", title: "Honest, no-pressure advice", desc: "If you don't need a line of coverage, we'll tell you. We earn trust by being straight about what your paving operation actually requires." },
    ],
  },
  quote: {
    h1Lead: "Get your",
    h1Highlight: "paving contractor insurance quote",
    lead: "Tell us about your operation. We'll shop A-rated specialty contractor markets and come back with real quotes in about 15 minutes — no obligation.",
    businessPlaceholder: "Granite State Paving LLC",
    emailPlaceholder: "mike@granitestatepaving.com",
    phonePlaceholder: "(603) 555-0180",
    messagePlaceholder:
      "Crew size, equipment list (pavers, rollers, milling machines, dump trucks), annual revenue, contract types (DOT, municipal, commercial), bonding capacity needed, current insurer, loss history, or anything else that helps us quote accurately…",
    errorMessage: "Something went wrong. Please call us at 844-967-5247 or try again.",
    trustNicheTitle: "Built for paving contractors",
    trustNicheDesc: "Policies written for road paving operations — not generic contractor coverage.",
  },
  contact: {
    h1Lead: "Let's talk about your",
    h1Highlight: "paving contractor coverage",
    lead: "Questions, a quote, or a claim — reach a person who knows road paving, not a queue.",
    errorMessage: "Something went wrong. Please call us at 844-967-5247.",
  },
  coveragePage: {
    metaTitle: "Road Paving Contractor Insurance — National Coverage, All 50 States",
    metaDescription:
      "Contractors Choice Agency writes road paving contractor insurance in all 50 states — Texas, California, Florida, the Midwest, Northeast, Southeast, and everywhere paving operations run.",
    h1Lead: "National reach.",
    h1Highlight: "All 50 states, every paving market.",
    lead: "Contractors Choice Agency places road paving insurance programs in all 50 states — from TxDOT highway projects in Texas and Caltrans work in California to FDOT contracts in Florida and small municipal paving programs across the Midwest.",
    sectionTitle: "Paving markets we serve.",
    nationwideLead:
      "Whether your crew is on a state DOT highway, a commercial lot, or a municipal street — one agent, one coordinated program. NPN #8608479.",
    faqs: [
      { q: "Do you only insure paving contractors in certain regions?", a: "No. Contractors Choice Agency is licensed in all 50 states and writes paving programs for contractors anywhere in the country — from TxDOT highway work to small commercial lot crews in the Midwest and Northeast." },
      { q: "Can you write coverage if we work across multiple states?", a: "Yes. We structure programs so your GL, workers' comp, and commercial auto cover your operation across every state you work in — no gaps when your crew crosses a state line on a DOT project." },
      { q: "Do you understand state DOT bonding requirements?", a: "Yes. We work with surety markets that understand TxDOT, Caltrans, FDOT, PennDOT, and other state DOT bonding requirements — including single-contract limits and aggregate bonding capacity for growing contractors." },
      { q: "Can you coordinate coverage across multiple jobsites?", a: "Yes. If you're running multiple highway projects, commercial lots, or municipal contracts simultaneously, we build one coordinated program so your GL, equipment, and inland marine cover every active site." },
    ],
  },
} as const;

/* ============================================================
   PROCESS
   ============================================================ */
export const PROCESS = [
  { step: "01", icon: PhoneCall, title: "Tell us about your operation", description: "15-min call or form. Crew size, equipment list, annual revenue, contract types (DOT, commercial, municipal), bonding capacity needed, and current coverage." },
  { step: "02", icon: FileSearch, title: "We shop specialty contractor markets", description: "Niche markets that actually write paving GL, WC with correct class codes, and high-limit umbrella for DOT contracts — not generic commercial carrier forms." },
  { step: "03", icon: FileSignature, title: "Bind a program built for paving", description: "GL + WC + commercial auto + equipment + inland marine + umbrella + bonds, coordinated so there are no gaps across your crew, iron, and contracts." },
  { step: "04", icon: ShieldCheck, title: "Claims support that moves fast", description: "When a stolen paver, a highway fatality, or a bond call arrives, you reach a person with context — not a queue. 2-hour response." },
] as const;

/* ============================================================
   WHY CHOOSE US
   ============================================================ */
export const WHY_CHOOSE = [
  { icon: ShieldCheck, title: "GL limits that meet DOT requirements", description: "State DOT and municipal contracts often require $1M–$2M per occurrence and $5M–$10M umbrella. We place GL and umbrella programs that meet public-contract minimums without carrier underwriting surprises." },
  { icon: HardHat, title: "WC class codes dialed in for asphalt work", description: "Paving carries high-hazard class codes — asphalt and paving crew, milling and planing operators, flaggers, and equipment operators. Wrong codes mean premium disputes at audit. We assign codes to your actual crew work." },
  { icon: Wrench, title: "Equipment insurance for heavy paving iron", description: "Pavers, drum and pneumatic rollers, milling machines, motor graders, and compactors need correct scheduled values. We place contractor's equipment policies at replacement cost — not depreciated ACV." },
  { icon: Truck, title: "Commercial auto for dump truck fleets", description: "Dump trucks, fuel trucks, and equipment haulers on public roads need commercial auto — not a farm auto form. We coordinate fleet auto with your inland marine for transported equipment." },
  { icon: Package, title: "We place the hard paving risks", description: "Been declined over a prior loss run, a highway fatality on record, or heavy equipment values? We have E&S markets for paving contractors others won't touch." },
  { icon: Layers, title: "Run by a former contractor", description: "Josh Cotner knows how operations work and what happens when coverage fails at claim time — on the road and off." },
] as const;

/* ============================================================
   HOMEPAGE FAQ — 20 questions
   ============================================================ */
export const HOME_FAQS = [
  { q: "What insurance does a road paving contractor need?", a: "A working paving contractor typically needs commercial general liability (GL) for bodily injury and property damage, workers' compensation for crew injuries, commercial auto for dump trucks and equipment haulers, contractor's equipment insurance for pavers and rollers, inland marine for tools and equipment in transit, umbrella liability for high-limit DOT contracts, surety bonds (bid, performance, and payment) for public work, and builder's risk for specific project coverage. Most paving operations carry all eight as one coordinated program." },
  { q: "How much does road paving contractor insurance cost?", a: "It depends on crew size and payroll, equipment values, annual revenue, contract types (DOT vs. commercial), bonding capacity, and loss history. Small commercial paving operations may pay a few thousand a year for GL and WC; larger highway contractors with heavy iron and DOT bond requirements pay considerably more. We quote your actual operation in about 15 minutes — never a generic estimate." },
  { q: "What GL limits do I need for DOT highway paving work?", a: "State DOT contracts typically require $1M per occurrence and $2M aggregate as a minimum — but many state DOT projects, airport contracts, and large municipal jobs require $5M or $10M, which means you need an umbrella policy above your primary GL. We match the GL and umbrella structure to your contract specifications." },
  { q: "What workers' comp class code applies to paving crews?", a: "The primary code for asphalt and paving crews is NCCI class 5506 (street, road, highway, or parking area paving). Milling and planing operators, flagging crews, equipment operators, and supervisors may carry additional codes. Correct classification avoids audit disputes and premium overcharges — we assign codes to your actual workflow." },
  { q: "Does commercial auto cover my dump trucks?", a: "Yes — dump trucks, fuel trucks, and equipment haulers on public roads need commercial auto. Farm auto forms and generic contractor forms often exclude heavy commercial hauling. We place commercial auto that covers your whole fleet and coordinates with your inland marine for equipment being transported." },
  { q: "What's the difference between contractor's equipment and inland marine for paving?", a: "Contractor's equipment covers specific scheduled items (pavers, rollers, milling machines, compactors) against physical damage — theft, fire, collision, and operator error. Inland marine covers unscheduled tools, smaller equipment, and materials while in transit or on a jobsite. Both are typically needed on a paving operation; they're complementary, not interchangeable." },
  { q: "Is my milling machine covered if it's stolen off a jobsite?", a: "Only if you have contractor's equipment insurance with theft as a covered peril — and only up to its scheduled value. If the machine is scheduled at a value below its replacement cost, the shortfall is yours. We schedule heavy paving iron at actual replacement cost so a theft claim pays what the piece is worth." },
  { q: "Do I need surety bonds to bid on highway paving work?", a: "Yes. Most public road paving contracts — state DOT, county, municipal, and federal highway — require a bid bond to submit a bid, and a performance bond plus a payment bond if you win. Bond capacity is separate from your insurance program and depends on your financials, experience, and bonding history. We place bonds for contractors of all sizes." },
  { q: "What if I've been declined for paving contractor insurance before?", a: "Often we can still place coverage. We have admitted and excess-and-surplus (E&S) markets for contractors declined over prior loss runs, a highway fatality on record, OSHA citations, or high equipment values. Bring us your situation and we'll find a market." },
  { q: "Does umbrella insurance cover DOT highway fatalities?", a: "Umbrella provides excess coverage above your primary GL and auto policy limits — so if a fatality on a highway project results in a judgment or settlement above your primary limits, the umbrella responds. Most DOT highway projects require $5M–$10M total limits, which is why umbrella is essential for state road work." },
  { q: "Are my employees covered while working in traffic on a highway?", a: "Workers' comp covers on-the-job injuries regardless of where they occur — including traffic-exposure incidents on highway resurfacing projects. Federal and state OSHA have specific Work Zone Traffic Control requirements, and some carriers add premiums for highway-exposure work. We factor your traffic exposure into the program correctly." },
  { q: "What's the builder's risk requirement for paving contracts?", a: "Builder's risk covers materials and project value during construction — asphalt materials on-site, base and sub-base, curb and gutter, and storm drainage. Many commercial and municipal paving contracts require the contractor to carry builder's risk for the project duration. We place builder's risk alongside your core program as contracts require it." },
  { q: "Can you insure paving contractors in all 50 states?", a: "Yes. Contractors Choice Agency is licensed in all 50 states and writes road paving contractor programs whether your operation is in Texas, California, Florida, the Midwest, or anywhere in between." },
  { q: "How fast can we get a paving contractor insurance quote?", a: "Typically 15 minutes on a call. For larger programs with high equipment values or significant bonding capacity, we may need a day or two to involve the right markets, but we move fast and tell you the timeline up front." },
  { q: "Does GL cover property damage I cause while paving?", a: "Yes. Property damage to third-party property — hitting a utility line, damaging a curb, cracking an adjacent pavement — is covered under your GL policy. Completed-operations coverage extends that protection after the job is finished, which matters for paving contractors whose work is inspected after the fact." },
  { q: "Is my paving equipment covered while it's being transported on a trailer?", a: "Equipment being transported by your own trucks may be covered under your contractor's equipment or inland marine policy — but the coverage while 'on a trailer' vs. 'at a jobsite' depends on the form. We confirm the transit coverage gap is closed so a milling machine isn't uninsured between jobs." },
  { q: "What's the difference between a performance bond and payment bond?", a: "A performance bond guarantees you'll complete the project according to the contract specifications — the surety pays the obligee (project owner) if you default. A payment bond guarantees you'll pay your subcontractors and suppliers — they can make a claim against the bond if you don't. Both are required on most public paving contracts above the applicable threshold." },
  { q: "Do I need inland marine if I already have contractor's equipment?", a: "Usually yes. Contractor's equipment covers scheduled, higher-value items. Inland marine covers unscheduled tools and smaller equipment — hand tools, survey equipment, compactors below the scheduling threshold — that move daily and aren't practical to schedule individually. Together they close the portable-property gap on a paving operation." },
  { q: "Will you insure a paving contractor with prior losses?", a: "Often yes. Prior losses don't automatically disqualify your operation — it depends on the type of loss, frequency, and what you've done to address root causes. We have E&S markets for paving contractors with prior GL or WC claims that standard markets won't write. Bring us your loss runs and we'll find a path." },
  { q: "Should I bundle all my paving coverage into one program?", a: "Usually yes. A coordinated program closes gaps between policies, simplifies certificate management for DOT contracts, and is typically cheaper than separate policies from separate carriers. We build one coordinated program — GL, WC, auto, equipment, inland marine, umbrella, and bonds — and manage it as a single account." },
];

/* ============================================================
   GENERAL FAQ — pads service & location pages to 20.
   ============================================================ */
export const GENERAL_FAQS = [
  { q: "How much does road paving contractor insurance cost?", a: "Cost is driven by crew size and payroll, equipment values, annual revenue, contract types, and loss history. We quote your actual operation in about 15 minutes — never a ballpark from a generic contractor form." },
  { q: "Do you write paving contractor insurance in all 50 states?", a: "Yes. Contractors Choice Agency is licensed in all 50 states and writes paving programs nationwide — Texas, California, Florida, the Midwest, Northeast, Southeast, and everywhere asphalt gets laid." },
  { q: "How fast can we get a quote?", a: "Typically 15 minutes on a call. Larger or higher-value programs may take a day or two to place with the right markets, but we move fast and set expectations up front." },
  { q: "Will you insure a paving contractor that's been declined or has prior losses?", a: "Often yes. We have admitted and E&S markets for contractors declined over prior loss runs, highway fatalities on record, OSHA citations, or high equipment values. Bring us your situation and we'll find a market." },
  { q: "Should I bundle all my paving coverage with one program?", a: "Usually yes. A coordinated program closes gaps between policies, simplifies certificate management for DOT contracts, and is typically cheaper than separate policies from separate carriers." },
  { q: "What does an A-rated carrier mean and why does it matter?", a: "A.M. Best ratings reflect a carrier's financial strength and ability to pay claims. We place coverage with A-rated (and A.M. Best A+ where possible) carriers so the coverage is there when a stolen paver, a fatality, or a bond call hits." },
  { q: "Do you insure both union and non-union paving contractors?", a: "Yes. We write programs for union, open-shop, and mixed-crew paving operations. Union and prevailing-wage projects may have specific GL and WC requirements we factor into the program structure." },
  { q: "How are milling machines and heavy pavers valued at claim time?", a: "Equipment is paid at its scheduled value on the contractor's equipment policy. We schedule heavy paving iron at actual replacement cost — not depreciated ACV — so a theft or total loss pays what the piece is worth." },
  { q: "What information do you need to quote my paving operation?", a: "Crew size and payroll, full equipment list with values, annual revenue, contract types (DOT, commercial, municipal), bonding capacity needed, current coverage, and loss history. The more detail, the more accurate the quote." },
  { q: "Does GL cover me if I damage a utility line while paving?", a: "Utility-line damage is a covered property-damage claim under your GL, subject to the policy terms. We make sure your GL form doesn't contain subsurface utility exclusions that would leave you exposed on a street-paving project where unmarked lines are a real risk." },
  { q: "Are flagging crews covered under my workers' comp?", a: "Yes — flagging and traffic-control workers are covered under your workers' comp program. High-traffic-exposure work carries elevated WC rates, which is why correct class-code assignment matters. We class traffic-control and flagging labor accurately." },
  { q: "What happens if an equipment claim is denied because of wrong scheduled value?", a: "If your paver is scheduled at ACV or a value that doesn't reflect replacement cost, the claim pays the scheduled amount — not what it costs to replace. We schedule equipment at current replacement value so a claim settlement closes the gap rather than widening it." },
  { q: "Can you coordinate coverage across multiple jobsites simultaneously?", a: "Yes. If you're running multiple highway, commercial, and municipal projects at the same time, we build one GL, equipment, and inland marine program that covers every active site — no project-by-project certificate scramble." },
  { q: "Do you offer coverage for subcontractors I use on paving projects?", a: "Your GL has completed-operations coverage that extends to your work, but subcontractors need their own GL policies naming you as additional insured. We help you set up proper sub-insurance requirements and certificate tracking so your prime contract coverage isn't voided by an uninsured sub." },
];

/* ============================================================
   SERVICE DETAIL
   ============================================================ */
export interface ServiceDetail {
  heroBlurb: string;
  whatsCovered: string[];
  whoItsFor: string[];
  whyCca: string[];
  faqs: { q: string; a: string }[];
}

export const SERVICE_DETAIL: Record<string, ServiceDetail> = {
  "general-liability": {
    heroBlurb: "CGL coverage for bodily injury, property damage, and completed-operations claims arising from your paving work — on public roads, DOT highway projects, commercial lots, and private sites. Includes premises liability, products-completed ops, and independent-contractor liability.",
    whatsCovered: ["Third-party bodily injury on or adjacent to paving jobsites", "Property damage to adjacent structures, utilities, and vehicles", "Completed-operations coverage after the project is signed off", "Independent-contractor and subcontractor liability extensions", "Defense costs and legal fees for GL claims", "Additional insured certificates for DOT and prime contractors"],
    whoItsFor: ["Any paving contractor bidding on DOT or public work (required)", "Commercial lot and parking structure paving crews", "Operations that regularly damage utilities or adjacent structures", "Contractors required to carry $1M–$2M GL minimums on bids"],
    whyCca: ["GL structured for paving's completed-operations tail — not generic contractor forms", "Correct products-completed ops language for DOT inspection-after-completion projects", "E&S market access for contractors with prior GL loss runs"],
    faqs: [
      { q: "What GL limits do I need for a state DOT project?", a: "Most state DOT projects require $1M per occurrence and $2M aggregate minimum — but many large highway projects, airport contracts, and port authority jobs require $5M or $10M total limits. We match your GL and umbrella to your contract spec sheet." },
      { q: "Does GL cover utility line damage?", a: "Yes — utility-line damage is a covered property-damage claim under your GL, subject to policy terms. We make sure your GL form doesn't contain subsurface utility exclusions that leave you exposed on street-paving projects." },
      { q: "What is completed-operations coverage and why does paving need it?", a: "Completed-operations covers claims that arise after your work is finished — pavement failures, base failures, or property damage discovered during DOT inspection. Paving is specifically vulnerable because defects aren't always visible until months after completion." },
      { q: "Does GL cover my subcontractors' work?", a: "Your GL covers your work; subcontractors need their own GL policies naming you as additional insured. We help set up proper sub-insurance requirements so a sub's GL failure doesn't void your prime contract coverage." },
      { q: "Can I get certificates for multiple DOT projects quickly?", a: "Yes — we issue additional-insured certificates for DOT, municipal, and prime-contract requirements. Multi-project contractors get a certificate management process that handles the volume without a request backlog." },
    ],
  },
  "workers-compensation": {
    heroBlurb: "Coverage for the high-hazard injuries that follow paving work — heat stress and asphalt burns, traffic-exposure incidents on highway projects, roller and compactor accidents, and fall injuries on milled surfaces. Correct NCCI class codes for paving labor.",
    whatsCovered: ["Medical treatment for on-the-job paving injuries", "Disability and lost-wage benefits for injured crew members", "Asphalt burns and heat-stress incidents", "Traffic-exposure injuries on highway resurfacing projects", "Roller, compactor, and paver equipment accidents", "Employers' liability (Part Two) protection"],
    whoItsFor: ["Paving contractors with W-2 employees (required in most states)", "Asphalt and hot-mix paving crews", "Milling and planing operators", "Flagging and traffic-control crews", "Equipment operators and laborers"],
    whyCca: ["NCCI class codes structured for actual paving job categories", "Traffic-exposure and high-hazard paving work reflected in the rating", "Fast claim handling so injured crew members get care without dispute"],
    faqs: [
      { q: "What class code applies to my asphalt paving crew?", a: "The primary code for paving crews is NCCI 5506 (street, road, highway, or parking area paving). Milling operators, flaggers, and equipment operators may carry additional codes. Correct classification avoids audit disputes and premium overcharges." },
      { q: "Are traffic-exposure injuries covered on highway projects?", a: "Yes — injuries from traffic intrusion on highway resurfacing projects are covered workers' comp claims. High-traffic-exposure work carries elevated WC rates, which is why proper class-code and exposure-base setup matters from day one." },
      { q: "Is workers' comp required for paving employees?", a: "In most states, yes — once you have employees, workers' comp is mandatory. Paving is classified as high-hazard (equipment, hot materials, traffic exposure), making proper coverage essential for both your crew and your contractor liability." },
      { q: "What if my crew is misclassified?", a: "Misclassification leads to premium disputes at audit and gaps in coverage. We assign class codes to your actual crew work — paving, milling, flagging, and equipment operation — so you're neither overpaying nor exposed when a claim happens." },
      { q: "How are seasonal and project-based crews handled?", a: "Seasonal and project-based labor needs to be reflected in the WC policy. We structure the policy to cover your actual payroll cycle so an audit doesn't produce a surprise bill at the end of the season." },
    ],
  },
  "commercial-auto": {
    heroBlurb: "Liability and physical damage for the dump trucks, fuel trucks, equipment haulers, and pickup fleets you run on public roads — including hired and non-owned auto for crews using personal vehicles on paving jobs.",
    whatsCovered: ["Liability for at-fault accidents in dump trucks and fuel trucks", "Physical damage to owned commercial vehicles", "Hired and non-owned auto for crew members", "Uninsured and underinsured motorist coverage", "Equipment haulers and tractor-trailers transporting paving iron", "Loading and unloading liability"],
    whoItsFor: ["Paving contractors with owned dump trucks or equipment haulers", "Operations running fleets on public roads", "Crews whose members use personal vehicles on paving business", "Contractors whose farm auto or personal auto form excludes commercial hauling"],
    whyCca: ["Commercial hauling exposure correctly factored into the program", "Coordinates with inland marine for equipment in transit", "Fleet and single-vehicle programs available"],
    faqs: [
      { q: "Is a dump truck covered under farm auto or commercial auto?", a: "Vehicles used on public roads — dump trucks, fuel trucks, and equipment haulers — need commercial auto. Farm auto forms and personal auto policies exclude commercial hauling and heavy vehicles. We place commercial auto and coordinate it with your equipment and inland marine programs." },
      { q: "What is hired and non-owned auto, and do paving contractors need it?", a: "It covers liability when your crew members drive their own vehicles (or rented vehicles) on company business — picking up supplies, driving to a jobsite, or running an errand for the operation. If anyone does this, you want this coverage." },
      { q: "Is equipment on a trailer covered by my commercial auto?", a: "Your commercial auto covers the trailer and the tow vehicle. The equipment being transported may require inland marine or contractor's equipment coverage during transport — we coordinate both so the load and the iron are covered." },
      { q: "How do I cover a growing dump truck fleet?", a: "Fleet commercial auto programs are available for operations with multiple vehicles, with per-vehicle and per-fleet pricing options. Adding a truck is as simple as a call — no coverage gaps while you're scaling." },
    ],
  },
  "equipment-insurance": {
    heroBlurb: "All-risk physical damage coverage for the heavy iron that defines your paving operation — asphalt pavers, drum and pneumatic rollers, cold milling machines, motor graders, and compactors — covering theft, fire, vandalism, collision, and operator error.",
    whatsCovered: ["Asphalt pavers and screed units", "Drum rollers, pneumatic-tire rollers, and compactors", "Cold milling machines and reclaimer/stabilizers", "Motor graders and patrol graders", "Backhoes, mini-excavators, and skid loaders used on paving projects", "Theft, fire, vandalism, collision, and operator-error damage"],
    whoItsFor: ["Any paving contractor with owned heavy equipment", "Operations where equipment is the primary capital asset", "Contractors whose GL or commercial auto policy excludes physical damage to equipment", "Operations with high-value milling machines or specialty paving iron"],
    whyCca: ["Equipment scheduled at replacement cost — not ACV with depreciation", "Fast claim settlement so you're not waiting weeks to replace a paver", "E&S market access for high-value or specialty equipment"],
    faqs: [
      { q: "What's the difference between ACV and replacement cost for equipment?", a: "ACV (actual cash value) pays what the equipment is worth today after depreciation — which on a 5-year-old milling machine can be dramatically less than what it costs to replace. Replacement cost pays what it costs to buy an equivalent unit today. For capital-intensive paving iron, the difference at claim time is enormous." },
      { q: "Is my paver covered if an operator makes a mistake and damages it?", a: "Yes — operator error is a covered peril on a contractor's equipment policy. Accidental damage caused by a crew member while operating equipment is covered, subject to the deductible." },
      { q: "What if my milling machine is stolen overnight from a jobsite?", a: "Theft is a covered peril. The claim is paid at the scheduled value — which is why scheduling at replacement cost rather than ACV is critical. We also help you document equipment with serial numbers and photos so a theft claim is settled quickly." },
      { q: "Is equipment covered during transport to a jobsite?", a: "Equipment in transit may be covered under your contractor's equipment policy or require an inland marine endorsement depending on the form. We confirm your policy covers equipment while being trailered between jobs — a common gap on generic contractor programs." },
      { q: "How do I add new equipment to my policy?", a: "Adding a piece is as simple as a call. We add new equipment to your schedule with the correct replacement-cost value and update your certificate holders. We also help you review your full equipment list annually so nothing is underinsured as values change." },
    ],
  },
  "inland-marine": {
    heroBlurb: "Covers contractor tools and equipment while in transit, at the jobsite, or in storage — including hot-mix handling equipment, survey gear, hand tools, and materials. Fills the gap between your scheduled equipment policy and what moves on every paving job.",
    whatsCovered: ["Unscheduled tools and small equipment at the jobsite", "Survey and layout equipment", "Traffic-control devices and safety equipment", "Asphalt materials and aggregate while in transit", "Equipment and tools in crew vehicles or storage trailers", "Theft and damage of portable items between jobs"],
    whoItsFor: ["Paving operations with significant portable tool value", "Contractors whose equipment policy only covers scheduled iron above a threshold", "Operations that regularly move materials, tools, and devices between jobsites", "Any paving crew that would notice a material uninsured gap if a work trailer were broken into"],
    whyCca: ["Inland marine structured to complement — not duplicate — your equipment schedule", "Fast claim handling for small portable equipment losses", "Blanket tool coverage so you're not scheduling every wrench"],
    faqs: [
      { q: "Why do I need inland marine if I already have contractor's equipment?", a: "Contractor's equipment covers scheduled high-value items. Inland marine covers the unscheduled tools and small equipment — hand tools, survey equipment, traffic devices, and items below the scheduling threshold — that are practical to carry as a blanket. Together they cover the full portable-property exposure." },
      { q: "Are asphalt materials covered while being transported?", a: "Hot-mix asphalt and aggregate in transit can be covered under an inland marine policy — particularly for loads on third-party trucks or in situations where cargo insurance doesn't apply. We confirm the in-transit materials gap is closed." },
      { q: "Is my survey equipment covered on a paving project?", a: "Survey and layout equipment is a classic inland marine item — high-value, portable, used across multiple sites, and not typically scheduled under a contractor's equipment policy. We include it in the blanket inland marine coverage." },
      { q: "What if a work trailer full of tools is stolen overnight?", a: "A blanket inland marine policy covers the tools and equipment inside the trailer up to the blanket limit — without requiring you to document and schedule each item individually. We size the blanket limit to reflect your realistic portable-equipment exposure." },
    ],
  },
  "umbrella-liability": {
    heroBlurb: "Excess liability above your GL, auto, and WC limits — required at $5M, $10M, or higher on DOT, municipal, and state highway contracts. Protects your operation when a serious accident or third-party claim exceeds your primary policy limits.",
    whatsCovered: ["Excess coverage above GL per-occurrence and aggregate limits", "Excess above commercial auto liability limits", "Excess above employers' liability (WC Part Two) limits", "Drop-down coverage when primary limits are exhausted", "Defense cost coverage above primary limits", "Coverage for DOT-required excess liability contract requirements"],
    whoItsFor: ["Paving contractors bidding on state DOT highway contracts", "Municipal and federal road resurfacing contractors", "Operations that require $5M–$10M+ limits on bids", "Any contractor whose primary GL and auto limits fall short of contract minimums"],
    whyCca: ["Umbrella limits matched to your actual DOT and contract requirements", "Follows-form structure so coverage is consistent with your primary program", "We place the umbrella and primary together so there are no gaps between layers"],
    faqs: [
      { q: "How much umbrella do I need for state DOT work?", a: "Most state DOT contracts require $5M–$10M total limits (GL + umbrella combined). Some large highway projects, bridge work, and airport contracts require $15M–$25M. We review your contract spec sheet and size the umbrella to meet the specific project requirements." },
      { q: "What's the difference between umbrella and excess liability?", a: "A true umbrella policy follows form (matches the terms of your underlying GL and auto) and may provide broader coverage than the underlying in some situations. Excess liability sits above the primary limits and follows the underlying terms exactly. For DOT contract compliance, either typically works — we match the form to what the contract requires." },
      { q: "Does umbrella cover a highway fatality?", a: "Umbrella provides excess coverage above your auto and GL limits — so if a fatality on a highway project results in a judgment above your primary limits, the umbrella responds. For high-speed highway work, having the umbrella in place before a bid is accepted is essential." },
      { q: "Can I get a certificate showing combined GL + umbrella limits for a DOT bid?", a: "Yes — we issue certificates showing combined limits (GL + umbrella) as required by DOT and prime contractors. Getting the certificate right for the contract requirement is part of what we handle." },
    ],
  },
  "surety-bonds": {
    heroBlurb: "Bid bonds, performance bonds, and payment bonds for public and private road paving contracts — including state DOT, county, municipal, and federal highway jobs. We place bonds for contractors of all sizes, including newer operations building their bonding history.",
    whatsCovered: ["Bid bonds for public paving contract submissions", "Performance bonds guaranteeing project completion", "Payment bonds guaranteeing payment to subs and suppliers", "License and permit bonds required by state and local jurisdictions", "Maintenance and warranty bonds after project completion", "Federal highway and transit project bonds (Miller Act)"],
    whoItsFor: ["Paving contractors pursuing state DOT, municipal, and county contracts", "Federal highway prime and subcontractors (Miller Act threshold)", "Newer paving contractors building bonding history", "Growing operations that need to increase their single-contract or aggregate bond capacity"],
    whyCca: ["Surety markets that understand paving contractor financials and project risk", "Bond programs for growing contractors — not just established operations", "We coordinate bonding with your insurance program so you have one point of contact"],
    faqs: [
      { q: "What's the difference between a bid bond, performance bond, and payment bond?", a: "A bid bond guarantees you'll honor your bid if you win — the surety pays the difference if you fail to execute. A performance bond guarantees you'll complete the project per the contract — the surety pays the owner if you default. A payment bond guarantees payment to your subs and suppliers — they can claim against the bond if you don't pay. Public paving contracts typically require all three." },
      { q: "How is my bonding capacity determined?", a: "Sureties look at your financial statements, working capital, experience on comparable projects, and overall bonding history. Your single-contract limit (largest single bond) and aggregate limit (all active bonds combined) are set based on this analysis. We work with surety markets that understand contractor financials, not just balance sheets." },
      { q: "Can new paving contractors get bonded?", a: "Yes — newer contractors can get bonded, though the initial capacity may be lower and a personal indemnity from the owner is typical. We work with surety markets that specialize in growing contractors and structure bond programs that build capacity as your track record grows." },
      { q: "What's the Miller Act and when does it apply?", a: "The Miller Act requires performance and payment bonds on all federal construction contracts over $150,000 — including federal highway resurfacing, base work, and airport paving. If you're working as a prime or first-tier sub on federal projects, Miller Act bonds are mandatory. We place these alongside your core insurance program." },
      { q: "Do I need a bond for commercial paving projects?", a: "Commercial paving projects generally don't require surety bonds — they're primarily a public-contract requirement. However, some large commercial developers and private owners do require performance bonds on significant projects. We place bonds for both public and private requirements." },
    ],
  },
  "builders-risk": {
    heroBlurb: "Property coverage for paving and roadway improvement projects during construction — including asphalt materials on-site, base and sub-base materials, curb and gutter, and storm drainage improvements. Required on many commercial and municipal paving contracts.",
    whatsCovered: ["Asphalt and materials on-site before placement", "Base and sub-base aggregate on the project site", "Curb and gutter, storm drainage, and site improvements", "Temporary traffic-control devices and signage", "Damage during the project period from fire, theft, and weather", "Soft costs and project delay coverage on larger contracts"],
    whoItsFor: ["Paving contractors whose commercial contracts require builder's risk", "Municipal and DOT paving projects with contract builder's risk requirements", "Operations with significant material value staged at the jobsite before installation", "Contractors who want to close the gap between their equipment policy and staged materials"],
    whyCca: ["Builder's risk structured for paving project values — not just vertical construction", "Project-specific and blanket policy options for high-volume paving operations", "Coordinates with your equipment and inland marine program to close all jobsite gaps"],
    faqs: [
      { q: "Do I need builder's risk if I'm just resurfacing a parking lot?", a: "Smaller commercial resurfacing jobs typically don't require builder's risk — but larger commercial lots, road reconstruction projects, and municipal contracts often do. We review your contract requirements and place builder's risk where needed without requiring it where it isn't." },
      { q: "What materials are covered under builder's risk for a paving project?", a: "Hot-mix asphalt, aggregate base, sub-base materials, curb and gutter forms, drainage pipe, and other project materials staged at the site are covered from the time they arrive until they're placed in the final work. Equipment on the site is covered by your contractor's equipment and inland marine policies, not builder's risk." },
      { q: "Does builder's risk cover theft of materials from the jobsite?", a: "Yes — theft of covered materials from the project site is typically a covered peril under builder's risk. Large aggregate stockpiles and material theft from road projects are real exposures. We make sure your builder's risk form includes theft without a separate endorsement requirement." },
      { q: "How do I get builder's risk for a specific DOT or municipal project?", a: "We place project-specific builder's risk tied to the contract value and duration. The bond obligee or project owner typically receives a certificate showing coverage for the project period. We handle the paperwork alongside your GL, WC, and bond certificates." },
    ],
  },
};

/* ============================================================
   COVERAGE REGIONS — coverage page
   ============================================================ */
export const AZ_REGIONS = [
  { name: "Texas", note: "TxDOT highway resurfacing and commercial paving — one of the busiest markets" },
  { name: "California", note: "Caltrans, local agency, and urban resurfacing — high limits and DIR registration" },
  { name: "Florida", note: "FDOT, county, and commercial paving — hurricane repair and rapid growth" },
  { name: "Midwest", note: "ODOT, INDOT, IDOT, MDOT — highway and commercial paving year-round" },
  { name: "Northeast & Mid-Atlantic", note: "NYSDOT, PennDOT, NJDOT — high limits and port authority requirements" },
  { name: "Southeast", note: "GDOT, NCDOT, SCDOT, TDOT — commercial growth and public paving demand" },
  { name: "Mountain West", note: "CDOT, ADOT — highway, commercial, and resort community paving" },
  { name: "Great Plains", note: "KDOT, NDOT, IADOT — rural highway and municipal paving programs" },
];

export const US_STATES = [
  "Alabama","Alaska","Arizona","Arkansas","California","Colorado","Connecticut",
  "Delaware","Florida","Georgia","Hawaii","Idaho","Illinois","Indiana","Iowa",
  "Kansas","Kentucky","Louisiana","Maine","Maryland","Massachusetts","Michigan",
  "Minnesota","Mississippi","Missouri","Montana","Nebraska","Nevada","New Hampshire",
  "New Jersey","New Mexico","New York","North Carolina","North Dakota","Ohio",
  "Oklahoma","Oregon","Pennsylvania","Rhode Island","South Carolina","South Dakota",
  "Tennessee","Texas","Utah","Vermont","Virginia","Washington","West Virginia",
  "Wisconsin","Wyoming",
];

export const QUOTE_SERVICE_TYPES = [
  "Commercial General Liability (GL)",
  "Workers' Compensation",
  "Commercial Auto & Trucking",
  "Contractor's Equipment Insurance",
  "Inland Marine Coverage",
  "Umbrella & Excess Liability",
  "Surety Bonds (Bid / Performance / Payment)",
  "Builder's Risk Insurance",
  "Full program / bundle (recommended)",
  "Not sure — help me figure it out",
];

export const YEARS_OPTIONS = [
  "Less than 1 year",
  "1–2 years",
  "3–5 years",
  "6–10 years",
  "10+ years",
];
