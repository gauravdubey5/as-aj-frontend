/**
 * Main UI Controller & Site Interactions
 * Handles theme toggling, sticky header, mobile drawer, counter animations, service modals, and scroll reveals.
 */

class AppController {
    constructor() {
        this.currentTheme = localStorage.getItem("app_theme") || "light";
        this.init();
    }

    init() {
        this.applyTheme(this.currentTheme);
        this.bindThemeToggle();
        this.bindHeaderScroll();
        this.bindMobileMenu();
        this.bindSmoothScroll();
        this.initScrollReveal();
        this.initCounterAnimation();
        this.bindServiceModals();
        this.updateDynamicLinks();
    }

    /* --- Theme Manager --- */
    applyTheme(theme) {
        this.currentTheme = theme;
        localStorage.setItem("app_theme", theme);
        document.documentElement.setAttribute("data-theme", theme);

        const themeBtns = document.querySelectorAll(".theme-toggle-btn");
        themeBtns.forEach(btn => {
            const icon = btn.querySelector(".theme-icon");
            const label = btn.querySelector(".theme-label");
            const lang = localStorage.getItem("app_language") || "hi";

            if (theme === "dark") {
                if (icon) icon.textContent = "☀️";
                if (label) label.textContent = lang === "hi" ? "प्रकाश थीम" : "Light Theme";
                btn.setAttribute("aria-label", "Switch to Light Theme");
            } else {
                if (icon) icon.textContent = "🌙";
                if (label) label.textContent = lang === "hi" ? "मंदिर डार्क थीम" : "Temple Dark Theme";
                btn.setAttribute("aria-label", "Switch to Dark Theme");
            }
        });
    }

    bindThemeToggle() {
        const themeBtns = document.querySelectorAll(".theme-toggle-btn");
        themeBtns.forEach(btn => {
            btn.addEventListener("click", () => {
                const newTheme = this.currentTheme === "light" ? "dark" : "light";
                this.applyTheme(newTheme);
            });
        });
    }

    /* --- Header & Mobile Nav --- */
    bindHeaderScroll() {
        const header = document.querySelector(".site-header");
        if (!header) return;

        window.addEventListener("scroll", () => {
            if (window.scrollY > 40) {
                header.classList.add("scrolled");
            } else {
                header.classList.remove("scrolled");
            }
        });
    }

    bindMobileMenu() {
        const navToggle = document.querySelector(".nav-hamburger");
        const navDrawer = document.querySelector(".mobile-nav-drawer");
        const overlay = document.querySelector(".mobile-nav-overlay");

        if (!navToggle || !navDrawer) return;

        const openMenu = () => {
            navToggle.classList.add("open");
            navDrawer.classList.add("open");
            if (overlay) overlay.classList.add("open");
            navToggle.setAttribute("aria-expanded", "true");
            document.body.classList.add("modal-open");
        };

        const closeMenu = () => {
            navToggle.classList.remove("open");
            navDrawer.classList.remove("open");
            if (overlay) overlay.classList.remove("open");
            navToggle.setAttribute("aria-expanded", "false");
            document.body.classList.remove("modal-open");
        };

        navToggle.addEventListener("click", () => {
            const isOpen = navDrawer.classList.contains("open");
            if (isOpen) closeMenu(); else openMenu();
        });

        if (overlay) overlay.addEventListener("click", closeMenu);

        // Close on nav item click
        const drawerLinks = navDrawer.querySelectorAll("a");
        drawerLinks.forEach(link => {
            link.addEventListener("click", closeMenu);
        });
    }

