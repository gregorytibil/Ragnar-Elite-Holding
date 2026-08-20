import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Language } from './types';
import Header from './components/Header';
import Footer from './components/Footer';
import HomeView from './components/HomeView';
import HoldingView from './components/HoldingView';
import PortofoliuView from './components/PortofoliuView';
import ServiciiView from './components/ServiciiView';
import DivisionsCoreView from './components/DivisionsCoreView';
import DivisionsGovernanceView from './components/DivisionsGovernanceView';
import PartnersView from './components/PartnersView';
import ContactView from './components/ContactView';
import LegalView from './components/LegalView';
import TermsView from './components/TermsView';
import SEOMetadata from './components/SEOMetadata';
import PartnerLandingPage from './components/PartnerLandingPage';
import { PartnerProfile, detectPartnerFromHostname } from './data/partnersData';
import { initAnalytics, trackPageView, trackScrollDepth } from './lib/analytics';
import { getRouteFromUrl, updateUrlForRoute, getPathForTab, getPathForPartner } from './lib/router';

export default function App() {
  const [lang, setLang] = useState<Language>(() => {
    if (typeof navigator !== 'undefined') {
      const userLangs = navigator.languages || [navigator.language || (navigator as any).userLanguage || ''];
      
      let isRomanianTimezone = false;
      try {
        const tz = Intl.DateTimeFormat().resolvedOptions().timeZone;
        if (tz && (tz.includes('Bucharest') || tz.includes('Chisinau') || tz.includes('Romania'))) {
          isRomanianTimezone = true;
        }
      } catch (e) {}

      const hasRo = userLangs.some(l => l.toLowerCase().startsWith('ro'));
      if (hasRo || isRomanianTimezone) {
        return 'ro';
      }

      const primaryLang = userLangs[0] || '';
      if (primaryLang.toLowerCase().startsWith('en')) {
        return 'en';
      }
    }
    return 'ro';
  });

  const initialRoute = getRouteFromUrl();
  const [activeTab, setActiveTab] = useState<string>(initialRoute.tab);
  const [activePartner, setActivePartner] = useState<PartnerProfile | null>(initialRoute.partner);

  // Synchronize browser address bar URL when tab or partner changes
  useEffect(() => {
    updateUrlForRoute(activeTab, activePartner);
  }, [activeTab, activePartner]);

  // Handle browser Back/Forward popstate events
  useEffect(() => {
    const handleUrlCheck = () => {
      const route = getRouteFromUrl();
      setActiveTab(route.tab);
      setActivePartner(route.partner);
    };

    window.addEventListener('popstate', handleUrlCheck);
    return () => window.removeEventListener('popstate', handleUrlCheck);
  }, []);

  // Automatic Translation for other languages using Google Translate (behind the scenes)
  useEffect(() => {
    if (typeof navigator === 'undefined') return;

    const userLangs = navigator.languages || [navigator.language || (navigator as any).userLanguage || ''];
    const hasRo = userLangs.some(l => l.toLowerCase().startsWith('ro'));
    const hasEn = userLangs.some(l => l.toLowerCase().startsWith('en'));

    // Detect Romanian timezone
    let isRomanianTimezone = false;
    try {
      const tz = Intl.DateTimeFormat().resolvedOptions().timeZone;
      if (tz && (tz.includes('Bucharest') || tz.includes('Chisinau') || tz.includes('Romania'))) {
        isRomanianTimezone = true;
      }
    } catch (e) {}

    // If browser supports Romanian natively, or they are in the Romanian timezone, use our premium pre-built Romanian translation
    if (hasRo || isRomanianTimezone) {
      setLang('ro');
      // Clear any leftover translation cookies to avoid double translation issues
      document.cookie = "googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
      document.cookie = `googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; domain=${window.location.hostname};`;
      return;
    }

    // If browser supports English natively, use our premium pre-built English translation
    if (hasEn) {
      setLang('en');
      // Clear any leftover translation cookies to avoid double translation issues
      document.cookie = "googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
      document.cookie = `googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; domain=${window.location.hostname};`;
      return;
    }

    // Otherwise, for other foreign languages (e.g. Polish, Chinese, French, German):
    // Use our native English as the source language for the highest translation accuracy
    setLang('en');

    const primaryLang = userLangs[0] || '';
    let targetLangCode = '';
    const lowerLang = primaryLang.toLowerCase();

    if (lowerLang.includes('hk') || lowerLang.includes('tw') || lowerLang.includes('traditional')) {
      targetLangCode = 'zh-TW';
    } else if (lowerLang.includes('cn') || lowerLang.includes('simplified') || lowerLang.startsWith('zh')) {
      targetLangCode = 'zh-CN';
    } else {
      targetLangCode = lowerLang.split('-')[0]; // e.g. "pl" for Polish, "de" for German, "fr" for French
    }

    if (targetLangCode && targetLangCode !== 'en' && targetLangCode !== 'ro') {
      // Configure cookie to trigger automatic translation in Google Translate
      const cookieValue = `/en/${targetLangCode}`;
      document.cookie = `googtrans=${cookieValue}; path=/;`;
      document.cookie = `googtrans=${cookieValue}; path=/; domain=${window.location.hostname};`;

      // Load Google Translate script dynamically
      if (!document.getElementById('google-translate-script')) {
        const script = document.createElement('script');
        script.id = 'google-translate-script';
        script.src = 'https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
        script.async = true;
        document.body.appendChild(script);

        (window as any).googleTranslateElementInit = () => {
          new (window as any).google.translate.TranslateElement({
            pageLanguage: 'en',
            layout: (window as any).google.translate.TranslateElement.InlineLayout.SIMPLE,
            autoDisplay: false
          }, 'google_translate_element');
        };
      }
    }
  }, []);

  // Initialize analytics on component mount
  useEffect(() => {
    initAnalytics();
  }, []);

  // Handle page views on active tab or language change
  useEffect(() => {
    const tabNames: Record<string, string> = {
      home: 'Home | Ragnar Elite',
      holding: 'Holding & Board | Ragnar Elite',
      portfolio: 'Strategic Portfolio | Ragnar Elite',
      services: 'Corporate Services | Ragnar Elite',
      'divisions-core': 'Core Operations & Heavy Industries | Ragnar Elite',
      'divisions-governance': 'Corporate Governance, Finance & Support | Ragnar Elite',
      partners: 'Strategic Alliances & Global Partners | Ragnar Elite',
      insights: 'Market Insights & Intelligence | Ragnar Elite',
      contact: 'Global Contact & Propose Dossier | Ragnar Elite',
      legal: 'Legal Notice & Security | Ragnar Elite',
      terms: 'Terms of Engagement | Ragnar Elite',
    };
    const pageName = tabNames[activeTab] || `${activeTab} | Ragnar Elite`;
    const path = activeTab === 'home' ? '/' : `/${activeTab}`;
    
    trackPageView(pageName, path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [activeTab, lang]);

  // Handle scroll depth tracking (passive and optimized to run once per threshold per page view)
  useEffect(() => {
    const firedThresholds = new Set<number>();
    
    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (docHeight <= 0) return;
      
      const scrollPercent = Math.round((scrollTop / docHeight) * 100);
      const thresholds = [25, 50, 75, 90];
      
      for (const threshold of thresholds) {
        if (scrollPercent >= threshold && !firedThresholds.has(threshold)) {
          firedThresholds.add(threshold);
          trackScrollDepth(threshold);
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [activeTab, lang]);

  const renderActiveView = () => {
    switch (activeTab) {
      case 'home':
        return <HomeView currentLang={lang} setActiveTab={setActiveTab} />;
      case 'holding':
        return <HoldingView currentLang={lang} />;
      case 'portfolio':
        return <PortofoliuView currentLang={lang} />;
      case 'services':
        return <ServiciiView currentLang={lang} />;
      case 'divisions-core':
        return <DivisionsCoreView currentLang={lang} />;
      case 'divisions-governance':
        return <DivisionsGovernanceView currentLang={lang} />;
      case 'subsidiaries':
        return <PartnersView currentLang={lang} onSelectPartner={(p) => setActivePartner(p)} initialSection="subsidiaries" />;
      case 'partners':
      case 'alliances':
        return <PartnersView currentLang={lang} onSelectPartner={(p) => setActivePartner(p)} initialSection="alliances" />;
      case 'contact':
        return <ContactView currentLang={lang} />;
      case 'legal':
        return <LegalView currentLang={lang} />;
      case 'terms':
        return <TermsView currentLang={lang} />;
      default:
        return <HomeView currentLang={lang} setActiveTab={setActiveTab} />;
    }
  };

  if (activePartner) {
    return (
      <>
        <SEOMetadata activeTab="partners" activePartner={activePartner} lang={lang} />
        <PartnerLandingPage
          partner={activePartner}
          currentLang={lang}
          setLang={setLang}
          onReturnToHolding={() => {
            if (typeof window !== 'undefined' && detectPartnerFromHostname()) {
              window.location.href = 'https://ragnareliteholding.com';
            } else {
              setActivePartner(null);
            }
          }}
          onSelectPartner={(p) => setActivePartner(p)}
        />
      </>
    );
  }

  return (
    <div className="min-h-screen bg-bej-bg flex flex-col justify-between selection:bg-sky-accent selection:text-navy-brand overflow-x-hidden relative notranslate">
      {/* Hidden Google Translate anchor */}
      <div id="google_translate_element" style={{ display: 'none' }} />

      {/* Background Video */}
      <div 
        className="absolute top-0 left-0 w-full h-[100dvh] min-h-[580px] overflow-hidden pointer-events-none transition-opacity duration-700 ease-in-out z-[0]"
        style={{ opacity: activeTab === 'home' ? 1 : 0 }}
      >
        <div className="absolute inset-0 bg-[#0B1B3D]"></div>
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          aria-label="Cinematic background video representing global connection and strategic movement"
          className="absolute inset-0 w-full h-full object-cover opacity-40 scale-105"
        >
          <source src="https://res.cloudinary.com/bahq24cf/video/upload/7065796-uhd_2160_3840_24fps_a2excz.mp4" type="video/mp4" />
        </video>
        {/* Decorative luxury gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#050d1d]/35 via-[#0B1B3D]/30 to-[#07132b]/45 z-10"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(162,210,255,0.15),transparent_60%)] z-20"></div>
        {/* Creative Director Accent: Subtle geometric radial mesh pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(#C8D9E6_1px,transparent_1px)] [background-size:28px_28px] opacity-10 z-30"></div>
      </div>

      {/* Search Engine Optimization (SEO), Metadata, and JSON-LD Structured Data */}
      <SEOMetadata activeTab={activeTab} activePartner={activePartner} lang={lang} />

      {/* Dynamic Header */}
      <div className="relative z-[50]">
        <Header
          currentLang={lang}
          setLang={setLang}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
      </div>

      {/* Main Animated Canvas */}
      <main className="flex-grow relative z-[1]">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
          >
            {renderActiveView()}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Corporate Footer */}
      <div className="relative z-[1]">
        <Footer currentLang={lang} setActiveTab={setActiveTab} />
      </div>
    </div>
  );
}
