import logo from '../assets/nudo_transparente.png';

function Header({ carrito }) { //prop carrito recibe el carrito de compras
  //calcular el total de items en el carrito
  const totalItems = carrito.reduce((sum, item) => sum + item.quantity, 0);//reduce para sumar las cantidades de cada item en el carrito

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
            <span>Carrito: {totalItems}</span>
        </div>
      </div>

      <h2>Tu App de pilchas online</h2>
    </header>
  );
}

export default Header;
