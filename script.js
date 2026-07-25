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
    
