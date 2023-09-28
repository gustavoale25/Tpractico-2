document.addEventListener("DOMContentLoaded", () => {
  const detalleProducto = document.getElementById("detalle-producto");

  const urlParams = new URLSearchParams(window.location.search);
  const idProducto = urlParams.get("id");

  const datosProductos = JSON.parse(localStorage.getItem("productos"));

  if (datosProductos && window.location.search) {
    const productoSeleccionado = datosProductos.productos.find(
      (producto) => producto.id === parseInt(idProducto)
    );

    if (productoSeleccionado) {
      const contenedorDetallesProducto = document.createElement("div");
      contenedorDetallesProducto.classList.add("detalles-de-producto");
      contenedorDetallesProducto.innerHTML = `
        <img src="${productoSeleccionado.imagen}" alt="Imagen del producto">
        <h2>${productoSeleccionado.nombre}</h2>
        <h6>Marca: ${productoSeleccionado.marca}</h6>
        <h5>Precio: ${productoSeleccionado.precio}</h5>
        <div class="descripcion">
          <p>${productoSeleccionado.descripcion}</p>
        </div>`;

      detalleProducto.appendChild(contenedorDetallesProducto);
    }
  }
});

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
