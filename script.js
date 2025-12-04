/* =============================
   HAMBURGER MENU
============================= */
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

if (hamburger && navLinks) {
  hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("active");
    hamburger.classList.toggle("active");
  });
}

/* Close menu when link clicked (mobile only) */
if (navLinks) {
  navLinks.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("active");
      hamburger.classList.remove("active");
    });
  });
}

/* =============================
   LOCK / UNLOCK PAGE
============================= */
const lockBtn = document.querySelector("#lockBtn");
const unlockBtn = document.querySelector("#unlockBtn");
const lockScreen = document.querySelector(".lock-screen");

if (lockBtn && unlockBtn && lockScreen) {
  lockBtn.addEventListener("click", () => {
    lockScreen.classList.add("show");
    document.body.style.overflow = "hidden";
  });

  unlockBtn.addEventListener("click", () => {
    lockScreen.classList.remove("show");
    document.body.style.overflow = "auto";
  });
}

/* =============================
   SMOOTH SCROLL (safe mode)
============================= */
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener("click", e => {
    const target = document.querySelector(link.getAttribute("href"));
    if (target) {
      e.preventDefault();
      window.scrollTo({
        top: target.offsetTop - 70,
        behavior: "smooth",
      });
    }
  });
});