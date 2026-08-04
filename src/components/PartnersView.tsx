import { motion } from 'motion/react';
import { Language } from '../types';
import { 
  Building, 
  ShieldCheck, 
  Globe, 
  Sparkles,
  ArrowRight,
  ExternalLink,
  ChevronRight,
  Users2,
  Scale,
  Calculator,
  Cpu,
  Zap,
  Compass,
  Truck,
  FileText,
  CheckCircle2,
  Briefcase
} from 'lucide-react';

import { PARTNERS_DATA, PartnerProfile } from '../data/partnersData';

interface PartnersViewProps {
  currentLang: Language;
  onSelectPartner?: (partner: PartnerProfile) => void;
}

export default function PartnersView({ currentLang, onSelectPartner }: PartnersViewProps) {
  const isRo = currentLang === 'ro';

  const titleText = isRo 
    ? 'Alianțe Strategice & Parteneri Globali' 
    : 'Strategic Alliances & Global Partners';

  const subtitleText = isRo
    ? 'Colaborări de elită pentru asigurarea excelenței operaționale și a imunității macroeconomice'
    : 'Elite collaborations ensuring operational excellence and absolute macroeconomic immunity';

  const introText = isRo
    ? 'La Ragnar Elite Holding, excelența operațională este susținută de parteneriate strategice cu cele mai prestigioase instituții de consultanță, audit financiar, asistență juridică și tehnologie din grup. Colaborăm exclusiv cu entități de încredere pentru a garanta tranzacții sigure, conformitate impecabilă și securitate structurală.'
    : 'At Ragnar Elite Holding, operational excellence is bolstered by strategic partnerships with prestigious consulting, financial auditing, legal counsel, and technology group entities. We collaborate exclusively with trusted partners to guarantee secure transactions, flawless compliance, and structural security.';

  const getPartnerIcon = (id: string) => {
    const props = { className: "w-6 h-6 text-[#38BDF8]" };
    switch (id) {
      case 'elite-capital-holding': return <Building {...props} />;
      case 'studio-gilded-stars': return <Sparkles {...props} />;
      case 'nexus-terranova': return <Briefcase {...props} />;
      case 'vexta-data': return <Cpu {...props} />;
      case 'urban-energetic-service': return <Zap {...props} />;
      case 'urban-platinum-estate': return <Building {...props} />;
      case 'urban-edge-build': return <Compass {...props} />;
      case 'urban-street-express': return <Truck {...props} />;
      case 'premium-architecture-design': return <Sparkles {...props} />;
      case 'premium-cleaning-solutions': return <CheckCircle2 {...props} />;
      case 'smart-paper-office': return <FileText {...props} />;
      default: return <Briefcase {...props} />;
    }
  };

  return (
    <div 
      className="min-h-screen bg-ice-marble text-[#0B1B3D] selection:bg-[#0B1B3D] selection:text-white overflow-hidden"
      itemScope
      itemType="https://schema.org/CollectionPage"
    >
      {/* Premium Hero Section with elegant cinematic overlays */}
      <section className="relative bg-[#050D1D] text-[#FAF6F0] pt-[140px] pb-16 sm:pt-[170px] sm:pb-28 md:pt-[240px] md:pb-[160px] px-6 border-b border-white/5 overflow-hidden">
        {/* Background strategic alliances image */}
        <img 
          src="https://i.imgur.com/nrRrYgw.png" 
          alt="Strategic alliances"
          className="absolute inset-0 w-full h-full object-cover opacity-[0.35] pointer-events-none z-0 scale-105"
          referrerPolicy="no-referrer"
        />
        {/* Subtle high-end mesh and lighting layers */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#050D1D] via-[#0B1B3D]/95 to-[#050D1D] z-1 opacity-60"></div>
        <div className="absolute inset-0 bg-[radial-gradient(#C8D9E6_0.75px,transparent_0.75px)] [background-size:24px_24px] opacity-[0.07] z-2"></div>
        <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent z-3"></div>

        <div className="max-w-[1140px] mx-auto relative z-10 px-4 md:px-8">
          <div className="flex flex-col items-center text-center max-w-[950px] mx-auto">
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-3 py-1 bg-white/[0.04] border border-white/10 rounded-sm text-[9px] md:text-[10px] text-[#A2D2FF] font-mono tracking-[0.3em] uppercase mb-6 backdrop-blur-md"
            >
              <Users2 className="w-3 h-3 text-[#A2D2FF]" />
              <span>{isRo ? 'Alianțe Globale' : 'Global Alliances'}</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.8 }}
              className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#FAF6F0] tracking-[0.05em] leading-tight uppercase mb-6"
            >
              {titleText}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="font-sans text-sm sm:text-base md:text-lg text-slate-300 font-light max-w-[720px] mb-8 leading-relaxed"
            >
              {subtitleText}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="w-20 h-[2px] bg-gradient-to-r from-transparent via-[#C8D9E6]/40 to-transparent mb-10"
            ></motion.div>
          </div>
        </div>
      </section>

      {/* Intro Narrative Section */}
      <section className="py-16 sm:py-24 px-6 max-w-[1140px] mx-auto relative z-10">
        <div className="bg-white border border-[#0B1B3D]/10 rounded-2xl p-8 sm:p-12 shadow-[0_4px_30px_rgba(11,27,61,0.01)] hover:shadow-[0_10px_40px_rgba(11,27,61,0.03)] transition-all duration-300 mb-12 sm:mb-16">
          <div className="max-w-4xl">
            <span className="font-mono text-[9px] tracking-[0.25em] text-[#0B1B3D]/50 uppercase block mb-3 font-bold">
              {isRo ? 'IMUNITATE MACROECONOMICĂ PRIN REPUTAȚIE' : 'MACROECONOMIC IMMUNITY THROUGH REPUTATION'}
            </span>
            <p className="font-sans font-light text-slate-700 text-sm sm:text-base md:text-lg leading-relaxed">
              {introText}
            </p>
          </div>
        </div>

        {/* Group Subsidiaries & Active Subdomains Showcase */}
        <div>
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="font-mono text-[9px] tracking-[0.3em] text-sky-600 uppercase block mb-3 font-bold">
              {isRo ? 'PORTALURI & SUBDOMENII ACTIVE' : 'ACTIVE GROUP SUBDOMAINS'}
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#0B1B3D] tracking-tight uppercase">
              {isRo ? 'Companii & Entități Partenere din Grup' : 'Partner Companies & Group Subsidiaries'}
            </h2>
            <p className="font-sans font-light text-slate-600 text-sm sm:text-base mt-3">
              {isRo 
                ? 'Fiecare entitate din grup dispune de o pagină dedicată și un subdomeniu oficial securizat SSL (*.ragnareliteholding.com).'
                : 'Each group entity operates a dedicated 1-page profile and an SSL-secured official subdomain (*.ragnareliteholding.com).'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {PARTNERS_DATA.map((p) => (
              <motion.div
                key={p.id}
                whileHover={{ y: -5 }}
                className="bg-white rounded-2xl p-4 sm:p-6 border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-sky-400 transition-all duration-300 flex flex-col justify-between group relative overflow-hidden"
              >
                {/* Subtle top indicator bar */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#0B1B3D] via-sky-500 to-[#0B1B3D] opacity-80 group-hover:opacity-100 transition-opacity"></div>

                <div>
                  {/* Logo Container Area */}
                  <div className="w-full min-h-[115px] mb-4 sm:mb-5 rounded-xl bg-gradient-to-br from-[#050D1D] via-[#0B1B3D] to-[#08152E] border border-slate-800/80 p-4 sm:p-4.5 flex flex-col justify-between relative overflow-hidden shadow-inner group-hover:border-sky-500/40 transition-colors">
                    {/* Background image overlay */}
                    <img 
                      src={p.heroBgImage} 
                      alt="" 
                      className="absolute inset-0 w-full h-full object-cover opacity-25 group-hover:opacity-40 transition-opacity mix-blend-overlay pointer-events-none" 
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#050D1D] via-[#0B1B3D]/70 to-transparent pointer-events-none"></div>
                    <div className="absolute -right-6 -bottom-6 w-28 h-28 bg-sky-500/10 rounded-full blur-xl group-hover:bg-sky-500/20 transition-all pointer-events-none"></div>
                    
                    {/* Header Top Row: Icon */}
                    <div className="flex items-center justify-between gap-2 mb-2 sm:mb-3 z-10">
                      <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-white/10 border border-white/20 flex items-center justify-center text-sky-300 group-hover:scale-105 transition-transform shrink-0 shadow-md">
                        {getPartnerIcon(p.id)}
                      </div>
                    </div>

                    {/* Header Bottom Area: Full Business Title & Category */}
                    <div className="z-10">
                      <h3 className="font-serif font-bold text-xs sm:text-sm md:text-base text-white tracking-wide leading-snug group-hover:text-sky-300 transition-colors">
                        {isRo ? p.nameRo : p.nameEn}
                      </h3>
                      <div className="font-mono text-[9px] text-sky-200/80 uppercase tracking-wider mt-1 font-medium leading-tight">
                        {isRo ? p.categoryRo : p.categoryEn}
                      </div>
                    </div>
                  </div>

                  {/* Subdomain Pill */}
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="font-mono text-[10px] text-sky-800 bg-sky-50 px-2 py-1 rounded-md border border-sky-100 font-bold truncate max-w-[160px] xs:max-w-[210px] sm:max-w-[250px]" title={`https://${p.subdomain}`}>
                      https://{p.subdomain}
                    </span>
                    <span className="font-mono text-[9px] sm:text-[10px] text-slate-400 shrink-0">Ragnar Elite</span>
                  </div>

                  <p className="font-sans text-xs text-slate-600 line-clamp-3 font-light mb-4 sm:mb-6 leading-relaxed">
                    {isRo ? p.descriptionRo : p.descriptionEn}
                  </p>
                </div>

                {/* Card Action Button */}
                <div className="pt-3.5 border-t border-slate-100">
                  <a
                    href={`https://${p.subdomain}`}
                    onClick={(e) => {
                      if (typeof window !== 'undefined' && !window.location.hostname.includes('ragnareliteholding.com')) {
                        e.preventDefault();
                        if (onSelectPartner) {
                          onSelectPartner(p);
                        }
                      }
                    }}
                    className="w-full py-2.5 px-3.5 bg-[#0B1B3D] hover:bg-sky-700 text-white font-mono text-xs font-semibold rounded-lg shadow-sm hover:shadow-md transition-all flex items-center justify-center gap-2 group/btn min-h-[44px] cursor-pointer"
                  >
                    <span>{isRo ? 'Deschide Subdomeniul Oficial' : 'Open Official Subdomain'}</span>
                    <ArrowRight className="w-4 h-4 text-sky-300 group-hover/btn:translate-x-1 transition-transform shrink-0" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Global Operational Synergy Section */}
        <div className="mt-24 sm:mt-32">
          <div className="bg-[#0B1B3D]/5 border border-[#0B1B3D]/10 rounded-2xl p-8 sm:p-12 md:p-16 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-[#C8D9E6]/25 to-transparent rounded-bl-full pointer-events-none"></div>
            
            <div className="max-w-3xl relative z-10">
              <span className="font-mono text-[9px] tracking-[0.3em] text-sky-600 uppercase block mb-4 font-bold">
                {isRo ? 'SINERGIE INSTITUȚIONALĂ' : 'INSTITUTIONAL SYNERGY'}
              </span>
              
              <h2 className="font-serif text-xl sm:text-2xl md:text-3xl font-bold text-[#0B1B3D] mb-6 tracking-wide uppercase leading-tight">
                {isRo 
                  ? 'Guvernanță Riguroasă pentru Protecția Activelor' 
                  : 'Rigorous Governance for Asset Safeguarding'}
              </h2>

              <p className="font-sans font-light text-slate-600 text-sm sm:text-base leading-relaxed mb-8">
                {isRo
                  ? 'Toate auditurile fiscale transfrontaliere, evaluările de active și tranzacțiile complexe de restructurare M&A desfășurate de Ragnar Elite sunt validate în mod independent de partenerii noștri de renume global. Acest nivel superior de supervizare oferă siguranță totală și o transparență inegalabilă asociaților noștri.'
                  : 'All cross-border fiscal audits, asset valuations, and complex M&A restructuring operations conducted by Ragnar Elite are independently verified by our globally renowned partners. This premium tier of oversight guarantees absolute safety and unparalleled transparency for our stakeholders.'}
              </p>

              <div className="flex flex-wrap gap-4 items-center">
                <div className="flex items-center gap-2 px-3 py-1.5 bg-white rounded border border-[#0B1B3D]/5 shadow-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                  <span className="font-mono text-[9px] tracking-wider text-slate-600 uppercase font-medium">
                    {isRo ? 'Standarde Audit Big Four' : 'Big Four Audit Standards'}
                  </span>
                </div>
                <div className="flex items-center gap-2 px-3 py-1.5 bg-white rounded border border-[#0B1B3D]/5 shadow-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                  <span className="font-mono text-[9px] tracking-wider text-slate-600 uppercase font-medium">
                    {isRo ? 'Conformitate Legala Multi-Jurisdicțională' : 'Multi-Jurisdictional Legal Alignment'}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Contact/Submit CTA */}
        <div className="mt-24 sm:mt-32">
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative bg-[#050D1D] text-[#FAF6F0] rounded-2xl p-8 sm:p-12 md:p-16 border border-white/10 overflow-hidden text-center shadow-2xl"
          >
            <div className="absolute inset-0 bg-gradient-to-b from-[#0B1B3D]/50 to-black/40 z-1"></div>
            <div className="absolute inset-0 bg-[radial-gradient(#FAF6F0_0.5px,transparent_0.5px)] [background-size:20px_20px] opacity-[0.05] z-2"></div>
            
            <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center">
              <span className="font-mono text-[9px] tracking-[0.3em] text-[#A2D2FF] uppercase block mb-4 font-bold">
                {isRo ? 'CO-INVESTIȚII & PROIECTE' : 'CO-INVESTMENTS & JOINT VENTURES'}
              </span>
              
              <h2 className="font-serif text-2xl sm:text-3xl font-semibold mb-6 tracking-wide leading-tight uppercase">
                {isRo ? 'Explorează Oportunități Comune' : 'Explore Strategic Joint Ventures'}
              </h2>

              <p className="font-sans font-light text-slate-300 text-sm sm:text-base md:text-lg mb-10 leading-relaxed">
                {isRo
                  ? 'Colaborăm cu fonduri suverane, birouri de administrare a averii de tip single-family și instituții financiare acreditate global pentru formarea de consorții și achiziții strategice. Contactați Consiliul Executiv de Parteneriate la relations@ragnareliteholding.com.'
                  : 'We partner with sovereign wealth funds, single-family offices, and top global investment firms to build joint ventures and co-investments. Contact our Partnerships Board at relations@ragnareliteholding.com.'}
              </p>

              <motion.a
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                href="mailto:relations@ragnareliteholding.com"
                className="inline-flex items-center gap-3 bg-[#FAF6F0] text-[#050D1D] hover:bg-[#FAF6F0]/90 font-mono text-xs tracking-widest uppercase py-4 px-8 rounded-sm font-semibold shadow-lg transition-all duration-300 border border-white/10"
              >
                <span>{isRo ? 'Contactează Parteneriatele' : 'Contact Partnerships'}</span>
                <ArrowRight className="w-4 h-4 text-[#050D1D]" />
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
