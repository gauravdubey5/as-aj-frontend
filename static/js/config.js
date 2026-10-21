/**
 * Astro Ashish Ji - Site Configuration
 * Easily update contact details, payment links, and API placeholders here.
 */

const SITE_CONFIG = {
    nameHindi: "एस्ट्रो आशीष जी",
    nameEnglish: "Astro Ashish Ji",
    titleHindi: "वैदिक ज्योतिषी एवं वास्तु शास्त्री",
    titleEnglish: "Vedic Astrologer & Vastu Shastri",
    
    // Contact Info (Replace placeholders with verified details)
    phone: "918840425538",
    displayPhone: "+91 884 042 5538",
    whatsappNumber: "918840425538", // Without '+' for wa.me links
    email: "[ADD VERIFIED EMAIL]",
    address: "[Add Verified Address / Location Here]",

    // External Booking / Meeting Links
    googleCalendarUrl: "",
    zoomUrl: "",

    // Payment Integration Config (Set enabled to true when URLs are available)
    payment: {
        upiId: "panditashish@upi",
        razorpay: {
            enabled: false,
            checkoutUrl: ""
        },
        stripe: {
            enabled: false,
            checkoutUrl: ""
        },
        paypal: {
            enabled: false,
            checkoutUrl: ""
        }
    },

    // Social Media Links
    social: {
        youtube: "#",
        facebook: "#",
        instagram: "#",
        whatsappGroup: "#"
    }
};

/**
 * Demo Panchang Data (Structure ready for future Astronomical API integration)
 */
const panchangData = {
    tithi: {
        hi: "शुक्ल पक्ष एकादशी (हरि शयनी एकादशी)",
        en: "Shukla Paksha Ekadashi"
    },
    nakshatra: {
        hi: "अनुराधा नक्षत्र (रात्रि 11:45 तक)",
        en: "Anuradha Nakshatra (Till 11:45 PM)"
    },
    yoga: {
        hi: "सिद्ध योग",
        en: "Siddha Yoga"
    },
    karan: {
        hi: "बव करण",
        en: "Bava Karan"
    },
    rahuKaal: {
        hi: "दोपहर 01:30 PM - 03:00 PM",
        en: "01:30 PM - 03:00 PM"
    },
    shubhMuhurat: {
        hi: "अभिजित मुहूर्त: 11:54 AM - 12:48 PM",
        en: "Abhijit Muhurat: 11:54 AM - 12:48 PM"
    },
    sunMoon: {
        sunrise: "06:12 AM",
        sunset: "06:45 PM",
        moonrise: "03:15 PM"
    }
};

/**
 * 12 Rashi (Zodiac) Horoscope Static Demo Data
 */
