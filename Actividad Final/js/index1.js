/* Funciones principales */
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
/* FIN Funciones principales */
/* Avisos */
const aviso = [
  {
    titulo: " MENU DEL DIA",
    descripcion: " MC poshhini",
    srcIMG: "../IMG/pngwing.com.png",
  },
  {
    titulo: " Happy Hour",
    descripcion: " De 18hshs a 22hs",
    srcIMG: "../IMG/pngegg (1).png",
  },
  {
    titulo: " BOMBARDINO CROCODILO",
    descripcion: " MC poshhini",
    srcIMG: "../IMG/iconazo.png",
  },
];
const contenedorAviso = document.querySelector(".contenedor-avisos");

function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function addAvisosWithDelay() {
  if (aviso.length === 0) {
    return;
  }
  var x = 0;

  while (true) {
    const currentAviso = aviso[x];

    let divDesc = crearElemento(
      "div",
      "",
      "",
      "",
      "descripcion-aviso desc-entrando"
    ); // Añade 'desc-entrando' aquí
    let h1Desc = crearElemento("h1", currentAviso.titulo, "", "");
    let pDesc = crearElemento("p", currentAviso.descripcion, "", "");
    divDesc.appendChild(h1Desc);
    divDesc.appendChild(pDesc);

    let imgElem = crearElemento("img", "", "", "", "img-aviso img-entrando"); // Añade 'img-entrando' aquí
    imgElem.setAttribute("src", currentAviso.srcIMG);
    imgElem.width = "150";
    imgElem.height = "150";

    contenedorAviso.appendChild(divDesc);
    contenedorAviso.appendChild(imgElem);

    await delay(1000);

    divDesc.classList.remove("desc-entrando");
    imgElem.classList.remove("img-entrando");

    await delay(3000);

    divDesc.classList.add("desc-saliendo");
    imgElem.classList.add("img-saliendo");

    await delay(1000);

    contenedorAviso.innerHTML = "";

    if (x === aviso.length - 1) {
      x = 0;
    } else {
      x++;
    }
  }
}
addAvisosWithDelay();
/* Fin avisos */
/* Productos */
const menu = [
  {
    nombre: "Milanesa Napolitana con Papas Fritas",
    precio: 650.0,
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6JJtcm-kvrrNyTNgYarlNpgb0ZzZrGxDklw&s",
    descripcion:
      "Clásica milanesa de ternera cubierta con salsa de tomate, jamón y mozzarella gratinada. Acompañada de crujientes papas fritas.",
    categoria: "Plato Principal",
    srcBackground: "../IMG/cat_hamb.jpg",
  },
  {
    nombre: "Ravioles de Ricota y Espinaca con Salsa Boloñesa",
    precio: 580.5,
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6JJtcm-kvrrNyTNgYarlNpgb0ZzZrGxDklw&s",
    descripcion:
      "Delicados ravioles rellenos de ricota y espinaca, bañados en una sabrosa salsa boloñesa casera.",
    categoria: "Pastas",
    srcBackground: "../IMG/cat_hamb.jpg",
  },
  {
    nombre: "Ensalada Caesar con Pollo Grillado",
    precio: 490.75,
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6JJtcm-kvrrNyTNgYarlNpgb0ZzZrGxDklw&s",
    descripcion:
      "Fresca ensalada con hojas de lechuga romana, croutons, queso parmesano y aderezo Caesar. Coronada con tiritas de pollo grillado.",
    categoria: "Ensaladas",
    srcBackground: "../IMG/cat_hamb.jpg",
  },
  {
    nombre: "Hamburguesa Clásica con Queso Cheddar",
    precio: 520.9,
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6JJtcm-kvrrNyTNgYarlNpgb0ZzZrGxDklw&s",
    descripcion:
      "Jugosa hamburguesa de carne vacuna con queso cheddar fundido, lechuga, tomate y cebolla en pan brioche. Se sirve con papas rústicas.",
    categoria: "Hamburguesas",
    srcBackground: "../IMG/cat_hamb.jpg",
  },
  {
    nombre: "Pizza Margarita",
    precio: 480.0,
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6JJtcm-kvrrNyTNgYarlNpgb0ZzZrGxDklw&s",
    descripcion:
      "Sencilla y deliciosa pizza con salsa de tomate, mozzarella fresca y hojas de albahaca.",
    categoria: "pizzas",
    srcBackground: "../IMG/cat_hamb.jpg",
  },
  {
    nombre: "Tarta de Manzana con Helado de Vainilla",
    precio: 350.25,
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6JJtcm-kvrrNyTNgYarlNpgb0ZzZrGxDklw&s",
    descripcion:
      "Clásica tarta de manzana tibia, acompañada de una bocha de helado cremoso de vainilla.",
    categoria: "Postres",
    srcBackground: "../IMG/cat_pizza.jpg",
  },
  {
    nombre: "Milanesa Napolitana con Papas Fritas",
    precio: 650.0,
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6JJtcm-kvrrNyTNgYarlNpgb0ZzZrGxDklw&s",
    descripcion:
      "Clásica milanesa de ternera cubierta con salsa de tomate, jamón y mozzarella gratinada. Acompañada de crujientes papas fritas.",
    categoria: "Plato Principal",
    srcBackground: "../IMG/cat_hamb.jpg",
  },
  {
    nombre: "Ravioles de Ricota y Espinaca con Salsa Boloñesa",
    precio: 580.5,
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6JJtcm-kvrrNyTNgYarlNpgb0ZzZrGxDklw&s",
    descripcion:
      "Delicados ravioles rellenos de ricota y espinaca, bañados en una sabrosa salsa boloñesa casera.",
    categoria: "Pastas",
    srcBackground: "../IMG/cat_hamb.jpg",
  },
  {
    nombre: "Ensalada Caesar con Pollo Grillado",
    precio: 490.75,
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6JJtcm-kvrrNyTNgYarlNpgb0ZzZrGxDklw&s",
    descripcion:
      "Fresca ensalada con hojas de lechuga romana, croutons, queso parmesano y aderezo Caesar. Coronada con tiritas de pollo grillado.",
    categoria: "Ensaladas",
    srcBackground: "../IMG/cat_hamb.jpg",
  },
  {
    nombre: "Hamburguesa Clásica con Queso Cheddar",
    precio: 520.9,
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6JJtcm-kvrrNyTNgYarlNpgb0ZzZrGxDklw&s",
    descripcion:
      "Jugosa hamburguesa de carne vacuna con queso cheddar fundido, lechuga, tomate y cebolla en pan brioche. Se sirve con papas rústicas.",
    categoria: "tun tun sahur",
    srcBackground: "../IMG/cat_hamb.jpg",
  },
  {
    nombre: "Pizza Margarita",
    precio: 480.0,
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6JJtcm-kvrrNyTNgYarlNpgb0ZzZrGxDklw&s",
    descripcion:
      "Sencilla y deliciosa pizza con salsa de tomate, mozzarella fresca y hojas de albahaca.",
    categoria: "bombardino",
    srcBackground: "../IMG/cat_hamb.jpg",
  },
  {
    nombre: "Tarta de Manzana con Helado de Vainilla",
    precio: 350.25,
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6JJtcm-kvrrNyTNgYarlNpgb0ZzZrGxDklw&s",
    descripcion:
      "Clásica tarta de manzana tibia, acompañada de una bocha de helado cremoso de vainilla.",
    categoria: "tralalero",
    srcBackground: "../IMG/cat_pizza.jpg",
  },
];
/* Fin Productos */

