import React, { useState } from 'react';
import { 
  Calculator, 
  Sparkles, 
  Leaf, 
  Calendar, 
  Check
} from 'lucide-react';
import { translations } from '../data/translations';
import type { Language } from '../data/translations';
import { CROP_FORMULAS } from '../data/mockData';

interface FertilizerCalculatorSectionProps {
  lang: Language;
}

type LandUnit = 'bigha' | 'katha' | 'decimal';

export const FertilizerCalculatorSection: React.FC<FertilizerCalculatorSectionProps> = ({ lang }) => {
  const t = translations[lang];
  const [selectedCrop, setSelectedCrop] = useState<string>('rice_boro');
  const [unit, setUnit] = useState<LandUnit>('bigha');
  const [landArea, setLandArea] = useState<number>(1);

  // Conversion to Decimals (1 Bigha = 33 Decimals, 1 Katha = 1.65 Decimals, 1 Decimal = 1 Decimal)
  const getDecimalArea = (): number => {
    if (unit === 'bigha') return landArea * 33;
    if (unit === 'katha') return landArea * 1.65;
    return landArea;
  };

  const formula = CROP_FORMULAS[selectedCrop] || CROP_FORMULAS.rice_boro;
  const decimals = getDecimalArea();

  const ureaKg = Math.round(formula.perDecimalKg.urea * decimals * 10) / 10;
  const tspKg = Math.round(formula.perDecimalKg.tsp * decimals * 10) / 10;
  const mopKg = Math.round(formula.perDecimalKg.mop * decimals * 10) / 10;
  const gypsumKg = Math.round(formula.perDecimalKg.gypsum * decimals * 10) / 10;
  const zincKg = Math.round(formula.perDecimalKg.zinc * decimals * 100) / 100;

  // Subsidized market rates in Bangladesh (BDT / kg)
  const estimatedCost = Math.round(
    ureaKg * 27 + tspKg * 27 + mopKg * 20 + gypsumKg * 12 + zincKg * 210
  );

  return (
    <section id="calculator" className="py-20 lg:py-28 relative scroll-mt-20">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-500/10 border border-teal-500/30 text-teal-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <Calculator className="w-4 h-4" />
            <span>{t.calc.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight font-display">
            {t.calc.title}
          </h2>
          <p className="mt-4 text-slate-300 text-base sm:text-lg">
            {t.calc.subtitle}
          </p>
        </div>

        {/* Calculator Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Controls Panel */}
          <div className="lg:col-span-5 glass-panel p-6 sm:p-8 rounded-3xl border border-slate-800 text-left">
            
            <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
              <Leaf className="w-5 h-5 text-teal-400" />
              <span>জমির বিবরণ ও ফসল নির্বাচন</span>
            </h3>

            {/* Crop Selector */}
            <div className="mb-6">
              <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                {t.calc.selectCrop}
              </label>
              <div className="grid grid-cols-1 gap-2.5">
                {Object.values(CROP_FORMULAS).map((crop) => (
                  <button
                    key={crop.cropId}
                    onClick={() => setSelectedCrop(crop.cropId)}
                    className={`p-3.5 rounded-xl text-left text-xs font-bold transition-all flex items-center justify-between border ${
                      selectedCrop === crop.cropId
                        ? 'bg-teal-950/70 border-teal-400 text-teal-300 shadow-md'
                        : 'bg-slate-900/80 border-slate-800 text-slate-300 hover:border-slate-700'
                    }`}
                  >
                    <span>{lang === 'bn' ? crop.nameBn : crop.nameEn}</span>
                    {selectedCrop === crop.cropId && <Check className="w-4 h-4 text-teal-400" />}
                  </button>
                ))}
              </div>
            </div>

            {/* Land Unit Selector */}
            <div className="mb-6">
              <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                {t.calc.landUnit}
              </label>
              <div className="grid grid-cols-3 gap-2 bg-slate-900 p-1 rounded-xl border border-slate-800">
                <button
                  onClick={() => setUnit('bigha')}
                  className={`py-2 text-xs font-bold rounded-lg transition-all ${
                    unit === 'bigha'
                      ? 'bg-gradient-to-r from-teal-600 to-emerald-600 text-white shadow'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  বিঘা (Bigha)
                </button>
                <button
                  onClick={() => setUnit('katha')}
                  className={`py-2 text-xs font-bold rounded-lg transition-all ${
                    unit === 'katha'
                      ? 'bg-gradient-to-r from-teal-600 to-emerald-600 text-white shadow'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  কাঠা (Katha)
                </button>
                <button
                  onClick={() => setUnit('decimal')}
                  className={`py-2 text-xs font-bold rounded-lg transition-all ${
                    unit === 'decimal'
                      ? 'bg-gradient-to-r from-teal-600 to-emerald-600 text-white shadow'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  শতক (Decimal)
                </button>
              </div>
            </div>

            {/* Land Area Input */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                  {t.calc.landSize}
                </label>
                <span className="text-xs font-bold text-teal-400">
                  {landArea} {unit === 'bigha' ? 'বিঘা' : unit === 'katha' ? 'কাঠা' : 'শতক'} ({decimals.toFixed(1)} শতক সমতুল্য)
                </span>
              </div>
              <input
                type="range"
                min="0.5"
                max="20"
                step="0.5"
                value={landArea}
                onChange={(e) => setLandArea(parseFloat(e.target.value))}
                className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-teal-400"
              />
              <div className="flex justify-between text-[10px] text-slate-500 mt-1">
                <span>০.৫</span>
                <span>৫</span>
                <span>১০</span>
                <span>১৫</span>
                <span>২০</span>
              </div>
            </div>

          </div>

          {/* Results & Dosage Breakdown */}
          <div className="lg:col-span-7 glass-panel-glow p-6 sm:p-8 rounded-3xl border border-teal-500/30 text-left">
            
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-800">
              <div>
                <div className="text-xs font-bold text-teal-400 uppercase tracking-wider mb-1 flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>BARC অনুমোদিত সার সুপারিশ</span>
                </div>
                <h3 className="text-2xl font-extrabold text-white font-display">
                  {formula.nameBn}
                </h3>
              </div>

              {/* Total Estimated Cost Banner */}
              <div className="p-3.5 rounded-2xl bg-teal-950/80 border border-teal-500/40 text-left sm:text-right">
                <span className="text-[11px] text-teal-300 font-medium">{t.calc.totalCost}</span>
                <div className="text-2xl font-extrabold text-teal-300">
                  ৳{estimatedCost.toLocaleString()}
                </div>
              </div>
            </div>

            {/* Fertilizer Nutrient Cards */}
            <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 gap-3">
              
              <div className="bg-slate-900/90 p-4 rounded-2xl border border-slate-800 hover:border-teal-500/40 transition-colors">
                <div className="text-xs font-semibold text-slate-400">ইউরিয়া (Urea)</div>
                <div className="text-2xl font-extrabold text-white mt-1">
                  {ureaKg} <span className="text-xs text-slate-400">কেজি</span>
                </div>
                <div className="text-[10px] text-teal-400 mt-1 font-medium">নাইট্রোজেন (N) উৎস</div>
              </div>

              <div className="bg-slate-900/90 p-4 rounded-2xl border border-slate-800 hover:border-teal-500/40 transition-colors">
                <div className="text-xs font-semibold text-slate-400">টিএসপি (TSP)</div>
                <div className="text-2xl font-extrabold text-white mt-1">
                  {tspKg} <span className="text-xs text-slate-400">কেজি</span>
                </div>
                <div className="text-[10px] text-teal-400 mt-1 font-medium">ফসফরাস (P) উৎস</div>
              </div>

              <div className="bg-slate-900/90 p-4 rounded-2xl border border-slate-800 hover:border-teal-500/40 transition-colors">
                <div className="text-xs font-semibold text-slate-400">এমওপি / পটাশ (MoP)</div>
                <div className="text-2xl font-extrabold text-white mt-1">
                  {mopKg} <span className="text-xs text-slate-400">কেজি</span>
                </div>
                <div className="text-[10px] text-teal-400 mt-1 font-medium">পটাশিয়াম (K) উৎস</div>
              </div>

              <div className="bg-slate-900/90 p-4 rounded-2xl border border-slate-800 hover:border-teal-500/40 transition-colors">
                <div className="text-xs font-semibold text-slate-400">জিপসাম (Gypsum)</div>
                <div className="text-2xl font-extrabold text-white mt-1">
                  {gypsumKg} <span className="text-xs text-slate-400">কেজি</span>
                </div>
                <div className="text-[10px] text-teal-400 mt-1 font-medium">সালফার (S) উৎস</div>
              </div>

              <div className="bg-slate-900/90 p-4 rounded-2xl border border-slate-800 hover:border-teal-500/40 transition-colors">
                <div className="text-xs font-semibold text-slate-400">দস্তা / জিংক সালফেট</div>
                <div className="text-2xl font-extrabold text-white mt-1">
                  {zincKg} <span className="text-xs text-slate-400">কেজি</span>
                </div>
                <div className="text-[10px] text-teal-400 mt-1 font-medium">জিংক (Zn) উৎস</div>
              </div>

            </div>

            {/* Application Timeline Schedule */}
            <div className="mt-6 p-4 sm:p-5 rounded-2xl bg-slate-950/80 border border-slate-800">
              <div className="text-xs font-bold text-teal-300 flex items-center gap-2 mb-3">
                <Calendar className="w-4 h-4 text-teal-400" />
                <span>{t.calc.schedule}</span>
              </div>
              <ul className="space-y-2">
                {(lang === 'bn' ? formula.scheduleBn : formula.scheduleEn).map((item, idx) => (
                  <li key={idx} className="text-xs text-slate-300 flex items-start gap-2.5">
                    <span className="w-4 h-4 rounded-full bg-teal-500/20 text-teal-300 font-bold flex items-center justify-center shrink-0 text-[10px] mt-0.5">
                      {idx + 1}
                    </span>
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
};
