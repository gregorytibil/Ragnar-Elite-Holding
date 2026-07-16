import { motion } from 'motion/react';
import { Language } from '../types';
import { 
  Shield, 
  Building2, 
  Compass, 
  HardHat, 
  Zap, 
  Gem, 
  Activity, 
  Leaf, 
  Truck,
  ArrowRight,
  Globe,
  Gauge,
  Cpu
} from 'lucide-react';

interface DivisionItem {
  id: string;
  iconName: string;
  titleEn: string;
  titleRo: string;
  focusEn: string;
  focusRo: string;
}

const coreDivisions: DivisionItem[] = [
  {
    id: '01',
    iconName: 'Shield',
    titleEn: 'Aerospace, Aviation & Marine Defense Division',
    titleRo: 'Divizia de Industrie Aerospațială, Aviație & Apărare Marină',
    focusEn: 'High-tech engineering, advanced manufacturing, and turnkey assembly of commercial aircraft, premium marine vessels, unmanned aerial systems (UAVs), and defense sector transit platforms.',
    focusRo: 'Inginerie de înaltă tehnologie, producție avansată și asamblare la cheie de aeronave comerciale, nave maritime premium, sisteme aeriene fără echipaj (UAV) și platforme de tranzit din sectorul de apărare.'
  },
  {
    id: '02',
    iconName: 'Building2',
    titleEn: 'Real Estate & Investment Property Division',
    titleRo: 'Divizia Imobiliară & Proprietăți de Investiții',
    focusEn: 'Capital allocation and asset management in premium commercial offices, luxury hospitality, and high-end retail assets.',
    focusRo: 'Alocarea capitalului și managementul activelor în birouri comerciale premium, ospitalitate de lux și retail de top.'
  },
  {
    id: '03',
    iconName: 'Compass',
    titleEn: 'Architecture & Conceptual Design Division',
    titleRo: 'Divizia de Arhitectură & Proiectare Conceptuală',
    focusEn: 'Architectural master planning, structural blueprinting, and innovative conceptual design for landmarks.',
    focusRo: 'Master planning arhitectural, planuri structurale și designuri conceptuale inovatoare pentru repere emblematice.'
  },
  {
    id: '04',
    iconName: 'HardHat',
    titleEn: 'Construction & Infrastructure Development Division',
    titleRo: 'Divizia de Construcții & Dezvoltare Infrastructură',
    focusEn: 'Turnkey execution, civil engineering, industrial facilities, and heavy infrastructure project delivery.',
    focusRo: 'Execuție la cheie, inginerie civilă, facilități industriale și livrarea de proiecte mari de infrastructură.'
  },
  {
    id: '05',
    iconName: 'Zap',
    titleEn: 'Energy, Electricity & Renewable Resources Division',
    titleRo: 'Divizia de Energie, Electricitate & Resurse Regenerabile',
    focusEn: 'Power plant development, electrical grid management, utility operations, and green energy (solar/wind) initiatives.',
    focusRo: 'Dezvoltarea de centrale electrice, managementul rețelei electrice, operațiuni de utilități și inițiative de energie verde (solară/eoliană).'
  },
  {
    id: '06',
    iconName: 'Gem',
    titleEn: 'Mining, Natural Resources & Precious Metals Division',
    titleRo: 'Divizia de Exploatare Minieră, Resurse Naturale & Metale Prețioase',
    focusEn: 'Strategic commodity exploration, extraction operations, and global trading of gold, silver, and industrial metals.',
    focusRo: 'Explorarea strategică a mărfurilor, operațiuni de extracție și tranzacționarea globală a aurului, argintului și metalelor industriale.'
  },
  {
    id: '07',
    iconName: 'Activity',
    titleEn: 'Healthcare & Medical Biotechnology Division',
    titleRo: 'Divizia de Sănătate & Biotehnologie Medicală',
    focusEn: 'Capital investments in private medical clinics, clinical research labs, and next-generation medical software.',
    focusRo: 'Investiții de capital în clinici medicale private, laboratoare de cercetare clinică și software medical de ultimă generație.'
  },
  {
    id: '08',
    iconName: 'Leaf',
    titleEn: 'Sustainable Agriculture & Food Production Division',
    titleRo: 'Divizia de Agricultură Sustenabilă & Producție Alimentară',
    focusEn: 'High-tech farming operations, organic processing, and supply chain distribution matching strict EU standards.',
    focusRo: 'Operațiuni agricole de înaltă tehnologie, procesare ecologică și distribuție a lanțului de aprovizionare conform standardelor stricte ale UE.'
  },
  {
    id: '09',
    iconName: 'Truck',
    titleEn: 'Transport & Global Logistics Division',
    titleRo: 'Divizia de Transport & Logistică Globală',
    focusEn: 'Multi-modal cargo networks, major supply chain routing, and premium warehouse hub fulfillment operations.',
    focusRo: 'Rețele de transport multimodal de mărfuri, rutarea marilor lanțuri de aprovizionare și operațiuni de onorare a stocurilor în hub-uri de depozitare premium.'
  }
];

