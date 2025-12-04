/* =============================
   MOBILE MENU
============================= */

const menuIcon = document.querySelector("#menuIcon");
const mobileMenu = document.querySelector("#mobileMenu");

if (menuIcon && mobileMenu) {
  menuIcon.addEventListener("click", () => {
    mobileMenu.classList.toggle("active");
  });

  mobileMenu.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      mobileMenu.classList.remove("active");
    });
  });
}

/* =============================
   SMOOTH SCROLL (Optional)
============================= */
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener("click", (e) => {
    const target = document.querySelector(link.getAttribute("href"));
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
   ISLAND BUTTON HANDLERS
============================= */

// Biaya layanan PDF
const btnBiaya = document.getElementById("btnBiayaLayanan");
if (btnBiaya) {
  btnBiaya.onclick = () => {
    window.open("/penawaran.pdf", "_blank");
  };
}

// Formulir layanan PDF
const btnForm = document.getElementById("btnUnduhFormulir");
if (btnForm) {
  btnForm.onclick = () => {
    window.open("/formulir.pdf", "_blank");
  };
}

// Sistem gaji PDF
const btnGaji = document.getElementById("btnSistemGaji");
if (btnGaji) {
  btnGaji.onclick = () => {
    window.open("/sistem-gaji.pdf", "_blank");
  };
}

/* =============================
   LOCK BUTTON (opsional)
============================= */
const lockBtn = document.getElementById("lockBtn");
if (lockBtn) {
  lockBtn.addEventListener("click", () => {
    if (lockBtn.classList.contains("locked")) {
      lockBtn.classList.remove("locked");
      lockBtn.classList.add("unlocked");
      lockBtn.textContent = "🔓 Akses Terbuka";
    } else {
      lockBtn.classList.remove("unlocked");
      lockBtn.classList.add("locked");
      lockBtn.textContent = "🔒 Akses Terkunci";
    }
  });
}
