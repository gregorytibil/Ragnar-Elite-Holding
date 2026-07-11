import { ArrowRight, ShieldCheck } from 'lucide-react';
import { motion } from 'motion/react';
import { Language } from '../types';
import { translations } from '../translations';

interface HomeViewProps {
  currentLang: Language;
  setActiveTab: (tab: string) => void;
}

export default function HomeView({ currentLang, setActiveTab }: HomeViewProps) {
  const t = translations[currentLang];

  const pillars = [
    {
      title: t.pillarFortitudeTitle,
      desc: t.pillarFortitudeDesc,
    },
    {
      title: t.pillarExcellenceTitle,
      desc: t.pillarExcellenceDesc,
    },
    {
      title: t.pillarIntegrityTitle,
      desc: t.pillarIntegrityDesc,
    },
    {
      title: t.pillarVisionTitle,
      desc: t.pillarVisionDesc,
    },
  ];

  return (
    <div className="pt-[115px] sm:pt-[125px] md:pt-[135px] min-h-screen bg-bej-bg text-navy-brand">
      {/* Hero Section */}
      <section className="relative hero bg-[#0B1B3D] text-[#FAF6F0] min-h-[75vh] flex items-center justify-center text-center px-6 py-10 md:py-20 border-b-3 border-sky-accent">
        {/* Subtle decorative video placeholder/background overlay as in the HTML code */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0B1B3D]/50 to-[#0B1B3D]/80 z-1"></div>
        <div className="max-w-[800px] mx-auto relative z-10 hero-content">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1 bg-sky-accent/10 border border-sky-accent/20 rounded-full text-[10px] text-sky-accent font-mono tracking-widest mb-6 uppercase"
          >
            <ShieldCheck className="w-3.5 h-3.5" />
            ESTABLISHED IN HONG KONG
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-serif text-3xl sm:text-4xl md:text-[3.5rem] font-bold uppercase tracking-[2px] mb-6 leading-tight text-[#FAF6F0]"
          >
            {t.heroTitle}
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-sans font-light text-base sm:text-lg md:text-[1.4rem] text-sky-accent mb-10 tracking-[1px] leading-[1.8]"
          >
            {t.heroSubtitle}
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <button
              onClick={() => setActiveTab('portfolio')}
              className="btn-elite inline-block px-[35px] py-[15px] bg-sky-accent hover:bg-transparent text-navy-brand hover:text-sky-accent font-semibold text-xs md:text-[0.9rem] uppercase tracking-[1px] rounded-[4px] border border-sky-accent transition-all duration-300 cursor-pointer"
            >
              {t.heroBtn}
            </button>
          </motion.div>
        </div>
      </section>

      {/* About Quote Section (White BG) */}
      <section className="bg-bej-card py-20 px-6 border-b border-navy-brand/5">
        <div className="max-w-[1200px] mx-auto">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-serif text-lg sm:text-2xl md:text-[1.8rem] italic text-navy-brand max-w-[900px] mx-auto text-center leading-[1.6]"
          >
            „{t.aboutQuote}”
          </motion.p>
        </div>
      </section>

      {/* Pillars Section */}
      <section className="max-w-[1200px] mx-auto px-6 py-[60px]">
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-serif text-3xl sm:text-4xl md:text-[2.5rem] font-bold text-center mb-[50px] text-navy-brand"
        >
          {t.pillarsTitle}
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[30px]">
          {pillars.map((pillar, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              whileHover={{ y: -3 }}
              className="bg-bej-card p-[40px_30px] rounded-[4px] border-l-4 border-sky-accent shadow-[0_5px_15px_rgba(11,27,61,0.02)] transition-transform duration-300"
            >
              <h3 className="font-serif text-lg sm:text-[1.4rem] font-bold mb-[15px] text-navy-brand">
                {pillar.title}
              </h3>
              <p className="font-sans font-light text-sm sm:text-[0.95rem] text-[#444] text-justify leading-relaxed">
                {pillar.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Corporate Badges of Scale */}
      <section className="py-16 bg-navy-brand text-[#FAF6F0] border-t-2 border-b-2 border-sky-accent">
        <div className="max-w-[1200px] mx-auto px-6 grid grid-cols-2 lg:grid-cols-4 gap-8 text-center font-mono tracking-widest">
          <div className="p-4 border-r border-[#FAF6F0]/10 last:border-0">
            <span className="block text-2xl sm:text-4xl font-bold text-sky-accent mb-2 font-serif">13</span>
            <span className="text-[10px] opacity-60 uppercase">
              {currentLang === 'ro' ? 'Divizii Active' : 'Active Divisions'}
            </span>
          </div>
          <div className="p-4 border-r border-[#FAF6F0]/10 last:border-0">
            <span className="block text-2xl sm:text-4xl font-bold text-sky-accent mb-2 font-serif">100%</span>
            <span className="text-[10px] opacity-60 uppercase">
              {currentLang === 'ro' ? 'Integrare Verticală' : 'Vertical Integration'}
            </span>
          </div>
          <div className="p-4 border-r border-[#FAF6F0]/10 last:border-0">
            <span className="block text-2xl sm:text-4xl font-bold text-sky-accent mb-2 font-serif">BLUE-CHIP</span>
            <span className="text-[10px] opacity-60 uppercase">
              {currentLang === 'ro' ? 'Standard Active' : 'Asset Standard'}
            </span>
          </div>
          <div className="p-4 last:border-0">
            <span className="block text-2xl sm:text-4xl font-bold text-sky-accent mb-2 font-serif">IFC HK</span>
            <span className="text-[10px] opacity-60 uppercase">
              {currentLang === 'ro' ? 'Sediu Global' : 'Global Headquarters'}
            </span>
          </div>
        </div>
      </section>
    </div>
  );
}
