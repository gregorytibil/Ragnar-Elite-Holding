import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Language } from '../types';
import { translations } from '../translations';
import { Shield, Users, Landmark, ChevronRight, Award, Quote } from 'lucide-react';

interface HoldingViewProps {
  currentLang: Language;
}

export default function HoldingView({ currentLang }: HoldingViewProps) {
  const t = translations[currentLang];
  const [expandedArticle, setExpandedArticle] = useState<string | null>(null);

  const boardMembers = [
    {
      initials: 'PR',
      name: t.boardMember1Name,
      role: t.boardMember1Role,
      desc: t.boardMember1Desc,
    },
    {
      initials: 'CEO',
      name: t.boardMember2Name,
      role: t.boardMember2Role,
      desc: t.boardMember2Desc,
    },
    {
      initials: 'CFO',
      name: t.boardMember3Name,
      role: t.boardMember3Role,
      desc: t.boardMember3Desc,
    },
    {
      initials: 'GC',
      name: t.boardMember4Name,
      role: t.boardMember4Role,
      desc: t.boardMember4Desc,
    },
  ];

  return (
    <div 
      className="min-h-screen bg-ice-marble text-[#0B1B3D] selection:bg-[#0B1B3D] selection:text-white overflow-hidden"
      itemScope
      itemType="https://schema.org/AboutPage"
    >
      {/* Premium Hero Section with elegant cinematic overlays */}
      <section className="relative bg-[#050D1D] text-[#FAF6F0] pt-[140px] pb-16 sm:pt-[170px] sm:pb-28 md:pt-[240px] md:pb-[160px] px-6 border-b border-white/5 overflow-hidden">
        {/* Background corporate architecture image */}
        <img 
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1600&q=80" 
          alt="Modern corporate architecture glass steel facade"
          className="absolute inset-0 w-full h-full object-cover opacity-[0.30] pointer-events-none z-0 scale-105"
          referrerPolicy="no-referrer"
        />
        {/* Subtle high-end mesh and lighting layers */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#050D1D] via-[#0B1B3D]/95 to-[#050D1D] z-1 opacity-75"></div>
        <div className="absolute inset-0 bg-[radial-gradient(#C8D9E6_0.75px,transparent_0.75px)] [background-size:24px_24px] opacity-[0.07] z-2"></div>
        <div className="absolute -top-[30%] -left-[20%] w-[80%] h-[80%] bg-[radial-gradient(ellipse_at_center,rgba(162,210,255,0.06),transparent_60%)] z-2"></div>
        <div className="absolute -bottom-[30%] -right-[20%] w-[80%] h-[80%] bg-[radial-gradient(ellipse_at_center,rgba(200,217,230,0.05),transparent_60%)] z-2"></div>
        <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent z-3"></div>

        {/* Elegant structural vertical guides */}
        <div className="absolute inset-y-0 left-12 w-[1px] bg-white/[0.02] hidden lg:block z-1"></div>
        <div className="absolute inset-y-0 right-12 w-[1px] bg-white/[0.02] hidden lg:block z-1"></div>

        <div className="max-w-[1140px] mx-auto relative z-10 px-4 md:px-8">
          <div className="flex flex-col items-start text-left max-w-[850px]">
            {/* Elegant Monospace Tag */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-3 py-1 bg-white/[0.04] border border-white/10 rounded-md text-[9px] md:text-[10px] text-[#A2D2FF] font-mono tracking-[0.3em] uppercase mb-6 backdrop-blur-md"
            >
              <Landmark className="w-3 h-3 text-[#A2D2FF]" />
              <span>{t.corporateArchitecture}</span>
            </motion.div>

            {/* Main Page Title */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="font-serif text-4xl sm:text-5xl md:text-[4.2rem] font-bold mb-6 tracking-tight text-white leading-[1.1] uppercase"
            >
              {t.holdingHeaderTitle}
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="text-[#C8D9E6] text-base sm:text-lg md:text-[1.35rem] font-sans font-light tracking-wide max-w-2xl leading-relaxed"
            >
              {t.holdingHeaderSubtitle}
            </motion.p>
          </div>
        </div>
      </section>

      {/* Main Corporate Core Container */}
      <div className="max-w-[1140px] mx-auto px-6 pb-16 sm:pb-24 md:pb-36 relative z-10">
        {/* Asymmetrical Premium Philosophy Card with -mt Overlap */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="bg-white/95 backdrop-blur-xl rounded-xl p-6 sm:p-8 md:p-[70px] shadow-[0_30px_70px_rgba(5,13,29,0.06)] -mt-8 sm:-mt-12 md:-mt-[80px] relative z-20 border border-[#0B1B3D]/5 overflow-hidden"
        >
          {/* Top Decorative Gold/Sky Accent Indicator */}
          <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-[#0b1b3d] via-[#A2D2FF] to-[#0b1b3d]"></div>
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
            {/* Left side: Editorial intro */}
            <div className="lg:col-span-5 flex flex-col">
              <span className="font-mono text-[10px] tracking-[0.3em] text-[#A2D2FF] uppercase mb-3 block">{t.sectionPhilosophy}</span>
              <h2 className="font-serif text-3xl md:text-[2.65rem] font-bold text-[#0B1B3D] tracking-tight leading-[1.15] mb-6">
                {t.philosophyTitle}
              </h2>
              <div className="w-12 h-[1px] bg-[#0B1B3D]/20 mb-6 lg:block hidden"></div>
              <p className="font-sans italic text-slate-500 text-sm hidden lg:block leading-relaxed">
                {t.philosophyQuote}
              </p>
            </div>

            {/* Right side: Detailed narrative with premium drop-cap / spacing */}
            <div className="lg:col-span-7 space-y-6 text-left border-t lg:border-t-0 lg:border-l border-slate-100 pt-8 lg:pt-0 lg:pl-10">
              <p className="font-sans font-light text-slate-700 text-base md:text-[1.1rem] leading-relaxed relative">
                {t.philosophyDesc1}
              </p>
              <p className="font-sans font-light text-slate-600 text-[0.95rem] md:text-[1rem] leading-relaxed border-l-2 border-[#A2D2FF] pl-4 italic">
                {t.philosophyDesc2}
              </p>
            </div>
          </div>
        </motion.div>

        {/* Asymmetrical Origins Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-stretch my-14 sm:my-24 md:my-32">
          {/* Left Side: Historical Narrative */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6 flex flex-col justify-center space-y-6"
          >
            <div className="space-y-2">
              <span className="font-mono text-[9px] tracking-[0.3em] text-[#0B1B3D]/60 uppercase block">{t.sectionCognomen}</span>
              <h3 className="font-serif text-3xl md:text-[2.35rem] font-bold text-[#0B1B3D] tracking-tight leading-none">
                {t.originTitle}
              </h3>
            </div>
            
            <div className="h-[2px] w-12 bg-[#0B1B3D]/15"></div>

            <div className="space-y-5 text-left">
              <p className="font-sans font-light text-slate-700 text-sm sm:text-[1rem] leading-relaxed">
                {t.originDesc1}
              </p>
              <p className="font-sans font-light text-slate-600 text-sm sm:text-[0.95rem] leading-relaxed">
                {t.originDesc2}
              </p>
            </div>
          </motion.div>

          {/* Right Side: Velvet Textured Quote Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6 bg-gradient-to-br from-[#0B1B3D] to-[#050D1D] p-6 sm:p-10 md:p-14 rounded-xl border border-white/5 shadow-[0_25px_50px_rgba(5,13,29,0.15)] flex flex-col justify-between relative overflow-hidden"
          >
            {/* Ambient gold/light circle in the background */}
            <div className="absolute -top-[20%] -right-[20%] w-[60%] h-[60%] bg-[radial-gradient(ellipse_at_center,rgba(162,210,255,0.08),transparent_70%)] pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-[3px] h-full bg-gradient-to-b from-[#A2D2FF] to-[#0B1B3D]"></div>

            <Quote className="w-10 h-10 text-[#A2D2FF]/20 mb-8 self-start" />

            <div className="relative z-10 flex-1 flex items-center">
              <p className="font-serif italic text-lg sm:text-[1.35rem] text-[#FAF6F0] leading-[1.65] text-left">
                {t.originQuote}
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between relative z-10">
              <span className="font-mono text-[9px] tracking-[0.25em] text-[#A2D2FF] uppercase">{t.governingCouncil}</span>
              <span className="font-sans text-[10px] text-white/40">RAGNAR ELITE HOLDING</span>
            </div>
          </motion.div>
        </div>

        {/* Strategic Insights Section */}
        <div className="mt-20 sm:mt-32 border-t border-slate-200/60 pt-16 sm:pt-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-center max-w-3xl mx-auto mb-12 sm:mb-20 space-y-4"
          >
            <span className="font-mono text-[10px] tracking-[0.3em] text-[#0B1B3D]/60 uppercase block">
              {currentLang === 'ro' ? 'Gândire Strategică' : 'Strategic Thinking'}
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-[2.85rem] font-bold tracking-tight text-[#0B1B3D] uppercase">
              {t.insightsHeaderTitle}
            </h2>
            <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-[#0B1B3D]/30 to-transparent mx-auto"></div>
            <p className="font-sans font-light text-sm sm:text-[1.1rem] text-slate-600 leading-relaxed max-w-2xl mx-auto">
              {t.insightsHeaderSubtitle}
            </p>
          </motion.div>

          {/* Intro Quote for Insights */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-xl p-6 sm:p-10 shadow-[0_15px_40px_rgba(5,13,29,0.03)] border border-[#0B1B3D]/5 text-center mb-16 max-w-4xl mx-auto"
          >
            <Quote className="w-6 h-6 text-[#A2D2FF] mx-auto mb-5" />
            <p className="font-sans text-base sm:text-lg leading-[1.65] text-[#0B1B3D]/80 max-w-3xl mx-auto font-light italic">
              {t.insightsIntro}
            </p>
          </motion.div>

          {/* Articles/Briefings Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Article 1 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl border border-slate-200/60 p-6 sm:p-8 flex flex-col justify-between shadow-[0_10px_35px_rgba(5,13,29,0.02)] hover:shadow-[0_20px_50px_rgba(5,13,29,0.06)] hover:border-[#0B1B3D]/10 transition-all duration-300 group"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="font-mono text-[9px] tracking-[0.2em] px-2.5 py-1 bg-[#0B1B3D]/5 rounded text-[#0B1B3D] uppercase font-bold">
                    {currentLang === 'ro' ? 'MACROECONOMIE' : 'MACROECONOMICS'}
                  </span>
                  <span className="font-mono text-[10px] text-slate-400">
                    {t.insightsArticle1Author}
                  </span>
                </div>
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#0B1B3D] tracking-tight mb-4 group-hover:text-sky-900 transition-colors">
                  {t.insightsArticle1Title}
                </h3>
                <p className="font-sans font-light text-slate-600 text-sm sm:text-[0.95rem] leading-relaxed mb-6">
                  {t.insightsArticle1Summary}
                </p>
              </div>

              {/* Expandable detailed content with animation */}
              <div className="space-y-4">
                <AnimatePresence>
                  {expandedArticle === 'art1' && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.35, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <div className="pt-4 border-t border-slate-100 text-slate-600 font-sans font-light text-xs sm:text-sm leading-relaxed space-y-3">
                        <p>{t.insightsArticle1Content}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                <button
                  onClick={() => setExpandedArticle(expandedArticle === 'art1' ? null : 'art1')}
                  className="inline-flex items-center gap-2 text-[10px] tracking-[0.15em] font-mono font-bold uppercase text-[#0B1B3D] hover:text-sky-600 transition-colors mt-2 cursor-pointer"
                >
                  <span>{expandedArticle === 'art1' ? (currentLang === 'ro' ? 'RESTRÂNGE RAPORT' : 'COLLAPSE REPORT') : (currentLang === 'ro' ? 'CITEȘTE RAPORTUL COMPLET' : 'READ FULL REPORT')}</span>
                  <ChevronRight className={`w-3 h-3 transform transition-transform duration-300 ${expandedArticle === 'art1' ? 'rotate-90' : ''}`} />
                </button>
              </div>
            </motion.div>

            {/* Article 2 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl border border-slate-200/60 p-6 sm:p-8 flex flex-col justify-between shadow-[0_10px_35px_rgba(5,13,29,0.02)] hover:shadow-[0_20px_50px_rgba(5,13,29,0.06)] hover:border-[#0B1B3D]/10 transition-all duration-300 group"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="font-mono text-[9px] tracking-[0.2em] px-2.5 py-1 bg-[#0B1B3D]/5 rounded text-[#0B1B3D] uppercase font-bold">
                    {currentLang === 'ro' ? 'TEHNOLOGIE & INVESTIȚII' : 'TECH & INVESTMENT'}
                  </span>
                  <span className="font-mono text-[10px] text-slate-400">
                    {t.insightsArticle2Author}
                  </span>
                </div>
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#0B1B3D] tracking-tight mb-4 group-hover:text-sky-900 transition-colors">
                  {t.insightsArticle2Title}
                </h3>
                <p className="font-sans font-light text-slate-600 text-sm sm:text-[0.95rem] leading-relaxed mb-6">
                  {t.insightsArticle2Summary}
                </p>
              </div>

              {/* Expandable detailed content with animation */}
              <div className="space-y-4">
                <AnimatePresence>
                  {expandedArticle === 'art2' && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.35, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <div className="pt-4 border-t border-slate-100 text-slate-600 font-sans font-light text-xs sm:text-sm leading-relaxed space-y-3">
                        <p>{t.insightsArticle2Content}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                <button
                  onClick={() => setExpandedArticle(expandedArticle === 'art2' ? null : 'art2')}
                  className="inline-flex items-center gap-2 text-[10px] tracking-[0.15em] font-mono font-bold uppercase text-[#0B1B3D] hover:text-sky-600 transition-colors mt-2 cursor-pointer"
                >
                  <span>{expandedArticle === 'art2' ? (currentLang === 'ro' ? 'RESTRÂNGE RAPORT' : 'COLLAPSE REPORT') : (currentLang === 'ro' ? 'CITEȘTE RAPORTUL COMPLET' : 'READ FULL REPORT')}</span>
                  <ChevronRight className={`w-3 h-3 transform transition-transform duration-300 ${expandedArticle === 'art2' ? 'rotate-90' : ''}`} />
                </button>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Board of Directors Section with Luxury Panoramic Boardroom Background */}
        <section className="mt-16 sm:mt-28 md:mt-36 relative rounded-2xl overflow-hidden py-14 sm:py-20 px-6 sm:px-10 border border-[#0B1B3D]/10 bg-[#050D1D] shadow-2xl">
          {/* Panoramic Boardroom Backdrop Image */}
          <img 
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1600&h=600&q=80" 
            alt="Luxury corporate boardroom meeting table panorama"
            className="absolute inset-0 w-full h-full object-cover opacity-[0.18] pointer-events-none z-0 scale-105"
            referrerPolicy="no-referrer"
          />
          {/* Deep dark luxury navy overlay filter */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#050D1D]/95 via-[#0B1B3D]/90 to-[#050D1D]/95 z-0"></div>

          <div className="relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-10 sm:mb-16 md:mb-20 max-w-3xl mx-auto space-y-4"
            >
              <span className="font-mono text-[10px] tracking-[0.3em] text-[#A2D2FF] uppercase block">{t.sectionExecutivePower}</span>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-[2.85rem] font-bold tracking-tight text-white uppercase">
                {t.boardTitle}
              </h2>
              <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-[#A2D2FF] to-transparent mx-auto"></div>
              <p className="font-sans font-light text-sm sm:text-[1rem] text-[#C8D9E6] leading-relaxed max-w-2xl mx-auto">
                {t.boardSubtitle}
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8" role="list" aria-label={t.boardTitle}>
            {boardMembers.map((member, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08, duration: 0.6 }}
                whileHover={{ 
                  y: -8,
                  transition: { duration: 0.3, ease: 'easeOut' }
                }}
                className="bg-white rounded-xl p-6 md:p-8 border border-slate-200/60 shadow-[0_8px_30px_rgba(5,13,29,0.015)] hover:shadow-[0_20px_50px_rgba(5,13,29,0.06)] hover:border-[#0B1B3D]/10 transition-all duration-300 flex flex-col justify-between relative overflow-hidden group"
                itemProp="employee"
                itemScope
                itemType="https://schema.org/Person"
                role="listitem"
              >
                {/* Subtle visual gradient on card hover */}
                <div className="absolute top-0 left-0 w-full h-[4px] bg-[#0B1B3D]/5 group-hover:bg-gradient-to-r group-hover:from-[#0B1B3D] group-hover:to-[#A2D2FF] transition-all duration-300"></div>

                <div>
                  {/* Monogram Badge */}
                  <div className="w-[72px] h-[72px] rounded-full bg-gradient-to-br from-[#0B1B3D] to-[#050D1D] mx-auto mb-6 flex items-center justify-center text-white text-base md:text-[1.15rem] font-serif font-bold relative shadow-md transition-transform duration-500 group-hover:scale-105">
                    {/* Ring layer */}
                    <div className="absolute inset-[3px] border border-white/20 rounded-full"></div>
                    <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"></div>
                    <span className="relative z-10 tracking-widest">{member.initials}</span>
                  </div>

                  {/* Name */}
                  <div className="text-center mb-4">
                    <h3 
                      className="font-serif text-lg md:text-[1.25rem] font-bold text-[#0B1B3D] tracking-tight group-hover:text-sky-900 transition-colors duration-200"
                      itemProp="name"
                    >
                      {member.name}
                    </h3>
                  </div>

                  {/* Clean thin separator */}
                  <div className="w-8 h-[1px] bg-slate-100 group-hover:w-16 group-hover:bg-[#A2D2FF] transition-all duration-300 mx-auto mb-5"></div>

                  {/* What they do (Cu ce se ocupă) */}
                  <div className="mb-4 text-left">
                    <span className="font-mono text-[8px] tracking-[0.2em] text-[#0B1B3D]/50 uppercase block mb-1">
                      {t.labelWhatTheyDo}
                    </span>
                    <p className="font-sans font-medium text-xs text-slate-700 leading-relaxed">
                      {member.role}
                    </p>
                  </div>

                  {/* In simple terms (Pe înțelesul tuturor) */}
                  <div className="text-left">
                    <span className="font-mono text-[8px] tracking-[0.2em] text-[#0B1B3D]/50 uppercase block mb-1">
                      {t.labelInSimpleTerms}
                    </span>
                    <p 
                      className="font-sans font-light text-xs sm:text-[0.82rem] text-slate-500 leading-relaxed"
                      itemProp="description"
                    >
                      {member.desc}
                    </p>
                  </div>
                </div>

                {/* Aesthetic Corner Bracket decoration */}
                <div className="absolute bottom-2 right-2 w-2 h-2 border-r border-b border-transparent group-hover:border-slate-300 transition-all duration-300"></div>
              </motion.div>
            ))}
          </div>
          </div>
        </section>
      </div>
    </div>
  );
}
