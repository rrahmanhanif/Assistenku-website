/* ========================================================
   MOBILE MENU TOGGLE
======================================================== */
const menuIcon = document.getElementById("menuIcon");
const mobileMenu = document.getElementById("mobileMenu");

if (menuIcon && mobileMenu) {
  menuIcon.addEventListener("click", () => {
    mobileMenu.classList.toggle("show");
  });
}


/* ========================================================
   AUTO ACTIVE NAV - DETEKSI HALAMAN OTOMATIS
======================================================== */
const currentPath = window.location.pathname;

document.querySelectorAll("nav a").forEach(a => {
  if (a.getAttribute("href") === currentPath) {
    a.classList.add("active");
  }
});


/* ========================================================
   SISTEM LOCK / UNLOCK (GLOBAL)
   - Menyimpan status di localStorage
   - Tombol footer lock
======================================================== */
const lockBtn = document.getElementById("lockBtn");

// Default jika belum ada
if (!localStorage.getItem("lockStatus")) {
  localStorage.setItem("lockStatus", "locked");
}

// Update tampilan tombol sesuai status
function updateLockUI() {
  if (!lockBtn) return;

  const locked = localStorage.getItem("lockStatus") === "locked";

  if (locked) {
    lockBtn.classList.add("locked");
    lockBtn.textContent = "🔒 Akses Terkunci";
  } else {
    lockBtn.classList.remove("locked");
    lockBtn.textContent = "🔓 Akses Terbuka";
  }
}

if (lockBtn) {
  updateLockUI();

  lockBtn.addEventListener("click", () => {
    const nowLocked = localStorage.getItem("lockStatus") === "locked";

    if (nowLocked) {
      localStorage.setItem("lockStatus", "unlocked");
    } else {
      localStorage.setItem("lockStatus", "locked");
    }

    updateLockUI();
  });
}


/* ========================================================
   FUNGSI CEK LOCK
======================================================== */
function isLocked() {
  return localStorage.getItem("lockStatus") === "locked";
}

function requireUnlock() {
  alert("Akses terkunci 🔒\n\nSilakan buka kunci terlebih dahulu.");
}


/* ========================================================
   TOMBOL DOKUMEN SPESIFIK PER HALAMAN
   - Sistem Gaji
   - Biaya Layanan
   - Unduh Formulir
======================================================== */

/* ==== HALAMAN KARIR: Sistem Gaji ==== */
const btnSistemGaji = document.getElementById("btnSistemGaji");

if (btnSistemGaji) {
  btnSistemGaji.addEventListener("click", () => {
    if (isLocked()) return requireUnlock();

    // Link dokumen (ganti sesuai file Anda)
    window.open("/dokumen/sistem-gaji.pdf", "_blank");
  });
}


/* ==== HALAMAN LAYANAN: Biaya Layanan ==== */
const btnBiayaLayanan = document.getElementById("btnBiayaLayanan");

if (btnBiayaLayanan) {
  btnBiayaLayanan.addEventListener("click", () => {
    if (isLocked()) return requireUnlock();

    // Link dokumen biaya layanan
    window.open("/dokumen/biaya-layanan.pdf", "_blank");
  });
}


/* ==== HALAMAN LAYANAN: Unduh Formulir ==== */
const btnUnduhFormulir = document.getElementById("btnUnduhFormulir");

if (btnUnduhFormulir) {
  btnUnduhFormulir.addEventListener("click", () => {
    if (isLocked()) return requireUnlock();

    // Link formulir
    window.open("/dokumen/formulir-layanan.pdf", "_blank");
  });
}