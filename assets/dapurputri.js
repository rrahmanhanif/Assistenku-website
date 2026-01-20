// Tahun footer
(() => {
  const el = document.getElementById("year");
  if (el) el.textContent = String(new Date().getFullYear());
})();

// Scroll boost (Redmi Note 11 friendly)
(() => {
  let t = null;
  const root = document.documentElement;

  const onScroll = () => {
    root.classList.add("is-scrolling");
    if (t) clearTimeout(t);
    t = setTimeout(() => root.classList.remove("is-scrolling"), 160);
  };

  window.addEventListener("scroll", onScroll, { passive: true });
})();
