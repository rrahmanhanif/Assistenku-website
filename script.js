// ======================================================
// PT ASSISTENKU SOLUSI INDONESIA
// Premium Website Script
// Part 1 / 6
// Core Initialization
// ======================================================

"use strict";

document.addEventListener("DOMContentLoaded", () => {

    console.log("====================================");
    console.log("PT ASSISTENKU SOLUSI INDONESIA");
    console.log("Premium Website Script");
    console.log("Version : 2.0");
    console.log("Status  : Initializing...");
    console.log("====================================");

    /* ==========================================
       GLOBAL SELECTOR
    ========================================== */

    const $ = (selector, scope = document) =>
        scope.querySelector(selector);

    const $$ = (selector, scope = document) =>
        [...scope.querySelectorAll(selector)];

    /* ==========================================
       HEADER
    ========================================== */

    const header = $("header");

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

    $$('a[href^="#"]').forEach(link => {

        link.addEventListener("click", function (e) {

            const href = this.getAttribute("href");

            if (!href || href === "#") return;

            const target = $(href);

            if (!target) return;

            e.preventDefault();

            const offset = header ? header.offsetHeight + 20 : 0;

            window.scrollTo({

                top: target.offsetTop - offset,

                behavior: "smooth"

            });

        });

    });

    /* ==========================================
       HELPER
    ========================================== */

    function isVisible(element, offset = 100) {

        if (!element) return false;

        return element.getBoundingClientRect().top <
            window.innerHeight - offset;

    }

    function debounce(callback, delay = 100) {

        let timer;

        return (...args) => {

            clearTimeout(timer);

            timer = setTimeout(() => {

                callback.apply(this, args);

            }, delay);

        };

    }

    /* ==========================================
       GLOBAL EVENTS
    ========================================== */

    window.addEventListener("pageshow", () => {

        updateHeader();

    });

    window.addEventListener("resize", debounce(() => {

        updateHeader();

    }, 150));

    /* ==========================================
       READY
    ========================================== */

    console.log("Core Initialization Loaded ✔");
    
    /* ==========================================
       MOBILE MENU
    ========================================== */

    const menuButton =
        $("#menuIcon") ||
        $(".menu-toggle") ||
        $(".hamburger");

    const mobileMenu =
        $("#mobileMenu") ||
        $(".mobile-nav") ||
        $(".mobile-menu");

    if (menuButton && mobileMenu) {

        menuButton.addEventListener("click", () => {

            mobileMenu.classList.toggle("active");
            menuButton.classList.toggle("active");

            document.body.classList.toggle(
                "menu-open",
                mobileMenu.classList.contains("active")
            );

        });

        $$("a", mobileMenu).forEach(link => {

            link.addEventListener("click", () => {

                mobileMenu.classList.remove("active");
                menuButton.classList.remove("active");
                document.body.classList.remove("menu-open");

            });

        });

        document.addEventListener("click", (e) => {

            if (
                !mobileMenu.contains(e.target) &&
                !menuButton.contains(e.target)
            ) {

                mobileMenu.classList.remove("active");
                menuButton.classList.remove("active");
                document.body.classList.remove("menu-open");

            }

        });

    }

    /* ==========================================
       ACTIVE NAVIGATION
    ========================================== */

    const sections = $$("section[id]");
    const navLinks = $$("nav a, .mobile-nav a");

    function updateActiveMenu() {

        let current = "";

        sections.forEach(section => {

            const top = section.offsetTop - 140;

            if (window.scrollY >= top) {

                current = section.id;

            }

        });

        navLinks.forEach(link => {

            link.classList.remove("active");

            const href = link.getAttribute("href");

            if (href === "#" + current) {

                link.classList.add("active");

            }

        });

    }

    updateActiveMenu();

    window.addEventListener("scroll", updateActiveMenu);

    /* ==========================================
       BACK TO TOP
    ========================================== */

    const backTop =
        $("#backToTop");

    if (backTop) {

        function updateBackTop() {

            if (window.scrollY > 500) {

                backTop.classList.add("show");

            } else {

                backTop.classList.remove("show");

            }

        }

        updateBackTop();

        window.addEventListener("scroll", updateBackTop);

        backTop.addEventListener("click", () => {

            window.scrollTo({

                top: 0,

                behavior: "smooth"

            });

        });

    }

    /* ==========================================
       FLOATING WHATSAPP
    ========================================== */

    const floatingWA =
        $(".floating-wa");

    if (floatingWA) {

        function updateFloatingWA() {

            if (window.scrollY > 200) {

                floatingWA.style.opacity = "1";
                floatingWA.style.transform =
                    "translateY(0)";

            } else {

                floatingWA.style.opacity = ".85";
                floatingWA.style.transform =
                    "translateY(10px)";

            }

        }

        updateFloatingWA();

        window.addEventListener(
            "scroll",
            updateFloatingWA
        );

    }

    console.log("Navigation Loaded ✔");


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

            const target = parseInt(
                counter.textContent.replace(/[^\d]/g, "")
            );

            if (isNaN(target)) return;

            let current = 0;
            const duration = 1500;
            const step = Math.ceil(target / (duration / 16));

            function update() {

                current += step;

                if (current > target) {
                    current = target;
                }

                counter.textContent =
                    "Rp" + current.toLocaleString("id-ID");

                if (current < target) {
                    requestAnimationFrame(update);
                }

            }

            update();

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

    document.querySelectorAll(
        ".btn-primary, .btn-secondary"
    ).forEach(btn => {

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

    document.querySelectorAll(
        ".btn-primary, .btn-secondary"
    ).forEach(button => {

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
                .catch(err => {

                    console.warn("Service Worker:", err);

                });

        });

    }

    /* ==========================================
       PWA INSTALL
    ========================================== */

    let deferredPrompt = null;

    const installButton =
        document.getElementById("pwaInstallBtn");

    function updateInstallButton(enabled) {

        if (!installButton) return;

        installButton.disabled = !enabled;
        installButton.style.opacity = enabled ? "1" : ".6";
        installButton.style.cursor = enabled
            ? "pointer"
            : "not-allowed";

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

    const modal =
        document.getElementById("imageModal");

    const modalImg =
        document.getElementById("modalImg");

    const modalClose =
        document.querySelector(".close");

    const images =
        document.querySelectorAll(".legal-card-img");

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

            modalImg.style.transform =
                `scale(${zoom})`;

        });

    }

    /* ==========================================
       MOUSE WHEEL ZOOM
    ========================================== */

    if (modal && modalImg) {

        modal.addEventListener("wheel", (e) => {

            e.preventDefault();

            zoom += (e.deltaY < 0)
                ? 0.2
                : -0.2;

            zoom = Math.min(
                Math.max(zoom, 1),
                5
            );

            modalImg.style.transform =
                `scale(${zoom})`;

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

        if (img.complete) {

            img.classList.add("loaded");

            return;

        }

        img.addEventListener("load", () => {

            img.classList.add("loaded");

        });

    });

    /* ==========================================
       EXTERNAL LINK SECURITY
    ========================================== */

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

    /* ==========================================
       BACK TO TOP
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
       PAGE VISIBILITY
    ========================================== */

    document.addEventListener("visibilitychange", () => {

        if (!document.hidden) {

            revealOnScroll();
            animateCounter();
            updateHeader();
            updateFloatingWA();

        }

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

        console.warn(
            "Script Warning:",
            e.message
        );

    });

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
       DEBUG MODE
    ========================================== */

    console.log("====================================");
    console.log("PT ASSISTENKU SOLUSI INDONESIA");
    console.log("Premium Website Script Loaded");
    console.log("Version : 2.0");
    console.log("Status  : Ready");
    console.log("====================================");

}); // END DOMContentLoaded
