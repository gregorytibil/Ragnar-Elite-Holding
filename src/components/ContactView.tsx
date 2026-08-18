import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CheckCircle, Loader2, Phone } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../translations';
import { trackFormSubmission, trackPhoneClick } from '../lib/analytics';

interface ContactViewProps {
  currentLang: Language;
}

export default function ContactView({ currentLang }: ContactViewProps) {
  const t = translations[currentLang];
  const [formState, setFormState] = useState<'default' | 'sending' | 'success'>('default');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [sector, setSector] = useState('');
  const [message, setMessage] = useState('');
  const [agree, setAgree] = useState(false);
  const [trackingId, setTrackingId] = useState('');

  const isRo = currentLang === 'ro';

  const coreOptions = [
    { value: 'aerospace', ro: 'Divizia de Industrie Aerospațială, Aviație & Apărare Marină', en: 'Aerospace, Aviation & Marine Defense Division' },
    { value: 'real_estate', ro: 'Divizia Imobiliară & Proprietăți de Investiții', en: 'Real Estate & Investment Property Division' },
    { value: 'architecture', ro: 'Divizia de Arhitectură & Proiectare Conceptuală', en: 'Architecture & Conceptual Design Division' },
    { value: 'construction', ro: 'Divizia de Construcții & Dezvoltare Infrastructură', en: 'Construction & Infrastructure Development Division' },
    { value: 'energy', ro: 'Divizia de Energie, Electricitate & Resurse Regenerabile', en: 'Energy, Electricity & Renewable Resources Division' },
    { value: 'mining', ro: 'Divizia de Exploatare Minieră, Resurse Naturale & Metale Prețioase', en: 'Mining, Natural Resources & Precious Metals Division' },
    { value: 'healthcare', ro: 'Divizia de Sănătate & Biotehnologie Medicală', en: 'Healthcare & Medical Biotechnology Division' },
    { value: 'agriculture', ro: 'Divizia de Agricultură Sustenabilă & Producție Alimentară', en: 'Sustainable Agriculture & Food Production Division' },
    { value: 'logistics', ro: 'Divizia de Transport & Logistică Globală', en: 'Transport & Global Logistics Division' },
  ];

  const governanceOptions = [
    { value: 'private_equity', ro: 'Divizia de Private Equity & Venture Capital', en: 'Private Equity & Venture Capital Division' },
    { value: 'ma', ro: 'Divizia de Fuziuni & Achiziții (M&A Corporativ)', en: 'Mergers & Acquisitions (M&A Corporate) Division' },
    { value: 'asset_management', ro: 'Divizia de Asset & Wealth Management Global', en: 'Global Asset & Wealth Management Division' },
    { value: 'accounting', ro: 'Divizia de Contabilitate Corporativă & Audit Financiar', en: 'Corporate Accounting & Financial Auditing Division' },
    { value: 'consultancy', ro: 'Divizia de Consultanță Strategică Executivă', en: 'Strategic Executive Consultancy Division' },
    { value: 'project_management', ro: 'Divizia de Project Management & Supervizare Tehnică', en: 'Project Management & Technical Supervision Division' },
    { value: 'cybersecurity', ro: 'Divizia de IT, Tehnologie & Securitate Cibernetică', en: 'IT, Technology & Cybersecurity Division' },
    { value: 'education', ro: 'Divizia de Educație Executivă & Instruire de Elită în Management', en: 'Executive Education & Elite Management Training Division' },
    { value: 'office_supplies', ro: 'Divizia de Consumabile de Birou & Managementul Procurării', en: 'Office Supplies & Consumables Management Division' },
    { value: 'cleaning', ro: 'Divizia de Curățenie Comercială & Igienizare Ecologică', en: 'Commercial Cleaning & Environmental Sanitation Division' },
  ];

  const strategicOption = {
    value: 'strategic_partnership',
    ro: 'Parteneriat Strategic Macroeconomic Direct / Propune Proiect M&A',
    en: 'Direct Macroeconomic Strategic Partnership / M&A Proposal'
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!agree) return;

    setFormState('sending');

    // Simulate enterprise-level AES-256 handshake & transmission
    setTimeout(() => {
      const generatedId = 'RE-' + Math.floor(100000 + Math.random() * 90000);
      setTrackingId(generatedId);
      setFormState('success');
      trackFormSubmission('contact_proposal', {
        sector_selected: sector,
        dossier_id: generatedId,
        current_language: currentLang,
      });
    }, 2500);
  };

  return (
    <div 
      className="min-h-screen bg-ice-marble text-[#0B1B3D] selection:bg-[#0B1B3D] selection:text-white overflow-hidden"
      itemScope
      itemType="https://schema.org/ContactPage"
    >
      {/* Hero Section */}
      <section className="relative bg-[#050D1D] text-[#FAF6F0] pt-[140px] pb-16 sm:pt-[170px] sm:pb-28 md:pt-[240px] md:pb-[160px] px-6 border-b border-white/5 overflow-hidden">
        {/* Background image */}
        <img 
          src="https://i.imgur.com/QIt6ebb.jpeg" 
          alt="Contact us background"
          className="absolute inset-0 w-full h-full object-cover opacity-[0.35] pointer-events-none z-0 scale-105"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#050D1D] via-[#0B1B3D]/95 to-[#050D1D] z-1 opacity-60"></div>
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
              <span>{t.contactHeaderTitle.split(' ')[0] || 'PARTNERSHIPS'}</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="font-sans text-4xl sm:text-5xl md:text-[4.2rem] font-bold mb-6 tracking-tight text-white leading-[1.1] uppercase"
            >
              {t.contactHeaderTitle}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="text-[#C8D9E6] text-base sm:text-lg md:text-[1.35rem] font-sans font-light tracking-wide max-w-2xl leading-relaxed"
            >
              {t.contactHeaderSubtitle}
            </motion.p>
          </div>
        </div>
      </section>

      {/* Main Content Container */}
      <div className="max-w-[1140px] mx-auto px-6 pb-16 sm:pb-24 md:pb-36 relative z-10 -mt-8 sm:-mt-12 md:-mt-24">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-[0.02] pointer-events-none z-0"></div>

        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="grid grid-cols-1 lg:grid-cols-12 relative z-20 shadow-[0_20px_50px_rgba(5,13,29,0.08)] rounded-sm overflow-hidden border border-[#0B1B3D]/10"
        >
          {/* Left Column - Contact info */}
          <div className="lg:col-span-5 bg-[#050D1D] text-[#FAF6F0] p-6 sm:p-10 md:p-14 lg:p-16 flex flex-col justify-between relative overflow-hidden border-r border-[#0B1B3D]/10">
            <div className="absolute inset-0 bg-gradient-to-b from-[#050D1D] via-[#0B1B3D]/95 to-[#050D1D] z-0"></div>
            <div className="absolute inset-0 bg-[radial-gradient(#C8D9E6_0.75px,transparent_0.75px)] [background-size:24px_24px] opacity-[0.05] z-0"></div>
            
            <div className="relative z-10">
              <h3 className="font-sans text-2xl md:text-3xl font-bold mb-10 uppercase tracking-tight text-white flex items-center gap-4">
                Global Network
              </h3>
              
              <div className="space-y-12">
                <div className="space-y-3">
                  <strong className="block font-mono text-[10px] uppercase tracking-[0.2em] text-[#A2D2FF] font-bold">{t.hqLabel}</strong>
                  <span className="font-sans text-base text-[#FAF6F0] font-light leading-relaxed block max-w-xs">{t.hqAddress}</span>
                </div>
                <div className="space-y-3">
                  <strong className="block font-mono text-[10px] uppercase tracking-[0.2em] text-[#A2D2FF] font-bold">{t.phoneLabel}</strong>
                  <a 
                    href="tel:+85247366189" 
                    onClick={() => trackPhoneClick('+852 4736 6189')}
                    className="font-mono text-sm text-white hover:text-[#A2D2FF] transition-colors border-b border-white/20 pb-1 inline-flex items-center gap-2"
                  >
                    <Phone className="w-3.5 h-3.5 text-[#A2D2FF]" />
                    {t.phoneCentral}
                  </a>
                </div>
                <div className="space-y-3">
                  <strong className="block font-mono text-[10px] uppercase tracking-[0.2em] text-[#A2D2FF] font-bold">{t.mailSecured}</strong>
                  <a href="mailto:contact@ragnareliteholding.com" className="font-mono text-sm text-white hover:text-[#A2D2FF] transition-colors border-b border-white/20 pb-1 inline-block">contact@ragnareliteholding.com</a>
                </div>
                <div className="space-y-3">
                  <strong className="block font-mono text-[10px] uppercase tracking-[0.2em] text-[#A2D2FF] font-bold">{t.mailRelations}</strong>
                  <a href="mailto:investitor@ragnareliteholding.com" className="font-mono text-sm text-white hover:text-[#A2D2FF] transition-colors border-b border-white/20 pb-1 inline-block">investitor@ragnareliteholding.com</a>
                </div>

                {/* Specialized Department Channels */}
                <div className="pt-4 border-t border-white/10 space-y-3">
                  <strong className="block font-mono text-[10px] uppercase tracking-[0.2em] text-[#A2D2FF] font-bold">
                    {currentLang === 'ro' ? 'Canale Muncă & Departament' : 'Department Channels'}
                  </strong>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-mono">
                    <div>
                      <span className="text-[#C8D9E6]/60 block text-[9px]">GENERAL / INFO:</span>
                      <a href="mailto:info@ragnareliteholding.com" className="text-white hover:text-[#A2D2FF] transition-colors">info@ragnareliteholding.com</a>
                    </div>
                    <div>
                      <span className="text-[#C8D9E6]/60 block text-[9px]">LEGAL & GDPR:</span>
                      <a href="mailto:legal@ragnareliteholding.com" className="text-white hover:text-[#A2D2FF] transition-colors">legal@ragnareliteholding.com</a>
                    </div>
                    <div>
                      <span className="text-[#C8D9E6]/60 block text-[9px]">HR / RECRUITMENT:</span>
                      <a href="mailto:chro@ragnareliteholding.com" className="text-white hover:text-[#A2D2FF] transition-colors">chro@ragnareliteholding.com</a>
                    </div>
                    <div>
                      <span className="text-[#C8D9E6]/60 block text-[9px]">PRESS & MEDIA:</span>
                      <a href="mailto:media@ragnareliteholding.com" className="text-white hover:text-[#A2D2FF] transition-colors">media@ragnareliteholding.com</a>
                    </div>
                    <div>
                      <span className="text-[#C8D9E6]/60 block text-[9px]">IT & SYSTEMS:</span>
                      <a href="mailto:it@ragnareliteholding.com" className="text-white hover:text-[#A2D2FF] transition-colors">it@ragnareliteholding.com</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative z-10 pt-16 mt-16 border-t border-white/10">
              <p className="font-mono text-[11px] text-[#C8D9E6]/50 leading-relaxed max-w-[280px] uppercase tracking-wider">
                All communications are protected by strictly enforced non-disclosure protocols and encrypted via secure channels.
              </p>
            </div>
          </div>

          {/* Right Column - Form container */}
          <div className="lg:col-span-7 bg-white p-6 sm:p-10 md:p-14 lg:p-16 relative">
            <AnimatePresence mode="wait">
              {formState === 'default' && (
                <motion.div
                  key="form"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                >
                  <h2 className="font-sans text-2xl md:text-3xl font-bold text-[#0B1B3D] mb-3 uppercase tracking-tight">
                    {t.formTitle}
                  </h2>
                  <p className="font-sans font-light text-base text-slate-500 mb-8 sm:mb-12 leading-relaxed max-w-lg">
                    {t.formSubtitle}
                  </p>

                  <form onSubmit={handleSubmit} className="space-y-10">
                    <div className="space-y-8">
                      <div className="relative group">
                        <label className="absolute -top-2.5 left-3 bg-white px-1 text-[10px] font-mono uppercase tracking-widest text-[#0B1B3D]/60 font-bold transition-colors group-focus-within:text-[#0B1B3D]">{t.formNamePlaceholder}</label>
                        <input
                          type="text"
                          required
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          className="w-full bg-transparent border border-[#0B1B3D]/15 focus:border-[#0B1B3D] transition-colors outline-none font-sans text-base py-4 px-4 text-[#0B1B3D] shadow-sm hover:border-[#0B1B3D]/30"
                        />
                      </div>
                      
                      <div className="relative group">
                        <label className="absolute -top-2.5 left-3 bg-white px-1 text-[10px] font-mono uppercase tracking-widest text-[#0B1B3D]/60 font-bold transition-colors group-focus-within:text-[#0B1B3D]">{t.formEmailPlaceholder}</label>
                        <input
                          type="email"
                          required
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className="w-full bg-transparent border border-[#0B1B3D]/15 focus:border-[#0B1B3D] transition-colors outline-none font-sans text-base py-4 px-4 text-[#0B1B3D] shadow-sm hover:border-[#0B1B3D]/30"
                        />
                      </div>
                      
                      <div className="relative group">
                        <label className="absolute -top-2.5 left-3 bg-white px-1 z-10 text-[10px] font-mono uppercase tracking-widest text-[#0B1B3D]/60 font-bold transition-colors group-focus-within:text-[#0B1B3D]">{t.formSectorPlaceholder}</label>
                        <div className="relative">
                          <select
                            required
                            value={sector}
                            onChange={(e) => setSector(e.target.value)}
                            className={`w-full bg-transparent border border-[#0B1B3D]/15 focus:border-[#0B1B3D] transition-colors outline-none font-sans text-xs sm:text-base py-4 px-4 appearance-none cursor-pointer shadow-sm hover:border-[#0B1B3D]/30 ${sector ? 'text-[#0B1B3D]' : 'text-[#0B1B3D]/40'}`}
                          >
                            <option value="" disabled className="text-slate-400 text-xs sm:text-sm">
                              {currentLang === 'ro' ? 'Selectează...' : 'Select...'}
                            </option>
                            {coreOptions.map((opt) => (
                              <option key={opt.value} value={opt.value} className="text-[#0B1B3D] font-normal text-xs sm:text-sm">
                                {currentLang === 'ro' ? opt.ro : opt.en}
                              </option>
                            ))}
                            {governanceOptions.map((opt) => (
                              <option key={opt.value} value={opt.value} className="text-[#0B1B3D] font-normal text-xs sm:text-sm">
                                {currentLang === 'ro' ? opt.ro : opt.en}
                              </option>
                            ))}
                            <option value={strategicOption.value} className="text-[#0B1B3D] font-normal text-xs sm:text-sm">
                              {currentLang === 'ro' ? strategicOption.ro : strategicOption.en}
                            </option>
                          </select>
                          <div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none text-[#0B1B3D]/40">
                            <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" fillRule="evenodd"></path></svg>
                          </div>
                        </div>
                      </div>
                      
                      <div className="relative group">
                        <label className="absolute -top-2.5 left-3 bg-white px-1 text-[10px] font-mono uppercase tracking-widest text-[#0B1B3D]/60 font-bold transition-colors group-focus-within:text-[#0B1B3D]">{currentLang === 'ro' ? 'Detalii Propunere' : 'Proposal Details'}</label>
                        <textarea
                          required
                          rows={5}
                          value={message}
                          onChange={(e) => setMessage(e.target.value)}
                          placeholder={t.formMessagePlaceholder}
                          className="w-full bg-transparent border border-[#0B1B3D]/15 focus:border-[#0B1B3D] transition-colors outline-none font-sans text-base py-5 px-4 text-[#0B1B3D] placeholder-[#0B1B3D]/30 resize-none shadow-sm hover:border-[#0B1B3D]/30 leading-relaxed"
                        />
                      </div>
                    </div>

                    <div className="flex items-start gap-4 pt-2">
                      <input
                        type="checkbox"
                        id="agree-gdpr"
                        required
                        checked={agree}
                        onChange={(e) => setAgree(e.target.checked)}
                        className="mt-0.5 w-4 h-4 rounded-sm text-[#0B1B3D] border-[#0B1B3D]/20 focus:ring-[#0B1B3D]"
                      />
                      <label
                        htmlFor="agree-gdpr"
                        className="text-sm text-slate-500 font-light leading-relaxed select-none cursor-pointer"
                      >
                        {t.formGdprLabel}
                      </label>
                    </div>

                    <button
                      type="submit"
                      disabled={!agree}
                      className="w-full py-5 bg-[#0B1B3D] text-white font-sans text-sm font-bold uppercase tracking-[0.2em] hover:bg-[#050D1D] transition-all disabled:opacity-50 disabled:cursor-not-allowed mt-4 flex items-center justify-center gap-3 border border-[#0B1B3D]"
                    >
                      {t.formSubmitBtn}
                    </button>
                  </form>
                </motion.div>
              )}

              {formState === 'sending' && (
                <motion.div
                  key="sending"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="text-center py-20 flex flex-col items-center justify-center h-full"
                >
                  <Loader2 className="w-12 h-12 text-[#0B1B3D] animate-spin mb-6" />
                  <h3 className="font-sans text-xl font-bold text-[#0B1B3D] mb-2 uppercase tracking-widest">
                    AES-256 HANDSHAKE
                  </h3>
                  <p className="text-sm text-slate-500 font-mono tracking-wider max-w-sm">
                    {t.formSending}
                  </p>
                  
                  <div className="w-48 bg-slate-100 h-1 mt-8 rounded overflow-hidden relative">
                    <div className="absolute top-0 left-0 bg-[#0B1B3D] h-full animate-pulse w-full"></div>
                  </div>
                </motion.div>
              )}

              {formState === 'success' && (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-10 flex flex-col h-full justify-center"
                >
                  <div className="p-4 bg-emerald-50 rounded-full w-fit mx-auto text-emerald-600 mb-6 border border-emerald-100">
                    <CheckCircle className="w-10 h-10" />
                  </div>
                  <h3 className="font-sans text-2xl font-bold text-[#0B1B3D] mb-3 uppercase tracking-tight">
                    {t.formSuccessTitle}
                  </h3>
                  <p className="text-sm text-slate-600 font-light leading-relaxed max-w-md mx-auto mb-10">
                    {t.formSuccessDesc}
                  </p>

                  <div className="p-6 bg-[#F7F6F3] rounded-sm border border-slate-200 text-left font-mono text-xs text-[#0B1B3D] space-y-3">
                    <div className="flex justify-between border-b border-slate-200 pb-3">
                      <span className="opacity-60 uppercase font-bold text-[10px]">PROTOCOL:</span>
                      <span className="font-bold text-emerald-700">AES-256 SECURED</span>
                    </div>
                    <div className="flex justify-between border-b border-slate-200 pb-3">
                      <span className="opacity-60 uppercase font-bold text-[10px]">DOSSIER ID:</span>
                      <span className="font-bold text-[#0B1B3D]">{trackingId}</span>
                    </div>
                    <div className="flex justify-between pb-1 pt-1">
                      <span className="opacity-60 uppercase font-bold text-[10px]">SERVERS:</span>
                      <span className="font-bold">STANLEY STREET, HK</span>
                    </div>
                  </div>

                  <button
                    onClick={() => {
                      setName('');
                      setEmail('');
                      setMessage('');
                      setSector('');
                      setAgree(false);
                      setFormState('default');
                    }}
                    className="mt-10 w-full py-4 border border-[#0B1B3D] text-[#0B1B3D] hover:bg-[#0B1B3D] hover:text-white font-sans text-xs font-semibold uppercase tracking-widest transition-all"
                  >
                    {currentLang === 'ro' ? 'Transmite Nou Dosar' : 'Submit New Dossier'}
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
