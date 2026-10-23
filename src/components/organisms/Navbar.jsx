import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png';
import Boton from '../atoms/Boton';
import { useNavigate } from 'react-router-dom';

function NavBar() {
    const usuario = JSON.parse(
    localStorage.getItem("usuario")
    );

    const navigate = useNavigate();
    const cerrarSesion = () => {
        localStorage.removeItem("usuario");
        navigate("/login");
        window.location.reload();
    };
    return (
        <Navbar className='navbar-fondo' data-bs-theme="dark" expand="lg">
            
            <Container fluid>
                <Navbar.Brand as={Link} to={"/"} className="d-flex align-items-center">
                    <img
                        src="src/assets/logo.png" 
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
                        <Nav.Link as={Link} to="/carrito" className="text-warning">🛒 (0)</Nav.Link>

                        {
                            usuario ? (
                                <Nav.Link className="d-flex align-items-center">
                                    <img
                                        src={usuario.foto}
                                        alt={usuario.nombre}
                                        className="foto-usuario me-2"
                                    />
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