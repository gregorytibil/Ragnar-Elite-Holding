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
    if (typeof navigator !== 'undefined') {
      const userLangs = navigator.languages || [navigator.language || (navigator as any).userLanguage || ''];
      
      // Detect Romanian timezone
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

      // If they explicitly have English as their primary preference, return 'en'
      const primaryLang = userLangs[0] || '';
      if (primaryLang.toLowerCase().startsWith('en')) {
        return 'en';
      }
    }
    return 'ro'; // Default fallback is Romanian (the app's original default)
  });
  const [activeTab, setActiveTab] = useState<string>('home');

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
