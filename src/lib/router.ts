import { PARTNERS_DATA, PartnerProfile, getPartnerBySlug, detectPartnerFromHostname } from '../data/partnersData';

export const TAB_TO_PATH: Record<string, string> = {
  home: '/',
  holding: '/about',
  portfolio: '/portfolio',
  services: '/services',
  'divisions-governance': '/management',
  subsidiaries: '/subsidiare',
  'divisions-core': '/divizii',
  partners: '/subsidiare',
  alliances: '/parteneri',
  contact: '/contact',
  legal: '/legal',
  terms: '/terms',
};

export const PATH_TO_TAB: Record<string, string> = {
  '/': 'home',
  '': 'home',
  '/about': 'holding',
  '/despre': 'holding',
  '/holding': 'holding',
  '/portfolio': 'portfolio',
  '/portofoliu': 'portfolio',
  '/services': 'services',
  '/servicii': 'services',
  '/management': 'divisions-governance',
  '/divisions-governance': 'divisions-governance',
  '/divizii-governance': 'divisions-governance',
  '/subsidiare': 'subsidiaries',
  '/subsidiaries': 'subsidiaries',
  '/divisions-core': 'divisions-core',
  '/divizii': 'divisions-core',
  '/partners': 'subsidiaries',
  '/parteneri': 'alliances',
  '/alliances': 'alliances',
  '/contact': 'contact',
  '/legal': 'legal',
  '/terms': 'terms',
  '/termeni': 'terms',
};

export function getPathForTab(tab: string): string {
  return TAB_TO_PATH[tab] || '/';
}

export function getPathForPartner(partnerSlug: string): string {
  return `/partner/${partnerSlug}`;
}

export function getRouteFromUrl(): { tab: string; partner: PartnerProfile | null } {
  if (typeof window === 'undefined') {
    return { tab: 'home', partner: null };
  }

  // 1. Check Subdomain hostname detection
  const detectedPartner = detectPartnerFromHostname();
  if (detectedPartner) {
    return { tab: 'partners', partner: detectedPartner };
  }

  // 2. Check query params e.g. ?partner=aoddfis or ?tab=portfolio
  const searchParams = new URLSearchParams(window.location.search);
  const partnerQuery = searchParams.get('partner') || searchParams.get('p') || searchParams.get('subdomain');
  if (partnerQuery) {
    const p = getPartnerBySlug(partnerQuery);
    if (p) return { tab: 'partners', partner: p };
  }

  const tabQuery = searchParams.get('tab');
  if (tabQuery && TAB_TO_PATH[tabQuery]) {
    return { tab: tabQuery, partner: null };
  }

  // 3. Check Pathname e.g. /partner/aoddfis or /partener/aoddfis
  const pathname = window.location.pathname.toLowerCase().replace(/\/$/, '');
  if (pathname.startsWith('/partner/') || pathname.startsWith('/partener/')) {
    const slug = pathname.split('/')[2];
    if (slug) {
      const p = getPartnerBySlug(slug);
      if (p) return { tab: 'partners', partner: p };
    }
  }

  // Check known tab paths
  const mappedTab = PATH_TO_TAB[pathname || '/'];
  if (mappedTab) {
    return { tab: mappedTab, partner: null };
  }

  // 4. Check Hash fallback e.g. #portfolio or #partner=aoddfis
  if (window.location.hash) {
    const hashVal = window.location.hash.replace('#', '').toLowerCase();
    if (hashVal.startsWith('partner=') || hashVal.startsWith('p=')) {
      const slug = hashVal.split('=')[1];
      const p = getPartnerBySlug(slug);
      if (p) return { tab: 'partners', partner: p };
    } else if (PATH_TO_TAB[`/${hashVal}`]) {
      return { tab: PATH_TO_TAB[`/${hashVal}`], partner: null };
    } else if (TAB_TO_PATH[hashVal]) {
      return { tab: hashVal, partner: null };
    }
  }

  return { tab: 'home', partner: null };
}

export function updateUrlForRoute(tab: string, partner: PartnerProfile | null, replace = false) {
  if (typeof window === 'undefined') return;

  const detectedPartner = detectPartnerFromHostname();
  let targetPath = '/';

  if (detectedPartner) {
    // If on a dedicated partner subdomain, the pathname is '/'
    targetPath = '/';
  } else if (partner) {
    targetPath = `/partner/${partner.slug}`;
  } else {
    targetPath = getPathForTab(tab);
  }

  const currentPathWithSearch = window.location.pathname + window.location.search + window.location.hash;
  
  if (currentPathWithSearch !== targetPath) {
    if (replace || detectedPartner) {
      window.history.replaceState({ tab, partnerSlug: partner?.slug }, '', targetPath);
    } else {
      window.history.pushState({ tab, partnerSlug: partner?.slug }, '', targetPath);
    }
  }
}
