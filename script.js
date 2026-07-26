// ======================================================
// PT ASSISTENKU SOLUSI INDONESIA
// Premium Website Script
// Part 1 / 8
// Core Initialization
// Header
// Mobile Menu
// Smooth Scroll
// ======================================================

document.addEventListener("DOMContentLoaded", () => {

    "use strict";

    // ==================================================
    // Helper
    // ==================================================

    const $ = (selector) => document.querySelector(selector);
    const $$ = (selector) => document.querySelectorAll(selector);

    // ==================================================
    // Header Shadow
    // ==================================================

    const header = $("header");

    function updateHeader() {

        if (!header) return;

        header.classList.toggle(
            "scrolled",
            window.scrollY > 30
        );

    }

    updateHeader();

    window.addEventListener("scroll", updateHeader);

    // ==================================================
    // Mobile Menu
    // ==================================================

    const menuButton = document.getElementById("menuButton");
const mobileMenu = document.getElementById("mobileMenu");

if(menuButton && mobileMenu){

    menuButton.addEventListener("click",()=>{

        mobileMenu.classList.toggle("active");

        menuButton.classList.toggle("active");

    });

    mobileMenu.querySelectorAll("a").forEach(link=>{

        link.addEventListener("click",()=>{

            mobileMenu.classList.remove("active");
            menuButton.classList.remove("active");

        });

    });

}
    // ==================================================
    // Smooth Scroll
    // ==================================================

    $$('a[href^="#"]').forEach(link => {

        link.addEventListener("click", function (e) {

            const href = this.getAttribute("href");

            if (!href || href === "#") return;

            const target = document.querySelector(href);

            if (!target) return;

            e.preventDefault();

            const offset = header
                ? header.offsetHeight + 20
                : 100;

            window.scrollTo({

                top: target.offsetTop - offset,
                behavior: "smooth"

            });

        });

    });

    console.log("Script Part 1 Loaded");
// ======================================================
// PT ASSISTENKU SOLUSI INDONESIA
// Premium Website Script
// Part 2 / 8
// Scroll Reveal
// Counter Animation
// Floating WhatsApp
// Back To Top
// ======================================================

    // ==================================================
    // Scroll Reveal
    // ==================================================

    const revealItems = document.querySelectorAll(
        ".service-card," +
        ".benefit-card," +
        ".commission-card," +
        ".work-card," +
        ".equipment-card," +
        ".qualification-grid > div," +
        ".contact-card," +
        ".faq-item"
    );

    revealItems.forEach(item => {
        item.classList.add("fade-up");
    });

    function revealOnScroll() {

        revealItems.forEach(item => {

            const position = item.getBoundingClientRect().top;

            if (position < window.innerHeight - 80) {
                item.classList.add("show");
            }

        });

    }

    revealOnScroll();

    window.addEventListener("scroll", revealOnScroll);

    // ==================================================
    // Counter Animation
    // ==================================================

    let counterAnimated = false;

    function animateCounter() {

        if (counterAnimated) return;

        const section = document.querySelector(".commission");

        if (!section) return;

        const top = section.getBoundingClientRect().top;

        if (top > window.innerHeight - 120) return;

        counterAnimated = true;

        document.querySelectorAll(".commission-card h1").forEach(counter => {

            const target = parseInt(
                counter.textContent.replace(/[^\d]/g, "")
            );

            if (isNaN(target)) return;

            let current = 0;

            const speed = Math.ceil(target / 90);

            function update() {

                current += speed;

                if (current >= target) {

                    current = target;

                }

                counter.textContent =
                    "Rp " + current.toLocaleString("id-ID");

                if (current < target) {

                    requestAnimationFrame(update);

                }

            }

            update();

        });

    }

    animateCounter();

    window.addEventListener("scroll", animateCounter);

    // ==================================================
    // Floating WhatsApp
    // ==================================================

    const floatingWA = document.querySelector(".floating-wa");

    function updateFloatingWA() {

        if (!floatingWA) return;

        if (window.scrollY > 200) {

            floatingWA.style.opacity = "1";
            floatingWA.style.transform = "translateY(0)";

        } else {

            floatingWA.style.opacity = ".85";
            floatingWA.style.transform = "translateY(10px)";

        }

    }

    updateFloatingWA();

    window.addEventListener("scroll", updateFloatingWA);

    // ==================================================
    // Back To Top
    // ==================================================

    const backToTop = document.getElementById("backToTop");

    if (backToTop) {

        window.addEventListener("scroll", () => {

            backToTop.classList.toggle(
                "show",
                window.scrollY > 500
            );

        });

        backToTop.addEventListener("click", () => {

            window.scrollTo({

                top: 0,
                behavior: "smooth"

            });

        });

    }

    console.log("Script Part 2 Loaded");

    // ==================================================
    // FAQ Accordion
    // ==================================================

    const faqItems = document.querySelectorAll(".faq-item");

    faqItems.forEach(item => {

        const question = item.querySelector(".faq-question");
        const answer = item.querySelector(".faq-answer");

        if (!question || !answer) return;

        question.addEventListener("click", () => {

            faqItems.forEach(other => {

                if (other === item) return;

                other.classList.remove("active");

                const otherAnswer = other.querySelector(".faq-answer");

                if (otherAnswer) {
                    otherAnswer.style.maxHeight = null;
                }

            });

            item.classList.toggle("active");

            answer.style.maxHeight = item.classList.contains("active")
                ? answer.scrollHeight + "px"
                : null;

        });

    });

    // ==================================================
    // Button Hover Effect
    // ==================================================

    document
        .querySelectorAll(".btn-primary, .btn-secondary, .btn-outline")
        .forEach(button => {

            button.addEventListener("mouseenter", () => {

                button.style.transform = "translateY(-3px)";

            });

            button.addEventListener("mouseleave", () => {

                button.style.transform = "";

            });

        });

    // ==================================================
    // Ripple Effect
    // ==================================================

    document
        .querySelectorAll(".btn-primary, .btn-secondary")
        .forEach(button => {

            button.addEventListener("click", function (e) {

                const ripple = document.createElement("span");

                ripple.className = "ripple";

                const rect = this.getBoundingClientRect();

                ripple.style.left = (e.clientX - rect.left) + "px";
                ripple.style.top = (e.clientY - rect.top) + "px";

                this.appendChild(ripple);

                setTimeout(() => {

                    ripple.remove();

                }, 600);

            });

        });

    // ==================================================
    // PDF Buttons
    // ==================================================

    function bindPDFButton(id, file) {

        const button = document.getElementById(id);

        if (!button) return;

        button.addEventListener("click", () => {

            window.open(file, "_blank");

        });

    }

    bindPDFButton("btnBiayaLayanan", "/penawaran.pdf");
    bindPDFButton("btnUnduhFormulir", "/formulir.pdf");

    console.log("Script Part 3 Loaded");

    // ==================================================
    // Service Worker
    // ==================================================

    if ("serviceWorker" in navigator) {

        window.addEventListener("load", () => {

            navigator.serviceWorker
                .register("/sw.js")
                .catch(err => console.warn("Service Worker:", err));

        });

    }

    // ==================================================
    // PWA Install
    // ==================================================

    let deferredPrompt = null;

    const installButton = document.getElementById("pwaInstallBtn");

    function setInstallButtonState(enabled) {

        if (!installButton) return;

        installButton.disabled = !enabled;
        installButton.style.opacity = enabled ? "1" : ".6";
        installButton.style.cursor = enabled ? "pointer" : "not-allowed";

    }

    setInstallButtonState(false);

    window.addEventListener("beforeinstallprompt", (event) => {

        event.preventDefault();

        deferredPrompt = event;

        setInstallButtonState(true);

    });

    if (installButton) {

        installButton.addEventListener("click", async () => {

            if (!deferredPrompt) return;

            deferredPrompt.prompt();

            await deferredPrompt.userChoice;

            deferredPrompt = null;

            setInstallButtonState(false);

        });

    }

    // ==================================================
    // App Installed
    // ==================================================

    window.addEventListener("appinstalled", () => {

        deferredPrompt = null;

        setInstallButtonState(false);

    });


    // ==================================================
    // External Link Security
    // ==================================================

    document
        .querySelectorAll('a[target="_blank"]')
        .forEach(link => {

            if (!link.hasAttribute("rel")) {

                link.setAttribute(
                    "rel",
                    "noopener noreferrer"
                );

            }

        });

    // ==================================================
    // IMAGE MODAL
    // ==================================================

    const imageModal = document.getElementById("imageModal");
    const modalImage = document.getElementById("modalImg");
    const modalClose = document.querySelector(".close");
    const galleryImages = document.querySelectorAll(".legal-card-img");

    let imageZoom = 1;

    if (imageModal && modalImage && galleryImages.length) {

        galleryImages.forEach(image => {

            image.addEventListener("click", () => {

                imageModal.style.display = "block";

                modalImage.src = image.src;
                modalImage.alt = image.alt || "";

                imageZoom = 1;

                modalImage.style.transform = "scale(1)";

            });

        });

    }

    // ==================================================
    // CLOSE IMAGE MODAL
    // ==================================================

    if (modalClose && imageModal) {

        modalClose.addEventListener("click", () => {

            imageModal.style.display = "none";

        });

    }

    if (imageModal && modalImage) {

        imageModal.addEventListener("click", (event) => {

            if (event.target === imageModal) {

                imageModal.style.display = "none";

            }

        });

    }

    // ==================================================
    // IMAGE ZOOM
    // ==================================================

    if (modalImage) {

        modalImage.addEventListener("click", () => {

            imageZoom = imageZoom === 1 ? 2 : 1;

            modalImage.style.transform =
                `scale(${imageZoom})`;

        });

    }

    // ==================================================
    // MOUSE WHEEL ZOOM
    // ==================================================

    if (imageModal && modalImage) {

        imageModal.addEventListener("wheel", (event) => {

            event.preventDefault();

            imageZoom += event.deltaY < 0 ? 0.2 : -0.2;

            imageZoom = Math.min(
                Math.max(imageZoom, 1),
                5
            );

            modalImage.style.transform =
                `scale(${imageZoom})`;

        });

    }

/* =========================================================
   KBLI POPUP
========================================================= */

const kbliPopup = document.getElementById("kbliPopup");
const closeKbli = document.getElementById("closeKbli");

if (kbliPopup && closeKbli) {

    closeKbli.addEventListener("click", () => {
        kbliPopup.style.display = "none";
    });

}
    // ==================================================
    // PRELOAD IMAGE
    // ==================================================

    document.querySelectorAll("img").forEach(img => {

        if (img.complete) {

            img.classList.add("loaded");
            return;

        }

        img.addEventListener("load", () => {

            img.classList.add("loaded");

        });

    });

    // ==================================================
    // WINDOW RESIZE
    // ==================================================

    window.addEventListener("resize", () => {

        if (typeof revealOnScroll === "function") {
            revealOnScroll();
        }

        if (typeof updateHeader === "function") {
            updateHeader();
        }

        if (typeof updateFloatingWA === "function") {
            updateFloatingWA();
        }

    });

    // ==================================================
    // PAGE SHOW
    // ==================================================

    window.addEventListener("pageshow", () => {

        if (typeof revealOnScroll === "function") {
            revealOnScroll();
        }

        if (typeof animateCounter === "function") {
            animateCounter();
        }

        if (typeof updateHeader === "function") {
            updateHeader();
        }

        if (typeof updateFloatingWA === "function") {
            updateFloatingWA();
        }

    });

    // ==================================================
    // VISIBILITY CHANGE
    // ==================================================

    document.addEventListener("visibilitychange", () => {

        if (document.hidden) return;

        if (typeof revealOnScroll === "function") {
            revealOnScroll();
        }

        if (typeof updateHeader === "function") {
            updateHeader();
        }

    });

    // ==================================================
    // ORIENTATION CHANGE
    // ==================================================

    window.addEventListener("orientationchange", () => {

        setTimeout(() => {

            if (typeof revealOnScroll === "function") {
                revealOnScroll();
            }

        }, 300);

    });

    // ==================================================
    // IMAGE ERROR FALLBACK
    // ==================================================

    document.querySelectorAll("img").forEach(img => {

        img.addEventListener("error", () => {

            img.classList.add("image-error");

        });

    });

    // ==================================================
    // BACK TO TOP
    // ==================================================

    const backToTop = document.getElementById("backToTop");

    if (backToTop) {

        function toggleBackToTop() {

            if (window.scrollY > 500) {

                backToTop.classList.add("show");

            } else {

                backToTop.classList.remove("show");

            }

        }

        toggleBackToTop();

        window.addEventListener("scroll", toggleBackToTop);

        backToTop.addEventListener("click", () => {

            window.scrollTo({

                top: 0,
                behavior: "smooth"

            });

        });

    }

// ==================================================
    // ESC KEY
    // ==================================================

    document.addEventListener("keydown", (event) => {

        if (event.key !== "Escape") return;

        if (typeof imageModal !== "undefined" && imageModal) {

            imageModal.style.display = "none";

        }

        if (typeof kbliPopup !== "undefined" && kbliPopup) {

            kbliPopup.style.display = "none";

        }

        if (typeof mobileMenu !== "undefined" && mobileMenu) {

            mobileMenu.classList.remove("active");

        }

    });

    // ==================================================
    // WINDOW ERROR
    // ==================================================

    window.addEventListener("error", (event) => {

        console.warn("Script Warning:", event.message);

    });

    // ==================================================
    // UNHANDLED PROMISE
    // ==================================================

    window.addEventListener("unhandledrejection", (event) => {

        console.warn("Unhandled Promise:", event.reason);

    });

    // ==================================================
    // ONLINE / OFFLINE
    // ==================================================

    window.addEventListener("online", () => {

        document.body.classList.remove("offline");

    });

    window.addEventListener("offline", () => {

        document.body.classList.add("offline");

    });

    // ==================================================
    // REDUCE MOTION SUPPORT
    // ==================================================

    const reduceMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
    );

    if (reduceMotion.matches) {

        document.documentElement.style.scrollBehavior = "auto";

    }

    // ==================================================
    // FINAL INITIALIZATION
    // ==================================================

    if (typeof updateHeader === "function") {
        updateHeader();
    }

    if (typeof revealOnScroll === "function") {
        revealOnScroll();
    }

    if (typeof animateCounter === "function") {
        animateCounter();
    }

    if (typeof updateFloatingWA === "function") {
        updateFloatingWA();
    }

    // ==================================================
    // INITIAL STATE
    // ==================================================

    document.body.classList.add("js-enabled");

    // ==================================================
    // PERFORMANCE
    // ==================================================

    requestAnimationFrame(() => {

        if (typeof revealOnScroll === "function") {
            revealOnScroll();
        }

    });

    // ==================================================
    // DEBUG INFORMATION
    // ==================================================

    console.log("====================================");
    console.log("PT ASSISTENKU SOLUSI INDONESIA");
    console.log("Premium Website Script");
    console.log("Version : 2.0");
    console.log("Status  : Ready");
    console.log("====================================");

}); // END DOMContentLoaded
