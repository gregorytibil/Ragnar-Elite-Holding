export interface PartnerService {
  id: string;
  titleRo: string;
  titleEn: string;
  descRo: string;
  descEn: string;
  iconName: 'Shield' | 'Building' | 'Cpu' | 'Zap' | 'Briefcase' | 'Truck' | 'Compass' | 'Sparkles' | 'FileText' | 'Scale' | 'Calculator' | 'CheckCircle2';
}

export interface PartnerProfile {
  id: string;
  slug: string;
  subdomain: string;
  aliases: string[];
  nameRo: string;
  nameEn: string;
  categoryRo: string;
  categoryEn: string;
  taglineRo: string;
  taglineEn: string;
  descriptionRo: string;
  descriptionEn: string;
  extendedOverviewRo: string;
  extendedOverviewEn: string;
  contactEmail: string;
  heroBgImage: string;
  accentColor: string;
  stats: {
    labelRo: string;
    labelEn: string;
    value: string;
  }[];
  services: PartnerService[];
}

export const PARTNERS_DATA: PartnerProfile[] = [
  {
    id: 'elite-capital-holding',
    slug: 'elite-capital-holding',
    subdomain: 'elitecapital.ragnareliteholding.com',
    aliases: ['elitecapital', 'elite-capital-holding', 'capital', 'holding-financiar'],
    nameRo: 'Elite Capital Holding',
    nameEn: 'Elite Capital Holding',
    categoryRo: 'Administrare Investiții, Participații & Holding Financiar',
    categoryEn: 'Investment Management, Equity Participations & Financial Holding',
    taglineRo: 'Administrarea investițiilor, gestionarea participațiilor în companii și activități de holding financiar.',
    taglineEn: 'Investment management, corporate equity participations, and financial holding operations.',
    descriptionRo: 'Elite Capital Holding se ocupă cu administrarea investițiilor strategice, gestionarea participațiilor de capital în companii și coordonarea activităților de holding financiar.',
    descriptionEn: 'Elite Capital Holding specializes in strategic investment management, corporate equity participations, and managing financial holding operations.',
    extendedOverviewRo: 'Ca divizie centrală de gestiune capital, Elite Capital Holding asigură administrarea investițiilor, gestionarea eficientă a participațiilor în companii partenere și derularea activităților de holding financiar la cele mai înalte standarde de guvernanță corporativă.',
    extendedOverviewEn: 'As a core capital management entity, Elite Capital Holding ensures professional investment administration, active management of corporate equity holdings, and financial holding operations under high standards of governance.',
    contactEmail: 'contact@ragnareliteholding.com',
    heroBgImage: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=1920&q=80',
    accentColor: '#38BDF8',
    stats: [
      { labelRo: 'Domeniu Principal', labelEn: 'Core Domain', value: 'Holding Financiar' },
      { labelRo: 'Portofoliu Active', labelEn: 'Asset Portfolio', value: 'Participații în Companii' },
      { labelRo: 'Profil Operativ', labelEn: 'Operational Profile', value: 'Administrare Investiții' },
      { labelRo: 'Grup Afiliat', labelEn: 'Group Affiliation', value: 'Ragnar Elite Capital' }
    ],
    services: [
      {
        id: 's1',
        titleRo: 'Administrare Investiții Strategice',
        titleEn: 'Strategic Investment Management',
        descRo: 'Gestiunea profesionistă a portofoliilor de investiții și alocarea capitalului în active cu valoare adăugată.',
        descEn: 'Professional management of investment portfolios and strategic capital allocation.',
        iconName: 'Briefcase'
      },
      {
        id: 's2',
        titleRo: 'Gestionarea Participațiilor în Companii',
        titleEn: 'Equity Participations & Corporate Governance',
        descRo: 'Administrarea participațiilor sociale și de capital în societățile comerciale din portofoliu.',
        descEn: 'Active oversight and management of corporate equity holdings across portfolio companies.',
        iconName: 'Building'
      },
      {
        id: 's3',
        titleRo: 'Activități de Holding Financiar',
        titleEn: 'Financial Holding Operations',
        descRo: 'Consolidare financiară, structurare de capital și coordonarea guvernanței corporative la nivel de grup.',
        descEn: 'Financial consolidation, capital structuring, and corporate governance coordination.',
        iconName: 'Scale'
      },
      {
        id: 's4',
        titleRo: 'Consultanță în Fuziuni & Achiziții (M&A)',
        titleEn: 'Mergers & Acquisitions Advisory (M&A)',
        descRo: 'Analiză financiară, evaluare de risc și structurarea tranzacțiilor strategice de expansiune.',
        descEn: 'Financial analysis, risk assessment, and structuring strategic expansion transactions.',
        iconName: 'Shield'
      }
    ]
  },
  {
    id: 'studio-gilded-stars',
    slug: 'studio-gilded-stars',
    subdomain: 'gildedstars.ragnareliteholding.com',
    aliases: ['gildedstars', 'studio-gilded-stars', 'gilded-stars', 'film-production', 'entertainment'],
    nameRo: 'Studio Gilded Stars',
    nameEn: 'Studio Gilded Stars',
    categoryRo: 'Producție Film, Casting, Branding Vizual & Reprezentare Media',
    categoryEn: 'Film Production, Casting, Visual Branding & Media Representation',
    taglineRo: 'Producție de film, reclame, videoclipuri muzicale, casting global, fotografie și training pentru talente.',
    taglineEn: 'Film, commercial & music video production, global casting, talent management, photography & training.',
    descriptionRo: 'Studio Gilded Stars este o casă de producție și agenție media ce oferă producție film/reclame/videoclipuri, casting (self-tapes), fotografie profesională, reprezentare media și training pentru talente pe piețe precum Hollywood, Bollywood, Dubai, Londra, Seul, Istanbul, Nollywood și Estonia.',
    descriptionEn: 'Studio Gilded Stars is a production house and media agency delivering film/commercial/music video production, casting (self-tapes), professional photography, media representation, and talent training across markets including Hollywood, Bollywood, Dubai, London, Seoul, Istanbul, Nollywood, and Estonia.',
    extendedOverviewRo: 'Studio Gilded Stars oferă servicii de producție cinematografică și de divertisment la nivel internațional:\n\n• Film, Commercial & Music Video Production: Soluții complete de casting, realizare de probe audio-video (self-tapes), videoclipuri muzicale și reclame digitale (producție și post-producție).\n• Advertising & Media Representation: Servicii boutique de publicitate, campanii social media, influencer marketing și sinergie între branduri și talente.\n• Photography & Visual Branding: Fotografie profesională în studio pentru book-uri de talente și portofolii conforme cu standardele estetice internaționale.\n• Event & Performing Arts Support: Managementul talentelor pentru spectacole live, prezentări de modă și gale corporative.\n• Professional Development & Training: Ateliere specializate de acting și modeling pentru Fresh Faces.\n• Focus pe Piețe Strategice Globale: Furnizăm talente pentru piețe active: India (Bollywood), EAU (Dubai), SUA (Hollywood) & Canada (Hollywood North), Marea Britanie (Londra), Turcia (Istanbul), Coreea de Sud (Seul), Nigeria (Nollywood) și Estonia.',
    extendedOverviewEn: 'Studio Gilded Stars offers comprehensive film production and entertainment services worldwide:\n\n• Film, Commercial & Music Video Production: Full casting solutions and production of high-quality audition tapes (self-tapes), music videos, and digital commercials (production & post-production).\n• Advertising & Media Representation: Boutique advertising services, brand-talent synergy, influencer marketing, and social media campaigns.\n• Photography & Visual Branding: In-house professional photography for talent books and portfolios meeting international aesthetic standards.\n• Event & Performing Arts Support: Organizing and managing talent for live performances, fashion shows, and corporate galas.\n• Professional Development & Training: Specialized acting and modeling workshops for Fresh Faces entering the global market.\n• Global Strategic Market Focus: Connecting talent with key international markets: India (Bollywood), UAE (Dubai), USA (Hollywood) & Canada (Hollywood North), UK (London), Turkey (Istanbul), South Korea (Seoul), Nigeria (Nollywood), and Estonia.',
    contactEmail: 'contact@ragnareliteholding.com',
    heroBgImage: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=1920&q=80',
    accentColor: '#38BDF8',
    stats: [
      { labelRo: 'Piețe Target', labelEn: 'Target Markets', value: 'Hollywood, Bollywood, Dubai+' },
      { labelRo: 'Producție Video', labelEn: 'Video Production', value: 'Film, Reclame, Videoclipuri' },
      { labelRo: 'Servicii Casting', labelEn: 'Casting Services', value: 'Self-Tapes & Book-uri' },
      { labelRo: 'Grup Afiliat', labelEn: 'Group Division', value: 'Gilded Stars Entertainment' }
    ],
    services: [
      {
        id: 's1',
        titleRo: 'Producție Film, Reclame & Videoclipuri Muzicale',
        titleEn: 'Film, Commercial & Music Video Production',
        descRo: 'Soluții complete de casting, probe audio-video (self-tapes), videoclipuri muzicale și reclame digitale (producție & post-producție).',
        descEn: 'Full casting solutions, audition self-tapes, music videos, and digital commercial production & post-production.',
        iconName: 'Sparkles'
      },
      {
        id: 's2',
        titleRo: 'Publicitate & Reprezentare Media',
        titleEn: 'Advertising & Media Representation',
        descRo: 'Servicii boutique de publicitate, influencer marketing, campanii social media și sinergie între branduri și talente.',
        descEn: 'Boutique advertising services, influencer marketing, social media campaigns, and brand-talent synergy.',
        iconName: 'Briefcase'
      },
      {
        id: 's3',
        titleRo: 'Fotografie Profesională & Branding Vizual',
        titleEn: 'Photography & Visual Branding',
        descRo: 'Ședințe foto în studio pentru portofolii și book-uri de talente la standarde estetice internaționale.',
        descEn: 'In-house professional photography for talent books and portfolios meeting international aesthetic standards.',
        iconName: 'Sparkles'
      },
      {
        id: 's4',
        titleRo: 'Evenimente, Performing Arts & Training',
        titleEn: 'Event Support, Performing Arts & Training',
        descRo: 'Management de talente pentru spectacole live, gale și workshop-uri specializate de acting și modeling pentru Fresh Faces.',
        descEn: 'Talent management for live shows, corporate galas, and specialized acting/modeling workshops for Fresh Faces.',
        iconName: 'CheckCircle2'
      }
    ]
  },
  {
    id: 'nexus-terranova',
    slug: 'nexus-terranova',
    subdomain: 'nexusterranova.ragnareliteholding.com',
    aliases: ['nexusterranova', 'nexus-terranova', 'nexus', 'terranova', 'thailand'],
    nameRo: 'Nexus Terranova',
    nameEn: 'Nexus Terranova',
    categoryRo: 'Retail Internațional, Fashion & Electrocasnice (Thailanda)',
    categoryEn: 'International Retail, Apparel & Consumer Electronics (Thailand)',
    taglineRo: 'Comercializare îmbrăcăminte, încălțăminte, parfumuri, accesorii, electronice și electrocasnice (Lansare în Thailanda).',
    taglineEn: 'Retail of apparel, footwear, lingerie, perfumes, accessories, electronics & home appliances (Thailand Launch).',
    descriptionRo: 'Nexus Terranova este o companie modernă de retail ce comercializează îmbrăcăminte, încălțăminte, lenjerie intimă, parfumuri, accesorii, electronice și electrocasnice, având ca piață principală de lansare Thailanda.',
    descriptionEn: 'Nexus Terranova is a modern retail enterprise offering clothing, footwear, lingerie, perfumes, accessories, electronics, and home appliances, with a primary launch market in Thailand.',
    extendedOverviewRo: 'Nexus Terranova dezvoltă un concept integrat de comerț omnichannel orientat pe bunuri de consum de calitate, având sediul de operare și lansarea principală în Thailanda. Portofoliul de produse include:\n\n• Îmbrăcăminte și Încălțăminte\n• Lenjerie intimă\n• Parfumuri și produse de îngrijire personală\n• Accesorii de modă și lifestyle\n• Electronice și gadgeturi tech\n• Electrocasnice pentru locuințe moderne\n\nCu o rețea logistică eficientă și o strategie axată pe experiența clienților, Nexus Terranova aduce produse premium mai aproape de consumatorii din Asia de Sud-Est.',
    extendedOverviewEn: 'Nexus Terranova develops an integrated omnichannel retail model focused on high-quality consumer goods, with primary launch and operations centered in Thailand. Product portfolio includes:\n\n• Apparel & Footwear\n• Fine Lingerie\n• Perfumes & Fragrances\n• Fashion & Lifestyle Accessories\n• Consumer Electronics & Tech Gadgets\n• Home Electrical Appliances\n\nEquipped with swift logistics and a customer-centric retail approach, Nexus Terranova delivers curated products across Thailand and Southeast Asia.',
    contactEmail: 'contact@ragnareliteholding.com',
    heroBgImage: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1920&q=80',
    accentColor: '#38BDF8',
    stats: [
      { labelRo: 'Piață Operativă', labelEn: 'Operating Market', value: 'Thailanda (Asia de Sud-Est)' },
      { labelRo: 'Domeniu Retail', labelEn: 'Retail Scope', value: 'Fashion, Tech & Home' },
      { labelRo: 'Gama Produse', labelEn: 'Product Range', value: '7 Categorii Principale' },
      { labelRo: 'Grup Afiliat', labelEn: 'Group Division', value: 'Nexus Consumer Retail' }
    ],
    services: [
      {
        id: 's1',
        titleRo: 'Îmbrăcăminte, Încălțăminte & Lenjerie Intimă',
        titleEn: 'Apparel, Footwear & Fine Lingerie',
        descRo: 'Colecții de îmbrăcăminte contemporană, încălțăminte confortabilă și lenjerie intimă de calitate.',
        descEn: 'Contemporary clothing collections, comfortable footwear, and fine lingerie.',
        iconName: 'Briefcase'
      },
      {
        id: 's2',
        titleRo: 'Parfumuri Exclusiviste & Accesorii',
        titleEn: 'Perfumes & Fashion Accessories',
        descRo: 'Parfumuri cu arome rafinate, produse de îngrijire și accesorii de modă stilate.',
        descEn: 'Exquisite fragrances, personal care lines, and stylish fashion accessories.',
        iconName: 'Sparkles'
      },
      {
        id: 's3',
        titleRo: 'Electronice & Electrocasnice de Consum',
        titleEn: 'Consumer Electronics & Home Appliances',
        descRo: 'Echipamente electronice de ultimă generație, gadgeturi smart și electrocasnice pentru casă.',
        descEn: 'Latest consumer electronics, smart gadgets, and essential home electrical appliances.',
        iconName: 'Cpu'
      },
      {
        id: 's4',
        titleRo: 'Distribuție & Operațiuni Retail în Thailanda',
        titleEn: 'Retail Operations & Logistics in Thailand',
        descRo: 'Canale de distribuție omnichannel, magazine fizice și livrare online pe piața din Thailanda.',
        descEn: 'Omnichannel retail distribution, store management, and fast online delivery across Thailand.',
        iconName: 'Truck'
      }
    ]
  },
  {
    id: 'vexta-data',
    slug: 'vexta-data',
    subdomain: 'vextadata.ragnareliteholding.com',
    aliases: ['vextadata', 'vexta-data', 'vexta', 'it-software'],
    nameRo: 'Vexta Data',
    nameEn: 'Vexta Data',
    categoryRo: 'Software Personalizat & Servicii IT Administrate',
    categoryEn: 'Custom Software & Managed IT Services',
    taglineRo: 'Dezvoltare de software personalizat, consultanță IT, administrare sisteme și securitate cibernetică.',
    taglineEn: 'Custom software development, IT consulting, systems administration, and IT infrastructure.',
    descriptionRo: 'Vexta Data se ocupă cu dezvoltarea de software personalizat, consultanță în tehnologia informației, administrarea sistemelor informatice și furnizarea de servicii IT enterprise.',
    descriptionEn: 'Vexta Data specializes in custom software development, information technology consulting, systems engineering, and enterprise IT services.',
    extendedOverviewRo: 'Partener tehnologic de încredere pentru soluții digitale avansate. Vexta Data concepe, construiește și menține aplicații software complexe, arhitecturi Cloud securizate și infrastructuri IT critice pentru afaceri moderne, punând accent pe scalabilitate, securitate cibernetică și eficiență operațională.',
    extendedOverviewEn: 'A trusted technology partner for advanced digital solutions. Vexta Data designs, engineers, and maintains enterprise software applications, secure Cloud architectures, and mission-critical IT infrastructure for modern businesses, prioritizing scalability and cyber resilience.',
    contactEmail: 'contact@ragnareliteholding.com',
    heroBgImage: 'https://i.imgur.com/JXKRCkU.jpeg',
    accentColor: '#38BDF8',
    stats: [
      { labelRo: 'Tech Stack', labelEn: 'Tech Stack', value: 'Enterprise & Cloud' },
      { labelRo: 'Disponibilitate', labelEn: 'Uptime Guarantee', value: '99.99% SLA' },
      { labelRo: 'Securitate', labelEn: 'Security Standard', value: 'ISO/IEC 27001' },
      { labelRo: 'Portofoliu', labelEn: 'Portfolio Group', value: 'Ragnar Elite Tech' }
    ],
    services: [
      {
        id: 's1',
        titleRo: 'Dezvoltare Software Personalizat',
        titleEn: 'Custom Software Engineering',
        descRo: 'Construirea de aplicații web, mobile și platforme SaaS dedicate proceselor specifice ale companiei dumneavoastră.',
        descEn: 'Building tailor-made web, mobile applications, and SaaS platforms tailored to your core business logic.',
        iconName: 'Cpu'
      },
      {
        id: 's2',
        titleRo: 'Consultanță Tehnologică & Arhitectură IT',
        titleEn: 'IT Architecture & Strategy Advisory',
        descRo: 'Audit de sisteme, migrare în Cloud, optimizare procese digitale și selecția tehnologiilor scalabile.',
        descEn: 'Systems auditing, Cloud migration strategies, digital workflow optimization, and scalable technology roadmaps.',
        iconName: 'Compass'
      },
      {
        id: 's3',
        titleRo: 'Administrare Sisteme & Cloud Management',
        titleEn: 'Systems Administration & Managed Cloud',
        descRo: 'Monitorizare 24/7, administrare servere, rețele informatice și servicii DevOps pentru continuitate operațională.',
        descEn: '24/7 monitoring, server management, network infrastructure, and DevOps pipelines for uninterrupted operations.',
        iconName: 'Zap'
      },
      {
        id: 's4',
        titleRo: 'Securitate Cibernetică & Support IT',
        titleEn: 'Cybersecurity & Enterprise IT Support',
        descRo: 'Implementare de firewall-uri, criptare de date, audituri de securitate și asistență tehnică de nivel enterprise.',
        descEn: 'Firewall deployment, data encryption, vulnerability assessments, and dedicated enterprise IT support.',
        iconName: 'Shield'
      }
    ]
  },
  {
    id: 'urban-energetic-service',
    slug: 'urban-energetic-service',
    subdomain: 'urbanenergetic.ragnareliteholding.com',
    aliases: ['urbanenergetic', 'urban-energetic-service', 'energetic', 'urbanenergeticservice'],
    nameRo: 'Urban Energetic Service',
    nameEn: 'Urban Energetic Service',
    categoryRo: 'Infrastructură Energetică, Montaj & Mentenanță',
    categoryEn: 'Energy Infrastructure, Installation & Maintenance',
    taglineRo: 'Servicii în domeniul energetic, instalarea și mentenanța sistemelor energetice, consultanță tehnică.',
    taglineEn: 'Energy domain services, system installation, technical maintenance, and energy engineering.',
    descriptionRo: 'Urban Energetic Service se ocupă cu servicii în domeniul energetic, instalarea și mentenanța sistemelor energetice complexe, precum și consultanță tehnică pentru proiecte energetice de anvergură.',
    descriptionEn: 'Urban Energetic Service specializes in energy sector solutions, installation and maintenance of complex energy systems, and technical advisory for large-scale energy projects.',
    extendedOverviewRo: 'Lider în soluții de inginerie energetică pentru clădiri comerciale, facilități industriale și rețele urbane. Compania oferă servicii de la proiectare tehnică, instalarea de echipamente de înaltă eficiență, până la planuri de mentenanță preventivă și consultanță în optimizarea consumului energetic.',
    extendedOverviewEn: 'A leader in energy engineering solutions for commercial buildings, industrial facilities, and urban networks. The company provides end-to-end services from engineering design and installation of high-efficiency energy systems to preventive maintenance and energy consumption optimization.',
    contactEmail: 'contact@ragnareliteholding.com',
    heroBgImage: 'https://i.imgur.com/axpTkAU.jpeg',
    accentColor: '#38BDF8',
    stats: [
      { labelRo: 'Capacitate Tehnică', labelEn: 'Technical Capacity', value: 'High-Voltage & Smart Grid' },
      { labelRo: 'Standard Siguranță', labelEn: 'Safety Standard', value: 'ANRE & ISO Certified' },
      { labelRo: 'Eficiență Energetică', labelEn: 'Energy Efficiency', value: 'Maximized ROI' },
      { labelRo: 'Divizie Afiliată', labelEn: 'Affiliated Division', value: 'Urban Infrastructure' }
    ],
    services: [
      {
        id: 's1',
        titleRo: 'Instalare Sisteme Energetice & Electrice',
        titleEn: 'Energy System Installation & Wiring',
        descRo: 'Execuția lucrărilor de instalare pentru rețele electrice, posturi de transformare și surse regenerabile.',
        descEn: 'Installation of electrical networks, transformer stations, HVAC energy grids, and renewable energy integrations.',
        iconName: 'Zap'
      },
      {
        id: 's2',
        titleRo: 'Mentenanță Preventivă & Intervenții',
        titleEn: 'Preventive Maintenance & Repairs',
        descRo: 'Inspecții periodice, diagnoză termografică și servicii de intervenție rapidă pentru eliminarea avariilor.',
        descEn: 'Scheduled inspections, thermographic diagnostics, and rapid emergency intervention to prevent outages.',
        iconName: 'Building'
      },
      {
        id: 's3',
        titleRo: 'Consultanță Tehnică & Audit Energetic',
        titleEn: 'Technical Advisory & Energy Audit',
        descRo: 'Analiză privind eficiența energetică, reducerea amprentei de carbon și soluții de stocare a energiei.',
        descEn: 'Energy efficiency analysis, carbon footprint reduction strategies, and smart energy storage advisory.',
        iconName: 'Compass'
      },
      {
        id: 's4',
        titleRo: 'Modernizare & Soluții Smart Grid',
        titleEn: 'Modernization & Smart Grid Integration',
        descRo: 'Retehnologizarea instalațiilor vechi și integrarea sistemelor inteligente de monitorizare a consumului.',
        descEn: 'Retrofitted energy infrastructure and integration of automated smart metering and consumption analytics.',
        iconName: 'Cpu'
      }
    ]
  },
  {
    id: 'urban-platinum-estate',
    slug: 'urban-platinum-estate',
    subdomain: 'urbanplatinum.ragnareliteholding.com',
    aliases: ['urbanplatinum', 'urban-platinum-estate', 'urbanplatinumestate', 'imobiliare'],
    nameRo: 'Urban Platinum Estate',
    nameEn: 'Urban Platinum Estate',
    categoryRo: 'Tranzacții Imobiliare & Property Management',
    categoryEn: 'Real Estate Transactions & Asset Management',
    taglineRo: 'Tranzacții imobiliare, administrarea proprietăților, dezvoltare și investiții imobiliare premium.',
    taglineEn: 'Real estate transactions, property management, luxury developments, and capital investments.',
    descriptionRo: 'Urban Platinum Estate se ocupă cu tranzacții imobiliare, administrarea proprietăților, dezvoltare și investiții imobiliare strategice în segmentele comercial, rezidențial și industrial.',
    descriptionEn: 'Urban Platinum Estate manages high-value real estate transactions, property management, development projects, and strategic real estate investments across commercial and luxury sectors.',
    extendedOverviewRo: 'Companie de elită specializată în tranzacționarea, dezvoltarea și administrarea activelor imobiliare de valoare ridicată. Cu o viziune axată pe randament investițional și calitate arhitecturală, Urban Platinum Estate oferă soluții tailor-made pentru investitori privați, fonduri și corporații.',
    extendedOverviewEn: 'An elite firm specializing in the transaction, development, and fiduciary management of high-value property assets. With a focus on investment yield and architectural prestige, Urban Platinum Estate provides bespoke solutions for institutional and private investors.',
    contactEmail: 'contact@ragnareliteholding.com',
    heroBgImage: 'https://i.imgur.com/NITq0xR.jpeg',
    accentColor: '#38BDF8',
    stats: [
      { labelRo: 'Segment Activitate', labelEn: 'Market Segment', value: 'Prime & Commercial' },
      { labelRo: 'Garanție Management', labelEn: 'Management Guarantee', value: 'Fiduciary Care' },
      { labelRo: 'Relații Investitori', labelEn: 'Investor Network', value: 'Private & Corporate' },
      { labelRo: 'Afiliație Grup', labelEn: 'Group Affiliation', value: 'Ragnar Real Estate' }
    ],
    services: [
      {
        id: 's1',
        titleRo: 'Intermediere & Tranzacții Imobiliare',
        titleEn: 'Real Estate Brokerage & Transactions',
        descRo: 'Servicii de reprezentare exclusivă pentru achiziții, vânzări și închirieri de proprietăți comerciale și de lux.',
        descEn: 'Exclusive representation for acquisitions, sales, and leasing of high-end commercial and residential assets.',
        iconName: 'Building'
      },
      {
        id: 's2',
        titleRo: 'Administrare Proprietăți (Property Management)',
        titleEn: 'Comprehensive Property Management',
        descRo: 'Gestiune tehnică, administrativă și financiară a portofoliilor de imobile pentru maximizarea veniturilor.',
        descEn: 'Technical, administrative, and financial management of property portfolios to optimize yield.',
        iconName: 'Briefcase'
      },
      {
        id: 's3',
        titleRo: 'Dezvoltare & Investiții Imobiliare',
        titleEn: 'Real Estate Development & Investment',
        descRo: 'Identificarea terenurilor cu potențial, studii de fezabilitate și structurarea proiectelor de dezvoltare.',
        descEn: 'Land acquisition, feasibility analysis, and full-cycle development management for high-ROI projects.',
        iconName: 'Compass'
      },
      {
        id: 's4',
        titleRo: 'Evaluare Portofoliu & Asset Enhancement',
        titleEn: 'Portfolio Valuation & Asset Enhancement',
        descRo: 'Evaluări imobiliare de specialitate și strategii de repoziționare pe piață a clădirilor de birouri și spațiilor comerciale.',
        descEn: 'Professional real estate valuations and asset repositioning strategies for office and commercial complexes.',
        iconName: 'Shield'
      }
    ]
  },
  {
    id: 'urban-edge-build',
    slug: 'urban-edge-build',
    subdomain: 'urbanedge.ragnareliteholding.com',
    aliases: ['urbanedge', 'urban-edge-build', 'urbanedgebuild', 'constructii'],
    nameRo: 'Urban Edge Build',
    nameEn: 'Urban Edge Build',
    categoryRo: 'Construcții Civile, Industriale & Infrastructură',
    categoryEn: 'Civil, Industrial Construction & Infrastructure',
    taglineRo: 'Construcții civile și industriale, renovări, proiecte de infrastructură și servicii de antrepriză.',
    taglineEn: 'Civil and industrial construction, renovations, infrastructure projects, and general contracting.',
    descriptionRo: 'Urban Edge Build se ocupă cu construcții civile și industriale, lucrări de renovare, proiecte de infrastructură și servicii de antrepriză generală la cheie.',
    descriptionEn: 'Urban Edge Build specializes in civil and industrial construction, structural renovation works, infrastructure engineering, and general contracting.',
    extendedOverviewRo: 'Antreprenor general în construcții recunoscut pentru rigoarea execuției, respectarea termenelor și utilizarea tehnologiilor moderne de zidărie, structură și finisaje. De la hală industrială la ansambluri rezidențiale, Urban Edge Build garantează calitate structurală de durată.',
    extendedOverviewEn: 'A premier general contractor recognized for execution precision, deadline compliance, and modern structural engineering. From industrial warehouses to residential complexes, Urban Edge Build delivers enduring civil structures.',
    contactEmail: 'contact@ragnareliteholding.com',
    heroBgImage: 'https://i.imgur.com/D8wzIAt.jpeg',
    accentColor: '#38BDF8',
    stats: [
      { labelRo: 'Capacitate Antrepriză', labelEn: 'Contracting Role', value: 'Antreprenor General' },
      { labelRo: 'Standard Inspecție', labelEn: 'Quality Control', value: 'ISO 9001 / 14001' },
      { labelRo: 'Tipologie Lucrări', labelEn: 'Project Types', value: 'Civile & Industriale' },
      { labelRo: 'Apartenență Grup', labelEn: 'Group Portfolio', value: 'Urban Infrastructure' }
    ],
    services: [
      {
        id: 's1',
        titleRo: 'Construcții Civile & Rezidențiale',
        titleEn: 'Civil & Residential Construction',
        descRo: 'Execuția de clădiri de locuințe, centre comerciale și clădiri administrative la cheie.',
        descEn: 'Turnkey execution of residential buildings, commercial spaces, and administrative complexes.',
        iconName: 'Building'
      },
      {
        id: 's2',
        titleRo: 'Construcții Industriale & Hale',
        titleEn: 'Industrial Construction & Warehouses',
        descRo: 'Construcția de hale de producție, depozite logistice și structuri metalice grele.',
        descEn: 'Construction of production facilities, logistics warehouses, and heavy steel structures.',
        iconName: 'Briefcase'
      },
      {
        id: 's3',
        titleRo: 'Lucrări de Renovare & Consolidare',
        titleEn: 'Structural Renovation & Rehabilitation',
        descRo: 'Consolidări seismice, renovări fațade, reabilitare clădiri istorice și modernizări interioare.',
        descEn: 'Seismic reinforcement, facade restoration, historic building rehabilitation, and interior fit-outs.',
        iconName: 'Sparkles'
      },
      {
        id: 's4',
        titleRo: 'Proiecte de Infrastructură & Antrepriză',
        titleEn: 'Infrastructure & EPC General Contracting',
        descRo: 'Lucrări de drumuri, rețele de utilități urbane, parcări și management integrat de șantier.',
        descEn: 'Road works, urban utility networks, parking facilities, and full EPC project management.',
        iconName: 'Compass'
      }
    ]
  },
  {
    id: 'urban-street-express',
    slug: 'urban-street-express',
    subdomain: 'urbanstreet.ragnareliteholding.com',
    aliases: ['urbanstreet', 'urban-street-express', 'urbanstreetexpress', 'transport-logistica'],
    nameRo: 'Urban Street Express',
    nameEn: 'Urban Street Express',
    categoryRo: 'Transport, Logistică, Distribuție & Comerț',
    categoryEn: 'Transport, Logistics, Distribution & Trade',
    taglineRo: 'Servicii de transport, logistică integrată, distribuție express și activități comerciale.',
    taglineEn: 'Freight transport, integrated logistics, express distribution, and commercial trade services.',
    descriptionRo: 'Urban Street Express se ocupă cu servicii de transport de marfă, logistică integrată, distribuție regională express și activități comerciale de intermediere.',
    descriptionEn: 'Urban Street Express provides freight transport services, integrated supply chain logistics, express regional distribution, and commercial trading.',
    extendedOverviewRo: 'Companie dinamică de transport și depozitare, oferind soluții logistice rapide și sigure. Cu o flotă modernă și rețele de distribuție optimizate, Urban Street Express garantează trasabilitate completă și livrare la timp pentru clienți industriali și comerciali.',
    extendedOverviewEn: 'A dynamic freight and logistics company providing swift, secure supply chain operations. Equipped with a modern fleet and optimized distribution channels, Urban Street Express delivers full tracking and punctuality for enterprise clients.',
    contactEmail: 'contact@ragnareliteholding.com',
    heroBgImage: 'https://i.imgur.com/UPlG0O3.jpeg',
    accentColor: '#38BDF8',
    stats: [
      { labelRo: 'Tip Transport', labelEn: 'Transport Mode', value: 'Road & Express Freight' },
      { labelRo: 'Trasabilitate', labelEn: 'Tracking System', value: 'GPS Live 24/7' },
      { labelRo: 'Capacitate Depozitare', labelEn: 'Storage Logistics', value: 'Integrated Warehousing' },
      { labelRo: 'Apartenență Grup', labelEn: 'Group Affiliation', value: 'Urban Logistics' }
    ],
    services: [
      {
        id: 's1',
        titleRo: 'Transport Rutiere de Marfă',
        titleEn: 'Road Freight & Heavy Transport',
        descRo: 'Transport național și internațional de marfă generală, frigorifică sau agabaritică.',
        descEn: 'National and international road transport for standard, temperature-controlled, or oversized cargo.',
        iconName: 'Truck'
      },
      {
        id: 's2',
        titleRo: 'Servicii de Logistică Integrată & Depozitare',
        titleEn: 'Integrated Logistics & Warehousing',
        descRo: 'Depozitare temporară sau pe termen lung, manipulare marfă, ambalare și gestiune stocuri.',
        descEn: 'Short and long-term warehousing, cargo handling, cross-docking, and inventory management.',
        iconName: 'Building'
      },
      {
        id: 's3',
        titleRo: 'Distribuție Express Urbană & Regională',
        titleEn: 'Urban & Regional Express Distribution',
        descRo: 'Livrare rapidă B2B și B2C pe rute urbane și interurbane optimizate informatic.',
        descEn: 'Rapid B2B and B2C last-mile delivery across software-optimized urban and regional routes.',
        iconName: 'Zap'
      },
      {
        id: 's4',
        titleRo: 'Activități Comerciale & Intermediere',
        titleEn: 'Commercial Trade & Brokerage Services',
        descRo: 'Intermediere comercială de marfă, servicii de vămuire și suport în lanțul de aprovizionare.',
        descEn: 'Trade brokerage, customs clearance documentation, and end-to-end supply chain support.',
        iconName: 'Briefcase'
      }
    ]
  },
  {
    id: 'premium-architecture-design',
    slug: 'premium-architecture-design',
    subdomain: 'premiumarchitecture.ragnareliteholding.com',
    aliases: ['premiumarchitecture', 'premium-architecture-design', 'architecturedesign', 'arhitectura'],
    nameRo: 'Premium Architecture Design',
    nameEn: 'Premium Architecture Design',
    categoryRo: 'Proiectare Arhitecturală, Design Interior & Urbanism',
    categoryEn: 'Architectural Design, Interior Design & Urban Planning',
    taglineRo: 'Proiectare arhitecturală, design interior, urbanism și consultanță tehnică în construcții.',
    taglineEn: 'Architectural design, interior architecture, urbanism, and construction consultancy.',
    descriptionRo: 'Premium Architecture Design se ocupă cu proiectare arhitecturală de concept, design interior exclusivist, planificare urbanistică și consultanță de specialitate în construcții.',
    descriptionEn: 'Premium Architecture Design specializes in conceptual architectural design, luxury interior architecture, urban master planning, and technical construction consulting.',
    extendedOverviewRo: 'Birou de arhitectură și design creativ de înaltă linie. Prin combinarea esteticii atemporale cu soluții inginerești sustenabile, Premium Architecture Design creează concepte unice pentru reședințe private, spații de birouri reprezentative și dezvoltări urbane emblematice.',
    extendedOverviewEn: 'A high-end architectural studio merging timeless aesthetics with sustainable engineering. Premium Architecture Design crafts bespoke concepts for private residences, corporate headquarters, and landmark urban developments.',
    contactEmail: 'contact@ragnareliteholding.com',
    heroBgImage: 'https://i.imgur.com/79GQcsr.jpeg',
    accentColor: '#38BDF8',
    stats: [
      { labelRo: 'Stil Arhitectural', labelEn: 'Design Philosophy', value: 'Timeless & Sustainable' },
      { labelRo: 'Servicii Proiectare', labelEn: 'Project Scope', value: '3D BIM & Full Permitting' },
      { labelRo: 'Standard Portofoliu', labelEn: 'Portfolio Level', value: 'High-End & Commercial' },
      { labelRo: 'Apartenență Grup', labelEn: 'Group Studio', value: 'Ragnar Design' }
    ],
    services: [
      {
        id: 's1',
        titleRo: 'Proiectare Arhitecturală Completă',
        titleEn: 'Comprehensive Architectural Design',
        descRo: 'De la studiul de temă și randări 3D foto-realiste până la DTAC, PTh și autorizații de construire.',
        descEn: 'From initial concept modeling and 3D renderings to complete technical execution drawings and permitting.',
        iconName: 'Compass'
      },
      {
        id: 's2',
        titleRo: 'Design Interior & Fit-Out Comercial',
        titleEn: 'Interior Design & Commercial Fit-Out',
        descRo: 'Concepte personalizate de amenajare interioară pentru spații rezidențiale de lux, hoteluri și birouri.',
        descEn: 'Tailored interior concepts for luxury residences, boutique hospitality, and corporate headquarters.',
        iconName: 'Sparkles'
      },
      {
        id: 's3',
        titleRo: 'Urbanism & Planificare Teritorială',
        titleEn: 'Urban Master Planning & PUZ/PUD',
        descRo: 'Elaborarea documentațiilor de urbanism (PUZ, PUD) și dezvoltarea masterplanurilor durabile.',
        descEn: 'Drafting urban master plans (PUZ, PUD) and sustainable territorial development frameworks.',
        iconName: 'Building'
      },
      {
        id: 's4',
        titleRo: 'Consultanță Tehnică & Dirigenție de Șantier',
        titleEn: 'Technical Advisory & Project Oversight',
        descRo: 'Asistență tehnică din partea proiectantului, urmărire de șantier și control de calitate pe tot parcursul execuției.',
        descEn: 'Technical assistance on-site, architectural supervision, and quality control during construction.',
        iconName: 'CheckCircle2'
      }
    ]
  },
  {
    id: 'premium-cleaning-solutions',
    slug: 'premium-cleaning-solutions',
    subdomain: 'premiumcleaning.ragnareliteholding.com',
    aliases: ['premiumcleaning', 'premium-cleaning-solutions', 'cleaningsolutions', 'curatenie'],
    nameRo: 'Premium Cleaning Solutions',
    nameEn: 'Premium Cleaning Solutions',
    categoryRo: 'Curățenie Profesională Comercială & Industrială',
    categoryEn: 'Professional Commercial & Industrial Cleaning',
    taglineRo: 'Servicii profesionale de curățenie pentru spații comerciale, industriale și rezidențiale.',
    taglineEn: 'Professional cleaning services for commercial, industrial, and residential spaces.',
    descriptionRo: 'Premium Cleaning Solutions se ocupă cu furnizarea de servicii profesionale de curățenie, igienizare și mentenanță pentru clădiri de birouri, spații industriale, comerciale și rezidențiale.',
    descriptionEn: 'Premium Cleaning Solutions delivers professional cleaning, sanitation, and facility maintenance for office buildings, industrial sites, retail centers, and residential complexes.',
    extendedOverviewRo: 'Furnizor de încredere pentru servicii igienico-sanitare la cele mai înalte standarde de calitate. Cu echipamente de ultimă generație, soluții ecologice certificate și personal instruit, compania menține medii de lucru curate, sigure și sănătoase pentru corporații și instituții.',
    extendedOverviewEn: 'A trusted provider of facility sanitation and maintenance under strict quality standards. Using state-of-the-art equipment, eco-certified detergents, and vetted staff, the firm maintains spotless, safe, and healthy corporate environments.',
    contactEmail: 'contact@ragnareliteholding.com',
    heroBgImage: 'https://i.imgur.com/3NZg6NO.jpeg',
    accentColor: '#38BDF8',
    stats: [
      { labelRo: 'Echipamente', labelEn: 'Equipment Standard', value: 'Industrial & Eco-Friendly' },
      { labelRo: 'Personal Instruit', labelEn: 'Staff Training', value: '100% Certified' },
      { labelRo: 'Igienizare', labelEn: 'Sanitation Level', value: 'Hospital-Grade Available' },
      { labelRo: 'Grup Afiliat', labelEn: 'Affiliated Division', value: 'Premium Services' }
    ],
    services: [
      {
        id: 's1',
        titleRo: 'Curățenie Clădiri de Birouri & Spații Comerciale',
        titleEn: 'Office Building & Retail Space Cleaning',
        descRo: 'Servicii zilnice sau periodice de curățenie întreținere pentru sedii de firme, sucursale și mall-uri.',
        descEn: 'Daily or scheduled maintenance cleaning for corporate headquarters, bank branches, and retail centers.',
        iconName: 'Sparkles'
      },
      {
        id: 's2',
        titleRo: 'Curățenie Industrială & Spații Logistice',
        titleEn: 'Industrial Facility & Warehouse Sanitation',
        descRo: 'Curățarea suprafețelor mari, a halelor de producție și dezinfectarea echipamentelor industriale.',
        descEn: 'Deep cleaning of large industrial floors, manufacturing plants, and machinery degreasing.',
        iconName: 'Building'
      },
      {
        id: 's3',
        titleRo: 'Curățenie Post-Construcție & Amenajare',
        titleEn: 'Post-Construction & Fit-Out Deep Clean',
        descRo: 'Îndepărtarea molozului fin, curățarea geamurilor la înălțime și pregătirea spațiilor pentru predare.',
        descEn: 'Removal of post-build dust, high-rise window washing, and preparing premises for immediate occupation.',
        iconName: 'CheckCircle2'
      },
      {
        id: 's4',
        titleRo: 'Tratamente Suprafețe & Igienizare Specială',
        titleEn: 'Surface Treatments & Specialized Sanitation',
        descRo: 'Cristalizare marmură, spălare mochete prin injecție-extracție și servicii de nebulizare/dezinfectare.',
        descEn: 'Marble crystallization, carpet extraction cleaning, and certified space nebulization disinfection.',
        iconName: 'Shield'
      }
    ]
  },
  {
    id: 'smart-paper-office',
    slug: 'smart-paper-office',
    subdomain: 'smartpaper.ragnareliteholding.com',
    aliases: ['smartpaper', 'smart-paper-office', 'smartpaperoffice', 'birotica-papetarie'],
    nameRo: 'Smart Paper Office',
    nameEn: 'Smart Paper Office',
    categoryRo: 'Papetărie, Birotică, Consumabile Birou & Servicii Conexe',
    categoryEn: 'Stationery, B2B Office Supplies & Equipment',
    taglineRo: 'Comercializarea produselor de papetărie și birotică, consumabile pentru birou și servicii conexe.',
    taglineEn: 'Commercialization of stationery, office supplies, printing consumables, and corporate services.',
    descriptionRo: 'Smart Paper Office se ocupă cu comercializarea de produse de papetărie și birotică B2B, consumabile de calitate pentru birouri și servicii conexe de livrare și consultanță.',
    descriptionEn: 'Smart Paper Office specializes in B2B distribution of stationery, premium office supplies, printing consumables, and corporate office provisioning services.',
    extendedOverviewRo: 'Partenerul de încredere al companiilor pentru aprovizionarea completă a spațiilor de lucru. Smart Paper Office oferă un catalog extins de papetărie, consumabile IT, mobilier de birou și soluții de tipărire, garantând prețuri competitive, livrare rapidă și gestiune facilă a comenzilor.',
    extendedOverviewEn: 'A reliable corporate partner for workspace provisioning. Smart Paper Office offers an extensive catalog of office stationery, IT consumables, office ergonomics, and printing supplies, ensuring competitive B2B pricing and swift fulfillment.',
    contactEmail: 'contact@ragnareliteholding.com',
    heroBgImage: 'https://i.imgur.com/u9Gn2tT.jpeg',
    accentColor: '#38BDF8',
    stats: [
      { labelRo: 'Catalog Produse', labelEn: 'Product Catalog', value: '10,000+ SKUs' },
      { labelRo: 'Timp Livrare B2B', labelEn: 'B2B Delivery Time', value: '24-48 Ore' },
      { labelRo: 'Parteneriat B2B', labelEn: 'B2B Contracts', value: 'Corporate Discounts' },
      { labelRo: 'Apartenență Grup', labelEn: 'Group Affiliation', value: 'Smart Office Supplies' }
    ],
    services: [
      {
        id: 's1',
        titleRo: 'Aprovizionare Papetărie & Birotică B2B',
        titleEn: 'B2B Stationery & Office Supplies Provisioning',
        descRo: 'Gama completă de hârtie, dosare, instrumente de scris, organizatoare și articole de papetărie premium.',
        descEn: 'Full spectrum of paper products, arch files, writing instruments, binders, and premium office stationery.',
        iconName: 'FileText'
      },
      {
        id: 's2',
        titleRo: 'Consumabile Tipărire & Echipamente',
        titleEn: 'Print Consumables & Office Equipment',
        descRo: 'Tonere originale și compatibile, cartușe, distrugătoare de documente, laminatoare și multifuncționale.',
        descEn: 'OEM and compatible toners, cartridges, paper shredders, laminators, and multi-function printers.',
        iconName: 'Calculator'
      },
      {
        id: 's3',
        titleRo: 'Protocol Birou & Produse Igienico-Sanitare',
        titleEn: 'Office Pantry, Coffee & Sanitation Essentials',
        descRo: 'Produse de protocol (cafea, ceai, apă), consumabile pentru bucătăria biroului și detergenți.',
        descEn: 'Pantry supplies (premium coffee, tea, water), breakroom paper goods, and cleaning detergents.',
        iconName: 'Sparkles'
      },
      {
        id: 's4',
        titleRo: 'Mobilier Ergonomic & Management Stocuri',
        titleEn: 'Ergonomic Office Furniture & Automated Stocking',
        descRo: 'Scaune ergonomice, birouri reglabile, accesorii IT și abonamente lunare de refacere automată a stocului.',
        descEn: 'Ergonomic chairs, height-adjustable desks, IT accessories, and automated monthly subscription restocking.',
        iconName: 'CheckCircle2'
      }
    ]
  }
];

