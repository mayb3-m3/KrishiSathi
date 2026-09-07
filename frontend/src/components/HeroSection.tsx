import React from 'react';
import { 
  Scan, 
  ShieldCheck, 
  Phone, 
  ArrowUpRight, 
  Sparkles, 
  CheckCircle2,
  Building2,
  Coins
} from 'lucide-react';
import { translations } from '../data/translations';
import type { Language } from '../data/translations';

interface HeroSectionProps {
  lang: Language;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ lang }) => {
  const t = translations[lang];

  return (
    <section className="relative pt-12 pb-20 lg:pt-20 lg:pb-28 overflow-hidden">
      
      {/* Background Glow Blobs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-emerald-600/20 via-teal-500/15 to-amber-500/10 rounded-full blur-[120px] pointer-events-none -z-10" />
      <div className="absolute top-10 right-10 w-96 h-96 bg-emerald-500/10 rounded-full blur-[100px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-amber-500/10 rounded-full blur-[100px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Top Floating Badge */}
        <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full glass-panel-glow text-emerald-300 text-xs font-semibold tracking-wide shadow-md mb-8 animate-float">
          <Sparkles className="w-4 h-4 text-amber-300 animate-spin" style={{ animationDuration: '8s' }} />
          <span>{t.hero.badge}</span>
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping"></span>
        </div>

        {/* Main Headings */}
        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold tracking-tight text-white max-w-5xl mx-auto leading-[1.15] font-display">
          {t.hero.title1}{' '}
          <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-amber-300 bg-clip-text text-transparent drop-shadow-sm">
            {t.hero.titleHighlight}
          </span>
        </h1>

        {/* Subtitle */}
        <p className="mt-6 text-base sm:text-lg lg:text-xl text-slate-300 max-w-3xl mx-auto font-normal leading-relaxed">
          {t.hero.description}
        </p>

        {/* Action Buttons */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4 sm:gap-5">
          
          <a
            href="#ai-scanner"
            className="px-6 py-3.5 rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-500 text-slate-950 font-bold text-sm shadow-xl shadow-emerald-500/25 hover:shadow-emerald-500/40 hover:scale-105 active:scale-95 transition-all duration-200 flex items-center gap-2.5"
          >
            <Scan className="w-5 h-5 text-slate-950" />
            <span>{t.hero.ctaScanner}</span>
            <ArrowUpRight className="w-4 h-4 text-slate-950/70" />
          </a>

          <a
            href="#marketplace"
            className="px-6 py-3.5 rounded-2xl glass-panel text-amber-300 font-bold text-sm border border-amber-500/30 hover:bg-amber-950/30 hover:border-amber-400/50 hover:scale-105 active:scale-95 transition-all duration-200 flex items-center gap-2.5 shadow-lg"
          >
            <ShieldCheck className="w-5 h-5 text-amber-400" />
            <span>{t.hero.ctaMarketplace}</span>
            <ArrowUpRight className="w-4 h-4 text-amber-400/70" />
          </a>

          <a
            href="#ussd-simulator"
            className="px-6 py-3.5 rounded-2xl glass-panel text-slate-300 font-semibold text-sm border border-slate-700 hover:border-slate-500 hover:text-white hover:scale-105 active:scale-95 transition-all duration-200 flex items-center gap-2"
          >
            <Phone className="w-4 h-4 text-emerald-400" />
            <span>{t.hero.ctaUssd}</span>
          </a>

        </div>

        {/* Live Metrics Grid */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 max-w-5xl mx-auto">
          
          <div className="glass-panel p-5 rounded-3xl border border-slate-800/80 text-center hover:border-emerald-500/40 transition-colors group">
            <div className="w-10 h-10 mx-auto mb-3 rounded-2xl bg-emerald-950/60 border border-emerald-500/30 flex items-center justify-center text-emerald-400 group-hover:scale-110 transition-transform">
              <Building2 className="w-5 h-5" />
            </div>
            <div className="text-2xl sm:text-3xl font-extrabold text-white font-display">64</div>
            <div className="text-xs text-slate-400 mt-1 font-medium">{t.hero.stats.districts}</div>
          </div>

          <div className="glass-panel p-5 rounded-3xl border border-slate-800/80 text-center hover:border-amber-500/40 transition-colors group">
            <div className="w-10 h-10 mx-auto mb-3 rounded-2xl bg-amber-950/60 border border-amber-500/30 flex items-center justify-center text-amber-400 group-hover:scale-110 transition-transform">
              <Coins className="w-5 h-5" />
            </div>
            <div className="text-2xl sm:text-3xl font-extrabold text-amber-400 font-display">0%</div>
            <div className="text-xs text-slate-400 mt-1 font-medium">{t.hero.stats.dalalFee}</div>
          </div>

          <div className="glass-panel p-5 rounded-3xl border border-slate-800/80 text-center hover:border-teal-500/40 transition-colors group">
            <div className="w-10 h-10 mx-auto mb-3 rounded-2xl bg-teal-950/60 border border-teal-500/30 flex items-center justify-center text-teal-400 group-hover:scale-110 transition-transform">
              <CheckCircle2 className="w-5 h-5" />
            </div>
            <div className="text-2xl sm:text-3xl font-extrabold text-teal-300 font-display">98.6%</div>
            <div className="text-xs text-slate-400 mt-1 font-medium">{t.hero.stats.accuracy}</div>
          </div>

          <div className="glass-panel p-5 rounded-3xl border border-slate-800/80 text-center hover:border-emerald-500/40 transition-colors group">
            <div className="w-10 h-10 mx-auto mb-3 rounded-2xl bg-emerald-950/60 border border-emerald-500/30 flex items-center justify-center text-emerald-400 group-hover:scale-110 transition-transform">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div className="text-2xl sm:text-3xl font-extrabold text-emerald-400 font-display">৳১২.৪ কোটি</div>
            <div className="text-xs text-slate-400 mt-1 font-medium">{t.hero.stats.escrowVolume}</div>
          </div>

        </div>

      </div>

    </section>
  );
};
