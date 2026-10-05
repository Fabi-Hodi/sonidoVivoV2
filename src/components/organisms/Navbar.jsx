import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavBar() {
    return (
        <Navbar bg="dark" data-bs-theme="dark" expand="lg">
            
            <Container>
            
                <Navbar.Brand href="#inicio">🎸 SonidoVivo</Navbar.Brand>
                
                <Navbar.Toggle aria-controls="menu-navegacion" />
                
                <Navbar.Collapse id="menu-navegacion">
                    
                    <Nav className="ms-auto">
                        <Nav.Link href="#inicio">Inicio</Nav.Link>
                        <Nav.Link href="#catalogo">Catálogo</Nav.Link>
                        <Nav.Link href="#carrito" className="text-warning">🛒 Carrito (0)</Nav.Link>
                    </Nav>
                    
                </Navbar.Collapse>
            </Container>
            
        </Navbar>
    );
}

export default NavBar;