export function getPartnerBySlug(slugOrAlias: string): PartnerProfile | undefined {
  if (!slugOrAlias) return undefined;
  const clean = slugOrAlias.toLowerCase().trim().replace(/^www\./, '');
  
  return PARTNERS_DATA.find((p) => {
    if (p.slug === clean) return true;
    if (p.id === clean) return true;
    if (p.subdomain.toLowerCase() === clean) return true;
    if (p.subdomain.toLowerCase().startsWith(clean + '.')) return true;
    return p.aliases.some((a) => clean.includes(a) || a === clean);
  });
}

export function detectPartnerFromHostname(): PartnerProfile | undefined {
  if (typeof window === 'undefined') return undefined;
  
  const hostname = window.location.hostname.toLowerCase();
  const searchParams = new URLSearchParams(window.location.search);
  const partnerQuery = searchParams.get('partner') || searchParams.get('p') || searchParams.get('subdomain');
  
  // First check URL query param fallback for dev/preview
  if (partnerQuery) {
    const matched = getPartnerBySlug(partnerQuery);
    if (matched) return matched;
  }

  // Check URL hash fallback
  if (window.location.hash) {
    const hashVal = window.location.hash.replace('#', '');
    if (hashVal.startsWith('partner=') || hashVal.startsWith('p=')) {
      const slug = hashVal.split('=')[1];
      const matched = getPartnerBySlug(slug);
      if (matched) return matched;
    }
  }

  // Second check hostname subdomain
  // e.g., "vextadata.ragnareliteholding.com" -> prefix "vextadata"
  // or "vextadata.localhost" -> prefix "vextadata"
  const parts = hostname.split('.');
  if (parts.length > 1) {
    const prefix = parts[0];
    if (prefix && prefix !== 'www' && prefix !== 'ragnareliteholding' && prefix !== 'ais-dev-45j5qubuweibvtx4wzdcip-244475190177') {
      const matched = getPartnerBySlug(prefix);
      if (matched) return matched;
    }
  }

  return undefined;
}
