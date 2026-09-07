import React, { useState } from 'react';
import { 
  Scan, 
  Sparkles, 
  UploadCloud, 
  Volume2, 
  AlertCircle, 
  Check, 
  Leaf, 
  FlaskConical, 
  ShieldAlert
} from 'lucide-react';
import { translations } from '../data/translations';
import type { Language } from '../data/translations';
import { DISEASE_SAMPLES } from '../data/mockData';
import type { DiseaseSample } from '../data/mockData';

interface AiDiseaseScannerSectionProps {
  lang: Language;
}

export const AiDiseaseScannerSection: React.FC<AiDiseaseScannerSectionProps> = ({ lang }) => {
  const t = translations[lang];
  const [selectedSample, setSelectedSample] = useState<DiseaseSample>(DISEASE_SAMPLES[0]);
  const [isScanning, setIsScanning] = useState<boolean>(false);
  const [activeTab, setActiveTab] = useState<'organic' | 'chemical'>('organic');
  const [customImage, setCustomImage] = useState<string | null>(null);

  const handleSelectSample = (sample: DiseaseSample) => {
    setIsScanning(true);
    setCustomImage(null);
    setTimeout(() => {
      setSelectedSample(sample);
      setIsScanning(false);
    }, 600);
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setCustomImage(event.target?.result as string);
        setIsScanning(true);
        setTimeout(() => {
          setIsScanning(false);
        }, 1200);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSpeak = () => {
    if ('speechSynthesis' in window) {
      const textToSpeak = lang === 'bn'
        ? `${selectedSample.nameBn}। প্রতিকার: ${selectedSample.organicRemedyBn}`
        : `${selectedSample.nameEn}. Remedy: ${selectedSample.organicRemedyEn}`;
      const utterance = new SpeechSynthesisUtterance(textToSpeak);
      utterance.lang = lang === 'bn' ? 'bn-BD' : 'en-US';
      utterance.rate = 0.95;
      window.speechSynthesis.speak(utterance);
    }
  };

  return (
    <section id="ai-scanner" className="py-20 lg:py-28 relative scroll-mt-20">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <Scan className="w-4 h-4" />
            <span>{t.disease.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight font-display">
            {t.disease.title}
          </h2>
          <p className="mt-4 text-slate-300 text-base sm:text-lg">
            {t.disease.subtitle}
          </p>
        </div>

        {/* Preset Sample Selector Ribbon */}
        <div className="mb-10">
          <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3 text-left">
            {t.disease.sampleTitle}
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {DISEASE_SAMPLES.map((sample) => {
              const isSelected = selectedSample.id === sample.id && !customImage;
              return (
                <button
                  key={sample.id}
                  onClick={() => handleSelectSample(sample)}
                  className={`p-4 rounded-2xl text-left transition-all duration-200 flex items-center gap-3 border ${
                    isSelected
                      ? 'bg-emerald-950/70 border-emerald-400/80 shadow-lg shadow-emerald-500/20 scale-[1.02]'
                      : 'glass-panel border-slate-800 hover:border-slate-700 hover:bg-slate-900/60'
                  }`}
                >
                  <span className="text-2xl">{sample.svgIcon}</span>
                  <div className="min-w-0">
                    <div className="text-xs font-bold text-white truncate">
                      {lang === 'bn' ? sample.nameBn : sample.nameEn}
                    </div>
                    <div className="text-[11px] text-slate-400 truncate">
                      {lang === 'bn' ? sample.cropBn : sample.cropEn}
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Interactive Diagnostics Stage */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Visual Scanner Viewport */}
          <div className="lg:col-span-6 glass-panel-glow p-6 rounded-3xl relative overflow-hidden">
            
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
                <span className="text-xs font-bold text-emerald-300 uppercase tracking-wider">
                  {isScanning ? t.disease.analyzing : 'Neural Vision Active'}
                </span>
              </div>
              <label className="cursor-pointer inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-900 border border-slate-700 text-xs text-slate-300 hover:text-white hover:border-emerald-500 transition-colors">
                <UploadCloud className="w-3.5 h-3.5 text-emerald-400" />
                <span>{t.disease.uploadBtn}</span>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleFileUpload}
                  className="hidden"
                />
              </label>
            </div>

            {/* Viewfinder Stage */}
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-slate-950 border border-emerald-500/30 flex items-center justify-center">
              
              {/* Corner Targets */}
              <div className="absolute top-3 left-3 w-6 h-6 border-t-2 border-l-2 border-emerald-400 z-20"></div>
              <div className="absolute top-3 right-3 w-6 h-6 border-t-2 border-r-2 border-emerald-400 z-20"></div>
              <div className="absolute bottom-3 left-3 w-6 h-6 border-b-2 border-l-2 border-emerald-400 z-20"></div>
              <div className="absolute bottom-3 right-3 w-6 h-6 border-b-2 border-r-2 border-emerald-400 z-20"></div>

              {/* Laser Scanning Line */}
              {isScanning && (
                <div className="absolute left-0 right-0 h-1 bg-gradient-to-r from-transparent via-emerald-400 to-transparent shadow-[0_0_15px_#10b981] animate-laser z-30" />
              )}

              {/* Display Image / Render */}
              {customImage ? (
                <img
                  src={customImage}
                  alt="Custom crop leaf"
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center relative bg-gradient-to-b from-slate-950 to-emerald-950/30">
                  <div className="text-7xl mb-4 animate-float">{selectedSample.svgIcon}</div>
                  <div className="text-base font-bold text-white mb-1">
                    {lang === 'bn' ? selectedSample.nameBn : selectedSample.nameEn}
                  </div>
                  <div className="text-xs text-emerald-300/80 italic">
                    {selectedSample.scientificName}
                  </div>

                  {/* Bounding Box on Disease Site */}
                  {!isScanning && (
                    <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-24 border-2 border-dashed border-amber-400 rounded-xl bg-amber-500/10 flex items-start justify-start p-1.5 animate-pulse">
                      <span className="text-[10px] font-bold text-amber-300 bg-amber-950/80 px-1.5 py-0.5 rounded border border-amber-400/40">
                        {selectedSample.confidence}% Match
                      </span>
                    </div>
                  )}
                </div>
              )}

              {/* Bottom Telemetry Overlay */}
              <div className="absolute bottom-3 left-4 right-4 bg-slate-950/80 backdrop-blur-md p-3 rounded-xl border border-slate-800 flex items-center justify-between z-20">
                <div className="flex items-center gap-2">
                  <Leaf className="w-4 h-4 text-emerald-400" />
                  <span className="text-xs font-semibold text-slate-200">
                    {lang === 'bn' ? selectedSample.cropBn : selectedSample.cropEn}
                  </span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="text-xs text-slate-400">{t.disease.confidence}:</span>
                  <span className="text-xs font-extrabold text-emerald-400">
                    {selectedSample.confidence}%
                  </span>
                </div>
              </div>

            </div>

          </div>

          {/* Diagnostic Prescription Card */}
          <div className="lg:col-span-6 glass-panel p-6 sm:p-8 rounded-3xl border border-slate-800 text-left">
            
            <div className="flex items-start justify-between gap-4 mb-6">
              <div>
                <div className="text-xs font-bold text-emerald-400 uppercase tracking-wider mb-1 flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>AI Verified Diagnosis</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-display">
                  {lang === 'bn' ? selectedSample.nameBn : selectedSample.nameEn}
                </h3>
                <div className="text-xs text-slate-400 italic mt-0.5">
                  Taxonomy: {selectedSample.scientificName}
                </div>
              </div>

              {/* Audio Listen CTA */}
              <button
                onClick={handleSpeak}
                className="p-3 rounded-2xl bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/30 text-emerald-300 hover:text-emerald-200 transition-all flex items-center gap-2 text-xs font-semibold shadow-md active:scale-95"
                title={t.disease.audioListen}
              >
                <Volume2 className="w-4 h-4 text-emerald-400 animate-bounce" />
                <span className="hidden sm:inline">{t.disease.audioListen}</span>
              </button>
            </div>

            {/* Symptoms Description */}
            <div className="mb-6 p-4 rounded-2xl bg-slate-900/80 border border-slate-800">
              <div className="text-xs font-bold text-amber-300 flex items-center gap-1.5 mb-1.5">
                <AlertCircle className="w-4 h-4 text-amber-400" />
                <span>{t.disease.symptoms}</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {lang === 'bn' ? selectedSample.symptomsBn : selectedSample.symptomsEn}
              </p>
            </div>

            {/* Treatment Selector Tabs (Organic vs Chemical) */}
            <div className="mb-4 flex rounded-xl bg-slate-900 p-1 border border-slate-800">
              <button
                onClick={() => setActiveTab('organic')}
                className={`flex-1 py-2.5 rounded-lg text-xs font-bold transition-all flex items-center justify-center gap-2 ${
                  activeTab === 'organic'
                    ? 'bg-gradient-to-r from-emerald-600 to-teal-600 text-white shadow-md'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                <Leaf className="w-4 h-4" />
                <span>{t.disease.organicRemedy}</span>
              </button>
              <button
                onClick={() => setActiveTab('chemical')}
                className={`flex-1 py-2.5 rounded-lg text-xs font-bold transition-all flex items-center justify-center gap-2 ${
                  activeTab === 'chemical'
                    ? 'bg-gradient-to-r from-amber-600 to-orange-600 text-white shadow-md'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                <FlaskConical className="w-4 h-4" />
                <span>{t.disease.chemicalTreatment}</span>
              </button>
            </div>

            {/* Tab Content */}
            <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800 min-h-[140px]">
              {activeTab === 'organic' ? (
                <div>
                  <div className="text-xs font-bold text-emerald-400 mb-2 flex items-center gap-1.5">
                    <Check className="w-4 h-4" />
                    <span>পরিবেশবান্ধব ও খরচবিহীন সমাধান</span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                    {lang === 'bn' ? selectedSample.organicRemedyBn : selectedSample.organicRemedyEn}
                  </p>
                </div>
              ) : (
                <div>
                  <div className="text-xs font-bold text-amber-400 mb-2 flex items-center gap-1.5">
                    <ShieldAlert className="w-4 h-4" />
                    <span>অনুমোদিত বালাইনাশকের নিরাপদ প্রয়োগবিধি</span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                    {lang === 'bn' ? selectedSample.chemicalRemedyBn : selectedSample.chemicalRemedyEn}
                  </p>
                </div>
              )}
            </div>

          </div>

        </div>

      </div>

    </section>
  );
};
