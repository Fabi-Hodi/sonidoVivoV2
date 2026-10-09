import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function NavBar() {
    return (
        <Navbar className='navbar-fondo' data-bs-theme="dark" expand="lg">
            
            <Container>

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