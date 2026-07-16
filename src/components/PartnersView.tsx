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
  Users2
} from 'lucide-react';

interface PartnerLogo {
  name: string;
  category: 'advisory' | 'financial' | 'legal' | 'tech';
  descriptionEn: string;
  descriptionRo: string;
  // We'll render elegant stylized SVG/CSS representations for the logos to match the design language perfectly
  logoType: 'mckinsey' | 'kpmg' | 'deloitte' | 'pwc' | 'ey' | 'linklaters' | 'clifford' | 'microsoft';
}

const partnersList: PartnerLogo[] = [
  {
    name: 'McKinsey & Company',
    category: 'advisory',
    descriptionEn: 'Global strategic management and operational advisory for cross-border acquisitions.',
    descriptionRo: 'Consultanță strategică de management global și advisory operațional pentru achiziții transfrontaliere.',
    logoType: 'mckinsey'
  },
  {
    name: 'KPMG',
    category: 'financial',
    descriptionEn: 'Consolidated financial auditing, cross-border fiscal compliance, and advisory.',
    descriptionRo: 'Audit financiar consolidat, conformitate fiscală transfrontalieră și servicii de advisory.',
    logoType: 'kpmg'
  },
  {
    name: 'Deloitte',
    category: 'financial',
    descriptionEn: 'International tax optimization and corporate restructuring transaction support.',
    descriptionRo: 'Optimizare fiscală internațională și suport tranzacțional în restructurări corporative.',
    logoType: 'deloitte'
  },
  {
    name: 'PricewaterhouseCoopers (PwC)',
    category: 'financial',
    descriptionEn: 'Enterprise risk management, capital market advisory, and deep due diligence.',
    descriptionRo: 'Managementul riscului de întreprindere, consultanță pe piețe de capital și due diligence profund.',
    logoType: 'pwc'
  },
  {
    name: 'Ernst & Young (EY)',
    category: 'financial',
    descriptionEn: 'Strategic valuation, financial modeling, and transaction integration services.',
    descriptionRo: 'Evaluare strategică, modelare financiară și servicii de integrare a tranzacțiilor.',
    logoType: 'ey'
  },
  {
    name: 'Linklaters',
    category: 'legal',
    descriptionEn: 'Primary legal counsel for international mergers, acquisitions, and compliance.',
    descriptionRo: 'Consilier juridic principal pentru fuziuni, achiziții și conformitate la nivel internațional.',
    logoType: 'linklaters'
  },
  {
    name: 'Clifford Chance',
    category: 'legal',
    descriptionEn: 'Global regulatory compliance, legal audit, and sovereign fund negotiations.',
    descriptionRo: 'Conformitate reglementară globală, audit legal și negocieri cu fonduri suverane.',
    logoType: 'clifford'
  },
  {
    name: 'Microsoft Enterprise',
    category: 'tech',
    descriptionEn: 'Cloud infrastructure security, AI-powered predictive systems, and server networks.',
    descriptionRo: 'Securitatea infrastructurii cloud, sisteme predictive bazate pe AI și rețele de servere.',
    logoType: 'microsoft'
  }
];

interface PartnersViewProps {
  currentLang: Language;
}

