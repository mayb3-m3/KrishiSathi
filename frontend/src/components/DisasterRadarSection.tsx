import React, { useState } from 'react';
import { 
  CloudLightning, 
  Waves, 
  AlertTriangle, 
  ShieldAlert, 
  MapPin, 
  PhoneCall, 
  Building
} from 'lucide-react';
import { translations } from '../data/translations';
import type { Language } from '../data/translations';

interface DisasterRadarSectionProps {
  lang: Language;
}

interface AlertZone {
  id: string;
  districtBn: string;
  districtEn: string;
  typeBn: string;
  typeEn: string;
  riskLevel: 'critical' | 'high' | 'moderate';
  warningLevelBn: string;
  warningLevelEn: string;
  advisoryBn: string;
  advisoryEn: string;
  riverOrCoast: string;
  shelters: {
    nameBn: string;
    nameEn: string;
    distanceKm: number;
    capacity: number;
    phone: string;
  }[];
}

const ZONES: AlertZone[] = [
  {
    id: 'sunamganj',
    districtBn: 'সুনামগঞ্জ (হাওর বেসিন)',
    districtEn: 'Sunamganj (Haor Basin)',
    typeBn: 'আকস্মিক পাহাড়ি ঢল ও বন্যা',
    typeEn: 'Haor Flash Flood Alert',
    riskLevel: 'critical',
    warningLevelBn: 'বিপৎসীমার ৩৫ সেমি ওপরে (সুরমা ও যাদুকাটা নদী)',
    warningLevelEn: '35 cm above danger level (Surma & Jadukata River)',
    advisoryBn: 'হাওরের ৮০% পাকা বোরো ধান অবিলম্বে সম্মিলিত হার্ভেস্টার দিয়ে কেটে উঁচু জায়গায় স্থানান্তর করুন। পুকুরের পাড় জাল দিয়ে ঘিরে দিন।',
    advisoryEn: 'Harvest 80% matured Boro paddy immediately using combine harvesters. Net pond dykes.',
    riverOrCoast: 'সুরমা নদী রিডিং স্টেশন #৪',
    shelters: [
      { nameBn: 'তাহিরপুর মডেল উচ্চ বিদ্যালয় আশ্রয়কেন্দ্র', nameEn: 'Tahirpur Model High School Shelter', distanceKm: 1.8, capacity: 650, phone: '01712-345678' },
      { nameBn: 'ধর্মপাশা সাইক্লোন কাম ফ্লাড শেল্টার', nameEn: 'Dharmapasha Flood Center', distanceKm: 3.2, capacity: 800, phone: '01711-987654' }
    ]
  },
  {
    id: 'coxsbazar',
    districtBn: 'কক্সবাজার ও মহেশখালী (উপকূলীয় ইউনিয়ন)',
    districtEn: 'Cox\'s Bazar (Coastal Union)',
    typeBn: 'বঙ্গোপসাগরে গভীর নিম্নচাপ ও ঘূর্ণিঝড়',
    typeEn: 'Deep Depression & Cyclone Alert',
    riskLevel: 'high',
    warningLevelBn: '৪ নম্বর স্থানীয় হুঁশিয়ারি সংকেত (বাতাসের গতিবেগ ৬৫ কিমি/ঘণ্টা)',
    warningLevelEn: 'Local Warning Signal No. 4 (Wind speed 65 km/h)',
    advisoryBn: 'মাছ ধরার ট্রলারসমূহকে অবিলম্বে উপকূলে নোঙর করতে বলা হয়েছে। লবণ চাষের মাঠ ও পানের বরজ পলিথিন দিয়ে সুরক্ষিত করুন।',
    advisoryEn: 'Fishing boats advised to moor near coast. Protect salt pans and betel vine yards.',
    riverOrCoast: 'কুতুবদিয়া উপকূলীয় রাডার',
    shelters: [
      { nameBn: 'মহেশখালী সরকারি প্রাথমিক বিদ্যালয় আশ্রয়কেন্দ্র', nameEn: 'Moheshkhali Primary School Shelter', distanceKm: 0.9, capacity: 1200, phone: '01819-223344' },
      { nameBn: 'পেকুয়া বহুমুখী সাইক্লোন সেন্টার', nameEn: 'Pekua Cyclone Center', distanceKm: 2.4, capacity: 950, phone: '01815-667788' }
    ]
  },
  {
    id: 'satkhira',
    districtBn: 'সাতক্ষীরা ও শ্যামনগর (লবণাক্ত বেল্ট)',
    districtEn: 'Satkhira (Coastal Salinity Surge)',
    typeBn: 'জোয়ারের পানিতে উচ্চ লবণাক্ততা অনুপ্রবেশ',
    typeEn: 'Salinity Intrusion Warning',
    riskLevel: 'moderate',
    warningLevelBn: 'লবণাক্ততা মাত্রা ১২.৪ ppt (স্বাভাবিকের চেয়ে দ্বিগুণ)',
    warningLevelEn: 'Salinity level 12.4 ppt (2x above normal threshold)',
    advisoryBn: 'বাগদা ঘেরের পানি পরিবর্তন সাময়িক স্থগিত রাখুন। ফসলি জমিতে লবণাক্ততাসহিষ্ণু ব্রি ধান-৬৭ বা ব্রি ধান-৯৯ চাষের পরামর্শ।',
    advisoryEn: 'Suspend freshwater intake for shrimp ghers. Plant salinity-tolerant BRRI dhan67/99.',
    riverOrCoast: 'কপোতাক্ষ নদ মোহনা',
    shelters: [
      { nameBn: 'শ্যামনগর মুজিব কেল্লা ও আশ্রয়কেন্দ্র', nameEn: 'Shyamnagar Mujib Killa & Shelter', distanceKm: 1.5, capacity: 500, phone: '01912-778899' }
    ]
  }
];