const getIcon = (name: string) => {
  const iconClass = "w-5 h-5 text-[#0B1B3D]/70 group-hover:text-sky-600 transition-colors duration-300";
  switch (name) {
    case 'Shield': return <Shield className={iconClass} />;
    case 'Building2': return <Building2 className={iconClass} />;
    case 'Compass': return <Compass className={iconClass} />;
    case 'HardHat': return <HardHat className={iconClass} />;
    case 'Zap': return <Zap className={iconClass} />;
    case 'Gem': return <Gem className={iconClass} />;
    case 'Activity': return <Activity className={iconClass} />;
    case 'Leaf': return <Leaf className={iconClass} />;
    case 'Truck': return <Truck className={iconClass} />;
    default: return <Cpu className={iconClass} />;
  }
};

interface DivisionsCoreViewProps {
  currentLang: Language;
}

export default function DivisionsCoreView({ currentLang }: DivisionsCoreViewProps) {
  const isRo = currentLang === 'ro';

  const titleText = isRo 
    ? 'Divizii Industriale, Infrastructură & Tehnologii Strategice' 
    : 'Core Operations & Heavy Industries';

  const subtitleText = isRo
    ? 'Producție de active tangibile, infrastructură critică și resurse globale'
    : 'Tangible asset production, critical infrastructure, and global resource operations';

  const introText = isRo
    ? '„Pilonul operațiunilor de bază reprezintă forța motrice tangibilă a Ragnar Elite Holding. Prin intermediul acestor divizii, transformăm viziunea strategică în infrastructură critică, securizăm resurse globale de înaltă valoare și dezvoltăm tehnologii de apărare avansate. Controlul direct asupra întregului lanț de producție ne garantează independența operațională și reziliența în fața oricăror provocări macroeconomice.”'
    : '“The core operations pillar represents the tangible driving force of Ragnar Elite Holding. Through these divisions, we transform strategic vision into critical infrastructure, secure high-value global resources, and develop advanced defense technologies. Direct control over the entire production chain guarantees our operational independence and resilience in the face of any macroeconomic challenges.”';

  const sectionPillarsTitle = isRo
    ? 'Pilonii Execuției Industriale'
    : 'Industrial Execution Pillars';

  const pillars = [
    {
      id: '01',
      icon: <Globe className="w-5 h-5 text-[#0B1B3D]/70" />,
      title: isRo ? 'Active Tangibile' : 'Tangible Assets',
      text: isRo
        ? 'Canalizăm capitalul în active fizice cu valoare intrinsecă ridicată și potențial masiv de scalare pe piețele internaționale.'
        : 'We channel capital into physical assets with high intrinsic value and massive scaling potential in international markets.'
    },
    {
      id: '02',
      icon: <Gauge className="w-5 h-5 text-[#0B1B3D]/70" />,
      title: isRo ? 'Infrastructură Critică' : 'Critical Infrastructure',
      text: isRo
        ? 'Dezvoltăm rețele logistice, energetice și civile indispensabile funcționării și independenței sistemelor macroeconomice globale.'
        : 'We develop logistical, energetic, and civil networks indispensable to the functioning and independence of global macroeconomic systems.'
    },
    {
      id: '03',
      icon: <Shield className="w-5 h-5 text-[#0B1B3D]/70" />,
      title: isRo ? 'Securitate Strategică' : 'Strategic Security',
      text: isRo
        ? 'Ingineria avansată de apărare și tehnologiile suverane reprezintă scutul nostru de excelență în protejarea frontierelor comerciale.'
        : 'Advanced defense engineering and sovereign technologies represent our shield of excellence in protecting commercial frontiers.'
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
              <span>{isRo ? 'Divizii Industriale' : 'Core Operations'}</span>
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
              {isRo ? 'Structura Pilonului I' : 'Structure of Pillar I'}
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#0B1B3D] uppercase tracking-wider">
              {isRo ? 'DIVIZII INDUSTRIALE ACTIVE' : 'ACTIVE INDUSTRIAL DIVISIONS'}
            </h2>
            <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-[#0B1B3D]/30 to-transparent mx-auto mt-4"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {coreDivisions.map((vertical, index) => (
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
                {isRo ? 'CONTACT INDUSTRIAL' : 'INDUSTRIAL DEPLOYMENT CONTACT'}
              </span>
              
              <h2 className="font-serif text-2xl sm:text-3xl font-semibold mb-6 tracking-wide leading-tight uppercase">
                {isRo ? 'Inițiază o Alianță Strategică' : 'Initiate an Industrial Alliance'}
              </h2>

              <p className="font-sans font-light text-slate-300 text-sm sm:text-base md:text-lg mb-10 leading-relaxed">
                {isRo
                  ? 'Pentru a solicita o sinteză completă de co-investiție sau pentru a trimite o propunere de parteneriat industrial pentru oricare dintre diviziile noastre core, contactați Consiliul de Relații Industriale la adresa relations@ragnareliteholding.com.'
                  : 'To request a comprehensive co-investment brief or submit an industrial partner proposal for any of our core divisions, contact our Industrial Relations Board at relations@ragnareliteholding.com.'}
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
