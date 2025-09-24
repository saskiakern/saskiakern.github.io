// Header und Footer automatisch laden und Main-Abstand dynamisch setzen
document.addEventListener("DOMContentLoaded", () => {
  const headerHost = document.getElementById("header");
  const footerHost = document.getElementById("footer");

  // Header laden
  fetch("header.html")
    .then((r) => r.text())
    .then((html) => {
      headerHost.innerHTML = html;
      // Nach dem Einfügen: Header-Höhe messen und als CSS-Variable setzen
      const headerEl = headerHost.querySelector("header");
      if (headerEl) {
        const h = headerEl.offsetHeight;
        document.documentElement.style.setProperty("--header-height", `${h}px`);
      }
    })
    .catch((err) => console.error("Header konnte nicht geladen werden:", err));

  // Footer laden
  fetch("footer.html")
    .then((r) => r.text())
    .then((html) => {
      footerHost.innerHTML = html;
    })
    .catch((err) => console.error("Footer konnte nicht geladen werden:", err));
});
