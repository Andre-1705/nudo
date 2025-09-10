function Gallery({ productos, agregarAlCarrito }) {   //agregar un producto al carrito de compras 
  return (
    <section>
      {productos.map(item => (
        <div key={item.id}>
          <img
            src={item.image}
            alt={item.name}
            style={{
              aspectRatio: item.aspectRatio,
              maxWidth: item.maxWidth,
              width: '100%',
              height: 'auto',
              objectFit: 'cover'
            }}
          />
          <p>{item.name}</p>
          <p>${item.price}</p>
          <button onClick={() => agregarAlCarrito(item)}>Añadir al carrito</button>
        </div>
      ))}
    </section>
  );
}

export default Gallery;