    /* --- Smooth Scrolling --- */
    bindSmoothScroll() {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                const targetId = this.getAttribute('href');
                if (targetId === "#") return;
                const targetElem = document.querySelector(targetId);
                if (targetElem) {
                    e.preventDefault();
                    const headerOffset = 100;
                    const elementPosition = targetElem.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                    window.scrollTo({
                        top: offsetPosition,
                        behavior: 'smooth'
                    });
                }
            });
        });
    }

    /* --- Scroll Reveal Animations --- */
    initScrollReveal() {
        const revealElems = document.querySelectorAll(".animate-reveal");
        if (!revealElems.length) return;

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("revealed");
                    // Optionally unobserve after reveal
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.15 });

        revealElems.forEach(el => observer.observe(el));
    }

    /* --- Counter Animation --- */
    initCounterAnimation() {
        const counterElems = document.querySelectorAll(".counter-value");
        if (!counterElems.length) return;

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    this.animateCounter(entry.target);
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });

        counterElems.forEach(el => observer.observe(el));
    }

    animateCounter(el) {
        const target = parseInt(el.dataset.target, 10) || 0;
        const duration = 1800; // ms
        const start = 0;
        const startTime = performance.now();
        const suffix = el.dataset.suffix || "";

        const update = (currentTime) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            // Ease out cubic
            const easeProgress = 1 - Math.pow(1 - progress, 3);
            const currentVal = Math.floor(easeProgress * target);

            el.textContent = currentVal.toLocaleString() + suffix;

            if (progress < 1) {
                requestAnimationFrame(update);
            } else {
                el.textContent = target.toLocaleString() + suffix;
            }
        };

        requestAnimationFrame(update);
    }

    /* --- Service Modals --- */
    bindServiceModals() {
        const serviceModal = document.getElementById("service-modal");
        if (!serviceModal) return;

        const detailBtns = document.querySelectorAll(".view-service-detail");
        detailBtns.forEach(btn => {
            btn.addEventListener("click", (e) => {
                const serviceKey = e.currentTarget.dataset.service;
                this.openServiceModal(serviceKey);
            });
        });

        const closeBtn = serviceModal.querySelector(".modal-close");
        if (closeBtn) {
            closeBtn.addEventListener("click", () => this.closeServiceModal());
        }

        serviceModal.addEventListener("click", (e) => {
            if (e.target === serviceModal) this.closeServiceModal();
        });

        document.addEventListener("keydown", (e) => {
            if (e.key === "Escape" && serviceModal.classList.contains("open")) {
                this.closeServiceModal();
            }
        });
    }

    openServiceModal(serviceKey) {
        const lang = localStorage.getItem("app_language") || "hi";
        const serviceModal = document.getElementById("service-modal");
        if (!serviceModal) return;

        const titleElem = serviceModal.querySelector("#service-modal-title");
        const bodyElem = serviceModal.querySelector("#service-modal-body");

        // Service details data mapping
        const serviceDetailsData = {
            service1: {
                titleHi: "जन्म कुंडली सूक्ष्म विश्लेषण",
                titleEn: "Janam Kundli Deep Analysis",
                bodyHi: `
                    <h4>विवरण एवं महत्व:</h4>
                    <p>जन्म कुंडली आपकी जन्म तिथि, समय और स्थान के आधार पर आकाशमंडल में नवग्रहों की वास्तविक स्थिति का खाका है। पूज्य एस्ट्रो आशीष जी द्वारा आपकी कुंडली का लग्न, नवमांश, दशमांश एवं ग्रह दशाओं का सूक्ष्म अध्ययन किया जाता है।</p>
                    
                    <h4>लाभ एवं प्राप्त होने वाला मार्गदर्शन:</h4>
                    <ul>
                        <li>करियर, नौकरी व व्यवसाय में सफलता एवं पदोन्नति का सही समय।</li>
                        <li>विवाह का शुभ समय, दांपत्य जीवन का भविष्य एवं जीवनसाथी का स्वभाव।</li>
                        <li>आर्थिक स्थिति, धन आगमन के योग एवं संभावित उतार-चढ़ाव।</li>
                        <li>स्वास्थ्य संबंधी पूर्व चेतावनी एवं ग्रह शांति उपाय।</li>
                        <li>महादशा एवं अंतर्दशा का संपूर्ण फलादेश।</li>
                    </ul>

                    <h4>आवश्यक जानकारी (Devotee Needs to Provide):</h4>
                    <p>पूरा नाम, जन्म तिथि, सटीक जन्म समय, जन्म स्थान (शहर/राज्य/देश)।</p>
                `,
                bodyEn: `
                    <h4>Description & Significance:</h4>
                    <p>Janam Kundli is a celestial blueprint based on your exact birth time, date, and coordinates. Astro Ashish Ji performs a deep evaluation of your D-1 (Lagna), D-9 (Navamsha), D-10 (Dashamsha), and active Mahadasha cycles.</p>

                    <h4>Benefits & Guidance Received:</h4>
                    <ul>
                        <li>Optimal timing for career growth, job changes, and investments.</li>
                        <li>Marriage timing, spouse compatibility, and marital harmony insights.</li>
                        <li>Financial trend forecasts and wealth accumulation remedies.</li>
                        <li>Health risk indicators and preventive Vedic remedies.</li>
                        <li>Comprehensive Dasha and planetary transit analysis.</li>
                    </ul>

                    <h4>Required Birth Information:</h4>
                    <p>Full Name, Date of Birth, Exact Birth Time, City & Country of Birth.</p>
                `
            },
            service2: {
                titleHi: "कुंडली मिलान एवं विवाह विचार",
                titleEn: "Kundli Milan & Matchmaking",
                bodyHi: `
                    <h4>विवरण एवं महत्व:</h4>
                    <p>सुखी एवं दीर्घ दांपत्य जीवन के लिए केवल 36 गुण मिलान पर्याप्त नहीं होता। पंडित जी द्वारा अष्टकूट मिलान के साथ-साथ दोनों की कुंडलियों में वर-कन्या की आयु, स्वास्थ्य, मंगली दोष, नाड़ी दोष एवं संतान योग का सूक्ष्म मिलान किया जाता है।</p>
                    
                    <h4>मुख्य जांच बिंदु:</h4>
                    <ul>
                        <li>36 गुण मिलान (अष्टकूट विचार)।</li>
                        <li>मंगल दोष एवं उसका वास्तविक परिहार।</li>
                        <li>नाड़ी दोष शमन विचार।</li>
                        <li>दांपत्य जीवन में सुख, समझ व आर्थिक स्थिरता।</li>
                    </ul>
                `,
                bodyEn: `
                    <h4>Description & Significance:</h4>
                    <p>A harmonious marital life requires more than just counting 36 Gunas. Maharaj Ji evaluates Ashta Koota matching along with longevity, health, Mangal Dosha cancellation, and emotional compatibility between partners.</p>
                    
                    <h4>Key Evaluation Parameters:</h4>
                    <ul>
                        <li>36 Guna Milan (Ashta Koota analysis).</li>
                        <li>Mangal Dosha verification and remedies.</li>
                        <li>Nadi Dosha analysis and mitigation.</li>
                        <li>Long-term domestic peace and financial stability.</li>
                    </ul>
                `
            },
            service3: {
                titleHi: "वास्तु शास्त्र परामर्श",
                titleEn: "Vastu Shastra Advisory",
                bodyHi: `
                    <h4>विवरण एवं महत्व:</h4>
                    <p>वास्तु शास्त्र प्रकृति के पांच तत्वों (अग्नि, जल, वायु, पृथ्वी, आकाश) का गृह व कार्यस्थल पर सही संतुलन है। पंडित जी द्वारा बिना तोड़-फोड़ के केवल दिशा सुधार एवं ऊर्जा शोधन द्वारा सकारात्मकता लाई जाती है।</p>
                    
                    <h4>मुख्य परामर्श:</h4>
                    <ul>
                        <li>आवासीय भवन वास्तु (Residential Vastu).</li>
                        <li>व्यावसायिक एवं औद्योगिक वास्तु (Commercial & Office Vastu).</li>
                        <li>मुख्य द्वार, रसोई, बेडरूम व पूजा घर का सही स्थान।</li>
                        <li>बिना तोड़-फोड़ के सरल यंत्र व रंग संतुलन उपाय।</li>
                    </ul>
                `,
                bodyEn: `
                    <h4>Description & Significance:</h4>
                    <p>Vastu aligns the five natural elements (Pancha Bhootas) within your space. Maharaj Ji provides non-destructive remedies using directional adjustments, color harmony, and elemental balancing.</p>
                    
                    <h4>Consultation Scope:</h4>
                    <ul>
                        <li>Residential Home Vastu.</li>
                        <li>Commercial & Industrial Property Vastu.</li>
                        <li>Optimal placement for Entrance, Kitchen, Master Bedroom & Altar.</li>
                        <li>Remedies without demolition.</li>
                    </ul>
                `
            },
            service4: {
                titleHi: "ग्रह शांति एवं दोष निवारण",
                titleEn: "Graha Shanti & Dosh Nivaran",
                bodyHi: `
                    <h4>विवरण एवं महत्व:</h4>
                    <p>यदि कुंडली में कालसर्प, पितृ दोष, साढ़े साती, मंगल दोष या राहु-केतु की प्रतिकूल स्थिति हो तो जीवन में निरंतर रुकावटें आती हैं। वैदिक पद्धति से अनुष्ठान कराकर इन दोषों का शमन किया जाता है।</p>
                    
                    <h4>प्रमुख शांति अनुष्ठान:</h4>
                    <ul>
                        <li>कालसर्प दोष निवारण पूजा।</li>
                        <li>पितृ दोष शांति एवं तर्पण।</li>
                        <li>शनि साढ़े साती एवं ढैय्या उपाय।</li>
                        <li>राहु-केतु एवं मंगल दोष शांति अनुष्ठान।</li>
                    </ul>
                `,
                bodyEn: `
                    <h4>Description & Significance:</h4>
                    <p>Specific planetary afflictions like Kaal Sarp, Pitra Dosha, Mangal Dosha, or Saturn's Sade Sati can cause persistent hurdles. Scriptural rituals help mitigate their adverse energy.</p>
                    
                    <h4>Key Remedial Anushthans:</h4>
                    <ul>
                        <li>Kaal Sarp Dosh Nivaran Pooja.</li>
                        <li>Pitra Dosh Shanti & Tarpan.</li>
                        <li>Saturn Sade Sati & Dhayya remedies.</li>
                        <li>Rahu-Ketu and Mangal Shanti Rituals.</li>
                    </ul>
                `
            },
            service5: {
                titleHi: "सिद्ध रत्न एवं यंत्र मार्गदर्शन",
                titleEn: "Energized Gemstones & Yantras",
                bodyHi: `
                    <h4>विवरण एवं महत्व:</h4>
                    <p>गलत रत्न धारण करना हानिकारक हो सकता है। आपकी कुंडली के कारक एवं मारक ग्रहों का सूक्ष्म अध्ययन करके ही उपयुक्त, certified एवं मंत्र सिद्ध (प्राण-प्रतिष्ठित) रत्न व यंत्र धारण करने का परामर्श दिया जाता है।</p>
                `,
                bodyEn: `
                    <h4>Description & Significance:</h4>
                    <p>Wearing the wrong gemstone can trigger undesirable planetary effects. Maharaj Ji analyzes your benefic and malefic planets before recommending lab-certified, Pran-Pratishtha energized gemstones and Yantras.</p>
                `
            },
            service6: {
                titleHi: "करियर एवं व्यापार मार्गदर्शन",
                titleEn: "Career & Business Guidance",
                bodyHi: `
                    <h4>विवरण एवं महत्व:</h4>
                    <p>दशमेश एवं कर्म भाव का विश्लेषण कर नौकरी में पदोन्नति, व्यापार विस्तार, नया व्यवसाय शुरू करने का शुभ समय तथा व्यावसायिक सफलता हेतु अचूक मार्गदर्शन।</p>
                `,
                bodyEn: `
                    <h4>Description & Significance:</h4>
                    <p>Specialized analysis of the 10th house and Dashamsha chart to guide you on promotions, business expansion, partnership safety, and optimal timing for investments.</p>
                `
            }
        };

        const details = serviceDetailsData[serviceKey] || serviceDetailsData.service1;

        if (titleElem) titleElem.textContent = lang === "hi" ? details.titleHi : details.titleEn;
        if (bodyElem) {
            bodyElem.innerHTML = `
                ${lang === "hi" ? details.bodyHi : details.bodyEn}
                <div class="modal-cta-group">
                    <a href="#consultation" class="btn btn-saffron close-modal-navigate">
                        ${lang === "hi" ? "परामर्श बुक करें" : "Book Consultation"}
                    </a>
                    <a href="https://wa.me/${(window.SITE_CONFIG && window.SITE_CONFIG.whatsappNumber) || '918840425538'}" target="_blank" class="btn btn-whatsapp">
                        ${lang === "hi" ? "व्हाट्सएप परामर्श" : "WhatsApp Consultation"}
                    </a>
                </div>
            `;

            const navBtn = bodyElem.querySelector(".close-modal-navigate");
            if (navBtn) {
                navBtn.addEventListener("click", () => this.closeServiceModal());
            }
        }

        serviceModal.classList.add("open");
        document.body.classList.add("modal-open");
    }

    closeServiceModal() {
        const serviceModal = document.getElementById("service-modal");
        if (serviceModal) {
            serviceModal.classList.remove("open");
            document.body.classList.remove("modal-open");
        }
    }

    /* --- Dynamic Links Update --- */
    updateDynamicLinks() {
        const cfg = window.SITE_CONFIG || {};
        const lang = localStorage.getItem("app_language") || "hi";

        // Phone links
        const phoneBtns = document.querySelectorAll(".dynamic-phone-link");
        phoneBtns.forEach(btn => {
            btn.href = `tel:${cfg.phone || '918840425538'}`;
        });

        // WhatsApp links
        const waBtns = document.querySelectorAll(".dynamic-wa-link");
        const defaultMsgHi = "प्रणाम पंडित जी, मुझे कुंडली परामर्श हेतु अपॉइंटमेंट लेना है।";
        const defaultMsgEn = "Pranam Pandit Ji, I would like to book an astrological consultation.";
        const msg = lang === "hi" ? defaultMsgHi : defaultMsgEn;

        waBtns.forEach(btn => {
            btn.href = `https://wa.me/${cfg.whatsappNumber || '918840425538'}?text=${encodeURIComponent(msg)}`;
            btn.target = "_blank";
        });
    }
}

document.addEventListener("DOMContentLoaded", () => {
    window.appController = new AppController();
});
