import { motion } from 'motion/react';
import { Language } from '../types';
import { translations } from '../translations';

interface ServiciiViewProps {
  currentLang: Language;
}

export default function ServiciiView({ currentLang }: ServiciiViewProps) {
  const t = translations[currentLang];

  const servicesGroup1 = [
    { title: t.service1Title, desc: t.service1Desc },
    { title: t.service2Title, desc: t.service2Desc },
    { title: t.service3Title, desc: t.service3Desc },
    { title: t.service4Title, desc: t.service4Desc },
    { title: t.service5Title, desc: t.service5Desc },
  ];

  const servicesGroup2 = [
    { title: t.service6Title, desc: t.service6Desc },
    { title: t.service7Title, desc: t.service7Desc },
    { title: t.service8Title, desc: t.service8Desc },
  ];

  return (
    <div className="pt-[115px] sm:pt-[125px] md:pt-[135px] min-h-screen bg-bej-bg text-navy-brand">
      {/* Header Specific */}
      <section className="bg-navy-brand text-[#FAF6F0] text-center py-14 sm:py-20 md:py-[80px] px-6 border-b border-[#FAF6F0]/10 header-servicii">
        <div className="max-w-[700px] mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="font-serif text-3xl sm:text-4xl md:text-[3rem] font-bold mb-[15px] tracking-wide"
          >
            {t.servicesHeaderTitle}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-sky-accent text-base sm:text-lg md:text-[1.2rem] font-light max-w-[700px] mx-auto"
          >
            {t.servicesHeaderSubtitle}
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
          {t.servicesIntro}
        </motion.p>

        {/* Group 1: Corporate Acceleration */}
        <section className="mb-[60px]">
          <div className="font-sans text-[0.9rem] uppercase tracking-[2px] color-navy-brand opacity-80 border-b-2 border-navy-brand pb-[8px] mb-[25px] w-full font-bold select-none">
            {t.servicesSub1}
          </div>

          <div className="flex flex-col gap-[30px]">
            {servicesGroup1.map((srv, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ x: 5 }}
                className="bg-bej-card p-6 md:p-[45px] rounded-[4px] border-l-[5px] border-navy-brand shadow-[0_10px_35px_rgba(11,27,61,0.02)] hover:shadow-[0_15px_40px_rgba(11,27,61,0.04)] hover:border-l-sky-accent transition-all duration-300 serviciu-card"
              >
                <h3 className="font-serif text-lg md:text-[1.6rem] font-bold mb-[15px] text-navy-brand flex items-center gap-[15px] serviciu-title">
                  {srv.title}
                </h3>
                <p className="font-sans font-light text-sm sm:text-[1.05rem] text-[#333] text-justify leading-relaxed">
                  {srv.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Group 2: Shared Services */}
        <section className="mb-[60px]">
          <div className="font-sans text-[0.9rem] uppercase tracking-[2px] color-navy-brand opacity-80 border-b-2 border-navy-brand pb-[8px] mb-[25px] w-full font-bold select-none">
            {t.servicesSub2}
          </div>

          <div className="flex flex-col gap-[30px]">
            {servicesGroup2.map((srv, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ x: 5 }}
                className="bg-bej-card p-6 md:p-[45px] rounded-[4px] border-l-[5px] border-navy-brand shadow-[0_10px_35px_rgba(11,27,61,0.02)] hover:shadow-[0_15px_40px_rgba(11,27,61,0.04)] hover:border-l-sky-accent transition-all duration-300 serviciu-card"
              >
                <h3 className="font-serif text-lg md:text-[1.6rem] font-bold mb-[15px] text-navy-brand flex items-center gap-[15px] serviciu-title">
                  {srv.title}
                </h3>
                <p className="font-sans font-light text-sm sm:text-[1.05rem] text-[#333] text-justify leading-relaxed">
                  {srv.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
