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
   PWA: SERVICE WORKER + INSTALL (SINGLE SOURCE OF TRUTH)
   - Tanpa panduan
   - Tanpa deklarasi ganda
   - Aman jika tombol tidak ada
============================= */

// Register Service Worker
if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("/sw.js").catch(console.warn);
  });
}

// Install prompt (Chrome Android)
let deferredPrompt = null;

// Tangkap event install (kalau browser mengizinkan)
window.addEventListener("beforeinstallprompt", (e) => {
  e.preventDefault();
  deferredPrompt = e;

  // Jika Anda mau tombol hanya muncul saat eligible, set default tombol display:none di HTML/CSS
  const btn = document.getElementById("installAppBtn");
  if (btn) {
    btn.style.display = "inline-block";
    // optional: btn.textContent = "Install App";
  }
});

// Klik tombol install
document.addEventListener("click", async (e) => {
  const target = e.target;
  if (!target || target.id !== "installAppBtn") return;

  // Jika belum eligible, tidak ada prompt (wajar)
  if (!deferredPrompt) return;

  deferredPrompt.prompt();
  await deferredPrompt.userChoice;
  deferredPrompt = null;

  // Optional: sembunyikan tombol setelah install prompt dipakai
  const btn = document.getElementById("installAppBtn");
  if (btn) btn.style.display = "none";
});

/* =============================
   iOS SAFARI: ADD TO HOME SCREEN HELPER
============================= */

function isIOS() {
  return /iphone|ipad|ipod/i.test(navigator.userAgent);
}

function isSafari() {
  // Safari iOS (exclude Chrome/Firefox/Edge iOS)
  return /^((?!chrome|crios|fxios|edgios|android).)*safari/i.test(
    navigator.userAgent
  );
}

function isInStandaloneIOS() {
  return window.navigator.standalone === true;
}

function showIOSInstallHint() {
  const el = document.getElementById("iosInstallHint");
  if (el) el.style.display = "block";
}

// Tampilkan instruksi hanya jika:
// - iOS
// - Safari
// - BELUM standalone
document.addEventListener("DOMContentLoaded", () => {
  if (isIOS() && isSafari() && !isInStandaloneIOS()) {
    showIOSInstallHint();
  }
});
