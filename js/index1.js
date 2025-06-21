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

    await delay(2000);

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
    precio: 17500,
    src: "https://estacionpalero.com.ar/wp-content/uploads/2024/10/Milanesa-Napo.webp",
    descripcion:
      "Clásica milanesa de ternera cubierta con salsa de tomate, jamón y mozzarella gratinada. Acompañada de crujientes papas fritas.",
    categoria: "Plato Principal",
    srcBackground: "../IMG/cat_hamb.jpg",
  },
  {
    nombre: "Milanesa a Caballo con Papas Fritas",
    precio: 17500,
    src: "https://cdn.pedix.app/f7I4XPw3D6tzRO98Wiiy/products/1720187327272-84829.png?size=800x800",
    descripcion:
      "Clásica milanesa de ternera con dos huevo a caballo, Acompañada de crujientes papas fritas.",
    categoria: "Plato Principal",
    srcBackground: "../IMG/cat_hamb.jpg",
  },
  {
    nombre: "Ravioles de Ricota y Espinaca con Salsa",
    precio: 8200,
    src: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhng2qC8Yq1hRjZxdly212oTIee2_E9gpMIeNjWzK9rZPntS2xFnBCzR_HV_-Y3G5anJoPmkOEYgkUpkFh36f-77x4F4o9yJbQww2qrm0Yi48HDBowZ3BbI4t4kuv4JD2OypljRas6tPNd3/s1600/DSC08998.JPG",
    descripcion:
      "Ravioles rellenos de ricota y espinaca, bañados en una sabrosa salsa casera.",
    categoria: "Pastas",
    srcBackground: "../IMG/cat_hamb.jpg",
  },
  {
    nombre: "Ravioles de Carne y Verdura con salsa casera",
    precio: 8200,
    src: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhng2qC8Yq1hRjZxdly212oTIee2_E9gpMIeNjWzK9rZPntS2xFnBCzR_HV_-Y3G5anJoPmkOEYgkUpkFh36f-77x4F4o9yJbQww2qrm0Yi48HDBowZ3BbI4t4kuv4JD2OypljRas6tPNd3/s1600/DSC08998.JPG",
    descripcion:
      "Delicados ravioles rellenos de ricota y espinaca, bañados en una sabrosa salsa boloñesa casera.",
    categoria: "Pastas",
    srcBackground: "../IMG/cat_hamb.jpg",
  },
  {
    nombre: "Ensalada Caesar con Pollo Grillado",
    precio: 10000,
    src: "https://ensaladacesar.info/img/ensalada-cesar-con-bacon-y-pollo-901.jpg",
    descripcion:
      "Fresca ensalada con hojas de lechuga romana, croutons, queso parmesano y aderezo Caesar. Coronada con tiritas de pollo grillado.",
    categoria: "Ensaladas",
    srcBackground: "../IMG/cat_hamb.jpg",
  },
  {
    nombre: "Ensalada de Arroz y Atun",
    precio: 10700,
    src: "https://resizer.glanacion.com/resizer/v2/arroz-con-QBUV6I5STJFHNIAMPE37EHGE2M.JPG?auth=460a1971bc9faf167e1ca82ca407bac327493cba2f3d93f16d2a56f54b8ff4c1&width=1200&height=800&quality=70&smart=true",
    descripcion:
      "Fresca ensalada con arroz, atun, choclo, huevo y tomate",
    categoria: "Ensaladas",
    srcBackground: "../IMG/cat_hamb.jpg",
  },

  {
    nombre: "Hamburguesa Clasica con Queso Cheddar",
    precio: 6900,
    src: "https://deananddennys.com/stage/contenidos/1612363992.jpg",
    descripcion:
      "Jugosa hamburguesa de carne vacuna con queso cheddar fundido, lechuga, tomate y cebolla en pan brioche. Se sirve con papas rústicas.",
    categoria: "Hamburguesas",
    srcBackground: "../IMG/cat_hamb.jpg",
  },
{
    nombre: "Hamburguesa Clásica Doble con Queso Cheddar",
    precio: 8500,
    src: "https://static.wixstatic.com/media/29cc8e_aaad1f9b690b4176a0cef213b971f787~mv2.jpg/v1/fill/w_1000,h_667,al_c,q_85,usm_0.66_1.00_0.01/29cc8e_aaad1f9b690b4176a0cef213b971f787~mv2.jpg",
    descripcion:
      "Jugosa hamburguesa de carne vacuna con queso cheddar fundido, lechuga, tomate y cebolla en pan brioche. Se sirve con papas rústicas.",
    categoria: "Hamburguesas",
    srcBackground: "../IMG/cat_hamb.jpg",
  },
  {
    nombre: "Pizza Muzzarella",
    precio: 13000,
    src: "https://breaders.com.ar/web/wp-content/uploads/2022/01/pizzas-muzzarella.jpg",
    descripcion:
      "Sencilla y deliciosa pizza con salsa de tomate, mozzarella fresca ",
    categoria: "pizzas",
    srcBackground: "../IMG/cat_hamb.jpg",
  },

  {
    nombre: "Pizza Margarita",
    precio: 13000,
    src: "https://preppykitchen.com/wp-content/uploads/2024/01/Margherita-Pizza-Recipe-Card-500x500.jpg",
    descripcion:
      "Sencilla y deliciosa pizza con salsa de tomate, mozzarella fresca y hojas de albahaca.",
    categoria: "pizzas",
    srcBackground: "../IMG/cat_hamb.jpg",
  },

  {
    nombre: "Helado de Una Bocha",
    precio: 1500,
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8LxSOZVLcBPIm7yL7mifud7NRL_NHOcPh6nHSdHSR_WWR_9Yt1PrwAh046vL8ok84Py4&usqp=CAU",
    descripcion:
      "Gusto a eleccion: Frutilla, Chocolate, Limon, Vainilla y Dulce de leche",
    categoria: "Postres",
    srcBackground: "../IMG/cat_pizza.jpg",
  },
  
  {
    nombre: "Helado de Dos Bochas",
    precio: 2000,
    src: "https://tastyrails.com.ar/wp-content/uploads/2024/01/conos-combinados.jpg",
    descripcion:
      "Dos gustos a eleccion: Frutilla, Chocolate, Limon, Vainilla y Dulce de leche",
    categoria: "Postres",
    srcBackground: "../IMG/cat_pizza.jpg",
  },

  {
    nombre: "CocaCola",
    precio: 900,
    src: "https://acdn-us.mitiendanube.com/stores/861/458/products/340341-3359c763f08b338b2b15680466868435-1024-1024.jpg",
    descripcion:
      "Lata de CocaCola 350 ml",
    categoria: "Bebidas",
    srcBackground: "../IMG/cat_hamb.jpg",
  },
  {
    nombre: "Sprite",
    precio: 900,
    src: "https://jumboargentina.vtexassets.com/arquivos/ids/791795/Gaseosa-Sprite-Lima-lim-n-354-Ml-2-11040.jpg?v=638291793644700000",
    descripcion:
      "Lata de Sprite 350 ml",
    categoria: "Bebidas",
    srcBackground: "../IMG/cat_hamb.jpg",
  },
  {
    nombre: "Agua sin Gas",
    precio: 1100,
    src: "https://acdn-us.mitiendanube.com/stores/798/865/products/48146782-8488201d17fe506c1f16639330522874-1024-1024.jpg",
    descripcion:
      "Botellita de Agua sin Gas 500 ml",
    categoria: "Bebidas",
    srcBackground: "../IMG/cat_hamb.jpg",
  },
  
];

