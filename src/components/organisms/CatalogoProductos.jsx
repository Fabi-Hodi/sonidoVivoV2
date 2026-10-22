import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import TarjetaProducto from '../molecules/TarjetaProducto';
import productos from '../../data/productos.json';

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
                {productos
                    .filter((producto) =>
                        producto.nombre
                            .toLowerCase()
                            .includes(busqueda.toLowerCase())
                    )
                    .map((producto) => (
                        <Col
                            md={4}
                            className="d-flex justify-content-center"
                            key={producto.codigo}
                        >
                            <TarjetaProducto
                                nombre={producto.nombre}
                                imagen="img/guitarras/GA1.png"
                                valor={producto.precio}
                                disponible={producto.stock > 0}
                                stock={producto.stock}
                                categoria={producto.categoria}
                            />
                        </Col>
                    ))}
            </Row>

            
        </Container>
    );
}
export default CatalogoProductos;
