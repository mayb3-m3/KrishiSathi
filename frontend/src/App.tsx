import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AiDiseaseScannerSection } from './components/AiDiseaseScannerSection';
import { MarketplaceEscrowSection } from './components/MarketplaceEscrowSection';
import { FertilizerCalculatorSection } from './components/FertilizerCalculatorSection';
import { DisasterRadarSection } from './components/DisasterRadarSection';
import { UssdFeaturePhoneSection } from './components/UssdFeaturePhoneSection';
import { Footer } from './components/Footer';
import type { Language } from './data/translations';

export const App: React.FC = () => {
  const [lang, setLang] = useState<Language>('bn');

  return (
    <div className="min-h-screen bg-[#070d0f] text-slate-100 flex flex-col font-sans selection:bg-emerald-500/30 selection:text-emerald-200">
      
      {/* Background Decorative Ambient Blobs */}
      <div className="fixed inset-0 bg-grid-pattern pointer-events-none opacity-40 z-0"></div>
      
      {/* Top Navbar */}
      <Navbar lang={lang} setLang={setLang} />

      {/* Main Content Area */}
      <main className="flex-1 relative z-10">
        <HeroSection lang={lang} />
        <AiDiseaseScannerSection lang={lang} />
        <MarketplaceEscrowSection lang={lang} />
        <FertilizerCalculatorSection lang={lang} />
        <DisasterRadarSection lang={lang} />
        <UssdFeaturePhoneSection lang={lang} />
      </main>

      {/* Footer */}
      <Footer lang={lang} />

    </div>
  );
};

export default App;
