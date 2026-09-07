import React, { useState } from 'react';
import { Phone, Sparkles, Signal, BatteryCharging, Radio } from 'lucide-react';
import { translations } from '../data/translations';
import type { Language } from '../data/translations';

interface UssdFeaturePhoneSectionProps {
  lang: Language;
}

type ScreenState = 'IDLE' | 'MAIN_MENU' | 'MARKET_MENU' | 'PRICE_RESULT' | 'WEATHER_RESULT' | 'SAAO_RESULT' | 'FERT_RESULT';

export const UssdFeaturePhoneSection: React.FC<UssdFeaturePhoneSectionProps> = ({ lang }) => {
  const t = translations[lang];
  const [dialInput, setDialInput] = useState<string>('*16123#');
  const [screenState, setScreenState] = useState<ScreenState>('IDLE');
  const [userInput, setUserInput] = useState<string>('');
  const [selectedCropPrice, setSelectedCropPrice] = useState<string>('');

  const handleKeyPress = (char: string) => {
    if (screenState === 'IDLE') {
      setDialInput((prev) => prev + char);
    } else {
      setUserInput((prev) => prev + char);
    }
  };

  const handleCall = () => {
    if (dialInput === '*16123#' || dialInput === '*16123' || dialInput === '16123') {
      setScreenState('MAIN_MENU');
      setUserInput('');
    } else {
      alert(lang === 'bn' ? 'দয়া করে *16123# ডায়াল করুন।' : 'Please dial *16123# for Krishi Batayon.');
    }
  };

  const handleEnd = () => {
    setScreenState('IDLE');
    setDialInput('*16123#');
    setUserInput('');
  };

  const handleSendResponse = () => {
    if (screenState === 'MAIN_MENU') {
      if (userInput === '1') {
        setScreenState('MARKET_MENU');
        setUserInput('');
      } else if (userInput === '2') {
        setScreenState('WEATHER_RESULT');
        setUserInput('');
      } else if (userInput === '3') {
        setScreenState('SAAO_RESULT');
        setUserInput('');
      } else if (userInput === '4') {
        setScreenState('FERT_RESULT');
        setUserInput('');
      } else {
        alert(lang === 'bn' ? 'সঠিক অপশন (১-৪) লিখুন।' : 'Enter valid option (1-4).');
      }
    } else if (screenState === 'MARKET_MENU') {
      if (userInput === '1') {
        setSelectedCropPrice('মিনিকেট ধান: ৳১৩৫০/মণ (বগুড়া)');
        setScreenState('PRICE_RESULT');
      } else if (userInput === '2') {
        setSelectedCropPrice('গোল আলু: ৳২৮/কেজি (মুন্সীগঞ্জ)');
        setScreenState('PRICE_RESULT');
      } else if (userInput === '3') {
        setSelectedCropPrice('দেশি পেঁয়াজ: ৳৫৮/কেজি (মেহেরপুর)');
        setScreenState('PRICE_RESULT');
      } else {
        setSelectedCropPrice('বাগদা চিংড়ি: ৳৯২০/কেজি (খুলনা)');
        setScreenState('PRICE_RESULT');
      }
      setUserInput('');
    }
  };

  return (
    <section id="ussd-simulator" className="py-20 lg:py-28 relative scroll-mt-20">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <Radio className="w-4 h-4" />
            <span>{t.ussd.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight font-display">
            {t.ussd.title}
          </h2>
          <p className="mt-4 text-slate-300 text-base sm:text-lg">
            {t.ussd.subtitle}
          </p>
        </div>

        {/* Feature Phone Simulator Wrapper */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-12 max-w-5xl mx-auto">
          
          {/* Feature Phone Hardware Shell */}
          <div className="w-[320px] bg-gradient-to-b from-slate-800 via-slate-900 to-slate-950 p-5 rounded-[48px] border-4 border-slate-700/80 shadow-2xl shadow-emerald-500/10 flex flex-col items-center relative">
            
            {/* Earpiece */}
            <div className="w-16 h-1.5 bg-slate-700 rounded-full mb-4"></div>

            {/* LCD Matrix Screen */}
            <div className="w-full h-56 bg-[#7c9e5e] text-[#1a2e05] p-3 rounded-2xl border-4 border-slate-950 font-mono shadow-inner flex flex-col justify-between overflow-hidden">
              
              {/* Screen Top Status Bar */}
              <div className="flex items-center justify-between text-[11px] font-bold pb-1 border-b border-[#5a7640]">
                <div className="flex items-center gap-1">
                  <Signal className="w-3 h-3" />
                  <span>Grameenphone</span>
                </div>
                <div className="flex items-center gap-1">
                  <span>2G</span>
                  <BatteryCharging className="w-3 h-3" />
                </div>
              </div>

              {/* Screen Interactive Content */}
              <div className="py-2 text-xs leading-tight flex-1 flex flex-col justify-center">
                
                {screenState === 'IDLE' && (
                  <div className="text-center">
                    <div className="text-[10px] text-[#3e5627] mb-1 font-sans">কৃষি বাতায়ন USSD</div>
                    <div className="text-lg font-bold tracking-widest">{dialInput || ' '}</div>
                    <div className="text-[9px] text-[#3e5627] mt-3 animate-pulse">
                      [কল বাটনে চাপ দিন]
                    </div>
                  </div>
                )}

                {screenState === 'MAIN_MENU' && (
                  <div>
                    <div className="font-bold text-[11px] mb-1">KrishiSathi Menu:</div>
                    <div className="text-[10px] space-y-0.5 font-bold">
                      <div>1. আজকের বাজার দর</div>
                      <div>2. আবহাওয়া সতর্কবার্তা</div>
                      <div>3. স্থানীয় কৃষি কর্মকর্তা</div>
                      <div>4. সার প্রয়োগ হিসাব</div>
                    </div>
                    <div className="mt-2 text-[10px] flex items-center gap-1">
                      <span>উত্তর:</span>
                      <span className="font-bold underline">{userInput || '_'}</span>
                    </div>
                  </div>
                )}

                {screenState === 'MARKET_MENU' && (
                  <div>
                    <div className="font-bold text-[11px] mb-1">পণ্য নির্বাচন করুন:</div>
                    <div className="text-[10px] space-y-0.5 font-bold">
                      <div>1. মিনিকেট ধান</div>
                      <div>2. গোল আলু</div>
                      <div>3. দেশি পেঁয়াজ</div>
                      <div>4. বাগদা চিংড়ি</div>
                    </div>
                    <div className="mt-2 text-[10px] flex items-center gap-1">
                      <span>উত্তর:</span>
                      <span className="font-bold underline">{userInput || '_'}</span>
                    </div>
                  </div>
                )}

                {screenState === 'PRICE_RESULT' && (
                  <div className="text-center p-1">
                    <div className="font-bold text-[11px] text-[#1a2e05] mb-1">DAM লাইভ বাজার দর:</div>
                    <div className="text-xs font-extrabold bg-[#6d8d52] p-1.5 rounded text-[#0f1d03]">
                      {selectedCropPrice}
                    </div>
                    <div className="text-[9px] text-[#3e5627] mt-2">[END চেপে বের হন]</div>
                  </div>
                )}

                {screenState === 'WEATHER_RESULT' && (
                  <div className="text-center p-1">
                    <div className="font-bold text-[11px] mb-1">আবহাওয়া সতর্কতা (BMD):</div>
                    <div className="text-[10px] font-bold bg-[#6d8d52] p-1 rounded leading-snug">
                      আগামী ৪৮ ঘণ্টায় হাওরে ভারি বৃষ্টিপাতের সম্ভাবনা। ধান কেটে ফেলুন।
                    </div>
                    <div className="text-[9px] text-[#3e5627] mt-1.5">[END চেপে বের হন]</div>
                  </div>
                )}

                {screenState === 'SAAO_RESULT' && (
                  <div className="text-center p-1">
                    <div className="font-bold text-[11px] mb-1">নিকটস্থ SAAO কর্মকর্তা:</div>
                    <div className="text-[10px] font-bold bg-[#6d8d52] p-1 rounded">
                      মো: রফিকুল ইসলাম (উপ-সহকারী কৃষি কর্মকর্তা)<br />
                      📞 01711-234567
                    </div>
                  </div>
                )}

                {screenState === 'FERT_RESULT' && (
                  <div className="text-center p-1">
                    <div className="font-bold text-[11px] mb-1">সার হিসাব (১ বিঘা বোরো):</div>
                    <div className="text-[10px] font-bold bg-[#6d8d52] p-1 rounded">
                      ইউরিয়া: ৪০ কেজি<br />
                      টিএসপি: ১৬.৫ কেজি<br />
                      পটাশ: ২৩ কেজি
                    </div>
                  </div>
                )}

              </div>

              {/* Screen Bottom Options */}
              <div className="flex justify-between text-[9px] font-bold pt-1 border-t border-[#5a7640]">
                <span>{screenState === 'IDLE' ? 'Menu' : 'SEND'}</span>
                <span>{screenState === 'IDLE' ? 'Contacts' : 'Back'}</span>
              </div>

            </div>

            {/* Keypad */}
            <div className="w-full mt-4 px-2">
              
              {/* Call / End Buttons */}
              <div className="grid grid-cols-2 gap-3 mb-3">
                <button
                  onClick={screenState === 'IDLE' ? handleCall : handleSendResponse}
                  className="py-2.5 rounded-2xl bg-emerald-600 hover:bg-emerald-500 active:scale-95 text-white font-bold text-xs shadow-md transition-all flex items-center justify-center gap-1.5"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>{screenState === 'IDLE' ? 'CALL' : 'SEND'}</span>
                </button>
                <button
                  onClick={handleEnd}
                  className="py-2.5 rounded-2xl bg-rose-600 hover:bg-rose-500 active:scale-95 text-white font-bold text-xs shadow-md transition-all flex items-center justify-center gap-1.5"
                >
                  <Phone className="w-3.5 h-3.5 rotate-[135deg]" />
                  <span>END</span>
                </button>
              </div>

              {/* Numeric Keypad Grid */}
              <div className="grid grid-cols-3 gap-2 text-white">
                {['1', '2', '3', '4', '5', '6', '7', '8', '9', '*', '0', '#'].map((key) => (
                  <button
                    key={key}
                    onClick={() => handleKeyPress(key)}
                    className="h-10 rounded-xl bg-slate-800 hover:bg-slate-700 active:bg-emerald-700 active:scale-90 text-sm font-extrabold border border-slate-700 shadow flex flex-col items-center justify-center transition-all"
                  >
                    <span>{key}</span>
                  </button>
                ))}
              </div>

            </div>

          </div>

          {/* Explanation & Use-Case Card */}
          <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-slate-800 text-left max-w-lg">
            
            <div className="text-xs font-bold text-emerald-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5" />
              <span>অন্তর্ভুক্তিমূলক যোগাযোগ প্রযুক্তি</span>
            </div>
            
            <h3 className="text-2xl font-extrabold text-white mb-4 font-display">
              ইন্টারনেট ছাড়াও কৃষি বাতায়ন ও লাইভ বাজার দর
            </h3>

            <p className="text-sm text-slate-300 leading-relaxed mb-6">
              বাংলাদেশের অধিকাংশ প্রান্তিক কৃষক ও দিনমজুর এখনো ফিচার বা বাটন ফোন ব্যবহার করেন। কৃষিসাথীর ব্যাকএন্ড সম্পূর্ণ রিয়েল-টাইম ইউএসএসডি (USSD) এবং এসএমএস গেটওয়ের সাথে সংযুক্ত।
            </p>

            <div className="space-y-3">
              <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 flex items-start gap-3">
                <span className="w-6 h-6 rounded-lg bg-emerald-500/20 text-emerald-300 font-bold flex items-center justify-center text-xs shrink-0 mt-0.5">১</span>
                <span className="text-xs text-slate-300">
                  যে কোনো ফোন থেকে <strong>*১৬১২৩#</strong> ডায়াল করলেই সরাসরি আজকের বাজার দর ও আবহাওয়া সতর্কবার্তা দৃশ্যমান হয়।
                </span>
              </div>
              <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 flex items-start gap-3">
                <span className="w-6 h-6 rounded-lg bg-emerald-500/20 text-emerald-300 font-bold flex items-center justify-center text-xs shrink-0 mt-0.5">২</span>
                <span className="text-xs text-slate-300">
                  জরুরি ঘূর্ণিঝড় বা আকস্মিক বন্যার আগাম বার্তা সরাসরি বাংলায় সাধারণ এসএমএস হিসেবে সকল নিবন্ধিত খামারির কাছে স্বয়ংক্রিয়ভাবে পৌঁছে যায়।
                </span>
              </div>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
};
