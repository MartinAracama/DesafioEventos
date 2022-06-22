const BASE = [
  {
    id: 1,
    nombre: "Royal Leblon",
    descripcion: "Dos medallones de carne de 100gr. dos fetas de queso cheddar, panceta, cebolla caramelizada y salsa Leblon en pan brioche",
    img: "./assets/img/Royal.jpg",
    precio: 1190,
    cantidad: 1,
  },
  {
    id: 2,
    nombre: "Americana",
    descripcion: "Dos medallones de carne de 100gr. dos fetas de queso cheddar, tomate, lechuga, cebolla, pepinos, panceta y salsa Leblon en pan brioche",
    img: "./assets/img/americana.jpg",
    precio: 1190,
    cantidad: 1,
  },
  {
    id: 3,
    nombre: "Crispy",
    descripcion: "Dos medallones de carne de 100gr. dos fetas de queso cheddar, panceta, cebolla crispy y alioli en pan brioche",
    img: "./assets/img/crispy.jpg",
    precio: 1190,
    cantidad: 1,
  },
  {
    id: 4,
    nombre: "Doble Cuarto de Libra",
    descripcion: "Dos medallones de carne de 100gr. dos fetas de queso cheddar, cebolla cruda en bruniore, pepinos, ketchup y mostaza en pan brioche",
    img: "./assets/img/doble-cuarto-libra.jpg",
    precio: 990,
    cantidad: 1,
  },
  {
    id: 5,
    nombre: "Triple Leblon",
    descripcion: "Tres medallones de carne de 100gr. tres fetas de queso cheddar, panceta y salsa Leblon en pan brioche",
    img: "./assets/img/triple-leblon.jpg",
    precio: 1300,
    cantidad: 1,
  },
  {
    id: 6,
    nombre: "Doble Cheeseburger",
    descripcion: "Dos medallones de carne de 100gr. tres fetas de queso cheddar en pan brioche",
    img: "./assets/img/doble-cheseeburger.jpg",
    precio: 990,
    cantidad: 1,
  },
  {
    id: 7,
    nombre: "La de Roque",
    descripcion: "Dos medallones de carne de 100gr. una feta de queso marbled, queso azul, cebolla caramelizada, champignones salteados en manteca y rúcula en pan brioche",
    img: "./assets/img/Roque.jpg",
    precio: 1190,
    cantidad: 1,
  },
  {
    id: 8,
    nombre: "Veggie",
    descripcion: "Un medallon de vegatales Not Co, una feta de queso dambo, una feta de queso marbled, tomate, rúcula, cebolla caramelizada y champignones salteados en manteca en pan brioche",
    img: "./assets/img/veggie.jpg",
    precio: 1190,
    cantidad: 1,
  },
  {
    id: 9,
    nombre: "Papas Fritas",
    descripcion: "Porción de nuestras papas fritas clásicas",
    img: "./assets/img/papas-fritas.jpg",
    precio: 500,
    cantidad: 1,
  },
  {
    id: 10,
    nombre: "Papas Fritas con Cheddar y Panceta",
    descripcion: "Porción de nuestras clásicas papas fritas, bañadas en queso cheddar con lonjas de panceta",
    img: "./assets/img/papas-cheddar-panceta.jpg",
    precio: 700,
    cantidad: 1,
  },
  {
    id: 11,
    nombre: "APA Escalada",
    descripcion: "Tirada Artesanal - Pinta",
    img: "./assets/img/cerveza-apa.jpg",
    precio: 380,
    cantidad: 1,
  },
  {
    id: 12,
    nombre: "IPA Escalada",
    descripcion: "Tirada Artesanal - Pinta",
    img: "./assets/img/cerveza-ipa.jpg",
    precio: 380,
    cantidad: 1,
  },
  {
    id: 13,
    nombre: "Irish Escalada",
    descripcion: "Tirada Artesanal - Pinta",
    img: "./assets/img/cerveza-irish.jpg",
    precio: 380,
    cantidad: 1,
  },
  {
    id: 14,
    nombre: "Stout Beata",
    descripcion: "Tirada Artesanal - Pinta",
    img: "./assets/img/cerveza-stout.jpg",
    precio: 400,
    cantidad: 1,
  },
  {
    id: 15,
    nombre: "Le Blonde Escalada",
    descripcion: "Tirada Artesanal - Pinta",
    img: "./assets/img/cerveza-le-blonde.jpg",
    precio: 350,
    cantidad: 1,
  },
  {
    id: 16,
    nombre: "Gaseosa - Coca Cola/Sprite/Fanta",
    descripcion: "En botella Pet de 500ml",
    img: "./assets/img/gaseosa.jpg",
    precio: 270,
    cantidad: 1,
  },
];

