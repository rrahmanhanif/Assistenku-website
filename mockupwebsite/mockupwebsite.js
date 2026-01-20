(function () {
  console.log("mockup JS loaded");

  const search = document.getElementById("sectorSearch");
  const grid = document.getElementById("sectorGrid");

  if (!search || !grid) {
    console.warn("Search atau Grid tidak ditemukan");
    return;
  }

  const cards = Array.from(grid.querySelectorAll(".sector-card"));

  const norm = (s) =>
    (s || "").toLowerCase().replace(/\s+/g, " ").trim();

  search.addEventListener("input", function () {
    const q = norm(this.value);

    cards.forEach(function (card) {
      const text = norm(card.innerText);
      const title = norm(card.dataset.title);
      const code = norm(card.dataset.sector);

      const show =
        !q ||
        text.includes(q) ||
        title.includes(q) ||
        code.includes(q);

      card.style.display = show ? "" : "none";
    });
  });
})();
