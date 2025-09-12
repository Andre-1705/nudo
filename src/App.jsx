import Encabezado from '@/components/Header'
import Pie from '@/components/Footer'
import Carrito from '@/components/Carrito'
import Navegacion from '@/components/Nav'
import Galeria from '@/components/Gallery'
import { productos } from '@/data/products'
import { useState } from 'react';
import '@/App.css'

  const [carrito, setCarrito] = useState([]); // Estado centralizado del carrito
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState('Todas'); // Estado para la categoría seleccionada


  // Función para agregar productos al carrito

  function agregarAlCarrito(producto) {
  setCarrito((carritoAnterior) => {
    const productoExistente = carritoAnterior.find(item => item.id === producto.id)
    if (productoExistente) {

      return carritoAnterior.map(item => item.id === producto.id
        ? { ...item, cantidad: item.cantidad + 1 }
        : item
      )
    } else {
      return [...carritoAnterior, { ...producto, cantidad: 1 }]
    }
  })
}

  // Función para remover productos del carrito
  const removerDelCarrito = (idProducto) => {
    setCarrito((carritoAnterior) =>
      carritoAnterior.filter(producto => producto.id !== idProducto)
    );
  };

// Filtrar productos por categoría. Ternario en productos filtrados guarda la categoría selecionada desde todas
// en donde el filtro va a ser igual categoría a categoria seleccionada en minúscula 

  const productosFiltrados = categoriaSeleccionada === 'Todas'
    ? productos
    : productos.filter(p => p.categoria.toLowerCase() === categoriaSeleccionada.toLowerCase());

  return (
    <div className="App">

      <Encabezado carrito={carrito} />
      <Navegacion />

      {/* Botones de filtro de categoría seis botones*/}
      <div style={{ margin: '20px 0', textAlign: 'center' }}>

        <button onClick={() => setCategoriaSeleccionada('Todas')} style={{ margin: '0 5px' }}>Todas</button>
        <button onClick={() => setCategoriaSeleccionada('Remera')} style={{ margin: '0 5px' }}>Remeras</button>
        <button onClick={() => setCategoriaSeleccionada('Pantalón')} style={{ margin: '0 5px' }}>Pantalones</button>
        <button onClick={() => setCategoriaSeleccionada('Abrigo')} style={{ margin: '0 5px' }}>Abrigos</button>
        <button onClick={() => setCategoriaSeleccionada('Pollera')} style={{ margin: '0 5px' }}>Polleras</button>
        <button onClick={() => setCategoriaSeleccionada('Vestido')} style={{ margin: '0 5px' }}>Vestidos</button>

      </div>

      {/* función de filtrado */}

      <Galeria productos={productosFiltrados} agregarAlCarrito={agregarAlCarrito} />
  
      {/* Los productos ya filtrados son la props de productos en galería más la referencia a una la función agregar al carrito */}
      {/* como props*/}

      <Carrito carrito={carrito} removerDelCarrito={removerDelCarrito} />
      {/* carrito props y referencia de la función remover carrito como props*/}

      <Pie />
    </div>
  );


export default Aplicacion;
