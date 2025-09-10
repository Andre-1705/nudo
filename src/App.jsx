import Encabezado from '@/components/Header'
import Pie from '@/components/Footer'
import Carrito from '@/components/Carrito'
import Navegacion from '@/components/Nav'
import Galeria from '@/components/Gallery'
import { productos } from '@/data/products'
import { useState} from 'react';
import '@/App.css'

function Aplicacion() {
  const [carrito, setCarrito] = useState([]); // Estado centralizado del carrito

  // Función para agregar productos al carrito
  const agregarAlCarrito = (producto) => {
    setCarrito((carritoAnterior) => {

      const productoExistente = carritoAnterior.find(item => item.id === producto.id);
      if (productoExistente) {

        return carritoAnterior.map(item => item.id === producto.id
          ? { ...item, cantidad: item.cantidad + 1 }
          : item
        );
      } else {
        return [...carritoAnterior, { ...producto, cantidad: 1 }];
      }
    });
  };

  return (
    <div className="App">
      <Encabezado carrito={carrito} />
      <Navegacion />
      <Galeria productos={productos} agregarAlCarrito={agregarAlCarrito} />
      <Carrito carrito={carrito} />
      <Pie />
    </div>
  );
}

export default Aplicacion;
