import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Language } from './types';
import Header from './components/Header';
import Footer from './components/Footer';
import HomeView from './components/HomeView';
import HoldingView from './components/HoldingView';
import PortofoliuView from './components/PortofoliuView';
import ServiciiView from './components/ServiciiView';
import ContactView from './components/ContactView';
import LegalView from './components/LegalView';

export default function App() {
  const [lang, setLang] = useState<Language>('ro');
  const [activeTab, setActiveTab] = useState<string>('home');

  // Dynamic SEO Friendly Titles
  useEffect(() => {
    const baseTitle = 'Ragnar Elite Holding';
    const subTitles: Record<string, string> = {
      home: 'The Standard of Strategic Leadership',
      holding: 'The Holding - Business Philosophy & Heritage',
      portfolio: 'Asset Portfolio - 13 Active Divisions',
      services: 'Strategic Services & Corporate Enablement',
      contact: 'Strategic Partnerships & Inquiries',
      legal: 'Global Governance & GDPR Terms',
    };
    
    document.title = `${baseTitle} | ${subTitles[activeTab] || 'Corporate'}`;
    
    // Automatically scroll to top on tab changes
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [activeTab]);

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
      case 'contact':
        return <ContactView currentLang={lang} />;
      case 'legal':
        return <LegalView currentLang={lang} />;
      default:
        return <HomeView currentLang={lang} setActiveTab={setActiveTab} />;
    }
  };

  return (
    <div className="min-h-screen bg-[#F5EFEB] flex flex-col justify-between selection:bg-[#C8D9E6] selection:text-[#2F4156] overflow-x-hidden">
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
