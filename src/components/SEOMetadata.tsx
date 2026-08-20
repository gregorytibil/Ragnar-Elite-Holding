import { useEffect } from 'react';
import { Language } from '../types';
import { PartnerProfile } from '../data/partnersData';
import { getPathForTab, getPathForPartner } from '../lib/router';

interface SEOMetadataProps {
  activeTab: string;
  activePartner?: PartnerProfile | null;
  lang: Language;
}

export default function SEOMetadata({ activeTab, activePartner, lang }: SEOMetadataProps) {
  useEffect(() => {
    const isRo = lang === 'ro';
    const baseUrl = 'https://ragnareliteholding.com';
    
    // Precise canonical determination
    let canonicalUrl = baseUrl + '/';
    if (activePartner) {
      // For all partner profiles, the official subdomain is the indexable, self-referencing canonical entity
      canonicalUrl = `https://${activePartner.subdomain}/`;
    } else if (typeof window !== 'undefined') {
      const currentPath = window.location.pathname.toLowerCase().replace(/\/$/, '');
      if (currentPath === '' || currentPath === '/') {
        canonicalUrl = baseUrl + '/';
      } else {
        // If the path corresponds to a valid known route, maintain self-referencing canonical
        canonicalUrl = `${baseUrl}${currentPath}`;
      }
    } else {
      const canonicalPath = getPathForTab(activeTab);
      canonicalUrl = baseUrl + (canonicalPath === '/' ? '/' : canonicalPath);
    }

    // Define page-specific metadata dictionary
    const metadataMap: Record<
      string,
      {
        title: string;
        description: string;
        keywords: string;
        ogType: string;
      }
    > = {
      home: {
        title: isRo
          ? 'Ragnar Elite Holding | Companie Internațională de Holding în Hong Kong'
          : 'Ragnar Elite Holding | International Holding Company in Hong Kong',
        description: isRo
          ? 'Ragnar Elite Holding este un grup internațional cu sediul în Hong Kong care administrează și dezvoltă companii în sectoare industriale și de servicii strategice.'
          : 'Ragnar Elite Holding is a Hong Kong-based international group managing and developing companies across strategic industrial and service sectors.',
        keywords: isRo
          ? 'Ragnar Elite Holding, holding romania, investitii blue chip, management strategic, fuziuni si achizitii, restructurare corporativa, real estate lux, tehnologie disruptiva, servicii corporative'
          : 'Ragnar Elite Holding, strategic leadership, blue chip investments, asset management, mergers and acquisitions, corporate restructuring, luxury real estate, disruptive technology, corporate services',
        ogType: 'website',
      },
      holding: {
        title: isRo
          ? 'Despre Noi & Consiliul de Administrație | Ragnar Elite'
          : 'About The Holding & Board of Directors | Ragnar Elite',
        description: isRo
          ? 'Descoperiți filozofia de business, moștenirea istorică și consiliul de administrație al Ragnar Elite Holding. Guvernanță corporativă de elită.'
          : 'Explore the business philosophy, historical heritage, and executive board of Ragnar Elite Holding. Elite corporate governance and asset leadership.',
        keywords: isRo
          ? 'filozofie ragnar elite, consiliu de administratie, guvernanță corporativă, administrare active, leadership strategic, executive chairman, rigoare fiscala'
          : 'Ragnar Elite philosophy, board of directors, corporate governance, asset management, strategic leadership, executive chairman, fiscal rigor',
        ogType: 'website',
      },
      portfolio: {
        title: isRo
          ? 'Portofoliu de Active & Divizii | Ragnar Elite Holding'
          : 'Asset Portfolio & Divisions | Ragnar Elite Holding',
        description: isRo
          ? 'Explorați diviziile active ale Ragnar Elite Holding, incluzând imobiliare de lux, tehnologii disruptive, gestionare active și servicii partajate.'
          : 'Explore the active divisions of Ragnar Elite Holding, covering luxury real estate, disruptive technologies, asset management, and shared corporate services.',
        keywords: isRo
          ? 'portofoliu active, divizii ragnar, investitii imobiliare lux, infrastructura critica, life sciences, administrare portofoliu, piete de capital, shared services'
          : 'asset portfolio, active divisions, luxury real estate investments, critical infrastructure, lifesciences, portfolio management, capital markets, shared services',
        ogType: 'website',
      },
      services: {
        title: isRo
          ? 'Servicii Strategice & Consultanță M&A | Ragnar Elite'
          : 'Strategic Services & M&A Advisory | Ragnar Elite',
        description: isRo
          ? 'Oferim asistență macroeconomică directă, integrare fiscală de nivel înalt, conformitate juridică internațională și restructurare operațională.'
          : 'We deliver direct macroeconomic support, high-level fiscal integration, international legal compliance, and operational restructuring.',
        keywords: isRo
          ? 'servicii holding, consultanta m&a, inginerie financiara, audit fiscal, conformitate juridica, restructurare operationala, integrare fiscala, management active'
          : 'holding services, m&a advisory, financial engineering, fiscal audit, legal compliance, operational restructuring, fiscal integration, asset management',
        ogType: 'website',
      },
      'divisions-core': {
        title: isRo
          ? 'Divizii Industriale & Tehnologii Strategice | Ragnar Elite'
          : 'Core Operations & Heavy Industries | Ragnar Elite',
        description: isRo
          ? 'Descoperiți diviziile noastre industriale active: aerospace și apărare, imobiliare, arhitectură, construcții, energie regenerabilă, minerit, biotehnologie, agricultură și logistică globală.'
          : 'Explore our heavy industrial and core operations: aerospace, luxury real estate, architecture, construction, renewable energy, mining, medical biotechnology, sustainable agriculture, and global logistics.',
        keywords: isRo
          ? 'divizii industriale, infrastructura critica, tehnologii strategice, ragnar elite, aparare marina, real estate lux, exploatare miniera, energie regenerabila, logistica globala, transport multimodal'
          : 'industrial divisions, core operations, critical infrastructure, ragnar elite, marine defense, luxury real estate, mining operations, renewable energy, global logistics, multi-modal transport',
        ogType: 'website',
      },
      'divisions-governance': {
        title: isRo
          ? 'Management Strategic, Capital & Servicii Integrate | Ragnar Elite'
          : 'Corporate Governance, Finance & Support | Ragnar Elite',
        description: isRo
          ? 'Explorați pilonul nostru de guvernanță corporativă: private equity, fuziuni și achiziții (M&A), asset management global, audit financiar, consultanță executivă strategică și securitate cibernetică.'
          : 'Explore our corporate governance and strategic support engine: private equity, mergers and acquisitions (M&A), global asset management, financial auditing, executive consultancy, and enterprise cybersecurity.',
        keywords: isRo
          ? 'management strategic, capital privat, fuziuni si achizitii, asset management global, audit financiar, consultanta executiva, securitate cibernetica, educatie de elita, consumabile corporative, curatenie industriala'
          : 'corporate governance, private equity, mergers and acquisitions, asset management, financial auditing, strategic consultancy, cybersecurity, executive education, corporate supplies, commercial sanitation',
        ogType: 'website',
      },
      partners: {
        title: isRo
          ? 'Parteneri & Alianțe Strategice | Ragnar Elite'
          : 'Partners & Strategic Alliances | Ragnar Elite',
        description: isRo
          ? 'Alianțe globale de top pentru asigurarea excelenței operaționale și a imunității macroeconomice prin audit independent și consultanță.'
          : 'Top global alliances ensuring operational excellence and macroeconomic immunity through independent auditing and consulting.',
        keywords: isRo
          ? 'parteneri ragnar elite, aliante strategice, kpmg, mckinsey, deloitte, pwc, ey, linklaters, clifford chance, microsoft'
          : 'ragnar elite partners, strategic alliances, kpmg, mckinsey, deloitte, pwc, ey, linklaters, clifford chance, microsoft',
        ogType: 'website',
      },
      contact: {
        title: isRo
          ? 'Parteneriate Strategice & Propune Proiect | Ragnar Elite'
          : 'Strategic Partnerships & M&A Proposals | Ragnar Elite',
        description: isRo
          ? 'Contactați Ragnar Elite Holding pentru parteneriate macroeconomice directe, propuneri de fuziuni și achiziții (M&A) sau solicitări de conformitate.'
          : 'Get in touch with Ragnar Elite Holding for direct macroeconomic partnerships, merger and acquisition (M&A) proposals, or compliance requests.',
        keywords: isRo
          ? 'contact ragnar elite, parteneriat strategic, propunere fuziune, propunere achizitie, adresa office, ragnareliteholding, audit date, solicitari conformitate'
          : 'contact ragnar elite, strategic partnership, merger proposal, acquisition proposal, office email, ragnareliteholding, data audit, compliance inquiry',
        ogType: 'website',
      },
      legal: {
        title: isRo
          ? 'Politica de Confidențialitate & GDPR | Ragnar Elite Holding'
          : 'Privacy Policy & GDPR Compliance | Ragnar Elite Holding',
        description: isRo
          ? 'Termeni legali de utilizare, prelucrarea datelor cu caracter personal și conformitate GDPR aplicate la nivelul Ragnar Elite Holding.'
          : 'Legal terms of use, personal data processing guidelines, and GDPR compliance framework applied across Ragnar Elite Holding.',
        keywords: isRo
          ? 'politica confidentialitate, gdpr ragnar, protectia datelor, termeni legali, conformitate holding, securitate date, prelucrare date ragnar'
          : 'privacy policy, gdpr compliance, data protection, legal terms, holding compliance, data security, data processing ragnar',
        ogType: 'website',
      },
      terms: {
        title: isRo
          ? 'Termeni și Condiții de Utilizare | Ragnar Elite Holding'
          : 'Terms & Conditions of Use | Ragnar Elite Holding',
        description: isRo
          ? 'Acordul cadru de utilizare a platformei digitale Ragnar Elite, declinarea răspunderii financiare și proprietatea intelectuală.'
          : 'The framework agreement for utilizing the Ragnar Elite digital platform, financial disclaimers, and intellectual property rights.',
        keywords: isRo
          ? 'termeni si conditii, acord utilizare, declinare raspundere, proprietate intelectuala ragnar, raspundere financiara, jurisdictie ragnar'
          : 'terms and conditions, user agreement, financial disclaimer, intellectual property rights, financial liability, jurisdiction ragnar',
        ogType: 'website',
      },
    };

    let currentMeta = metadataMap[activeTab] || metadataMap.home;
    if (activePartner) {
      currentMeta = {
        title: (isRo ? activePartner.nameRo : activePartner.nameEn) + ' | Ragnar Elite Partner',
        description: isRo ? activePartner.descriptionRo : activePartner.descriptionEn,
        keywords: `${activePartner.slug}, ${activePartner.subdomain}, ${isRo ? activePartner.categoryRo : activePartner.categoryEn}, ragnar elite partner`,
        ogType: 'website',
      };
    }

    // 1. Update Title and HTML Lang
    document.title = currentMeta.title;
    document.documentElement.lang = lang;

    // 2. Helper to set/create meta elements
    const setMeta = (name: string, content: string, isProperty = false) => {
      const attributeName = isProperty ? 'property' : 'name';
      let element = document.querySelector(`meta[${attributeName}="${name}"]`);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attributeName, name);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    // 3. Update Standard Meta Tags
    setMeta('description', currentMeta.description);
    setMeta('keywords', currentMeta.keywords);
    setMeta('robots', 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1');
    setMeta('google', 'notranslate');

    // 4. Update Canonical URL
    let canonicalLink = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', canonicalUrl);

    // 5. Update Open Graph Tags
    const previewImage = activePartner?.heroBgImage || 'https://i.imgur.com/InRDrMr.png';
    setMeta('og:title', currentMeta.title, true);
    setMeta('og:description', currentMeta.description, true);
    setMeta('og:type', currentMeta.ogType, true);
    setMeta('og:url', canonicalUrl, true);
    setMeta('og:image', previewImage, true);
    setMeta('og:site_name', 'Ragnar Elite Holding', true);
    setMeta('og:locale', isRo ? 'ro_RO' : 'en_US', true);

    // 6. Update Twitter Card Tags
    setMeta('twitter:card', 'summary_large_image');
    setMeta('twitter:title', currentMeta.title);
    setMeta('twitter:description', currentMeta.description);
    setMeta('twitter:image', previewImage);

    // 7. Inject JSON-LD Schema
    const baseCorporationSchema = {
      '@context': 'https://schema.org',
      '@type': 'Corporation',
      'id': `${baseUrl}/#corporation`,
      'name': 'Ragnar Elite Holding',
      'alternateName': 'Ragnar Elite',
      'url': baseUrl,
      'logo': 'https://i.imgur.com/InRDrMr.png',
      'telephone': '+852 4736 6189',
      'contactPoint': {
        '@type': 'ContactPoint',
        'telephone': '+852 4736 6189',
        'email': 'contact@ragnareliteholding.com',
        'contactType': 'corporate partnerships',
        'availableLanguage': ['Romanian', 'English'],
      },
      'address': {
        '@type': 'PostalAddress',
        'streetAddress': 'Office C, Level 7, World Trust Tower, 50 Stanley Street',
        'addressLocality': 'Central',
        'addressRegion': 'Hong Kong Island',
        'addressCountry': 'HK',
      },
      'description': 'Ragnar Elite Holding is an elite investment holding company managing critical infrastructure, real estate, disruptive tech, lifesciences, and financial portfolios.',
    };

    let schemaObject: Record<string, any> = {};

    if (activePartner) {
      const partnerSubdomainUrl = `https://${activePartner.subdomain}/`;
      schemaObject = {
        '@context': 'https://schema.org',
        '@graph': [
          baseCorporationSchema,
          {
            '@type': 'Organization',
            '@id': `${partnerSubdomainUrl}#organization`,
            'name': isRo ? activePartner.nameRo : activePartner.nameEn,
            'url': partnerSubdomainUrl,
            'logo': 'https://i.imgur.com/InRDrMr.png',
            'image': activePartner.heroBgImage,
            'description': isRo ? activePartner.descriptionRo : activePartner.descriptionEn,
            'telephone': '+852 4736 6189',
            'email': activePartner.contactEmail,
            'parentOrganization': {
              '@type': 'Corporation',
              '@id': `${baseUrl}/#corporation`,
              'name': 'Ragnar Elite Holding',
              'url': baseUrl,
            },
            'hasOfferCatalog': {
              '@type': 'OfferCatalog',
              'name': isRo ? 'Servicii Specializate' : 'Specialized Services',
              'itemListElement': activePartner.services.map((svc, idx) => ({
                '@type': 'Offer',
                'itemOffered': {
                  '@type': 'Service',
                  'name': isRo ? svc.titleRo : svc.titleEn,
                  'description': isRo ? svc.descRo : svc.descEn,
                },
                'position': idx + 1,
              })),
            },
          },
          {
            '@type': 'WebSite',
            '@id': `${partnerSubdomainUrl}#website`,
            'url': partnerSubdomainUrl,
            'name': isRo ? activePartner.nameRo : activePartner.nameEn,
            'publisher': {
              '@id': `${partnerSubdomainUrl}#organization`,
            },
          },
          {
            '@type': 'WebPage',
            '@id': `${partnerSubdomainUrl}#webpage`,
            'url': partnerSubdomainUrl,
            'name': currentMeta.title,
            'description': currentMeta.description,
            'isPartOf': {
              '@id': `${partnerSubdomainUrl}#website`,
            },
            'about': {
              '@id': `${partnerSubdomainUrl}#organization`,
            },
          },
        ],
      };
    } else if (activeTab === 'home') {
      schemaObject = {
        '@context': 'https://schema.org',
        '@graph': [
          baseCorporationSchema,
          {
            '@type': 'WebSite',
            '@id': `${baseUrl}/#website`,
            'url': baseUrl,
            'name': 'Ragnar Elite Holding',
            'publisher': {
              '@id': `${baseUrl}/#corporation`,
            },
          },
          {
            '@type': 'WebPage',
            '@id': `${baseUrl}/#webpage`,
            'url': baseUrl,
            'name': currentMeta.title,
            'isPartOf': {
              '@id': `${baseUrl}/#website`,
            },
            'about': {
              '@id': `${baseUrl}/#corporation`,
            },
            'description': currentMeta.description,
          },
        ],
      };
    } else if (activeTab === 'holding') {
      schemaObject = {
        '@context': 'https://schema.org',
        '@graph': [
          {
            '@type': 'AboutPage',
            '@id': `${canonicalUrl}/#aboutpage`,
            'url': canonicalUrl,
            'name': currentMeta.title,
            'description': currentMeta.description,
            'isPartOf': {
              '@id': `${baseUrl}/#website`,
            },
            'mainEntity': {
              '@id': `${baseUrl}/#corporation`,
            },
          },
        ],
      };
    } else if (activeTab === 'portfolio') {
      schemaObject = {
        '@context': 'https://schema.org',
        '@graph': [
          {
            '@type': 'CollectionPage',
            '@id': `${canonicalUrl}/#collectionpage`,
            'url': canonicalUrl,
            'name': currentMeta.title,
            'description': currentMeta.description,
            'isPartOf': {
              '@id': `${baseUrl}/#website`,
            },
            'about': {
              '@id': `${baseUrl}/#corporation`,
            },
          },
        ],
      };
    } else if (activeTab === 'services') {
      schemaObject = {
        '@context': 'https://schema.org',
        '@graph': [
          {
            '@type': 'WebPage',
            '@id': `${canonicalUrl}/#webpage`,
            'url': canonicalUrl,
            'name': currentMeta.title,
            'description': currentMeta.description,
            'isPartOf': {
              '@id': `${baseUrl}/#website`,
            },
          },
          {
            '@type': 'Service',
            'name': isRo ? 'Consultanță Tranzacțională M&A' : 'M&A Transactional Advisory',
            'provider': {
              '@id': `${baseUrl}/#corporation`,
            },
            'description': isRo
              ? 'Asistență juridică, audit financiar și inginerie fiscală pentru tranzacții internaționale.'
              : 'Legal assistance, financial audit, and tax engineering for international deals.',
          },
        ],
      };
    } else if (activeTab === 'divisions-core' || activeTab === 'divisions-governance' || activeTab === 'partners') {
      schemaObject = {
        '@context': 'https://schema.org',
        '@graph': [
          {
            '@type': 'WebPage',
            '@id': `${canonicalUrl}/#webpage`,
            'url': canonicalUrl,
            'name': currentMeta.title,
            'description': currentMeta.description,
            'isPartOf': {
              '@id': `${baseUrl}/#website`,
            },
          },
          {
            '@type': 'CollectionPage',
            '@id': `${canonicalUrl}/#collectionpage`,
            'url': canonicalUrl,
            'name': currentMeta.title,
            'description': currentMeta.description,
            'isPartOf': {
              '@id': `${baseUrl}/#website`,
            },
            'about': {
              '@id': `${baseUrl}/#corporation`,
            },
          },
        ],
      };
    } else {
      // General web page fallback
      schemaObject = {
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        '@id': `${canonicalUrl}/#webpage`,
        'url': canonicalUrl,
        'name': currentMeta.title,
        'description': currentMeta.description,
        'isPartOf': {
          '@id': `${baseUrl}/#website`,
        },
      };
    }

    // Set or replace JSON-LD script tag in DOM head
    let scriptTag = document.getElementById('jsonld-schema');
    if (!scriptTag) {
      scriptTag = document.createElement('script');
      scriptTag.setAttribute('id', 'jsonld-schema');
      scriptTag.setAttribute('type', 'application/ld+json');
      document.head.appendChild(scriptTag);
    }
    scriptTag.textContent = JSON.stringify(schemaObject);
  }, [activeTab, activePartner, lang]);

  return null; // Side-effect only component
}
