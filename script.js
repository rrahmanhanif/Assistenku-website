/* ================================
   HAMBURGER MENU
================================ */
const menuIcon = document.getElementById("menuIcon");
const mobileMenu = document.getElementById("mobileMenu");

if (menuIcon) {
  menuIcon.addEventListener("click", () => {
    mobileMenu.classList.toggle("active");
  });
}

/* ================================
   LOCK / UNLOCK SYSTEM
================================ */
const lockBtn = document.getElementById("lockBtn");

// Link GDrive
const layananLink = "https://drive.google.com/file/d/1Hwzol_d_aAM0OGxPR_un04nPyTUrR5gW/view?usp=drivesdk";
const gajiLink = "https://drive.google.com/file/d/1UKaP7oSB11vBh2wI1u0qBCkwVF-YHEeD/view?usp=drivesdk";

const ONE_DAY = 24 * 60 * 60 * 1000;

// MD5 hash password "Hanif@123"
const correctHash = "0f23ae0ee0fa9a1c81efc8d43f22c25d";

if (lockBtn) {
  let unlockedAt = localStorage.getItem("unlock_time");
  let now = Date.now();

  // auto relock
  if (unlockedAt && now - unlockedAt > ONE_DAY) {
    localStorage.removeItem("unlock_time");
    unlockedAt = null;
  }

  // status awal
  if (unlockedAt) {
    unlock();
  } else {
    lock();
  }

  lockBtn.addEventListener("click", () => {
    if (lockBtn.classList.contains("locked")) {
      showPasswordPopup();
    } else {
      lock();
      localStorage.removeItem("unlock_time");
    }
  });
}

/* ================================
   PASSWORD POPUP
================================ */
function showPasswordPopup() {
  const overlay = document.createElement("div");

  overlay.id = "popupOverlay";
  overlay.style.position = "fixed";
  overlay.style.inset = "0";
  overlay.style.background = "rgba(0,0,0,0.5)";
  overlay.style.backdropFilter = "blur(8px)";
  overlay.style.display = "flex";
  overlay.style.alignItems = "center";
  overlay.style.justifyContent = "center";
  overlay.style.zIndex = "9999";

  overlay.innerHTML = `
    <div style="
      width: 92%;
      max-width: 380px;
      padding: 25px;
      background: #fff;
      border-radius: 14px;
      box-shadow: 0 10px 40px rgba(0,0,0,0.20);
      text-align:center;">
      
      <h3 style="margin-bottom: 10px; color:#0d6efd;">Masukkan Password</h3>
      <p style="font-size:14px; color:#333;">Halaman ini memerlukan akses khusus.</p>

      <input type="password" id="inputPass" placeholder="Password" 
        style="width:100%; padding:12px; margin-top:15px; border-radius:10px; border:1px solid #ccc;">

      <div style="margin-top:20px; display:flex; justify-content:flex-end; gap:12px;">
        <button id="cancelBtn" style="padding:10px 16px; border:none; background:#ccc; border-radius:8px; cursor:pointer;">Batal</button>
        <button id="okBtn" style="padding:10px 16px; border:none; background:#0d6efd; color:white; border-radius:8px; cursor:pointer;">Buka</button>
      </div>
    </div>
  `;

  document.body.appendChild(overlay);

  document.getElementById("cancelBtn").onclick = () => overlay.remove();
  document.getElementById("okBtn").onclick = validatePassword;
}

/* ================================
   MD5 HASH
================================ */
async function md5(str) {
  const buffer = new TextEncoder().encode(str);
  const digest = await crypto.subtle.digest("MD5", buffer);
  return Array.from(new Uint8Array(digest))
    .map(b => b.toString(16).padStart(2, "0"))
    .join("");
}

/* ================================
   PASSWORD VALIDATION
================================ */
async function validatePassword() {
  const input = document.getElementById("inputPass").value.trim();
  const hashed = await md5(input);

  if (hashed === correctHash) {
    unlock();
    localStorage.setItem("unlock_time", Date.now());
    document.getElementById("popupOverlay").remove();
  } else {
    alert("Password salah.");
  }
}

/* ================================
   UNLOCK & LOCK
================================ */
function unlock() {
  lockBtn.textContent = "🔓 Akses Dibuka";
  lockBtn.classList.remove("locked");
  lockBtn.classList.add("unlocked");

  const path = window.location.pathname;

  if (path.includes("layanan")) window.open(layananLink, "_blank");
  if (path.includes("karir")) window.open(gajiLink, "_blank");
}

function lock() {
  lockBtn.textContent = "🔒 Akses Terkunci";
  lockBtn.classList.add("locked");
  lockBtn.classList.remove("unlocked");
}
