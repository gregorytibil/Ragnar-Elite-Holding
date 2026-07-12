import { motion } from 'motion/react';
import { Coins, Settings, Globe, Shield, Link2, BarChart3, Scale, Users, Quote } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../translations';

interface ServiciiViewProps {
  currentLang: Language;
}

export default function ServiciiView({ currentLang }: ServiciiViewProps) {
  const t = translations[currentLang];

  // Helper to remove emojis from titles if they exist
  const cleanTitle = (text: string) => text.replace(/[\u{1F300}-\u{1F9FF}]|[\u{2600}-\u{26FF}]/gu, '').trim();

  const serviceGroups = [
    {
      title: t.servicesSub1,
      tag: 'SERVICES I',
      items: [
        { title: cleanTitle(t.service1Title), desc: t.service1Desc, icon: Coins },
        { title: cleanTitle(t.service2Title), desc: t.service2Desc, icon: Settings },
        { title: cleanTitle(t.service3Title), desc: t.service3Desc, icon: Globe },
        { title: cleanTitle(t.service4Title), desc: t.service4Desc, icon: Shield },
        { title: cleanTitle(t.service5Title), desc: t.service5Desc, icon: Link2 },
      ],
    },
    {
      title: t.servicesSub2,
      tag: 'SERVICES II',
      items: [
        { title: cleanTitle(t.service6Title), desc: t.service6Desc, icon: BarChart3 },
        { title: cleanTitle(t.service7Title), desc: t.service7Desc, icon: Scale },
        { title: cleanTitle(t.service8Title), desc: t.service8Desc, icon: Users },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-[#F5EFEB] bg-grid-pattern text-[#2F4156] selection:bg-[#2F4156] selection:text-white overflow-hidden">
      {/* Hero Section */}
      <section className="relative bg-[#2F4156] text-[#F5EFEB] pt-[170px] pb-28 md:pt-[240px] md:pb-[160px] px-6 border-b border-white/5 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#2F4156] via-[#2F4156]/95 to-[#2F4156] z-1"></div>
        <div className="absolute inset-0 bg-[radial-gradient(#C8D9E6_0.75px,transparent_0.75px)] [background-size:24px_24px] opacity-[0.07] z-2"></div>
        <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent z-3"></div>

        <div className="max-w-[1140px] mx-auto relative z-10 px-4 md:px-8">
          <div className="flex flex-col items-start text-left max-w-[850px]">
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-3 py-1 bg-white/[0.04] border border-white/10 rounded-sm text-[9px] md:text-[10px] text-[#C8D9E6] font-mono tracking-[0.3em] uppercase mb-6 backdrop-blur-md"
            >
              <span>SERVICES</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="font-sans text-4xl sm:text-5xl md:text-[4.2rem] font-bold mb-6 tracking-tight text-white leading-[1.1] uppercase"
            >
              {t.servicesHeaderTitle}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="text-[#C8D9E6] text-base sm:text-lg md:text-[1.35rem] font-sans font-light tracking-wide max-w-2xl leading-relaxed"
            >
              {t.servicesHeaderSubtitle}
            </motion.p>
          </div>
        </div>
      </section>

      {/* Main Content Container */}
      <div className="max-w-[1140px] mx-auto px-6 pb-24 md:pb-36 relative z-10">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-[0.02] pointer-events-none z-0"></div>

        {/* Intro Quote */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="bg-white rounded-sm p-8 md:p-[70px] shadow-[0_20px_50px_rgba(5,13,29,0.05)] -mt-12 md:-mt-[80px] relative z-20 border border-[#2F4156]/10 text-center"
        >
          <div className="absolute top-0 left-0 w-full h-[2px] bg-[#2F4156]"></div>
          <Quote className="w-6 h-6 text-[#C8D9E6] mx-auto mb-6" />
          <p className="font-sans text-lg sm:text-xl md:text-[1.35rem] leading-[1.7] text-[#2F4156]/90 max-w-3xl mx-auto font-light italic">
            {t.servicesIntro}
          </p>
        </motion.div>

        {/* Service Sections */}
        <div className="space-y-24 md:space-y-36 mt-24">
          {serviceGroups.map((group, idx) => (
            <div key={idx} className="grid grid-cols-1 lg:grid-cols-12 gap-12 border-t border-[#2F4156]/10 pt-16">
              <div className="lg:col-span-4">
                <div className="sticky top-32 space-y-4">
                  <span className="font-mono text-[10px] tracking-[0.3em] text-[#2F4156] uppercase block font-bold">
                    {group.tag}
                  </span>
                  <h2 className="text-3xl md:text-4xl font-sans font-bold uppercase tracking-tight text-[#2F4156]">
                    {group.title}
                  </h2>
                </div>
              </div>

              <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-6">
                {group.items.map((item, itemIdx) => (
                  <motion.div
                    key={itemIdx}
                    whileHover={{ 
                      y: -8,
                      boxShadow: '0 25px 50px -12px rgba(11,27,61,0.25)',
                      borderColor: '#C8D9E6'
                    }}
                    className="group bg-white p-8 border border-slate-200/80 rounded-sm transition-all duration-300 flex flex-col"
                  >
                    <div className="w-14 h-14 bg-[#2F4156] flex items-center justify-center rounded-lg border border-white/5 shadow-inner mb-6">
                       <item.icon className="w-7 h-7 text-[#C8D9E6]" />
                    </div>
                    
                    <div className="space-y-4 flex-grow">
                      <h4 className="font-sans text-lg font-semibold text-[#2F4156] leading-tight group-hover:text-[#2F4156]/80 transition-colors duration-200">
                        {item.title}
                      </h4>
                      <p className="font-sans font-light text-sm text-slate-500 leading-relaxed">
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
