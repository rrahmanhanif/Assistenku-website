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
  mobileMenu.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      mobileMenu.classList.remove("active");
    });
  });
}

/* =============================
   SMOOTH SCROLL
============================= */
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener("click", (e) => {
    const target = document.querySelector(link.getAttribute("href"));
    if (target) {
      e.preventDefault();
      window.scrollTo({
        top: target.offsetTop - 120,
        behavior: "smooth"
      });
    }
  });
});

/* =============================
   PDF BUTTONS (Only if exist)
============================= */
function openPDF(id, file) {
  const el = document.getElementById(id);
  if (el) {
    el.onclick = () => window.open(file, "_blank");
  }
}

openPDF("btnBiayaLayanan", "/penawaran.pdf");
openPDF("btnUnduhFormulir", "/formulir.pdf");
/* =============================
   PWA: SERVICE WORKER + INSTALL
============================= */

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("/sw.js").catch(console.warn);
  });
}

let deferredPrompt = null;

window.addEventListener("beforeinstallprompt", (e) => {
  e.preventDefault();
  deferredPrompt = e;

  const btn = document.getElementById("installAppBtn");
  if (btn) btn.style.display = "inline-block";
});

window.installAssistenku = async function () {
  if (!deferredPrompt) return;
  deferredPrompt.prompt();
  await deferredPrompt.userChoice;
  deferredPrompt = null;

  const btn = document.getElementById("installAppBtn");
  if (btn) btn.style.display = "none";
};

/* =============================
   PWA GLOBAL INSTALL POPUP
============================= */

// Register Service Worker (sekali, berlaku semua halaman)
if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("/sw.js").catch(console.warn);
  });
}

let deferredPrompt = null;

function isStandaloneMode() {
  return window.matchMedia("(display-mode: standalone)").matches
    || window.navigator.standalone === true;
}

function canShowInstallBanner() {
  if (isStandaloneMode()) return false;
  try {
    if (localStorage.getItem("pwa_install_dismissed") === "1") return false;
  } catch {}
  return true;
}

function showInstallBanner() {
  if (!canShowInstallBanner()) return;
  const banner = document.getElementById("pwaInstallBanner");
  if (!banner) return;
  banner.style.display = "flex";
  banner.classList.add("is-show");
}

function hideInstallBanner(persist = false) {
  const banner = document.getElementById("pwaInstallBanner");
  if (!banner) return;
  banner.style.display = "none";
  if (persist) {
    try { localStorage.setItem("pwa_install_dismissed", "1"); } catch {}
  }
}

// Tangkap event install dari browser
window.addEventListener("beforeinstallprompt", (e) => {
  e.preventDefault();
  deferredPrompt = e;
  showInstallBanner();
});

// Klik tombol Install
document.addEventListener("click", async (e) => {
  if (e.target && e.target.id === "pwaInstallBtn") {
    if (!deferredPrompt) return;
    deferredPrompt.prompt();
    await deferredPrompt.userChoice;
    deferredPrompt = null;
    hideInstallBanner(true);
  }
});
