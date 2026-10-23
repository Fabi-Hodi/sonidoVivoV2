import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png';


function NavBar() {

    const usuario = JSON.parse(
    localStorage.getItem("usuario")
    );


    return (
        <Navbar className='navbar-fondo' data-bs-theme="dark" expand="lg">
            
            <Container fluid>
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
                        </Nav.Link>
                    ) : (
                        <Nav.Link as={Link} to="/login">
                            Iniciar Sesión
                        </Nav.Link>
                    )
                }
                
                <Navbar.Toggle aria-controls="menu-navegacion" />
                
                <Navbar.Collapse id="menu-navegacion">
                    
                    <Nav className="ms-auto">
                        <Nav.Link as={Link} to="/">Inicio</Nav.Link>
                        <Nav.Link as={Link} to="/catalogo">Catálogo</Nav.Link>
                        <Nav.Link as={Link} to="/login">Iniciar Sesión</Nav.Link>
                        <Nav.Link as={Link} to="/carrito" className="text-warning">🛒 (0)</Nav.Link>
                    </Nav>
                    
                </Navbar.Collapse>
            </Container>
            
        </Navbar>
    );
}

export default NavBar;