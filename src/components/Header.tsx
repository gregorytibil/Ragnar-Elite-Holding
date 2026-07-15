import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Language } from '../types';
import { translations } from '../translations';
import { trackCTA } from '../lib/analytics';

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
    { id: 'partners', label: t.navPartners },
    { id: 'contact', label: t.navContact },
    { id: 'legal', label: t.navLegal },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 transition-all duration-300">
      {/* Main Navbar with translucent dark theme blue */}
      <nav 
        aria-label={currentLang === 'ro' ? 'Meniu Principal' : 'Primary Navigation'}
        className={`px-6 md:px-12 flex justify-between items-center transition-all duration-500 ${
          isScrolled || activeTab !== 'home'
            ? 'bg-[#0B1B3D]/90 backdrop-blur-xl border-b border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.15)] py-4 md:py-5' 
            : 'bg-transparent border-b border-transparent py-6 md:py-8'
        } text-[#FAF6F0]`}
      >
        {/* Brand Logo */}
        <button
          onClick={() => {
            setActiveTab('home');
            setIsOpen(false);
            trackCTA('header_logo', 'Home Logo Click');
          }}
          aria-label={currentLang === 'ro' ? 'Ragnar Elite - Pagina Principală' : 'Ragnar Elite - Home Page'}
          className="text-left cursor-pointer group flex items-center gap-3 relative"
        >
          <img src="https://i.imgur.com/InRDrMr.png" alt="Ragnar Elite Logo" width={48} height={48} className="w-10 h-10 md:w-12 md:h-12 object-contain brightness-0 invert" />
          <div className="flex flex-col items-center text-center notranslate">
            <span className="font-serif text-lg md:text-[1.4rem] font-bold tracking-[0.22em] text-[#FAF6F0] group-hover:text-[#C8D9E6] transition-colors duration-300 leading-none">
              RAGNAR ELITE
            </span>
            <span className="block text-[8.5px] tracking-[0.55em] uppercase font-bold text-[#C8D9E6] font-mono mt-1.5 group-hover:text-white transition-colors duration-300 mr-[-0.55em]">
              HOLDING
            </span>
          </div>
        </button>

        {/* Desktop Links and Language Selector */}
        <div className="hidden lg:flex items-center gap-8">
          <ul className="flex gap-7 list-none m-0 p-0">
            {navItems.map((item) => (
              <li key={item.id} className="relative py-1">
                <button
                  onClick={() => {
                    setActiveTab(item.id);
                    trackCTA(`header_nav_${item.id}`, item.label);
                  }}
                  aria-current={activeTab === item.id ? 'page' : undefined}
                  className={`text-[11px] uppercase tracking-[0.18em] font-medium transition-all duration-300 cursor-pointer hover:text-[#FAF6F0] ${
                    activeTab === item.id ? 'text-[#C8D9E6] font-bold' : 'text-[#FAF6F0]/70'
                  }`}
                >
                  {item.label}
                </button>
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
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden text-[#FAF6F0] hover:text-[#C8D9E6] w-11 h-11 flex items-center justify-center transition-all duration-200 cursor-pointer rounded-full bg-white/5 border border-white/10 hover:bg-white/10 active:scale-95"
          aria-label={currentLang === 'ro' ? 'Comută meniul de navigare' : 'Toggle navigation menu'}
          aria-expanded={isOpen}
          aria-controls="mobile-navigation-menu"
        >
          {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-navigation-menu"
            role="region"
            aria-label={currentLang === 'ro' ? 'Navigație Mobilă' : 'Mobile Navigation'}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="lg:hidden bg-[#0B1B3D]/95 backdrop-blur-2xl border-b border-white/10 overflow-hidden shadow-2xl"
          >
            <ul className="flex flex-col p-6 gap-3 list-none m-0">
              {navItems.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => {
                      setActiveTab(item.id);
                      setIsOpen(false);
                      trackCTA(`header_mobile_nav_${item.id}`, item.label);
                    }}
                    aria-current={activeTab === item.id ? 'page' : undefined}
                    className={`w-full text-left py-3 px-4 text-[11px] uppercase tracking-[0.15em] font-semibold rounded-[4px] border-b border-white/5 block cursor-pointer transition-all duration-200 ${
                      activeTab === item.id 
                        ? 'text-[#C8D9E6] bg-white/5 border-l-2 border-l-[#C8D9E6]' 
                        : 'text-[#FAF6F0]/80 hover:text-[#C8D9E6] hover:bg-white/5'
                    }`}
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
