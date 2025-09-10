function Galeria({ productos, agregarAlCarrito }) {
  return (
    <section>
      {productos.map(producto => (
        <div key={producto.id}>
          <img
            src={producto.imagen}
            alt={producto.nombre}
            style={{
              aspectRatio: producto.relacionAspecto,
              maxWidth: producto.anchoMaximo,
              width: '100%',
              height: 'auto',
              objectFit: 'cover'
            }}
          />
          <p>{producto.nombre}</p>
          <p>${producto.precio}</p>
          <button onClick={() => agregarAlCarrito(producto)}>Añadir al carrito</button>
        </div>
      ))}
    </section>
  );
}

export default Galeria;