//inicio carrito n1ck


//mostrar carrito
function mostrarCarrito() {
  const contenedor = document.getElementById("contenedor-productos-carrito");
  const carrito = JSON.parse(localStorage.getItem("carrito")) || [];
  contenedor.innerHTML = "";

  let subtotal = 0;

  carrito.forEach(producto => {
    const div = document.createElement("div");
    div.classList.add("producto");

    subtotal += producto.precio * producto.cantidad;

    div.innerHTML = `
      <img class="img-carrito" src="${producto.src}" alt="${producto.nombre}">
      <div class="detalle-producto">
        <p class="desc-carrito"><strong>${producto.nombre}</strong></p>
        <p class="desc-carrito">$${producto.precio}</p>
      </div>
      <div class="controles">
        <button onclick="cambiarCantidad('${producto.nombre}', -1)">-</button>
        <span>${producto.cantidad}</span>
        <button onclick="cambiarCantidad('${producto.nombre}', 1)">+</button>
      </div>
    `;

    contenedor.appendChild(div);
  });

  document.querySelector(".subtotal").textContent = `Subtotal: $${subtotal}`;
}
//cambiar cantidad
function cambiarCantidad(nombre, cambio) {
  let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
  const producto = carrito.find(p => p.nombre === nombre);
  if (!producto) return;

  producto.cantidad += cambio;

  if (producto.cantidad <= 0) {
    carrito = carrito.filter(p => p.nombre !== nombre);
  }

  localStorage.setItem("carrito", JSON.stringify(carrito));
  mostrarCarrito();
  actualizarContador();
}
//agregar al carrito
function agregarAlCarrito(producto) {
  let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

  const existente = carrito.find(p => p.nombre === producto.nombre);
  if (existente) {
    existente.cantidad += 1;
  } else {
    carrito.push({ ...producto, cantidad: 1 });
  }

  localStorage.setItem("carrito", JSON.stringify(carrito));
  actualizarContador();
}
//contador visual
function actualizarContador() {
  const carrito = JSON.parse(localStorage.getItem("carrito")) || [];
  const total = carrito.reduce((acc, p) => acc + p.cantidad, 0);
  document.getElementById("cant").textContent = total > 0 ? total : "";
}
//toggle carrito
function toggleCarrito() {
  const carritoSection = document.getElementById("carrito-desplegable");
  if (carritoSection.style.display === "none") {
    carritoSection.style.display = "block";
    mostrarCarrito();
  } else {
    carritoSection.style.display = "none";
  }
}
//cargar pagina 
document.addEventListener("DOMContentLoaded", () => {
  mostrarProductosAgrupados();
  mostrarCarrito();
  actualizarContador();
});

