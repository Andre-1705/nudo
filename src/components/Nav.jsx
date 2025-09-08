function Nav(){
    return(
        <nav style={{ backgroundColor: "rgba(22, 21, 28, 0.3)", padding: "10px", textAlingn: "center", color: "white" }}>
            <ul style={{ listStyle: "none", display: "flex", justifyContent: "space-around", margin: 0 }}> 
                <li><a href="#" style={{ color: "white", textDecoration: "none" }}>Galería</a></li>
                <li><a href="#" style={{ color: "white", textDecoration: "none" }}>Contacto</a></li>
            </ul>
        </nav>
    );
}
export default Nav;