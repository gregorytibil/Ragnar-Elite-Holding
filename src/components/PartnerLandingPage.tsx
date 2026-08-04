import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Language } from '../types';
import { PartnerProfile, PARTNERS_DATA } from '../data/partnersData';
import { 
  Shield, 
  Building, 
  Cpu, 
  Zap, 
  Briefcase, 
  Truck, 
  Compass, 
  Sparkles, 
  FileText, 
  Scale, 
  Calculator, 
  CheckCircle2, 
  Globe,
  ArrowLeft, 
  Check, 
  ChevronDown, 
  Layers, 
  Send, 
  Building2, 
  ShieldCheck
} from 'lucide-react';

interface PartnerLandingPageProps {
  partner: PartnerProfile;
  currentLang: Language;
  setLang: (lang: Language) => void;
  onReturnToHolding: () => void;
  onSelectPartner: (partner: PartnerProfile) => void;
}

export default function PartnerLandingPage({
  partner,
  currentLang,
  setLang,
  onReturnToHolding,
  onSelectPartner,
}: PartnerLandingPageProps) {
  const isRo = currentLang === 'ro';
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [subdomainMenuOpen, setSubdomainMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  // Scroll to top when partner changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setFormSubmitted(false);
  }, [partner.id]);

  const renderIcon = (iconName: string, className = "w-6 h-6 text-[#38BDF8]") => {
    const props = { className };
    switch (iconName) {
      case 'Shield': return <Shield {...props} />;
      case 'Building': return <Building {...props} />;
      case 'Cpu': return <Cpu {...props} />;
      case 'Zap': return <Zap {...props} />;
      case 'Briefcase': return <Briefcase {...props} />;
      case 'Truck': return <Truck {...props} />;
      case 'Compass': return <Compass {...props} />;
      case 'Sparkles': return <Sparkles {...props} />;
      case 'FileText': return <FileText {...props} />;
      case 'Scale': return <Scale {...props} />;
      case 'Calculator': return <Calculator {...props} />;
      case 'Globe': return <Globe {...props} />;
      default: return <CheckCircle2 {...props} />;
    }
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-[#FAF6F0] text-[#0B1B3D] font-sans relative selection:bg-[#0B1B3D] selection:text-[#FAF6F0]">
      {/* Dark Sticky Navigation Header (Matching Main Holding Navbar Style) */}
      <header className="sticky top-0 z-[100] bg-[#050D1D]/95 backdrop-blur-md border-b border-white/10 px-3 sm:px-6 md:px-8 py-2.5 sm:py-3 text-white shadow-lg">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2 sm:gap-3">
          
          {/* Holding Logo / Back Button */}
          <div className="flex items-center gap-2 sm:gap-3">
            <a
              href="https://ragnareliteholding.com"
              onClick={(e) => {
                if (typeof window !== 'undefined' && !window.location.hostname.includes('ragnareliteholding.com')) {
                  e.preventDefault();
                  onReturnToHolding();
                }
              }}
              className="flex items-center gap-1.5 sm:gap-2 text-[11px] sm:text-xs font-mono text-[#C8D9E6] hover:text-white transition-colors bg-white/5 hover:bg-white/10 px-2.5 sm:px-3 py-1.5 rounded-sm border border-white/10 shrink-0 cursor-pointer"
              title={isRo ? "Înapoi la site-ul principal Ragnar Elite Holding" : "Back to Ragnar Elite Holding main site"}
            >
              <ArrowLeft className="w-3.5 h-3.5 text-[#38BDF8] shrink-0" />
              <span className="font-semibold truncate max-w-[120px] xs:max-w-[160px] sm:max-w-none">
                {isRo ? 'Ragnar Elite Holding' : 'Ragnar Elite Holding'}
              </span>
            </a>

            <div className="h-4 w-[1px] bg-white/15 hidden sm:block"></div>

            <div className="hidden xs:flex items-center gap-1.5 sm:gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shrink-0"></span>
              <span className="font-mono text-[10px] sm:text-[11px] text-[#A2D2FF] font-semibold truncate max-w-[120px] sm:max-w-[200px] md:max-w-none">
                https://{partner.subdomain}
              </span>
            </div>
          </div>

          {/* Subdomain Switcher Dropdown & Language Switcher */}
          <div className="flex items-center gap-1.5 sm:gap-3">
            <div className="relative">
              <button
                onClick={() => setSubdomainMenuOpen(!subdomainMenuOpen)}
                className="flex items-center gap-1.5 text-[11px] sm:text-xs font-mono text-white bg-[#0B1B3D] hover:bg-[#122A5C] border border-white/20 px-2.5 sm:px-3 py-1.5 rounded-sm transition-all shadow-sm font-medium cursor-pointer"
              >
                <Layers className="w-3.5 h-3.5 text-[#38BDF8] shrink-0" />
                <span className="hidden sm:inline">{isRo ? 'Schimbă Subdomeniu (10)' : 'Switch Subdomain (10)'}</span>
                <span className="inline sm:hidden">{isRo ? 'Subdomenii' : 'Subdomains'}</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 text-[#C8D9E6] shrink-0 ${subdomainMenuOpen ? 'rotate-180' : ''}`} />
              </button>

              <AnimatePresence>
                {subdomainMenuOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    transition={{ duration: 0.15 }}
                    className="absolute right-0 mt-2 w-72 sm:w-80 max-w-[calc(100vw-1.5rem)] bg-[#0B1B3D] border border-white/20 rounded-md shadow-2xl overflow-hidden z-[120] py-1 text-left"
                  >
                    <div className="px-3 py-2 border-b border-white/10 bg-[#050D1D]/80 flex items-center justify-between">
                      <span className="font-mono text-[10px] text-[#A2D2FF] uppercase tracking-wider font-bold">
                        {isRo ? 'Subdomenii Active Grup' : 'Active Group Subdomains'}
                      </span>
                      <span className="text-[10px] font-mono text-white/50">10 Subdomains</span>
                    </div>

                    <div className="max-h-72 overflow-y-auto divide-y divide-white/5 custom-scrollbar">
                      {PARTNERS_DATA.map((p) => {
                        const isCurrent = p.id === partner.id;
                        return (
                          <button
                            key={p.id}
                            onClick={() => {
                              onSelectPartner(p);
                              setSubdomainMenuOpen(false);
                            }}
                            className={`w-full text-left px-3 py-2.5 hover:bg-white/10 transition-colors flex items-center justify-between group cursor-pointer ${isCurrent ? 'bg-white/10 font-bold' : ''}`}
                          >
                            <div className="pr-2 truncate">
                              <div className={`text-xs truncate ${isCurrent ? 'text-[#38BDF8] font-bold' : 'text-white group-hover:text-[#38BDF8]'}`}>
                                {isRo ? p.nameRo : p.nameEn}
                              </div>
                              <div className="text-[10px] font-mono text-[#A2D2FF]/70 truncate">
                                {p.subdomain}
                              </div>
                            </div>
                            {isCurrent && <Check className="w-4 h-4 text-[#38BDF8] shrink-0" />}
                          </button>
                        );
                      })}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <button
              onClick={() => setLang(isRo ? 'en' : 'ro')}
              className="text-[11px] sm:text-xs font-mono uppercase px-2 sm:px-2.5 py-1.5 rounded-sm bg-white/10 hover:bg-white/20 border border-white/15 text-white font-semibold transition-colors cursor-pointer"
            >
              {isRo ? 'EN' : 'RO'}
            </button>
          </div>
        </div>
      </header>

      {/* Dark Luxury Partner Header Section (Matching ragnareliteholding.com Dark Aesthetics) */}
      <section className="bg-[#050D1D] text-[#FAF6F0] pt-8 pb-12 sm:pt-12 sm:pb-16 px-4 sm:px-6 border-b border-white/10 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#38BDF8_0.75px,transparent_0.75px)] [background-size:24px_24px] opacity-10"></div>
        <div className="max-w-5xl mx-auto relative z-10 flex flex-col items-center text-center">
          
          {/* Entity Logo Badge */}
          <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br from-[#0B1B3D] to-[#122A5C] border border-white/20 flex items-center justify-center mb-4 sm:mb-6 shadow-xl text-[#38BDF8]">
            {renderIcon(partner.services[0]?.iconName || 'Shield', "w-7 h-7 sm:w-8 sm:h-8 text-[#38BDF8]")}
          </div>

          <div className="inline-flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] sm:text-xs font-mono text-[#A2D2FF] mb-3 sm:mb-4 max-w-full truncate">
            <Building2 className="w-3.5 h-3.5 text-[#38BDF8] shrink-0" />
            <span className="truncate">PARTENER AFILIAT | {isRo ? partner.categoryRo : partner.categoryEn}</span>
          </div>

          {/* Partner Title */}
          <h1 className="font-serif text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-white uppercase leading-snug mb-3">
            {isRo ? partner.nameRo : partner.nameEn}
          </h1>

          {/* Subdomain Pill */}
          <div className="font-mono text-[11px] sm:text-xs text-[#38BDF8] bg-[#0B1B3D] px-3 py-1.5 rounded border border-white/15 mb-3 sm:mb-4 max-w-full break-all">
            https://{partner.subdomain}
          </div>

          <p className="text-xs sm:text-sm md:text-base text-[#C8D9E6] max-w-2xl font-light leading-relaxed">
            {isRo ? partner.taglineRo : partner.taglineEn}
          </p>
        </div>
      </section>

      {/* Main Profile Layout Section (Ice Marble / Beige `#FAF6F0` Background matching main site body) */}
      <main className="max-w-5xl mx-auto px-3 sm:px-6 py-8 sm:py-16 space-y-8 sm:space-y-12">
        
        {/* Core Profile Card: Description, Image & Key Services */}
        <div className="bg-white rounded-2xl border border-[#0B1B3D]/10 p-4 sm:p-8 md:p-10 shadow-[0_4px_30px_rgba(11,27,61,0.02)]">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8 items-start">
            
            {/* Left Column: What They Do */}
            <div className="md:col-span-7 space-y-4 sm:space-y-6">
              <div>
                <span className="font-mono text-[10px] text-[#0B1B3D]/60 uppercase tracking-[0.2em] font-bold block mb-1.5 sm:mb-2">
                  {isRo ? 'Domeniu de Activitate & Descriere' : 'Field of Activity & Overview'}
                </span>
                <h2 className="font-serif text-lg sm:text-xl md:text-2xl font-bold text-[#0B1B3D] leading-snug">
                  {isRo ? partner.descriptionRo : partner.descriptionEn}
                </h2>
              </div>

              <p className="text-slate-700 text-xs sm:text-sm md:text-base font-light leading-relaxed">
                {isRo ? partner.extendedOverviewRo : partner.extendedOverviewEn}
              </p>

              {/* Key Services / Activities List */}
              <div className="pt-4 border-t border-slate-100 space-y-3">
                <span className="font-mono text-[10px] text-[#0B1B3D]/60 uppercase tracking-wider font-bold block">
                  {isRo ? 'Servicii & Activități Principale' : 'Key Services & Activities'}
                </span>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3">
                  {partner.services.map((service) => (
                    <div key={service.id} className="p-3 bg-[#FAF6F0] rounded-xl border border-slate-200/80 flex items-start gap-2.5">
                      <div className="shrink-0 mt-0.5">
                        {renderIcon(service.iconName, "w-4 h-4 text-[#0B1B3D]")}
                      </div>
                      <div>
                        <div className="font-serif font-bold text-xs text-[#0B1B3D]">
                          {isRo ? service.titleRo : service.titleEn}
                        </div>
                        <div className="text-[11px] text-slate-500 font-light line-clamp-2 mt-0.5">
                          {isRo ? service.descRo : service.descEn}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column: Industry Image & Direct Contact Info */}
            <div className="md:col-span-5 space-y-4 sm:space-y-6">
              
              {/* Niche Industry Image */}
              <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-md bg-slate-100 relative group">
                <img
                  src={partner.heroBgImage}
                  alt={isRo ? partner.nameRo : partner.nameEn}
                  className="w-full h-48 sm:h-56 md:h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050D1D]/80 via-transparent to-transparent"></div>
                
                <div className="absolute bottom-3 left-3 right-3 text-white flex items-center justify-between">
                  <span className="font-mono text-[10px] text-sky-200 uppercase tracking-widest font-bold">
                    {isRo ? 'Imagine Domeniu' : 'Industry Visual'}
                  </span>
                  <span className="text-[10px] font-mono bg-white/20 px-2 py-0.5 rounded backdrop-blur-sm truncate max-w-[140px]">
                    {partner.subdomain}
                  </span>
                </div>
              </div>

              {/* Verified Group Badge */}
              <div className="p-3.5 sm:p-4 bg-[#0B1B3D] text-white rounded-xl border border-white/10 space-y-2">
                <div className="flex items-center gap-2 font-mono text-xs text-[#38BDF8] font-bold">
                  <ShieldCheck className="w-4 h-4 text-[#38BDF8] shrink-0" />
                  <span>{isRo ? 'Entitate Garantată Ragnar Group' : 'Guaranteed Ragnar Group Entity'}</span>
                </div>
                <p className="text-[11px] sm:text-xs text-[#C8D9E6] font-light leading-relaxed">
                  {isRo 
                    ? `Această entitate funcționează sub egida corporativă Ragnar Elite Holding pe subdomeniul securizat https://${partner.subdomain}.`
                    : `Operating under the corporate umbrella of Ragnar Elite Holding on the secure subdomain https://${partner.subdomain}.`}
                </p>
              </div>

            </div>

          </div>
        </div>

        {/* Focused Contact & Inquiry Form */}
        <section id="solicitare" className="bg-[#050D1D] text-white rounded-2xl p-4 sm:p-8 md:p-10 border border-white/10 shadow-2xl relative overflow-hidden">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-6 sm:mb-8">
              <span className="font-mono text-[10px] text-[#38BDF8] tracking-[0.2em] uppercase font-bold block mb-1">
                {isRo ? 'CONTACT DIRECT' : 'DIRECT CONTACT'}
              </span>
              <h3 className="font-serif text-lg sm:text-xl md:text-2xl font-bold text-white leading-snug">
                {isRo ? `Trimite un Mesaj / Solicitare către ${partner.nameRo}` : `Send a Message to ${partner.nameEn}`}
              </h3>
            </div>

            {formSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="p-5 sm:p-6 bg-emerald-950/60 border border-emerald-500/30 rounded-xl text-center space-y-3"
              >
                <div className="w-10 h-10 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                  <Check className="w-5 h-5" />
                </div>
                <h4 className="font-serif text-base sm:text-lg font-bold text-white">
                  {isRo ? 'Mesaj Transmis cu Succes' : 'Message Sent Successfully'}
                </h4>
                <p className="text-xs text-[#C8D9E6]">
                  {isRo 
                    ? `Solicitarea dumneavoastră a fost înregistrată. Un reprezentant vă va contacta în cel mai scurt timp.` 
                    : `Your request has been logged. A representative will reach out shortly.`}
                </p>
                <button
                  onClick={() => setFormSubmitted(false)}
                  className="mt-2 px-4 py-2 bg-white/10 text-xs font-mono text-white rounded hover:bg-white/20 transition-colors cursor-pointer"
                >
                  {isRo ? 'Trimite un alt mesaj' : 'Send another message'}
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleFormSubmit} className="space-y-3.5 sm:space-y-4">
                <div>
                  <label className="block text-xs font-mono text-[#A2D2FF] uppercase mb-1 font-semibold">
                    {isRo ? 'Nume / Companie' : 'Name / Company'} *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder={isRo ? 'Numele dumneavoastră sau firma' : 'Your name or company'}
                    className="w-full bg-[#0B1B3D] border border-white/15 focus:border-[#38BDF8] rounded-lg px-3.5 py-2.5 text-xs sm:text-sm text-white placeholder-white/30 outline-none transition-colors"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
                  <div>
                    <label className="block text-xs font-mono text-[#A2D2FF] uppercase mb-1 font-semibold">
                      {isRo ? 'Email' : 'Email'} *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="email@example.com"
                      className="w-full bg-[#0B1B3D] border border-white/15 focus:border-[#38BDF8] rounded-lg px-3.5 py-2.5 text-xs sm:text-sm text-white placeholder-white/30 outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-mono text-[#A2D2FF] uppercase mb-1 font-semibold">
                      {isRo ? 'Telefon' : 'Phone'}
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+40 700 000 000"
                      className="w-full bg-[#0B1B3D] border border-white/15 focus:border-[#38BDF8] rounded-lg px-3.5 py-2.5 text-xs sm:text-sm text-white placeholder-white/30 outline-none transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono text-[#A2D2FF] uppercase mb-1 font-semibold">
                    {isRo ? 'Detalii Solicitare' : 'Inquiry Details'} *
                  </label>
                  <textarea
                    required
                    rows={3}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder={isRo ? 'Scrieți un scurt mesaj...' : 'Write a short message...'}
                    className="w-full bg-[#0B1B3D] border border-white/15 focus:border-[#38BDF8] rounded-lg px-3.5 py-2.5 text-xs sm:text-sm text-white placeholder-white/30 outline-none transition-colors resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full py-3 sm:py-3.5 bg-gradient-to-r from-[#122A5C] to-[#1A3A7C] hover:from-[#1A3A7C] hover:to-[#244A9C] text-white font-medium rounded-lg border border-white/20 transition-all flex items-center justify-center gap-2 group text-xs sm:text-sm cursor-pointer min-h-[44px]"
                >
                  <span>{isRo ? 'Trimite Solicitarea' : 'Submit Inquiry'}</span>
                  <Send className="w-3.5 h-3.5 text-[#38BDF8] group-hover:translate-x-1 transition-transform shrink-0" />
                </button>
              </form>
            )}
          </div>
        </section>

        {/* Return Button Right Under Contact Form */}
        <div className="flex justify-center pt-2 pb-2">
          <button
            onClick={onReturnToHolding}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-5 sm:px-6 py-3.5 bg-[#0B1B3D] hover:bg-[#122A5C] text-white font-mono text-xs font-semibold rounded-xl border border-white/10 shadow-lg hover:shadow-xl transition-all group cursor-pointer min-h-[44px]"
          >
            <ArrowLeft className="w-4 h-4 text-[#38BDF8] group-hover:-translate-x-1 transition-transform shrink-0" />
            <span className="text-center">{isRo ? 'Revenire la Site-ul Principal Ragnar Elite Holding' : 'Return to Main Ragnar Elite Holding Website'}</span>
          </button>
        </div>

      </main>

      {/* Dark Footer (Matching ragnareliteholding.com Footer Design) */}
      <footer className="border-t border-white/10 bg-[#050D1D] text-[#FAF6F0] py-8 sm:py-10 px-4 sm:px-6 text-center text-xs font-mono">
        <div className="max-w-5xl mx-auto space-y-3 sm:space-y-4">
          <div className="flex justify-center items-center gap-2 text-white">
            <Building2 className="w-4 h-4 text-[#38BDF8] shrink-0" />
            <span className="font-serif font-bold text-xs sm:text-sm tracking-wider">{isRo ? partner.nameRo : partner.nameEn}</span>
          </div>
          <p className="max-w-2xl mx-auto text-[10px] sm:text-[11px] text-[#C8D9E6]/70 leading-relaxed">
            {isRo 
              ? `Entitate parteneră/subsidiară integrată în ecosistemul corporativ Ragnar Elite Holding. Operat sub domeniul ${partner.subdomain}.` 
              : `Partner/subsidiary entity integrated within the Ragnar Elite Holding corporate ecosystem. Operating under ${partner.subdomain}.`}
          </p>
          <div className="pt-3 border-t border-white/5 flex flex-wrap justify-center items-center gap-3 sm:gap-4 text-[#C8D9E6]/80 text-[10px] sm:text-xs">
            <button
              onClick={onReturnToHolding}
              className="text-[#38BDF8] hover:underline font-semibold cursor-pointer"
            >
              {isRo ? '← Revenire la Site-ul Principal' : '← Return to Main Holding Site'}
            </button>
            <span>•</span>
            <span>© {new Date().getFullYear()} Ragnar Elite Holding</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
