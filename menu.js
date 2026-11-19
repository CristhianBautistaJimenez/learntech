// Menú hamburguesa: abre/cierra el menú en pantallas chicas
(() => {
  const header = document.querySelector("header");
  const btn = header.querySelector(".menu-btn");
  const menu = header.querySelector(".menu");
  const abre = v => {
    header.classList.toggle("abierto", v);
    btn.setAttribute("aria-expanded", v);
    btn.setAttribute("aria-label", v ? "Cerrar menú" : "Abrir menú");
  };
  btn.addEventListener("click", () => abre(btn.getAttribute("aria-expanded") !== "true"));
  menu.addEventListener("click", e => { if (e.target.closest("a")) abre(false); });
  document.addEventListener("click", e => { if (!header.contains(e.target)) abre(false); });
  document.addEventListener("keydown", e => {
    if (e.key === "Escape" && header.classList.contains("abierto")) { abre(false); btn.focus(); }
  });
  window.matchMedia("(min-width:901px)").addEventListener("change", e => { if (e.matches) abre(false); });
})();
