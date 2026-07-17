import { motion } from 'motion/react';
import { Language } from '../types';
import { 
  TrendingUp, 
  Briefcase, 
  Landmark, 
  BarChart3, 
  Users, 
  ClipboardCheck, 
  Cpu, 
  GraduationCap, 
  Package, 
  Sparkles,
  ArrowRight,
  Globe,
  ShieldCheck,
  Building2,
  Workflow
} from 'lucide-react';

interface DivisionItem {
  id: string;
  iconName: string;
  titleEn: string;
  titleRo: string;
  focusEn: string;
  focusRo: string;
}

const governanceDivisions: DivisionItem[] = [
  {
    id: '01',
    iconName: 'TrendingUp',
    titleEn: 'Private Equity & Venture Capital Division',
    titleRo: 'Divizia de Private Equity & Venture Capital',
    focusEn: 'Raising institutional capital to acquire high-yield equity stakes and drive strategic business growth.',
    focusRo: 'Atragerea de capital instituțional pentru a achiziționa pachete de acțiuni cu randament ridicat și pentru a stimula creșterea strategică a afacerii.'
  },
  {
    id: '02',
    iconName: 'Briefcase',
    titleEn: 'Mergers & Acquisitions (M&A Corporate) Division',
    titleRo: 'Divizia de Fuziuni & Achiziții (M&A Corporativ)',
    focusEn: 'Cross-border corporate transactions, target identification, due diligence, and global subsidiary integration.',
    focusRo: 'Tranzacții corporative transfrontaliere, identificarea companiilor țintă, due diligence și integrarea subsidiarelor globale.'
  },
  {
    id: '03',
    iconName: 'Landmark',
    titleEn: 'Global Asset & Wealth Management Division',
    titleRo: 'Divizia de Asset & Wealth Management Global',
    focusEn: 'Discretionary wealth preservation, physical bullion trading, capital market derivatives, and high-level asset scaling.',
    focusRo: 'Conservarea discreționară a averii, tranzacționarea de lingouri fizice, instrumente financiare derivate pe piețele de capital și scalarea activelor la nivel înalt.'
  },
  {
    id: '04',
    iconName: 'BarChart3',
    titleEn: 'Corporate Accounting & Financial Auditing Division',
    titleRo: 'Divizia de Contabilitate Corporativă & Audit Financiar',
    focusEn: 'Certified institutional auditing, complex tax optimization, cross-border fiscal compliance, and consolidated advisory.',
    focusRo: 'Audit instituțional certificat, optimizare fiscală complexă, conformitate fiscală transfrontalieră și consultanță consolidată.'
  },
  {
    id: '05',
    iconName: 'Users',
    titleEn: 'Strategic Executive Consultancy Division',
    titleRo: 'Divizia de Consultanță Strategică Executivă',
    focusEn: 'Senior management advisory, corporate restructuring, operational efficiency design, and profit optimization.',
    focusRo: 'Consultanță pentru managementul superior, restructurare corporativă, proiectarea eficienței operaționale și optimizarea profitului.'
  },
  {
    id: '06',
    iconName: 'ClipboardCheck',
    titleEn: 'Project Management & Technical Supervision Division',
    titleRo: 'Divizia de Project Management & Supervizare Tehnică',
    focusEn: 'Site engineering, strict technical auditing, cost control, and rigorous quality assurance across all construction phases.',
    focusRo: 'Inginerie de șantier, audit tehnic strict, controlul costurilor și asigurarea riguroasă a calității în toate fazele de construcție.'
  },
  {
    id: '07',
    iconName: 'Cpu',
    titleEn: 'IT, Technology & Cybersecurity Division',
    titleRo: 'Divizia de IT, Tehnologie & Securitate Cibernetică',
    focusEn: 'Advanced enterprise IT infrastructure, secure software engineering, and global data threat mitigation networks.',
    focusRo: 'Infrastructură IT avansată pentru întreprinderi, inginerie software securizată și rețele globale de atenuare a amenințărilor la adresa datelor.'
  },
  {
    id: '08',
    iconName: 'GraduationCap',
    titleEn: 'Executive Education & Elite Management Training Division',
    titleRo: 'Divizia de Educație Executivă & Instruire de Elită în Management',
    focusEn: 'Specialized corporate academies, advanced leadership programs, and strategic training for C-level management.',
    focusRo: 'Academii corporative specializate, programe de leadership avansate și instruire strategică pentru managementul de nivel C.'
  },
  {
    id: '09',
    iconName: 'Package',
    titleEn: 'Office Supplies & Consumables Management Division',
    titleRo: 'Divizia de Consumabile de Birou & Managementul Procurării',
    focusEn: 'Centralized procurement, global supply networks, corporate stationery manufacturing, and just-in-time inventory fulfillment for corporate offices, educational academies, and financial institutions worldwide.',
    focusRo: 'Achiziții centralizate, rețele globale de aprovizionare, fabricarea de papetărie corporativă și onorarea stocurilor just-in-time pentru birouri corporative, academii educaționale și instituții financiare din întreaga lume.'
  },
  {
    id: '10',
    iconName: 'Sparkles',
    titleEn: 'Commercial Cleaning & Environmental Sanitation Division',
    titleRo: 'Divizia de Curățenie Comercială & Igienizare Ecologică',
    focusEn: 'High-standard industrial sanitation, specialized medical facility sterilization, premium commercial real estate maintenance, and eco-friendly waste management protocol execution.',
    focusRo: 'Igienizare industrială la standarde înalte, sterilizare specializată a facilităților medicale, întreținere premium a imobilelor comerciale și executarea de protocoale ecologice de gestionare a deșeurilor.'
  }
];

