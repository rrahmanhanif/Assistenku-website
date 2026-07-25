// ======================================================
// PT ASSISTENKU SOLUSI INDONESIA
// Premium Website Script
// Bagian 1/8
// Mobile Menu • Header • Smooth Scroll
// ======================================================

document.addEventListener("DOMContentLoaded", () => {

    /* ==========================================
       MOBILE MENU
    ========================================== */

    const menuIcon = document.getElementById("menuIcon");
    const mobileMenu = document.getElementById("mobileMenu");

    if (menuIcon && mobileMenu) {

        menuIcon.addEventListener("click", () => {
            mobileMenu.classList.toggle("active");
        });

        mobileMenu.querySelectorAll("a").forEach(link => {

            link.addEventListener("click", () => {
                mobileMenu.classList.remove("active");
            });

        });

    }

    /* ==========================================
       HEADER SHADOW
    ========================================== */

    const header = document.querySelector("header");

    function updateHeader() {

        if (!header) return;

        if (window.scrollY > 30) {

            header.classList.add("scrolled");

        } else {

            header.classList.remove("scrolled");

        }

    }

    updateHeader();

    window.addEventListener("scroll", updateHeader);

    /* ==========================================
       SMOOTH SCROLL
    ========================================== */

    document.querySelectorAll('a[href^="#"]').forEach(link => {

        link.addEventListener("click", function (e) {

            const target = document.querySelector(this.getAttribute("href"));

            if (!target) return;

            e.preventDefault();

            window.scrollTo({

                top: target.offsetTop - 100,
                behavior: "smooth"

            });

        });

    });
       /* ==========================================
       FAQ ACCORDION
    ========================================== */

    const faqItems = document.querySelectorAll(".faq-item");

    faqItems.forEach(item => {

        const question = item.querySelector(".faq-question");
        const answer = item.querySelector(".faq-answer");

        if (!question || !answer) return;

        question.addEventListener("click", () => {

            faqItems.forEach(other => {

                if (other !== item) {

                    other.classList.remove("active");

                    const otherAnswer = other.querySelector(".faq-answer");

                    if (otherAnswer) {
                        otherAnswer.style.maxHeight = null;
                    }

                }

            });

            item.classList.toggle("active");

            if (item.classList.contains("active")) {

                answer.style.maxHeight = answer.scrollHeight + "px";

            } else {

                answer.style.maxHeight = null;

            }

        });

    });

    /* ==========================================
       SCROLL REVEAL
    ========================================== */

    const reveals = document.querySelectorAll(

        ".service-card," +
        ".benefit-card," +
        ".commission-card," +
        ".work-card," +
        ".equipment-card," +
        ".qualification-grid div," +
        ".contact-card," +
        ".faq-item"

    );

    function revealOnScroll() {

        reveals.forEach(el => {

            const top = el.getBoundingClientRect().top;

            if (top < window.innerHeight - 80) {

                el.classList.add("show");

            }

        });

    }

    revealOnScroll();

    window.addEventListener("scroll", revealOnScroll);
       /* ==========================================
       COUNTER ANIMATION
    ========================================== */

    let counterPlayed = false;

    function animateCounter() {

        if (counterPlayed) return;

        const section = document.querySelector(".commission");

        if (!section) return;

        const top = section.getBoundingClientRect().top;

        if (top > window.innerHeight - 120) return;

        counterPlayed = true;

        document.querySelectorAll(".commission-card h1").forEach(counter => {

            const text = counter.textContent.replace(/[^\d]/g, "");
            const target = parseInt(text);

            if (isNaN(target)) return;

            let current = 0;
            const duration = 1500;
            const increment = Math.ceil(target / (duration / 16));

            function updateCounter() {

                current += increment;

                if (current > target) current = target;

                counter.textContent = "Rp" + current.toLocaleString("id-ID");

                if (current < target) {

                    requestAnimationFrame(updateCounter);

                }

            }

            updateCounter();

        });

    }

    animateCounter();

    window.addEventListener("scroll", animateCounter);

    /* ==========================================
       FLOATING WHATSAPP
    ========================================== */

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

    /* ==========================================
       COUNTER ANIMATION
    ========================================== */

    let counterPlayed = false;

    function animateCounter() {

        if (counterPlayed) return;

        const section = document.querySelector(".commission");

        if (!section) return;

        const top = section.getBoundingClientRect().top;

        if (top > window.innerHeight - 120) return;

        counterPlayed = true;

        document.querySelectorAll(".commission-card h1").forEach(counter => {

            const text = counter.textContent.replace(/[^\d]/g, "");
            const target = parseInt(text);

            if (isNaN(target)) return;

            let current = 0;
            const duration = 1500;
            const increment = Math.ceil(target / (duration / 16));

            function updateCounter() {

                current += increment;

                if (current > target) current = target;

                counter.textContent = "Rp" + current.toLocaleString("id-ID");

                if (current < target) {

                    requestAnimationFrame(updateCounter);

                }

            }

            updateCounter();

        });

    }

    animateCounter();

    window.addEventListener("scroll", animateCounter);

    /* ==========================================
       FLOATING WHATSAPP
    ========================================== */

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

                              /* ==========================================
       BUTTON HOVER EFFECT
    ========================================== */

    document.querySelectorAll(".btn-primary, .btn-secondary").forEach(btn => {

        btn.addEventListener("mouseenter", () => {

            btn.style.transform = "translateY(-3px)";

        });

        btn.addEventListener("mouseleave", () => {

            btn.style.transform = "translateY(0)";

        });

    });

    /* ==========================================
       RIPPLE EFFECT
    ========================================== */

    document.querySelectorAll(".btn-primary, .btn-secondary").forEach(button => {

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

    /* ==========================================
       PDF BUTTONS
    ========================================== */

    function openPDF(id, file) {

        const button = document.getElementById(id);

        if (!button) return;

        button.addEventListener("click", () => {

            window.open(file, "_blank");

        });

    }

    openPDF("btnBiayaLayanan", "/penawaran.pdf");
    openPDF("btnUnduhFormulir", "/formulir.pdf");

                      /* ==========================================
       SERVICE WORKER
    ========================================== */

    if ("serviceWorker" in navigator) {

        window.addEventListener("load", () => {

            navigator.serviceWorker
                .register("/sw.js")
                .catch(err => console.warn("Service Worker:", err));

        });

    }

    /* ==========================================
       PWA INSTALL
    ========================================== */

    let deferredPrompt = null;

    const installButton = document.getElementById("pwaInstallBtn");

    function updateInstallButton(enabled) {

        if (!installButton) return;

        installButton.disabled = !enabled;
        installButton.style.opacity = enabled ? "1" : ".6";
        installButton.style.cursor = enabled ? "pointer" : "not-allowed";

    }

    updateInstallButton(false);

    window.addEventListener("beforeinstallprompt", (e) => {

        e.preventDefault();

        deferredPrompt = e;

        updateInstallButton(true);

    });

    if (installButton) {

        installButton.addEventListener("click", async () => {

            if (!deferredPrompt) return;

            deferredPrompt.prompt();

            await deferredPrompt.userChoice;

            deferredPrompt = null;

            updateInstallButton(false);

        });

    }

    window.addEventListener("appinstalled", () => {

        deferredPrompt = null;

        updateInstallButton(false);

        console.log("PWA berhasil diinstal.");

    });

                              /* ==========================================
       IMAGE MODAL
    ========================================== */

    const modal = document.getElementById("imageModal");
    const modalImg = document.getElementById("modalImg");
    const modalClose = document.querySelector(".close");
    const images = document.querySelectorAll(".legal-card-img");

    let zoom = 1;

    if (modal && modalImg && images.length > 0) {

        images.forEach(img => {

            img.addEventListener("click", () => {

                modal.style.display = "block";
                modalImg.src = img.src;

                zoom = 1;
                modalImg.style.transform = "scale(1)";

            });

        });

    }

    /* ==========================================
       CLOSE MODAL
    ========================================== */

    if (modalClose && modal) {

        modalClose.addEventListener("click", () => {

            modal.style.display = "none";

        });

    }

    if (modal && modalImg) {

        modal.addEventListener("click", (e) => {

            if (e.target !== modalImg) {

                modal.style.display = "none";

            }

        });

    }

    /* ==========================================
       IMAGE ZOOM
    ========================================== */

    if (modalImg) {

        modalImg.addEventListener("click", () => {

            zoom = zoom === 1 ? 2 : 1;

            modalImg.style.transform = `scale(${zoom})`;

        });

    }

    /* ==========================================
       MOUSE WHEEL ZOOM
    ========================================== */

    if (modal && modalImg) {

        modal.addEventListener("wheel", (e) => {

            e.preventDefault();

            zoom += (e.deltaY < 0) ? 0.2 : -0.2;

            zoom = Math.min(Math.max(zoom, 1), 5);

            modalImg.style.transform = `scale(${zoom})`;

        });

    }

                              /* ==========================================
       KBLI POPUP
    ========================================== */

    const kbliPopup = document.getElementById("kbliPopup");
    const closeKbli = document.getElementById("closeKbli");

    if (kbliPopup) {

        window.addEventListener("load", () => {

            kbliPopup.style.display = "flex";

        });

        if (closeKbli) {

            closeKbli.addEventListener("click", () => {

                kbliPopup.style.display = "none";

            });

        }

        kbliPopup.addEventListener("click", (e) => {

            if (e.target === kbliPopup) {

                kbliPopup.style.display = "none";

            }

        });

    }

    /* ==========================================
       PRELOAD IMAGE
    ========================================== */

    document.querySelectorAll("img").forEach(img => {

        if (img.complete) return;

        img.addEventListener("load", () => {

            img.classList.add("loaded");

        });

    });

    /* ==========================================
       EXTERNAL LINK
    ========================================== */

    document.querySelectorAll('a[target="_blank"]').forEach(link => {

        if (!link.hasAttribute("rel")) {

            link.setAttribute("rel", "noopener noreferrer");

        }

    });

    /* ==========================================
       BACK TO TOP (AUTO)
    ========================================== */

    const backTop = document.getElementById("backToTop");

    if (backTop) {

        window.addEventListener("scroll", () => {

            if (window.scrollY > 500) {

                backTop.classList.add("show");

            } else {

                backTop.classList.remove("show");

            }

        });

        backTop.addEventListener("click", () => {

            window.scrollTo({

                top: 0,
                behavior: "smooth"

            });

        });

    }

    /* ==========================================
       DEBUG MODE
    ========================================== */

    console.log("Assistenku Premium Script Loaded ✔");

                              /* ==========================================
       PERFORMANCE OPTIMIZATION
    ========================================== */

    window.addEventListener("pageshow", () => {

        revealOnScroll();
        animateCounter();
        updateHeader();
        updateFloatingWA();

    });

    /* ==========================================
       WINDOW RESIZE
    ========================================== */

    window.addEventListener("resize", () => {

        revealOnScroll();

    });

    /* ==========================================
       ERROR SAFETY
    ========================================== */

    window.addEventListener("error", (e) => {

        console.warn("Script Warning:", e.message);

    });

    /* ==========================================
       FINAL INITIALIZATION
    ========================================== */

    console.log("====================================");
    console.log("PT ASSISTENKU SOLUSI INDONESIA");
    console.log("Premium Website Script Loaded");
    console.log("Version : 1.0");
    console.log("Status  : Ready");
    console.log("====================================");

});
