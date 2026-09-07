export interface DiseaseSample {
  id: string;
  nameBn: string;
  nameEn: string;
  scientificName: string;
  cropBn: string;
  cropEn: string;
  confidence: number;
  severity: 'high' | 'medium' | 'low';
  imagePlaceholderColor: string;
  svgIcon: string;
  symptomsBn: string;
  symptomsEn: string;
  organicRemedyBn: string;
  organicRemedyEn: string;
  chemicalRemedyBn: string;
  chemicalRemedyEn: string;
}

export const DISEASE_SAMPLES: DiseaseSample[] = [
  {
    id: 'rice-blast',
    nameBn: 'ধানের ব্লাস্ট রোগ (পাতার ক্ষত)',
    nameEn: 'Rice Blast Fungus',
    scientificName: 'Magnaporthe oryzae',
    cropBn: 'ধান (ব্রি ধান-২৮/২৯)',
    cropEn: 'Paddy Rice',
    confidence: 97.8,
    severity: 'high',
    imagePlaceholderColor: '#166534',
    svgIcon: '🌾',
    symptomsBn: 'পাতার উপর চোখের আকৃতির বা নৌকা সদৃশ ধূসর কেন্দ্র বিশিষ্ট বাদামী দাগ সৃষ্টি হয়। রোগ বেশি হলে সম্পূর্ণ পাতা ঝলসে যায়।',
    symptomsEn: 'Spindle-shaped or eye-like lesions with gray centers and brown borders on foliage.',
    organicRemedyBn: 'প্রতি লিটার পানিতে ৫ মিলি নিম তেল বা ট্রাইকোডার্মা স্প্রে করুন। জমিতে অতিরিক্ত ইউরিয়া প্রয়োগ বন্ধ রাখুন এবং ছাই ছিটান।',
    organicRemedyEn: 'Apply Neem oil (5ml/L) or Trichoderma solution. Suspend nitrogen/urea application and sprinkle wood ash.',
    chemicalRemedyBn: 'ট্রাইসাইক্লাজল ৭৫ ডব্লিউপি (যেমন: ট্রুপার/দিফা) প্রতি লিটার পানিতে ০.৭৫ গ্রাম অথবা নেটিভো ০.৬ গ্রাম মিশিয়ে বিকালে স্প্রে করুন।',
    chemicalRemedyEn: 'Spray Tricyclazole 75 WP (0.75g/L water) or Nativo 75 WG (0.6g/L water) in late afternoon.'
  },
  {
    id: 'potato-blight',
    nameBn: 'আলুর নাবি ধসা (লেট ব্লাইট)',
    nameEn: 'Potato Late Blight',
    scientificName: 'Phytophthora infestans',
    cropBn: 'আলু (ডায়মন্ড/কার্ডিনাল)',
    cropEn: 'Potato',
    confidence: 96.4,
    severity: 'high',
    imagePlaceholderColor: '#854d0e',
    svgIcon: '🥔',
    symptomsBn: 'পাতার প্রান্তে ভেজা ভেজা কালো দাগ ও পাতার উল্টো পিঠে সাদা তুলার মতো ছত্রাকের স্তর দেখা যায়। কুয়াশাচ্ছন্ন আবহাওয়ায় দ্রুত ছড়ায়।',
    symptomsEn: 'Water-soaked irregular dark lesions at leaf margins with white mildew under moist conditions.',
    organicRemedyBn: 'আক্রান্ত গাছ উঠিয়ে নষ্ট করুন। বোর্দো মিশ্রণ (১% চুন ও তুঁতে) আগাম স্প্রে করুন।',
    organicRemedyEn: 'Rogue out infected haulms. Preventive foliar spray of Bordeaux mixture (1%).',
    chemicalRemedyBn: 'মেনকোজেব + মেটালেক্সিল (যেমন: রিডোমিল গোল্ড) প্রতি লিটার পানিতে ২ গ্রাম হারে ৭ দিন পরপর স্প্রে করুন।',
    chemicalRemedyEn: 'Apply Mancozeb + Metalaxyl (Ridomil Gold) at 2g/L water at 7-day intervals.'
  },
  {
    id: 'shrimp-white-spot',
    nameBn: 'চিংড়ির সাদা দাগ রোগ (হোয়াইট স্পট)',
    nameEn: 'Shrimp White Spot Syndrome',
    scientificName: 'WSSV (Virus)',
    cropBn: 'বাগদা / গলদা চিংড়ি',
    cropEn: 'Tiger Shrimp / Aquaculture',
    confidence: 98.9,
    severity: 'high',
    imagePlaceholderColor: '#0284c7',
    svgIcon: '🦐',
    symptomsBn: 'চিংড়ির খোলসে সুস্পষ্ট সাদা বৃত্তাকার দাগ দেখা যায়, চিংড়ি অলসভাবে ঘেরের কিনারে ভেসে ওঠে এবং ২-৩ দিনে ব্যাপক মড়ক দেখা দেয়।',
    symptomsEn: 'Distinct calcified white spots on the carapace with lethargy and high pond mortality.',
    organicRemedyBn: 'ঘেরের পানির গভীরতা ৪ ফুটের বেশি রাখুন, তাৎক্ষণিক প্রোবায়োটিক প্রয়োগ করে অ্যামোনিয়া নিয়ন্ত্রণ করুন।',
    organicRemedyEn: 'Maintain pond depth >4 feet, apply approved commercial aquatic probiotics to manage ammonia.',
    chemicalRemedyBn: 'ঘেরের পানি দ্রুত শোধন করতে ব্লিচিং পাউডার (৩০ পিপিএম) ব্যবহার করুন এবং অক্সিজেন বৃদ্ধিতে ট্যাবলেট প্রয়োগ করুন।',
    chemicalRemedyEn: 'Treat pond water with certified biosecure water sanitizers and supplement dissolved oxygen tablets.'
  },
  {
    id: 'tomato-leaf-curl',
    nameBn: 'টমেটোর পাতা কোকড়ানো রোগ',
    nameEn: 'Tomato Leaf Curl Virus',
    scientificName: 'ToLCV (Begomovirus)',
    cropBn: 'টমেটো / সবজি',
    cropEn: 'Tomato / Vegetables',
    confidence: 94.2,
    severity: 'medium',
    imagePlaceholderColor: '#991b1b',
    svgIcon: '🍅',
    symptomsBn: 'পাতা কুঁকড়ে চামচের মতো ওপর বা নিচের দিকে বেঁকে যায়, শিরাগুলো হলুদাভ ও গাছ খর্বাকৃতি হয়ে ফলন মারাত্মক ব্যাহত হয়।',
    symptomsEn: 'Curling and puckering of leaves with yellow veining and stunted bush growth.',
    organicRemedyBn: 'সাদা মাছি দমনে হলুদ আঠালো ফাঁদ (Yellow Sticky Trap) ব্যবহার করুন ও তামাক পাতার নির্যাস স্প্রে করুন।',
    organicRemedyEn: 'Install yellow sticky traps to capture whitefly vectors and spray tobacco leaf extract.',
    chemicalRemedyBn: 'সাদা মাছি দমনে ইমিডাক্লোপ্রিড (যেমন: টিডো/এডমায়ার) প্রতি লিটার পানিতে ০.৫ মিলি স্প্রে করুন।',
    chemicalRemedyEn: 'Spray Imidacloprid (Admire/Tido) @ 0.5 ml/L to control vector whiteflies.'
  }
];