const cat = [];
const lista = document.querySelector(".list-prod");
const categorias = document.querySelector(".contenedor-categorias");

/* Crear array de las categorias sin repetirlas */
for (let x = 0; x < menu.length; x++) {
  if (!cat.includes(menu[x].categoria)) {
    cat.push(menu[x].categoria);
  }
}
/* FIN Crear array de las categorias sin repetirlas */

/* CREACION DE TITULOS CAT Y PRODUCTOS */
for (let x = 0; x < cat.length; x++) {
  const contenedorSeccionCat = crearElemento(
    "div",
    "",
    "",
    "",
    "lista-categoria-items"
  );
  tituloCat = crearElemento("h1", cat[x], "", "", "titulo");
  contenedorSeccionCat.appendChild(tituloCat);
  for (let y = 0; y < menu.length; y++) {
    if (cat[x] == menu[y].categoria) {
      let divProd = crearElemento("div", "", "", "", "item");
      let divProd2 = crearElemento("div", "", "", "", "info-imp");
      let h3DivProd2 = crearElemento("h3", menu[y].nombre);
      let pDivProd2 = crearElemento("p", menu[y].descripcion, "", "", "desc");
      let precioDivProd2 = crearElemento("p", "", "", "", "precio");
      precioDivProd2.innerHTML = `$<span>${menu[y].precio}</span>`;
      let imgDivProd = crearElemento("img");
      imgDivProd.setAttribute("src", menu[y].src);
      divProd2.appendChild(h3DivProd2);
      divProd2.appendChild(pDivProd2);
      divProd2.appendChild(precioDivProd2);
      divProd.appendChild(divProd2);
      divProd.appendChild(imgDivProd);
      contenedorSeccionCat.appendChild(divProd);
    }
  }
  lista.appendChild(contenedorSeccionCat);
}

