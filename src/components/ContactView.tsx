import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CheckCircle, Loader2 } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../translations';

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!agree) return;

    setFormState('sending');

    // Simulate enterprise-level AES-256 handshake & transmission
    setTimeout(() => {
      const generatedId = 'RE-' + Math.floor(100000 + Math.random() * 90000);
      setTrackingId(generatedId);
      setFormState('success');
    }, 2500);
  };

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
      <div className="max-w-[1140px] mx-auto px-6 pb-24 md:pb-36 relative z-10 -mt-12 md:-mt-24">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-[0.02] pointer-events-none z-0"></div>

        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="grid grid-cols-1 lg:grid-cols-12 relative z-20 shadow-[0_20px_50px_rgba(5,13,29,0.08)] rounded-sm overflow-hidden border border-[#2F4156]/10"
        >
          {/* Left Column - Contact info */}
          <div className="lg:col-span-5 bg-[#2F4156] text-[#F5EFEB] p-10 md:p-14 lg:p-16 flex flex-col justify-between relative overflow-hidden border-r border-[#2F4156]/10">
            <div className="absolute inset-0 bg-gradient-to-b from-[#2F4156] via-[#2F4156]/95 to-[#2F4156] z-0"></div>
            <div className="absolute inset-0 bg-[radial-gradient(#C8D9E6_0.75px,transparent_0.75px)] [background-size:24px_24px] opacity-[0.05] z-0"></div>
            
            <div className="relative z-10">
              <h3 className="font-sans text-2xl md:text-3xl font-bold mb-10 uppercase tracking-tight text-white flex items-center gap-4">
                Global Network
              </h3>
              
              <div className="space-y-12">
                <div className="space-y-3">
                  <strong className="block font-mono text-[10px] uppercase tracking-[0.2em] text-[#C8D9E6] font-bold">{t.hqLabel}</strong>
                  <span className="font-sans text-base text-[#F5EFEB] font-light leading-relaxed block max-w-xs">{t.hqAddress}</span>
                </div>
                <div className="space-y-3">
                  <strong className="block font-mono text-[10px] uppercase tracking-[0.2em] text-[#C8D9E6] font-bold">{t.mailSecured}</strong>
                  <span className="font-mono text-sm text-white border-b border-white/20 pb-1 inline-block">office@ragnareliteholding.com</span>
                </div>
                <div className="space-y-3">
                  <strong className="block font-mono text-[10px] uppercase tracking-[0.2em] text-[#C8D9E6] font-bold">{t.mailRelations}</strong>
                  <span className="font-mono text-sm text-white border-b border-white/20 pb-1 inline-block">office@ragnareliteholding.com</span>
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
          <div className="lg:col-span-7 bg-white p-10 md:p-14 lg:p-16 relative">
            <AnimatePresence mode="wait">
              {formState === 'default' && (
                <motion.div
                  key="form"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                >
                  <h2 className="font-sans text-2xl md:text-3xl font-bold text-[#2F4156] mb-3 uppercase tracking-tight">
                    {t.formTitle}
                  </h2>
                  <p className="font-sans font-light text-base text-slate-500 mb-12 leading-relaxed max-w-lg">
                    {t.formSubtitle}
                  </p>

                  <form onSubmit={handleSubmit} className="space-y-10">
                    <div className="space-y-8">
                      <div className="relative group">
                        <label className="absolute -top-2.5 left-3 bg-white px-1 text-[10px] font-mono uppercase tracking-widest text-[#2F4156]/60 font-bold transition-colors group-focus-within:text-[#2F4156]">{t.formNamePlaceholder}</label>
                        <input
                          type="text"
                          required
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          className="w-full bg-transparent border border-[#2F4156]/15 focus:border-[#2F4156] transition-colors outline-none font-sans text-base py-4 px-4 text-[#2F4156] shadow-sm hover:border-[#2F4156]/30"
                        />
                      </div>
                      
                      <div className="relative group">
                        <label className="absolute -top-2.5 left-3 bg-white px-1 text-[10px] font-mono uppercase tracking-widest text-[#2F4156]/60 font-bold transition-colors group-focus-within:text-[#2F4156]">{t.formEmailPlaceholder}</label>
                        <input
                          type="email"
                          required
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className="w-full bg-transparent border border-[#2F4156]/15 focus:border-[#2F4156] transition-colors outline-none font-sans text-base py-4 px-4 text-[#2F4156] shadow-sm hover:border-[#2F4156]/30"
                        />
                      </div>
                      
                      <div className="relative group">
                        <label className="absolute -top-2.5 left-3 bg-white px-1 z-10 text-[10px] font-mono uppercase tracking-widest text-[#2F4156]/60 font-bold transition-colors group-focus-within:text-[#2F4156]">{t.formSectorPlaceholder}</label>
                        <div className="relative">
                          <select
                            required
                            value={sector}
                            onChange={(e) => setSector(e.target.value)}
                            className={`w-full bg-transparent border border-[#2F4156]/15 focus:border-[#2F4156] transition-colors outline-none font-sans text-base py-4 px-4 appearance-none cursor-pointer shadow-sm hover:border-[#2F4156]/30 ${sector ? 'text-[#2F4156]' : 'text-[#2F4156]/40'}`}
                          >
                            <option value="" disabled className="text-slate-400">
                              {currentLang === 'ro' ? 'Selectează...' : 'Select...'}
                            </option>
                            <option value="infrastructure" className="text-[#2F4156]">{t.sectorOpt1}</option>
                            <option value="tech_energy" className="text-[#2F4156]">{t.sectorOpt2}</option>
                            <option value="shared_services" className="text-[#2F4156]">{t.sectorOpt3}</option>
                            <option value="lifesciences_media" className="text-[#2F4156]">{t.sectorOpt4}</option>
                            <option value="ma_proposal" className="text-[#2F4156]">{t.sectorOpt5}</option>
                          </select>
                          <div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none text-[#2F4156]/40">
                            <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" fillRule="evenodd"></path></svg>
                          </div>
                        </div>
                      </div>
                      
                      <div className="relative group">
                        <label className="absolute -top-2.5 left-3 bg-white px-1 text-[10px] font-mono uppercase tracking-widest text-[#2F4156]/60 font-bold transition-colors group-focus-within:text-[#2F4156]">{currentLang === 'ro' ? 'Detalii Propunere' : 'Proposal Details'}</label>
                        <textarea
                          required
                          rows={5}
                          value={message}
                          onChange={(e) => setMessage(e.target.value)}
                          placeholder={t.formMessagePlaceholder}
                          className="w-full bg-transparent border border-[#2F4156]/15 focus:border-[#2F4156] transition-colors outline-none font-sans text-base py-5 px-4 text-[#2F4156] placeholder-[#2F4156]/30 resize-none shadow-sm hover:border-[#2F4156]/30 leading-relaxed"
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
                        className="mt-0.5 w-4 h-4 rounded-sm text-[#2F4156] border-[#2F4156]/20 focus:ring-[#2F4156]"
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
                      className="w-full py-5 bg-[#2F4156] text-white font-sans text-sm font-bold uppercase tracking-[0.2em] hover:bg-[#2F4156] transition-all disabled:opacity-50 disabled:cursor-not-allowed mt-4 flex items-center justify-center gap-3 border border-[#2F4156]"
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
                  <Loader2 className="w-12 h-12 text-[#2F4156] animate-spin mb-6" />
                  <h3 className="font-sans text-xl font-bold text-[#2F4156] mb-2 uppercase tracking-widest">
                    AES-256 HANDSHAKE
                  </h3>
                  <p className="text-sm text-slate-500 font-mono tracking-wider max-w-sm">
                    {t.formSending}
                  </p>
                  
                  <div className="w-48 bg-slate-100 h-1 mt-8 rounded overflow-hidden relative">
                    <div className="absolute top-0 left-0 bg-[#2F4156] h-full animate-pulse w-full"></div>
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
                  <h3 className="font-sans text-2xl font-bold text-[#2F4156] mb-3 uppercase tracking-tight">
                    {t.formSuccessTitle}
                  </h3>
                  <p className="text-sm text-slate-600 font-light leading-relaxed max-w-md mx-auto mb-10">
                    {t.formSuccessDesc}
                  </p>

                  <div className="p-6 bg-[#F7F6F3] rounded-sm border border-slate-200 text-left font-mono text-xs text-[#2F4156] space-y-3">
                    <div className="flex justify-between border-b border-slate-200 pb-3">
                      <span className="opacity-60 uppercase font-bold text-[10px]">PROTOCOL:</span>
                      <span className="font-bold text-emerald-700">AES-256 SECURED</span>
                    </div>
                    <div className="flex justify-between border-b border-slate-200 pb-3">
                      <span className="opacity-60 uppercase font-bold text-[10px]">DOSSIER ID:</span>
                      <span className="font-bold text-[#2F4156]">{trackingId}</span>
                    </div>
                    <div className="flex justify-between pb-1 pt-1">
                      <span className="opacity-60 uppercase font-bold text-[10px]">SERVERS:</span>
                      <span className="font-bold">IFC CENTRAL, HK</span>
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
                    className="mt-10 w-full py-4 border border-[#2F4156] text-[#2F4156] hover:bg-[#2F4156] hover:text-white font-sans text-xs font-semibold uppercase tracking-widest transition-all"
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
