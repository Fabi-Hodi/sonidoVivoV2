import { PlantillaPublica } from "../components/templates/PlantillaPublica";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from "react-router-dom";
import ItemCarrito from "../components/molecules/ItemCarrito";
import ResumenCarrito from "../components/organisms/ResumenCarrito";

function Carrito(props){

    return(
        <PlantillaPublica>
            
            <Container className="my-5"> 
                <h1 className="text-center mb-5 text-white">Tu Carrito de Compras</h1>

                <Row className="justify-content-center gap-4"> 
                    
                    
                    <Col md={7} className="bg-dark border border-secondary rounded p-4">
                        <h4 className="text-white mb-4">Productos Agregados</h4>
                        
                        <ItemCarrito />
                        
                        <hr className="border-secondary mt-4" />
                        <div className="mt-3">
                            <Link to="/catalogo" className="text-warning text-decoration-none fw-bold">
                                ← Descubre más productos
                            </Link>
                        </div>
                    </Col>                

                   
                    <Col md={4}>
                        <ResumenCarrito />
                    </Col>
                    
                </Row>
            </Container>
            
        </PlantillaPublica>
    );
}

export default Carrito;