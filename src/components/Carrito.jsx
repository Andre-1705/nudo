

function Carrito({ carrito }) { //prop cart recibe el carrito de compras
  
  //función para obtener el cálculo total del carrito
  const getTotal = () => {
    return carrito.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <aside>
      <h2>Carrito de Compras</h2>
      {carrito.length === 0 ? (
        <p>El carrito está vacío</p>
      ) : (
        <div>
          <ul>
            {carrito.map((item) => ( //recorre los items del carrito con map 
              <li key={item.id}>
                <span>{item.name}</span>
                <span> - Cantidad: {item.quantity}</span> //muesta la cantidad de producto no me deja colocarlo en castellano
                <span> - ${item.price * item.quantity}</span> //muestra el precio por la cantidad
              </li>
            ))}
          </ul>
          <h3>Total: ${getTotal()}</h3>
        </div>
      )}
    </aside>
  );
}

export default Carrito;
