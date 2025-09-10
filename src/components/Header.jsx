import logo from '../assets/nudo_transparente.png';

function Encabezado({ carrito }) {
  // Calcular el total de productos en el carrito
  const totalProductos = carrito.reduce((suma, item) => suma + (item.cantidad || 0), 0);

  return (
    <header
      style={{
        backgroundColor: "rgba(22, 21, 28, 0.3)",
        padding: "10px",
        textAlign: "center",
        color: "blue",
        fontFamily: "sans-serif",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-start",
          maxWidth: "400px",
          margin: "0 auto",
        }}
      >
        <img
          src={logo}
          alt="Logo de Nudo"
          style={{
            width: "100px",
            height: "100px",
            marginBottom: "5px",
            marginRight: "0px",
            padding: "0px",
          }}
        />

        <h1
          style={{
            margin: 0,
            flexGrow: 1,
            textAlign: "center",
            fontSize: "24px",
          }}
        >
          Nudo
        </h1>
        <div style={{ marginLeft: 'auto' }}>
            <span style={{ color: "blue" }}>Carrito: {totalProductos}</span>
        </div>
      </div>

      <h2>Tu App de pilchas on line</h2>
    </header>
  );
}

export default Encabezado;
