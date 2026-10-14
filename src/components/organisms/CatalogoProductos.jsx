import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import TarjetaProducto from '../molecules/TarjetaProducto';

function CatalogoProductos() {
    const [busqueda, setBusqueda] = useState('');

    return (
        <Container className="my-4">
            {/* Buscador por nombre */}
            <Row className="mb-4 justify-content-center g-2">
                <Col md={5}>
                    <Form.Control
                        type="text"
                        placeholder="Buscar por nombre..."
                        value={busqueda}
                        onChange={(e) => setBusqueda(e.target.value)}
                    />
                </Col>
            </Row>

            {/* Listado de productos */}
            <Row className="justify-content-center g-4">

                {/* Guitarra 1 */}
                {"Guitarra Acústica Folk".toLowerCase().includes(busqueda.toLowerCase()) && (
                    <Col md={4} className="d-flex justify-content-center">
                        <TarjetaProducto
                            nombre="Guitarra Acústica Folk"
                            imagen="img/guitarras/GA1.png"
                            valor={129990}
                            disponible={true}
                        />
                    </Col>
                )}

                {/* Guitarra 2 */}
                {"Guitarra 2".toLowerCase().includes(busqueda.toLowerCase()) && (
                    <Col md={4} className="d-flex justify-content-center">
                        <TarjetaProducto
                            nombre="Guitarra 2"
                            imagen="img/guitarras/GA2.png"
                            valor={239990}
                            disponible={true}
                        />
                    </Col>
                )}

                {/* Guitarra 3 */}
                {"Guitarra 3".toLowerCase().includes(busqueda.toLowerCase()) && (
                    <Col md={4} className="d-flex justify-content-center">
                        <TarjetaProducto
                            nombre="Guitarra 3"
                            imagen="img/guitarras/GA3.png"
                            valor={258490}
                            disponible={true}
                        />
                    </Col>
                )}

            </Row>
        </Container>
    );
}
export default CatalogoProductos;
