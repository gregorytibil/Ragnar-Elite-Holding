/**
 * Centralized Enterprise-Grade Analytics Service
 * Ragnar Elite Holding
 * 
 * Manages Google Tag Manager (GTM), Google Analytics 4 (GA4), and LinkedIn Insight Tag.
 * Handles SPA route changes (tab switches), CTA tracking, form submissions, scroll depth,
 * downloads, and custom conversion events.
 */

declare global {
  interface Window {
    dataLayer: any[];
    gtag?: (...args: any[]) => void;
    _linkedin_partner_id?: string;
    _linkedin_data_partner_ids?: any[];
  }
  interface ImportMeta {
    readonly env: Record<string, any>;
  }
}

// Safely access environment variables with production-ready fallbacks
export const GTM_ID = import.meta.env.VITE_GTM_ID || '';
export const GA4_ID = import.meta.env.VITE_GA4_ID || '';
export const LINKEDIN_PARTNER_ID = import.meta.env.VITE_LINKEDIN_PARTNER_ID || '';

// Internal tracker state
let isInitialized = false;
const isDev = import.meta.env.DEV;

// Styled logger for development debugging
const logDebug = (message: string, data?: any) => {
  if (isDev) {
    console.log(
      `%c[Analytics] ${message}`,
      'background: #0B1B3D; color: #A2D2FF; padding: 3px 6px; border-radius: 3px; font-weight: bold;',
      data || ''
    );
  }
};

/**
 * Initializes all configured tracking systems once.
 * Scripts are loaded dynamically and asynchronously to preserve Core Web Vitals and Page Speed.
 */
export const initAnalytics = (): void => {
  if (isInitialized) {
    logDebug('Already initialized. Skipping setup.');
    return;
  }

  logDebug('Initializing central analytics architecture...', {
    GTM_ID: GTM_ID || 'Not provided (Simulated Mode)',
    GA4_ID: GA4_ID || 'Not provided (Simulated Mode)',
    LINKEDIN_PARTNER_ID: LINKEDIN_PARTNER_ID || 'Not provided (Simulated Mode)',
  });

  // Ensure dataLayer exists
  window.dataLayer = window.dataLayer || [];

  // Define gtag if GA4 is configured
  if (GA4_ID) {
    window.dataLayer.push({
      'gtag.start': new Date().getTime(),
      event: 'gtag.js',
    });
    window.gtag = function (...args: any[]) {
      window.dataLayer.push(arguments);
    };
    window.gtag('js', new Date());
    window.gtag('config', GA4_ID, {
      send_page_view: false, // Managed manually during route changes
      cookie_flags: 'SameSite=None;Secure',
    });
  }

  // 1. Load GA4 script dynamically
  if (GA4_ID && !document.getElementById('ga4-script')) {
    const gaScript = document.createElement('script');
    gaScript.id = 'ga4-script';
    gaScript.async = true;
    gaScript.src = `https://www.googletagmanager.com/gtag/js?id=${GA4_ID}`;
    document.head.appendChild(gaScript);
    logDebug('GA4 script added asynchronously.');
  }

  // 2. Load GTM script dynamically
  if (GTM_ID && !document.getElementById('gtm-script')) {
    // Push the initial GTM gtm.js event to dataLayer
    window.dataLayer.push({
      'gtm.start': new Date().getTime(),
      event: 'gtm.js'
    });

    const gtmScript = document.createElement('script');
    gtmScript.id = 'gtm-script';
    gtmScript.async = true;
    gtmScript.src = `https://www.googletagmanager.com/gtm.js?id=${GTM_ID}`;
    document.head.appendChild(gtmScript);
    logDebug('GTM script added asynchronously.');
  }

  // 3. Load LinkedIn Insight Tag dynamically
  if (LINKEDIN_PARTNER_ID && !document.getElementById('linkedin-insight-script')) {
    window._linkedin_partner_id = LINKEDIN_PARTNER_ID;
    window._linkedin_data_partner_ids = window._linkedin_data_partner_ids || [];
    window._linkedin_data_partner_ids.push(LINKEDIN_PARTNER_ID);

    const liScript = document.createElement('script');
    liScript.id = 'linkedin-insight-script';
    liScript.type = 'text/javascript';
    liScript.async = true;
    liScript.src = 'https://snap.licdn.com/li.lms-analytics/insight.min.js';
    document.head.appendChild(liScript);
    logDebug('LinkedIn Insight Tag script added asynchronously.');
  }

  // Fallback / Mock logs if no credentials are configured to help clients verify the payload structure
  if (!GTM_ID && !GA4_ID && !LINKEDIN_PARTNER_ID) {
    logDebug('⚠️ No environment IDs configured. Running in sandbox simulation mode. All events will log to console.');
  }

  isInitialized = true;
};

/**
 * Tracks virtual page views for the single page application.
 * Called whenever the tab changes or language changes.
 * 
 * @param pageName The human-readable name of the tab/page
 * @param path The simulated path corresponding to the view
 */
