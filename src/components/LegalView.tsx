import { motion } from 'motion/react';
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
    <div className="pt-[110px] min-h-screen bg-bej-bg text-navy-brand py-[60px]">
      <div className="max-w-[1000px] mx-auto px-6">
        
        {/* Main Card wrapper */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-bej-card p-6 md:p-[60px] rounded-[6px] shadow-[0_15px_40px_rgba(11,27,61,0.02)] border-t-4 border-navy-brand"
        >
          {/* Title Header */}
          <div className="border-b border-navy-brand/8 pb-[25px] mb-[40px]">
            <h1 className="font-serif text-2xl sm:text-[2.2rem] font-bold text-navy-brand leading-tight">
              {t.legalTitle}
            </h1>
            <p className="font-mono text-[10px] sm:text-xs font-bold tracking-widest text-navy-brand/60 mt-2 uppercase">
              {t.legalUpdate}
            </p>
          </div>

          {/* Legal paragraphs */}
          <div className="space-y-[45px]">
            {sections.map((sec, idx) => (
              <div key={idx} className="group">
                <h2 className="font-serif text-lg sm:text-[1.35rem] font-bold text-navy-brand mb-[15px] pb-[8px] border-b border-navy-brand/5 group-hover:border-sky-accent transition-all duration-300">
                  {sec.title}
                </h2>
                <p className="font-sans font-light text-sm sm:text-[1.02rem] text-[#333] leading-relaxed text-justify">
                  {sec.desc}
                </p>
              </div>
            ))}

            {/* Section 7 - Special Bullets */}
            <div className="group">
              <h2 className="font-serif text-lg sm:text-[1.35rem] font-bold text-navy-brand mb-[15px] pb-[8px] border-b border-navy-brand/5 group-hover:border-sky-accent transition-all duration-300">
                {t.legalSec7Title}
              </h2>
              <ul className="space-y-[15px] pl-5 list-disc font-sans font-light text-sm sm:text-[1.02rem] text-[#333] leading-relaxed">
                <li className="text-justify">
                  <strong className="text-navy-brand font-bold">{t.legalSec7Bullet1.split(':')[0]}:</strong>
                  {t.legalSec7Bullet1.split(':')[1]}
                </li>
                <li className="text-justify">
                  <strong className="text-navy-brand font-bold">{t.legalSec7Bullet2.split(':')[0]}:</strong>
                  {t.legalSec7Bullet2.split(':')[1]}
                </li>
                <li className="text-justify">
                  <strong className="text-navy-brand font-bold">{t.legalSec7Bullet3.split(':')[0]}:</strong>
                  {t.legalSec7Bullet3.split(':')[1]}
                </li>
                <li className="text-justify">
                  <strong className="text-navy-brand font-bold">{t.legalSec7Bullet4}</strong>
                </li>
              </ul>
              
              <div className="text-sm sm:text-[1.02rem] text-navy-brand bg-bej-bg p-[30px] border border-sky-accent/40 rounded-[4px] font-medium leading-relaxed mt-[35px] text-justify">
                {t.legalSec7Footer}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