export interface DamPriceItem {
  id: string;
  nameBn: string;
  nameEn: string;
  category: 'CROP' | 'FISH' | 'LIVESTOCK' | 'VEG';
  currentPrice: number;
  unitBn: string;
  unitEn: string;
  changePercent: number;
  marketLocation: string;
}

export const DAM_PRICES: DamPriceItem[] = [
  { id: '1', nameBn: 'মিনিকেট চাল (৫০ কেজি বস্তা)', nameEn: 'Miniket Rice (50kg Bag)', category: 'CROP', currentPrice: 3450, unitBn: 'বস্তা', unitEn: 'Bag', changePercent: +2.4, marketLocation: 'বগুড়া মহাস্থান হাট' },
  { id: '2', nameBn: 'নাজিরশাইল ধান', nameEn: 'Nazirshail Paddy', category: 'CROP', currentPrice: 1350, unitBn: 'মণ (৪০ কেজি)', unitEn: 'Maund (40kg)', changePercent: -1.2, marketLocation: 'দিনাজপুর বাজার' },
  { id: '3', nameBn: 'পদ্মার তাজা ইলিশ (১ কেজি+)', nameEn: 'Padma Hilsha (1kg+)', category: 'FISH', currentPrice: 1450, unitBn: 'কেজি', unitEn: 'kg', changePercent: +5.8, marketLocation: 'চাঁদপুর ঘাট' },
  { id: '4', nameBn: 'বাগদা চিংড়ি (গ্রেড-এ)', nameEn: 'Tiger Shrimp (Grade-A)', category: 'FISH', currentPrice: 940, unitBn: 'কেজি', unitEn: 'kg', changePercent: +1.5, marketLocation: 'খুলনা রূপসা ঘাট' },
  { id: '5', nameBn: 'ব্লাক বেঙ্গল খাসি (লাইভ)', nameEn: 'Black Bengal Goat (Live)', category: 'LIVESTOCK', currentPrice: 880, unitBn: 'কেজি (জীবন্ত)', unitEn: 'kg (live)', changePercent: 0.0, marketLocation: 'চুয়াডাঙ্গা হাট' },
  { id: '6', nameBn: 'দেশি গোল আলু (হিমার্গার গেট)', nameEn: 'Diamond Potato', category: 'VEG', currentPrice: 28, unitBn: 'কেজি', unitEn: 'kg', changePercent: -3.5, marketLocation: 'মুন্সীগঞ্জ হিমাগার' },
  { id: '7', nameBn: 'দেশি পেঁয়াজ (মেহেরপুর)', nameEn: 'Local Onion (Meherpur)', category: 'VEG', currentPrice: 62, unitBn: 'কেজি', unitEn: 'kg', changePercent: +4.1, marketLocation: 'কাওরান বাজার, ঢাকা' },
];

