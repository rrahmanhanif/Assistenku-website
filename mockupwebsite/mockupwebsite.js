(function () {
  const search = document.getElementById("sectorSearch");
  const grid = document.getElementById("sectorGrid");
  if (!search || !grid) return;

  const cards = Array.from(grid.querySelectorAll(".sector-card"));
  const norm = (s) => (s || "").toLowerCase().replace(/\s+/g, " ").trim();

  const apply = () => {
    const q = norm(search.value);
    cards.forEach((card) => {
      const title = norm(card.getAttribute("data-title"));
      const code = norm(card.getAttribute("data-sector"));
      const text = norm(card.innerText);
      const ok = !q || title.includes(q) || code.includes(q) || text.includes(q);
      card.style.display = ok ? "" : "none";
    });
  };

  search.addEventListener("input", apply);
})();
