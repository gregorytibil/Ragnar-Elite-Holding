import { motion } from 'motion/react';
import { Language } from '../types';
import { 
  TrendingUp, 
  Briefcase, 
  Landmark, 
  BarChart3, 
  Users, 
  Building2, 
  Compass, 
  HardHat, 
  ClipboardCheck, 
  Cpu, 
  Zap, 
  Truck, 
  Gem, 
  Shield, 
  Activity, 
  Leaf, 
  GraduationCap, 
  Package, 
  Sparkles,
  Mail,
  ArrowRight,
  Handshake,
  Globe,
  ShieldCheck
} from 'lucide-react';

interface PartnershipVertical {
  id: string;
  iconName: string;
  titleEn: string;
  titleRo: string;
  focusEn: string;
  focusRo: string;
  allianceEn: string;
  allianceRo: string;
}

const partnershipVerticals: PartnershipVertical[] = [
  {
    id: '01',
    iconName: 'TrendingUp',
    titleEn: 'Private Equity & Venture Capital Partners',
    titleRo: 'Parteneri de Private Equity & Venture Capital',
    focusEn: 'Co-investment syndicates, institutional capital pools, and high-yield equity acquisitions.',
    focusRo: 'Sindicate de co-investiții, grupuri de capital instituțional și achiziții de acțiuni cu randament ridicat.',
    allianceEn: 'Sovereign wealth funds, family offices, and private equity placement networks.',
    allianceRo: 'Fonduri suverane de investiții, birouri de familie (family office) și rețele de plasament de capital privat.'
  },
  {
    id: '02',
    iconName: 'Briefcase',
    titleEn: 'Mergers & Acquisitions (M&A) Partners',
    titleRo: 'Parteneri de Fuziuni & Achiziții (M&A)',
    focusEn: 'Joint cross-border corporate transactions, target identification, and global subsidiary integration.',
    focusRo: 'Tranzacții corporative transfrontaliere comune, identificarea companiilor țintă și integrarea subsidiarelor globale.',
    allianceEn: 'International investment banks, corporate law networks, and transaction advisors.',
    allianceRo: 'Bănci internaționale de investiții, rețele de drept corporativ și consultanți în tranzacții.'
  },
  {
    id: '03',
    iconName: 'Landmark',
    titleEn: 'Global Asset & Wealth Management Partners',
    titleRo: 'Parteneri de Asset & Wealth Management Global',
    focusEn: 'Multi-asset discretionary wealth preservation, physical bullion trading, and capital market derivatives.',
    focusRo: 'Conservarea discreționară a averii multi-active, tranzacționarea de lingouri fizice și instrumente financiare derivate pe piețele de capital.',
    allianceEn: 'Ultra-High-Net-Worth Individuals (UHNWIs), liquidity providers, and gold refineries.',
    allianceRo: 'Persoane cu averi ultra-ridicate (UHNWIs), deținători de lichidități și rafinării de aur.'
  },
  {
    id: '04',
    iconName: 'BarChart3',
    titleEn: 'Corporate Accounting & Financial Auditing Partners',
    titleRo: 'Parteneri de Contabilitate Corporativă & Audit Financiar',
    focusEn: 'Certified institutional auditing, complex tax optimization, and cross-border fiscal compliance.',
    focusRo: 'Audit instituțional certificat, optimizare fiscală complexă și conformitate fiscală transfrontalieră.',
    allianceEn: 'Tier-1 international accounting networks and corporate tax advisory boards.',
    allianceRo: 'Rețele internaționale de contabilitate de nivel 1 și consilii consultative de fiscalitate corporativă.'
  },
  {
    id: '05',
    iconName: 'Users',
    titleEn: 'Strategic Executive Consultancy Partners',
    titleRo: 'Parteneri de Consultanță Strategică Executivă',
    focusEn: 'Joint corporate restructuring frameworks, operational efficiency design, and profit optimization.',
    focusRo: 'Cadre comune de restructurare corporativă, design al eficienței operaționale și optimizare a profitului.',
    allianceEn: 'Corporate turnaround management networks and institutional risk advisors.',
    allianceRo: 'Rețele de management al redresării corporative și consilieri de risc instituțional.'
  },
  {
    id: '06',
    iconName: 'Building2',
    titleEn: 'Real Estate & Investment Property Partners',
    titleRo: 'Parteneri Imobiliari & Proprietăți de Investiții',
    focusEn: 'Capital allocation and asset management in Class A commercial offices, luxury hospitality, and high-end retail.',
    focusRo: 'Alocarea capitalului și managementul activelor în birouri comerciale clasa A, ospitalitate de lux și retail de top.',
    allianceEn: 'Real Estate Investment Trusts (REITs), premium hotel operators, and land developers.',
    allianceRo: 'Trusturi de investiții imobiliare (REIT-uri), operatori hotelieri premium și dezvoltatori imobiliari.'
  },
  {
    id: '07',
    iconName: 'Compass',
    titleEn: 'Architecture & Conceptual Design Partners',
    titleRo: 'Parteneri de Arhitectură & Proiectare Conceptuală',
    focusEn: 'Architectural master planning, structural blueprinting, and innovative conceptual designs for landmarks.',
    focusRo: 'Master planning arhitectural, planuri structurale și designuri conceptuale inovatoare pentru repere emblematice.',
    allianceEn: 'Award-winning architectural firms, urban planning committees, and structural engineering groups.',
    allianceRo: 'Firme de arhitectură premiate, comitete de planificare urbană și grupuri de inginerie structurală.'
  },
  {
    id: '08',
    iconName: 'HardHat',
    titleEn: 'Construction & Infrastructure Development Partners',
    titleRo: 'Parteneri de Construcții & Dezvoltare Infrastructură',
    focusEn: 'Turnkey execution, civil engineering, industrial facilities, and heavy infrastructure project delivery.',
    focusRo: 'Execuție la cheie, inginerie civilă, facilități industriale și livrarea de proiecte mari de infrastructură.',
    allianceEn: 'EPC contractors, municipal development authorities, and public infrastructure syndicates.',
    allianceRo: 'Contractori EPC, autorități municipale de dezvoltare și sindicate de infrastructură publică.'
  },
  {
    id: '09',
    iconName: 'ClipboardCheck',
    titleEn: 'Project Management & Technical Supervision Partners',
    titleRo: 'Parteneri de Project Management & Supervizare Tehnică',
    focusEn: 'Site engineering, strict technical auditing, cost control, and rigorous construction quality assurance.',
    focusRo: 'Inginerie de șantier, audit tehnic riguros, controlul costurilor și asigurarea strictă a calității construcțiilor.',
    allianceEn: 'Independent engineering auditors and certified construction supervision bodies.',
    allianceRo: 'Auditori de inginerie independenți și organisme certificate de supraveghere a construcțiilor.'
  },
  {
    id: '10',
    iconName: 'Cpu',
    titleEn: 'IT, Technology & Cybersecurity Partners',
    titleRo: 'Parteneri de IT, Tehnologie & Securitate Cibernetică',
    focusEn: 'Advanced enterprise IT infrastructure, secure software engineering, and global data threat mitigation.',
    focusRo: 'Infrastructură IT enterprise avansată, inginerie software securizată și atenuarea globală a amenințărilor la adresa datelor.',
    allianceEn: 'Tier-1 data center operators, enterprise software providers, and sovereign-grade cybersecurity networks.',
    allianceRo: 'Operatori de centre de date de nivel 1, furnizori de software enterprise și rețele de securitate cibernetică de grad suveran.'
  },
  {
    id: '11',
    iconName: 'Zap',
    titleEn: 'Energy, Electricity & Renewable Resources Partners',
    titleRo: 'Parteneri de Energie, Electricitate & Resurse Regenerabile',
    focusEn: 'Utility-scale solar/wind plant development, electrical grid management, and green energy operations.',
    focusRo: 'Dezvoltarea de centrale solare/eoliene la scară de utilități, managementul rețelei electrice și operațiuni cu energie verde.',
    allianceEn: 'National electricity grid operators, renewable energy IPPs, and clean-tech consortiums.',
    allianceRo: 'Operatori naționali de rețele electrice, IPP-uri de energie regenerabilă și consorții de tehnologii curate.'
  },
  {
    id: '12',
    iconName: 'Truck',
    titleEn: 'Transport & Global Logistics Partners',
    titleRo: 'Parteneri de Transport & Logistică Globală',
    focusEn: 'Multi-modal cargo networks, major supply chain routing, and premium warehouse hub fulfillment.',
    focusRo: 'Rețele de transport multimodal de mărfuri, rutarea marilor lanțuri de aprovizionare și onorarea stocurilor în hub-uri de depozitare premium.',
    allianceEn: 'Global freight forwarders, commercial shipping lines, and automated supply chain operators.',
    allianceRo: 'Expeditori globali de mărfuri, linii maritime comerciale și operatori de lanțuri de aprovizionare automatizate.'
  },
  {
    id: '13',
    iconName: 'Gem',
    titleEn: 'Mining, Natural Resources & Precious Metals Partners',
    titleRo: 'Parteneri de Exploatare Minieră, Resurse Naturale & Metale Prețioase',
    focusEn: 'Strategic commodity exploration, extraction operations, and global trading of gold, silver, and industrial metals.',
    focusRo: 'Explorarea strategică a mărfurilor, operațiuni de extracție și tranzacționarea globală a aurului, argintului și metalelor industriale.',
    allianceEn: 'Geological exploration corporations, bulk metal traders, and commodity exchanges.',
    allianceRo: 'Corporații de explorare geologică, comercianți de metale în vrac și burse de mărfuri.'
  },
  {
    id: '14',
    iconName: 'Shield',
    titleEn: 'Aerospace, Aviation & Marine Defense Partners',
    titleRo: 'Parteneri de Industrie Aerospațială, Aviație & Apărare Marină',
    focusEn: 'High-tech engineering, advanced manufacturing, and turnkey assembly of aircraft, marine vessels, and UAVs.',
    focusRo: 'Inginerie de înaltă tehnologie, producție avansată și asamblare la cheie de aeronave, nave maritime și UAV-uri.',
    allianceEn: 'Aerospace components manufacturers, national defense sectors, and marine engineering shipyards.',
    allianceRo: 'Producători de componente aerospațiale, sectoare naționale de apărare și șantiere navale de inginerie marină.'
  },
  {
    id: '15',
    iconName: 'Activity',
    titleEn: 'Healthcare & Medical Biotechnology Partners',
    titleRo: 'Parteneri de Sănătate & Biotehnologie Medicală',
    focusEn: 'Capital investments in private medical clinics, clinical research labs, and next-generation medical software.',
    focusRo: 'Investiții de capital în clinici medicale private, laboratoare de cercetare clinică și software medical de ultimă generație.',
    allianceEn: 'Bio-pharmaceutical corporations, private hospital networks, and MedTech software innovators.',
    allianceRo: 'Corporații bio-farmaceutice, rețele de spitale private și inovatori software MedTech.'
  },
  {
    id: '16',
    iconName: 'Leaf',
    titleEn: 'Sustainable Agriculture & Food Production Partners',
    titleRo: 'Parteneri de Agricultură Sustenabilă & Producție Alimentară',
    focusEn: 'High-tech farming operations, organic processing, and supply chain distribution matching strict EU standards.',
    focusRo: 'Operațiuni agricole de înaltă tehnologie, procesare ecologică și distribuție a lanțului de aprovizionare conform standardelor stricte ale UE.',
    allianceEn: 'Precision farming technology providers, organic certified processors, and European retail chains.',
    allianceRo: 'Furnizori de tehnologie agricolă de precizie, procesatori certificați ecologic și lanțuri de retail europene.'
  },
  {
    id: '17',
    iconName: 'GraduationCap',
    titleEn: 'Executive Education & Elite Management Training Partners',
    titleRo: 'Parteneri de Educație Executivă & Instruire de Elită în Management',
    focusEn: 'Specialized corporate academies, advanced leadership programs, and strategic training for C-level management.',
    focusRo: 'Academii corporative specializate, programe de leadership avansate și instruire strategică pentru managementul de nivel C.',
    allianceEn: 'Top-tier global business schools, corporate universities, and executive education networks.',
    allianceRo: 'Școli de afaceri globale de top, universități corporative și rețele de educație executivă.'
  },
  {
    id: '18',
    iconName: 'Package',
    titleEn: 'Office Supplies & Consumables Management Partners',
    titleRo: 'Parteneri de Consumabile de Birou & Managementul Procurării',
    focusEn: 'Centralized B2B procurement, global supply networks, and just-in-time multi-location inventory fulfillment.',
    focusRo: 'Achiziții centralizate B2B, rețele globale de aprovizionare și onorarea stocurilor just-in-time în locații multiple.',
    allianceEn: 'Large-scale enterprise buyers, corporate office networks, and sustainable paper manufacturers.',
    allianceRo: 'Cumpărători comerciali la scară largă, rețele de birouri corporative și producători de hârtie de înaltă calitate.'
  },
  {
    id: '19',
    iconName: 'Sparkles',
    titleEn: 'Commercial Cleaning & Environmental Sanitation Partners',
    titleRo: 'Parteneri de Curățenie Comercială & Igienizare Ecologică',
    focusEn: 'Certified industrial sanitation, specialized medical facility sterilization, and premium commercial real estate maintenance.',
    focusRo: 'Igienizare industrială certificată, sterilizare specializată a facilităților medicale și întreținere premium a imobilelor comerciale clasa A.',
    allianceEn: 'Healthcare facilities, industrial complexes, and Class-A commercial property managers.',
    allianceRo: 'Facilități de asistență medicală, complexe industriale și administratori de proprietăți comerciale de clasa A.'
  }
];

