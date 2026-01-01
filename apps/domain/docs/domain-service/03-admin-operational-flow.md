# Admin Operational Flow – Domain Service
Status: FINAL  
Version: 1.0  
Owner: Assistenku Admin (Core)

---

## 1. Peran Admin

Admin adalah:
- Orkestrator domain
- Pengendali lifecycle
- Penjaga legal & billing

Tidak ada domain aktif tanpa approval Admin.

---

## 2. End-to-End Flow
Customer Order
↓
PENDING_REVIEW
↓
APPROVED
↓
REGISTERING
↓
PROVISIONING
↓
ACTIVE
↓
RENEWAL / SUSPEND / RELEASE


---

## 3. State Machine



PENDING_REVIEW
→ APPROVED
→ REGISTERING
→ PROVISIONING
→ ACTIVE
→ SUSPENDED (opsional)
→ EXPIRED
→ RELEASED


---

## 4. Hak Customer

Customer hanya dapat:
- Melihat domain & status
- Melihat expiry date
- Mengunduh invoice
- Request perubahan

Customer tidak dapat:
- Mengubah DNS langsung
- Transfer domain
- Menghapus domain

---

## 5. Billing & Renewal

- Reminder: H-30, H-14, H-7
- Auto invoice
- Suspend jika unpaid
- Release jika expired

---

## 6. Audit Log

Semua aksi dicatat:
- Actor
- Timestamp
- Reason

Audit log bersifat append-only.