const getIcon = (name: string) => {
  const iconClass = "w-5 h-5 text-[#0B1B3D]/70 group-hover:text-sky-600 transition-colors duration-300";
  switch (name) {
    case 'TrendingUp': return <TrendingUp className={iconClass} />;
    case 'Briefcase': return <Briefcase className={iconClass} />;
    case 'Landmark': return <Landmark className={iconClass} />;
    case 'BarChart3': return <BarChart3 className={iconClass} />;
    case 'Users': return <Users className={iconClass} />;
    case 'ClipboardCheck': return <ClipboardCheck className={iconClass} />;
    case 'Cpu': return <Cpu className={iconClass} />;
    case 'GraduationCap': return <GraduationCap className={iconClass} />;
    case 'Package': return <Package className={iconClass} />;
    case 'Sparkles': return <Sparkles className={iconClass} />;
    default: return <Workflow className={iconClass} />;
  }
};

interface DivisionsGovernanceViewProps {
  currentLang: Language;
}

export default function DivisionsGovernanceView({ currentLang }: DivisionsGovernanceViewProps) {
  const isRo = currentLang === 'ro';

  const titleText = isRo 
    ? 'Management Strategic, Capital și Servicii Integrate' 
    : 'Corporate Governance, Finance & Support';

  const subtitleText = isRo
    ? 'Arhitectură de sprijin sistemic, audit consolidat și optimizare de portofoliu'
    : 'Systemic support architecture, consolidated auditing, and portfolio optimization';

  const introText = isRo
    ? '„Sistemul nervos al holdingului nostru este guvernat de rigoare, securitate absolută și optimizare financiară. Diviziile din această secțiune asigură scutul de conformitate legală, managementul riscurilor cibernetice și administrarea inteligentă a capitalului grupului. Prin integrarea totală a serviciilor de suport, eliminăm dependența de terți, păstrând valoarea și excelența în interiorul ecosistemului Ragnar.”'
    : '“The nervous system of our holding is governed by rigor, absolute security, and financial optimization. The divisions in this section provide the shield of legal compliance, cybersecurity risk management, and the intelligent administration of the group’s capital. By fully integrating support services, we eliminate dependency on third parties, keeping value and excellence within the Ragnar ecosystem.”';

  const sectionPillarsTitle = isRo
    ? 'Pilonii Guvernanței Strategice'
    : 'Strategic Governance Pillars';

  const pillars = [
    {
      id: '01',
      icon: <ShieldCheck className="w-5 h-5 text-[#0B1B3D]/70" />,
      title: isRo ? 'Integritate & Control' : 'Integrity & Control',
      text: isRo
        ? 'Implementăm protocoale riguroase de audit, supraveghere financiară și control juridic pentru imunitate macroeconomică absolută.'
        : 'We implement rigorous audit, financial supervision, and legal control protocols for absolute macroeconomic immunity.'
    },
    {
      id: '02',
      icon: <Workflow className="w-5 h-5 text-[#0B1B3D]/70" />,
      title: isRo ? 'Optimizare Sistemică' : 'Systemic Optimization',
      text: isRo
        ? 'Restructurăm operațional subsidiarele și alocăm capitalul de lucru prin fuziuni și achiziții (M&A) cu maxim de precizie.'
        : 'We restructure subsidiaries operationally and allocate working capital through highly precise mergers & acquisitions (M&A).'
    },
    {
      id: '03',
      icon: <GraduationCap className="w-5 h-5 text-[#0B1B3D]/70" />,
      title: isRo ? 'Capital Uman de Elită' : 'Elite Human Capital',
      text: isRo
        ? 'Formăm următoarea generație de lideri C-Suite în academii corporative specializate, protejând moștenirea de business.'
        : 'We train the next generation of C-Suite leaders in specialized corporate academies, safeguarding our business legacy.'
    }
  ];

  const focusLabel = isRo ? 'Focus Corporativ:' : 'Corporate Focus:';

  return (
    <div 
      className="min-h-screen bg-ice-marble text-[#0B1B3D] selection:bg-[#0B1B3D] selection:text-white overflow-hidden"
      itemScope
      itemType="https://schema.org/CollectionPage"
    >
      {/* Premium Hero Section with elegant cinematic overlays */}
      <section className="relative bg-[#050D1D] text-[#FAF6F0] pt-[140px] pb-16 sm:pt-[170px] sm:pb-28 md:pt-[240px] md:pb-[160px] px-6 border-b border-white/5 overflow-hidden">
        {/* Background image */}
        <img 
          src="https://i.imgur.com/ytLzc33.png" 
          alt="Management strategic background"
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
              <span>{isRo ? 'Management Strategic & Servicii' : 'Governance & Finance'}</span>
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
              {isRo ? 'INTRODUCEREA PREȘEDINTELUI EXECUTIV' : 'EXECUTIVE PRESIDENT\'S INTRODUCTION'}
            </span>
            <p className="font-sans font-light text-slate-700 text-sm sm:text-base md:text-lg leading-relaxed">
              {introText}
            </p>
          </div>
        </div>

        {/* Narrative Pillars Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24 sm:mb-32">
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

        {/* Divisions Section */}
        <div className="border-t border-[#0B1B3D]/10 pt-16 sm:pt-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-2xl mx-auto mb-16"
          >
            <span className="font-mono text-[9px] tracking-[0.25em] text-[#0B1B3D]/50 uppercase block mb-2 font-bold">
              {isRo ? 'Structura Pilonului II' : 'Structure of Pillar II'}
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#0B1B3D] uppercase tracking-wider">
              {isRo ? 'DIVIZII DE GUVERNANȚĂ & SERVICII' : 'GOVERNANCE & SUPPORT DIVISIONS'}
            </h2>
            <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-[#0B1B3D]/30 to-transparent mx-auto mt-4"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {governanceDivisions.map((vertical, index) => (
              <motion.div
                key={vertical.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (index % 3) * 0.08, duration: 0.5 }}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className="group relative bg-white border border-[#0B1B3D]/10 hover:border-[#0B1B3D]/30 p-8 rounded-xl shadow-[0_4px_20px_rgba(11,27,61,0.01)] hover:shadow-[0_12px_45px_rgba(11,27,61,0.05)] transition-all duration-300 flex flex-col justify-between"
              >
                {/* Subtle top indicator bar */}
                <div className="absolute top-0 left-0 w-full h-[3px] bg-transparent group-hover:bg-[#0B1B3D] transition-all duration-300 rounded-t-xl"></div>
                
                <div>
                  <div className="flex justify-between items-start mb-6">
                    <div className="p-3 bg-[#0B1B3D]/5 group-hover:bg-[#0B1B3D]/10 transition-colors rounded-lg">
                      {getIcon(vertical.iconName)}
                    </div>
                  </div>

                  <h3 className="font-serif text-base sm:text-lg font-bold text-[#0B1B3D] mb-4 tracking-tight leading-snug group-hover:text-sky-900 transition-colors duration-200 min-h-[48px]">
                    {isRo ? vertical.titleRo : vertical.titleEn}
                  </h3>

                  <div className="h-[1px] w-8 bg-slate-100 group-hover:w-16 group-hover:bg-[#A2D2FF] transition-all duration-500 mb-6"></div>
                </div>

                <div className="space-y-4 mt-auto">
                  <div className="space-y-1">
                    <span className="font-mono text-[8px] tracking-[0.18em] text-slate-400 uppercase font-semibold block">
                      {focusLabel}
                    </span>
                    <p className="font-sans font-light text-xs sm:text-[0.82rem] text-slate-700 leading-relaxed text-left">
                      {isRo ? vertical.focusRo : vertical.focusEn}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Institutional Call To Action */}
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
                {isRo ? 'CONTACT STRATEGIC' : 'STRATEGIC PARTNERSHIP CONTACT'}
              </span>
              
              <h2 className="font-serif text-2xl sm:text-3xl font-semibold mb-6 tracking-wide leading-tight uppercase">
                {isRo ? 'Inițiază o Alianță de Guvernanță' : 'Initiate a Governance Alliance'}
              </h2>

              <p className="font-sans font-light text-slate-300 text-sm sm:text-base md:text-lg mb-10 leading-relaxed">
                {isRo
                  ? 'Pentru a trimite o solicitare de alocare de capital, oferte M&A sau consultanță strategică executivă la cel mai înalt nivel, contactați Consiliul de Administrație al Președintelui la adresa relations@ragnareliteholding.com.'
                  : 'To submit a capital allocation request, M&A proposals, or strategic executive consultancy inquiries at the highest level, contact the President\'s Governing Board at relations@ragnareliteholding.com.'}
              </p>

              <motion.a
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                href="mailto:relations@ragnareliteholding.com"
                className="inline-flex items-center gap-3 bg-[#FAF6F0] text-[#050D1D] hover:bg-[#FAF6F0]/90 font-mono text-xs tracking-widest uppercase py-4 px-8 rounded-sm font-semibold shadow-lg transition-all duration-300 border border-white/10"
              >
                <span>{isRo ? 'Contactează Consiliul' : 'Contact the Board'}</span>
                <ArrowRight className="w-4 h-4 text-[#050D1D]" />
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