export interface CropFertilizerFormula {
  cropId: string;
  nameBn: string;
  nameEn: string;
  perDecimalKg: {
    urea: number;
    tsp: number;
    mop: number;
    gypsum: number;
    zinc: number;
  };
  scheduleBn: string[];
  scheduleEn: string[];
}

export const CROP_FORMULAS: Record<string, CropFertilizerFormula> = {
  rice_boro: {
    cropId: 'rice_boro',
    nameBn: 'বোরো ধান (উচ্চ ফলনশীল ব্রি ধান)',
    nameEn: 'Boro Rice (High-Yielding BRRI)',
    perDecimalKg: { urea: 1.2, tsp: 0.5, mop: 0.7, gypsum: 0.4, zinc: 0.05 },
    scheduleBn: [
      'জমি তৈরির শেষ চাষে: সম্পূর্ণ টিএসপি, জিপসাম, জিংক এবং ১/৩ অংশ ইউরিয়া ও পটাশ প্রয়োগ করুন।',
      'চারা রোপণের ২০-২৫ দিন পর (১ম কিস্তি): ১/৩ অংশ ইউরিয়া ও পটাশ উপরিপ্রয়োগ করুন।',
      'কাইচ থোড় আসার ৫-৭ দিন আগে (২য় কিস্তি): বাকি ১/৩ অংশ ইউরিয়া উপরিপ্রয়োগ করুন।'
    ],
    scheduleEn: [
      'Basal preparation: Apply 100% TSP, Gypsum, Zinc and 33% Urea & MoP during final land ploughing.',
      '20-25 days after transplanting: Top dress 33% Urea and 33% MoP.',
      '5-7 days before panicle initiation: Top dress remaining 33% Urea.'
    ]
  },
  potato: {
    cropId: 'potato',
    nameBn: 'গোল আলু (ডায়মন্ড/গ্র্যানোলা)',
    nameEn: 'Potato (High Yielding)',
    perDecimalKg: { urea: 1.5, tsp: 0.9, mop: 1.3, gypsum: 0.5, zinc: 0.08 },
    scheduleBn: [
      'জমি তৈরির সময়: অর্ধেক ইউরিয়া, সম্পূর্ণ টিএসপি, পটাশ ও জিপসাম মাটিতে মিশিয়ে দিন।',
      'গাছের উচ্চতা ১০-১৫ সেমি হলে (৩০-৩৫ দিন): বাকি অর্ধেক ইউরিয়া দিয়ে গোড়ায় মাটি তুলে দিন।'
    ],
    scheduleEn: [
      'Basal: Mix 50% Urea, 100% TSP, MoP, and Gypsum thoroughly with soil.',
      'Earthing up (30-35 days): Top-dress remaining 50% Urea and ridge soil.'
    ]
  },
  mustard: {
    cropId: 'mustard',
    nameBn: 'সরিষা (বারি সরিষা-১৪/১৭)',
    nameEn: 'Mustard (BARI Sarisha)',
    perDecimalKg: { urea: 1.1, tsp: 0.7, mop: 0.4, gypsum: 0.6, zinc: 0.04 },
    scheduleBn: [
      'জমি তৈরির সময়: অর্ধেক ইউরিয়া এবং সম্পূর্ণ টিএসপি, পটাশ, জিপসাম ও বোরন দিন।',
      'ফুল আসার আগে (রোপণের ২৫-৩০ দিন পর): বাকি অর্ধেক ইউরিয়া সেচ দিয়ে উপরিপ্রয়োগ করুন।'
    ],
    scheduleEn: [
      'Basal: 50% Urea and all TSP, MoP, Gypsum during sowing.',
      'Pre-flowering (25-30 days): Top-dress remaining 50% Urea followed by light irrigation.'
    ]
  }
};
