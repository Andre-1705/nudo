

function Carrito({ carrito }) {
  // Función para obtener el cálculo total del carrito
  const obtenerTotal = () => {
    return carrito.reduce((total, producto) => total + (producto.precio * (producto.cantidad || 0)), 0);
  };

  return (
    <aside>
      <h2>Carrito de Compras</h2>
      {carrito.length === 0 ? (
        <p>El carrito está vacío</p>
      ) : (
        <div>
          <ul>
            {carrito.map((producto) => (
              <li key={producto.id}>
                <span>{producto.nombre}</span>
                <span> - Cantidad: {producto.cantidad}</span>
                <span> - ${producto.precio * producto.cantidad}</span>
              </li>
            ))}
          </ul>
          <h3>Total: ${obtenerTotal()}</h3>
        </div>
      )}
    </aside>
  );
}

export default Carrito;
