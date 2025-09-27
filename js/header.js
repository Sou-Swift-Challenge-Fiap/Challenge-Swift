document.addEventListener("DOMContentLoaded", () => {
  fetch("../ale_pages/header.html")
    .then(response => {
      if (!response.ok) {
        throw new Error("Erro ao carregar o header: " + response.status);
      }
      return response.text();
    })
    .then(html => {
      document.getElementById("header").innerHTML = html;
    })
    .catch(error => {
      console.error("Erro ao importar header:", error);
    });
});
