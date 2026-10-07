import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import TarjetaProducto from '../molecules/TarjetaProducto';

function CatalogoProductos() {
    return (
        <Container className="my-4">
            <Row className="justify-content-center g-4">

                {/* Guitarra 1 */}
                <Col md={4} className="d-flex justify-content-center">
                    <TarjetaProducto
                        nombre="Guitarra Acústica Folk"
                        imagen="img/guitarras/GA1.png"
                        valor={129990}
                        disponible={true}
                    />
                </Col>
            </Row>
        </Container>
    );
}

export default CatalogoProductos;