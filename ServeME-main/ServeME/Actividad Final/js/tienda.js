document.addEventListener('DOMContentLoaded', function () {
    const botones = document.querySelectorAll('.tocame');

    // Marcar el primer botón como activo
    if (botones.length > 0) {
        botones[0].classList.remove('bg-dark', 'text-light');
        botones[0].classList.add('bg-success', 'text-black');
    }

    botones.forEach(boton => {
        boton.addEventListener('click', function() {
            botones.forEach(b => {
                b.classList.remove('bg-success', 'text-black');
                b.classList.add('bg-dark', 'text-light');
            });
            this.classList.remove('bg-dark', 'text-light');
            this.classList.add('bg-success', 'text-black');
        });
    });
});

function alertaMozo(id){
    Swal.fire({
        title: "Notificación",
        text: id,
        icon: "success",
        confirmButtonColor: "#12372A"
      });
}


function suma_Prod() {
    const cant_precio = document.querySelector(".cant_dinero")
    const cant_art = document.querySelector(".cant_prod");
    const precio_actual = document.querySelector(".botonito")

    let num_art = parseInt(cant_art.textContent);
    let num_precio = parseInt(cant_precio.textContent);
    let precio_acumulado = parseInt(precio_actual.textContent);
    cant_art.textContent = num_art + 1;
    precio_actual.textContent = num_precio + precio_acumulado;
}

// ------------------------------ CATEGORIAS ---------------------------------


