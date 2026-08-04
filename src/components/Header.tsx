import { useState, useEffect } from 'react';
import { Menu, X, Mail, Phone, ShieldCheck, Globe, Building } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Language } from '../types';
import { translations } from '../translations';
import { trackCTA, trackEmailClick, trackWhatsAppClick } from '../lib/analytics';
import { getPathForTab } from '../lib/router';

interface HeaderProps {
  currentLang: Language;
  setLang: (lang: Language) => void;
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export default function Header({ currentLang, setLang, activeTab, setActiveTab }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const t = translations[currentLang];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: t.navHome },
    { id: 'holding', label: t.navHolding },
    { id: 'portfolio', label: t.navPortfolio },
    { id: 'services', label: t.navServices },
    { id: 'divisions-core', label: t.navDivisionsCore },
    { id: 'divisions-governance', label: t.navDivisionsGovernance },
    { id: 'partners', label: t.navPartners },
    { id: 'contact', label: t.navContact },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 transition-all duration-300">
      {/* Main Navbar with translucent dark theme blue */}
      <nav 
        aria-label={currentLang === 'ro' ? 'Meniu Principal' : 'Primary Navigation'}
        className={`px-4 sm:px-6 md:px-12 xl:px-16 flex justify-center transition-all duration-500 relative z-50 ${
          isScrolled || activeTab !== 'home'
            ? 'bg-[#0B1B3D]/90 backdrop-blur-xl border-b border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.15)] py-3 sm:py-4 md:py-5' 
            : 'bg-transparent border-b border-transparent py-4 sm:py-6 md:py-8'
        } text-[#FAF6F0]`}
      >
        {/* Beautiful Centered Containment for PC & Laptop Displays */}
        <div className="w-full max-w-[1240px] 2xl:max-w-[1360px] flex justify-between items-center gap-4">
          
          {/* Brand Logo - Responsive sizing */}
          <a
            href="/"
            onClick={(e) => {
              e.preventDefault();
              setActiveTab('home');
              setIsOpen(false);
              trackCTA('header_logo', 'Home Logo Click');
            }}
            aria-label={currentLang === 'ro' ? 'Ragnar Elite - Pagina Principală' : 'Ragnar Elite - Home Page'}
            className="text-left cursor-pointer group flex items-center gap-1.5 sm:gap-2.5 relative shrink-0"
          >
            <img 
              src="https://i.imgur.com/InRDrMr.png" 
              alt="Ragnar Elite Logo" 
              width={48} 
              height={48} 
              className="w-7 h-7 sm:w-9 sm:h-9 md:w-10 md:h-10 2xl:w-11 2xl:h-11 object-contain brightness-0 invert" 
            />
            <div className="flex flex-col items-center text-center notranslate">
              <span className="font-serif text-[11px] sm:text-[13px] md:text-base 2xl:text-xl font-bold tracking-[0.16em] sm:tracking-[0.22em] text-[#FAF6F0] group-hover:text-[#C8D9E6] transition-colors duration-300 leading-none">
                RAGNAR ELITE
              </span>
              <span className="block text-[6.5px] sm:text-[7.5px] md:text-[8.5px] 2xl:text-[9.5px] tracking-[0.4em] sm:tracking-[0.55em] uppercase font-bold text-[#C8D9E6] font-mono mt-0.5 sm:mt-1 group-hover:text-white transition-colors duration-300 mr-[-0.4em] sm:mr-[-0.55em]">
                HOLDING
              </span>
            </div>
          </a>

