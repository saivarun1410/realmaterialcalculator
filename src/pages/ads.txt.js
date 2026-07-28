import { SITE_CONFIG } from '../consts.js';

// /ads.txt authorises Google to sell ad inventory on this domain. AdSense reports
// an "unauthorised inventory" warning without it. Generated from the single
// publisher id in consts.js so there is nothing to keep in sync by hand.
export const prerender = true;

const GOOGLE_ADSENSE_RESELLER_ID = 'f08c47fec0942fa0';

export const GET = () => {
  const publisherId = SITE_CONFIG.ADSENSE_CLIENT.replace(/^ca-/, '');
  const body = publisherId
    ? `google.com, ${publisherId}, DIRECT, ${GOOGLE_ADSENSE_RESELLER_ID}\n`
    : '';

  return new Response(body, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
};