const getIcon = (name: string) => {
  switch (name) {
    case 'TrendingUp': return <TrendingUp className="w-5 h-5 text-[#0B1B3D]/70 group-hover:text-sky-600 transition-colors duration-300" />;
    case 'Briefcase': return <Briefcase className="w-5 h-5 text-[#0B1B3D]/70 group-hover:text-sky-600 transition-colors duration-300" />;
    case 'Landmark': return <Landmark className="w-5 h-5 text-[#0B1B3D]/70 group-hover:text-sky-600 transition-colors duration-300" />;
    case 'BarChart3': return <BarChart3 className="w-5 h-5 text-[#0B1B3D]/70 group-hover:text-sky-600 transition-colors duration-300" />;
    case 'Users': return <Users className="w-5 h-5 text-[#0B1B3D]/70 group-hover:text-sky-600 transition-colors duration-300" />;
    case 'Building2': return <Building2 className="w-5 h-5 text-[#0B1B3D]/70 group-hover:text-sky-600 transition-colors duration-300" />;
    case 'Compass': return <Compass className="w-5 h-5 text-[#0B1B3D]/70 group-hover:text-sky-600 transition-colors duration-300" />;
    case 'HardHat': return <HardHat className="w-5 h-5 text-[#0B1B3D]/70 group-hover:text-sky-600 transition-colors duration-300" />;
    case 'ClipboardCheck': return <ClipboardCheck className="w-5 h-5 text-[#0B1B3D]/70 group-hover:text-sky-600 transition-colors duration-300" />;
    case 'Cpu': return <Cpu className="w-5 h-5 text-[#0B1B3D]/70 group-hover:text-sky-600 transition-colors duration-300" />;
    case 'Zap': return <Zap className="w-5 h-5 text-[#0B1B3D]/70 group-hover:text-sky-600 transition-colors duration-300" />;
    case 'Truck': return <Truck className="w-5 h-5 text-[#0B1B3D]/70 group-hover:text-sky-600 transition-colors duration-300" />;
    case 'Gem': return <Gem className="w-5 h-5 text-[#0B1B3D]/70 group-hover:text-sky-600 transition-colors duration-300" />;
    case 'Shield': return <Shield className="w-5 h-5 text-[#0B1B3D]/70 group-hover:text-sky-600 transition-colors duration-300" />;
    case 'Activity': return <Activity className="w-5 h-5 text-[#0B1B3D]/70 group-hover:text-sky-600 transition-colors duration-300" />;
    case 'Leaf': return <Leaf className="w-5 h-5 text-[#0B1B3D]/70 group-hover:text-sky-600 transition-colors duration-300" />;
    case 'GraduationCap': return <GraduationCap className="w-5 h-5 text-[#0B1B3D]/70 group-hover:text-sky-600 transition-colors duration-300" />;
    case 'Package': return <Package className="w-5 h-5 text-[#0B1B3D]/70 group-hover:text-sky-600 transition-colors duration-300" />;
    case 'Sparkles': return <Sparkles className="w-5 h-5 text-[#0B1B3D]/70 group-hover:text-sky-600 transition-colors duration-300" />;
    default: return <Handshake className="w-5 h-5 text-[#0B1B3D]/70 group-hover:text-sky-600 transition-colors duration-300" />;
  }
};

