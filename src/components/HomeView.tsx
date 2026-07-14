import React, { useState, useRef } from 'react';
import { ArrowRight, ShieldCheck, Shield, Award, Scale, Globe, ChevronDown, Play, Pause, Volume2, VolumeX, X } from 'lucide-react';
import { motion } from 'motion/react';
import { Language } from '../types';
import { translations } from '../translations';

interface HomeViewProps {
  currentLang: Language;
  setActiveTab: (tab: string) => void;
}

const stripEmoji = (text: string) => {
  return text.replace(/[\u1F600-\u1F64F]|[\u1F300-\u1F5FF]|[\u1F680-\u1F6FF]|[\u2600-\u26FF]|[\u2700-\u27BF]|[\u1F900-\u1F9FF]|[\u1F1E0-\u1F1FF]|[\u1F018-\u1F0F5]|[\u{1F300}-\u{1F9FF}]|[\u{2700}-\u{27BF}]|[\u{2600}-\u{26FF}]|[\u{1F600}-\u{1F64F}]|[\u{1F680}-\u{1F6FF}]/gu, '').trim();
};

export default function HomeView({ currentLang, setActiveTab }: HomeViewProps) {
  const t = translations[currentLang];
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalMuted, setIsModalMuted] = useState(false);
  const [isModalPlaying, setIsModalPlaying] = useState(true);
  const modalVideoRef = useRef<HTMLVideoElement>(null);

  const openVideoModal = () => {
    setIsModalOpen(true);
    setIsModalPlaying(true);
    setIsModalMuted(false);
    
    setTimeout(() => {
      if (modalVideoRef.current) {
        modalVideoRef.current.muted = false;
        modalVideoRef.current.play().catch(err => {
          console.log("Autoplay blocked or interrupted:", err);
          if (modalVideoRef.current) {
            modalVideoRef.current.muted = true;
            setIsModalMuted(true);
            modalVideoRef.current.play().catch(e => console.log("Muted autoplay blocked too:", e));
          }
        });
      }
    }, 150);
  };

  const closeVideoModal = () => {
    if (modalVideoRef.current) {
      modalVideoRef.current.pause();
    }
    setIsModalOpen(false);
  };

  const scrollToNextSection = () => {
    const nextSection = document.getElementById('about-section');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const pillars = [
    {
      title: t.pillarFortitudeTitle,
      desc: t.pillarFortitudeDesc,
      icon: Shield,
      num: "01",
      accentClass: "from-[#0B1B3D] to-[#1E3A8A]",
      lightAccent: "bg-[#0B1B3D]/5 text-[#0B1B3D] border-[#0B1B3D]/10",
      glowColor: "rgba(11, 27, 61, 0.08)",
      hoverBorder: "group-hover:border-[#1E3A8A]/40",
    },
    {
      title: t.pillarExcellenceTitle,
      desc: t.pillarExcellenceDesc,
      icon: Award,
      num: "02",
      accentClass: "from-[#1E3A8A] to-[#2563EB]",
      lightAccent: "bg-[#1E3A8A]/5 text-[#1E3A8A] border-[#1E3A8A]/10",
      glowColor: "rgba(30, 58, 138, 0.08)",
      hoverBorder: "group-hover:border-[#2563EB]/40",
    },
    {
      title: t.pillarIntegrityTitle,
      desc: t.pillarIntegrityDesc,
      icon: Scale,
      num: "03",
      accentClass: "from-[#2563EB] to-[#60A5FA]",
      lightAccent: "bg-[#2563EB]/5 text-[#2563EB] border-[#2563EB]/10",
      glowColor: "rgba(37, 99, 235, 0.08)",
      hoverBorder: "group-hover:border-[#60A5FA]/40",
    },
    {
      title: t.pillarVisionTitle,
      desc: t.pillarVisionDesc,
      icon: Globe,
      num: "04",
      accentClass: "from-[#3B82F6] to-[#A2D2FF]",
      lightAccent: "bg-[#3B82F6]/5 text-[#3B82F6] border-[#3B82F6]/10",
      glowColor: "rgba(162, 210, 255, 0.12)",
      hoverBorder: "group-hover:border-[#A2D2FF]/40",
    },
  ];

  return (
    <div 
      className="min-h-screen bg-ice-marble text-navy-brand"
      itemScope 
      itemType="https://schema.org/Corporation"
    >
      {/* Hero Section */}
      <section className="relative hero bg-[#0B1B3D] text-[#FAF6F0] h-[100dvh] min-h-[580px] flex items-center justify-center text-center px-6 pt-[100px] pb-16 sm:pt-[120px] md:pt-[140px] border-b border-[#FAF6F0]/10 overflow-hidden notranslate">
        {/* Cinematic short background video loop (muted, no sound) */}
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          aria-label="Cinematic aerial night view representing global connection and strategic movement"
          className="absolute inset-0 w-full h-full object-cover opacity-20 z-0 pointer-events-none scale-105"
        >
          <source src="https://assets.mixkit.co/videos/preview/mixkit-aerial-view-of-city-streets-at-night-41926-large.mp4" type="video/mp4" />
        </video>
        
        {/* Decorative luxury gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#050d1d]/90 via-[#0B1B3D]/80 to-[#07132b]/95 z-1"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(162,210,255,0.15),transparent_60%)] z-2"></div>
        {/* Creative Director Accent: Subtle geometric radial mesh pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(#C8D9E6_1px,transparent_1px)] [background-size:28px_28px] opacity-10 z-3"></div>
        
        {/* Bottom subtle ambient light separator */}
        <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-sky-accent/40 to-transparent z-4"></div>
 
        <div className="max-w-[850px] mx-auto relative z-10 hero-content flex flex-col items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2.5 px-[18px] py-[7px] bg-[#FAF6F0]/5 border border-[#FAF6F0]/15 rounded-full text-[10px] text-sky-accent font-mono tracking-[0.25em] mb-6 sm:mb-10 uppercase shadow-inner backdrop-blur-md"
          >
            <ShieldCheck className="w-3.5 h-3.5 text-sky-accent animate-pulse" />
            {t.establishedInHK}
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="font-serif text-3xl sm:text-5xl md:text-[3.8rem] lg:text-[4.2rem] font-bold uppercase tracking-[0.06em] mb-5 sm:mb-8 leading-[1.15] text-white"
            id="hero-heading"
            itemProp="name"
          >
            {t.heroTitle}
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="font-sans font-light text-xs sm:text-sm md:text-base text-[#FAF6F0]/80 mb-10 sm:mb-16 tracking-[0.18em] sm:tracking-[0.25em] uppercase leading-relaxed max-w-3xl mx-auto"
            itemProp="slogan"
          >
            {t.heroSubtitle}
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-col sm:flex-row items-center gap-4 sm:gap-5 justify-center w-full"
          >
            <button
              onClick={() => setActiveTab('portfolio')}
              className="group inline-flex items-center gap-3 px-8 py-4 bg-sky-accent hover:bg-transparent text-navy-brand hover:text-white font-semibold text-xs uppercase tracking-[2px] rounded-[8px] border border-sky-accent transition-all duration-350 cursor-pointer shadow-[0_4px_20px_rgba(162,210,255,0.2)] hover:shadow-[0_0_30px_rgba(162,210,255,0.35)] active:scale-95 w-full sm:w-auto justify-center"
            >
              <span>{t.heroBtn}</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1.5" />
            </button>
            <button
              onClick={() => setActiveTab('contact')}
              className="group inline-flex items-center gap-3 px-8 py-4 bg-transparent hover:bg-white/[0.04] text-white/90 hover:text-white font-semibold text-xs uppercase tracking-[2px] rounded-[8px] border border-white/20 hover:border-white/60 transition-all duration-350 cursor-pointer active:scale-95 w-full sm:w-auto justify-center"
            >
              <span>{t.heroSecondaryBtn}</span>
              <span className="w-1.5 h-1.5 bg-sky-accent rounded-full animate-pulse group-hover:scale-125 transition-transform duration-300" />
            </button>
          </motion.div>
        </div>
      </section>

      {/* About Quote Section (Ultra-Polished Editorial Layout) */}
      <section 
        id="about-section" 
        className="bg-bej-card py-14 sm:py-24 px-6 border-b border-navy-brand/5 relative overflow-hidden flex items-center justify-center"
        itemProp="description"
      >
        {/* Sophisticated design lines */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1px] h-16 bg-gradient-to-b from-sky-accent to-transparent"></div>
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1px] h-16 bg-gradient-to-t from-sky-accent to-transparent"></div>
        
        {/* Absolute floating double quotes as watermark */}
        <div className="absolute -top-10 left-8 md:left-24 text-sky-accent/[0.08] font-serif text-[18rem] pointer-events-none select-none">
          “
        </div>
        <div className="absolute -bottom-40 right-8 md:right-24 text-sky-accent/[0.08] font-serif text-[18rem] pointer-events-none select-none">
          ”
        </div>

        <div className="max-w-[950px] mx-auto relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="text-center"
          >
            <p className="font-serif text-xl sm:text-2xl md:text-[1.85rem] italic text-navy-brand leading-[1.65] tracking-wide text-center px-4 md:px-8 flex flex-wrap justify-center gap-x-[0.25em] gap-y-1 sm:gap-y-2">
              {t.aboutQuote.split(" ").map((word, idx) => (
                <motion.span
                  key={idx}
                  variants={{
                    hidden: { opacity: 0, y: 12, filter: 'blur(3px)' },
                    visible: { 
                      opacity: 1, 
                      y: 0, 
                      filter: 'blur(0px)',
                      transition: { 
                        duration: 0.6, 
                        delay: idx * 0.02, 
                        ease: [0.16, 1, 0.3, 1] 
                      } 
                    }
                  }}
                  className="inline-block"
                >
                  {word}
                </motion.span>
              ))}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Video Presentation Section */}
      <section 
        className="py-12 sm:py-20 px-6 bg-ice-marble relative overflow-hidden flex flex-col items-center justify-center border-b border-navy-brand/5"
      >
        {/* Subtle decorative background lights */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[radial-gradient(ellipse_at_center,rgba(162,210,255,0.08),transparent_70%)] pointer-events-none select-none z-0"></div>
        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#0B1B3D]/10 to-transparent"></div>

        <div className="max-w-[1050px] w-full mx-auto relative z-10 flex flex-col items-center">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-10 sm:mb-14"
          >
            <span className="inline-flex items-center gap-2 px-3 py-1 bg-navy-brand/[0.03] border border-[#0B1B3D]/10 rounded-full text-[9px] md:text-[10px] text-navy-brand/60 font-mono tracking-[0.25em] uppercase mb-4 backdrop-blur-md">
              MEDIA HUB // PRESENTATION
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-[2.5rem] font-bold text-navy-brand tracking-wide mb-4">
              {t.videoTitle}
            </h2>
            <div className="w-12 h-0.5 bg-sky-accent mx-auto mb-4 rounded-full"></div>
            <p className="max-w-2xl mx-auto text-xs sm:text-sm text-navy-brand/70 font-sans font-light tracking-wide leading-relaxed">
              {t.videoSubtitle}
            </p>
          </motion.div>

          {/* Luxury Video Canvas */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="w-full relative rounded-2xl overflow-hidden border border-[#0B1B3D]/15 shadow-[0_25px_60px_-15px_rgba(11,27,61,0.12)] bg-[#050D1D] group aspect-video cursor-pointer"
            onClick={openVideoModal}
          >
            {/* Ambient inner border glow */}
            <div className="absolute inset-0 rounded-2xl border border-white/5 pointer-events-none z-20"></div>

            {/* Silent looping teaser preview of the corporate video */}
            <video
              src="https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c0227e330d674251df170e70ab55fbf6&profile_id=139&oauth2_token_id=57447761"
              loop
              muted
              autoPlay
              playsInline
              className="w-full h-full object-cover opacity-70 group-hover:opacity-85 transition-opacity duration-500 scale-[1.01]"
            />

            {/* Dark glassmorphic play overlay */}
            <div 
              className="absolute inset-0 bg-[#050D1D]/30 backdrop-blur-[1px] transition-all duration-500 flex flex-col items-center justify-center z-10 group-hover:bg-[#050D1D]/20"
            >
              {/* Golden circular play button */}
              <div className="relative flex items-center justify-center">
                {/* Ripple rings */}
                <div className="absolute inset-0 w-20 h-20 bg-sky-accent/25 rounded-full animate-ping opacity-60"></div>
                <div className="absolute inset-0 w-24 h-24 bg-sky-accent/10 rounded-full animate-pulse opacity-40"></div>
                
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    openVideoModal();
                  }}
                  className="w-16 h-16 rounded-full bg-white text-navy-brand flex items-center justify-center shadow-2xl border border-sky-accent/30 group-hover:scale-110 active:scale-95 transition-all duration-300 relative z-10"
                  aria-label="Play Corporate Video"
                >
                  <Play className="w-6 h-6 fill-navy-brand text-navy-brand translate-x-[1.5px]" />
                </button>
              </div>

              {/* Watermark branding */}
              <div className="mt-6 text-center select-none">
                <span className="font-serif text-sm tracking-[0.4em] text-white/90 uppercase font-medium">
                  RAGNAR ELITE
                </span>
                <span className="block text-[9px] tracking-[0.3em] text-[#A2D2FF] uppercase mt-1 font-mono">
                  TAP TO WATCH PRESENTATION
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Immersive Video Modal */}
      {isModalOpen && (
        <div 
          className="fixed inset-0 z-[999] flex items-center justify-center bg-black/95 backdrop-blur-xl p-4 sm:p-6 md:p-10 select-none"
          onClick={closeVideoModal}
        >
          {/* Subtle animated ambient backing light */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-sky-accent/5 rounded-full blur-[120px] pointer-events-none"></div>

          {/* Close button top right */}
          <button
            onClick={closeVideoModal}
            className="absolute top-4 right-4 sm:top-6 sm:right-6 md:top-8 md:right-8 w-12 h-12 flex items-center justify-center rounded-full bg-white/5 border border-white/10 text-white hover:bg-white/25 active:scale-90 transition-all duration-200 cursor-pointer z-[1010] shadow-2xl"
            aria-label="Close Video Player"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-[1200px] aspect-video rounded-2xl overflow-hidden border border-white/10 bg-[#050D1D] shadow-[0_35px_100px_rgba(0,0,0,0.8)] z-[1005]"
            onClick={(e) => e.stopPropagation()}
          >
            <video
              ref={modalVideoRef}
              src="https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c0227e330d674251df170e70ab55fbf6&profile_id=139&oauth2_token_id=57447761"
              controls
              autoPlay
              playsInline
              className="w-full h-full object-contain"
              onPlay={() => setIsModalPlaying(true)}
              onPause={() => setIsModalPlaying(false)}
            />

            {/* Custom subtle brand watermark inside the modal video */}
            <div className="absolute top-4 left-4 sm:top-6 sm:left-6 flex items-center gap-2 bg-black/40 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/5 pointer-events-none select-none">
              <span className="w-1.5 h-1.5 bg-sky-accent rounded-full animate-pulse"></span>
              <span className="font-serif text-[10px] tracking-[0.25em] text-white/90 uppercase font-medium">
                RAGNAR ELITE
              </span>
            </div>
          </motion.div>
        </div>
      )}

      {/* Pillars Section */}
      <section className="max-w-[1240px] mx-auto px-6 py-14 sm:py-24 relative">
        {/* Geometric accent element */}
        <div className="absolute top-0 right-10 w-24 h-24 bg-gradient-to-br from-sky-accent/5 to-transparent rounded-full blur-2xl"></div>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10 sm:mb-[60px]"
        >
          <h2 className="font-serif text-3xl sm:text-4xl md:text-[2.65rem] font-bold text-navy-brand tracking-wide mb-3">
            {t.pillarsTitle}
          </h2>
          <div className="w-16 h-0.5 bg-navy-brand/80 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[30px]" role="list" aria-label={t.pillarsTitle}>
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08, duration: 0.6 }}
                whileHover={{ 
                  y: -10, 
                  boxShadow: '0 30px 60px rgba(11,27,61,0.06)',
                }}
                className={`bg-white/95 backdrop-blur-md p-10 rounded-[14px] border border-navy-brand/10 transition-all duration-500 group cursor-default relative overflow-hidden flex flex-col justify-between h-full ${pillar.hoverBorder}`}
                itemProp="knowsAbout"
                role="listitem"
              >
                {/* Custom top bar gradient reveal on hover */}
                <div className={`absolute top-0 left-0 w-full h-[4px] bg-gradient-to-r ${pillar.accentClass} transform origin-left scale-x-30 group-hover:scale-x-100 transition-transform duration-500`} />

                {/* Ambient glow spotlight in the background */}
                <div 
                  className="absolute -bottom-24 -right-24 w-48 h-48 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none select-none"
                  style={{ backgroundColor: pillar.glowColor }}
                />

                {/* Architectural display number */}
                <span className="absolute right-8 top-8 font-serif text-5xl font-bold text-navy-brand/[0.04] group-hover:text-navy-brand/[0.08] select-none pointer-events-none transition-colors duration-500">
                  {pillar.num}
                </span>

                <div className="relative z-10 flex flex-col h-full justify-between">
                  <div>
                    {/* Outer & Inner geometric layered Icon Container */}
                    <div className="w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-500 relative mb-5 group-hover:scale-110 group-hover:rotate-3">
                      {/* Default premium subtle background underlay */}
                      <div className={`absolute inset-0 rounded-2xl ${pillar.lightAccent} transition-all duration-500 group-hover:opacity-0`} />
                      {/* Colorful gradient that fades in on hover */}
                      <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${pillar.accentClass} opacity-0 group-hover:opacity-100 transition-all duration-500 shadow-md`} />
                      {/* Icon */}
                      <Icon className="w-6 h-6 text-navy-brand group-hover:text-white transition-colors duration-500 relative z-10" />
                    </div>

                    {/* Title with spaced tracking */}
                    <h3 className="font-serif text-lg sm:text-[1.25rem] font-bold mb-3 text-navy-brand group-hover:text-[#0B1B3D] transition-colors duration-300 tracking-wide">
                      {stripEmoji(pillar.title)}
                    </h3>

                    {/* Clean left-aligned description without justified gaps */}
                    <p className="font-sans font-light text-sm sm:text-[1.02rem] text-slate-600 leading-relaxed text-left group-hover:text-slate-800 transition-colors duration-500">
                      {pillar.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Corporate Badges of Scale */}
      <section className="relative py-12 sm:py-20 bg-[#050d1d] text-[#FAF6F0] overflow-hidden border-t border-b border-[#FAF6F0]/5">
        {/* Subtle decorative background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-sky-accent/5 rounded-full blur-3xl pointer-events-none select-none"></div>

        <div className="max-w-[1240px] mx-auto px-6 relative z-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-0 rounded-[12px] overflow-hidden border border-white/5 bg-white/[0.02] backdrop-blur-md">
            <div className="p-8 md:p-12 text-center flex flex-col items-center justify-center border-r border-b border-white/5 last:border-0 group hover:bg-white/[0.02] transition-colors duration-300">
              <span className="block text-4xl sm:text-5xl font-bold text-sky-accent mb-3 font-serif tracking-tight group-hover:scale-105 transition-transform duration-300">13</span>
              <span className="text-[10px] md:text-[11px] font-mono tracking-[0.2em] opacity-60 uppercase">
                {currentLang === 'ro' ? 'Divizii Active' : 'Active Divisions'}
              </span>
            </div>
            <div className="p-8 md:p-12 text-center flex flex-col items-center justify-center lg:border-r border-b border-white/5 last:border-0 group hover:bg-white/[0.02] transition-colors duration-300">
              <span className="block text-4xl sm:text-5xl font-bold text-sky-accent mb-3 font-serif tracking-tight group-hover:scale-105 transition-transform duration-300">100%</span>
              <span className="text-[10px] md:text-[11px] font-mono tracking-[0.2em] opacity-60 uppercase">
                {currentLang === 'ro' ? 'Integrare Verticală' : 'Vertical Integration'}
              </span>
            </div>
            <div className="p-8 md:p-12 text-center flex flex-col items-center justify-center border-r border-white/5 last:border-0 sm:border-b-0 group hover:bg-white/[0.02] transition-colors duration-300">
              <span className="block text-3xl sm:text-4xl font-bold text-[#FAF6F0] mb-3 font-serif tracking-wide group-hover:scale-105 transition-transform duration-300">BLUE-CHIP</span>
              <span className="text-[10px] md:text-[11px] font-mono tracking-[0.2em] opacity-60 uppercase">
                {currentLang === 'ro' ? 'Standard Active' : 'Asset Standard'}
              </span>
            </div>
            <div className="p-8 md:p-12 text-center flex flex-col items-center justify-center last:border-0 group hover:bg-white/[0.02] transition-colors duration-300">
              <span className="block text-3xl sm:text-4xl font-bold text-[#FAF6F0] mb-3 font-serif tracking-wide group-hover:scale-105 transition-transform duration-300">IFC HK</span>
              <span className="text-[10px] md:text-[11px] font-mono tracking-[0.2em] opacity-60 uppercase">
                {currentLang === 'ro' ? 'Sediu Global' : 'Global Headquarters'}
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
