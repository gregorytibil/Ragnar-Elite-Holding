import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Language } from './types';
import Header from './components/Header';
import Footer from './components/Footer';
import HomeView from './components/HomeView';
import HoldingView from './components/HoldingView';
import PortofoliuView from './components/PortofoliuView';
import ServiciiView from './components/ServiciiView';
import InsightsView from './components/InsightsView';
import ContactView from './components/ContactView';
import LegalView from './components/LegalView';
import TermsView from './components/TermsView';
import SEOMetadata from './components/SEOMetadata';
import { initAnalytics, trackPageView, trackScrollDepth } from './lib/analytics';

export default function App() {
  const [lang, setLang] = useState<Language>(() => {
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem('preferredLang');
      if (stored === 'ro' || stored === 'en' || stored === 'fr') {
        return stored as Language;
      }
    }

    if (typeof navigator !== 'undefined') {
      const userLangs = navigator.languages || [navigator.language || (navigator as any).userLanguage || ''];
      
      // Detecție automată a fusului orar din România sau Republica Moldova ca semnal de fallback
      let isRomanianTimezone = false;
      try {
        const tz = Intl.DateTimeFormat().resolvedOptions().timeZone;
        if (tz && (tz.includes('Bucharest') || tz.includes('Chisinau') || tz.includes('Romania'))) {
          isRomanianTimezone = true;
        }
      } catch (e) {}

      for (const rawLang of userLangs) {
        const normalized = rawLang.toLowerCase();
        if (normalized.startsWith('ro')) {
          if (typeof window !== 'undefined') {
            localStorage.setItem('preferredLang', 'ro');
          }
          return 'ro';
        }
        if (normalized.startsWith('en')) {
          if (typeof window !== 'undefined') {
            localStorage.setItem('preferredLang', 'en');
          }
          return 'en';
        }
        if (normalized.startsWith('fr')) {
          if (typeof window !== 'undefined') {
            localStorage.setItem('preferredLang', 'fr');
          }
          return 'fr';
        }
      }

      if (isRomanianTimezone) {
        if (typeof window !== 'undefined') {
          localStorage.setItem('preferredLang', 'ro');
        }
        return 'ro';
      }
    }

    // Implicit revenim la limba română ca limbă nativă a platformei
    if (typeof window !== 'undefined') {
      localStorage.setItem('preferredLang', 'ro');
    }
    return 'ro';
  });
  const [activeTab, setActiveTab] = useState<string>('home');

  // Dynamic <html lang> updating and localStorage sync
  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('preferredLang', lang);
      document.documentElement.lang = lang;
    }
  }, [lang]);

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
      case 'insights':
        return <InsightsView currentLang={lang} />;
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

  return (
    <div className="min-h-screen bg-bej-bg flex flex-col justify-between selection:bg-sky-accent selection:text-navy-brand overflow-x-hidden">
      {/* Hidden Google Translate anchor */}
      <div id="google_translate_element" style={{ display: 'none' }} />

      {/* Search Engine Optimization (SEO), Metadata, and JSON-LD Structured Data */}
      <SEOMetadata activeTab={activeTab} lang={lang} />

      {/* Dynamic Header */}
      <Header
        currentLang={lang}
        setLang={setLang}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />

      {/* Main Animated Canvas */}
      <main className="flex-grow">
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
      <Footer currentLang={lang} setActiveTab={setActiveTab} />
    </div>
  );
}
