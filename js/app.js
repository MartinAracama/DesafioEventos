

const carritoContainer = document.querySelector("#carritoContainer")
const contadorCarrito = document.querySelector("#contadorCarrito")
const precioTotal = document.querySelector("#precioTotal")
const botonVaciarCarrito = document.querySelector("vaciarCarrito")

let carrito = [];


// let total = 0;

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