export const DisasterRadarSection: React.FC<DisasterRadarSectionProps> = ({ lang }) => {
  const t = translations[lang];
  const [selectedZone, setSelectedZone] = useState<AlertZone>(ZONES[0]);

  return (
    <section id="disaster-radar" className="py-20 lg:py-28 relative scroll-mt-20">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <CloudLightning className="w-4 h-4" />
            <span>{t.disaster.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight font-display">
            {t.disaster.title}
          </h2>
          <p className="mt-4 text-slate-300 text-base sm:text-lg">
            {t.disaster.subtitle}
          </p>
        </div>

        {/* Zone Selector Chips */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          {ZONES.map((zone) => {
            const isSelected = selectedZone.id === zone.id;
            return (
              <button
                key={zone.id}
                onClick={() => setSelectedZone(zone)}
                className={`p-5 rounded-2xl text-left transition-all duration-200 border ${
                  isSelected
                    ? 'bg-cyan-950/70 border-cyan-400/80 shadow-lg shadow-cyan-500/20 scale-[1.02]'
                    : 'glass-panel border-slate-800 hover:border-slate-700'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-bold text-cyan-400 uppercase tracking-wider flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>{lang === 'bn' ? zone.districtBn : zone.districtEn}</span>
                  </span>
                  <span className={`text-[10px] uppercase font-bold px-2 py-0.5 rounded-full border ${
                    zone.riskLevel === 'critical'
                      ? 'bg-rose-500/20 text-rose-300 border-rose-500/40 animate-pulse'
                      : zone.riskLevel === 'high'
                      ? 'bg-amber-500/20 text-amber-300 border-amber-500/40'
                      : 'bg-teal-500/20 text-teal-300 border-teal-500/40'
                  }`}>
                    {zone.riskLevel}
                  </span>
                </div>
                <div className="text-sm font-bold text-white">
                  {lang === 'bn' ? zone.typeBn : zone.typeEn}
                </div>
              </button>
            );
          })}
        </div>

        {/* Detailed Telemetry & Emergency Map View */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Real-time Alert Gauge */}
          <div className="lg:col-span-6 glass-panel-glow p-6 sm:p-8 rounded-3xl border border-cyan-500/30 text-left">
            
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-bold text-cyan-400 uppercase tracking-wider flex items-center gap-1.5">
                <Waves className="w-4 h-4" />
                <span>BWDB হাইড্রোলজিক্যাল টেলিমেট্রি</span>
              </span>
              <span className="text-[11px] text-slate-400 font-mono">
                {selectedZone.riverOrCoast}
              </span>
            </div>

            <h3 className="text-2xl font-extrabold text-white mb-2 font-display">
              {lang === 'bn' ? selectedZone.typeBn : selectedZone.typeEn}
            </h3>

            {/* Warning Level Alert Box */}
            <div className="p-4 rounded-2xl bg-rose-950/40 border border-rose-500/40 text-rose-200 mb-6">
              <div className="text-xs font-bold uppercase tracking-wider flex items-center gap-2 mb-1 text-rose-400">
                <AlertTriangle className="w-4 h-4 animate-bounce" />
                <span>বর্তমান পরিস্থিতি ও সতর্কবার্তা</span>
              </div>
              <div className="text-sm font-semibold">
                {lang === 'bn' ? selectedZone.warningLevelBn : selectedZone.warningLevelEn}
              </div>
            </div>

            {/* Farmer Actionable Advisory */}
            <div className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800">
              <div className="text-xs font-bold text-cyan-300 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                <ShieldAlert className="w-4 h-4 text-cyan-400" />
                <span>কৃষক ও খামারিদের জন্য তাৎক্ষণিক করণীয়</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                {lang === 'bn' ? selectedZone.advisoryBn : selectedZone.advisoryEn}
              </p>
            </div>

          </div>

          {/* Shelters & Emergency Contacts */}
          <div className="lg:col-span-6 glass-panel p-6 sm:p-8 rounded-3xl border border-slate-800 text-left">
            
            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              <Building className="w-5 h-5 text-cyan-400" />
              <span>{t.disaster.shelterTitle}</span>
            </h3>

            <div className="space-y-3 mb-6">
              {selectedZone.shelters.map((shelter, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-3 hover:border-cyan-500/40 transition-colors"
                >
                  <div>
                    <div className="text-sm font-bold text-white">
                      {lang === 'bn' ? shelter.nameBn : shelter.nameEn}
                    </div>
                    <div className="text-xs text-slate-400 mt-1 flex items-center gap-3">
                      <span>দূরত্ব: <strong className="text-cyan-400">{shelter.distanceKm} কিমি</strong></span>
                      <span>ধারণক্ষমতা: <strong className="text-slate-200">{shelter.capacity} জন</strong></span>
                    </div>
                  </div>

                  <a
                    href={`tel:${shelter.phone}`}
                    className="px-3.5 py-2 rounded-xl bg-cyan-500/10 hover:bg-cyan-500/20 border border-cyan-500/30 text-cyan-300 text-xs font-bold flex items-center gap-1.5 shrink-0 self-start sm:self-center transition-colors"
                  >
                    <PhoneCall className="w-3.5 h-3.5" />
                    <span>{shelter.phone}</span>
                  </a>
                </div>
              ))}
            </div>

            {/* National Emergency Hotline Badges */}
            <div className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800">
              <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                জরুরি সরকারি হটলাইন সংযোগ
              </div>
              <div className="flex flex-wrap gap-2">
                <a
                  href="tel:109"
                  className="px-3 py-1.5 rounded-lg bg-rose-500/10 border border-rose-500/30 text-rose-300 text-xs font-bold flex items-center gap-1.5"
                >
                  <PhoneCall className="w-3.5 h-3.5" />
                  <span>১০৯ (দুর্যোগ তথ্য)</span>
                </a>
                <a
                  href="tel:16123"
                  className="px-3 py-1.5 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs font-bold flex items-center gap-1.5"
                >
                  <PhoneCall className="w-3.5 h-3.5" />
                  <span>১৬১২৩ (কৃষি বাতায়ন)</span>
                </a>
                <a
                  href="tel:999"
                  className="px-3 py-1.5 rounded-lg bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-bold flex items-center gap-1.5"
                >
                  <PhoneCall className="w-3.5 h-3.5" />
                  <span>৯৯৯ (জাতীয় জরুরি সেবা)</span>
                </a>
              </div>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
};