interface PartnersViewProps {
  currentLang: Language;
}

export default function PartnersView({ currentLang }: PartnersViewProps) {
  const isRo = currentLang === 'ro';

  const titleText = isRo 
    ? 'Parteneri Strategici & Alianțe Instituționale' 
    : 'Strategic Partners & Institutional Alliances';

  const subtitleText = isRo
    ? 'Cadre de Co-Investiții în 19 Verticale Industriale'
    : 'Co-Investment Frameworks Across 19 Industrial Verticals';

  const introText = isRo
    ? 'Ragnar Elite Holding operează un ecosistem instituțional susținut de 19 divizii industriale distincte. Stabilim alianțe globale, asocieri în participațiune (joint venture) și parteneriate public-private (PPP) în fiecare sector al operațiunilor noastre. Mai jos este prezentat cadrul complet al celor 19 direcții de parteneriat, conceput pentru investitori instituționali, fonduri suverane și entități corporative de prim rang.'
    : 'Ragnar Elite Holding operates an institutional ecosystem powered by 19 distinct industrial divisions. We establish global alliances, joint ventures, and public-private partnerships (PPP) across every sector of our operations. Below is the complete framework of our 19 partner tracks, designed for institutional investors, sovereign funds, and tier-1 corporate entities.';

  const sectionPillarsTitle = isRo
    ? 'Cadre de Colaborare'
    : 'Collaboration Frameworks';

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

  const focusLabel = isRo ? 'Focus Parteneriat:' : 'Partnership Focus:';
  const allianceLabel = isRo ? 'Alianță Țintă:' : 'Target Alliance:';

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
              <span>{isRo ? 'Alianțe Strategice' : 'Strategic Alliances'}</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.8 }}
              className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#FAF6F0] tracking-[0.05em] leading-tight uppercase mb-6"
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
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8">
              <span className="font-mono text-[9px] tracking-[0.25em] text-[#0B1B3D]/50 uppercase block mb-3 font-bold">
                {isRo ? 'PREZENTARE CONTEXTUALĂ' : 'CONTEXTUAL OVERVIEW'}
              </span>
              <p className="font-sans font-light text-slate-700 text-sm sm:text-base md:text-lg leading-relaxed">
                {introText}
              </p>
            </div>
            <div className="lg:col-span-4 flex justify-center lg:justify-end">
              <div className="p-6 bg-[#FAF6F0] border border-[#0B1B3D]/5 rounded-xl text-center max-w-[280px]">
                <div className="font-serif text-5xl font-extrabold text-[#0B1B3D] mb-2">19</div>
                <div className="font-mono text-[9px] tracking-[0.2em] text-[#0B1B3D]/60 uppercase font-semibold">
                  {isRo ? 'Verticale Active' : 'Active Verticals'}
                </div>
              </div>
            </div>
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

        {/* The 19 Partnership Verticals Section */}
        <div className="border-t border-[#0B1B3D]/10 pt-16 sm:pt-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-2xl mx-auto mb-16"
          >
            <span className="font-mono text-[9px] tracking-[0.25em] text-[#0B1B3D]/50 uppercase block mb-2 font-bold">
              {isRo ? 'Structura celor 19 piloni de parteneriat' : 'The 19 Partnership Verticals'}
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-[#0B1B3D] uppercase tracking-wider">
              {isRo ? 'PILONII DE PARTENERIAT REȚEA' : 'PARTNERSHIP NETWORK VERTICALS'}
            </h2>
            <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-[#0B1B3D]/30 to-transparent mx-auto mt-4"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {partnershipVerticals.map((vertical, index) => (
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
                    <span className="font-serif text-3xl font-bold text-[#0B1B3D]/10 group-hover:text-[#0B1B3D]/25 transition-colors duration-300">
                      {vertical.id}
                    </span>
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

                  <div className="space-y-1">
                    <span className="font-mono text-[8px] tracking-[0.18em] text-slate-400 uppercase font-semibold block">
                      {allianceLabel}
                    </span>
                    <p className="font-sans font-light text-xs sm:text-[0.82rem] text-slate-600 leading-relaxed text-left">
                      {isRo ? vertical.allianceRo : vertical.allianceEn}
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
            {/* Elegant overlay graphics */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#0B1B3D]/50 to-black/40 z-1"></div>
            <div className="absolute inset-0 bg-[radial-gradient(#FAF6F0_0.5px,transparent_0.5px)] [background-size:20px_20px] opacity-[0.05] z-2"></div>
            
            <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center">
              <span className="font-mono text-[9px] tracking-[0.3em] text-[#A2D2FF] uppercase block mb-4 font-bold">
                {isRo ? 'CONTACT INSTITUȚIONAL' : 'INSTITUTIONAL CONTACT'}
              </span>
              
              <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-semibold mb-6 tracking-wide leading-tight uppercase">
                {isRo ? 'Inițiază o Alianță Strategică' : 'Initiate an Institutional Alliance'}
              </h2>

              <p className="font-sans font-light text-slate-300 text-sm sm:text-base md:text-lg mb-10 leading-relaxed">
                {isRo
                  ? 'Pentru a solicita o sinteză completă de joint-venture sau pentru a trimite o propunere de parteneriat instituțional pentru oricare dintre cele 19 divizii, contactați Consiliul nostru de Relații Corporative la adresa relations@ragnareliteholding.com.'
                  : 'To request a comprehensive joint-venture brief or submit an institutional partner proposal for any of the 19 divisions, contact our Corporate Relations Board at relations@ragnareliteholding.com.'}
              </p>

              <motion.a
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                href="mailto:relations@ragnareliteholding.com"
                className="inline-flex items-center gap-3 bg-[#FAF6F0] text-[#050D1D] hover:bg-[#FAF6F0]/90 font-mono text-xs tracking-widest uppercase py-4 px-8 rounded-sm font-semibold shadow-lg transition-all duration-300 border border-white/10"
              >
                <span>{isRo ? 'Inițiază Contactul Instituțional' : 'Initiate Institutional Contact'}</span>
                <ArrowRight className="w-4 h-4 text-[#050D1D]" />
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
