/**
 * Bilingual Language Manager (Hindi & English)
 * Pure vanilla JS, no page reload, persisted in localStorage.
 */

const translations = {
    hi: {
        // Sacred Top Banner
        "topbanner.text": "॥ श्री गणेशाय नमः ॥ • ॥ ॐ नमः शिवाय ॥ • ॥ श्री हनुमते नमः ॥",
        "topbanner.call": "सीधा संपर्क करें",
        "topbanner.whatsapp": "व्हाट्सएप परामर्श",

        // Navigation
        "nav.home": "मुख्य पृष्ठ",
        "nav.services": "वैदिक सेवाएं",
        "nav.panchang": "पंचांग व राशिफल",
        "nav.pooja": "पूजा व अनुष्ठान",
        "nav.about": "महाराज जी का परिचय",
        "nav.consultation": "परामर्श बुक करें",
        "nav.callCta": "कॉल करें",
        "nav.whatsappCta": "व्हाट्सएप",

        // Hero Section
        "hero.badge": "प्रामाणिक वैदिक ज्योतिष एवं वास्तु संस्थान",
        "hero.title": "वैदिक ज्योतिष एवं शास्त्रोक्त मार्गदर्शन द्वारा जीवन में सुख, शांति एवं समृद्धि",
        "hero.subtitle": "पूज्य एस्ट्रो आशीष जी द्वारा आपकी जन्म कुंडली का सूक्ष्म विश्लेषण एवं अचूक शास्त्रोक्त समाधान",
        "hero.ctaPrimary": "कुंडली परामर्श बुक करें",
        "hero.ctaSecondary": "व्हाट्सएप पर बात करें",
        "hero.stat1": "20+ वर्ष वैदिक अनुभव",
        "hero.stat2": "25,000+ कुंडलियों का सटीक विश्लेषण",
        "hero.stat3": "विश्वभर में एनआरआई श्रद्धालु (USA, UK, Canada, UAE)",
        "hero.stat4": "100% गोपनीय एवं व्यक्तिगत परामर्श",

        // Trust Strip
        "trust.years": "20+",
        "trust.yearsText": "वर्षों का अनुभूत वैदिक अनुभव",
        "trust.horoscopes": "25,000+",
        "trust.horoscopesText": "सटीक कुंडली विश्लेषण",
        "trust.countries": "15+",
        "trust.countriesText": "देशों में संतुष्ट श्रद्धालु",
        "trust.satisfaction": "100%",
        "trust.satisfactionText": "पूर्ण गोपनीय एवं शास्त्रोक्त परामर्श",

        // Panchang Section
        "panchang.sectionTitle": "दैनिक पंचांग एवं शुभ मुहूर्त",
        "panchang.sectionSubtitle": "आज का पंचांग ग्रहों की स्थिति और शुभ योगों की सटीक जानकारी देता है",
        "panchang.tithi": "तिथि",
        "panchang.nakshatra": "नक्षत्र",
        "panchang.yoga": "योग",
        "panchang.karan": "करण",
        "panchang.rahuKaal": "राहु काल",
        "panchang.shubhMuhurat": "शुभ मुहूर्त",
        "panchang.sunMoon": "सूर्य व चंद्र स्थिति",
        "panchang.note": "* यह पंचांग प्राथमिक ज्योतिषीय संदर्भ के लिए प्रदर्शित है। व्यक्तिगत शुभ मुहूर्त हेतु अपनी कुंडली का विश्लेषण कराएं।",

        // Rashifal Section
        "rashifal.sectionTitle": "12 राशि दैनिक राशिफल",
        "rashifal.sectionSubtitle": "जानें आज आपकी राशि पर ग्रहों का प्रभाव और उपाय",
        "rashifal.readMore": "विस्तृत राशिफल देखें",

        // Services Section
        "services.sectionTitle": "प्रमुख वैदिक सेवाएं",
        "services.sectionSubtitle": "जीवन की कठिन से कठिन समस्याओं का प्राचीन वैदिक ग्रंथों के अनुसार प्रामाणिक समाधान",
        "services.viewDetails": "जानकारी देखें",
        "services.bookNow": "परामर्श बुक करें",

        // Service 1
        "service1.title": "जन्म कुंडली सूक्ष्म विश्लेषण",
        "service1.desc": "करियर, विवाह, धन लाभ, स्वास्थ एवं जीवन के हर महत्वपूर्ण मोड़ का सटीक ग्रह-दशा आधारित विश्लेषण।",
        
        // Service 2
        "service2.title": "कुंडली मिलान एवं विवाह विचार",
        "service2.desc": "36 गुण मिलान, मांगलिक दोष, नाड़ी दोष एवं दांपत्य जीवन की सुख-शांति हेतु सूक्ष्म विश्लेषण।",
        
        // Service 3
        "service3.title": "वास्तु शास्त्र परामर्श",
        "service3.desc": "गृह एवं व्यावसायिक स्थलों का वास्तु विश्लेषण। बिना तोड़-फोड़ के सरल ऊर्जा संतुलन एवं सकारात्मक उपाय।",
        
        // Service 4
        "service4.title": "ग्रह शांति एवं दोष निवारण",
        "service4.desc": "कालसर्प दोष, पितृ दोष, मंगल दोष, साढ़े साती एवं राहु-केतु की पीड़ा से मुक्ति हेतु शास्त्रोक्त अनुष्ठान।",
        
        // Service 5
        "service5.title": "सिद्ध रत्न एवं यंत्र मार्गदर्शन",
        "service5.desc": "ग्रह अनुकूलता अनुसार प्राण-प्रतिष्ठित शुद्ध रत्न एवं यंत्र धारण करने का वैज्ञानिक व वैदिक परामर्श।",

        // Service 6
        "service6.title": "करियर एवं व्यापार मार्गदर्शन",
        "service6.desc": "नौकरी में पदोन्नति, व्यापार वृद्धि, विदेश योग एवं नए निवेश हेतु ज्योतिषीय विश्लेषण।",

        // Online Pooja Section
        "pooja.sectionTitle": "ऑनलाइन पूजा एवं अनुष्ठान",
        "pooja.sectionSubtitle": "शुद्ध वैदिक पद्धति एवं संकल्प द्वारा सिद्ध आचार्यों द्वारा लाइव वैदिक अनुष्ठान",
        "pooja.featureTitle": "प्रत्यक्ष लाइव वीडियो संकल्प",
        "pooja.featureDesc": "आप अपने घर बैठे नाम, गोत्र और व्यक्तिगत मनोकामना संकल्प के साथ पंडित जी द्वारा अनुष्ठान करवा सकते हैं।",
        "pooja.notice": "नोट: पूजा की लाइव वीडियो लिंक या जूम मीटिंग लिंक बुक करने के पश्चात आपको व्हाट्सएप एवं ईमेल पर भेजी जाएगी।",
        "pooja.item1Title": "नवग्रह शांति महापूजा",
        "pooja.item1Desc": "नवग्रहों के प्रतिकूल प्रभाव को दूर कर जीवन में स्थिरता और शांति हेतु।",
        "pooja.item2Title": "रुद्राभिषेक एवं महामृत्युंजय जाप",
        "pooja.item2Desc": "असाध्य रोगों से मुक्ति, अकाल मृत्यु भय निवारण एवं आत्मिक शक्ति हेतु।",
        "pooja.item3Title": "मंगला गौरी व कालसर्प शांति पूजा",
        "pooja.item3Desc": "विवाह बाधा निवारण, मांगलिक दोष शमन एवं गृह क्लेश मुक्ति हेतु।",
        "pooja.item4Title": "विशेष पितृ शांति एवं तर्पण",
        "pooja.item4Desc": "पितृ दोष मुक्ति, वंश वृद्धि और पूर्वजों के आशीर्वाद हेतु वैदिक विधि।",
        "pooja.bookBtn": "अनुष्ठान संकल्प बुक करें",

        // About Maharaj Ji
        "about.badge": "वैदिक परंपरा एवं अध्यात्म",
        "about.title": "पूज्य एस्ट्रो आशीष जी",
        "about.subtitle": "वैदिक ज्योतिषी, कर्मकांडी विद्वान एवं वास्तु विशेषज्ञ",
        "about.p1": "एस्ट्रो आशीष जी पिछले दो दशकों से अधिक समय से प्रामाणिक वैदिक ज्योतिष, कर्मकांड और वास्तु शास्त्र के माध्यम से हजारों श्रद्धालुओं को जीवन का सही मार्गदर्शन प्रदान कर रहे हैं।",
        "about.p2": "वैदिक गुरुकुल परंपरा से दीक्षित, पंडित जी का मानना है कि ग्रह नक्षत्र मनुष्य के कर्म और भाग्य का दर्पण हैं। उचित समय पर सही शास्त्रोक्त उपाय, मंत्र जप और सकारात्मक कर्म से जीवन की दिशा बदली जा सकती है।",
        "about.p3": "[यहां पंडित जी का प्रामाणिक परिचय एवं गुरुकुल पृष्ठभूमि जोड़ी जा सकती है]",
        "about.philosophyTitle": "हमारा वैदिक दृष्टिकोण",
        "about.phil1": "प्रामाणिक ग्रह विश्लेषण एवं निस्वार्थ मार्गदर्शन",
        "about.phil2": "बिना अंधविश्वास के व्यावहारिक एवं सरल उपाय",
        "about.phil3": "श्रद्धालुओं की गोपनीयता का 100% सम्मान",
        "about.cta": "महाराज जी से परामर्श लें",

        // Testimonials
        "reviews.sectionTitle": "श्रद्धालुओं के अनुभव एवं विचार",
        "reviews.sectionSubtitle": "देश-विदेश के श्रद्धालुओं द्वारा प्राप्त आशीर्वाद एवं प्रतिक्रियाएं",
        "reviews.note": "* यह सैंपल अनुभव हैं - वास्तविक श्रद्धालुओं के विचार जोड़े जा सकते हैं।",

        // Booking Section
        "booking.sectionTitle": "कुंडली परामर्श बुक करें",
        "booking.sectionSubtitle": "अपनी जन्म तिथि, समय और स्थान भरकर महाराज जी से सीधा परामर्श प्राप्त करें",
        "booking.step1": "1. परामर्श का प्रकार चुनें",
        "booking.step2": "2. जन्म विवरण दर्ज करें",
        
        "booking.mode1Title": "30-मिनट वीडियो कॉल",
        "booking.mode1Desc": "गूगल मीट या जूम द्वारा आमने-सामने विस्तृत परामर्श",
        "booking.mode2Title": "45-मिनट फोन परामर्श",
        "booking.mode2Desc": "सीधा ऑडियो फोन कॉल पर विस्तार से ग्रह विश्लेषण",
        "booking.mode3Title": "विस्तृत कुंडली पीडीएफ रिपोर्ट",
        "booking.mode3Desc": "आपकी ईमेल पर 15+ पृष्ठों की हस्तलिखित लिखित रिपोर्ट",

        "booking.nameLabel": "पूरा नाम *",
        "booking.namePlaceholder": "अपना पूरा नाम दर्ज करें",
        "booking.genderLabel": "लिंग *",
        "booking.genderMale": "पुरुष",
        "booking.genderFemale": "महिला",
        "booking.genderOther": "अन्य",

        "booking.dobLabel": "जन्म तिथि *",
        "booking.tobLabel": "जन्म समय *",
        "booking.tobUnknown": "सटीक समय ज्ञात नहीं है (लगभग)",

        "booking.pobLabel": "जन्म स्थान (शहर, राज्य, देश) *",
        "booking.pobPlaceholder": "उदा. वाराणसी, उत्तर प्रदेश, भारत",

        "booking.concernLabel": "मुख्य प्रश्न / परामर्श का विषय *",
        "booking.concernCareer": "करियर व नौकरी",
        "booking.concernMarriage": "विवाह व कुंडली मिलान",
        "booking.concernBusiness": "व्यापार व धन लाभ",
        "booking.concernHealth": "स्वास्थ्य व आयु",
        "booking.concernEducation": "शिक्षा व संतान",
        "booking.concernVastu": "वास्तु दोष",
        "booking.concernGeneral": "सामान्य जीवन मार्गदर्शन",

        "booking.phoneLabel": "व्हाट्सएप नंबर (कॉल हेतु) *",
        "booking.phonePlaceholder": "10 अंकों का व्हाट्सएप नंबर",
        "booking.emailLabel": "ईमेल पता *",
        "booking.emailPlaceholder": "अपना ईमेल दर्ज करें",

        "booking.confidentialityTitle": "100% गोपनीय एवं सुरक्षित",
        "booking.confidentialityText": "आपके द्वारा दी गई जन्म जानकारी केवल परामर्श हेतु सुरक्षित रखी जाती है और किसी के साथ साझा नहीं की जाती।",

        "booking.submitBtn": "परामर्श जानकारी सबमिट करें",

        // Form Result Modal
        "result.title": "धन्यवाद! आपकी परामर्श जानकारी तैयार है।",
        "result.subtitle": "कृपया नीचे दिए गए विकल्पों में से किसी एक द्वारा पंडित जी को अपनी जानकारी भेजें:",
        "result.whatsappBtn": "व्हाट्सएप पर जानकारी भेजें",
        "result.emailBtn": "ईमेल द्वारा भेजें",
        "result.callBtn": "सीधा फोन कॉल करें",
        "result.close": "बंद करें",

        // Payment Section
        "payment.title": "सुरक्षित दक्षिणा एवं शुल्क भुगतान",
        "payment.subtitle": "भारत एवं अंतरराष्ट्रीय श्रद्धालुओं के लिए आसान और सुरक्षित भुगतान विकल्प",
        "payment.indiaTitle": "भारत हेतु भुगतान (Domestic Payment)",
        "payment.intlTitle": "अंतर्राष्ट्रीय भुगतान (International Devotees)",
        "payment.upiText": "UPI ID: panditashish@upi (PhonePe, GPay, Paytm)",
        "payment.notice": "* यह भुगतान गेटवे का प्लेसहोल्डर है। वास्तविक पेमेंट लिंक जल्द ही सक्रिय किया जाएगा।",

        // Footer
        "footer.tagline": "शास्त्रोक्त वैदिक ज्ञान से जीवन को दें नई दिशा, सुख और समृद्धि।",
        "footer.quickLinks": "त्वरित लिंक",
        "footer.servicesHeader": "हमारी सेवाएं",
        "footer.contactHeader": "संपर्क विवरण",
        "footer.disclaimerHeader": "महत्वपूर्ण घोषणा (Disclaimer)",
        "footer.disclaimerText": "ज्योतिषीय परामर्श आध्यात्मिक, सांस्कृतिक एवं व्यक्तिगत मार्गदर्शन के लिए है। यह किसी कानूनी, चिकित्सकीय या वित्तीय विशेषज्ञ की सलाह का विकल्प नहीं है।",
        "footer.copyright": "© 2026 एस्ट्रो आशीष जी। सर्वाधिकार सुरक्षित।",

        // Accessibility & Theme
        "theme.toggleLight": "प्रकाश थीम",
        "theme.toggleDark": "मंदिर डार्क थीम"
    },

    en: {
        // Sacred Top Banner
        "topbanner.text": "॥ Shree Ganeshaya Namah ॥ • ॥ Om Namah Shivaya ॥ • ॥ Shree Hanumate Namah ॥",
        "topbanner.call": "Direct Call",
        "topbanner.whatsapp": "WhatsApp Consultation",

        // Navigation
        "nav.home": "Home",
        "nav.services": "Vedic Services",
        "nav.panchang": "Panchang & Rashifal",
        "nav.pooja": "Online Pooja",
        "nav.about": "About Maharaj Ji",
        "nav.consultation": "Book Consultation",
        "nav.callCta": "Call Now",
        "nav.whatsappCta": "WhatsApp",

        // Hero Section
        "hero.badge": "AUTHENTIC VEDIC ASTROLOGY & VASTU SANSTHAN",
        "hero.title": "Find Clarity, Peace & Direction Through Authentic Vedic Astrology",
        "hero.subtitle": "Authentic Vedic Astrological Guidance & Divine Remedies by Astro Ashish Ji",
        "hero.ctaPrimary": "Book Kundli Consultation",
        "hero.ctaSecondary": "Chat on WhatsApp",
        "hero.stat1": "20+ Years Vedic Experience",
        "hero.stat2": "25,000+ Horoscopes Analyzed",
        "hero.stat3": "Global NRI Devotees (USA, UK, Canada, UAE)",
        "hero.stat4": "100% Confidential Consultations",

        // Trust Strip
        "trust.years": "20+",
        "trust.yearsText": "Years of Vedic Experience",
        "trust.horoscopes": "25,000+",
        "trust.horoscopesText": "Horoscopes Analyzed",
        "trust.countries": "15+",
        "trust.countriesText": "Countries Served",
        "trust.satisfaction": "100%",
        "trust.satisfactionText": "Confidential & Traditional",

        // Panchang Section
        "panchang.sectionTitle": "Daily Panchang & Shubh Muhurat",
        "panchang.sectionSubtitle": "Accurate daily planetary positions and auspicious timings for your day",
        "panchang.tithi": "Tithi",
        "panchang.nakshatra": "Nakshatra",
        "panchang.yoga": "Yoga",
        "panchang.karan": "Karan",
        "panchang.rahuKaal": "Rahu Kaal",
        "panchang.shubhMuhurat": "Shubh Muhurat",
        "panchang.sunMoon": "Sun & Moon Position",
        "panchang.note": "* This Panchang is for general reference. For personal auspicious timing, get your personal horoscope analyzed.",

        // Rashifal Section
        "rashifal.sectionTitle": "12 Rashi Daily Horoscope",
        "rashifal.sectionSubtitle": "Discover today's planetary influences and Vedic guidance for your zodiac",
        "rashifal.readMore": "Read Full Horoscope",

        // Services Section
        "services.sectionTitle": "Our Authentic Vedic Services",
        "services.sectionSubtitle": "Time-tested remedies and profound insights from classical scriptural texts",
        "services.viewDetails": "View Details",
        "services.bookNow": "Book Consultation",

        // Service 1
        "service1.title": "Janam Kundli Deep Analysis",
        "service1.desc": "Comprehensive analysis of planetary Dashas, career, marriage, health, and life direction.",
        
        // Service 2
        "service2.title": "Kundli Milan & Compatibility",
        "service2.desc": "36 Guna matchmaking, Manglik & Nadi Dosha evaluation for a harmonious married life.",
        
        // Service 3
        "service3.title": "Vastu Shastra Consultation",
        "service3.desc": "Residential and commercial energy balancing with minimal or no structural alterations.",
        
        // Service 4
        "service4.title": "Graha Shanti & Dosh Nivaran",
        "service4.desc": "Authentic rituals for Kaal Sarp, Pitra Dosha, Mangal Dosha, and Sade Sati mitigation.",
        
        // Service 5
        "service5.title": "Energized Gemstones & Yantras",
        "service5.desc": "Scientific & scriptural recommendation of certified, Pran-Pratishtha energized gemstones.",

        // Service 6
        "service6.title": "Career & Business Guidance",
        "service6.desc": "Astrological insights for job promotions, business expansion, foreign travel, and investments.",

        // Online Pooja Section
        "pooja.sectionTitle": "Online Pooja & Vedic Anushthan",
        "pooja.sectionSubtitle": "Live authentic Vedic rituals performed by learned Acharyas with personal Sankalp",
        "pooja.featureTitle": "Live Remote Video Sankalp",
        "pooja.featureDesc": "Participate from anywhere in the world. Provide your Name, Gotra, and wish for the ritual.",
        "pooja.notice": "Note: Live video/Zoom meeting link will be shared via WhatsApp & Email upon confirmation.",
        "pooja.item1Title": "Navgrah Shanti Mahapooja",
        "pooja.item1Desc": "To neutralize adverse planetary transits and restore peace & stability in life.",
        "pooja.item2Title": "Rudrabhishek & Mahamrityunjaya Jaap",
        "pooja.item2Desc": "For overcoming health challenges, fear of longevity, and acquiring divine vitality.",
        "pooja.item3Title": "Mangla Gauri & Kaal Sarp Pooja",
        "pooja.item3Desc": "Removes marital delay, mitigates Mangal Dosha, and resolves relationship friction.",
        "pooja.item4Title": "Pitra Shanti & Tarpan Anushthan",
        "pooja.item4Desc": "Scriptural ritual for ancestral peace, family blessings, and lineage prosperity.",
        "pooja.bookBtn": "Book Pooja Sankalp",

        // About Maharaj Ji
        "about.badge": "VEDIC GURUKUL TRADITION",
        "about.title": "Astro Ashish Ji",
        "about.subtitle": "Vedic Astrologer, Karmakandi Scholar & Vastu Expert",
        "about.p1": "For over two decades, Astro Ashish Ji has guided thousands of devotees globally through authentic Vedic astrology, traditional Karmakand, and Vastu principles.",
        "about.p2": "Formally educated in the classical Gurukul tradition, Maharaj Ji believes that horoscopes are a mirror of karma and destiny. With timely remedies, mantra chanting, and positive action, life can be transformed.",
        "about.p3": "[Verified biography and Gurukul qualifications can be updated here]",
        "about.philosophyTitle": "Our Core Philosophy",
        "about.phil1": "Authentic planetary analysis without fear-mongering",
        "about.phil2": "Practical, accessible remedies rooted in ancient scriptures",
        "about.phil3": "100% strict confidentiality for all devotee details",
        "about.cta": "Consult Maharaj Ji",

        // Testimonials
        "reviews.sectionTitle": "Devotee Experiences & Reviews",
        "reviews.sectionSubtitle": "Heartfelt feedback from devotees across India and internationally",
        "reviews.note": "* Sample testimonials — replace with verified customer feedback.",

        // Booking Section
        "booking.sectionTitle": "Book Astrological Consultation",
        "booking.sectionSubtitle": "Fill in your exact birth details to receive divine astrological guidance",
        "booking.step1": "1. Select Consultation Mode",
        "booking.step2": "2. Provide Birth Details",

        "booking.mode1Title": "30-Min Video Call",
        "booking.mode1Desc": "Face-to-face consultation via Google Meet or Zoom",
        "booking.mode2Title": "45-Min Phone Call",
        "booking.mode2Desc": "Direct audio phone call with in-depth planetary discussion",
        "booking.mode3Title": "Detailed Kundli PDF Report",
        "booking.mode3Desc": "15+ page written analytical report delivered to your email",

        "booking.nameLabel": "Full Name *",
        "booking.namePlaceholder": "Enter your full name",
        "booking.genderLabel": "Gender *",
        "booking.genderMale": "Male",
        "booking.genderFemale": "Female",
        "booking.genderOther": "Other",

        "booking.dobLabel": "Date of Birth *",
        "booking.tobLabel": "Time of Birth *",
        "booking.tobUnknown": "Exact time unknown (Approximate)",

        "booking.pobLabel": "Birth Place (City, State, Country) *",
        "booking.pobPlaceholder": "e.g., Varanasi, UP, India or London, UK",

        "booking.concernLabel": "Primary Area of Concern *",
        "booking.concernCareer": "Career & Job",
        "booking.concernMarriage": "Marriage & Kundli Matching",
        "booking.concernBusiness": "Business & Wealth",
        "booking.concernHealth": "Health & Longevity",
        "booking.concernEducation": "Education & Children",
        "booking.concernVastu": "Vastu Guidance",
        "booking.concernGeneral": "General Life Guidance",

        "booking.phoneLabel": "WhatsApp Number (For Call & Report) *",
        "booking.phonePlaceholder": "Enter phone with country code",
        "booking.emailLabel": "Email Address *",
        "booking.emailPlaceholder": "Enter your email address",

        "booking.confidentialityTitle": "100% Confidential & Secure",
        "booking.confidentialityText": "Your submitted birth details are used strictly for astrological analysis and will never be shared publicly.",

        "booking.submitBtn": "Submit Consultation Details",

        // Form Result Modal
        "result.title": "Thank You! Your Consultation Details Are Ready.",
        "result.subtitle": "Please choose one of the options below to send your details directly to Pandit Ji:",
        "result.whatsappBtn": "Send via WhatsApp",
        "result.emailBtn": "Send via Email",
        "result.callBtn": "Direct Phone Call",
        "result.close": "Close Window",

        // Payment Section
        "payment.title": "Secure Payment & Dakshina Options",
        "payment.subtitle": "Convenient payment methods for devotees in India and overseas",
        "payment.indiaTitle": "Domestic Devotees (India)",
        "payment.intlTitle": "International Devotees (Global)",
        "payment.upiText": "UPI ID: panditashish@upi (PhonePe, GPay, Paytm)",
        "payment.notice": "* Payment gateway placeholder. Official gateway links can be configured in js/config.js.",

        // Footer
        "footer.tagline": "Empowering lives with timeless Vedic astrology and spiritual wisdom.",
        "footer.quickLinks": "Quick Links",
        "footer.servicesHeader": "Our Services",
        "footer.contactHeader": "Contact Details",
        "footer.disclaimerHeader": "Disclaimer",
        "footer.disclaimerText": "Astrology consultations are intended for spiritual, cultural and personal guidance. They should not replace professional medical, legal, financial or mental-health advice.",
        "footer.copyright": "© 2026 Astro Ashish Ji. All rights reserved.",

        // Accessibility & Theme
        "theme.toggleLight": "Light Theme",
        "theme.toggleDark": "Temple Dark Theme"
    }
};

