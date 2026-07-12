import { motion } from 'motion/react';
import { Scale, FileText, Quote } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../translations';

interface LegalViewProps {
  currentLang: Language;
}

export default function LegalView({ currentLang }: LegalViewProps) {
  const t = translations[currentLang];

  const sections = [
    { title: t.legalSec1Title, desc: t.legalSec1Desc },
    { title: t.legalSec2Title, desc: t.legalSec2Desc },
    { title: t.legalSec3Title, desc: t.legalSec3Desc },
    { title: t.legalSec4Title, desc: t.legalSec4Desc },
    { title: t.legalSec5Title, desc: t.legalSec5Desc },
    { title: t.legalSec6Title, desc: t.legalSec6Desc },
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
              <span>GOVERNANCE & GDPR</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="font-sans text-4xl sm:text-5xl md:text-[4.2rem] font-bold mb-6 tracking-tight text-white leading-[1.1] uppercase"
            >
              {t.legalTitle}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="text-[#C8D9E6] text-base sm:text-lg md:text-[1.35rem] font-sans font-light tracking-wide max-w-2xl leading-relaxed"
            >
              {t.legalUpdate}
            </motion.p>
          </div>
        </div>
      </section>

      {/* Main Content Container */}
      <div className="max-w-[1140px] mx-auto px-6 pb-24 md:pb-36 relative z-10 -mt-12 md:-mt-24">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 relative">
          
          {/* Sidebar / Table of Contents (Sticky) */}
          <div className="lg:col-span-4 hidden lg:block">
            <div className="sticky top-32 space-y-8 bg-white/50 backdrop-blur-md p-8 border border-[#2F4156]/10 rounded-sm">
              <Scale className="w-8 h-8 text-[#C8D9E6] mb-6" />
              <div className="space-y-4">
                {sections.map((sec, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                     <span className="font-mono text-[10px] text-[#C8D9E6] font-bold mt-1">0{idx + 1}</span>
                     <span className="text-sm font-sans font-medium text-[#2F4156] uppercase tracking-wide leading-snug">
                        {sec.title}
                     </span>
                  </div>
                ))}
                <div className="flex items-start gap-3 pt-4 border-t border-[#2F4156]/10">
                    <span className="font-mono text-[10px] text-[#C8D9E6] font-bold mt-1">07</span>
                    <span className="text-sm font-sans font-medium text-[#2F4156] uppercase tracking-wide leading-snug">
                       {t.legalSec7Title}
                    </span>
                </div>
              </div>
            </div>
          </div>

          {/* Legal Content Flow */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-8 space-y-16 lg:space-y-24 bg-white/50 backdrop-blur-sm p-6 sm:p-10 lg:p-0 lg:bg-transparent lg:backdrop-blur-none border border-[#2F4156]/5 lg:border-none rounded-sm"
          >
            {sections.map((sec, idx) => (
              <div key={idx} className="group relative">
                <div className="hidden lg:block absolute -left-12 top-1 font-mono text-sm text-[#C8D9E6]/50 font-bold">
                  0{idx + 1}
                </div>
                <h2 className="text-2xl md:text-3xl font-sans font-bold uppercase tracking-tight text-[#2F4156] mb-6 flex items-start gap-4">
                  <span className="text-[#C8D9E6] mt-1.5 lg:hidden"><FileText className="w-6 h-6" /></span>
                  {sec.title}
                </h2>
                <div className="prose prose-lg prose-slate max-w-none text-slate-600 font-light leading-relaxed">
                  <p>{sec.desc}</p>
                </div>
              </div>
            ))}

            {/* Section 7 - Special Bullets */}
            <div className="group relative border-t border-[#2F4156]/10 pt-16 lg:pt-24">
              <div className="hidden lg:block absolute -left-12 top-17 font-mono text-sm text-[#C8D9E6]/50 font-bold">
                07
              </div>
              <h2 className="text-2xl md:text-3xl font-sans font-bold uppercase tracking-tight text-[#2F4156] mb-8 flex items-start gap-4">
                  <span className="text-[#C8D9E6] mt-1.5 lg:hidden"><Scale className="w-6 h-6" /></span>
                {t.legalSec7Title}
              </h2>
              <div className="space-y-6">
                {[t.legalSec7Bullet1, t.legalSec7Bullet2, t.legalSec7Bullet3, t.legalSec7Bullet4].map((bullet, i) => (
                    <div key={i} className="flex gap-4 p-6 bg-white border border-[#2F4156]/5 shadow-sm rounded-sm">
                        <span className="text-[#C8D9E6] mt-1.5 shrink-0">—</span>
                        <p className="text-base text-slate-700 font-light leading-relaxed">
                            {bullet.includes(':') ? (
                                <>
                                    <strong className="font-semibold text-[#2F4156]">{bullet.split(':')[0]}:</strong> {bullet.split(':')[1]}
                                </>
                            ) : bullet}
                        </p>
                    </div>
                ))}
              </div>
              
              <div className="mt-12 p-8 md:p-12 bg-[#2F4156] text-[#F5EFEB] rounded-sm relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(#C8D9E6_0.75px,transparent_0.75px)] [background-size:24px_24px] opacity-[0.05]"></div>
                <Quote className="w-8 h-8 text-[#C8D9E6] mb-6 relative z-10" />
                <p className="text-base md:text-lg text-[#C8D9E6] font-light leading-relaxed italic relative z-10">
                  {t.legalSec7Footer}
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
