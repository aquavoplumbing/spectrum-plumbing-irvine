export const BUSINESS_PHONE = {
  raw: "+19495398503",
  display: "(949) 539-8503",
  href: "tel:+19495398503",
} as const;

export const BUSINESS_ADDRESS = {
  street: "100 Spectrum Center Dr",
  city: "Irvine",
  state: "CA",
  zip: "92618",
  full: "100 Spectrum Center Dr, Irvine, CA 92618",
} as const;

export const BUSINESS_INFO = {
  name: "Spectrum Plumbing Irvine",
  legalType: "Local Plumbing Lead-Generation & Referral Platform",
  tagline: "Irvine Plumbing Connection & Service Information",
  address: BUSINESS_ADDRESS,
  city: "Irvine",
  state: "California",
  stateCode: "CA",
  country: "United States",
  countryCode: "US",
  targetArea: "Irvine & Orange County, California",
  domain: "https://spectrumplumbingirvine.com",
  canonicalUrl: "https://spectrumplumbingirvine.com/",
  phone: BUSINESS_PHONE,
  disclosure:
    "Spectrum Plumbing Irvine is a local plumbing referral and information service connecting Irvine property owners with experienced, independent plumbing professionals. We do not directly employ contractors or perform plumbing repairs.",
} as const;

