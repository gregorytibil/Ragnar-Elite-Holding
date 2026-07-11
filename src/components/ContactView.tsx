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
    <div className="pt-[110px] min-h-screen bg-bej-bg text-navy-brand flex items-center justify-center p-6 md:p-12">
      <div className="max-w-[1100px] w-full contact-box">
        
        {/* Left Column - Contact info */}
        <div className="contact-info">
          <div>
            <h1 className="font-serif text-3xl sm:text-[2.8rem] font-bold text-[#FAF6F0] mb-5 leading-[1.2]">
              {t.contactHeaderTitle}
            </h1>
            <p className="lead font-sans font-light text-base sm:text-[1.15rem] text-sky-accent leading-relaxed">
              {t.contactHeaderSubtitle}
            </p>
          </div>

          <div className="contact-details">
            <div className="contact-detail-item">
              <strong>{t.hqLabel}</strong>
              <span className="font-mono text-stone-300">{t.hqAddress}</span>
            </div>
            <div className="contact-detail-item">
              <strong>{t.mailSecured}</strong>
              <span className="font-mono text-sky-accent">capital@ragnarelite.com</span>
            </div>
            <div className="contact-detail-item">
              <strong>{t.mailRelations}</strong>
              <span className="font-mono text-sky-accent">partnerships@ragnarelite.com</span>
            </div>
          </div>
        </div>

        {/* Right Column - Form container */}
        <div className="contact-form-container">
          <AnimatePresence mode="wait">
            {formState === 'default' && (
              <motion.div
                key="form"
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.3 }}
              >
                <h2 className="font-serif text-2xl md:text-[2rem] font-bold text-navy-brand mb-2.5">
                  {t.formTitle}
                </h2>
                <p className="form-subtitle font-sans font-light text-sm sm:text-[0.95rem] text-[#556380] mb-[30px] leading-relaxed">
                  {t.formSubtitle}
                </p>

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder={t.formNamePlaceholder}
                      className="form-control"
                    />
                  </div>

                  <div>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder={t.formEmailPlaceholder}
                      className="form-control"
                    />
                  </div>

                  <div>
                    <select
                      required
                      value={sector}
                      onChange={(e) => setSector(e.target.value)}
                      className="form-control select-dropdown"
                    >
                      <option value="" disabled>
                        {t.formSectorPlaceholder}
                      </option>
                      <option value="infrastructure">{t.sectorOpt1}</option>
                      <option value="tech_energy">{t.sectorOpt2}</option>
                      <option value="shared_services">{t.sectorOpt3}</option>
                      <option value="lifesciences_media">{t.sectorOpt4}</option>
                      <option value="ma_proposal">{t.sectorOpt5}</option>
                    </select>
                  </div>

                  <div>
                    <textarea
                      required
                      rows={5}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder={t.formMessagePlaceholder}
                      className="form-control resize-none"
                    />
                  </div>

                  <div className="flex items-start gap-2.5">
                    <input
                      type="checkbox"
                      id="agree-gdpr"
                      required
                      checked={agree}
                      onChange={(e) => setAgree(e.target.checked)}
                      className="mt-1 w-4 h-4 rounded text-navy-brand border-stone-300 focus:ring-navy-brand cursor-pointer"
                    />
                    <label
                      htmlFor="agree-gdpr"
                      className="text-xs text-stone-500 font-light leading-snug select-none cursor-pointer text-justify"
                    >
                      {t.formGdprLabel}
                    </label>
                  </div>

                  <button
                    type="submit"
                    disabled={!agree}
                    className="btn-submit"
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
                className="text-center py-12 flex flex-col items-center justify-center"
              >
                <Loader2 className="w-12 h-12 text-navy-brand animate-spin mb-6" />
                <h3 className="font-serif text-xl font-bold text-navy-brand mb-2 uppercase tracking-widest font-mono">
                  AES-256 HANDSHAKE
                </h3>
                <p className="text-xs sm:text-sm text-stone-500 font-mono tracking-wider max-w-sm">
                  {t.formSending}
                </p>
                
                {/* Simulated progress bar */}
                <div className="w-48 bg-stone-100 h-1 mt-6 rounded overflow-hidden relative">
                  <div className="absolute top-0 left-0 bg-navy-brand h-full animate-[loading_2.5s_ease-in-out_infinite] w-20"></div>
                </div>
              </motion.div>
            )}

            {formState === 'success' && (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-6"
              >
                <div className="p-3 bg-emerald-100 rounded-full w-fit mx-auto text-emerald-600 mb-6">
                  <CheckCircle className="w-12 h-12" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-navy-brand mb-3">
                  {t.formSuccessTitle}
                </h3>
                <p className="text-xs sm:text-sm text-stone-600 font-light leading-relaxed max-w-md mx-auto mb-8 text-justify">
                  {t.formSuccessDesc}
                </p>

                {/* Secure Receipt Block */}
                <div className="p-6 bg-bej-bg rounded border border-sky-accent/60 text-left font-mono text-[10px] sm:text-xs text-navy-brand space-y-3 shadow-inner">
                  <div className="flex justify-between border-b border-stone-200 pb-2">
                    <span className="opacity-60 uppercase font-bold">TRANSACTION PROTOCOL:</span>
                    <span className="font-bold text-emerald-600">AES-256 SECURED</span>
                  </div>
                  <div className="flex justify-between border-b border-stone-200 pb-2">
                    <span className="opacity-60 uppercase font-bold">DOSSIER TRACKING ID:</span>
                    <span className="font-bold font-mono tracking-wider text-navy-brand">
                      {trackingId}
                    </span>
                  </div>
                  <div className="flex justify-between border-b border-stone-200 pb-2">
                    <span className="opacity-60 uppercase font-bold">RECEIVING SERVERS:</span>
                    <span className="font-bold">IFC CENTRAL, HK</span>
                  </div>
                  <div className="flex justify-between pb-1">
                    <span className="opacity-60 uppercase font-bold">ENCRYPTED AT:</span>
                    <span>{new Date().toISOString()}</span>
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
                  className="mt-8 px-6 py-3 bg-navy-brand hover:bg-transparent text-[#FAF6F0] hover:text-navy-brand border-2 border-navy-brand text-xs font-semibold uppercase tracking-wider rounded transition-all cursor-pointer"
                >
                  {currentLang === 'ro' ? 'Transmite Nou Dosar' : 'Submit New Dossier'}
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

      </div>
    </div>
  );
}
