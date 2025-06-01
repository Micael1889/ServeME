document.addEventListener("DOMContentLoaded", () => {
  const productos = document.querySelectorAll(".producto");
  const subtotalEl = document.querySelector(".subtotal");

  function actualizarSubtotal() {
    let subtotal = 0;

    productos.forEach(producto => {
      const precioTexto = producto.querySelector(".detalle-producto p:nth-child(2)").textContent;
      const precio = parseFloat(precioTexto.replace("$", ""));
      const cantidad = parseInt(producto.querySelector("span").textContent);
      subtotal += precio * cantidad;
    });

    subtotalEl.textContent = `Subtotal: $${subtotal}`;
  }

  productos.forEach(producto => {
    const botonMenos = producto.querySelector("button:first-of-type");
    const botonMas = producto.querySelector("button:last-of-type");
    const contador = producto.querySelector("span");

    botonMenos.addEventListener("click", () => {
      let cantidad = parseInt(contador.textContent);
      if (cantidad > 1) {
        cantidad--;
        contador.textContent = cantidad;
        actualizarSubtotal();
      }
    });

    botonMas.addEventListener("click", () => {
      let cantidad = parseInt(contador.textContent);
      cantidad++;
      contador.textContent = cantidad;
      actualizarSubtotal();
    });
  });

  actualizarSubtotal();
});
