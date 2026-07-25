// ======================================================
// MITRA SALES ASSISTENKU
// Premium Landing Page JavaScript
// ======================================================

document.addEventListener("DOMContentLoaded", () => {

    /* ==========================================
       FAQ ACCORDION
    ========================================== */

    const faqItems = document.querySelectorAll(".faq-item");

    faqItems.forEach(item => {

        const question = item.querySelector(".faq-question");
        const answer = item.querySelector(".faq-answer");

        question.addEventListener("click", () => {

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


    /* ==========================================
       HEADER SHADOW
    ========================================== */

    const header = document.querySelector("header");

    function updateHeader(){

        if(!header) return;

        if(window.scrollY > 30){

            header.style.boxShadow = "0 10px 30px rgba(0,0,0,.08)";

        }else{

            header.style.boxShadow = "none";

        }

    }

    updateHeader();

    window.addEventListener("scroll", updateHeader);


    /* ==========================================
       SMOOTH SCROLL
    ========================================== */

    document.querySelectorAll('a[href^="#"]').forEach(link=>{

        link.addEventListener("click",function(e){

            const target=document.querySelector(this.getAttribute("href"));

            if(target){

                e.preventDefault();

                target.scrollIntoView({

                    behavior:"smooth",
                    block:"start"

                });

            }

        });

    });


    /* ==========================================
       SCROLL REVEAL
    ========================================== */

    const reveals=document.querySelectorAll(

        ".service-card,.benefit-card,.commission-card,.work-card,.equipment-card,.qualification-grid div,.contact-card"

    );

    reveals.forEach(el=>{

        el.classList.add("fade-up");

    });

    function revealOnScroll(){

        reveals.forEach(el=>{

            const top=el.getBoundingClientRect().top;

            if(top<window.innerHeight-80){

                el.classList.add("show");

            }

        });

    }

    revealOnScroll();

    window.addEventListener("scroll",revealOnScroll);


    /* ==========================================
       COUNTER ANIMATION
    ========================================== */

    let counterPlayed=false;

    function animateCounter(){

        if(counterPlayed) return;

        const section=document.querySelector(".commission");

        if(!section) return;

        const top=section.getBoundingClientRect().top;

        if(top>window.innerHeight-120) return;

        counterPlayed=true;

        document.querySelectorAll(".commission-card h1").forEach(counter=>{

            const number=parseInt(counter.innerText.replace(/[^\d]/g,""));

            if(isNaN(number)) return;

            let start=0;

            const duration=1500;

            const step=Math.ceil(number/(duration/16));

            function update(){

                start+=step;

                if(start>=number){

                    start=number;

                }

                counter.innerText="Rp"+start.toLocaleString("id-ID");

                if(start<number){

                    requestAnimationFrame(update);

                }

            }

            update();

        });

    }

    animateCounter();

    window.addEventListener("scroll",animateCounter);


    /* ==========================================
       FLOATING WHATSAPP
    ========================================== */

    const wa=document.querySelector(".floating-wa");

    if(wa){

        function floatingWA(){

            if(window.scrollY>200){

                wa.style.opacity="1";
                wa.style.transform="translateY(0)";

            }else{

                wa.style.opacity=".85";
                wa.style.transform="translateY(8px)";

            }

        }

        floatingWA();

        window.addEventListener("scroll",floatingWA);

    }


    /* ==========================================
       BUTTON HOVER EFFECT
    ========================================== */

    document.querySelectorAll(".btn-primary,.btn-secondary").forEach(btn=>{

        btn.addEventListener("mouseenter",()=>{

            btn.style.transform="translateY(-2px)";

        });

        btn.addEventListener("mouseleave",()=>{

            btn.style.transform="translateY(0)";

        });

    });

});
