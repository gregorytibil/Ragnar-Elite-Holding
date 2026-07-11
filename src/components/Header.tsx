import { useState, useEffect } from 'react';
import { Menu, X, Globe, Shield, Clock } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Language } from '../types';
import { translations } from '../translations';

interface HeaderProps {
  currentLang: Language;
  setLang: (lang: Language) => void;
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export default function Header({ currentLang, setLang, activeTab, setActiveTab }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [hkTime, setHkTime] = useState('');
  const t = translations[currentLang];

  useEffect(() => {
    const updateTime = () => {
      const options: Intl.DateTimeFormatOptions = {
        timeZone: 'Asia/Hong_Kong',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false,
      };
      setHkTime(new Intl.DateTimeFormat('en-US', options).format(new Date()));
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const navItems = [
    { id: 'home', label: t.navHome },
    { id: 'holding', label: t.navHolding },
    { id: 'portfolio', label: t.navPortfolio },
    { id: 'services', label: t.navServices },
    { id: 'contact', label: t.navContact },
    { id: 'legal', label: t.navLegal },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 shadow-md">
      {/* Top Banner - Utility Bar */}
      <div className="bg-[#07132b] text-[#FAF6F0] text-xs py-2 px-6 flex justify-between items-center border-b border-[#FAF6F0]/10 font-mono tracking-wider">
        <div className="flex items-center gap-6 overflow-x-auto no-scrollbar scroll-smooth">
          <div className="flex items-center gap-1.5 whitespace-nowrap">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
            <span className="opacity-60 uppercase">HQ Hong Kong:</span>
            <span className="text-sky-accent flex items-center gap-1">
              <Clock className="w-3 h-3 text-sky-accent" />
              {hkTime || '09:00:00'} HKST
            </span>
          </div>
          <div className="hidden sm:flex items-center gap-1.5 opacity-60 whitespace-nowrap">
            <span>SECURE LINK:</span>
            <span className="text-sky-accent flex items-center gap-1">
              <Shield className="w-3 h-3 text-sky-accent" />
              AES-256
            </span>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1 text-sky-accent">
            <Globe className="w-3.5 h-3.5 opacity-80" />
            <button
              onClick={() => setLang('ro')}
              className={`px-1.5 py-0.5 rounded transition-all cursor-pointer ${
                currentLang === 'ro'
                  ? 'bg-sky-accent text-navy-brand font-bold'
                  : 'opacity-50 hover:opacity-100 text-[#FAF6F0]'
              }`}
            >
              RO
            </button>
            <span className="opacity-30">|</span>
            <button
              onClick={() => setLang('en')}
              className={`px-1.5 py-0.5 rounded transition-all cursor-pointer ${
                currentLang === 'en'
                  ? 'bg-sky-accent text-navy-brand font-bold'
                  : 'opacity-50 hover:opacity-100 text-[#FAF6F0]'
              }`}
            >
              EN
            </button>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="bg-[#0B1B3D] text-[#FAF6F0] px-6 py-4 md:px-12 flex justify-between items-center border-b-2 border-sky-accent">
        {/* Brand Logo */}
        <button
          onClick={() => {
            setActiveTab('home');
            setIsOpen(false);
          }}
          className="text-left cursor-pointer group"
        >
          <span className="font-serif text-lg md:text-2xl font-bold tracking-[0.25em] text-[#FAF6F0] group-hover:text-sky-accent transition-colors">
            RAGNAR ELITE
          </span>
          <span className="block text-[8px] tracking-[0.45em] uppercase text-sky-accent font-mono mt-0.5 group-hover:text-[#FAF6F0] transition-colors">
            Holding Company
          </span>
        </button>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-8">
          <ul className="flex gap-8 list-none">
            {navItems.map((item) => (
              <li key={item.id} className="relative">
                <button
                  onClick={() => setActiveTab(item.id)}
                  className={`text-[11px] md:text-xs uppercase tracking-widest font-semibold transition-colors cursor-pointer py-2 ${
                    activeTab === item.id ? 'text-sky-accent' : 'text-[#FAF6F0]/80 hover:text-sky-accent'
                  }`}
                >
                  {item.label}
                </button>
                {activeTab === item.id && (
                  <motion.div
                    layoutId="activeTabUnderline"
                    className="absolute bottom-0 left-0 w-full h-[2px] bg-sky-accent"
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
          className="lg:hidden text-[#FAF6F0] hover:text-sky-accent p-1.5 transition-colors cursor-pointer"
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="lg:hidden bg-[#0B1B3D] border-b border-sky-accent overflow-hidden"
          >
            <ul className="flex flex-col p-6 gap-4 list-none">
              {navItems.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => {
                      setActiveTab(item.id);
                      setIsOpen(false);
                    }}
                    className={`w-full text-left py-2.5 text-xs uppercase tracking-widest font-semibold border-b border-[#FAF6F0]/5 block cursor-pointer ${
                      activeTab === item.id ? 'text-sky-accent' : 'text-[#FAF6F0] hover:text-sky-accent'
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
