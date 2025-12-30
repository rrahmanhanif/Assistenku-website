/* =============================
   MOBILE MENU
============================= */
const menuIcon = document.getElementById("menuIcon");
const mobileMenu = document.getElementById("mobileMenu");

if (menuIcon && mobileMenu) {
  menuIcon.addEventListener("click", () => {
    mobileMenu.classList.toggle("active");
  });

  // Auto close after clicking link
  mobileMenu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      mobileMenu.classList.remove("active");
    });
  });
}

/* =============================
   SMOOTH SCROLL
============================= */
document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener("click", (e) => {
    const href = link.getAttribute("href");
    if (!href) return;

    const target = document.querySelector(href);
    if (target) {
      e.preventDefault();
      window.scrollTo({
        top: target.offsetTop - 120,
        behavior: "smooth",
      });
    }
  });
});

/* =============================
   PDF BUTTONS (Only if exist)
============================= */
function openPDF(id, file) {
  const el = document.getElementById(id);
  if (el) el.onclick = () => window.open(file, "_blank");
}

openPDF("btnBiayaLayanan", "/penawaran.pdf");
openPDF("btnUnduhFormulir", "/formulir.pdf");

/* =============================
   PWA: ANDROID ONLY (BUTTON ONLY)
============================= */

// Register Service Worker
if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("/sw.js").catch(console.warn);
  });
}

let deferredPrompt = null;

// Tampilkan tombol hanya saat eligible
window.addEventListener("beforeinstallprompt", (e) => {
  e.preventDefault();
  deferredPrompt = e;

  const btn = document.getElementById("pwaInstallBtn");
  if (btn) btn.style.display = "inline-block";
});

// Klik tombol install
document.addEventListener("click", async (e) => {
  const t = e.target;
  if (!t || t.id !== "pwaInstallBtn") return;
  if (!deferredPrompt) return; // normal kalau belum eligible

  deferredPrompt.prompt();
  await deferredPrompt.userChoice;
  deferredPrompt = null;

  // Optional: sembunyikan tombol setelah dipakai
  const btn = document.getElementById("pwaInstallBtn");
  if (btn) btn.style.display = "none";
});