const menu = [
    {
      nombre: "Milanesa Napolitana con Papas Fritas",
      precio: 650.00,
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6JJtcm-kvrrNyTNgYarlNpgb0ZzZrGxDklw&s",
      descripcion: "Clásica milanesa de ternera cubierta con salsa de tomate, jamón y mozzarella gratinada. Acompañada de crujientes papas fritas.",
      categoria: "Plato Principal",
    },
    {
      nombre: "Ravioles de Ricota y Espinaca con Salsa Boloñesa",
      precio: 580.50,
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6JJtcm-kvrrNyTNgYarlNpgb0ZzZrGxDklw&s",
      descripcion: "Delicados ravioles rellenos de ricota y espinaca, bañados en una sabrosa salsa boloñesa casera.",
      categoria: "Pastas",
    },
    {
      nombre: "Ensalada Caesar con Pollo Grillado",
      precio: 490.75,
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6JJtcm-kvrrNyTNgYarlNpgb0ZzZrGxDklw&s",
      descripcion: "Fresca ensalada con hojas de lechuga romana, croutons, queso parmesano y aderezo Caesar. Coronada con tiritas de pollo grillado.",
      categoria: "Ensaladas",
    },
    {
      nombre: "Hamburguesa Clásica con Queso Cheddar",
      precio: 520.90,
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6JJtcm-kvrrNyTNgYarlNpgb0ZzZrGxDklw&s",
      descripcion: "Jugosa hamburguesa de carne vacuna con queso cheddar fundido, lechuga, tomate y cebolla en pan brioche. Se sirve con papas rústicas.",
      categoria: "Hamburguesas",
    },
    {
      nombre: "Pizza Margarita",
      precio: 480.00,
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6JJtcm-kvrrNyTNgYarlNpgb0ZzZrGxDklw&s",
      descripcion: "Sencilla y deliciosa pizza con salsa de tomate, mozzarella fresca y hojas de albahaca.",
      categoria: "pizzas",
    },
    {
      nombre: "Tarta de Manzana con Helado de Vainilla",
      precio: 350.25,
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6JJtcm-kvrrNyTNgYarlNpgb0ZzZrGxDklw&s",
      descripcion: "Clásica tarta de manzana tibia, acompañada de una bocha de helado cremoso de vainilla.",
      categoria: "Postres",
    },
  ];
  
  const lista = document.querySelector(".list_prod")
 
    for(let x = 0; x < menu.length; x++){
        let divProd = document.createElement("div")
        divProd.className = "col-sm-12 col-md-6 col-lg-3 col-xl-3 my-2"
        divProd.innerHTML = ` <div class="card h-100">
             <img src="${menu[x].src}" class="card-img-top" alt="...">
             <div class="card-body d-flex text-center justify-content-between align-items-center">
               <div>
                 <h5 class="card-title"><strong>${menu[x].nombre}</strong></h5>
                 <h6 class="card-text fs-3 cant_dinero text-success"><strong>${menu[x].precio}</strong></h6>
               </div>
               <div>
                 <i class="btn bg-success bi bi-bag-check" onclick="alertaMozo('articulo agregado'),suma_Prod()"></i>
               </div>
             </div>
             <p class="m-0">
               <button class=" btn btn-secondary w-100 m-0 bg-success text-dark" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                 <strong>DESCRIPCION</strong>
               </button>
             </p>
             <div class="collapse" id="collapseExample">
               <div class="card card-body bg-dark text-success">
               ${menu[x].descripcion}
               </div>
             </div>
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

       /* function marcar(cat){
        if(cat == "bebidas"){
          if(cat != eleccion){
            boton_menu_1.classList.remove('border-dark')
            boton_menu_1.classList.add('border-light', 'border-3')
            boton_menu_2.classList.remove('border-light', 'border-3')
            boton_menu_2.classList.add('border-dark')
            boton_menu_3.classList.remove('border-light', 'border-3')
            boton_menu_3.classList.add('border-dark')
            boton_menu_4.classList.remove('border-light', 'border-3')
            boton_menu_4.classList.add('border-dark')
            eleccion = cat;
          }
        }
        if(cat == "postres"){
          if(cat != eleccion){

            boton_menu_1.classList.remove('border-light', 'border-3')
            boton_menu_1.classList.add('border-dark')
            boton_menu_2.classList.remove('border-dark')
            boton_menu_2.classList.add('border-light', 'border-3')
            boton_menu_3.classList.remove('border-light', 'border-3')
            boton_menu_3.classList.add('border-dark')
            boton_menu_4.classList.remove('border-light', 'border-3')
            boton_menu_4.classList.add('border-dark')
            eleccion = cat;
          }
        }
        if(cat == "hamburgesas"){
          if(cat != eleccion){
            boton_menu_1.classList.remove('border-light', 'border-3')
            boton_menu_1.classList.add('border-dark')
            boton_menu_2.classList.remove('border-light', 'border-3')
            boton_menu_2.classList.add('border-dark')
            boton_menu_3.classList.remove('border-dark')
            boton_menu_3.classList.add('border-light', 'border-3')
            boton_menu_3.classList.remove('border-light', 'border-3')
            boton_menu_3.classList.add('border-dark')
            boton_menu_4.classList.remove('border-light', 'border-3')
            boton_menu_4.classList.add('border-dark')
            eleccion = cat;
          }
        }       
         if(cat == "pizzas"){
          if(cat != eleccion){
            boton_menu_1.classList.remove('border-light', 'border-3')
            boton_menu_1.classList.add('border-dark')
            boton_menu_2.classList.remove('border-light', 'border-3')
            boton_menu_2.classList.add('border-dark')
            boton_menu_3.classList.remove('border-dark')
            boton_menu_3.classList.add('border-light', 'border-3')
            boton_menu_3.classList.remove('border-light', 'border-3')
            boton_menu_3.classList.add('border-dark')
            boton_menu_4.classList.remove('border-dark')
            boton_menu_4.classList.add('border-light', 'border-3')
            eleccion = cat;
          }
        }
       } */
       
       function cargar_menu(id){
          
        while(lista.hasChildNodes()){
            lista.removeChild(lista.firstChild)
        }
        for(let x = 0; x < menu.length; x++){
            if(id == menu[x].categoria){
                let divProd = document.createElement("div")
            divProd.className = "col-sm-12 col-md-6 col-lg-3 col-xl-3 my-2"
            divProd.innerHTML = ` <div class="card h-100">
                 <img src="${menu[x].src}" class="card-img-top" alt="...">
                 <div class="card-body d-flex text-center justify-content-between align-items-center">
                   <div>
                     <h5 class="card-title"><strong>${menu[x].nombre}</strong></h5>
                     <h6 class="card-text fs-3 cant_dinero text-success"><strong>${menu[x].precio}</strong></h6>
                   </div>
                   <div>
                     <i class="btn bg-success bi bi-bag-check" onclick="alertaMozo('articulo agregado'),suma_Prod()"></i>
                   </div>
                 </div>
                 <p class="m-0">
                   <button class=" btn btn-secondary w-100 m-0 bg-success text-dark" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                     <strong>DESCRIPCION</strong>
                   </button>
                 </p>
                 <div class="collapse" id="collapseExample">
                   <div class="card card-body bg-dark text-success">
                   ${menu[x].descripcion}
                   </div>
                 </div>
               </div>
           `; 
           lista.appendChild(divProd)
           }
            }
       }    