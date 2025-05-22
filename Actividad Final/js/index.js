/* Productos */
const menu = [
    {
      nombre: "Milanesa Napolitana con Papas Fritas",
      precio: 650.00,
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6JJtcm-kvrrNyTNgYarlNpgb0ZzZrGxDklw&s",
      descripcion: "Clásica milanesa de ternera cubierta con salsa de tomate, jamón y mozzarella gratinada. Acompañada de crujientes papas fritas.",
      categoria: "Plato Principal",
      srcBackground: "../IMG/cat_hamb.jpg"
    },
    {
      nombre: "Ravioles de Ricota y Espinaca con Salsa Boloñesa",
      precio: 580.50,
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6JJtcm-kvrrNyTNgYarlNpgb0ZzZrGxDklw&s",
      descripcion: "Delicados ravioles rellenos de ricota y espinaca, bañados en una sabrosa salsa boloñesa casera.",
      categoria: "Pastas",
      srcBackground: "../IMG/cat_hamb.jpg"
    },
    {
      nombre: "Ensalada Caesar con Pollo Grillado",
      precio: 490.75,
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6JJtcm-kvrrNyTNgYarlNpgb0ZzZrGxDklw&s",
      descripcion: "Fresca ensalada con hojas de lechuga romana, croutons, queso parmesano y aderezo Caesar. Coronada con tiritas de pollo grillado.",
      categoria: "Ensaladas",
      srcBackground: "../IMG/cat_hamb.jpg"
    },
    {
      nombre: "Hamburguesa Clásica con Queso Cheddar",
      precio: 520.90,
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6JJtcm-kvrrNyTNgYarlNpgb0ZzZrGxDklw&s",
      descripcion: "Jugosa hamburguesa de carne vacuna con queso cheddar fundido, lechuga, tomate y cebolla en pan brioche. Se sirve con papas rústicas.",
      categoria: "Hamburguesas",
      srcBackground: "../IMG/cat_hamb.jpg"
    },
    {
      nombre: "Pizza Margarita",
      precio: 480.00,
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6JJtcm-kvrrNyTNgYarlNpgb0ZzZrGxDklw&s",
      descripcion: "Sencilla y deliciosa pizza con salsa de tomate, mozzarella fresca y hojas de albahaca.",
      categoria: "pizzas",
      srcBackground: "../IMG/cat_hamb.jpg"
    },
    {
      nombre: "Tarta de Manzana con Helado de Vainilla",
      precio: 350.25,
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6JJtcm-kvrrNyTNgYarlNpgb0ZzZrGxDklw&s",
      descripcion: "Clásica tarta de manzana tibia, acompañada de una bocha de helado cremoso de vainilla.",
      categoria: "Postres",
      srcBackground: "../IMG/cat_pizza.jpg"
    },
    {
      nombre: "Milanesa Napolitana con Papas Fritas",
      precio: 650.00,
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6JJtcm-kvrrNyTNgYarlNpgb0ZzZrGxDklw&s",
      descripcion: "Clásica milanesa de ternera cubierta con salsa de tomate, jamón y mozzarella gratinada. Acompañada de crujientes papas fritas.",
      categoria: "Plato Principal",
      srcBackground: "../IMG/cat_hamb.jpg"
    },
    {
      nombre: "Ravioles de Ricota y Espinaca con Salsa Boloñesa",
      precio: 580.50,
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6JJtcm-kvrrNyTNgYarlNpgb0ZzZrGxDklw&s",
      descripcion: "Delicados ravioles rellenos de ricota y espinaca, bañados en una sabrosa salsa boloñesa casera.",
      categoria: "Pastas",
      srcBackground: "../IMG/cat_hamb.jpg"
    },
    {
      nombre: "Ensalada Caesar con Pollo Grillado",
      precio: 490.75,
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6JJtcm-kvrrNyTNgYarlNpgb0ZzZrGxDklw&s",
      descripcion: "Fresca ensalada con hojas de lechuga romana, croutons, queso parmesano y aderezo Caesar. Coronada con tiritas de pollo grillado.",
      categoria: "Ensaladas",
      srcBackground: "../IMG/cat_hamb.jpg"
    },
    {
      nombre: "Hamburguesa Clásica con Queso Cheddar",
      precio: 520.90,
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6JJtcm-kvrrNyTNgYarlNpgb0ZzZrGxDklw&s",
      descripcion: "Jugosa hamburguesa de carne vacuna con queso cheddar fundido, lechuga, tomate y cebolla en pan brioche. Se sirve con papas rústicas.",
      categoria: "Hamburguesas",
      srcBackground: "../IMG/cat_hamb.jpg"
    },
    {
      nombre: "Pizza Margarita",
      precio: 480.00,
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6JJtcm-kvrrNyTNgYarlNpgb0ZzZrGxDklw&s",
      descripcion: "Sencilla y deliciosa pizza con salsa de tomate, mozzarella fresca y hojas de albahaca.",
      categoria: "pizzas",
      srcBackground: "../IMG/cat_hamb.jpg"
    },
    {
      nombre: "Tarta de Manzana con Helado de Vainilla",
      precio: 350.25,
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6JJtcm-kvrrNyTNgYarlNpgb0ZzZrGxDklw&s",
      descripcion: "Clásica tarta de manzana tibia, acompañada de una bocha de helado cremoso de vainilla.",
      categoria: "Postres",
      srcBackground: "../IMG/cat_pizza.jpg"
    },
  ];
  
  /* -------------------------------- Fin Productos ------------------------------------- */
  
  
  
  /* -------------------------------- ALERTA MOZO ------------------------------------- */
    const llamadoMozo = document.querySelector(".llamado")
      function alertaMozo(event){
        console.log(event.target.textContent)
    Swal.fire({
        title: event.target.textContent,
        text: "Dimos aviso al mozo, aguarde unos minutos...",
        icon: "success",
        confirmButtonColor: "#5c5353"
      });}

      llamadoMozo.addEventListener("click", alertaMozo)



  /* -------------------------------- FIN ALERTA MOZO ------------------------------------- */

  
  const cat= []
  const lista = document.querySelector(".list-prod")
  const categorias = document.querySelector(".contenedor-categorias")

  /* Crear array de las categorias sin repetirlas */
  for(let x = 0;x < menu.length; x++){
    if(!cat.includes(menu[x].categoria)){
      cat.push(menu[x].categoria)
    }
  }
   /* FIN Crear array de las categorias sin repetirlas */
   
   /* CREACION DE TITULOS CAT Y PRODUCTOS */
    for(let x = 0; x<cat.length;x++){
      let tituloCat = document.createElement("h1")
      tituloCat.textContent = cat[x]
      lista.appendChild(tituloCat)
        for(let y = 0; y < menu.length; y++){
        if(cat[x] == menu[y].categoria){
                  let divProd = document.createElement("div")
        divProd.className = "item"
        divProd.innerHTML = 
        `<div class="info-imp">
        <h3>${menu[y].nombre}</h3>
        <br>
        <P>${menu[y].descripcion}</p>
        <p class="precio">$<span >${menu[y].precio}</span></p>
        </div>
        <img src="${menu[y].src}" alt="" width="40%">`;
        lista.appendChild(divProd)
        } }
    /* FIN CREACION DE TITULOS CAT Y PRODUCTOS */
    /* CREACION DE CATEGORIAS */
    }
    for(let x = 0; x < cat.length;x++){
        let catProd = document.createElement("div")
        catProd.className = "categoria"
        catProd.innerHTML = `<h4 class="titulo-cat" id=${cat[x]}>${cat[x]}</h4>`;
        categorias.appendChild(catProd)}
     /* FIN CREACION DE CATEGORIAS */
     /* FILTRO POR CATEGORIA */
      const categoriaElegida = document.getElementsByClassName("titulo-cat")
        function ElegirCategoria(event){
          console.log(event.target.id)
          if(event.target.id !== ""){
                      divProd = ""
          while(lista.hasChildNodes()){
            lista.removeChild(lista.firstChild)
          }
        let tituloCat = document.createElement("h1")
        tituloCat.textContent = event.target.id
        lista.appendChild(tituloCat)
        for(let y = 0; y < menu.length; y++){
        if(event.target.id == menu[y].categoria){
        let divProd = document.createElement("div")
        divProd.className = "item"
        divProd.innerHTML = 
        `<div class="info-imp">
        <h3>${menu[y].nombre}</h3>
        <br>
        <p class="precio">$<span>${menu[y].precio}</span></p>
        </div>
        <img src="${menu[y].src}" alt="" width="40%">`;
        lista.appendChild(divProd)
        }}}}
        categorias.addEventListener("click", ElegirCategoria)
      /* FIN FILTRO POR CATEGORIA */
    

  /* -------------------------------- ALERTA item agregado ------------------------------------- */
    const montoTotal = document.getElementById("montoTotal")
    var total = 0;
    montoTotal.textContent = total
    var cantProd = document.getElementById("cant")
    var totalProd = 0;
    cantProd.textContent = totalProd

function suma_Prod(event) {
  let producto = event.target.closest(".item");
  let nombre = producto.querySelector('h3').textContent
  let precio = producto.querySelector(".precio span").textContent
  precio = parseFloat(precio)
  total +=  precio
  montoTotal.innerHTML = ""
  montoTotal.innerHTML = total
  totalProd += 1;
  cantProd.textContent = totalProd
  Swal.fire({
  position: "center",
  icon: "success",
  title: `Item ${nombre} agregado al carrito `,
  showConfirmButton: false,
  timer: 1500
});
}
lista.addEventListener("click", suma_Prod)
