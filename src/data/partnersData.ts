export interface PartnerService {
  id: string;
  titleRo: string;
  titleEn: string;
  descRo: string;
  descEn: string;
  iconName: 'Shield' | 'Building' | 'Cpu' | 'Zap' | 'Briefcase' | 'Truck' | 'Compass' | 'Sparkles' | 'FileText' | 'Scale' | 'Calculator' | 'CheckCircle2' | 'Globe';
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
    heroBgImage: 'https://i.imgur.com/xxyUU5r.jpeg',
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
    categoryRo: 'Agenție de Casting, Recrutare Talente & Reprezentare Media',
    categoryEn: 'Casting Agency, Talent Recruitment & Media Representation',
    taglineRo: 'Agenție de casting, recrutare și intermediere talente (actori, modele, figurație) pentru producții de film, reclame și media.',
    taglineEn: 'Casting agency, talent recruitment & intermediation (actors, models, extras) for films, commercials, and global media.',
    descriptionRo: 'Studio Gilded Stars este o agenție specializată în casting, recrutare și intermediere de talente (actori, modele, figurație, fresh faces) pentru proiecte internaționale de film, reclame și evenimente, oferind de asemenea probe video (self-tapes), fotografie și training.',
    descriptionEn: 'Studio Gilded Stars is a specialized casting, talent recruitment, and representation agency connecting actors, models, extras, and fresh faces with international film, commercial, and media productions.',
    extendedOverviewRo: 'Studio Gilded Stars funcționează ca o agenție de casting, recrutare și management al talentelor pe plan internațional:\n\n• Casting & Recrutare Talente: Selectăm, intermediem și reprezentăm actori, modele, figurație și "fresh faces" pentru case de producție de film, televiziune și agenții de publicitate.\n• Probe Audio-Video (Self-Tapes): Asistență tehnică și îndrumare profesională pentru realizarea de self-tapes și probe de casting conform cerințelor regizorilor internaționali.\n• Reprezentare & Intermediere Media: Servicii de reprezentare pentru talente în raport cu branduri, agenții de reclame și campanii digitale.\n• Fotografie & Portofolii (Book-uri): Fotografie profesională în studio pentru crearea de book-uri de casting conforme cu standardele din industrie.\n• Ateliere & Training Profesional: Cursuri și ghidaj practic pentru modele și actori aflați la început de drum.\n• Conexiune cu Piețe Strategice: Plasăm și promovăm talente pe piețe majore precum India (Bollywood), EAU (Dubai), SUA (Hollywood), Canada, Marea Britanie, Turcia, Coreea de Sud, Nigeria și Estonia.',
    extendedOverviewEn: 'Studio Gilded Stars functions as a global talent recruitment, casting, and representation agency:\n\n• Talent Casting & Recruitment: Selecting, managing, and representing actors, models, extras, and fresh faces for international film, TV, and advertising productions.\n• Audition Self-Tapes: Professional guidance and technical execution of casting self-tapes meeting global directorial criteria.\n• Media Representation: Talent agency services connecting models and actors with top brand campaigns, commercials, and media projects.\n• Talent Book & Portfolio Photography: Professional studio photo sessions tailored for industry-standard talent portfolios.\n• Workshops & Fresh Faces Training: Practical coaching and guidance for emerging talent entering the entertainment market.\n• Global Market Reach: Connecting talent directly with active markets including India (Bollywood), UAE (Dubai), USA (Hollywood), UK, Turkey, South Korea, Nigeria, and Estonia.',
    contactEmail: 'contact@ragnareliteholding.com',
    heroBgImage: 'https://i.imgur.com/sLJ2N6K.jpeg',
    accentColor: '#38BDF8',
    stats: [
      { labelRo: 'Domeniu Principal', labelEn: 'Core Field', value: 'Agenție de Casting' },
      { labelRo: 'Intermediere Talente', labelEn: 'Talent Scope', value: 'Actori, Modele, Figurație' },
      { labelRo: 'Piețe Target', labelEn: 'Target Markets', value: 'Hollywood, Bollywood, Dubai+' },
      { labelRo: 'Grup Afiliat', labelEn: 'Group Division', value: 'Gilded Stars Agency' }
    ],
    services: [
      {
        id: 's1',
        titleRo: 'Recrutare & Selecție Casting',
        titleEn: 'Talent Recruitment & Casting Selection',
        descRo: 'Recrutare și selecție de actori, modele, figurație și talente noi pentru proiecte cinematografice și reclame.',
        descEn: 'Recruitment and selection of actors, models, extras, and emerging talent for film and commercial projects.',
        iconName: 'Briefcase'
      },
      {
        id: 's2',
        titleRo: 'Procurare & Producție Self-Tapes',
        titleEn: 'Audition Self-Tapes & Casting Tapes',
        descRo: 'Servicii de ghidaj și înregistrare a probelor de casting (self-tapes) la standarde cinematografice.',
        descEn: 'Coaching and recording services for casting self-tapes meeting international production specs.',
        iconName: 'Sparkles'
      },
      {
        id: 's3',
        titleRo: 'Fotografie de Portofoliu & Book-uri',
        titleEn: 'Portfolio Photography & Talent Books',
        descRo: 'Realizarea de ședințe foto profesionale în studio pentru compunerea book-urilor de prezentare.',
        descEn: 'In-house studio photography designed for industry-standard casting books and headshots.',
        iconName: 'FileText'
      },
      {
        id: 's4',
        titleRo: 'Reprezentare Media & Training Fresh Faces',
        titleEn: 'Media Representation & Talent Workshops',
        descRo: 'Impresariat, reprezentare în raport cu branduri și ateliere de pregătire pentru talente la început de drum.',
        descEn: 'Talent representation for brand campaigns alongside beginner workshops in acting and modeling.',
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
    categoryRo: 'E-Commerce Global, Export Angro & Detail, Fashion & Electrocasnice',
    categoryEn: 'Global E-Commerce, Wholesale & Retail Export, Apparel & Electronics',
    taglineRo: 'E-commerce global, export angro și detail de îmbrăcăminte, încălțăminte, parfumuri, accesorii, electronice și electrocasnice (Sediu în Thailanda).',
    taglineEn: 'Global e-commerce, wholesale & retail export of apparel, footwear, lingerie, perfumes, accessories, electronics & appliances (Thailand Hub).',
    descriptionRo: 'Nexus Terranova este o companie internațională de e-commerce global și export (angro & detail) specializată în îmbrăcăminte, încălțăminte, lenjerie intimă, parfumuri, accesorii, electronice și electrocasnice, având ca nod principal Thailanda.',
    descriptionEn: 'Nexus Terranova is an international global e-commerce and export enterprise (wholesale & retail) specializing in clothing, footwear, lingerie, perfumes, accessories, electronics, and home appliances, centered in Thailand.',
    extendedOverviewRo: 'Nexus Terranova desfășoară activități de E-Commerce Global și export internațional în regim angro (wholesale) și detail (retail), având sediul operațional și hub-ul principal de lansare în Thailanda. Portofoliul de produse include:\n\n• Îmbrăcăminte și Încălțăminte\n• Lenjerie intimă\n• Parfumuri și produse de îngrijire personală\n• Accesorii de modă și lifestyle\n• Electronice și gadgeturi tech\n• Electrocasnice pentru locuințe moderne\n\nCu o infrastructură logistică globală și capacități solide de distribuție B2B (angro) și B2C (detail), Nexus Terranova livrează produse premium pe piețele internaționale.',
    extendedOverviewEn: 'Nexus Terranova operates Global E-Commerce and international export channels across both wholesale (angro) and retail (detail) models, with primary launch and operational headquarters centered in Thailand. Product portfolio includes:\n\n• Apparel & Footwear\n• Fine Lingerie\n• Perfumes & Fragrances\n• Fashion & Lifestyle Accessories\n• Consumer Electronics & Tech Gadgets\n• Home Electrical Appliances\n\nEquipped with a global logistics network and B2B/B2C fulfillment capabilities, Nexus Terranova exports curated goods to international markets.',
    contactEmail: 'contact@ragnareliteholding.com',
    heroBgImage: 'https://i.imgur.com/rcgZWZE.jpeg',
    accentColor: '#38BDF8',
    stats: [
      { labelRo: 'Model de Afaceri', labelEn: 'Business Model', value: 'E-Commerce Global' },
      { labelRo: 'Tip Vânzare', labelEn: 'Export Type', value: 'Export Angro & Detail' },
      { labelRo: 'Hub Operațional', labelEn: 'Operational Hub', value: 'Thailanda (Global Shipping)' },
      { labelRo: 'Grup Afiliat', labelEn: 'Group Division', value: 'Nexus Global Retail' }
    ],
    services: [
      {
        id: 's1',
        titleRo: 'E-Commerce Global & Platforme Online',
        titleEn: 'Global E-Commerce & Digital Platforms',
        descRo: 'Comerț electronic internațional B2C, platforme digitale inteligente și livrări directe către consumatori la nivel global.',
        descEn: 'International B2C e-commerce operations, digital shopping platforms, and worldwide direct-to-consumer fulfillment.',
        iconName: 'Globe'
      },
      {
        id: 's2',
        titleRo: 'Export Angro & Distribuiție B2B (Wholesale)',
        titleEn: 'Wholesale Export & B2B Distribution',
        descRo: 'Furnizare în regim angro pentru parteneri comerciali, lanțuri de magazine și distribuitori internaționali.',
        descEn: 'Bulk wholesale supply for commercial partners, retail chains, and international distributors.',
        iconName: 'Truck'
      },
      {
        id: 's3',
        titleRo: 'Fashion: Îmbrăcăminte, Încalțăminte & Parfumuri',
        titleEn: 'Fashion: Apparel, Footwear, Lingerie & Perfumes',
        descRo: 'Colecții de îmbrăcăminte contemporană, încălțăminte, lenjerie intimă, parfumuri și accesorii de modă.',
        descEn: 'Contemporary clothing lines, footwear, fine lingerie, perfumes, and fashion accessories.',
        iconName: 'Sparkles'
      },
      {
        id: 's4',
        titleRo: 'Tech & Casă: Electronice & Electrocasnice',
        titleEn: 'Tech & Home: Electronics & Home Appliances',
        descRo: 'Echipamente electronice de consum, gadgeturi smart și electrocasnice moderne exportate din hub-ul din Thailanda.',
        descEn: 'Consumer electronics, smart gadgets, and modern home electrical appliances exported from the Thailand hub.',
        iconName: 'Cpu'
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
    categoryRo: 'Software Personalizat, Hosting, Server, Domenii & Servicii IT Administrate',
    categoryEn: 'Custom Software, Hosting, Servers, Domain Registration & Managed IT',
    taglineRo: 'Dezvoltare software personalizat, găzduire web, înregistrare domenii, servere dedicate & VPS, colocare echipamente și securitate cibernetică.',
    taglineEn: 'Custom software development, web hosting, domain registration, dedicated & VPS servers, equipment colocation, and IT infrastructure.',
    descriptionRo: 'Vexta Data se ocupă cu dezvoltarea de software personalizat, servicii de găzduire web (hosting), înregistrare domenii internet, furnizare și administrare servere (dedicate, VPS, cloud), colocare echipamente în data center, consultanță IT și securitate cibernetică.',
    descriptionEn: 'Vexta Data specializes in custom software engineering, web hosting, domain registration, server management (dedicated, VPS, cloud), data center colocation, IT consulting, and enterprise cybersecurity.',
    extendedOverviewRo: 'Partener tehnologic de încredere pentru soluții digitale avansate și infrastructură de date. Vexta Data furnizează servicii complete de găzduire (web hosting, servere dedicate, VPS, colocare în data center), înregistrare și administrare domenii web, dezvoltare software personalizat și arhitecturi Cloud securizate, punând accent pe scalabilitate, uptime garantat și securitate cibernetică.',
    extendedOverviewEn: 'A trusted technology and data infrastructure partner. Vexta Data provides end-to-end web hosting services, dedicated server provisioning, VPS hosting, data center colocation, domain registration and management, custom software engineering, and secure Cloud architectures with high SLA uptime guarantees.',
    contactEmail: 'contact@ragnareliteholding.com',
    heroBgImage: 'https://i.imgur.com/JXKRCkU.jpeg',
    accentColor: '#38BDF8',
    stats: [
      { labelRo: 'Hosting & Server', labelEn: 'Hosting & Servers', value: 'Dedicate, VPS & Colocare' },
      { labelRo: 'Disponibilitate', labelEn: 'Uptime Guarantee', value: '99.99% SLA Data Center' },
      { labelRo: 'Securitate', labelEn: 'Security Standard', value: 'ISO/IEC 27001' },
      { labelRo: 'Domenii & Cloud', labelEn: 'Domains & Cloud', value: 'Înregistrare & Management' }
    ],
    services: [
      {
        id: 's1',
        titleRo: 'Găzduire Web, Server, Colocare & Domenii',
        titleEn: 'Web Hosting, Servers, Colocation & Domains',
        descRo: 'Servicii de găzduire web, înregistrare domenii, servere dedicate & VPS și colocare de echipamente IT în data center securizat.',
        descEn: 'Web hosting, domain name registration, dedicated & VPS servers, and IT hardware colocation in secure data centers.',
        iconName: 'Zap'
      },
      {
        id: 's2',
        titleRo: 'Dezvoltare Software Personalizat',
        titleEn: 'Custom Software Engineering',
        descRo: 'Construirea de aplicații web, mobile și platforme SaaS dedicate proceselor specifice ale companiei dumneavoastră.',
        descEn: 'Building tailor-made web, mobile applications, and SaaS platforms tailored to your core business logic.',
        iconName: 'Cpu'
      },
      {
        id: 's3',
        titleRo: 'Administrare Sisteme & Cloud Management',
        titleEn: 'Systems Administration & Managed Cloud',
        descRo: 'Monitorizare 24/7, administrare servere, rețele informatice și servicii DevOps pentru continuitate operațională.',
        descEn: '24/7 monitoring, server management, network infrastructure, and DevOps pipelines for uninterrupted operations.',
        iconName: 'Compass'
      },
      {
        id: 's4',
        titleRo: 'Securitate Cibernetică & Support IT Enterprise',
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
    categoryRo: 'Proiectare & Construcții Linii Tensiune, Centrale, Hidrocentrale & Mentenanță Energetică',
    categoryEn: 'Energy Design, High/Medium/Low Voltage Power Lines, Power Plants & Maintenance',
    taglineRo: 'Proiectare energetică, construcții linii de înaltă, medie și joasă tensiune, centrale electrice, hidrocentrale și mentenanță.',
    taglineEn: 'Energy engineering & design, construction of high/medium/low voltage power lines, power plants, hydro plants & maintenance.',
    descriptionRo: 'Urban Energetic Service oferă servicii de proiectare tehnică și execuție pentru construcții de linii electrice de înaltă, medie și joasă tensiune, centrale electrice, hidrocentrale, precum și servicii de montaj, mentenanță și consultanță energetică.',
    descriptionEn: 'Urban Energetic Service delivers specialized energy engineering design and construction of high, medium, and low voltage transmission lines, power plants, hydroelectric stations, as well as installation and ongoing technical maintenance.',
    extendedOverviewRo: 'Lider în proiectare energetică și soluții de inginerie pentru infrastructura energetică critică. Compania oferă servicii complete de la proiectare tehnică și avizare, la construcția liniilor electrice aeriene și subterane (înaltă, medie și joasă tensiune), dezvoltarea de centrale electrice și hidrocentrale, până la planuri de mentenanță preventivă și optimizare energetică.',
    extendedOverviewEn: 'A leader in energy system design and infrastructure engineering. The company provides end-to-end services including technical engineering design, construction of high, medium, and low voltage power lines, development of power stations and hydroelectric facilities, alongside preventive maintenance.',
    contactEmail: 'contact@ragnareliteholding.com',
    heroBgImage: 'https://i.imgur.com/axpTkAU.jpeg',
    accentColor: '#38BDF8',
    stats: [
      { labelRo: 'Proiectare & Execuție', labelEn: 'Design & Build', value: 'Linii IT / MT / JT' },
      { labelRo: 'Centrale & Hidro', labelEn: 'Plants & Hydro', value: 'Centrale & Hidrocentrale' },
      { labelRo: 'Standard Siguranță', labelEn: 'Safety Standard', value: 'Autorizat ANRE' },
      { labelRo: 'Divizie Afiliată', labelEn: 'Affiliated Division', value: 'Urban Infrastructure' }
    ],
    services: [
      {
        id: 's1',
        titleRo: 'Proiectare Energetică & Linii IT / MT / JT',
        titleEn: 'Energy Design & Voltage Power Lines',
        descRo: 'Proiectare tehnică și construcții de linii electrice de înaltă (IT), medie (MT) și joasă tensiune (JT), aeriene și subterane.',
        descEn: 'Engineering design and construction of high (HV), medium (MV), and low voltage (LV) overhead & underground power transmission lines.',
        iconName: 'Zap'
      },
      {
        id: 's2',
        titleRo: 'Centrale Electrice & Hidrocentrale',
        titleEn: 'Power Plants & Hydroelectric Stations',
        descRo: 'Proiectare și execuție de centrale de producție energie și amenajări hidroenergetice (hidrocentrale).',
        descEn: 'Design, engineering, and construction of power generation facilities and hydroelectric power stations.',
        iconName: 'Building'
      },
      {
        id: 's3',
        titleRo: 'Instalare Posturi Transformare & Rețele',
        titleEn: 'Transformer Stations & Grid Infrastructure',
        descRo: 'Montaj posturi de transformare, stații electrice, tablouri de distribuție și integrarea surselor regenerabile.',
        descEn: 'Installation of transformer substations, switchyards, distribution panels, and renewable grid connections.',
        iconName: 'Cpu'
      },
      {
        id: 's4',
        titleRo: 'Mentenanță, Audit Energetic & Intervenții',
        titleEn: 'Maintenance, Energy Auditing & Repairs',
        descRo: 'Mentenanță preventivă, audituri de eficiență energetică, remediere avarii și intervenții tehnice de urgență.',
        descEn: 'Preventive maintenance, energy efficiency audits, emergency fault repairs, and technical inspections.',
        iconName: 'Compass'
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
    categoryRo: 'Proiectare & Construcții Civile, Industriale & Infrastructură',
    categoryEn: 'Engineering Design, Civil, Industrial Construction & Infrastructure',
    taglineRo: 'Proiectare în construcții, construcții civile și industriale, renovări, infrastructură și servicii de antrepriză generală.',
    taglineEn: 'Engineering design, civil & industrial construction, structural renovations, infrastructure & general contracting.',
    descriptionRo: 'Urban Edge Build se ocupă cu servicii de proiectare în construcții, construcții civile și industriale, lucrări de renovare, proiecte de infrastructură și antrepriză generală la cheie.',
    descriptionEn: 'Urban Edge Build specializes in construction engineering design, civil and industrial building, structural renovation, infrastructure engineering, and turnkey general contracting.',
    extendedOverviewRo: 'Antreprenor general și birou de proiectare în construcții recunoscut pentru rigoarea execuției, proiectare tehnică de rezistență, respectarea termenelor și utilizarea tehnologiilor moderne. De la faza de proiectare și avizare până la execuția halei industriale sau a ansamblurilor rezidențiale, Urban Edge Build garantează calitate structurală de durată.',
    extendedOverviewEn: 'A general contractor and construction engineering firm recognized for structural design, execution precision, and deadline compliance. From initial engineering drawings and permitting to full-scale build execution, Urban Edge Build delivers enduring civil structures.',
    contactEmail: 'contact@ragnareliteholding.com',
    heroBgImage: 'https://i.imgur.com/D8wzIAt.jpeg',
    accentColor: '#38BDF8',
    stats: [
      { labelRo: 'Proiectare & Execuție', labelEn: 'Design & Build', value: 'Servicii Integrat EPC' },
      { labelRo: 'Capacitate Antrepriză', labelEn: 'Contracting Role', value: 'Antreprenor General' },
      { labelRo: 'Standard Inspecție', labelEn: 'Quality Control', value: 'ISO 9001 / 14001' },
      { labelRo: 'Tipologie Lucrări', labelEn: 'Project Types', value: 'Civile & Industriale' }
    ],
    services: [
      {
        id: 's1',
        titleRo: 'Proiectare Tehnică & Inginerie Structurală',
        titleEn: 'Engineering Design & Structural Planning',
        descRo: 'Servicii de proiectare de arhitectură, structură de rezistență, instalații și documentații tehnice pentru autorizare (DTAC/PTh).',
        descEn: 'Architectural, structural, and MEP engineering design alongside full permitting documentation for civil/industrial projects.',
        iconName: 'Compass'
      },
      {
        id: 's2',
        titleRo: 'Construcții Civile & Rezidențiale',
        titleEn: 'Civil & Residential Construction',
        descRo: 'Execuția de clădiri de locuințe, centre comerciale și clădiri administrative la cheie.',
        descEn: 'Turnkey execution of residential buildings, commercial spaces, and administrative complexes.',
        iconName: 'Building'
      },
      {
        id: 's3',
        titleRo: 'Construcții Industriale & Hale Metalice',
        titleEn: 'Industrial Construction & Steel Structures',
        descRo: 'Construcția de hale de producție, depozite logistice și structuri metalice grele.',
        descEn: 'Construction of production facilities, logistics warehouses, and heavy steel structures.',
        iconName: 'Briefcase'
      },
      {
        id: 's4',
        titleRo: 'Renovări, Consolidări & Infrastructură',
        titleEn: 'Renovations, Retrofitting & Infrastructure',
        descRo: 'Consolidări seismice, renovări fațade, reabilitare clădiri istorice și lucrări de infrastructură urbană.',
        descEn: 'Seismic reinforcement, facade restoration, historic building rehabilitation, and urban infrastructure works.',
        iconName: 'Sparkles'
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
    categoryRo: 'Curierat Express, Relocări & Mutări, Transport, Logistică & Taxe',
    categoryEn: 'Express Courier, Residential & Corporate Relocations, Freight & Customs',
    taglineRo: 'Servicii de curierat express, relocări și mutări profesionale, transport de marfă, depozitare și servicii conexe.',
    taglineEn: 'Express courier, professional residential & corporate moving, freight transport, warehousing & tax/customs support.',
    descriptionRo: 'Urban Street Express oferă servicii de curierat express, relocări și mutări de locuințe și sedii de firme, transport național și internațional de marfă, depozitare și gestionare taxe & formalități logistice.',
    descriptionEn: 'Urban Street Express provides express courier services, residential and corporate relocations/moving, national & international freight, warehousing, and customs/logistics tax handling.',
    extendedOverviewRo: 'Companie dinamică de curierat, relocări și servicii logistice integrate. Urban Street Express oferă soluții complete de curierat express, mutări rezidențiale și corporative (turnkey relocations), transport rutiere de marfă, gestiune taxe și formalități vamale, precum și depozitare securizată.',
    extendedOverviewEn: 'A comprehensive courier, relocation, and logistics company. Urban Street Express provides turnkey residential & office moving, express courier delivery, national/international freight transport, customs & tax documentation handling, and secure storage solutions.',
    contactEmail: 'contact@ragnareliteholding.com',
    heroBgImage: 'https://i.imgur.com/UPlG0O3.jpeg',
    accentColor: '#38BDF8',
    stats: [
      { labelRo: 'Curierat & Mutări', labelEn: 'Courier & Moving', value: 'Express & Relocări' },
      { labelRo: 'Arie Servicii', labelEn: 'Service Coverage', value: 'Național & Internațional' },
      { labelRo: 'Trasabilitate', labelEn: 'Tracking System', value: 'GPS Live 24/7' },
      { labelRo: 'Apartenență Grup', labelEn: 'Group Affiliation', value: 'Urban Logistics' }
    ],
    services: [
      {
        id: 's1',
        titleRo: 'Curierat Express & Livrări Rapide',
        titleEn: 'Express Courier & Fast Deliveries',
        descRo: 'Servicii de curierat door-to-door, livrări urgente plicuri și colete B2B și B2C pe rute urbane și naționale.',
        descEn: 'Door-to-door express courier, urgent parcel and document deliveries for B2B and B2C clients.',
        iconName: 'Zap'
      },
      {
        id: 's2',
        titleRo: 'Relocări & Mutări (Rezidențial & Corporativ)',
        titleEn: 'Relocations & Moving Services (Homes & Offices)',
        descRo: 'Servicii complete de mutare și relocare pentru persoane fizice (apartamente, vile) și companii (sedii, echipamente).',
        descEn: 'Full relocation and moving services for individuals (apartments, houses) and corporate offices/equipment.',
        iconName: 'Building'
      },
      {
        id: 's3',
        titleRo: 'Transport Rutiere de Marfă',
        titleEn: 'Road Freight & Heavy Cargo Transport',
        descRo: 'Transport național și internațional de marfă generală, agabaritică sau produse voluminoase.',
        descEn: 'National and international road freight for standard, oversized, or bulk commercial cargo.',
        iconName: 'Truck'
      },
      {
        id: 's4',
        titleRo: 'Taxe, Formalități Vamale & Intermediere',
        titleEn: 'Logistics Taxes, Customs & Brokerage',
        descRo: 'Gestionarea taxelor de transport, întocmirea documentelor vamale, intermediere comercială și asistență logistică.',
        descEn: 'Handling transport taxes, customs documentation, commercial freight brokerage, and supply chain support.',
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
    categoryRo: 'Proiectare Arhitecturală, Design Exterior, Design Peisagistic & Design Interior',
    categoryEn: 'Architectural Design, Exterior Design, Landscape Architecture & Interior Design',
    taglineRo: 'Proiectare arhitecturală, design exterior, design peisagistic (peisagistică), design interior și urbanism.',
    taglineEn: 'Architectural design, exterior design, landscape design, interior design, and urban master planning.',
    descriptionRo: 'Premium Architecture Design oferă servicii de proiectare arhitecturală, design exterior, design peisagistic și amenajări exterioare, design interior exclusivist și planificare urbanistică.',
    descriptionEn: 'Premium Architecture Design specializes in comprehensive architectural engineering, exterior façade design, landscape design, luxury interior architecture, and urban planning.',
    extendedOverviewRo: 'Birou de arhitectură, proiectare și design creativ de înaltă linie. Prin combinarea esteticii atemporale cu soluții inginerești sustenabile, Premium Architecture Design creează concepte unice de proiectare arhitecturală, design exterior și fațade, design peisagistic și amenajări exterioare, precum și design interior de lux pentru reședințe private, spații comerciale și dezvoltări urbane.',
    extendedOverviewEn: 'A high-end architectural design studio merging timeless aesthetics with sustainable engineering. Premium Architecture Design crafts bespoke concepts spanning architectural design, exterior facade modeling, landscape design and outdoor space creation, alongside luxury interior design.',
    contactEmail: 'contact@ragnareliteholding.com',
    heroBgImage: 'https://i.imgur.com/79GQcsr.jpeg',
    accentColor: '#38BDF8',
    stats: [
      { labelRo: 'Domeniu Proiectare', labelEn: 'Design Scope', value: 'Arhitectură & Peisagistică' },
      { labelRo: 'Design In & Out', labelEn: 'In & Exterior', value: 'Interior & Exterior Design' },
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
        titleRo: 'Design Exterior & Design Peisagistic',
        titleEn: 'Exterior Design & Landscape Architecture',
        descRo: 'Proiectare fațade, iluminat arhitectural exterior, design peisagistic, amenajare grădini, terase și spații verzi.',
        descEn: 'Facade design, exterior architectural lighting, landscape architecture, garden planning, terraces, and green spaces.',
        iconName: 'Sparkles'
      },
      {
        id: 's3',
        titleRo: 'Design Interior & Fit-Out Comercial',
        titleEn: 'Interior Design & Commercial Fit-Out',
        descRo: 'Concepte personalizate de amenajare interioară pentru spații rezidențiale de lux, hoteluri, restaurante și birouri.',
        descEn: 'Tailored interior concepts for luxury residences, hospitality, restaurants, and corporate headquarters.',
        iconName: 'Building'
      },
      {
        id: 's4',
        titleRo: 'Urbanism & Consultanță Tehnică de Șantier',
        titleEn: 'Urban Planning & On-Site Technical Advisory',
        descRo: 'Elaborarea documentațiilor de urbanism (PUZ, PUD) și asistență tehnică din partea proiectantului pe șantier.',
        descEn: 'Drafting urban master plans (PUZ, PUD) and providing direct architectural project oversight during construction.',
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
    categoryRo: 'Curățenie Profesională, Igienizare & Mentenanță Comercială & Medicală',
    categoryEn: 'Professional Sanitation & Cleaning (Commercial, Medical, Hospitality & Residential)',
    taglineRo: 'Servicii profesionale de curățenie pentru hoteluri, pensiuni, spitale, cabinete medicale, bănci, instituții publice, vile și apartamente.',
    taglineEn: 'Professional cleaning & sanitation for hotels, guesthouses, hospitals, clinics, banks, public institutions, villas, & apartments.',
    descriptionRo: 'Premium Cleaning Solutions furnizează servicii profesionale de curățenie și dezinfectare de nivel înalt pentru hoteluri, pensiuni, spitale, cabinete medicale, bănci, instituții publice, clădiri de birouri, precum și vile și apartamente rezidențiale.',
    descriptionEn: 'Premium Cleaning Solutions delivers specialized cleaning and hospital-grade sanitation for hotels, guesthouses, hospitals, medical clinics, banks, public institutions, corporate offices, and luxury villas/apartments.',
    extendedOverviewRo: 'Furnizor de încredere pentru servicii igienico-sanitare la cele mai înalte standarde. Cu echipamente profesionale, detergenți ecologici și soluții certificate de dezinfecție, compania deservește domeniul HoReCa (hoteluri, pensiuni), sectorul medical (spitale, cabinete medicale), sectorul financiar-public (bănci, instituții publice, sedii administrative) și domeniul rezidențial (vile, apartamente).',
    extendedOverviewEn: 'A trusted partner for high-standard sanitation and deep cleaning. Equipped with industrial machinery and medical-grade disinfectants, the firm serves hospitality (hotels, guesthouses), medical sectors (hospitals, clinics), financial & public institutions (banks, government buildings), and residential properties (villas, apartments).',
    contactEmail: 'contact@ragnareliteholding.com',
    heroBgImage: 'https://i.imgur.com/3NZg6NO.jpeg',
    accentColor: '#38BDF8',
    stats: [
      { labelRo: 'Arie Acoperire', labelEn: 'Coverage Areas', value: 'HoReCa, Medical, Bănci & Locuințe' },
      { labelRo: 'Acreditare', labelEn: 'Accreditation', value: 'Dezinfecție Nivel Medical' },
      { labelRo: 'Personal Instruit', labelEn: 'Staff Training', value: '100% Certificat' },
      { labelRo: 'Grup Afiliat', labelEn: 'Affiliated Division', value: 'Premium Services' }
    ],
    services: [
      {
        id: 's1',
        titleRo: 'Curățenie HoReCa: Hoteluri & Pensiuni',
        titleEn: 'Hospitality Cleaning: Hotels & Guesthouses',
        descRo: 'Igienizare completă camere, recepții, zone comune și restaurante pentru hoteluri, pensiuni și rețele de cazare.',
        descEn: 'Full room housekeeping, lobby, common area, and restaurant cleaning for hotels, guesthouses, and resorts.',
        iconName: 'Sparkles'
      },
      {
        id: 's2',
        titleRo: 'Sector Medical: Spitale & Cabinete Medicale',
        titleEn: 'Medical Sector: Hospitals & Healthcare Clinics',
        descRo: 'Dezinfecție și curățenie conform normelor sanitare stricte pentru spitale, clinici, cabinete stomatologice și medicale.',
        descEn: 'Hospital-grade sanitization and specialized cleaning meeting strict healthcare regulations for clinics and hospitals.',
        iconName: 'Shield'
      },
      {
        id: 's3',
        titleRo: 'Bănci, Instituții Publice & Birouri',
        titleEn: 'Banks, Public Institutions & Corporate Offices',
        descRo: 'Curățenie de întreținere și nebulizare periodice pentru sucursale bancare, sedii de instituții publice și complexe de birouri.',
        descEn: 'Maintenance cleaning and periodic fogging for bank branches, government buildings, and corporate offices.',
        iconName: 'Building'
      },
      {
        id: 's4',
        titleRo: 'Curățenie Rezidențială: Vile & Apartamente',
        titleEn: 'Residential Cleaning: Villas & Apartments',
        descRo: 'Curățenie generală, de întreținere sau post-constructor pentru vile, apartamente rezidențiale și complexe de locuințe.',
        descEn: 'Deep cleaning, routine maid services, or post-construction cleanup for luxury villas, apartments, and estates.',
        iconName: 'CheckCircle2'
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
    categoryRo: 'Papetărie, Birotică, Echipamente IT, Calculatoare, Monitoare & Protocol',
    categoryEn: 'Stationery, B2B Office Supplies, IT Hardware, Computers & Pantry Solutions',
    taglineRo: 'Papetărie, birotică, electronice & IT (calculatoare, laptopuri, monitoare, tablete), coolere de apă și consumabile de birou.',
    taglineEn: 'Stationery, office supplies, IT hardware (computers, laptops, monitors, tablets), water coolers, and pantry essentials.',
    descriptionRo: 'Smart Paper Office se ocupă cu comercializarea de produse de papetărie, birotică, echipamente IT & electronice (calculatoare, monitoare, laptopuri, tablete), coolere de apă și consumabile de birou B2B.',
    descriptionEn: 'Smart Paper Office specializes in B2B distribution of stationery, office supplies, IT equipment & electronics (PCs, laptops, monitors, tablets), water coolers, and pantry consumables.',
    extendedOverviewRo: 'Partenerul de încredere al companiilor pentru echiparea și aprovizionarea completă a spațiilor de lucru. Smart Paper Office oferă un catalog extins de papetărie, birotică, tehnică de calcul (calculatoare, monitoare, laptopuri, tablete), dispensere & coolere de apă, consumabile de birou și soluții de mobilier, garantând prețuri competitive, livrare rapidă și gestiune facilă B2B.',
    extendedOverviewEn: 'A reliable corporate partner for workspace provisioning and equipment. Smart Paper Office offers an extensive catalog spanning office stationery, IT hardware (desktop PCs, monitors, laptops, tablets), water coolers & pantry dispensers, and office ergonomics with swift B2B fulfillment.',
    contactEmail: 'contact@ragnareliteholding.com',
    heroBgImage: 'https://i.imgur.com/u9Gn2tT.jpeg',
    accentColor: '#38BDF8',
    stats: [
      { labelRo: 'Catalog Produse', labelEn: 'Product Catalog', value: '15,000+ SKUs' },
      { labelRo: 'Tehnică & IT', labelEn: 'IT & Electronics', value: 'Calculatoare, Monitoare & Coolere' },
      { labelRo: 'Timp Livrare B2B', labelEn: 'B2B Delivery Time', value: '24-48 Ore' },
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
        titleRo: 'Tehnică de Calcul: Calculatoare, Laptopuri, Monitoare & Tablete',
        titleEn: 'IT Equipment: Desktop PCs, Laptops, Monitors & Tablets',
        descRo: 'Calculatoare desktop, monitoare profesionale, laptopuri, tablete, periferice IT și echipamente de tipărire.',
        descEn: 'Office desktop PCs, high-res monitors, corporate laptops, tablets, IT peripherals, and printing equipment.',
        iconName: 'Cpu'
      },
      {
        id: 's3',
        titleRo: 'Coolere de Apă, Protocol Birou & Cafea',
        titleEn: 'Water Coolers, Pantry Essentials & Coffee Solutions',
        descRo: 'Dispensere și coolere de apă pentru birouri, aparate de cafea, consumabile pentru bucătăria companiei și produse de igienă.',
        descEn: 'Office water coolers & dispensers, coffee systems, breakroom refreshments, pantry paper goods, and sanitation.',
        iconName: 'Zap'
      },
      {
        id: 's4',
        titleRo: 'Mobilier Ergonomic & Management Stocuri B2B',
        titleEn: 'Ergonomic Office Furniture & Automated Stocking',
        descRo: 'Scaune ergonomice, birouri reglabile și abonamente lunare de refacere automată a stocurilor de birou.',
        descEn: 'Ergonomic chairs, height-adjustable desks, and automated monthly B2B replenishment plans.',
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
