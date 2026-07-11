export interface BilingualText {
  hi: string;
  en: string;
}

export interface Principle {
  title: BilingualText;
  body: BilingualText;
}

export const missionTagline: BilingualText = {
  hi: "प्रकृति के साथ संरेखण। ज्ञान से मार्गदर्शन।",
  en: "Aligned with Nature. Guided by Knowledge.",
};

export const missionStatement: BilingualText = {
  hi: "हमारा मुख्य उद्देश्य प्राचीन वैदिक ऋषि परंपरा के शाश्वत सिद्धांतों के माध्यम से मानव जीवन को प्रकृति के साथ पूर्ण रूप से संरेखित (Align) करना है। हम किसी भी प्रकार की कृत्रिम थेरेपी, महंगे उपचार, रत्न (Gemstones), अनावश्यक वित्तीय खर्चों और रूढ़िवादी अंधविश्वासों या टोने-टोटकों से मुक्त, एक शुद्ध और तार्किक वैज्ञानिक पद्धति का समर्थन करते हैं।",
  en: "Our core mission is to fully align human life with nature through the eternal principles of the ancient Vedic Rishi tradition. We advocate a pure, logical, and scientific approach — free from artificial therapies, expensive remedies, gemstones, unnecessary financial expense, and orthodox superstitions or occult rituals.",
};

export const corePrinciples: Principle[] = [
  {
    title: { hi: "प्राकृतिक संरेखण", en: "Natural Alignment" },
    body: {
      hi: "जीवन को पांच तत्वों (क्षिति, जल, पावक, गगन, समीरा) और सौर व चंद्र चक्रों के अनुसार ढालना, जिससे मानसिक और शारीरिक स्वास्थ्य स्वतः ठीक रहे।",
      en: "Shaping life according to the five elements (earth, water, fire, sky, air) and solar/lunar cycles, so mental and physical health stay naturally balanced.",
    },
  },
  {
    title: { hi: "ऋषि परंपरा पर आधारित विज्ञान", en: "Science Rooted in Rishi Tradition" },
    body: {
      hi: "प्राचीन ऋषियों द्वारा प्रतिपादित जीवन शैली, जैसे दिनचर्या, ऋतुचर्या, और सही दिशात्मक ऊर्जा (Vastu & Numerical Vibrations) का तार्किक उपयोग, जो पूर्णतः वैज्ञानिक और व्यावहारिक है।",
      en: "The logical application of lifestyle principles laid down by ancient sages — daily routine (Dinacharya), seasonal routine (Ritucharya), and correct directional energy (Vastu & Numerical Vibrations) — entirely scientific and practical.",
    },
  },
  {
    title: { hi: "शून्य बाह्य निर्भरता", en: "Zero Artificial Dependency" },
    body: {
      hi: "हम किसी भी प्रकार के महंगे रत्नों, रासायनिक उपचारों या बाहरी कृत्रिम साधनों की आवश्यकता के बिना, स्वयं के प्रयासों और आंतरिक सुधार से जीवन बदलने पर विश्वास करते हैं।",
      en: "We believe in transforming life through one's own effort and inner correction — without needing expensive gemstones, chemical treatments, or external artificial aids.",
    },
  },
  {
    title: { hi: "तर्कसंगत एवं अंधविश्वास मुक्त", en: "Rational & Superstition-Free" },
    body: {
      hi: "किसी भी प्रकार के भय, अंधविश्वास, या बिना सिर-पैर के टोने-टोटकों का पूर्ण निषेध। हमारा हर परामर्श ज्ञान, विवेक और प्राकृतिक नियमों पर आधारित है।",
      en: "A complete rejection of fear, superstition, or baseless occult rituals. Every consultation we give is grounded in knowledge, reason, and natural law.",
    },
  },
  {
    title: { hi: "आर्थिक सुगमता", en: "Economic Accessibility" },
    body: {
      hi: "बिना किसी फिजूलखर्ची के, न्यूनतम और प्राकृतिक बदलावों के जरिए जीवन को समृद्ध और संतुलित बनाना।",
      en: "Making life prosperous and balanced through minimal, natural changes — without any wasteful expense.",
    },
  },
];

export const missionConclusion: BilingualText = {
  hi: "हमारा मानना है कि हर व्यक्ति के भीतर खुद को संतुलित करने की अपार क्षमता होती है। बस आवश्यकता है तो प्रकृति के बनाए नियमों और ऋषि-मुनियों के वास्तविक ज्ञान को बिना किसी मिलावट के अपने जीवन में उतारने की।",
  en: "We believe every individual holds an immense capacity to bring themselves into balance. All that's needed is to bring nature's laws and the genuine knowledge of the sages into one's life, without any dilution.",
};
