import React from 'react';
import { Sprout, ShieldCheck, ArrowUp } from 'lucide-react';
import { translations } from '../data/translations';
import type { Language } from '../data/translations';

interface FooterProps {
  lang: Language;
}

export const Footer: React.FC<FooterProps> = ({ lang }) => {
  const t = translations[lang];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 border-t border-slate-800/80 pt-16 pb-12 relative">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-slate-800">
          
          {/* Brand Info */}
          <div className="text-left">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-emerald-600 to-amber-400 p-[2px]">
                <div className="w-full h-full bg-slate-950 rounded-[14px] flex items-center justify-center">
                  <Sprout className="w-5 h-5 text-emerald-400" />
                </div>
              </div>
              <span className="text-2xl font-bold text-white font-display">
                {t.nav.brand}
              </span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed mb-4">
              বাংলাদেশের কৃষক, মৎস্যচাষী ও খামারিদের জন্য নির্মিত মধ্যস্বত্বভোগীহীন সমন্বিত কৃষি ও জীবিকা প্রযুক্তি প্ল্যাটফর্ম।
            </p>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-950/60 border border-emerald-500/30 text-emerald-300 text-xs font-semibold">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>এসক্রো ভেরিফায়েড প্ল্যাটফর্ম</span>
            </div>
          </div>

          {/* Quick Navigation */}
          <div className="text-left">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4">
              প্ল্যাটফর্ম মডিউল
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li><a href="#ai-scanner" className="hover:text-emerald-300 transition-colors">এআই রোগ নির্ণয় ও প্রতিকার</a></li>
              <li><a href="#marketplace" className="hover:text-amber-300 transition-colors">সরাসরি মার্কেটপ্লেস ও এসক্রো</a></li>
              <li><a href="#calculator" className="hover:text-teal-300 transition-colors">সার ও পুষ্টি অপটিমাইজার</a></li>
              <li><a href="#disaster-radar" className="hover:text-cyan-300 transition-colors">হাওর ও উপকূলীয় দুর্যোগ রাডার</a></li>
              <li><a href="#ussd-simulator" className="hover:text-emerald-300 transition-colors">ফিচার ফোন *১৬১২৩# ইউএসএসডি</a></li>
            </ul>
          </div>

          {/* Emergency Helplines */}
          <div className="text-left">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4">
              জরুরি হটলাইন সেবা
            </h4>
            <div className="space-y-2.5">
              <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-xs text-slate-300 flex items-center justify-between">
                <span>কৃষি বাতায়ন</span>
                <strong className="text-emerald-400 font-bold">১৬১২৩</strong>
              </div>
              <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-xs text-slate-300 flex items-center justify-between">
                <span>দুর্যোগ সতর্কবার্তা</span>
                <strong className="text-rose-400 font-bold">১০৯</strong>
              </div>
              <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-xs text-slate-300 flex items-center justify-between">
                <span>জাতীয় হেল্পডেস্ক</span>
                <strong className="text-amber-400 font-bold">৩৩৩</strong>
              </div>
            </div>
          </div>

          {/* Tech Stack Badge */}
          <div className="text-left">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4">
              সিস্টেম স্ট্যাটাস
            </h4>
            <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-2 text-xs">
              <div className="flex items-center justify-between text-slate-300">
                <span>এআই মডেল ভার্সন:</span>
                <span className="font-mono text-emerald-400 font-bold">CNN-v2.4</span>
              </div>
              <div className="flex items-center justify-between text-slate-300">
                <span>মার্কেট ফিড:</span>
                <span className="font-mono text-teal-400 font-bold">DAM API 2026</span>
              </div>
              <div className="flex items-center justify-between text-slate-300">
                <span>এসক্রো ওয়ালেট:</span>
                <span className="font-mono text-amber-400 font-bold">bKash / Nagad</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>{t.footer.copyright}</div>
          <button
            onClick={scrollToTop}
            className="p-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-slate-300 hover:text-white transition-all flex items-center gap-1.5"
          >
            <span>উপরে যান</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>

    </footer>
  );
};
