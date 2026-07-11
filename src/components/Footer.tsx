import { MessageSquare, Facebook, Instagram, Send, Linkedin, Landmark, ShieldCheck } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../translations';

interface FooterProps {
  currentLang: Language;
  setActiveTab: (tab: string) => void;
}

export default function Footer({ currentLang, setActiveTab }: FooterProps) {
  const t = translations[currentLang];

  const socialLinks = [
    {
      icon: <MessageSquare className="w-4 h-4" />,
      label: 'WhatsApp',
      url: 'https://wa.me/#',
    },
    {
      icon: <Send className="w-4 h-4" />,
      label: 'Telegram',
      url: 'https://t.me/#',
    },
    {
      icon: <Linkedin className="w-4 h-4" />,
      label: 'LinkedIn',
      url: 'https://linkedin.com/#',
    },
    {
      icon: <Instagram className="w-4 h-4" />,
      label: 'Instagram',
      url: 'https://instagram.com/#',
    },
    {
      icon: <Facebook className="w-4 h-4" />,
      label: 'Facebook',
      url: 'https://facebook.com/#',
    },
  ];

  return (
    <footer className="bg-navy-brand text-[#FAF6F0] border-t-3 border-sky-accent pt-16 pb-8 px-6 md:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-12 border-b border-[#FAF6F0]/10">
        
        {/* Column 1 - Brand Summary */}
        <div className="space-y-4">
          <div className="flex items-center gap-2.5">
            <Landmark className="w-6 h-6 text-sky-accent" />
            <span className="font-serif text-lg font-bold tracking-wider">
              RAGNAR ELITE
            </span>
          </div>
          <p className="text-xs text-stone-300 leading-relaxed text-justify font-light max-w-sm">
            {t.footerDesc}
          </p>
        </div>

        {/* Column 2 - Navigation links */}
        <div>
          <h4 className="font-serif text-sm font-bold text-sky-accent uppercase tracking-wider mb-5">
            {currentLang === 'ro' ? 'Navigare' : 'Navigation'}
          </h4>
          <ul className="space-y-3 text-xs font-light text-stone-300 list-none">
            <li>
              <button
                onClick={() => setActiveTab('home')}
                className="hover:text-sky-accent transition-colors cursor-pointer text-left"
              >
                {t.navHome}
              </button>
            </li>
            <li>
              <button
                onClick={() => setActiveTab('holding')}
                className="hover:text-sky-accent transition-colors cursor-pointer text-left"
              >
                {t.navHolding}
              </button>
            </li>
            <li>
              <button
                onClick={() => setActiveTab('portfolio')}
                className="hover:text-sky-accent transition-colors cursor-pointer text-left"
              >
                {t.navPortfolio}
              </button>
            </li>
            <li>
              <button
                onClick={() => setActiveTab('services')}
                className="hover:text-sky-accent transition-colors cursor-pointer text-left"
              >
                {t.navServices}
              </button>
            </li>
          </ul>
        </div>

        {/* Column 3 - Legal Links */}
        <div>
          <h4 className="font-serif text-sm font-bold text-sky-accent uppercase tracking-wider mb-5">
            {t.footerLegalHeader}
          </h4>
          <ul className="space-y-3 text-xs font-light text-stone-300 list-none">
            <li>
              <button
                onClick={() => setActiveTab('legal')}
                className="hover:text-sky-accent transition-colors cursor-pointer text-left"
              >
                {t.footerTerms}
              </button>
            </li>
            <li>
              <button
                onClick={() => setActiveTab('legal')}
                className="hover:text-sky-accent transition-colors cursor-pointer text-left"
              >
                {t.footerGdpr}
              </button>
            </li>
            <li>
              <button
                onClick={() => setActiveTab('contact')}
                className="hover:text-sky-accent transition-colors cursor-pointer flex items-center gap-1.5 text-left"
              >
                <ShieldCheck className="w-3.5 h-3.5 text-sky-accent" />
                {t.footerSecureAccess}
              </button>
            </li>
          </ul>
        </div>

        {/* Column 4 - Social Networks & Connections */}
        <div>
          <h4 className="font-serif text-sm font-bold text-sky-accent uppercase tracking-wider mb-5">
            {currentLang === 'ro' ? 'Conexiuni Media' : 'Media Connections'}
          </h4>
          <p className="text-xs text-stone-300 font-light mb-4 text-justify max-w-sm">
            {currentLang === 'ro'
              ? 'Canale oficiale criptate pentru informări macroeconomice directe și comunicate oficiale.'
              : 'Official encrypted channels for direct macroeconomic briefs and media communiqués.'}
          </p>
          <div className="flex items-center gap-3.5 flex-wrap">
            {socialLinks.map((soc, idx) => (
              <a
                key={idx}
                href={soc.url}
                target="_blank"
                rel="noreferrer"
                title={soc.label}
                className="p-2 bg-[#FAF6F0]/5 hover:bg-sky-accent text-[#FAF6F0] hover:text-navy-brand rounded-full transition-all border border-[#FAF6F0]/10 flex items-center justify-center shadow-sm"
              >
                {soc.icon}
              </a>
            ))}
          </div>
        </div>

      </div>

      {/* Bottom Block */}
      <div className="max-w-7xl mx-auto pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] sm:text-xs text-stone-400 font-light font-mono tracking-wider">
        <span>{t.footerCopyright}</span>
        <span className="flex items-center gap-1 opacity-65">
          <ShieldCheck className="w-4 h-4 text-sky-accent" />
          SECURED PLATFORM
        </span>
      </div>
    </footer>
  );
}