const horoscopesData = {
    aries: {
        id: "aries",
        symbol: "♈",
        hiName: "मेष",
        enName: "Aries",
        shortHi: "आज कार्यक्षेत्र में नए अवसर प्राप्त होंगे। मानसिक शांति बनाए रखें।",
        shortEn: "New career opportunities ahead. Maintain peace of mind today.",
        fullHi: "आज का दिन मेष राशि के जातकों के लिए अत्यंत फलदायी रहेगा। सूर्य देव की कृपा से पद-प्रतिष्ठा में वृद्धि होगी। व्यापार में निवेश का उत्तम समय है। परिवार में मांगलिक कार्य की रूपरेखा बनेगी। स्वास्थ्य सामान्य रहेगा, लेकिन खान-पान पर संयम रखें।",
        fullEn: "A promising day for Aries. Solar alignments bring growth in reputation and career. Favorable time for business ventures. Family happiness and spiritual harmony expected. Keep check on diet for good health."
    },
    taurus: {
        id: "taurus",
        symbol: "♉",
        hiName: "वृषभ",
        enName: "Taurus",
        shortHi: "धन लाभ के योग बन रहे हैं। पारिवारिक जीवन में मधुरता बनी रहेगी।",
        shortEn: "Financial gains expected. Harmony and happiness in family life.",
        fullHi: "वृषभ राशि के जातकों को धन लाभ के शुभ संकेत मिल रहे हैं। पुराने रुके हुए कार्य पंडित जी के मार्गदर्शन से सिद्ध होंगे। भूमि व वाहन संबंधी योग अनुकूल हैं। वाणी में मधुरता बनाए रखें ताकि रिश्तों में प्रगाढ़ता आए।",
        fullEn: "Financial prospects look bright for Taurus. Pending tasks will see resolution. Favorable conditions for real estate or major purchases. Use polite speech to strengthen personal bonds."
    },
    gemini: {
        id: "gemini",
        symbol: "♊",
        hiName: "मिथुन",
        enName: "Gemini",
        shortHi: "बुद्धि और विवेक से सफलता मिलेगी। यात्रा के योग बन रहे हैं।",
        shortEn: "Intellect brings success. Short spiritual travel is indicated.",
        fullHi: "मिथुन राशि वालों के लिए आज का दिन रचनात्मक रहेगा। विद्यार्थियों के लिए प्रतियोगिता परीक्षाओं में सफलता के योग हैं। व्यावसायिक यात्रा लाभदायक सिद्ध होगी। इष्ट देव का ध्यान करें एवं हनुमान चालीसा का पाठ करें।",
        fullEn: "A creative and insightful day for Gemini. Students will excel in academic pursuits. Business travel will yield long-term gains. Offer prayers to your Ishta Devta for obstacle removal."
    },
    cancer: {
        id: "cancer",
        symbol: "♋",
        hiName: "कर्क",
        enName: "Cancer",
        shortHi: "चंद्रमा का शुभ प्रभाव रहेगा। आध्यात्मिक कार्यों में रुचि बढ़ेगी।",
        shortEn: "Auspicious lunar influence. Deep interest in spiritual practices.",
        fullHi: "कर्क राशि के स्वामी चंद्रमा आपके मन में सकारात्मक ऊर्जा का संचार करेंगे। धार्मिक कार्यों व अनुष्ठानों में सहभागिता बढ़ेगी। माता-पिता के स्वास्थ्य में सुधार होगा। किसी विद्वान ज्योतिषी से परामर्श लेना हितकर रहेगा।",
        fullEn: "Moon brings peace and clarity to Cancerians. Increased inclination towards prayers and rituals. Health of elders improves. Seeking astrological guidance will resolve doubts."
    },
    leo: {
        id: "leo",
        symbol: "♌",
        hiName: "सिंह",
        enName: "Leo",
        shortHi: "आत्मविश्वास में वृद्धि होगी। प्रशासनिक कार्यों में सफलता मिलेगी।",
        shortEn: "High confidence and leadership. Success in official matters.",
        fullHi: "सिंह राशि के स्वामी सूर्य का प्रभाव आपको ऊर्जावान बनाए रखेगा। कार्यस्थल पर आपके निर्णयों की सराहना होगी। नया व्यापार शुरू करने का विचार सफल हो सकता है। शिवलिंग पर जल चढ़ाएं और आदित्य हृदय स्तोत्र का पाठ करें।",
        fullEn: "Solar brilliance bolsters confidence for Leos. Respected for wise decisions at work. Ideal day for strategic planning. Offer water to Lord Shiva for continued prosperity."
    },
    virgo: {
        id: "virgo",
        symbol: "♍",
        hiName: "कन्या",
        enName: "Virgo",
        shortHi: "व्यापार में नया अनुबंध संभव है। स्वास्थ्य का ध्यान रखें।",
        shortEn: "New business contracts expected. Pay attention to health.",
        fullHi: "कन्या राशि के जातकों को व्यावसायिक मोर्चे पर बड़ी सफलता मिल सकती है। आय के नए स्रोत बनेंगे। हालांकि, अत्यधिक कार्यभार के कारण थकान हो सकती है। शाम को परिवार के साथ समय व्यतीत करें।",
        fullEn: "Business developments and new sources of income for Virgo. Excellent analytical skills will aid decision-making. Balance work commitments with proper rest."
    },
    libra: {
        id: "libra",
        symbol: "♎",
        hiName: "तुला",
        enName: "Libra",
        shortHi: "जीवनसाथी का सहयोग मिलेगा। कला और संगीत में रुचि रहेगी।",
        shortEn: "Strong support from spouse. Inclination towards arts & harmony.",
        fullHi: "तुला राशि वालों के लिए आज संतुलन और शांति का दिन है। दांपत्य जीवन में प्रेम और सामंजस्य बढ़ेगा। नए वस्त्र या आभूषण की खरीदारी के योग हैं। मां लक्ष्मी का पूजन आपके लिए अत्यंत शुभ रहेगा।",
        fullEn: "Harmonious day for Libras. Marital bonds deepen with understanding. Good day for creative endeavors and aesthetic choices. Praying to Goddess Lakshmi brings prosperity."
    },
    scorpio: {
        id: "scorpio",
        symbol: "♏",
        hiName: "वृश्चिक",
        enName: "Scorpio",
        shortHi: "गुप्त शत्रुओं से सावधान रहें। गूढ़ विद्याओं की ओर झुकाव।",
        shortEn: "Stay vigilant against rivals. Interest in occult & deeper wisdom.",
        fullHi: "वृश्चिक राशि के जातकों को अपनी योजनाओं को गुप्त रखना चाहिए। तंत्र-मंत्र और वैदिक ज्योतिष के प्रति जिज्ञासा बढ़ेगी। शेयर बाजार या जुए से दूर रहें। हनुमान जी की उपासना से सभी कष्ट दूर होंगे।",
        fullEn: "Keep strategic plans confidential today, Scorpio. Good time for introspection and study of ancient wisdom. Avoid speculative risks. Chanting Hanuman Chalisa brings protection."
    },
    sagittarius: {
        id: "sagittarius",
        symbol: "♐",
        hiName: "धनु",
        enName: "Sagittarius",
        shortHi: "गुरु ग्रह का शुभ प्रभाव। धर्म-कर्म और शिक्षा में उन्नति।",
        shortEn: "Jupiter bestows blessings. Progress in education and virtue.",
        fullHi: "धनु राशि के स्वामी बृहस्पति की कृपा से ज्ञान और धर्म में वृद्धि होगी। उच्च शिक्षा प्राप्त कर रहे विद्यार्थियों के लिए समय अनुकूल है। पंडित जी से नवग्रह शांति या गुरु ग्रह के उपाय जानना फलदायी रहेगा।",
        fullEn: "Jupiter blesses Sagittarians with wisdom and righteous thoughts. Excellent for students and scholars. Performing Jupiter remedies or consulting Maharaj Ji brings fulfillment."
    },
    capricorn: {
        id: "capricorn",
        symbol: "♑",
        hiName: "मकर",
        enName: "Capricorn",
        shortHi: "कड़ा परिश्रम रंग लाएगा। संपत्ति संबंधी मामलों में प्रगति।",
        shortEn: "Hard work yields rich results. Real estate matters move forward.",
        fullHi: "मकर राशि के स्वामी शनि देव की कृपा से मेहनत का फल मिलेगा। संपत्ति या पैतृक विवाद हल हो सकते हैं। नौकरीपेशा लोगों को पदोन्नति का शुभ समाचार मिल सकता है। पीपल के वृक्ष में जल दें।",
        fullEn: "Saturn rewards diligent efforts for Capricorns. Favorable movements in property or legal matters. Professional advancement likely. Water Saturn-friendly trees with devotion."
    },
    aquarius: {
        id: "aquarius",
        symbol: "♒",
        hiName: "कुंभ",
        enName: "Aquarius",
        shortHi: "मित्रों से सहयोग मिलेगा। सामाजिक कार्यों में प्रतिष्ठा बढ़ेगी।",
        shortEn: "Support from trusted friends. Rising social reputation.",
        fullHi: "कुंभ राशि के जातकों को सामाजिक एवं जनसेवा के कार्यों में अपार सम्मान मिलेगा। मित्रों और शुभचिंतकों से सहयोग प्राप्त होगा। कोई नया प्रोजेक्ट शुरू करने के लिए आज का दिन शुभ है।",
        fullEn: "Social recognition and peer support for Aquarians. Ideal day to collaborate on meaningful projects. Positive vibes encourage philanthropic pursuits."
    },
    pisces: {
        id: "pisces",
        symbol: "♓",
        hiName: "मीन",
        enName: "Pisces",
        shortHi: "आध्यात्मिक शांति महसूस होगी। दूर यात्रा के योग संभव हैं।",
        shortEn: "Deep inner tranquility. Possibility of long spiritual travel.",
        fullHi: "मीन राशि के स्वामी गुरुदेव की अनुकंपा से मन प्रसन्न और शांत रहेगा। तीर्थ यात्रा का योग बन सकता है। दान-पुण्य करने से मानसिक तृप्ति मिलेगी। नवग्रह दर्शन से विशेष लाभ प्राप्त होगा।",
        fullEn: "Spiritual tranquility reigns for Pisces. Pilgrimage plans may materialize. Acts of charity and selfless service bring immense joy and divine grace."
    }
};
