(function () {
  const search = document.getElementById("sectorSearch");
  const grid = document.getElementById("sectorGrid");
  const category = document.getElementById("categorySelect");
  const reset = document.getElementById("resetFilters");
  const summary = document.getElementById("filterSummary");
  if (!grid) return;

  const cards = Array.from(grid.querySelectorAll(".sector-card"));

  const norm = (s) => (s || "").toLowerCase().replace(/\s+/g, " ").trim();

  // Mapping kategori -> daftar sektor yang ditampilkan
  const MAP = {
    umkm: ["S01", "S06", "S07", "S09", "S15", "S17"],
    pro:  ["S02", "S04", "S05", "S08", "S10", "S11", "S12", "S13", "S14", "S16"],

    kuliner: ["S09"],
    toko: ["S07", "S09", "S01"],
    jasa: ["S06", "S17", "S13", "S10"],
    logistik: ["S08"],
    teknologi: ["S10"],
    keuangan: ["S11"],
    properti: ["S12"],
    pemerintah: ["S14"],
    kesehatan: ["S16"],
    edukasi: ["S15"],
    energi: ["S04", "S05", "S02"]
  };

  const apply = () => {
    const q = search ? norm(search.value) : "";
    const cat = category ? category.value : "";

    const allow = cat ? new Set(MAP[cat] || []) : null;

    let visibleCount = 0;

    cards.forEach((card) => {
      const code = (card.getAttribute("data-sector") || "").trim(); // ex: S07
      const title = norm(card.getAttribute("data-title"));
      const text = norm(card.innerText);

      const okSearch = !q || title.includes(q) || code.toLowerCase().includes(q) || text.includes(q);
      const okCat = !allow || allow.has(code);

      const ok = okSearch && okCat;

      card.style.display = ok ? "" : "none";
      if (ok) visibleCount++;
    });

    if (summary) {
      const label = cat ? category.options[category.selectedIndex].text : "Semua sektor";
      const extra = q ? ` • Cari: "${q}"` : "";
      summary.textContent = `${visibleCount} sektor ditampilkan • ${label}${extra}`;
    }
  };

  if (search) search.addEventListener("input", apply);
  if (category) category.addEventListener("change", apply);

  if (reset) {
    reset.addEventListener("click", () => {
      if (search) search.value = "";
      if (category) category.value = "";
      apply();
    });
  }

  apply();
})();
