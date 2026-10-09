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

                {/* Guitarra 2 */}
                <Col md={4} className="d-flex justify-content-center">
                    <TarjetaProducto
                        nombre="Guitarra 2"
                        imagen="img/guitarras/GA2.png"
                        valor={239990}
                        disponible={true}
                    />
                </Col>

                {/* Guitarra 3 */}
                <Col md={4} className="d-flex justify-content-center">
                    <TarjetaProducto
                        nombre="Guitarra 3"
                        imagen="img/guitarras/GA3.png"
                        valor={258490}
                        disponible={true}
                    />
                </Col>
            </Row>
        </Container>
    );
}

export default CatalogoProductos;