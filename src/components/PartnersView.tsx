import { motion } from 'motion/react';
import { Language } from '../types';
import { ShieldCheck, Globe, Handshake } from 'lucide-react';

const industrialDivisions = [
  {
    id: '01',
    titleRo: 'DIVIZIA DE PRIVATE EQUITY & VENTURE CAPITAL',
    titleEn: 'PRIVATE EQUITY & VENTURE CAPITAL DIVISION',
    focusRo: 'Atragerea de capital instituțional pentru achiziționarea de participații cu randament ridicat și impulsionarea creșterii strategice a afacerilor.',
    focusEn: 'Raising institutional capital to acquire high-yield equity stakes and drive strategic business growth.'
  },
  {
    id: '02',
    titleRo: 'DIVIZIA DE FUZIUNI & ACHIZIȚII (M&A CORPORATE)',
    titleEn: 'MERGERS & ACQUISITIONS (M&A CORPORATE) DIVISION',
    focusRo: 'Tranzacții corporative transfrontaliere, identificarea companiilor țintă, audit legal (due diligence) și integrarea subsidiarelor globale.',
    focusEn: 'Cross-border corporate transactions, target identification, due diligence, and global subsidiary integration.'
  },
  {
    id: '03',
    titleRo: 'DIVIZIA IMOBILIARĂ & PROPRIETĂȚI DE INVESTIȚII',
    titleEn: 'REAL ESTATE & INVESTMENT PROPERTY DIVISION',
    focusRo: 'Alocarea de capital și managementul activelor în clădiri de birouri premium, ospitalitate de lux și active comerciale de top.',
    focusEn: 'Capital allocation and asset management in premium commercial offices, luxury hospitality, and high-end retail assets.'
  },
  {
    id: '04',
    titleRo: 'DIVIZIA DE ARHITECTURĂ & PROIECTARE CONCEPTUALĂ',
    titleEn: 'ARCHITECTURE & CONCEPTUAL DESIGN DIVISION',
    focusRo: 'Master planning arhitectural, proiectare structurală și design conceptual inovator pentru repere imobiliare.',
    focusEn: 'Architectural master planning, structural blueprinting, and innovative conceptual design for landmarks.'
  },
  {
    id: '05',
    titleRo: 'DIVIZIA DE CONSTRUCȚII & DEZVOLTARE INFRASTRUCTURĂ',
    titleEn: 'CONSTRUCTION & INFRASTRUCTURE DEVELOPMENT DIVISION',
    focusRo: 'Execuție la cheie, inginerie civilă, facilități industriale și livrarea proiectelor mari de infrastructură.',
    focusEn: 'Turnkey execution, civil engineering, industrial facilities, and heavy infrastructure project delivery.'
  },
  {
    id: '06',
    titleRo: 'DIVIZIA DE PROJECT MANAGEMENT & SUPERVIZARE TEHNICĂ',
    titleEn: 'PROJECT MANAGEMENT & TECHNICAL SUPERVISION DIVISION',
    focusRo: 'Inginerie de șantier, audit tehnic riguros, controlul costurilor și asigurarea strictă a calității în toate fazele de construcție.',
    focusEn: 'Site engineering, strict technical auditing, cost control, and rigorous quality assurance across all construction phases.'
  },
  {
    id: '07',
    titleRo: 'DIVIZIA DE IT, TEHNOLOGIE & CIBERSECURITATE',
    titleEn: 'IT, TECHNOLOGY & CYBERSECURITY DIVISION',
    focusRo: 'Infrastructură IT enterprise avansată, dezvoltare de software securizat și rețele globale de atenuare a amenințărilor cibernetice.',
    focusEn: 'Advanced enterprise IT infrastructure, secure software engineering, and global data threat mitigation networks.'
  },
  {
    id: '08',
    titleRo: 'DIVIZIA DE ENERGIE, ELECTRICITATE & RESURSE REGENERABILE',
    titleEn: 'ENERGY, ELECTRICITY & RENEWABLE RESOURCES DIVISION',
    focusRo: 'Dezvoltarea de centrale electrice, managementul rețelelor electrice, operațiuni de utilități și inițiative de energie verde (solară/eoliană).',
    focusEn: 'Power plant development, electrical grid management, utility operations, and green energy (solar/wind) initiatives.'
  },
  {
    id: '09',
    titleRo: 'DIVIZIA DE TRANSPORT & LOGISTICĂ GLOBALĂ',
    titleEn: 'TRANSPORT & GLOBAL LOGISTICS DIVISION',
    focusRo: 'Rețele de transport multimodal de mărfuri, rutarea lanțului de aprovizionare global și operațiuni de îndeplinire în hub-uri de depozitare premium.',
    focusEn: 'Multi-modal cargo networks, major supply chain routing, and premium warehouse hub fulfillment operations.'
  },
  {
    id: '10',
    titleRo: 'DIVIZIA DE EXPLOATARE MINIERĂ, RESURSE NATURALE & METALE PREȚIOASE',
    titleEn: 'MINING, NATURAL RESOURCES & PRECIOUS METALS DIVISION',
    focusRo: 'Explorarea strategică a mărfurilor, operațiuni de extracție și tranzacționarea globală a aurului, argintului și metalelor industriale.',
    focusEn: 'Strategic commodity exploration, extraction operations, and global trading of gold, silver, and industrial metals.'
  },
  {
    id: '11',
    titleRo: 'DIVIZIA DE CONTABILITATE CORPORATIVĂ & AUDIT FINANCIAR',
    titleEn: 'CORPORATE ACCOUNTING & FINANCIAL AUDITING DIVISION',
    focusRo: 'Audit instituțional autorizat, optimizare fiscală complexă, conformitate fiscală transfrontalieră și consultanță consolidată.',
    focusEn: 'Certified institutional auditing, complex tax optimization, cross-border fiscal compliance, and consolidated advisory.'
  },
  {
    id: '12',
    titleRo: 'DIVIZIA DE CONSULTANȚĂ STRATEGICĂ EXECUTIVĂ',
    titleEn: 'STRATEGIC EXECUTIVE CONSULTANCY DIVISION',
    focusRo: 'Consiliere pentru managementul de vârf, restructurare corporativă, designul eficienței operaționale și optimizarea profitului.',
    focusEn: 'Senior management advisory, corporate restructuring, operational efficiency design, and profit optimization.'
  },
  {
    id: '13',
    titleRo: 'DIVIZIA DE SĂNĂTATE & BIOTEHNOLOGIE MEDICALĂ',
    titleEn: 'HEALTHCARE & MEDICAL BIOTECHNOLOGY DIVISION',
    focusRo: 'Investiții de capital în clinici medicale private, laboratoare de cercetare clinică și software medical de ultimă generație.',
    focusEn: 'Capital investments in private medical clinics, clinical research labs, and next-generation medical software.'
  },
  {
    id: '14',
    titleRo: 'DIVIZIA DE AGRICULTURĂ SUSTENABILĂ & PRODUCȚIE ALIMENTARĂ',
    titleEn: 'SUSTAINABLE AGRICULTURE & FOOD PRODUCTION DIVISION',
    focusRo: 'Operațiuni agricole de înaltă tehnologie, procesare ecologică și distribuție a lanțului de aprovizionare la standarde stricte ale UE.',
    focusEn: 'High-tech farming operations, organic processing, and supply chain distribution matching strict EU standards.'
  },
  {
    id: '15',
    titleRo: 'DIVIZIA DE MANAGEMENT GLOBAL AL ACTIVELOR & AVERII',
    titleEn: 'GLOBAL ASSET & WEALTH MANAGEMENT DIVISION',
    focusRo: 'Conservarea discreționară a averii, tranzacționarea de lingouri fizice, instrumente financiare derivate și scalarea activelor la nivel înalt.',
    focusEn: 'Discretionary wealth preservation, physical bullion trading, capital market derivatives, and high-level asset scaling.'
  },
  {
    id: '16',
    titleRo: 'DIVIZIA DE AEROSPAȚIALĂ, AVIAȚIE & APĂRARE MARINĂ',
    titleEn: 'AEROSPACE, AVIATION & MARINE DEFENSE DIVISION',
    focusRo: 'Inginerie de înaltă tehnologie, producție avansată și asamblare la cheie de aeronave comerciale, nave marine premium, sisteme fără pilot (UAV) și platforme de tranzit pentru sectorul de apărare.',
    focusEn: 'High-tech engineering, advanced manufacturing, and turnkey assembly of commercial aircraft, premium marine vessels, unmanned systems (UAVs), and defense sector transit platforms.'
  },
  {
    id: '17',
    titleRo: 'DIVIZIA DE EDUCAȚIE EXECUTIVĂ & TRAINING DE MANAGEMENT DE ELITĂ',
    titleEn: 'EXECUTIVE EDUCATION & ELITE MANAGEMENT TRAINING DIVISION',
    focusRo: 'Academii corporative specializate, programe de leadership avansate și instruire strategică pentru managementul de nivel C.',
    focusEn: 'Specialized corporate academies, advanced leadership programs, and strategic training for C-level management.'
  }
];

