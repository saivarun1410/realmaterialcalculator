// Single source of truth for brand, site identity, owner details, and contact delivery.
export const SITE_CONFIG = Object.freeze({
  SITE_NAME: 'MaterialCalc',
  OWNER_NAME: 'Sai Varun Thupakula',
  CONTACT_EMAIL: 'realmrealmaterialcalculator@support.com',
  LAST_UPDATED: 'July 2026',
  GOVERNING_LAW: 'India',
  SITE_URL: 'https://realmaterialcalculator.com',
  CONTACT_FORM_ENDPOINT: 'https://api.web3forms.com/submit',
  CONTACT_FORM_ACCESS_KEY: 'bbcdeab9-a765-4306-a839-d477f16a6f2e',
  CONTACT_FORM_SUCCESS_URL: 'https://web3forms.com/success',
});

// Compatibility exports for existing calculator pages and Astro configuration.
export const SITE_NAME = SITE_CONFIG.SITE_NAME;
export const SITE_URL = SITE_CONFIG.SITE_URL;

// Freshness stamp for the "What it costs" sections. Update in this ONE place
// when prices are re-reviewed; all three calculator pages read from it.
export const PRICES_REVIEWED = 'January 2026';
