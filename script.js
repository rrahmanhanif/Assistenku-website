// =============================
// HAMBURGER MENU
// =============================
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

if (hamburger && navLinks) {
  hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("active");
    hamburger.classList.toggle("active");
  });
}

// =============================
// LOCK / UNLOCK PAGE (opsional)
// =============================
const lockBtn = document.querySelector("#lockBtn");
const unlockBtn = document.querySelector("#unlockBtn");
const lockScreen = document.querySelector(".lock-screen");

if (lockBtn && unlockBtn && lockScreen) {
  lockBtn.onclick = () => {
    lockScreen.classList.add("show");
    document.body.style.overflow = "hidden";
  };

  unlockBtn.onclick = () => {
    lockScreen.classList.remove("show");
    document.body.style.overflow = "auto";
  };
}

// =============================
// SMOOTH SCROLL (opsional)
// =============================
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener("click", function (e) {
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      e.preventDefault();
      window.scrollTo({
        top: target.offsetTop - 70,
        behavior: "smooth"
      });
    }
  });
});

// =============================
// AUTO CLOSE NAV ON LINK CLICK
// =============================
document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("active");
    hamburger.classList.remove("active");
  });
});