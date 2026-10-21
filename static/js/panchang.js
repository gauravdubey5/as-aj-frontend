/**
 * Panchang and Rashifal Component Logic
 * Renders daily panchang elements and 12 Zodiac horoscope grid + detailed modals.
 */

class PanchangRashifal {
    constructor() {
        this.init();
    }

    init() {
        this.renderDate();
        this.renderPanchang();
        this.renderHoroscopes();
        this.bindModalEvents();

        // Listen for language changes
        document.addEventListener("languageChanged", () => {
            this.renderDate();
            this.renderPanchang();
            this.renderHoroscopes();
        });
    }

    renderDate() {
        const dateContainer = document.getElementById("current-panchang-date");
        if (!dateContainer) return;

        const now = new Date();
        const lang = localStorage.getItem("app_language") || "hi";

        const optionsHi = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        const dateStrHi = now.toLocaleDateString('hi-IN', optionsHi);
        const dateStrEn = now.toLocaleDateString('en-US', optionsHi);

        if (lang === "hi") {
            dateContainer.innerHTML = `<strong>आज का पंचांग दिनांक:</strong> ${dateStrHi}`;
        } else {
            dateContainer.innerHTML = `<strong>Panchang Date:</strong> ${dateStrEn}`;
        }
    }

    renderPanchang() {
        const panchangGrid = document.getElementById("panchang-grid");
        if (!panchangGrid) return;

        const lang = localStorage.getItem("app_language") || "hi";
        const data = window.panchangData || {};

        const cards = [
            { key: "tithi", titleHi: "तिथि", titleEn: "Tithi", icon: "🌕", val: data.tithi ? data.tithi[lang] : "" },
            { key: "nakshatra", titleHi: "नक्षत्र", titleEn: "Nakshatra", icon: "⭐", val: data.nakshatra ? data.nakshatra[lang] : "" },
            { key: "yoga", titleHi: "योग", titleEn: "Yoga", icon: "☸️", val: data.yoga ? data.yoga[lang] : "" },
            { key: "karan", titleHi: "करण", titleEn: "Karan", icon: "🪔", val: data.karan ? data.karan[lang] : "" },
            { key: "rahuKaal", titleHi: "राहु काल", titleEn: "Rahu Kaal", icon: "⌛", val: data.rahuKaal ? data.rahuKaal[lang] : "" },
            { key: "shubhMuhurat", titleHi: "शुभ मुहूर्त", titleEn: "Shubh Muhurat", icon: "✨", val: data.shubhMuhurat ? data.shubhMuhurat[lang] : "" }
        ];

        panchangGrid.innerHTML = cards.map(c => `
            <div class="panchang-card">
                <div class="panchang-card-icon">${c.icon}</div>
                <div class="panchang-card-content">
                    <h4>${lang === "hi" ? c.titleHi : c.titleEn}</h4>
                    <p>${c.val}</p>
                </div>
            </div>
        `).join('');
    }

    renderHoroscopes() {
        const horoscopeGrid = document.getElementById("horoscope-grid");
        if (!horoscopeGrid) return;

        const lang = localStorage.getItem("app_language") || "hi";
        const data = window.horoscopesData || {};

        const html = Object.keys(data).map(key => {
            const r = data[key];
            const name = lang === "hi" ? r.hiName : r.enName;
            const shortText = lang === "hi" ? r.shortHi : r.shortEn;
            const btnText = lang === "hi" ? "विस्तृत राशिफल पढ़ें" : "Read Full Rashifal";

            return `
                <div class="horoscope-card" data-rashi="${r.id}">
                    <div class="rashi-symbol">${r.symbol}</div>
                    <h3 class="rashi-name">${name}</h3>
                    <div class="rashi-subname">${lang === "hi" ? r.enName : r.hiName}</div>
                    <p class="rashi-short">${shortText}</p>
                    <button class="btn btn-outline-gold view-rashi-btn" data-rashi="${r.id}">
                        ${btnText}
                    </button>
                </div>
            `;
        }).join('');

        horoscopeGrid.innerHTML = html;

        // Add event listeners to buttons
        const btns = horoscopeGrid.querySelectorAll(".view-rashi-btn");
        btns.forEach(btn => {
            btn.addEventListener("click", (e) => {
                const rashiId = e.currentTarget.dataset.rashi;
                this.openRashifalModal(rashiId);
            });
        });
    }

    openRashifalModal(rashiId) {
        const data = window.horoscopesData ? window.horoscopesData[rashiId] : null;
        if (!data) return;

        const lang = localStorage.getItem("app_language") || "hi";
        const modal = document.getElementById("rashi-modal");
        if (!modal) return;

        const titleElem = modal.querySelector("#rashi-modal-title");
        const symbolElem = modal.querySelector("#rashi-modal-symbol");
        const bodyElem = modal.querySelector("#rashi-modal-body");

        if (titleElem) titleElem.textContent = `${data.symbol} ${lang === "hi" ? data.hiName : data.enName} (${lang === "hi" ? data.enName : data.hiName})`;
        if (symbolElem) symbolElem.textContent = data.symbol;
        if (bodyElem) {
            bodyElem.innerHTML = `
                <p class="rashi-full-text">${lang === "hi" ? data.fullHi : data.fullEn}</p>
                <div class="rashi-disclaimer">
                    <small>* ${lang === "hi" ? "यह सामान्य राशिफल ग्रहों की चाल पर आधारित है। व्यक्तिगत कुंडली हेतु परामर्श बुक करें।" : "This is a general horoscope prediction. For personal horoscope analysis, book a consultation."}</small>
                </div>
            `;
        }

        modal.classList.add("open");
        document.body.classList.add("modal-open");
    }

    bindModalEvents() {
        const modal = document.getElementById("rashi-modal");
        if (!modal) return;

        const closeBtn = modal.querySelector(".modal-close");
        if (closeBtn) {
            closeBtn.addEventListener("click", () => this.closeRashifalModal());
        }

        modal.addEventListener("click", (e) => {
            if (e.target === modal) {
                this.closeRashifalModal();
            }
        });

        document.addEventListener("keydown", (e) => {
            if (e.key === "Escape" && modal.classList.contains("open")) {
                this.closeRashifalModal();
            }
        });
    }

    closeRashifalModal() {
        const modal = document.getElementById("rashi-modal");
        if (modal) {
            modal.classList.remove("open");
            document.body.classList.remove("modal-open");
        }
    }
}

document.addEventListener("DOMContentLoaded", () => {
    new PanchangRashifal();
});
