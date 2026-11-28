import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png';
import Boton from '../atoms/Boton';
import { useNavigate } from 'react-router-dom';
import { cerrarSesionLocal, obtenerUsuario } from '../../services/sesion';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';

function NavBar() {
    const usuario = obtenerUsuario();
    // cantidad de productos en el carrito
    const contextoCarrito = useContext(CartContext);
    const carrito = contextoCarrito?.carrito || [];
    const totalCarrito = carrito.reduce((suma, p) => suma + p.cantidad, 0);

    const navigate = useNavigate();
    const cerrarSesion = () => {
        // borre el token y los datos del usuario guardados en el navegador
        cerrarSesionLocal();
        navigate("/login");
    };
    return (
        <Navbar className='navbar-fondo' data-bs-theme="dark" expand="lg">
            
            <Container fluid>
                <Navbar.Brand as={Link} to={"/"} className="d-flex align-items-center">
                    <img
                        src={logo}
                        alt="Logo de Tu sonido, tu mundo"
                        width="40" 
                        height="40"
                        className="me-2" 
                    />
                    Sonido Vivo
                </Navbar.Brand>
                
                <Navbar.Collapse id="menu-navegacion">
                    
                    <Nav className="ms-auto d-flex align-items-center">
                        <Nav.Link as={Link} to="/">Inicio</Nav.Link>
                        <Nav.Link as={Link} to="/catalogo">Catálogo</Nav.Link>
                        {usuario && (
                            <Nav.Link as={Link} to="/pedidos">
                                {usuario.rol === "Cliente" ? "Mis pedidos" : "Pedidos"}
                            </Nav.Link>
                        )}
                        {usuario?.rol === "Administrador" && (
                            <Nav.Link as={Link} to="/admin/usuarios">Usuarios</Nav.Link>
                        )}
                        <Nav.Link as={Link} to="/carrito" className="text-warning">🛒 ({totalCarrito})</Nav.Link>

                        {
                            usuario ? (
                                <Nav.Link className="d-flex align-items-center">
                                    {usuario.foto ? (
                                        <img
                                            src={usuario.foto}
                                            alt={usuario.nombre}
                                            className="foto-usuario me-2"
                                        />
                                    ) : (
                                        <span className="me-2">👤</span>
                                    )}
                                    <div>
                                        <div>{usuario.nombre}</div>
                                        <small>{usuario.rol}</small>
                                    </div>

                                    <Boton
                                        nombreBoton="Cerrar sesión"
                                        variante="warning"
                                        onClick={cerrarSesion}
                                    />
                                </Nav.Link>
                            ) : 
                                <Nav.Link as={Link} to="/login">
                                    Iniciar sesion
                                </Nav.Link>
                        }
                        
                    </Nav>
                    
                </Navbar.Collapse>
            </Container>
            
        </Navbar>
    );
}

export default NavBar;