function mostrarProductosAgrupados() {
  const contenedor = document.querySelector(".list-prod");
  contenedor.innerHTML = "";

  const categoriasUnicas = [...new Set(menu.map(p => p.categoria))];

  categoriasUnicas.forEach(cat => {
    const contenedorSeccion = crearElemento("div", "", "", "", "lista-categoria-items");
    const tituloCat = crearElemento("h1", cat, "", "", "titulo");
    contenedorSeccion.appendChild(tituloCat);

    menu.filter(p => p.categoria === cat).forEach(producto => {
      const divProducto = crearProductoItem(producto);
      contenedorSeccion.appendChild(divProducto);
    });

    contenedor.appendChild(contenedorSeccion);
  });
}
//funcion confirmar pedido
function confirmarPedido() {
  localStorage.removeItem("carrito");
  mostrarCarrito();
  actualizarContador();
  toggleCarrito();
  Swal.fire({
    icon: 'success',
    title: '¡Pedido confirmado!',
    text: 'Paga con MercadoPago',
    confirmButtonColor: '#3085d6'
  });
}
function crearProductoItem(producto) {
  const divProd = crearElemento("div", "", "", "", "item");
  const divProd2 = crearElemento("div", "", "", "", "info-imp");

  const h3DivProd2 = crearElemento("h3", producto.nombre);
  const pDivProd2 = crearElemento("p", producto.descripcion, "", "", "desc");
  const precioDivProd2 = crearElemento("p", "", "", "", "precio");
  precioDivProd2.innerHTML = `$<span class="precio-item">${producto.precio}</span>`;

  const imgDivProd = crearElemento("img");
  imgDivProd.setAttribute("src", producto.src);
  imgDivProd.setAttribute("alt", producto.nombre);

  const btnAgregar = crearElemento("button", "Agregar", "", "", "btn-agregar");
  btnAgregar.addEventListener("click", () => {
    const prodOriginal = menu.find(p => p.nombre === producto.nombre);
    if (prodOriginal) {
      agregarAlCarrito(prodOriginal); // Agrega el producto real
      Swal.fire({
        position: "center",
        icon: "success",
        title: `${producto.nombre} agregado al carrito`,
        showConfirmButton: false,
        timer: 800,
      });
    }
  });

  divProd2.appendChild(h3DivProd2);
  divProd2.appendChild(pDivProd2);
  divProd2.appendChild(precioDivProd2);
  divProd.appendChild(divProd2);
  divProd.appendChild(imgDivProd);
  divProd.appendChild(btnAgregar);

  return divProd;
}
function mostrarProductos() {
  const contenedor = document.querySelector(".list-prod");
  contenedor.innerHTML = "";

  menu.forEach(producto => {
    const divProducto = crearProductoItem(producto);
    contenedor.appendChild(divProducto);
  });
}
function crearProductoItem(producto) {
  const divProd = crearElemento("div", "", "", "", "item");
  const divProd2 = crearElemento("div", "", "", "", "info-imp");

  const h3DivProd2 = crearElemento("h3", producto.nombre);
  const pDivProd2 = crearElemento("p", producto.descripcion, "", "", "desc");
  const precioDivProd2 = crearElemento("p", "", "", "", "precio");
  precioDivProd2.innerHTML = `$<span class="precio-item">${producto.precio}</span>`;

  const imgDivProd = crearElemento("img");
  imgDivProd.setAttribute("src", producto.src);
  imgDivProd.setAttribute("alt", producto.nombre);

  //a l hacer clic en todo el div, se agrega al carrito
  divProd.addEventListener("click", () => {
    agregarAlCarrito(producto);
    Swal.fire({
      position: "center",
      icon: "success",
      title: `${producto.nombre} agregado al carrito`,
      showConfirmButton: false,
      timer: 800,
    });
  });

  divProd2.appendChild(h3DivProd2);
  divProd2.appendChild(pDivProd2);
  divProd2.appendChild(precioDivProd2);
  divProd.appendChild(divProd2);
  divProd.appendChild(imgDivProd);

  return divProd;
}
 
//fin carrito n1ck

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
      precioDivProd2.innerHTML = `$<span class = "precio-item ">${menu[y].precio}</span>`;
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
  if (event.target.id !== "") {
    lista.classList.remove("list-entrando");
    lista.classList.add("list-saliendo");
    await delay(1000);
    lista.classList.remove("list-saliendo");
    lista.classList.add("list-entrando");

    while (lista.hasChildNodes()) {
      lista.removeChild(lista.firstChild);
    }

    const tituloCat = crearElemento("h1", event.target.id, "", "", "titulo");
    lista.appendChild(tituloCat);

    for (let y = 0; y < menu.length; y++) {
      if (event.target.id == menu[y].categoria) {
        const divProd = crearProductoItem(menu[y]); // 👈 ESTO AGREGA EL EVENTO
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
    title: `${nombre} agregado al carrito `,
    showConfirmButton: false,
    timer: 800,
  });
}
lista.addEventListener("click", suma_Prod);

/* -------------------------------- Fin ALERTA item agregado ------------------------------------- */