export const trackPageView = (pageName: string, path: string): void => {
  logDebug(`Tracking Page View: [${pageName}] at path: [${path}]`);

  // 1. GTM dataLayer push
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event: 'virtual_page_view',
    page_title: pageName,
    page_path: path,
    page_location: window.location.origin + path,
  });

  // 2. GA4 Event
  if (GA4_ID && window.gtag) {
    window.gtag('event', 'page_view', {
      page_title: pageName,
      page_path: path,
      page_location: window.location.origin + path,
    });
  }
};

/**
 * Tracks Call-to-Action (CTA) clicks.
 * 
 * @param ctaName Unique identifier for the CTA button/element
 * @param ctaLabel Text content or destination of the CTA
 * @param extraParams Additional key-value pairs to log
 */
export const trackCTA = (ctaName: string, ctaLabel: string, extraParams?: Record<string, any>): void => {
  logDebug(`Tracking CTA Click: ${ctaName} (${ctaLabel})`, extraParams);

  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event: 'cta_click',
    cta_name: ctaName,
    cta_label: ctaLabel,
    ...extraParams,
  });

  if (GA4_ID && window.gtag) {
    window.gtag('event', 'select_content', {
      content_type: 'button',
      item_id: ctaName,
      item_name: ctaLabel,
      ...extraParams,
    });
  }
};

/**
 * Tracks a secure contact form submission.
 * 
 * @param formName The name of the form (e.g., 'contact_proposal')
 * @param data Non-sensitive payload data to pass (e.g., sector selected)
 */
export const trackFormSubmission = (formName: string, data?: Record<string, any>): void => {
  logDebug(`Tracking Form Submission: ${formName}`, data);

  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event: 'form_submission',
    form_name: formName,
    ...data,
  });

  if (GA4_ID && window.gtag) {
    window.gtag('event', 'generate_lead', {
      form_name: formName,
      ...data,
    });
  }
};

/**
 * Tracks click on outbound links.
 * 
 * @param url Target destination URL
 */
export const trackOutboundLink = (url: string): void => {
  logDebug(`Tracking Outbound Link Click: ${url}`);

  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event: 'outbound_link_click',
    destination_url: url,
  });

  if (GA4_ID && window.gtag) {
    window.gtag('event', 'click', {
      outbound: true,
      link_url: url,
    });
  }
};

/**
 * Tracks phone number clicks.
 * 
 * @param phone Phone number being dialed
 */
export const trackPhoneClick = (phone: string): void => {
  logDebug(`Tracking Phone Call Trigger: ${phone}`);

  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event: 'contact_click',
    contact_type: 'phone',
    contact_value: phone,
  });

  if (GA4_ID && window.gtag) {
    window.gtag('event', 'contact', {
      method: 'phone',
      value: phone,
    });
  }
};

/**
 * Tracks email link clicks.
 * 
 * @param email Email address clicked
 */
export const trackEmailClick = (email: string): void => {
  logDebug(`Tracking Mailto Trigger: ${email}`);

  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event: 'contact_click',
    contact_type: 'email',
    contact_value: email,
  });

  if (GA4_ID && window.gtag) {
    window.gtag('event', 'contact', {
      method: 'email',
      value: email,
    });
  }
};

/**
 * Tracks WhatsApp button clicks.
 * 
 * @param phone WhatsApp number / link clicked
 */
export const trackWhatsAppClick = (phone: string): void => {
  logDebug(`Tracking WhatsApp Link Click: ${phone}`);

  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event: 'contact_click',
    contact_type: 'whatsapp',
    contact_value: phone,
  });

  if (GA4_ID && window.gtag) {
    window.gtag('event', 'contact', {
      method: 'whatsapp',
      value: phone,
    });
  }
};

/**
 * Tracks scroll depth thresholds (e.g. 25%, 50%, 75%, 100%).
 * 
 * @param depth Percentage of depth scrolled
 */
export const trackScrollDepth = (depth: number): void => {
  logDebug(`Tracking Scroll Depth: ${depth}%`);

  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event: 'scroll_depth',
    depth_percentage: depth,
  });

  if (GA4_ID && window.gtag) {
    window.gtag('event', 'scroll', {
      percent_scrolled: depth,
    });
  }
};

/**
 * Tracks download clicks of reports, brochures, or dossiers.
 * 
 * @param fileName Name/ID of the file being downloaded
 */
export const trackDownload = (fileName: string): void => {
  logDebug(`Tracking File Download: ${fileName}`);

  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event: 'file_download',
    file_name: fileName,
  });

  if (GA4_ID && window.gtag) {
    window.gtag('event', 'file_download', {
      file_name: fileName,
    });
  }
};

/**
 * Tracks custom conversion events (e.g. newsletter signup, investment proposal, key content reached).
 * 
 * @param eventName Custom name of the conversion event
 * @param value Monetary or relative value of the conversion
 * @param currency Currency code (e.g., 'EUR')
 */
export const trackCustomConversion = (eventName: string, value?: number, currency = 'EUR'): void => {
  logDebug(`Tracking Custom Conversion: ${eventName}`, { value, currency });

  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event: 'custom_conversion',
    conversion_name: eventName,
    value,
    currency,
  });

  if (GA4_ID && window.gtag) {
    window.gtag('event', eventName, {
      value,
      currency,
    });
  }
};
