import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import TarjetaProducto from '../molecules/TarjetaProducto';

function CatalogoProductos() {
    const [busqueda, setBusqueda] = useState('');
    const [searchParams] = useSearchParams();
    const categoriaSeleccionada = searchParams.get('categoria');

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
                {"Guitarra Acústica Folk".toLowerCase().includes(busqueda.toLowerCase()) && 
                    (!categoriaSeleccionada || categoriaSeleccionada === "guitarras") && (
                    <Col md={4} className="d-flex justify-content-center">
                        <TarjetaProducto
                            nombre="Guitarra Acústica Folk"
                            imagen="img/guitarras/GA1.png"
                            valor={129990}
                            disponible={true}
                            categoria="guitarras"
                        />
                    </Col>
                )}

                {/* Guitarra 2 */}
                {"Guitarra 2".toLowerCase().includes(busqueda.toLowerCase()) && 
                    (!categoriaSeleccionada || categoriaSeleccionada === "guitarras") && (
                    <Col md={4} className="d-flex justify-content-center">
                        <TarjetaProducto
                            nombre="Guitarra 2"
                            imagen="img/guitarras/GA2.png"
                            valor={239990}
                            disponible={true}
                            categoria="guitarras"
                        />
                    </Col>
                )}

                {/* Guitarra 3 */}
                {"Guitarra 3".toLowerCase().includes(busqueda.toLowerCase()) && 
                    (!categoriaSeleccionada || categoriaSeleccionada === "guitarras") && (
                    <Col md={4} className="d-flex justify-content-center">
                        <TarjetaProducto
                            nombre="Guitarra 3"
                            imagen="img/guitarras/GA3.png"
                            valor={258490}
                            disponible={true}
                            categoria="guitarras"
                        />
                    </Col>
                )}

                {/*Bajo 1 */}
                {"Bajo electrico 1".toLowerCase().includes(busqueda.toLowerCase()) && 
                    (!categoriaSeleccionada || categoriaSeleccionada === "bajos") && (
                    <Col md={4} className="d-flex justify-content-center">
                        <TarjetaProducto
                            nombre="Bajo 1"
                            imagen="img/bajos/B1.png"
                            valor={240000}
                            disponible={true}
                            categoria="bajos"
                        />

                    
                    </Col>
                )}


                {/*Bajo 2 */}
                {"Bajo electrico 2".toLowerCase().includes(busqueda.toLowerCase()) && 
                    (!categoriaSeleccionada || categoriaSeleccionada === "bajos") && (
                    <Col md={4} className="d-flex justify-content-center">
                        <TarjetaProducto
                            nombre="Bajo 2"
                            imagen="img/bajos/B2.png"
                            valor={320000}
                            disponible={true}
                            categoria="bajos"
                        />

                    
                    </Col>
                )}

                {/*Bajo 3 */}
                {"Bajo electrico 3".toLowerCase().includes(busqueda.toLowerCase()) && 
                    (!categoriaSeleccionada || categoriaSeleccionada === "bajos") && (
                    <Col md={4} className="d-flex justify-content-center">
                        <TarjetaProducto
                            nombre="Bajo 3"
                            imagen="img/bajos/B3.png"
                            valor={560000}
                            disponible={true}
                            categoria="bajos"
                        />

                    
                    </Col>
                )}
                

            </Row>
        </Container>
    );
}
export default CatalogoProductos;
