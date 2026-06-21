// Centralized site data — used across nav, footer, schema, CTAs
// Road Paving Insurance — road paving contractor coverage

export const SITE = {
  name: "Road Paving Insurance",
  legalName: "Road Paving Insurance (by Contractors Choice Agency)",
  domain: "roadpavinginsurance.com",
  url: "https://roadpavinginsurance.com",
  tagline: "Insurance for Road Paving Contractors",
  description:
    "Specialized commercial insurance for road paving contractors — general liability, workers' compensation, commercial auto, contractor's equipment, inland marine, umbrella & excess liability, surety bonds, and builder's risk. DOT-project experience. A-rated carriers. 15-minute quotes.",
  phone: "844-967-5247",
  phoneAlt: "855-336-7189",
  phoneHref: "tel:+18449675247",
  phoneAltHref: "tel:+18553367189",
  email: "josh@contractorschoiceagency.com",
  founded: 2005,
  npn: "8608479",
  address: {
    street: "12220 E Riggs Road, Suite #105",
    city: "Chandler",
    state: "AZ",
    zip: "85249",
    country: "US",
  },
  hours: "Mon–Fri 8am–5pm (MST)",
  claimsSla: "2-hour claims response",
  quoteSla: "15-minute quote turnaround",
  statesLicensed: "All 50 states",
} as const;

// Niche nouns used in headings, metadata, and component copy
export const BRAND = {
  brandShort: "Paving",
  brandSub: "Contractor Insurance",
  nicheShort: "road paving contractor",
  nicheShortCap: "Road Paving Contractor",
  nichePlural: "road paving contractors",
  nichePluralCap: "Road Paving Contractors",
  operator: "paving operation",
  operatorCap: "Paving Operation",
  industry: "road paving",
  industryCap: "Road Paving",
  audience: "paving contractors",
  audienceCap: "Paving Contractors",
  ownerTitle: "paving contractor",
  regionPill: "DOT Projects · Nationwide · All Crew Sizes",
  serviceSuffix: "Paving Contractors",
} as const;

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Coverage", href: "/coverage" },
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
] as const;

export const SERVICES = [
  {
    slug: "general-liability",
    title: "Commercial General Liability",
    short: "The GL every paving contract requires",
    description:
      "CGL coverage for bodily injury, property damage, and completed-operations claims arising from your paving work — on public roads, DOT projects, commercial lots, and private sites. Includes premises liability, products-completed ops, and independent-contractor liability.",
    icon: "ShieldCheck",
    keywords: ["paving contractor general liability", "road contractor GL insurance", "asphalt contractor liability", "paving company liability coverage"],
  },
  {
    slug: "workers-compensation",
    title: "Workers' Compensation",
    short: "For asphalt, mill-and-pave, and flagging crews",
    description:
      "Coverage for the high-hazard injuries that follow paving work — heat stress, asphalt burn, traffic-exposure incidents, roller and compactor accidents, and fall injuries on milled surfaces. Correct class codes for paving labor so you pass audits and don't overpay.",
    icon: "HardHat",
    keywords: ["paving contractor workers compensation", "asphalt crew workers comp", "road construction workers comp", "DOT contractor workers compensation"],
  },
  {
    slug: "commercial-auto",
    title: "Commercial Auto & Trucking",
    short: "Dump trucks, rollers & equipment haulers",
    description:
      "Liability and physical damage for your dump trucks, fuel trucks, pickup fleets, tractor-trailers hauling equipment, and any vehicle on public roads. Includes hired and non-owned auto for crews using personal vehicles on company jobs.",
    icon: "Truck",
    keywords: ["paving contractor commercial auto", "dump truck insurance", "equipment hauler insurance", "road contractor fleet insurance"],
  },
  {
    slug: "equipment-insurance",
    title: "Contractor's Equipment Insurance",
    short: "Pavers, rollers, milling machines & compactors",
    description:
      "All-risk physical damage coverage for the heavy iron that defines your operation — asphalt pavers, drum and pneumatic rollers, cold milling machines, motor graders, and compactors. Covers theft, fire, vandalism, collision, and operator error on and off jobsites.",
    icon: "Wrench",
    keywords: ["paving equipment insurance", "asphalt paver insurance", "road roller insurance", "milling machine insurance contractor"],
  },
  {
    slug: "inland-marine",
    title: "Inland Marine Coverage",
    short: "Tools, equipment & materials in transit",
    description:
      "Covers contractor tools and equipment while in transit, at the jobsite, or in storage — including hot mix asphalt handling equipment, survey gear, hand tools, and materials. Fills the gap between your equipment policy (scheduled iron) and what moves daily.",
    icon: "Package",
    keywords: ["contractor inland marine insurance", "paving tools coverage", "equipment in transit insurance", "asphalt materials insurance"],
  },
  {
    slug: "umbrella-liability",
    title: "Umbrella & Excess Liability",
    short: "Higher limits for DOT and public contracts",
    description:
      "Excess liability above your GL, auto, and WC — often required at $5M, $10M, or higher on DOT, municipal, and state highway contracts. Protects your operation when a serious accident or third-party claim exceeds your primary policy limits.",
    icon: "Layers",
    keywords: ["paving contractor umbrella insurance", "excess liability road contractor", "DOT project umbrella coverage", "commercial umbrella paving company"],
  },
  {
    slug: "surety-bonds",
    title: "Surety Bonds",
    short: "Bid, performance & payment bonds for DOT work",
    description:
      "Bid bonds, performance bonds, and payment bonds for public and private road paving contracts — including state DOT, county, municipal, and federal highway jobs. We place bonds for contractors of all sizes, including newer operations building their bonding history.",
    icon: "FileSignature",
    keywords: ["paving contractor surety bond", "performance bond road contractor", "bid bond asphalt contractor", "DOT performance bond paving"],
  },
  {
    slug: "builders-risk",
    title: "Builder's Risk Insurance",
    short: "Project coverage for paving & construction work",
    description:
      "Property coverage for paving and roadway improvement projects during construction — including asphalt materials on-site, base and sub-base materials, curb and gutter, and storm drainage improvements. Required on many commercial and municipal paving contracts.",
    icon: "Building2",
    keywords: ["builders risk paving contractor", "road construction builders risk", "asphalt project insurance", "contractor builders risk DOT project"],
  },
] as const;

