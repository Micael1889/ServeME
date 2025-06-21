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

// Testeo carga productos
function crearElemento(
  elemento,
  textoContenido = "",
  tipoEstilo = "",
  contenidoEstilo = "",
  clase = "",
  id = ""
) {
  let etiqueta = document.createElement(elemento);
  if (clase != "") {
    etiqueta.className = clase;
  }
  if (tipoEstilo != "" && contenidoEstilo !== "") {
    etiqueta.style[tipoEstilo] = contenidoEstilo;
  }
  if (textoContenido != "") {
    etiqueta.textContent = textoContenido;
  }
  if (id != "") {
    etiqueta.id = id;
  }

  return etiqueta;
}

const contenidoPanel = document.getElementById("contenidoPanel");
const botonProductos = document.getElementById("crudProductos");

function cargarProductos() {
  for (let x = 0; x < 3; x++) {
    let titulazo = crearElemento("h1", "CARGAR PRODUCTOS", "", "", "titulazo");
    let divForm = crearElemento("div", "", "", "", "divForm");
    let nombreInput = crearElemento("h4", "Ingrese su Nombre:");
    let nombreProd = crearElemento("input", "", "", "", "input-productos");
    nombreProd.type = "text";
    nombreProd.name = "nombre";
    nombreProd.placeholder = "Ingrese un nombre";
    let imgProd = crearElemento("input", "", "", "", "input-productos");
    imgProd.type = "file";
    imgProd.name = "imagen";
    imgProd.placeholder = "subi tu imagen";
    let descProd = crearElemento("textarea", "", "", "", "input-productos");
    descProd.type = "text";
    descProd.name = "descripcion";
    descProd.placeholder = "Ingrese la descripción";
    let catProd = crearElemento("input", "", "", "", "input-productos");
    catProd.type = "text";
    catProd.name = "categoria";
    catProd.placeholder = "Ingrese la categoria";
    let precioProd = crearElemento("input", "", "", "", "input-productos");
    precioProd.type = "number";
    precioProd.name = "precio";
    precioProd.placeholder = "Ingrese el precio";
    divForm.appendChild(titulazo);
    divForm.appendChild(nombreInput);
    divForm.appendChild(nombreProd);
    divForm.appendChild(imgProd);
    divForm.appendChild(descProd);
    divForm.appendChild(catProd);
    divForm.appendChild(precioProd);
    contenidoPanel.appendChild(divForm);
  }
}

botonProductos.addEventListener("click", cargarProductos);
