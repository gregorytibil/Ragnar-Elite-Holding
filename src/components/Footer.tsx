import { Landmark, ShieldCheck } from 'lucide-react';
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
      icon: (
        <svg className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.455 5.703 1.456h.004c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
        </svg>
      ),
      label: 'WhatsApp',
      url: 'https://wa.me/RAGNARELITEHOLDING',
    },
    {
      icon: (
        <svg className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M21.94 3.717L2.21 11.233c-1.343.486-1.336 1.161-.247 1.462l5.058 1.42 11.702-6.645c.553-.303 1.059-.14.642.193l-9.481 7.7-.178 3.511c.361 0 .521-.224.723-.489l1.731-1.688 3.6 2.671c.664.495 1.141.24 1.306-.823l2.361-15.01c.242-1.306-.583-1.9-.111.312z" />
        </svg>
      ),
      label: 'Telegram',
      url: 'https://t.me/ragnareliteholding',
    },
    {
      icon: (
        <svg className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452z" />
        </svg>
      ),
      label: 'LinkedIn',
      url: 'https://linkedin.com/#',
    },
    {
      icon: (
        <svg className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12s.014 3.667.072 4.947c.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072s3.667-.014 4.947-.072c4.358-.2 6.78-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.26-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.26 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
        </svg>
      ),
      label: 'Instagram',
      url: 'https://instagram.com/#',
    },
    {
      icon: (
        <svg className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
        </svg>
      ),
      label: 'Facebook',
      url: 'https://facebook.com/#',
    },
  ];

  return (
    <footer className="bg-[#030914] text-[#FAF6F0] pt-24 pb-12 px-6 md:px-12 relative overflow-hidden">
      {/* Exquisite Top Linear Accent - Single pixel line with glowing fade */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-[1px] bg-gradient-to-r from-transparent via-sky-accent/40 to-transparent" />

      {/* Soft elegant background glows */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-sky-accent/[0.03] rounded-full blur-[120px] pointer-events-none select-none"></div>
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-sky-accent/[0.015] rounded-full blur-[100px] pointer-events-none select-none"></div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-16 relative z-10">
        
        {/* Column 1 - Brand Summary */}
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <Landmark className="w-5 h-5 text-sky-accent" />
            <span className="font-serif text-lg font-bold tracking-[0.25em] text-[#FAF6F0]">
              RAGNAR ELITE
            </span>
          </div>
          <p className="text-sm text-stone-300/90 leading-relaxed text-left font-sans font-normal max-w-sm">
            {t.footerDesc}
          </p>
        </div>

        {/* Column 2 - Navigation links */}
        <div>
          <h4 className="font-serif text-xs font-bold text-sky-accent uppercase tracking-[0.2em] mb-6">
            {currentLang === 'ro' ? 'Navigare' : 'Navigation'}
          </h4>
          <ul className="space-y-4 text-sm font-normal text-stone-300 list-none m-0 p-0">
            {[
              { label: t.navHome, tab: 'home' },
              { label: t.navHolding, tab: 'holding' },
              { label: t.navPortfolio, tab: 'portfolio' },
              { label: t.navServices, tab: 'services' },
              { label: t.navInsights, tab: 'insights' },
              { label: t.navContact, tab: 'contact' },
            ].map((item) => (
              <li key={item.tab}>
                <button
                  onClick={() => setActiveTab(item.tab)}
                  className="group flex items-center gap-3 text-stone-300 hover:text-sky-accent transition-colors duration-300 cursor-pointer text-left font-sans"
                >
                  <span className="relative py-0.5">
                    {item.label}
                    <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-sky-accent/50 transition-all duration-300 group-hover:w-full" />
                  </span>
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3 - Legal Links */}
        <div>
          <h4 className="font-serif text-xs font-bold text-sky-accent uppercase tracking-[0.2em] mb-6">
            {t.footerLegalHeader}
          </h4>
          <ul className="space-y-4 text-sm font-normal text-stone-300 list-none m-0 p-0">
            <li>
              <button
                onClick={() => setActiveTab('legal')}
                className="group flex items-center gap-3 text-stone-300 hover:text-sky-accent transition-colors duration-300 cursor-pointer text-left font-sans"
              >
                <span className="relative py-0.5">
                  {t.footerTerms}
                  <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-sky-accent/50 transition-all duration-300 group-hover:w-full" />
                </span>
              </button>
            </li>
            <li>
              <button
                onClick={() => setActiveTab('legal')}
                className="group flex items-center gap-3 text-stone-300 hover:text-sky-accent transition-colors duration-300 cursor-pointer text-left font-sans"
              >
                <span className="relative py-0.5">
                  {t.footerGdpr}
                  <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-sky-accent/50 transition-all duration-300 group-hover:w-full" />
                </span>
              </button>
            </li>
            <li>
              <button
                onClick={() => setActiveTab('contact')}
                className="group flex items-center gap-3 text-stone-300 hover:text-sky-accent transition-colors duration-300 cursor-pointer text-left font-sans"
              >
                <span className="flex items-center gap-1.5 relative py-0.5">
                  <ShieldCheck className="w-4 h-4 text-sky-accent/70 group-hover:text-sky-accent transition-colors duration-300" />
                  {t.footerSecureAccess}
                  <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-sky-accent/50 transition-all duration-300 group-hover:w-full" />
                </span>
              </button>
            </li>
          </ul>
        </div>

        {/* Column 4 - Social Networks & Connections */}
        <div className="space-y-6">
          <h4 className="font-serif text-xs font-bold text-sky-accent uppercase tracking-[0.2em]">
            {currentLang === 'ro' ? 'Conexiuni Media' : 'Media Connections'}
          </h4>
          <p className="text-sm text-stone-300/95 leading-relaxed text-left font-sans font-normal max-w-sm">
            {currentLang === 'ro'
              ? 'Canale oficiale criptate pentru informări macroeconomice directe și comunicate oficiale.'
              : 'Official encrypted channels for direct macroeconomic briefs and media communiqués.'}
          </p>
          <div className="flex items-center gap-2 pb-2">
            <a href="mailto:office@ragnareliteholding.com" className="font-mono text-sm text-sky-accent hover:text-white transition-colors duration-300 tracking-wider border-b border-sky-accent/30 hover:border-white pb-0.5">
              office@ragnareliteholding.com
            </a>
          </div>
          <div className="flex items-center gap-3 flex-wrap">
            {socialLinks.map((soc, idx) => (
              <a
                key={idx}
                href={soc.url}
                target="_blank"
                rel="noreferrer"
                title={soc.label}
                className="p-3 bg-white/[0.02] hover:bg-sky-accent text-stone-300 hover:text-[#030914] rounded-xl transition-all duration-350 hover:scale-105 border border-white/5 hover:border-sky-accent/20 flex items-center justify-center shadow-lg relative overflow-hidden group cursor-pointer"
              >
                {/* Subtle shine overlay inside the button */}
                <div className="absolute inset-0 w-full h-full bg-gradient-to-tr from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 pointer-events-none" />
                {soc.icon}
              </a>
            ))}
          </div>
        </div>

      </div>

      {/* Bottom Block */}
      <div className="max-w-7xl mx-auto pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-stone-500 font-light font-mono tracking-wider relative z-10 border-t border-white/[0.03]">
        <span className="text-center sm:text-left">{t.footerCopyright}</span>
        <span className="flex items-center gap-1.5 opacity-60 text-stone-400">
          <ShieldCheck className="w-3.5 h-3.5 text-sky-accent" />
          SECURED PLATFORM
        </span>
      </div>
    </footer>
  );
}
