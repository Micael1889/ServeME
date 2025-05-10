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
  ];
  
  const lista = document.querySelector(".list-prod")
  const categorias = document.querySelector(".contenedor-categorias")

    for(let x = 0; x < menu.length;x++){
        let catProd = document.createElement("div")
        catProd.className = "categoria"
        catProd.innerHTML = `<h4 class="titulo-cat"><strong>${menu[x].categoria}</strong></h4>`;
        categorias.appendChild(catProd)
    }

    for(let x = 0; x < menu.length; x++){
        let divProd = document.createElement("div")
        divProd.className = "item"
        divProd.innerHTML = 
        `<img src="${menu[x].src}" alt="" width="40%"> 
        <div class="info-imp">
        <h3>${menu[x].nombre}</h3>
        <br>
        <p class="precio">$<span >${menu[x].precio}</span></p>
        </div>
        
       `;
       lista.appendChild(divProd)
       }

       const botonBebidas = document.getElementById("bebidas");
       const botonPostres = document.getElementById("postres");
       const botonHamburguesas = document.getElementById("hamburguesas");
       const botonPizzas = document.getElementById("pizzas");
       let eleccion = "";
       
       function desmarcarTodos() {
         botonBebidas.classList.remove('border-light', 'border-3');
         botonBebidas.classList.add('border-dark');
         botonPostres.classList.remove('border-light', 'border-3');
         botonPostres.classList.add('border-dark');
         botonHamburguesas.classList.remove('border-light', 'border-3');
         botonHamburguesas.classList.add('border-dark');
         botonPizzas.classList.remove('border-light', 'border-3');
         botonPizzas.classList.add('border-dark');
       }
       
       function marcar(cat) {
         desmarcarTodos();
       
         if (cat === "bebidas") {
           botonBebidas.classList.remove('border-dark');
           botonBebidas.classList.add('border-light', 'border-3');
         } else if (cat === "postres") {
           botonPostres.classList.remove('border-dark');
           botonPostres.classList.add('border-light', 'border-3');
         } else if (cat === "hamburguesas") {
           botonHamburguesas.classList.remove('border-dark');
           botonHamburguesas.classList.add('border-light', 'border-3');
         } else if (cat === "pizzas") {
           botonPizzas.classList.remove('border-dark');
           botonPizzas.classList.add('border-light', 'border-3');
         }
       
         eleccion = cat;
       }

       function cargar_menu(id){
          
        while(lista.hasChildNodes()){
            lista.removeChild(lista.firstChild)
        }
        for(let x = 0; x < menu.length; x++){
            if(id == menu[x].categoria){
                let divProd = document.createElement("div")
            divProd.className = "item"
            divProd.innerHTML = `<div class="info-imp">
            <h2>PIZZA DE RUCULA</h2>
            <P>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt, excepturi soluta at eum quisquam minima?</P> 
            <br>
            <p class="precio"><strong>$20000</strong></p>
            </div>
            <img src="../IMG/pizza.jpg" alt="" width="100px"> 
           `; 
           lista.appendChild(divProd)
           }
            }
       }  

