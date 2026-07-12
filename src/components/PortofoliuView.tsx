import { motion } from 'motion/react';
import { ArrowUpRight, Building2, Cpu, Layers, Dna, Quote } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../translations';

interface PortofoliuViewProps {
  currentLang: Language;
}

export default function PortofoliuView({ currentLang }: PortofoliuViewProps) {
  const t = translations[currentLang];

  const divisions = [
    {
      icon: Building2,
      title: t.div1Title.replace(/🏛️ \d{2}\. /, ''),
      subtitle: t.div1Subtitle,
      tag: 'DIVISION I',
      items: [
        { title: t.div1Item1Title, desc: t.div1Item1Desc },
        { title: t.div1Item2Title, desc: t.div1Item2Desc },
        { title: t.div1Item3Title, desc: t.div1Item3Desc },
      ],
    },
    {
      icon: Cpu,
      title: t.div2Title.replace(/💻 \d{2}\. /, ''),
      subtitle: t.div2Subtitle,
      tag: 'DIVISION II',
      items: [
        { title: t.div2Item1Title, desc: t.div2Item1Desc },
        { title: t.div2Item2Title, desc: t.div2Item2Desc },
        { title: t.div2Item3Title, desc: t.div2Item3Desc },
      ],
    },
    {
      icon: Layers,
      title: t.div3Title.replace(/📊 \d{2}\. /, ''),
      subtitle: t.div3Subtitle,
      tag: 'DIVISION III',
      items: [
        { title: t.div3Item1Title, desc: t.div3Item1Desc },
        { title: t.div3Item2Title, desc: t.div3Item2Desc },
        { title: t.div3Item3Title, desc: t.div3Item3Desc },
      ],
    },
    {
      icon: Dna,
      title: t.div4Title.replace(/🧬 \d{2}\. /, ''),
      subtitle: t.div4Subtitle,
      tag: 'DIVISION IV',
      items: [
        { title: t.div4Item1Title, desc: t.div4Item1Desc },
        { title: t.div4Item2Title, desc: t.div4Item2Desc },
        { title: t.div4Item3Title, desc: t.div4Item3Desc },
        { title: t.div4Item4Title, desc: t.div4Item4Desc },
      ],
    },
  ];

  return (
    <div 
      className="min-h-screen bg-[#F7F6F3] bg-grid-pattern text-[#0B1B3D] selection:bg-[#0B1B3D] selection:text-white relative overflow-hidden"
      itemScope
      itemType="https://schema.org/CollectionPage"
    >
      {/* Global subtle texture */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-[0.02] pointer-events-none z-0"></div>

      {/* Hero Section */}
      <section className="relative bg-[#050D1D] text-[#FAF6F0] pt-[170px] pb-28 md:pt-[240px] md:pb-[160px] px-6 border-b border-white/5 overflow-hidden">
        {/* Subtle high-end mesh and lighting layers */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#050D1D] via-[#0B1B3D]/95 to-[#050D1D] z-1"></div>
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
              <span>PORTFOLIO</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="font-sans text-4xl sm:text-5xl md:text-[4.2rem] font-bold mb-6 tracking-tight text-white leading-[1.1] uppercase"
            >
              {t.portfolioHeaderTitle}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="text-[#C8D9E6] text-base sm:text-lg md:text-[1.35rem] font-sans font-light tracking-wide max-w-2xl leading-relaxed"
            >
              {t.portfolioHeaderSubtitle}
            </motion.p>
          </div>
        </div>
      </section>

      {/* Main Content Container */}
      <div className="max-w-[1140px] mx-auto px-6 pb-24 md:pb-36 relative z-10">
        {/* Intro Quote */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="bg-white rounded-sm p-8 md:p-[70px] shadow-[0_20px_50px_rgba(5,13,29,0.05)] -mt-12 md:-mt-[80px] relative z-20 border border-[#0B1B3D]/10 text-center"
        >
          <div className="absolute top-0 left-0 w-full h-[2px] bg-[#0B1B3D]"></div>
          <Quote className="w-6 h-6 text-[#A2D2FF] mx-auto mb-6" />
          <p className="font-sans text-lg sm:text-xl md:text-[1.35rem] leading-[1.7] text-[#0B1B3D]/90 max-w-3xl mx-auto font-light italic">
            {t.portfolioIntro}
          </p>
        </motion.div>

        {/* Division Sections */}
        <div className="space-y-24 md:space-y-36 mt-24">
          {divisions.map((div, idx) => (
            <div 
              key={idx} 
              className="grid grid-cols-1 lg:grid-cols-12 gap-12 border-t border-[#0B1B3D]/10 pt-16"
              itemProp="department"
              itemScope
              itemType="https://schema.org/Corporation"
            >
              <div className="lg:col-span-4">
                <div className="sticky top-32 space-y-4">
                  <span className="font-mono text-[10px] tracking-[0.3em] text-[#0B1B3D] uppercase block font-bold">
                    {div.tag}
                  </span>
                  <div className="w-14 h-14 bg-[#050D1D] flex items-center justify-center rounded-lg border border-white/5 shadow-inner">
                    <div.icon className="w-7 h-7 text-[#A2D2FF]" />
                  </div>
                  <h2 
                    className="text-3xl md:text-4xl font-sans font-bold uppercase tracking-tight text-[#0B1B3D]"
                    itemProp="name"
                  >
                    {div.title}
                  </h2>
                  <p 
                    className="text-lg text-slate-500 font-light leading-relaxed"
                    itemProp="description"
                  >
                    {div.subtitle}
                  </p>
                </div>
              </div>

              <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-6" role="list" aria-label={div.title}>
                {div.items.map((item, itemIdx) => (
                  <motion.div
                    key={itemIdx}
                    whileHover={{ 
                      y: -8,
                      boxShadow: '0 25px 50px -12px rgba(11,27,61,0.25)',
                      borderColor: '#A2D2FF'
                    }}
                    className="group bg-white p-8 border border-slate-200/80 rounded-sm transition-all duration-300 flex flex-col justify-between"
                    itemProp="hasPart"
                    itemScope
                    itemType="https://schema.org/Project"
                    role="listitem"
                  >
                    <div className="space-y-4">
                      <h3 
                        className="font-sans text-lg font-semibold text-[#0B1B3D] leading-tight group-hover:text-[#0B1B3D]/80 transition-colors duration-200"
                        itemProp="name"
                      >
                        {item.title}
                      </h3>
                      <p 
                        className="font-sans font-light text-sm text-slate-500 leading-relaxed"
                        itemProp="description"
                      >
                        {item.desc}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
