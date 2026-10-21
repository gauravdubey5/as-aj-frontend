/**
 * Consultation Booking Form Logic
 * Multi-step frontend wizard, validation, and dynamic WhatsApp/Mailto generator.
 */

class BookingFormManager {
    constructor() {
        this.selectedMode = "30-Min Video Call";
        this.init();
    }

    init() {
        this.form = document.getElementById("consultation-form");
        if (!this.form) return;

        this.bindModeSelection();
        this.bindTimeUnknownCheckbox();
        this.bindFormSubmit();
        this.bindResultModalEvents();
    }

    bindModeSelection() {
        const modeCards = document.querySelectorAll(".consultation-mode-card");
        modeCards.forEach(card => {
            card.addEventListener("click", () => {
                modeCards.forEach(c => c.classList.remove("active"));
                card.classList.add("active");
                this.selectedMode = card.dataset.mode || "Consultation";
                const radio = card.querySelector("input[type='radio']");
                if (radio) radio.checked = true;
            });
        });
    }

    bindTimeUnknownCheckbox() {
        const unknownCheck = document.getElementById("tob-unknown");
        const tobInput = document.getElementById("tob");
        if (unknownCheck && tobInput) {
            unknownCheck.addEventListener("change", (e) => {
                if (e.target.checked) {
                    tobInput.value = "";
                    tobInput.disabled = true;
                    tobInput.required = false;
                    tobInput.classList.remove("error");
                } else {
                    tobInput.disabled = false;
                    tobInput.required = true;
                }
            });
        }
    }

    bindFormSubmit() {
        this.form.addEventListener("submit", (e) => {
            e.preventDefault();
            if (this.validateForm()) {
                this.processFormSubmission();
            }
        });
    }

    validateForm() {
        let isValid = true;
        const requiredFields = this.form.querySelectorAll("[required]");

        requiredFields.forEach(field => {
            if (field.disabled) return;
            
            if (!field.value.trim()) {
                this.showFieldError(field, "This field is required / यह स्थान अनिवार्य है");
                isValid = false;
            } else {
                this.clearFieldError(field);
            }
        });

        // Email validation
        const emailField = document.getElementById("email");
        if (emailField && emailField.value.trim()) {
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailPattern.test(emailField.value.trim())) {
                this.showFieldError(emailField, "Please enter a valid email address");
                isValid = false;
            }
        }

        // Phone validation
        const phoneField = document.getElementById("phone");
        if (phoneField && phoneField.value.trim()) {
            const cleanPhone = phoneField.value.replace(/[^0-9]/g, "");
            if (cleanPhone.length < 7) {
                this.showFieldError(phoneField, "Please enter a valid contact / WhatsApp number");
                isValid = false;
            }
        }

        // Check if at least one concern is selected
        const concerns = this.form.querySelectorAll("input[name='concern']:checked");
        const concernContainer = document.getElementById("concern-group-container");
        if (concerns.length === 0 && concernContainer) {
            this.showContainerError(concernContainer, "Please select at least one primary concern / विषय चुनें");
            isValid = false;
        } else if (concernContainer) {
            this.clearContainerError(concernContainer);
        }

