import { motion } from 'motion/react';
import { Scale, FileCheck, ShieldAlert, Award, Globe, HelpCircle } from 'lucide-react';
import { Language } from '../types';

interface TermsViewProps {
  currentLang: Language;
}

export default function TermsView({ currentLang }: TermsViewProps) {
  const isRo = currentLang === 'ro';

  const content = {
    title: isRo ? 'Termeni și Condiții' : 'Terms & Conditions',
    subtitle: isRo 
      ? 'Acordul cadru privind guvernanța digitală și regulamentul de utilizare a platformei Ragnar Elite.'
      : 'The framework agreement on digital governance and utilization rules of the Ragnar Elite platform.',
    updated: isRo ? 'Ultima actualizare: Iulie 2026' : 'Last updated: July 2026',
    sidebarTitle: isRo ? 'Sectiuni Acord' : 'Agreement Sections',
  };

  const sections = [
    {
      icon: <Globe className="w-5 h-5" />,
      title: isRo ? '1. Dispoziții Generale & Statut' : '1. General Provisions & Status',
      desc: isRo 
        ? 'Prezenta platformă digitală este proprietatea exclusivă a Ragnar Elite Holding. Prin utilizarea acestui site, acceptați pe deplin și fără rezerve acești termeni de utilizare. Dacă nu sunteți de acord cu prezentele clauze, vă rugăm să sistați imediat navigarea pe acest domeniu.'
        : 'This digital platform is the exclusive property of Ragnar Elite Holding. By using this website, you fully and unreservedly accept these terms of use. If you do not agree with these clauses, please immediately cease browsing this domain.'
    },
    {
      icon: <ShieldAlert className="w-5 h-5" />,
      title: isRo ? '2. Declinarea Răspunderii (Financial Disclaimer)' : '2. Financial Disclaimer',
      desc: isRo
        ? 'Informațiile publicate pe site-ul Ragnar Elite Holding au un caracter pur informativ și de prezentare corporativă globală. Niciun material, statistică sau studiu de caz prezentat nu reprezintă o ofertă publică de valori mobiliare, consultanță în investiții, recomandare de tranzacționare sau solicitare directă de capital. Deciziile strategice de investiții trebuie fundamentate pe consultanță profesională dedicată.'
        : 'The information published on the Ragnar Elite Holding website is for informational and global corporate presentation purposes only. No material, statistics, or case studies presented represent a public offering of securities, investment advice, trading recommendations, or a direct solicitation of capital. Strategic investment decisions should be based on dedicated professional advice.'
    },
    {
      icon: <Award className="w-5 h-5" />,
      title: isRo ? '3. Proprietate Intelectuală & Drepturi' : '3. Intellectual Property Rights',
      desc: isRo
        ? 'Toate drepturile asupra designului, structurii vizuale, logo-ului (inclusiv marca înregistrată Ragnar Elite), textelor, codului sursă și bazei de date sunt rezervate în totalitate holdingului. Este strict interzisă reproducerea, multiplicarea, distribuirea sau crearea de opere derivate fără acordul scris, prealabil și semnat de către Consiliul de Administrație.'
        : 'All rights to the design, visual structure, logo (including the registered trademark of Ragnar Elite), texts, source code, and database are fully reserved by the holding. Any reproduction, multiplication, distribution, or creation of derivative works is strictly prohibited without the prior written and signed consent of the Board of Directors.'
    },
    {
      icon: <FileCheck className="w-5 h-5" />,
      title: isRo ? '4. Condiții de Utilizare a Formularului' : '4. Contact Form Usage Rules',
      desc: isRo
        ? 'Prin completarea formularului de contact (Solicitare Strategică), vă obligați să furnizați informații reale, corecte și de natură profesională. Ragnar Elite Holding își rezervă dreptul exclusiv de a ignora, șterge sau raporta orice mesaje considerate spam, cu conținut injurios, ilegal sau propuneri de afaceri care contravin normelor etice și legale ale holdingului.'
        : 'By completing the contact form (Strategic Request), you undertake to provide real, accurate, and professional information. Ragnar Elite Holding reserves the exclusive right to ignore, delete, or report any messages deemed spam, offensive, illegal, or business proposals that violate the holding\'s ethical and legal standards.'
    },
    {
      icon: <Scale className="w-5 h-5" />,
      title: isRo ? '5. Limitarea Răspunderii Tehnice' : '5. Limitation of Technical Liability',
      desc: isRo
        ? 'Ragnar Elite Holding nu garantează că platforma va fi permanent disponibilă, fără întreruperi tehnice sau fără erori cibernetice cauzate de servere terțe. Nu ne asumăm răspunderea pentru niciun fel de pierderi directe sau indirecte rezultate din utilizarea sau imposibilitatea utilizării site-ului.'
        : 'Ragnar Elite Holding does not guarantee that the platform will be permanently available, free of technical interruptions, or cyber errors caused by third-party servers. We accept no liability for any direct or indirect losses resulting from the use or inability to use the website.'
    },
    {
      icon: <HelpCircle className="w-5 h-5" />,
      title: isRo ? '6. Jurisdicție și Modificări' : '6. Jurisdiction & Amendments',
      desc: isRo
        ? 'Prezentele condiții sunt guvernate de legislația internațională aplicabilă holdingurilor comerciale și de regulamentele sediului nostru central. Ragnar Elite Holding își rezervă dreptul de a modifica acești termeni în orice moment, fără notificare prealabilă. Continuarea utilizării site-ului reprezintă acceptul dumneavoastră implicit.'
        : 'These conditions are governed by the international laws applicable to commercial holding companies and the regulations of our headquarters. Ragnar Elite Holding reserves the right to modify these terms at any time without prior notice. Continued use of the website constitutes your implicit acceptance.'
    }
  ];

  return (
    <div 
      className="min-h-screen bg-ice-marble text-[#0B1B3D] selection:bg-[#0B1B3D] selection:text-white overflow-hidden relative"
      itemScope
      itemType="https://schema.org/WebPage"
    >
      {/* Abstract digital global data connection network lines background (5% opacity, max blur) */}
      <div className="fixed inset-0 z-0 pointer-events-none select-none overflow-hidden opacity-[0.05]">
        <img 
          src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1600&q=80"
          alt="Abstract digital network connections"
          className="w-full h-full object-cover filter blur-[4px]"
          referrerPolicy="no-referrer"
        />
      </div>
      {/* Hero Section */}
      <section className="relative bg-[#050D1D] text-[#FAF6F0] pt-[170px] pb-28 md:pt-[240px] md:pb-[160px] px-6 border-b border-white/5 overflow-hidden">
        {/* Background image */}
        <img 
          src="https://i.imgur.com/RHRfHkr.jpeg" 
          alt="Terms & Conditions background"
          className="absolute inset-0 w-full h-full object-cover opacity-[0.35] pointer-events-none z-0 scale-105"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#050D1D] via-[#0B1B3D]/95 to-[#050D1D] z-1 opacity-60"></div>
        <div className="absolute inset-0 bg-[radial-gradient(#C8D9E6_0.75px,transparent_0.75px)] [background-size:24px_24px] opacity-[0.07] z-2"></div>
        <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent z-3"></div>

        <div className="max-w-[1140px] mx-auto relative z-10 px-4 md:px-8">
          <div className="flex flex-col items-start text-left max-w-[850px]">
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-3 py-1 bg-white/[0.04] border border-white/10 rounded-sm text-[9px] md:text-[10px] text-[#A2D2FF] font-mono tracking-[0.3em] uppercase mb-6 backdrop-blur-md"
            >
              <span>TERMS & CONDITIONS</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="font-sans text-4xl sm:text-5xl md:text-[4.2rem] font-bold mb-6 tracking-tight text-white leading-[1.1] uppercase"
            >
              {content.title}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="text-[#C8D9E6] text-base sm:text-lg md:text-[1.35rem] font-sans font-light tracking-wide max-w-2xl leading-relaxed"
            >
              {content.subtitle}
            </motion.p>
          </div>
        </div>
      </section>

      {/* Main Content Container */}
      <div className="max-w-[1140px] mx-auto px-6 pb-24 md:pb-36 relative z-10 -mt-12 md:-mt-24">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 relative">
          
          {/* Sidebar / Table of Contents (Sticky) */}
          <div className="lg:col-span-4 hidden lg:block">
            <div className="sticky top-32 space-y-8 bg-white/50 backdrop-blur-md p-8 border border-[#0B1B3D]/10 rounded-sm">
              <Scale className="w-8 h-8 text-[#A2D2FF] mb-6" />
              <h3 className="font-sans text-xs font-bold text-[#0B1B3D] uppercase tracking-[0.2em] border-b border-[#0B1B3D]/10 pb-3">
                {content.sidebarTitle}
              </h3>
              <div className="space-y-4">
                {sections.map((sec, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                     <span className="font-mono text-[10px] text-[#A2D2FF] font-bold mt-1">0{idx + 1}</span>
                     <span className="text-sm font-sans font-medium text-[#0B1B3D] uppercase tracking-wide leading-snug">
                        {sec.title.split('. ')[1] || sec.title}
                     </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Legal Content Flow */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-8 space-y-16 lg:space-y-24 bg-white/50 backdrop-blur-sm p-6 sm:p-10 lg:p-0 lg:bg-transparent lg:backdrop-blur-none border border-[#0B1B3D]/5 lg:border-none rounded-sm"
          >
            {sections.map((sec, idx) => (
              <div key={idx} className="group relative">
                <div className="hidden lg:block absolute -left-12 top-1 font-mono text-sm text-[#A2D2FF]/50 font-bold">
                  0{idx + 1}
                </div>
                <h2 className="text-2xl md:text-3xl font-sans font-bold uppercase tracking-tight text-[#0B1B3D] mb-6 flex items-start gap-4">
                  <span className="text-[#A2D2FF] mt-1.5 shrink-0">{sec.icon}</span>
                  {sec.title}
                </h2>
                <div className="prose prose-lg prose-slate max-w-none text-slate-600 font-light leading-relaxed">
                  <p>{sec.desc}</p>
                </div>
              </div>
            ))}

            <div className="pt-6 border-t border-[#0B1B3D]/10 text-center lg:text-left">
              <p className="text-xs text-slate-400 font-mono tracking-wider">
                {content.updated}
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