          {/* Desktop Links and Language Selector - Optimized spacing for laptop screens */}
          <div className="hidden xl:flex items-center gap-5 2xl:gap-8">
            <ul className="flex gap-4 2xl:gap-6 list-none m-0 p-0">
              {navItems.map((item) => (
                <li key={item.id} className="relative py-1">
                  <a
                    href={getPathForTab(item.id)}
                    onClick={(e) => {
                      e.preventDefault();
                      setActiveTab(item.id);
                      trackCTA(`header_nav_${item.id}`, item.label);
                    }}
                    aria-current={activeTab === item.id ? 'page' : undefined}
                    className={`text-[9.5px] 2xl:text-[11px] uppercase tracking-[0.12em] 2xl:tracking-[0.18em] font-medium transition-all duration-300 cursor-pointer hover:text-[#FAF6F0] inline-block ${
                      activeTab === item.id ? 'text-[#C8D9E6] font-bold' : 'text-[#FAF6F0]/70'
                    }`}
                  >
                    {item.label}
                  </a>
                  {activeTab === item.id && (
                    <motion.div
                      layoutId="activeTabUnderline"
                      className="absolute -bottom-1 left-0 w-full h-[2px] bg-[#C8D9E6] shadow-[0_1px_8px_rgba(200,217,230,0.6)]"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </li>
              ))}
            </ul>

            {/* Elegant Desktop Language Toggle */}
            <div className="flex items-center gap-1.5 pl-4 2xl:pl-5 border-l border-white/15 h-5 select-none shrink-0">
              <button
                onClick={() => {
                  setLang('ro');
                  trackCTA('header_lang_ro', 'Language RO Click');
                }}
                aria-label="Schimbă în limba română"
                className={`text-[9.5px] 2xl:text-[10px] font-mono tracking-[0.1em] px-2 py-0.5 rounded transition-all duration-200 cursor-pointer ${
                  currentLang === 'ro' 
                    ? 'text-[#C8D9E6] font-bold bg-white/10' 
                    : 'text-[#FAF6F0]/50 hover:text-[#FAF6F0] hover:bg-white/5'
                }`}
              >
                RO
              </button>
              <span className="text-[#FAF6F0]/15 font-mono text-[9px] select-none">|</span>
              <button
                onClick={() => {
                  setLang('en');
                  trackCTA('header_lang_en', 'Language EN Click');
                }}
                aria-label="Switch to English"
                className={`text-[9.5px] 2xl:text-[10px] font-mono tracking-[0.1em] px-2 py-0.5 rounded transition-all duration-200 cursor-pointer ${
                  currentLang === 'en' 
                    ? 'text-[#C8D9E6] font-bold bg-white/10' 
                    : 'text-[#FAF6F0]/50 hover:text-[#FAF6F0] hover:bg-white/5'
                }`}
              >
                EN
              </button>
            </div>
          </div>

          {/* Sub-desktop & Mobile Controls (Language + Menu Toggle) */}
          <div className="xl:hidden flex items-center gap-1.5 sm:gap-3 shrink-0">
            {/* Elegant Mobile Language Switch adjacent to Menu button */}
            <div className="flex items-center gap-0.5 bg-white/5 border border-white/10 rounded-full p-0.5 h-8 sm:h-9 select-none">
              <button
                onClick={() => {
                  setLang('ro');
                  trackCTA('header_mobile_lang_ro_adjacent', 'Language RO Click');
                }}
                aria-label="Schimbă în limba română"
                className={`text-[8px] sm:text-[9px] font-mono tracking-[0.05em] px-2 py-0.5 sm:py-1 rounded-full transition-all duration-200 cursor-pointer ${
                  currentLang === 'ro' 
                    ? 'text-[#0B1B3D] font-bold bg-[#C8D9E6] shadow-[0_2px_6px_rgba(200,217,230,0.3)]' 
                    : 'text-[#FAF6F0]/60 hover:text-[#FAF6F0]'
                }`}
              >
                RO
              </button>
              <button
                onClick={() => {
                  setLang('en');
                  trackCTA('header_mobile_lang_en_adjacent', 'Language EN Click');
                }}
                aria-label="Switch to English"
                className={`text-[8px] sm:text-[9px] font-mono tracking-[0.05em] px-2 py-0.5 sm:py-1 rounded-full transition-all duration-200 cursor-pointer ${
                  currentLang === 'en' 
                    ? 'text-[#0B1B3D] font-bold bg-[#C8D9E6] shadow-[0_2px_6px_rgba(200,217,230,0.3)]' 
                    : 'text-[#FAF6F0]/60 hover:text-[#FAF6F0]'
                }`}
              >
                EN
              </button>
            </div>

            {/* Menu Toggle */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-[#FAF6F0] hover:text-[#C8D9E6] w-8 h-8 sm:w-9 sm:h-9 flex items-center justify-center transition-all duration-200 cursor-pointer rounded-full bg-white/5 border border-white/10 hover:bg-white/10 active:scale-95 shrink-0"
              aria-label={currentLang === 'ro' ? 'Comută meniul de navigare' : 'Toggle navigation menu'}
              aria-expanded={isOpen}
              aria-controls="mobile-navigation-menu"
            >
              {isOpen ? <X className="w-3.5 h-3.5 sm:w-4.5 sm:h-4.5" /> : <Menu className="w-3.5 h-3.5 sm:w-4.5 sm:h-4.5" />}
            </button>
          </div>

        </div>
      </nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-navigation-menu"
            role="region"
            aria-label={currentLang === 'ro' ? 'Navigație Mobilă' : 'Mobile Navigation'}
            initial={{ opacity: 0, y: '-100%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '-100%' }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="xl:hidden fixed inset-0 w-screen h-[100dvh] bg-[#0B1B3D]/98 backdrop-blur-3xl flex flex-col justify-center items-center z-40 px-6 pt-24 pb-12 overflow-y-auto"
          >
            <ul className="flex flex-col items-center justify-center gap-6 list-none m-0 p-0 w-full max-w-sm">
              {navItems.map((item, idx) => (
                <motion.li 
                  key={item.id}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.04 + 0.1, duration: 0.4 }}
                  className="w-full text-center"
                >
                  <a
                    href={getPathForTab(item.id)}
                    onClick={(e) => {
                      e.preventDefault();
                      setActiveTab(item.id);
                      setIsOpen(false);
                      trackCTA(`header_mobile_nav_${item.id}`, item.label);
                    }}
                    aria-current={activeTab === item.id ? 'page' : undefined}
                    className={`w-full text-center py-3 text-lg sm:text-xl uppercase tracking-[0.2em] font-serif block cursor-pointer transition-all duration-300 ${
                      activeTab === item.id 
                        ? 'text-[#C8D9E6] font-bold border-b border-[#C8D9E6]/20' 
                        : 'text-[#FAF6F0]/80 hover:text-[#C8D9E6] active:text-[#C8D9E6]'
                    }`}
                  >
                    {item.label}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