        return isValid;
    }

    showFieldError(field, msg) {
        field.classList.add("error");
        let errSpan = field.parentNode.querySelector(".field-error-msg");
        if (!errSpan) {
            errSpan = document.createElement("span");
            errSpan.className = "field-error-msg";
            field.parentNode.appendChild(errSpan);
        }
        errSpan.textContent = msg;
    }

    clearFieldError(field) {
        field.classList.remove("error");
        const errSpan = field.parentNode.querySelector(".field-error-msg");
        if (errSpan) errSpan.remove();
    }

    showContainerError(container, msg) {
        let errSpan = container.querySelector(".field-error-msg");
        if (!errSpan) {
            errSpan = document.createElement("span");
            errSpan.className = "field-error-msg";
            container.appendChild(errSpan);
        }
        errSpan.textContent = msg;
    }

    clearContainerError(container) {
        const errSpan = container.querySelector(".field-error-msg");
        if (errSpan) errSpan.remove();
    }

    processFormSubmission() {
        const name = document.getElementById("fullName").value.trim();
        const gender = document.querySelector("input[name='gender']:checked") ? document.querySelector("input[name='gender']:checked").value : "Not specified";
        const dob = document.getElementById("dob").value;
        const tobUnknown = document.getElementById("tob-unknown") ? document.getElementById("tob-unknown").checked : false;
        const tob = tobUnknown ? "Time Unknown / Approximate" : document.getElementById("tob").value;
        const pob = document.getElementById("pob").value.trim();
        
        const selectedConcerns = Array.from(document.querySelectorAll("input[name='concern']:checked")).map(cb => cb.value).join(", ");
        const phone = document.getElementById("phone").value.trim();
        const email = document.getElementById("email").value.trim();

        const lang = localStorage.getItem("app_language") || "hi";

        // Construct message for WhatsApp & Email
        let messageHi = `प्रणाम पूज्य एस्ट्रो आशीष जी,\n\nमैं आपसे कुंडली परामर्श बुक करना चाहता/चाहती हूँ।\n\n` +
            `📋 *परामर्श प्रकार:* ${this.selectedMode}\n` +
            `👤 *नाम:* ${name}\n` +
            `👫 *लिंग:* ${gender}\n` +
            `📅 *जन्म तिथि:* ${dob}\n` +
            `⏰ *जन्म समय:* ${tob}\n` +
            `📍 *जन्म स्थान:* ${pob}\n` +
            `❓ *मुख्य विषय:* ${selectedConcerns}\n` +
            `📱 *व्हाट्सएप नंबर:* ${phone}\n` +
            `📧 *ईमेल:* ${email}\n\n` +
            `कृपया मुझे अपॉइंटमेंट की पुष्टि एवं आगे की प्रक्रिया बताएं। धन्यवाद।`;

        let messageEn = `Pranam Pandit Ji,\n\nI would like to book an astrological consultation.\n\n` +
            `📋 *Consultation Mode:* ${this.selectedMode}\n` +
            `👤 *Full Name:* ${name}\n` +
            `👫 *Gender:* ${gender}\n` +
            `📅 *Date of Birth:* ${dob}\n` +
            `⏰ *Time of Birth:* ${tob}\n` +
            `📍 *Place of Birth:* ${pob}\n` +
            `❓ *Primary Concern:* ${selectedConcerns}\n` +
            `📱 *WhatsApp:* ${phone}\n` +
            `📧 *Email:* ${email}\n\n` +
            `Please confirm the appointment timing and next steps. Thank you.`;

        const finalMessage = lang === "hi" ? messageHi : messageEn;

        // Configure links
        const whatsappNum = (window.SITE_CONFIG && window.SITE_CONFIG.whatsappNumber) || "918840425538";
        const whatsappUrl = `https://wa.me/${whatsappNum}?text=${encodeURIComponent(finalMessage)}`;

        const siteEmail = (window.SITE_CONFIG && window.SITE_CONFIG.email) || "[ADD VERIFIED EMAIL]";
        const mailtoUrl = `mailto:${siteEmail}?subject=${encodeURIComponent("Kundli Consultation Request - " + name)}&body=${encodeURIComponent(finalMessage)}`;

        const phoneNum = (window.SITE_CONFIG && window.SITE_CONFIG.phone) || "918840425538";
        const telUrl = `tel:${phoneNum}`;

        // Populate Result Modal
        const resModal = document.getElementById("booking-result-modal");
        if (resModal) {
            const waBtn = resModal.querySelector("#modal-wa-btn");
            const mailBtn = resModal.querySelector("#modal-mail-btn");
            const callBtn = resModal.querySelector("#modal-call-btn");

            if (waBtn) waBtn.href = whatsappUrl;
            if (mailBtn) mailBtn.href = mailtoUrl;
            if (callBtn) callBtn.href = telUrl;

            resModal.classList.add("open");
            document.body.classList.add("modal-open");
        }
    }

    bindResultModalEvents() {
        const modal = document.getElementById("booking-result-modal");
        if (!modal) return;

        const closeBtn = modal.querySelector(".modal-close");
        if (closeBtn) {
            closeBtn.addEventListener("click", () => this.closeResultModal());
        }

        modal.addEventListener("click", (e) => {
            if (e.target === modal) this.closeResultModal();
        });
    }

    closeResultModal() {
        const modal = document.getElementById("booking-result-modal");
        if (modal) {
            modal.classList.remove("open");
            document.body.classList.remove("modal-open");
        }
    }
}

document.addEventListener("DOMContentLoaded", () => {
    new BookingFormManager();
});
