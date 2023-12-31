fetch("./productos.json")
  .then((respuesta) => respuesta.json())
  .then((datos) => localStorage.setItem("productos", JSON.stringify(datos)));

document.addEventListener("DOMContentLoaded", () => {
  const divProductos = document.getElementById("productos-container");
  const datosProductos = JSON.parse(localStorage.getItem("productos"));
  console.log(datosProductos);
  if (datosProductos) {
    datosProductos.productos.forEach((productos) => {
      const divItem = document.createElement("div");

      divItem.classList.add("div-item");

      divItem.innerHTML = `
      <img src="${productos.imagen}" alt="${productos.nombre}">
      <h3>${productos.nombre}</h3>
      <h6>${productos.marca}</h6>
      <h5>${productos.precio}</h5>
      <p>${productos.cuotas}</p>
      <button class="ver-mas">Ver Más</button>
      <button class="agregar-carrito">Agregar al carrito</button>`;

      divItem.addEventListener("click", () => {
        mostrarDetallesProducto(productos);
      });

      divProductos.appendChild(divItem);
    });
  }
});

function mostrarDetallesProducto(producto) {
  location.href = `index2.html?id=${producto.id}`;
}

function submitForm() {
  // Obtener los valores de los campos de entrada
  let nombre = document.querySelector('input[type="text"]').value;
  let email = document.querySelector('input[type="email"]').value;

  // Validar los campos de entrada
  if (nombre === "" || email === "") {
    alert("Por favor, completa todos los campos");
  } else {
    // Enviar los datos del formulario a un servidor o realizar alguna acción adicional
    alert("¡Gracias por suscribirte!");
  }
}
