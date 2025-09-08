import { products } from '../data/products';

function Gallery() {
  return (
    <section>
      {products.map(item => (
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
        </div>
      ))}
    </section>
  );
}

export default Gallery;