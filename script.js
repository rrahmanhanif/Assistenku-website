/* ============================================================
   MOBILE MENU HANDLER
============================================================ */
const menuIcon = document.getElementById("menuIcon");
const mobileMenu = document.getElementById("mobileMenu");

if (menuIcon && mobileMenu) {
  menuIcon.addEventListener("click", () => {
    mobileMenu.classList.toggle("mobile-open");
  });

  // Tutup menu saat link diklik
  const links = mobileMenu.querySelectorAll("a");
  links.forEach(link => {
    link.addEventListener("click", () => {
      mobileMenu.classList.remove("mobile-open");
    });
  });
}


/* ============================================================
   OPTIONAL — FUTURE BUTTON HANDLING (SAFE EMPTY)
============================================================ */
/*  
   Jika nanti kamu ingin menambah tombol handler PDF,
   tinggal aktifkan kembali block ini.
*/

// Example:
// const btnBiaya = document.getElementById("btnBiayaLayanan");
// if (btnBiaya) btnBiaya.onclick = () => window.open("/file.pdf", "_blank");
