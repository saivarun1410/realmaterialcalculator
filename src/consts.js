// Single source of truth for brand, site identity, owner details, and contact delivery.
export const SITE_CONFIG = Object.freeze({
  SITE_NAME: 'MaterialCalculator',
  OWNER_NAME: 'Sai Varun Thupakula',
  CONTACT_EMAIL: 'support@realmaterialcalculator.com',
  LAST_UPDATED: 'July 2026',
  GOVERNING_LAW: 'India',
  SITE_URL: 'https://realmaterialcalculator.com',
  CONTACT_FORM_ENDPOINT: 'https://api.web3forms.com/submit',
  CONTACT_FORM_ACCESS_KEY: 'bbcdeab9-a765-4306-a839-d477f16a6f2e',
  CONTACT_FORM_SUCCESS_URL: 'https://web3forms.com/success',
  // AdSense publisher id ("ca-pub-…"). Setting it loads the AdSense loader script
  // site-wide, which is what Google's site review and Auto ads require. Leave empty
  // to keep AdSense entirely off the site.
  ADSENSE_CLIENT: 'ca-pub-3368013124870774',
  // Render the manual <ins> ad units in the reserved placements below. Auto ads do
  // not need this — they only need ADSENSE_CLIENT.
  ADS_ENABLED: false,
});

// Manual ad-unit ids, keyed by the `placement` passed to <AdSlot>. Create each unit
// in AdSense → Ads → By ad unit, then paste its 10-digit data-ad-slot value here.
// A placement with no id here renders nothing, so units can be enabled one at a time.
export const ADSENSE_SLOTS = Object.freeze({
  'concrete-in-content-primary': '',
  'concrete-sidebar': '',
  'gravel-in-content-primary': '',
  'gravel-in-content-secondary': '',
  'gravel-sidebar': '',
  'gravel-sidebar-sticky': '',
  'mulch-in-content-primary': '',
  'mulch-in-content-secondary': '',
  'mulch-sidebar': '',
  'mulch-sidebar-sticky': '',
  'in-content-top': '',
  'in-content-mid': '',
  // 'concrete-affiliate' is an affiliate placement, not an AdSense unit — left unmapped.
});

// Compatibility exports for existing calculator pages and Astro configuration.
export const SITE_NAME = SITE_CONFIG.SITE_NAME;
export const SITE_URL = SITE_CONFIG.SITE_URL;

// Freshness stamp for the "What it costs" sections. Update in this ONE place
// when prices are re-reviewed; all three calculator pages read from it.
export const PRICES_REVIEWED = 'January 2026';
