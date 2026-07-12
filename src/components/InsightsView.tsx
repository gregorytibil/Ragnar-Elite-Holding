import { motion } from 'motion/react';
import { BookOpen, Calendar, User, Quote, TrendingUp, Shield } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../translations';

interface InsightsViewProps {
  currentLang: Language;
}

export default function InsightsView({ currentLang }: InsightsViewProps) {
  const t = translations[currentLang];

  // Helper to remove emojis from titles if they exist
  const cleanTitle = (text: string) => text.replace(/[\u{1F300}-\u{1F9FF}]|[\u{2600}-\u{26FF}]/gu, '').trim();

  const articles = [
    {
      id: 'article-1',
      title: cleanTitle(t.insightsArticle1Title),
      author: t.insightsArticle1Author,
      summary: t.insightsArticle1Summary,
      content: t.insightsArticle1Content,
      icon: TrendingUp,
      tag: currentLang === 'ro' ? 'MACROECONOMIE' : 'MACROECONOMICS'
    },
    {
      id: 'article-2',
      title: cleanTitle(t.insightsArticle2Title),
      author: t.insightsArticle2Author,
      summary: t.insightsArticle2Summary,
      content: t.insightsArticle2Content,
      icon: Shield,
      tag: currentLang === 'ro' ? 'TEHNOLOGIE & INVESTIȚII' : 'TECH & INVESTMENT'
    }
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
              <span>INSIGHTS</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="font-sans text-4xl sm:text-5xl md:text-[4.2rem] font-bold mb-6 tracking-tight text-white leading-[1.1] uppercase"
            >
              {t.insightsHeaderTitle}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="text-[#C8D9E6] text-base sm:text-lg md:text-[1.35rem] font-sans font-light tracking-wide max-w-2xl leading-relaxed"
            >
              {t.insightsHeaderSubtitle}
            </motion.p>
          </div>
        </div>
      </section>

      {/* Main Content Container */}
      <div className="max-w-[1140px] mx-auto px-6 pb-24 md:pb-36 relative z-10">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-[0.02] pointer-events-none z-0"></div>

        {/* Intro Quote */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="bg-white rounded-sm p-8 md:p-[70px] shadow-[0_20px_50px_rgba(5,13,29,0.05)] -mt-12 md:-mt-[80px] relative z-20 border border-[#2F4156]/10 text-center"
        >
          <div className="absolute top-0 left-0 w-full h-[2px] bg-[#2F4156]"></div>
          <Quote className="w-6 h-6 text-[#C8D9E6] mx-auto mb-6" />
          <p className="font-sans text-lg sm:text-xl md:text-[1.35rem] leading-[1.7] text-[#2F4156]/90 max-w-3xl mx-auto font-light italic">
            {t.insightsIntro}
          </p>
        </motion.div>

        {/* Articles List */}
        <div className="mt-24 space-y-24 md:space-y-36">
          {articles.map((art, idx) => (
            <motion.article
              key={art.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.08 }}
              className="group grid grid-cols-1 lg:grid-cols-12 gap-12"
            >
              {/* Article Meta Sidebar */}
              <div className="lg:col-span-3 space-y-6">
                 <div className="w-16 h-16 bg-[#2F4156] flex items-center justify-center rounded-lg border border-white/5 shadow-inner">
                    <art.icon className="w-8 h-8 text-[#C8D9E6]" />
                 </div>
                 <div className="space-y-4 pt-4 border-t border-slate-200">
                    <div>
                      <span className="font-mono text-[10px] tracking-[0.3em] text-[#2F4156] uppercase block font-bold mb-1">
                        Category
                      </span>
                      <span className="text-sm text-slate-600 font-medium">
                        {art.tag}
                      </span>
                    </div>
                    <div>
                      <span className="font-mono text-[10px] tracking-[0.3em] text-[#2F4156] uppercase block font-bold mb-1">
                        Author
                      </span>
                      <span className="text-sm text-slate-600 font-medium flex items-center gap-1.5">
                         <User className="w-3.5 h-3.5" />
                         {art.author}
                      </span>
                    </div>
                 </div>
              </div>

              {/* Article Content */}
              <div className="lg:col-span-9">
                <h2 className="text-3xl md:text-5xl font-sans font-bold uppercase mb-8 tracking-tight text-[#2F4156] group-hover:text-[#2F4156]/80 transition-colors leading-tight">
                  {art.title}
                </h2>

                <div className="mb-10 text-xl md:text-2xl text-[#2F4156] font-light italic leading-relaxed border-l-2 border-[#C8D9E6] pl-6 md:pl-10">
                  {art.summary}
                </div>

                <div className="prose prose-lg prose-slate max-w-none text-slate-600 font-light leading-loose text-base md:text-lg">
                  <p>{art.content}</p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </div>
  );
}
