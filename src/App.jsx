import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Carrito from '@/components/Carrito'
import Nav from '@/components/Nav'
import Gallery from '@/components/Gallery'
import { products } from '@/data/products'
import { useState} from 'react';
import '@/App.css'

function App() {
  const [carrito, setCarrito] = useState( [] ); //Estado centralizado del carrito

  //función para agregar productos al carrito en donde prevCarrito es el estado anterior del carrito.. es el reseteo
  const agregarAlCarrito = (producto) => { setCarrito((prevCarrito) => {const carritoActualizado = prevCarrito.find(item => item.id === producto.id);

  if (carritoActualizado) {

    return prevCarrito.map(item => item.id === producto.id //si el id del producto es igual al id del item
  ? {...item, quantity: item.quantity + 1} //entonces devuelve la cantidad aumentada en más 1
  : item); //Si el producto ya está en el carrito, aumenta la cantidad

} else  {
  return [...prevCarrito, { ...producto, quantity: 1}];
}
});
};
  return( <div className = "App">
        <Header />
          {/* Otros componentes etc. */}

      <Nav />
        {/* */}


  <Gallery productos={products} agregarAlCarrito={agregarAlCarrito}/>
        {/* */}


      <Carrito carrito={carrito}/>
      {/* */}

      <Footer />

    </div>
  );
}

export default App;
