

function Carrito({ carrito, removerDelCarrito }) {
  // Función para obtener el cálculo total del carrito
  const obtenerTotal = () => {
    return carrito.reduce((total, producto) => total + (producto.precio * (producto.cantidad || 0)), 0);
  };

  return (
    <aside>
      <h2 style = {{color: "blue"}}>Carrito de Compras</h2>
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

                <button style={{color: "red", border: "1px solid red"}} onClick={() => removerDelCarrito(producto.id)}>
                  Remover
                </button>
              </li>
            ))}
          </ul>
          <h3 style={{ color: "blue", fontSize: "20px" }}>Total: ${obtenerTotal()}</h3>
        </div>
      )}
    </aside>
  );
}
export default Carrito;
