import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
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
    { id: 'insights', label: t.navInsights },
    { id: 'contact', label: t.navContact },
    { id: 'legal', label: t.navLegal },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 transition-all duration-300">
      {/* Main Navbar with translucent dark theme blue */}
      <nav className={`px-6 md:px-12 flex justify-between items-center transition-all duration-500 ${isScrolled ? 'bg-[#2F4156]/90 backdrop-blur-xl border-b border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.15)] py-4 md:py-5' : 'bg-transparent border-b border-transparent py-6 md:py-8'} text-[#F5EFEB]`}>
        {/* Brand Logo */}
        <button
          onClick={() => {
            setActiveTab('home');
            setIsOpen(false);
          }}
          className="text-left cursor-pointer group flex flex-col relative"
        >
          <span className="font-serif text-lg md:text-[1.4rem] font-bold tracking-[0.22em] text-[#F5EFEB] group-hover:text-[#C8D9E6] transition-colors duration-300 leading-none">
            RAGNAR ELITE
          </span>
          <span className="block text-[7.5px] tracking-[0.45em] uppercase text-[#C8D9E6]/80 font-mono mt-1.5 group-hover:text-[#F5EFEB] transition-colors duration-300">
            Holding Company
          </span>
        </button>

        {/* Desktop Links and Language Selector */}
        <div className="hidden lg:flex items-center gap-8">
          <ul className="flex gap-7 list-none m-0 p-0">
            {navItems.map((item) => (
              <li key={item.id} className="relative py-1">
                <button
                  onClick={() => setActiveTab(item.id)}
                  className={`text-[11px] uppercase tracking-[0.18em] font-medium transition-all duration-300 cursor-pointer hover:text-[#F5EFEB] ${
                    activeTab === item.id ? 'text-[#C8D9E6] font-bold' : 'text-[#F5EFEB]/70'
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

          {/* Premium Language Switcher */}
          <div className="flex items-center gap-1.5 border-l border-white/15 pl-6 ml-2 font-mono text-[10px] tracking-widest">
            <button
              onClick={() => setLang('ro')}
              className={`px-1.5 py-0.5 rounded transition-all duration-300 cursor-pointer ${
                currentLang === 'ro'
                  ? 'text-[#C8D9E6] font-bold'
                  : 'text-[#F5EFEB]/50 hover:text-[#F5EFEB]'
              }`}
            >
              RO
            </button>
            <span className="opacity-20 text-[#F5EFEB]/40 select-none">|</span>
            <button
              onClick={() => setLang('en')}
              className={`px-1.5 py-0.5 rounded transition-all duration-300 cursor-pointer ${
                currentLang === 'en'
                  ? 'text-[#C8D9E6] font-bold'
                  : 'text-[#F5EFEB]/50 hover:text-[#F5EFEB]'
              }`}
            >
              EN
            </button>
          </div>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden text-[#F5EFEB] hover:text-[#C8D9E6] p-1.5 transition-colors cursor-pointer rounded-full bg-white/5 border border-white/10 hover:bg-white/10"
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
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
            className="lg:hidden bg-[#2F4156]/95 backdrop-blur-2xl border-b border-white/10 overflow-hidden shadow-2xl"
          >
            <ul className="flex flex-col p-6 gap-3 list-none m-0">
              {navItems.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => {
                      setActiveTab(item.id);
                      setIsOpen(false);
                    }}
                    className={`w-full text-left py-3 px-4 text-[11px] uppercase tracking-[0.15em] font-semibold rounded-[4px] border-b border-white/5 block cursor-pointer transition-all duration-200 ${
                      activeTab === item.id 
                        ? 'text-[#C8D9E6] bg-white/5 border-l-2 border-l-[#C8D9E6]' 
                        : 'text-[#F5EFEB]/80 hover:text-[#C8D9E6] hover:bg-white/5'
                    }`}
                  >
                    {item.label}
                  </button>
                </li>
              ))}

              {/* Mobile Language Switcher */}
              <li className="pt-4 mt-2 border-t border-white/10 flex justify-center gap-4 font-mono text-[11px] tracking-widest">
                <button
                  onClick={() => {
                    setLang('ro');
                    setIsOpen(false);
                  }}
                  className={`px-3 py-1.5 rounded transition-all duration-300 cursor-pointer ${
                    currentLang === 'ro'
                      ? 'text-[#C8D9E6] font-bold bg-white/5'
                      : 'text-[#F5EFEB]/60 hover:text-[#F5EFEB]'
                  }`}
                >
                  ROMÂNĂ
                </button>
                <span className="opacity-20 text-[#F5EFEB]/40 self-center select-none">|</span>
                <button
                  onClick={() => {
                    setLang('en');
                    setIsOpen(false);
                  }}
                  className={`px-3 py-1.5 rounded transition-all duration-300 cursor-pointer ${
                    currentLang === 'en'
                      ? 'text-[#C8D9E6] font-bold bg-white/5'
                      : 'text-[#F5EFEB]/60 hover:text-[#F5EFEB]'
                  }`}
                >
                  ENGLISH
                </button>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