const carritoContainer = document.querySelector("#carritoContainer")
const contadorCarrito = document.querySelector("#contadorCarrito")
const precioTotal = document.querySelector("#precioTotal")
const botonVaciarCarrito = document.querySelector("vaciarCarrito")

let carrito = [];


let total = 0;

function renderizarProductos() {
  let tienda = document.getElementById("tienda");

  BASE.forEach((e) => {
    let productoHTML = `

        <div class="col-12 col-md-4 mb-5 d-flex justify-content-center">
        <div class="card text-dark" style="width: 18rem;">
            <img class="card-img-top" src="${e.img}" alt="Card image cap">
            <div class="card-body">
                <h5 class="card-title">${e.nombre}</h5>
                <p class="card-text">${e.descripcion}</p>
                <p>$${e.precio}</p>
                <button class="btn btn-primary" onClick="agregarProductoAlCarrito(${e.id})">Añadir al carrito</button>
            </div>
        </div>
        </div>
        `;
    tienda.innerHTML += productoHTML;
  });
}

renderizarProductos();

const agregarProductoAlCarrito = (id) => {
  const producto = BASE.find( (producto) => producto.id == id );
  carrito.push(producto)
  
  console.log(carrito)
  renderizarCarrito()
  renderizarCantidad()
  renderizarTotal()
}

const eliminarDelCarrito = (id) => {
  const producto = carrito.find((producto) => producto.id == id)
  const indice = carrito.indexOf(producto)
  carrito.splice(indice, 1)

  renderizarCarrito()
  renderizarCantidad()
  renderizarTotal() 
}

const vaciarCarrito = () => {
   carrito = []  

  renderizarCarrito()
  renderizarCantidad()
  renderizarTotal()
}

botonVaciarCarrito.addEventListener("click", vaciarCarrito)

const renderizarCarrito = () => {
  carritoContainer.innerHTML= "";

  carrito.forEach((e) => {
    const div = document.createElement("div")
    div.classList.add("productoEnCarrito")

    div.innerHTML = `
                  <p>${e.nombre}</p>
                  <p>${e.precio}</p>
                  <button onclick="eliminarDelCarrito(${producto,id})" class="boton-eliminar"><i class="fas fa-trash-alt"></i></button>
                  `
    carritoContainer.append(div)
  })
}

const renderizarCantidad = () => {
    contadorCarrito.innerText = carrito.length
}

const renderizarTotal = () => {
    let total = 0
    carrito.forEach((producto) => {
      total += producto.precio
    })

    precioTotal.innerText = total
}





// function agregarProductoAlCarrito(id) {
//   let producto = BASE.find((producto) => producto.id == id);

//   let productoEnCarrito = carrito.find((producto) => producto.id == id);

//   if (productoEnCarrito) {
//     productoEnCarrito.cantidad++;
//   } else {
//     producto.cantidad = 1;
//     carrito.push(producto);
//   }

//   renderizarCarrito();
// }

// function renderizarCarrito() {
//   let carritoHTML = document.getElementById("carrito");

//   html = "";

//   carrito.forEach((producto, id) => {
//     html += `
//         <div class="col-12 col-md-4 mb-5 d-flex justify-content-center">
//             <div class="card text-dark" style="width: 18rem;">
//                 <img class="card-img-top" src="${producto.img}" alt="Card image cap">
//                 <div class="card-body">
//                     <h5 class="card-title">${producto.nombre}</h5>
//                     <p>$${producto.precio}</p>
//                     <p>Cantidad: ${producto.cantidad}</p>
//                     <button class="btn btn-danger" onClick="eliminarProductoDelCarrito(${id})">Eliminar</button>
//                 </div>
//             </div>
//         </div>
//         `;
//   });

//   carritoHTML.innerHTML = html;

//   calcularTotal();
// }

// function calcularTotal() {
//   carrito.forEach((producto) => {
//     total += producto.precio * producto.cantidad;
//   });

//   console.log(total);
// }

// const eliminarProductoDelCarrito = (id) => {
//   console.log(carrito[id].cantidad); 
//   carrito[id].cantidad--;
//   console.log(carrito[id].cantidad);

//   if (carrito[id].cantidad == 0) {
//     carrito.splice(id, 1);
//   }

//   renderizarCarrito();
// };
