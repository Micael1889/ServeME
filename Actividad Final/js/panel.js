const navBar = document.querySelector(".navBar");
const despBoton = document.querySelector("#despBoton");
const buscar = document.querySelector(".bx-search");
const ordenes = document.querySelector(".bx-takeaway");

// Abrir el menu con el click

despBoton.addEventListener("click", () => {
  navBar.classList.toggle("open");
  iconoCambio();
});

// Abrir el menu con el click en el input y cambiar el icono

buscar.addEventListener("click", () => {
  navBar.classList.toggle("open");
  iconoCambio();
});

// Abrir la seccion de Ordenes

// Funcion para cambiar el icono

function iconoCambio() {
  if (navBar.classList.contains("open")) {
    despBoton.classList.replace("bx-menu", "bx-arrow-big-left-line");
  } else {
    despBoton.classList.replace("bx-arrow-big-left-line", "bx-menu");
  }
}
