// ======================================
// MOBILE NAVIGATION
// ======================================
const menuIcon = document.getElementById("menuIcon");
const mobileMenu = document.getElementById("mobileMenu");

if (menuIcon && mobileMenu) {
  menuIcon.addEventListener("click", () => {
    mobileMenu.classList.toggle("show");
  });
}



// ======================================
// LOCK / UNLOCK SYSTEM (KHUSUS LAYANAN & KARIR)
// ======================================
const lockedPages = ["layanan.html", "karir.html"];
const currentPage = window.location.pathname.split("/").pop() || "index.html";

if (lockedPages.includes(currentPage)) {
  addFooterLockButton();
}

function addFooterLockButton() {
  const footer = document.querySelector("footer");

  if (!footer) return;

  const btn = document.createElement("button");
  btn.id = "lockBtn";
  btn.className = "lock-footer locked";
  btn.innerHTML = "🔒 Akses File Dikunci";

  footer.appendChild(btn);

  btn.addEventListener("click", () => showPasswordPopup());
}



// ======================================
// POPUP PASSWORD
// ======================================
function showPasswordPopup() {
  const old = document.getElementById("popupOverlay");
  if (old) old.remove();

  const overlay = document.createElement("div");
  overlay.id = "popupOverlay";

  overlay.innerHTML = `
    <div class="popup-box">
      <h3>Masukkan Password</h3>
      <p>Dokumen ini dilindungi. Masukkan password untuk membuka akses.</p>

      <input type="password" id="inputPass" placeholder="Password" />

      <div class="popup-actions">
        <button id="btnCancel">Batal</button>
        <button id="btnOpen">Buka</button>
      </div>
    </div>
  `;

  document.body.appendChild(overlay);

  document.getElementById("btnCancel").onclick = () => overlay.remove();
  document.getElementById("btnOpen").onclick = validatePassword;
}



// ======================================
// MD5 HASH (TANPA LIBRARY)
// ======================================
async function md5(str) {
  const buffer = new TextEncoder().encode(str);
  const digest = await crypto.subtle.digest("MD5", buffer);
  return Array.from(new Uint8Array(digest))
    .map(b => b.toString(16).padStart(2, "0"))
    .join("");
}

// password: assistenku2025
const correctHash = "b3a793bcee664f645dd5bb58d60f89c8";



// ======================================
// VALIDASI PASSWORD
// ======================================
async function validatePassword() {
  const value = document.getElementById("inputPass").value.trim();
  const hashed = await md5(value);

  if (hashed !== correctHash) {
    alert("Password salah.");
    return;
  }

  document.getElementById("popupOverlay").remove();
  unlockAccess();
}



// ======================================
// AKSI SETELAH PASSWORD VALID
// ======================================
function unlockAccess() {
  const btn = document.getElementById("lockBtn");
  if (btn) {
    btn.classList.remove("locked");
    btn.classList.add("unlocked");
    btn.innerHTML = "🔓 Akses Dibuka";
  }

  // Redirect sesuai halaman
  if (currentPage === "layanan.html") {
    window.location.href =
      "https://drive.google.com/file/d/1Hwzol_d_aAM0OGxPR_un04nPyTUrR5gW/view";
  }

  if (currentPage === "karir.html") {
    window.location.href =
      "https://drive.google.com/file/d/1UKaP7oSB11vBh2wI1u0qBCkwVF-YHEeD/view";
  }
}



// ======================================
// ANTI INSPECT (AMAN DI PONSEL)
// ======================================
document.addEventListener("contextmenu", e => e.preventDefault());

document.addEventListener("keydown", e => {
  if (
    e.key === "F12" ||
    (e.ctrlKey && e.shiftKey && ["I", "C", "J"].includes(e.key)) ||
    (e.ctrlKey && e.key === "U")
  ) {
    e.preventDefault();
  }
});
