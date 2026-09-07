import React from 'react';
import { Sprout, CloudSun, ShieldCheck } from 'lucide-react';
import { translations } from '../data/translations';
import type { Language } from '../data/translations';

interface NavbarProps {
  lang: Language;
  setLang: (lang: Language) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ lang, setLang }) => {
  const t = translations[lang];

  return (
    <header className="sticky top-0 z-50 glass-panel border-b border-emerald-500/20 shadow-2xl backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* Brand Logo & Tagline */}
        <a href="#" className="flex items-center gap-3.5 group">
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-emerald-600 via-teal-500 to-amber-400 p-[2px] shadow-lg shadow-emerald-500/20 group-hover:scale-105 transition-transform duration-300">
            <div className="w-full h-full bg-slate-950 rounded-[14px] flex items-center justify-center">
              <Sprout className="w-6 h-6 text-emerald-400 group-hover:text-amber-300 transition-colors" />
            </div>
          </div>
          <div className="flex flex-col text-left">
            <div className="flex items-center gap-2">
              <span className="text-2xl font-bold tracking-tight bg-gradient-to-r from-emerald-400 via-teal-300 to-amber-300 bg-clip-text text-transparent font-display">
                {t.nav.brand}
              </span>
              <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-300 border border-emerald-500/30">
                2026 Live
              </span>
            </div>
            <span className="text-xs text-slate-400 font-medium tracking-wide">
              {t.nav.tagline}
            </span>
          </div>
        </a>

        {/* Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1.5 bg-slate-900/60 p-1.5 rounded-full border border-slate-800/80 shadow-inner">
          <a
            href="#ai-scanner"
            className="px-4 py-2 rounded-full text-xs font-medium text-slate-300 hover:text-emerald-300 hover:bg-emerald-950/40 transition-all duration-200"
          >
            {t.nav.diseaseScan}
          </a>
          <a
            href="#marketplace"
            className="px-4 py-2 rounded-full text-xs font-medium text-slate-300 hover:text-amber-300 hover:bg-amber-950/40 transition-all duration-200"
          >
            {t.nav.marketplace}
          </a>
          <a
            href="#calculator"
            className="px-4 py-2 rounded-full text-xs font-medium text-slate-300 hover:text-teal-300 hover:bg-teal-950/40 transition-all duration-200"
          >
            {t.nav.calculator}
          </a>
          <a
            href="#disaster-radar"
            className="px-4 py-2 rounded-full text-xs font-medium text-slate-300 hover:text-cyan-300 hover:bg-cyan-950/40 transition-all duration-200"
          >
            {t.nav.disaster}
          </a>
          <a
            href="#ussd-simulator"
            className="px-4 py-2 rounded-full text-xs font-medium text-slate-300 hover:text-emerald-300 hover:bg-emerald-950/40 transition-all duration-200"
          >
            {t.nav.ussd}
          </a>
        </nav>

        {/* Right Actions: Weather, Language Switcher, Portal CTA */}
        <div className="flex items-center gap-3 sm:gap-4">
          
          {/* Live Weather Widget */}
          <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900/80 border border-slate-800 text-xs text-amber-300/90 shadow-sm">
            <CloudSun className="w-4 h-4 text-amber-400 animate-pulse" />
            <span className="font-medium">{t.nav.liveWeather}</span>
          </div>

          {/* Language Toggle */}
          <div className="flex items-center bg-slate-900 p-1 rounded-xl border border-slate-800">
            <button
              onClick={() => setLang('bn')}
              className={`px-3 py-1 text-xs font-bold rounded-lg transition-all ${
                lang === 'bn'
                  ? 'bg-gradient-to-r from-emerald-600 to-teal-600 text-white shadow-md shadow-emerald-700/40'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              বাংলা
            </button>
            <button
              onClick={() => setLang('en')}
              className={`px-3 py-1 text-xs font-bold rounded-lg transition-all ${
                lang === 'en'
                  ? 'bg-gradient-to-r from-emerald-600 to-teal-600 text-white shadow-md shadow-emerald-700/40'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              ENG
            </button>
          </div>

          {/* Launch Portal Button */}
          <a
            href="#marketplace"
            className="relative group overflow-hidden px-4 sm:px-5 py-2.5 rounded-xl bg-gradient-to-r from-emerald-500 via-teal-500 to-emerald-600 text-slate-950 font-bold text-xs tracking-wide shadow-lg shadow-emerald-500/25 hover:shadow-emerald-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 flex items-center gap-2"
          >
            <ShieldCheck className="w-4 h-4 text-slate-950" />
            <span className="relative z-10">{t.nav.launchApp}</span>
            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
          </a>

        </div>

      </div>
    </header>
  );
};
