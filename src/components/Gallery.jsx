function Galeria({ productos, agregarAlCarrito }) {
  return (
    <section>
      {productos.map(producto => (   //Recorre los productos y muestra imagen y datos
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
          <p>{producto.nombre}</p> {/* accede a propiedad nombre y precio */}
          <p>${producto.precio}</p>
          <button style={{ color: "green "}} onlick={() => agregarAlCarrito(producto)}>Añadir al carrito</button>
        </div>
      ))}
    </section>
  );
}

export default Galeria;