// =====================================
// MITRA SALES ASSISTENKU
// JavaScript
// =====================================

document.addEventListener("DOMContentLoaded", () => {

    /* ==============================
       FAQ ACCORDION
    ============================== */

    const faqItems = document.querySelectorAll(".faq-item");

    faqItems.forEach(item => {

        const button = item.querySelector(".faq-question");
        const answer = item.querySelector(".faq-answer");

        button.addEventListener("click", () => {

            faqItems.forEach(other => {

                if (other !== item) {

                    other.classList.remove("active");

                    other.querySelector(".faq-answer").style.maxHeight = null;

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


    /* ==============================
       SMOOTH SCROLL
    ============================== */

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {

        anchor.addEventListener("click", function (e) {

            e.preventDefault();

            const target = document.querySelector(this.getAttribute("href"));

            if (target) {

                target.scrollIntoView({

                    behavior: "smooth"

                });

            }

        });

    });


    /* ==============================
       HEADER SHADOW
    ============================== */

    const header = document.querySelector("header");

    window.addEventListener("scroll", () => {

        if (window.scrollY > 50) {

            header.classList.add("scrolled");

        } else {

            header.classList.remove("scrolled");

        }

    });


    /* ==============================
       SCROLL ANIMATION
    ============================== */

    const revealElements = document.querySelectorAll(
        ".service-card, .benefit-card, .commission-card, .work-card, .equipment-card, .contact-card"
    );

    const reveal = () => {

        revealElements.forEach(el => {

            const top = el.getBoundingClientRect().top;

            if (top < window.innerHeight - 80) {

                el.classList.add("show");

            }

        });

    };

    window.addEventListener("scroll", reveal);

    reveal();


    /* ==============================
       COUNTER ANIMATION
    ============================== */

    const counters = document.querySelectorAll(".commission-card h1");

    counters.forEach(counter => {

        const text = counter.innerText.replace(/[^\d]/g, "");

        const target = parseInt(text);

        if (isNaN(target)) return;

        let current = 0;

        const speed = target / 80;

        const update = () => {

            current += speed;

            if (current >= target) {

                counter.innerText =
                    "Rp" + target.toLocaleString("id-ID");

            } else {

                counter.innerText =
                    "Rp" + Math.floor(current).toLocaleString("id-ID");

                requestAnimationFrame(update);

            }

        };

        update();

    });


    /* ==============================
       BUTTON RIPPLE
    ============================== */

    const buttons = document.querySelectorAll("a");

    buttons.forEach(btn => {

        btn.addEventListener("click", function (e) {

            const ripple = document.createElement("span");

            ripple.className = "ripple";

            ripple.style.left =
                e.offsetX + "px";

            ripple.style.top =
                e.offsetY + "px";

            this.appendChild(ripple);

            setTimeout(() => {

                ripple.remove();

            }, 600);

        });

    });


    /* ==============================
       FLOATING WA
    ============================== */

    const wa = document.querySelector(".floating-wa");

    window.addEventListener("scroll", () => {

        if (window.scrollY > 250) {

            wa.classList.add("visible");

        } else {

            wa.classList.remove("visible");

        }

    });

});