export default function PartnersView({ currentLang }: PartnersViewProps) {
  const isRo = currentLang === 'ro';

  const titleText = isRo 
    ? 'Alianțe Strategice & Parteneri Globali' 
    : 'Strategic Alliances & Global Partners';

  const subtitleText = isRo
    ? 'Colaborări de elită pentru asigurarea excelenței operaționale și a imunității macroeconomice'
    : 'Elite collaborations ensuring operational excellence and absolute macroeconomic immunity';

  const introText = isRo
    ? 'La Ragnar Elite Holding, excelența operațională este susținută de parteneriate strategice cu cele mai prestigioase instituții de consultanță, audit financiar, asistență juridică și tehnologie de pe mapamond. Colaborăm exclusiv cu lideri mondiali recunoscuți pentru a garanta tranzacții sigure, conformitate impecabilă și securitate structurală.'
    : 'At Ragnar Elite Holding, operational excellence is bolstered by strategic partnerships with the world\'s most prestigious consulting, financial auditing, legal counsel, and technology institutions. We collaborate exclusively with recognized global leaders to guarantee secure transactions, flawless compliance, and structural security.';

  const categoryLabels = {
    all: isRo ? 'Toți Partenerii' : 'All Partners',
    advisory: isRo ? 'Consultanță Strategică' : 'Strategic Advisory',
    financial: isRo ? 'Audit & Servicii Financiare' : 'Audit & Financial',
    legal: isRo ? 'Consultanță Juridică' : 'Legal & Compliance',
    tech: isRo ? 'Infrastructură & Tehnologie' : 'Tech & Infrastructure'
  };

  // Helper to render stylized premium logos
  const renderLogo = (logoType: string) => {
    switch (logoType) {
      case 'mckinsey':
        return (
          <div className="flex flex-col items-center">
            <span className="font-serif text-lg sm:text-xl font-semibold tracking-wider text-[#0B1B3D]">McKinsey</span>
            <span className="font-sans text-[8px] tracking-[0.4em] uppercase text-sky-600/80 -mt-1 font-medium">&amp; Company</span>
          </div>
        );
      case 'kpmg':
        return (
          <div className="flex items-center gap-1.5 px-4 py-2 bg-[#0B1B3D]/5 rounded border border-[#0B1B3D]/10">
            <span className="font-sans text-xl font-black tracking-widest text-blue-900">KPMG</span>
          </div>
        );
      case 'deloitte':
        return (
          <div className="flex items-baseline font-sans text-lg sm:text-xl font-bold text-slate-800 tracking-tight">
            <span>Deloitte</span>
            <span className="text-emerald-500 font-black text-2xl leading-none">.</span>
          </div>
        );
      case 'pwc':
        return (
          <div className="flex flex-col items-center">
            <span className="font-sans text-xl font-extrabold text-amber-700/90 tracking-tighter">pwc</span>
          </div>
        );
      case 'ey':
        return (
          <div className="flex items-center gap-1 font-sans text-lg sm:text-xl font-black tracking-tighter text-slate-900">
            <span className="bg-yellow-400 text-black px-1.5 py-0.5 text-xs font-mono font-bold uppercase mr-1">EY</span>
            <span className="text-sm font-medium tracking-wide">Building a better working world</span>
          </div>
        );
      case 'linklaters':
        return (
          <div className="flex items-center font-sans text-lg sm:text-xl font-semibold text-rose-950 tracking-tight">
            <span>Linklaters</span>
          </div>
        );
      case 'clifford':
        return (
          <div className="flex flex-col items-start font-serif">
            <span className="text-sm font-bold text-slate-900 tracking-wide uppercase">Clifford</span>
            <span className="text-xs font-semibold text-sky-900 tracking-widest uppercase -mt-1">Chance</span>
          </div>
        );
      case 'microsoft':
        return (
          <div className="flex items-center gap-2">
            <div className="grid grid-cols-2 gap-0.5 w-6 h-6">
              <div className="bg-[#F25022] w-2.5 h-2.5"></div>
              <div className="bg-[#7FBA00] w-2.5 h-2.5"></div>
              <div className="bg-[#00A4EF] w-2.5 h-2.5"></div>
              <div className="bg-[#FFB900] w-2.5 h-2.5"></div>
            </div>
            <span className="font-sans text-sm sm:text-base font-semibold text-slate-700">Microsoft</span>
          </div>
        );
      default:
        return <Building className="w-8 h-8 text-[#0B1B3D]/70" />;
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
        {/* Subtle high-end mesh and lighting layers */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#050D1D] via-[#0B1B3D]/95 to-[#050D1D] z-1"></div>
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
        <div className="bg-white border border-[#0B1B3D]/10 rounded-2xl p-8 sm:p-12 shadow-[0_4px_30px_rgba(11,27,61,0.01)] hover:shadow-[0_10px_40px_rgba(11,27,61,0.03)] transition-all duration-300 mb-16 sm:mb-24">
          <div className="max-w-4xl">
            <span className="font-mono text-[9px] tracking-[0.25em] text-[#0B1B3D]/50 uppercase block mb-3 font-bold">
              {isRo ? 'IMUNITATE MACROECONOMICĂ PRIN REPUTAȚIE' : 'MACROECONOMIC IMMUNITY THROUGH REPUTATION'}
            </span>
            <p className="font-sans font-light text-slate-700 text-sm sm:text-base md:text-lg leading-relaxed">
              {introText}
            </p>
          </div>
        </div>

        {/* Dynamic Logos Grid Section */}
        <div className="border-t border-[#0B1B3D]/10 pt-16 sm:pt-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-2xl mx-auto mb-16"
          >
            <span className="font-mono text-[9px] tracking-[0.25em] text-[#0B1B3D]/50 uppercase block mb-2 font-bold">
              {isRo ? 'Showcase Instituțional' : 'Institutional Showcase'}
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#0B1B3D] uppercase tracking-wider">
              {isRo ? 'REȚEAUA STRATEGICĂ DE LOGOURI' : 'STRATEGIC LOGO NETWORK'}
            </h2>
            <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-[#0B1B3D]/30 to-transparent mx-auto mt-4"></div>
          </motion.div>

          {/* Luxury Grid of Partner Cards with Logos */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {partnersList.map((partner, index) => (
              <motion.div
                key={partner.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08, duration: 0.5 }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className="group relative bg-white border border-[#0B1B3D]/10 hover:border-[#0B1B3D]/25 p-8 rounded-xl shadow-[0_4px_25px_rgba(11,27,61,0.01)] hover:shadow-[0_12px_40px_rgba(11,27,61,0.04)] transition-all duration-300 flex flex-col justify-between items-center text-center min-h-[300px]"
              >
                {/* Subtle top indicator bar */}
                <div className="absolute top-0 left-0 w-full h-[3px] bg-transparent group-hover:bg-[#0B1B3D]/80 transition-all duration-300 rounded-t-xl"></div>
                
                {/* Logo Area */}
                <div className="h-28 w-full flex items-center justify-center border-b border-[#0B1B3D]/5 group-hover:border-[#0B1B3D]/10 transition-colors duration-300 mb-6">
                  <div className="transform group-hover:scale-105 transition-transform duration-300">
                    {renderLogo(partner.logoType)}
                  </div>
                </div>

                {/* Info Area */}
                <div className="flex-1 flex flex-col justify-between w-full">
                  <div>
                    <span className="font-mono text-[8px] tracking-[0.2em] text-sky-600 uppercase font-semibold block mb-2">
                      {categoryLabels[partner.category]}
                    </span>
                    <h3 className="font-serif text-sm font-bold text-[#0B1B3D] mb-3 tracking-tight">
                      {partner.name}
                    </h3>
                    <p className="font-sans font-light text-[11px] sm:text-xs text-slate-500 leading-relaxed">
                      {isRo ? partner.descriptionRo : partner.descriptionEn}
                    </p>
                  </div>
                  
                  {/* Subtle decorative dot/arrow anchor */}
                  <div className="w-full flex justify-center mt-6">
                    <span className="inline-flex items-center gap-1.5 font-mono text-[9px] tracking-widest text-[#0B1B3D]/40 group-hover:text-sky-600 transition-colors uppercase font-medium">
                      <span>{isRo ? 'Validat' : 'Verified'}</span>
                      <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                    </span>
                  </div>
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
