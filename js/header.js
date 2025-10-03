document.addEventListener("DOMContentLoaded", () => {
  fetch("../pages/header.html")
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


function toggleMenu() {
    document.getElementById("sidebar").classList.toggle("active");
    document.getElementById("overlay").classList.toggle("active");
}

function goTo(page) {
  window.location.href = `${page}.html`;
}

document.addEventListener("DOMContentLoaded", () => {
  const bannerContainer = document.getElementById("banner");
  
  fetch("../pages/banner.html") 
    .then(response => response.text())
    .then(data => {
      bannerContainer.innerHTML = data;
    })
    .catch(error => console.error("Erro ao carregar o banner:", error));
});