/* CREACION DE CATEGORIAS */
for (let x = 0; x < cat.length; x++) {
  let catProd = crearElemento("div", "", "", "", "categoria carousel__slide");
  let h4catProd = crearElemento("h4", cat[x], "", "", "titulo-cat", cat[x]);
  catProd.appendChild(h4catProd);
  categorias.appendChild(catProd);
}
/* FIN CREACION DE CATEGORIAS */
/* FILTRO POR CATEGORIA */
const categoriaElegida = document.getElementsByClassName("titulo-cat");
async function ElegirCategoria(event) {
  console.log(event.target.id);
  if (event.target.id !== "") {
    divProd = "";
    lista.classList.remove("list-entrando");
    lista.classList.add("list-saliendo");
    await delay(1000);
    lista.classList.remove("list-saliendo");
    lista.classList.add("list-entrando");
    while (lista.hasChildNodes()) {
      lista.removeChild(lista.firstChild);
    }
    tituloCat = crearElemento("h1", event.target.id, "", "", "titulo");
    lista.appendChild(tituloCat);
    for (let y = 0; y < menu.length; y++) {
      if (event.target.id == menu[y].categoria) {
        let divProd = crearElemento("div", "", "", "", "item");
        let divProd2 = crearElemento("div", "", "", "", "info-imp");
        let h3DivProd2 = crearElemento("h3", menu[y].nombre);
        let brDivProd = crearElemento("br");
        let pDivProd2 = crearElemento("p", menu[y].descripcion, "", "", "desc");
        let precioDivProd2 = crearElemento("p", "", "", "", "precio");
        precioDivProd2.innerHTML = `$<span>${menu[y].precio}</span>`;
        let imgDivProd = crearElemento("img");
        imgDivProd.setAttribute("src", menu[y].src);
        imgDivProd.setAttribute("alt", "");
        divProd2.appendChild(h3DivProd2);
        divProd2.appendChild(brDivProd);
        divProd2.appendChild(pDivProd2);
        divProd2.appendChild(precioDivProd2);
        divProd.appendChild(divProd2);
        divProd.appendChild(imgDivProd);
        lista.appendChild(divProd);
      }
    }
  }
}
categorias.addEventListener("click", ElegirCategoria);

/* FIN FILTRO POR CATEGORIA */
/* -------------------------------- ALERTA MOZO ------------------------------------- */
const llamadoMozo = document.querySelector(".llamado");
function alertaMozo(event) {
  console.log(event.target.textContent);
  Swal.fire({
    title: event.target.textContent,
    text: "Dimos aviso al mozo, aguarde unos minutos...",
    icon: "success",
    confirmButtonColor: "#5c5353",
  });
}

llamadoMozo.addEventListener("click", alertaMozo);

/* -------------------------------- FIN ALERTA MOZO ------------------------------------- */
/* -------------------------------- ALERTA item agregado ------------------------------------- */
const montoTotal = document.getElementById("montoTotal");
var total = 0;
montoTotal.innerHTML = `$${total}`;
var cantProd = document.getElementById("cant");
var totalProd = 0;
cantProd.textContent = totalProd;

function suma_Prod(event) {
  let producto = event.target.closest(".item");
  let nombre = producto.querySelector("h3").textContent;
  let precio = producto.querySelector(".precio span").textContent;
  precio = parseFloat(precio);
  total += precio;
  montoTotal.innerHTML = "";
  montoTotal.innerHTML = `$${total}`;
  totalProd += 1;
  cantProd.textContent = totalProd;
  Swal.fire({
    position: "center",
    icon: "success",
    title: `Item ${nombre} agregado al carrito `,
    showConfirmButton: false,
    timer: 1500,
  });
}
lista.addEventListener("click", suma_Prod);

/* -------------------------------- Fin ALERTA item agregado ------------------------------------- */