interface PartnersViewProps {
  currentLang: Language;
}

export default function PartnersView({ currentLang }: PartnersViewProps) {
  const isRo = currentLang === 'ro';

  const pillars = [
    {
      id: '01',
      icon: <Globe className="w-5 h-5 text-[#0B1B3D]/70" />,
      title: isRo ? 'Consolidare Globală' : 'Global Consolidation',
      text: isRo
        ? 'Ragnar Elite Holding își consolidează poziția pe piețele internaționale prin parteneriate solide cu investitori instituționali, fonduri de capital privat și lideri sectoriali.'
        : 'Ragnar Elite Holding solidifies its position in international markets through strong partnerships with institutional investors, private equity funds, and sector leaders.'
    },
    {
      id: '02',
      icon: <Handshake className="w-5 h-5 text-[#0B1B3D]/70" />,
      title: isRo ? 'Sinergie & Integritate' : 'Synergy & Integrity',
      text: isRo
        ? 'Diviziile noastre operează într-un ecosistem integrat, unde colaborarea transfrontalieră și co-investițiile generează imunitate macroeconomică și randamente superioare.'
        : 'Our divisions operate in an integrated ecosystem, where cross-border collaboration and co-investments generate macroeconomic immunity and superior returns.'
    },
    {
      id: '03',
      icon: <ShieldCheck className="w-5 h-5 text-[#0B1B3D]/70" />,
      title: isRo ? 'Alianțe Exclusive' : 'Exclusive Alliances',
      text: isRo
        ? 'Dezvoltăm alianțe exclusive bazate pe confidențialitate absolută, guvernanță corporativă impecabilă și viziune strategică pe termen lung.'
        : 'We develop exclusive alliances based on absolute confidentiality, flawless corporate governance, and long-term strategic vision.'
    }
  ];

  const partners = [
    { name: 'KPMG', sector: 'Audit & Advisory' },
    { name: 'McKinsey & Company', sector: 'Strategic Consulting' },
    { name: 'Goldman Sachs', sector: 'Investment Banking' },
    { name: 'BlackRock', sector: 'Asset Management' },
    { name: 'Deloitte', sector: 'Risk Advisory' },
    { name: 'J.P. Morgan', sector: 'Capital Markets' },
    { name: 'Bain & Company', sector: 'Management Consulting' },
    { name: 'Morgan Stanley', sector: 'Wealth Management' }
  ];

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
          <div className="flex flex-col items-center text-center max-w-[850px] mx-auto">
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-3 py-1 bg-white/[0.04] border border-white/10 rounded-sm text-[9px] md:text-[10px] text-[#A2D2FF] font-mono tracking-[0.3em] uppercase mb-6 backdrop-blur-md"
            >
              <span>{isRo ? 'Alianțe Strategice' : 'Strategic Alliances'}</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.8 }}
              className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#FAF6F0] tracking-[0.08em] leading-tight uppercase mb-6"
            >
              {isRo ? 'ALIANȚE STRATEGICE ȘI SINERGIE GLOBALĂ' : 'STRATEGIC ALLIANCES AND GLOBAL SYNERGY'}
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="w-20 h-[2px] bg-gradient-to-r from-transparent via-[#C8D9E6]/40 to-transparent"
            ></motion.div>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-20 sm:py-28 px-6 max-w-[1140px] mx-auto relative z-10">
        {/* Narrative Pillars Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20 sm:mb-28">
          {pillars.map((pillar, index) => (
            <motion.div
              key={pillar.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.5 }}
              className="group bg-white border border-[#0B1B3D]/10 p-8 rounded-xl flex flex-col justify-between shadow-[0_4px_30px_rgba(11,27,61,0.02)] hover:shadow-[0_12px_40px_rgba(11,27,61,0.06)] hover:border-[#0B1B3D]/25 transition-all duration-300 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-[#C8D9E6]/10 to-transparent rounded-bl-full pointer-events-none transition-transform duration-500 group-hover:scale-110"></div>
              <div>
                <div className="flex justify-between items-center mb-6">
                  <div className="p-2.5 bg-[#FAF6F0] rounded-lg border border-[#0B1B3D]/5">
                    {pillar.icon}
                  </div>
                  <span className="font-serif text-2xl font-bold text-[#0B1B3D]/10 group-hover:text-[#0B1B3D]/20 transition-colors">
                    {pillar.id}
                  </span>
                </div>
                <h3 className="font-serif text-lg font-bold text-[#0B1B3D] mb-3 group-hover:text-[#0B1B3D]/95 transition-colors">
                  {pillar.title}
                </h3>
                <p className="font-sans font-light text-slate-600 text-sm leading-relaxed">
                  {pillar.text}
                </p>
              </div>
              <div className="w-full h-[1px] bg-gradient-to-r from-[#0B1B3D]/10 to-transparent mt-6 group-hover:from-[#0B1B3D]/30 transition-all duration-500"></div>
            </motion.div>
          ))}
        </div>

        {/* Industrial Divisions Section */}
        <div className="my-24 sm:my-32 border-t border-[#0B1B3D]/10 pt-16 sm:pt-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-2xl mx-auto mb-12 sm:mb-16"
          >
            <span className="font-mono text-[9px] tracking-[0.25em] text-[#0B1B3D]/50 uppercase block mb-2 font-bold">
              {isRo ? 'Ecosistem Industrial și Portofoliu Strategic' : 'Industrial Ecosystem & Strategic Portfolio'}
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-[#0B1B3D] uppercase tracking-wider">
              {isRo ? 'DIVIZIILE INDUSTRIALE ALE RAGNAR ELITE HOLDING' : 'INDUSTRIAL DIVISIONS OF RAGNAR ELITE HOLDING'}
            </h2>
            <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-[#0B1B3D]/30 to-transparent mx-auto mt-4"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {industrialDivisions.map((division, index) => (
              <motion.div
                key={division.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (index % 3) * 0.1, duration: 0.5 }}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className="group relative bg-white border border-[#0B1B3D]/10 hover:border-[#0B1B3D]/30 p-8 rounded-xl shadow-[0_4px_20px_rgba(11,27,61,0.01)] hover:shadow-[0_12px_45px_rgba(11,27,61,0.05)] transition-all duration-300 flex flex-col justify-between"
              >
                {/* Subtle top indicator bar */}
                <div className="absolute top-0 left-0 w-full h-[3px] bg-transparent group-hover:bg-[#0B1B3D] transition-all duration-300 rounded-t-xl"></div>
                
                <div>
                  <div className="flex justify-between items-start mb-6">
                    <span className="font-mono text-[10px] text-[#A2D2FF] font-bold uppercase tracking-widest bg-[#0B1B3D]/5 px-2.5 py-1 rounded">
                      DIV - {division.id}
                    </span>
                    <span className="font-serif text-3xl font-bold text-[#0B1B3D]/10 group-hover:text-[#0B1B3D]/25 transition-colors duration-300">
                      {division.id}
                    </span>
                  </div>

                  <h3 className="font-serif text-base sm:text-lg font-bold text-[#0B1B3D] mb-4 tracking-tight leading-snug group-hover:text-sky-900 transition-colors duration-200">
                    {isRo ? division.titleRo : division.titleEn}
                  </h3>

                  <div className="h-[1px] w-8 bg-slate-100 group-hover:w-16 group-hover:bg-[#A2D2FF] transition-all duration-500 mb-4"></div>
                </div>

                <div className="space-y-1 mt-auto">
                  <span className="font-mono text-[8px] tracking-[0.18em] text-slate-400 uppercase font-semibold block">
                    {isRo ? 'Focus corporativ:' : 'Corporate focus:'}
                  </span>
                  <p className="font-sans font-light text-xs sm:text-[0.82rem] text-slate-600 leading-relaxed text-left">
                    {isRo ? division.focusRo : division.focusEn}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Partners Grid Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-xl mx-auto mb-10 sm:mb-12"
        >
          <span className="font-mono text-[9px] tracking-[0.25em] text-[#0B1B3D]/50 uppercase block mb-2">
            {isRo ? 'Consorțiu și Colaboratori' : 'Consortium & Collaborators'}
          </span>
          <h2 className="font-serif text-xl sm:text-2xl font-bold text-[#0B1B3D]/80 uppercase tracking-wider">
            {isRo ? 'Lideri Sectoriali Corelați' : 'Correlated Sector Leaders'}
          </h2>
        </motion.div>

        {/* Partners Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {partners.map((partner, index) => (
            <motion.div
              key={partner.name}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05, duration: 0.4 }}
              className="group relative bg-white border border-[#0B1B3D]/10 p-6 rounded-lg flex flex-col items-center justify-center aspect-square shadow-[0_4px_20px_rgba(5,13,29,0.01)] hover:shadow-[0_10px_35px_rgba(5,13,29,0.05)] hover:border-[#0B1B3D]/20 transition-all duration-300 cursor-default"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-[#FAF6F0]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-lg pointer-events-none"></div>
              
              <h3 className="font-serif text-lg sm:text-xl font-bold text-[#0B1B3D]/80 group-hover:text-[#0B1B3D] transition-colors text-center mb-2 tracking-tight">
                {partner.name}
              </h3>
              
              <span className="font-mono text-[8px] tracking-[0.18em] text-slate-400 uppercase text-center font-semibold">
                {partner.sector}
              </span>
              
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-6 h-[1px] bg-[#0B1B3D]/10 group-hover:bg-[#0B1B3D]/30 transition-colors"></div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
