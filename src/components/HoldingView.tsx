import { motion } from 'motion/react';
import { Language } from '../types';
import { translations } from '../translations';

interface HoldingViewProps {
  currentLang: Language;
}

export default function HoldingView({ currentLang }: HoldingViewProps) {
  const t = translations[currentLang];

  const boardMembers = [
    {
      initials: 'RE',
      name: t.boardMember1Name,
      role: t.boardMember1Role,
      desc: t.boardMember1Desc,
    },
    {
      initials: 'FI',
      name: t.boardMember2Name,
      role: t.boardMember2Role,
      desc: t.boardMember2Desc,
    },
    {
      initials: 'HK',
      name: t.boardMember3Name,
      role: t.boardMember3Role,
      desc: t.boardMember3Desc,
    },
    {
      initials: 'LG',
      name: t.boardMember4Name,
      role: t.boardMember4Role,
      desc: t.boardMember4Desc,
    },
  ];

  return (
    <div className="pt-[115px] sm:pt-[125px] md:pt-[135px] min-h-screen bg-bej-bg text-navy-brand">
      {/* Header Specific */}
      <section className="bg-navy-brand text-[#FAF6F0] text-center py-16 md:py-[100px] px-6 border-b-3 border-sky-accent">
        <div className="max-w-[700px] mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="font-serif text-3xl sm:text-4xl md:text-[3.5rem] font-bold mb-[15px] tracking-wide"
          >
            {t.holdingHeaderTitle}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-sky-accent text-base sm:text-lg md:text-[1.3rem] font-light tracking-[1px]"
          >
            {t.holdingHeaderSubtitle}
          </motion.p>
        </div>
      </section>

      {/* Overlapping Content Container */}
      <div className="max-w-[1100px] mx-auto px-6 pb-[60px]">
        {/* Filozofie Section Card with -mt overlap */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="bg-bej-card p-6 md:p-[60px] rounded-[4px] shadow-[0_10px_30px_rgba(11,27,61,0.02)] -mt-8 md:-mt-[50px] relative z-10 border-l-4 border-navy-brand mb-16"
        >
          <h2 className="font-serif text-2xl md:text-[2.2rem] font-bold mb-[25px] text-navy-brand">
            {t.philosophyTitle}
          </h2>
          <p className="font-sans font-light text-sm sm:text-[1.1rem] text-[#333] mb-[20px] text-justify leading-relaxed">
            {t.philosophyDesc1}
          </p>
          <p className="font-sans font-light text-sm sm:text-[1.1rem] text-[#333] text-justify leading-relaxed">
            {t.philosophyDesc2}
          </p>
        </motion.div>

        {/* Istoric Box */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[50px] items-center my-[60px]">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="font-serif text-2xl md:text-[2rem] font-bold mb-[20px] text-navy-brand">
              {t.originTitle}
            </h3>
            <p className="font-sans font-light text-sm sm:text-base text-[#333] mb-[15px] text-justify leading-relaxed">
              {t.originDesc1}
            </p>
            <p className="font-sans font-light text-sm sm:text-base text-[#333] text-justify leading-relaxed">
              {t.originDesc2}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-bej-card p-8 md:p-[40px] rounded-[4px] border-l-4 border-sky-accent shadow-[0_5px_15px_rgba(0,0,0,0.01)]"
          >
            <p className="font-serif italic text-base sm:text-[1.25rem] text-navy-brand leading-[1.6]">
              „{t.originQuote}”
            </p>
          </motion.div>
        </div>

        {/* Board of Directors Section */}
        <section className="mt-[80px] text-center">
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-serif text-3xl md:text-[2.5rem] font-bold mb-[15px]"
          >
            {t.boardTitle}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="max-w-[700px] mx-auto mb-[50px] font-sans font-light text-sm sm:text-base text-[#556380] leading-relaxed"
          >
            {t.boardSubtitle}
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[30px]">
            {boardMembers.map((member, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                whileHover={{ y: -5 }}
                className="bg-bej-card p-[40px_30px] rounded-[4px] shadow-[0_5px_15px_rgba(11,27,61,0.02)] border-b-3 border-transparent hover:border-sky-accent hover:shadow-[0_12px_30px_rgba(11,27,61,0.04)] transition-all duration-300 text-center border-t border-navy-brand/5"
              >
                <div className="w-[80px] h-[80px] bg-bej-bg rounded-full mx-auto mb-5 flex items-center justify-center text-navy-brand text-lg md:text-[1.4rem] font-semibold border border-navy-brand/10">
                  {member.initials}
                </div>
                <h3 className="font-serif text-lg md:text-[1.4rem] font-bold mb-1 text-navy-brand">
                  {member.name}
                </h3>
                <div className="text-sky-accent font-semibold text-[0.85rem] uppercase tracking-[1px] mb-[15px] font-sans">
                  {member.role}
                </div>
                <p className="font-sans font-light text-xs sm:text-[0.95rem] text-[#555] text-justify leading-relaxed">
                  {member.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