class LanguageManager {
    constructor() {
        this.currentLang = localStorage.getItem("app_language") || "hi";
        this.init();
    }

    init() {
        this.applyLanguage(this.currentLang);
        this.bindEvents();
    }

    bindEvents() {
        const langBtns = document.querySelectorAll(".lang-switch-btn");
        langBtns.forEach(btn => {
            btn.addEventListener("click", (e) => {
                const lang = e.currentTarget.dataset.lang;
                if (lang && lang !== this.currentLang) {
                    this.setLanguage(lang);
                }
            });
        });
    }

    setLanguage(lang) {
        if (!translations[lang]) return;
        this.currentLang = lang;
        localStorage.setItem("app_language", lang);
        this.applyLanguage(lang);
        
        // Dispatch event for other components if needed
        document.dispatchEvent(new CustomEvent("languageChanged", { detail: { lang } }));
    }

    applyLanguage(lang) {
        const dict = translations[lang] || translations.hi;
        
        // Update document lang attribute
        document.documentElement.lang = lang;

        // Translate text elements with data-i18n
        const elements = document.querySelectorAll("[data-i18n]");
        elements.forEach(el => {
            const key = el.getAttribute("data-i18n");
            if (dict[key] !== undefined) {
                el.innerHTML = dict[key];
            }
        });

        // Translate placeholders with data-i18n-placeholder
        const placeholderElems = document.querySelectorAll("[data-i18n-placeholder]");
        placeholderElems.forEach(el => {
            const key = el.getAttribute("data-i18n-placeholder");
            if (dict[key] !== undefined) {
                el.setAttribute("placeholder", dict[key]);
            }
        });

        // Update active class on language toggle buttons
        const langBtns = document.querySelectorAll(".lang-switch-btn");
        langBtns.forEach(btn => {
            if (btn.dataset.lang === lang) {
                btn.classList.add("active");
                btn.setAttribute("aria-pressed", "true");
            } else {
                btn.classList.remove("active");
                btn.setAttribute("aria-pressed", "false");
            }
        });
    }

    getText(key) {
        const dict = translations[this.currentLang] || translations.hi;
        return dict[key] || key;
    }
}

let langManager;
document.addEventListener("DOMContentLoaded", () => {
    langManager = new LanguageManager();
});
