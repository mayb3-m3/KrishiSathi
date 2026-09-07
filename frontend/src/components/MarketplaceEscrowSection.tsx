import React, { useState } from 'react';
import { 
  ShieldCheck, 
  TrendingUp, 
  ArrowRight, 
  RotateCcw, 
  Lock, 
  Unlock, 
  CheckCircle, 
  Truck, 
  Banknote,
  Sparkles,
  MapPin
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { translations } from '../data/translations';
import type { Language } from '../data/translations';
import { DAM_PRICES } from '../data/mockData';

interface MarketplaceEscrowSectionProps {
  lang: Language;
}

export const MarketplaceEscrowSection: React.FC<MarketplaceEscrowSectionProps> = ({ lang }) => {
  const t = translations[lang];
  const [currentStep, setCurrentStep] = useState<number>(1);

  const handleNextStep = () => {
    if (currentStep < 5) {
      const next = currentStep + 1;
      setCurrentStep(next);
      if (next === 5) {
        // Trigger celebratory confetti
        confetti({
          particleCount: 120,
          spread: 80,
          origin: { y: 0.6 },
          colors: ['#10b981', '#f59e0b', '#06b6d4', '#ffffff']
        });
      }
    }
  };

  const handleReset = () => {
    setCurrentStep(1);
  };

  return (
    <section id="marketplace" className="py-20 lg:py-28 relative scroll-mt-20">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <ShieldCheck className="w-4 h-4" />
            <span>{t.market.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight font-display">
            {t.market.title}
          </h2>
          <p className="mt-4 text-slate-300 text-base sm:text-lg">
            {t.market.subtitle}
          </p>
        </div>

        {/* Live DAM Price Ribbon */}
        <div className="mb-14 glass-panel p-4 rounded-2xl border border-amber-500/20 shadow-xl overflow-hidden">
          <div className="flex items-center justify-between mb-3 px-2">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-xs font-bold text-slate-300 uppercase tracking-wider">
                {t.market.liveDamPrices}
              </span>
            </div>
            <span className="text-[11px] text-amber-400 font-semibold bg-amber-950/60 px-2.5 py-0.5 rounded-full border border-amber-500/30">
              Department of Agricultural Marketing Feed
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-3">
            {DAM_PRICES.map((item) => (
              <div
                key={item.id}
                className="bg-slate-900/80 p-3 rounded-xl border border-slate-800 text-left hover:border-amber-500/40 transition-colors"
              >
                <div className="text-[11px] font-medium text-slate-400 truncate">
                  {lang === 'bn' ? item.nameBn : item.nameEn}
                </div>
                <div className="text-base font-extrabold text-white mt-1">
                  ৳{item.currentPrice.toLocaleString()}
                </div>
                <div className="flex items-center justify-between text-[10px] mt-1 text-slate-400">
                  <span>/{lang === 'bn' ? item.unitBn : item.unitEn}</span>
                  <span className={item.changePercent >= 0 ? 'text-emerald-400 font-bold' : 'text-rose-400 font-bold'}>
                    {item.changePercent >= 0 ? `+${item.changePercent}%` : `${item.changePercent}%`}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Interactive Escrow Lifecycle Visualizer */}
        <div className="glass-panel-amber p-6 sm:p-10 rounded-3xl text-left border border-amber-500/30 relative">
          
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
            <div>
              <div className="text-xs font-bold text-amber-400 uppercase tracking-wider mb-1 flex items-center gap-1.5">
                <Sparkles className="w-4 h-4" />
                <span>{t.market.escrowSimulator}</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-display">
                কৃষক-পাইকার সরাসরি এসক্রো লেনদেন
              </h3>
            </div>

            {/* Stepper Controls */}
            <div className="flex items-center gap-3">
              <button
                onClick={handleReset}
                className="px-4 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 text-xs font-bold border border-slate-700 transition-all flex items-center gap-1.5"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>{t.market.resetBtn}</span>
              </button>
              {currentStep < 5 && (
                <button
                  onClick={handleNextStep}
                  className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 text-slate-950 text-xs font-extrabold shadow-lg shadow-amber-500/25 hover:shadow-amber-500/40 hover:scale-105 active:scale-95 transition-all flex items-center gap-1.5"
                >
                  <span>{t.market.advanceBtn}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              )}
            </div>
          </div>

          {/* Stepper Progress Bar */}
          <div className="grid grid-cols-5 gap-2 sm:gap-4 mb-10">
            {[1, 2, 3, 4, 5].map((stepNum) => {
              const isActive = currentStep === stepNum;
              const isPast = currentStep > stepNum;
              return (
                <div key={stepNum} className="flex flex-col items-center">
                  <div
                    className={`w-10 h-10 rounded-2xl flex items-center justify-center font-extrabold text-sm transition-all duration-300 ${
                      isActive
                        ? 'bg-amber-400 text-slate-950 ring-4 ring-amber-400/20 scale-110 shadow-lg'
                        : isPast
                        ? 'bg-emerald-500 text-slate-950'
                        : 'bg-slate-900 text-slate-500 border border-slate-800'
                    }`}
                  >
                    {isPast ? <CheckCircle className="w-5 h-5" /> : stepNum}
                  </div>
                  <div className="hidden md:block text-[11px] font-semibold mt-2 text-center text-slate-300">
                    {stepNum === 1 && '১. লিস্টিং'}
                    {stepNum === 2 && '২. বিড গ্রহণ'}
                    {stepNum === 3 && '৩. বিকাশ এসক্রো লক'}
                    {stepNum === 4 && '৪. ডেলিভারি যাচাই'}
                    {stepNum === 5 && '৫. টাকা রিলিজ'}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Active Step Showcase Card */}
          <div className="p-6 sm:p-8 rounded-2xl bg-slate-950/80 border border-amber-500/20 min-h-[220px] flex flex-col justify-between">
            
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400">
                  {currentStep === 1 && <Banknote className="w-6 h-6" />}
                  {currentStep === 2 && <TrendingUp className="w-6 h-6" />}
                  {currentStep === 3 && <Lock className="w-6 h-6 text-amber-300" />}
                  {currentStep === 4 && <Truck className="w-6 h-6 text-cyan-400" />}
                  {currentStep === 5 && <Unlock className="w-6 h-6 text-emerald-400" />}
                </div>
                <div>
                  <span className="text-xs font-bold text-amber-400 uppercase tracking-wider">
                    ধাপ {currentStep} / ৫
                  </span>
                  <h4 className="text-xl sm:text-2xl font-bold text-white">
                    {currentStep === 1 && t.market.step1}
                    {currentStep === 2 && t.market.step2}
                    {currentStep === 3 && t.market.step3}
                    {currentStep === 4 && t.market.step4}
                    {currentStep === 5 && t.market.step5}
                  </h4>
                </div>
              </div>

              {/* Step Detail Explanation */}
              <div className="text-sm text-slate-300 leading-relaxed max-w-3xl">
                {currentStep === 1 && (
                  <p>
                    বগুড়ার কৃষক আশিকুর রহমান তার জমির ৫০ মণ মিনিকেট ধানের লিস্টিং প্রকাশ করেছেন। প্রতি মণ ৳১,৩০০ হিসেবে মোট মূল্য ৳৬৫,০০০। সরাসরি অ্যাপে ছবি ও আর্দ্রতা সনদ সংযুক্ত রয়েছে।
                  </p>
                )}
                {currentStep === 2 && (
                  <p>
                    ঢাকার কাওরান বাজারের পাইকারি আড়তদার মেসার্স হক ট্রেডার্স সরাসরি ৳৬৫,০০০ মূল্যে ক্রয় প্রস্তাব (বিড) প্রদান করেছেন। মধ্যবর্তী কোনো দালালের হস্তক্ষেপ ছাড়াই চুক্তি প্রস্তুত।
                  </p>
                )}
                {currentStep === 3 && (
                  <div className="p-4 rounded-xl bg-amber-950/40 border border-amber-500/30 text-amber-200">
                    <div className="font-bold flex items-center gap-2 mb-1">
                      <Lock className="w-4 h-4 text-amber-400" />
                      <span>বিকাশ/নগদ ডিজিটাল এসক্রো ওয়ালেটে ৳৬৫,০০০ লক করা হয়েছে</span>
                    </div>
                    <span className="text-xs text-slate-300">
                      ক্রেতা টাকা প্রদান করেছেন কিন্তু কৃষক পণ্য ডেলিভারি না দেওয়া পর্যন্ত টাকা সুরক্ষিত ভল্টে থাকবে। উভয়ের জন্য শতভাগ ঝুঁকিমুক্ত।
                    </span>
                  </div>
                )}
                {currentStep === 4 && (
                  <p>
                    পণ্যবাহী ট্রাক ঢাকায় পৌঁছাল। ক্রেতা পণ্যের মান ও ওজন যাচাই করে ডিজিটাল ওয়ান-টাইম পাসওয়ার্ড (OTP) সিস্টেমে ডেলিভারি রিসিপ্ট অনুমোদন করলেন।
                  </p>
                )}
                {currentStep === 5 && (
                  <div className="p-5 rounded-2xl bg-emerald-950/50 border border-emerald-500/40 text-emerald-200 animate-pulse">
                    <div className="text-base font-extrabold flex items-center gap-2 mb-1 text-emerald-300">
                      <Sparkles className="w-5 h-5 text-amber-300" />
                      <span>{t.market.releaseSuccess}</span>
                    </div>
                    <p className="text-xs text-slate-200 mt-1">
                      লেনদেন রেফারেন্স: <code className="bg-emerald-900/60 px-2 py-0.5 rounded text-emerald-200">TXN_BKASH_849204</code> • ০% কমিশন কর্তন।
                    </p>
                  </div>
                )}
              </div>
            </div>

            {/* Bottom Meta Pill */}
            <div className="mt-6 pt-4 border-t border-slate-800 flex flex-wrap items-center justify-between text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-amber-400" />
                <span>স্থান: বগুড়া মহাস্থান ➔ কাওরান বাজার, ঢাকা</span>
              </div>
              <div className="font-bold text-white">
                মোট মূল্য: <span className="text-emerald-400">৳৬৫,০০০</span> (দালাল ফি: ৳০)
              </div>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
};