export const LOCATIONS = [
  { slug: "texas", name: "Texas", region: "TxDOT · Municipal · Commercial", blurb: "One of the busiest highway and commercial paving markets in the country. We place full GL, WC, equipment, and surety bond programs for Texas paving contractors — from small commercial crews in Dallas-Fort Worth and Houston to TxDOT prime and sub contractors statewide." },
  { slug: "california", name: "California", region: "Caltrans · Local Agency · Urban", blurb: "California's Caltrans and local-agency market demands high limits, DIR registration, and carrier-approved bonds. We structure programs for California paving contractors that meet prevailing-wage and public-contract requirements — with markets that know the state's exposure profile." },
  { slug: "florida", name: "Florida", region: "FDOT · County · Commercial", blurb: "Florida's growth and FDOT rebuild pipeline means consistent demand for bonded paving contractors. We place insurance and surety for Florida paving companies — including programs for contractors rebuilding after hurricane damage and new contractors entering the public market." },
  { slug: "midwest", name: "Midwest", region: "Ohio · Indiana · Illinois · Michigan", blurb: "Midwest paving runs year-round on highway resurfacing, commercial lots, and municipal contracts. We insure paving contractors across the ODOT, INDOT, IDOT, and MDOT markets — with WC class codes dialed in for the region's union and open-shop crews." },
  { slug: "northeast", name: "Northeast & Mid-Atlantic", region: "NY · PA · NJ · New England", blurb: "The Northeast's NYSDOT, PennDOT, and NJDOT markets require strong bonding capacity and high GL limits. We work with paving contractors in New York, Pennsylvania, New Jersey, and New England to place programs that meet public and port authority requirements." },
  { slug: "southeast", name: "Southeast", region: "Georgia · Carolinas · Tennessee", blurb: "Fast-growing Southeast markets with GDOT, NCDOT, SCDOT, and TDOT paving contracts alongside explosive commercial growth. We place bonding and insurance for paving contractors in Georgia, the Carolinas, and Tennessee — including programs for contractors scaling up bid capacity." },
  { slug: "mountain-west", name: "Mountain West", region: "Colorado · Arizona · Nevada · Utah", blurb: "Mountain West DOT markets and a booming commercial sector drive consistent paving demand. We place programs for Colorado, Arizona, Nevada, and Utah paving contractors — including high-altitude work in CDOT's mountain corridor and commercial lot contractors in Phoenix and Las Vegas." },
  { slug: "great-plains", name: "Great Plains", region: "Kansas · Nebraska · Iowa", blurb: "Great Plains highway and rural road paving requires long-haul equipment exposure coverage and strong performance bonds for state DOT contracts. We serve Kansas, Nebraska, and Iowa paving contractors with full programs from GL and equipment through bonding." },
] as const;

export const CREDENTIALS = [
  { label: "Licensed in all 50 states", icon: "MapPin" },
  { label: "Founded 2005 — 20+ years", icon: "CalendarCheck" },
  { label: "DOT-project experience", icon: "HardHat" },
  { label: "15-minute quote turnaround", icon: "Timer" },
  { label: "2-hour claims response", icon: "Zap" },
  { label: "A.M. Best A+ carrier partners", icon: "Award" },
] as const;

export const STATS = [
  { value: 450, suffix: "+", label: "Paving contractors insured nationwide", prefix: "" },
  { value: 20, suffix: "+", label: "Years insuring contractor operations", prefix: "" },
  { value: 15, suffix: " min", label: "Average quote turnaround", prefix: "" },
  { value: 50, suffix: "", label: "States licensed & writing", prefix: "" },
] as const;

export const TESTIMONIALS = [
  { quote: "We needed $10M umbrella to qualify for a TxDOT resurfacing contract and couldn't find a carrier that understood paving exposure. Road Paving Insurance placed the umbrella and our surety bond in one call. We bid the job and won.", name: "Marcus T.", role: "Owner", location: "Texas" },
  { quote: "A milling machine was stolen off a locked jobsite overnight — $280,000 piece of iron gone. The equipment claim was paid in under two weeks with zero argument about the scheduled value. Their contractor's equipment program is the real deal.", name: "Sandra L.", role: "Operations Manager", location: "Florida" },
  { quote: "Two guys got asphalt burns on a resurfacing job and one had a serious knee injury from a milled surface. Workers' comp paid fast and the class codes were right — our audit came back clean. After years of getting overcharged by a carrier that didn't know paving, that matters.", name: "Dale R.", role: "Paving Crew Supervisor", location: "Ohio" },
] as const;
