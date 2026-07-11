import { motion } from 'motion/react';
import { Language } from '../types';
import { translations } from '../translations';

interface PortofoliuViewProps {
  currentLang: Language;
}

export default function PortofoliuView({ currentLang }: PortofoliuViewProps) {
  const t = translations[currentLang];

  const divisions = [
    {
      number: '01',
      emoji: '🏛️',
      title: t.div1Title,
      subtitle: t.div1Subtitle,
      items: [
        { title: t.div1Item1Title, desc: t.div1Item1Desc },
        { title: t.div1Item2Title, desc: t.div1Item2Desc },
        { title: t.div1Item3Title, desc: t.div1Item3Desc },
      ],
    },
    {
      number: '02',
      emoji: '💻',
      title: t.div2Title,
      subtitle: t.div2Subtitle,
      items: [
        { title: t.div2Item1Title, desc: t.div2Item1Desc },
        { title: t.div2Item2Title, desc: t.div2Item2Desc },
        { title: t.div2Item3Title, desc: t.div2Item3Desc },
      ],
    },
    {
      number: '03',
      emoji: '📊',
      title: t.div3Title,
      subtitle: t.div3Subtitle,
      items: [
        { title: t.div3Item1Title, desc: t.div3Item1Desc },
        { title: t.div3Item2Title, desc: t.div3Item2Desc },
        { title: t.div3Item3Title, desc: t.div3Item3Desc },
      ],
    },
    {
      number: '04',
      emoji: '🧬',
      title: t.div4Title,
      subtitle: t.div4Subtitle,
      items: [
        { title: t.div4Item1Title, desc: t.div4Item1Desc },
        { title: t.div4Item2Title, desc: t.div4Item2Desc },
        { title: t.div4Item3Title, desc: t.div4Item3Desc },
        { title: t.div4Item4Title, desc: t.div4Item4Desc },
      ],
    },
  ];

  return (
    <div className="pt-[115px] sm:pt-[125px] md:pt-[135px] min-h-screen bg-bej-bg text-navy-brand">
      {/* Header Specific */}
      <section className="bg-navy-brand text-[#FAF6F0] text-center py-14 sm:py-20 md:py-[80px] px-6 border-b border-[#FAF6F0]/10">
        <div className="max-w-[700px] mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="font-serif text-3xl sm:text-4xl md:text-[3rem] font-bold mb-[15px] tracking-wide"
          >
            {t.portfolioHeaderTitle}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-sky-accent text-base sm:text-lg md:text-[1.2rem] font-light tracking-[0.5px]"
          >
            {t.portfolioHeaderSubtitle}
          </motion.p>
        </div>
      </section>

      {/* Main Container */}
      <div className="max-w-[1200px] mx-auto px-6 py-[60px]">
        {/* Intro Quote */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center font-serif italic text-lg sm:text-2xl md:text-[1.4rem] max-w-[900px] mx-auto mb-[50px] leading-relaxed text-navy-brand"
        >
          {t.portfolioIntro}
        </motion.p>

        {/* Division Blocks */}
        <div className="space-y-[50px]">
          {divisions.map((division, dIdx) => (
            <motion.div
              key={division.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-bej-card rounded-[6px] p-6 md:p-[50px] shadow-[0_15px_40px_rgba(11,27,61,0.02)] border-t-4 border-navy-brand"
            >
              {/* Division Header */}
              <div className="mb-[35px] border-b border-navy-brand/8 pb-[20px] divizie-header">
                <h2 className="font-serif text-xl sm:text-[2.2rem] font-bold text-navy-brand leading-tight">
                  {division.emoji} {division.title}
                </h2>
                <p className="font-sans font-light text-sm sm:text-[1.1rem] text-[#556380] mt-1.5">
                  {division.subtitle}
                </p>
              </div>

              {/* Industry Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[25px] industrii-grid">
                {division.items.map((item, iIdx) => (
                  <motion.div
                    key={iIdx}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: iIdx * 0.1, duration: 0.4 }}
                    whileHover={{ y: -3 }}
                    className="bg-bej-bg p-[30px] rounded-[4px] border border-navy-brand/3 hover:bg-bej-card hover:border-sky-accent hover:shadow-[0_8px_25px_rgba(11,27,61,0.04)] transition-all duration-300 flex flex-col justify-between industrie-card"
                  >
                    <div>
                      <h4 className="font-serif text-base sm:text-[1.25rem] font-bold mb-[12px] text-navy-brand border-b border-navy-brand/5 pb-[8px]">
                        {item.title}
                      </h4>
                      <p className="font-sans font-light text-xs sm:text-[0.95rem] text-[#444] text-justify leading-relaxed">
                        {item.desc}
                      </p>
                    </div>

                    <div className="mt-6 pt-3 border-t border-navy-brand/5 flex justify-between items-center text-[9px] font-mono tracking-wider opacity-50 text-navy-brand uppercase">
                      <span>SECURED PORTFOLIO</span>
                      <span>HQ HONG KONG</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
