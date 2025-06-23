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

const titulazos = [
  "CARGAR PRODUCTO",
  "MODIFICAR PRODUCTO",
  "ELIMINAR PRODUCTO",
];

function cargarProductos() {
  for (let x = 0; x < 2; x++) {
    let titulazo = crearElemento("h1", titulazos[x], "", "", "titulazo");
    let divForm = crearElemento("form", "", "", "", "divForm");
    divForm.setAttribute("action", "form/cargaProductos");
    divForm.setAttribute("method", "POST");
    divForm.setAttribute("enctype", "multipart/form-data");
    let nombreInput = crearElemento("h4", "Ingrese su Nombre:");
    let nombreProd = crearElemento("input", "", "", "", "input-productos");
    nombreProd.type = "text";
    nombreProd.name = "nombre_producto";
    nombreProd.placeholder = "Ingrese un nombre";
    let imgProd = crearElemento("input", "", "", "", "input-productos");
    imgProd.type = "file";
    imgProd.name = "imagen_referencia";
    imgProd.placeholder = "subi tu imagen";
    let descProd = crearElemento("textarea", "", "", "", "input-productos");
    descProd.type = "text";
    descProd.name = "descripcion_producto";
    descProd.placeholder = "Ingrese la descripción";
    let catProd = crearElemento("input", "", "", "", "input-productos");
    catProd.type = "text";
    catProd.name = "categoria_producto";
    catProd.placeholder = "Ingrese la categoria";
    let precioProd = crearElemento("input", "", "", "", "input-productos");
    precioProd.type = "number";
    precioProd.name = "precio_estimado";
    precioProd.placeholder = "Ingrese el precio";
    let enviar = crearElemento("input");
    enviar.setAttribute("type", "submit");
    enviar.setAttribute("value", "Enviar Solicitud de Producto");
    divForm.appendChild(titulazo);
    divForm.appendChild(nombreInput);
    divForm.appendChild(nombreProd);
    divForm.appendChild(imgProd);
    divForm.appendChild(descProd);
    divForm.appendChild(catProd);
    divForm.appendChild(precioProd);
    divForm.appendChild(enviar);
    contenidoPanel.appendChild(divForm);
  }
  let titulazo = crearElemento("h1", titulazos[2], "", "", "titulazo");
  let divForm = crearElemento("form", "", "", "", "divForm");
  divForm.setAttribute("action", "api/eliminar-producto");
  divForm.setAttribute("method", "POST");
  divForm.setAttribute("enctype", "multipart/form-data");

  let seleccionar = crearElemento("select", "", "", "", "select-productos");
  seleccionar.name = "nombre_producto"; // si lo necesitás en el backend
  let borrar = crearElemento("input");
  borrar.setAttribute("type", "submit");
  borrar.setAttribute("value", "borrar");
  // Cargar los nombres desde el backend
  fetch("/api/nombres-productos")
    .then((res) => res.json())
    .then((nombres) => {
      nombres.forEach((nombre) => {
        let option = document.createElement("option");
        option.value = nombre;
        option.textContent = nombre;
        seleccionar.appendChild(option);
      });
    })
    .catch((error) => {
      console.error("Error cargando nombres de productos:", error);
    });

  divForm.appendChild(titulazo);
  divForm.appendChild(seleccionar);
  divForm.appendChild(borrar);
  contenidoPanel.appendChild(divForm);
}

botonProductos.addEventListener("click", cargarProductos);

const botonLlamado = document.querySelector(".llamado");
if (botonLlamado) {
  botonLlamado.addEventListener("click", () => {
    fetch("/llamar-mozo", { method: "POST" }).then(() => {
      Swal.fire({
        icon: "success",
        title: "Has llamado al mozo",
        toast: true,
        timer: 2000,
        position: "top-end",
        showConfirmButton: false,
      });
    });
  });
}

const evtSource = new EventSource("/stream");

evtSource.onmessage = function (event) {
  Swal.fire({
    icon: "info",
    title: "Llamado al mozo",
    text: event.data,
    confirmButtonColor: "#5c5353",
  });
};

evtSource.onerror = function (err) {
  console.error("Error en la conexión SSE:", err);
};
