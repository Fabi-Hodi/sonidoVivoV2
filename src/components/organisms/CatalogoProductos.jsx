import { useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import TarjetaProducto from '../molecules/TarjetaProducto';
import productos from '../../data/productos.json';
import Separador from '../atoms/Separador';

function CatalogoProductos() {
    const [busqueda, setBusqueda] = useState('');
    const [searchParams] = useSearchParams();
    const categoriaSeleccionada = searchParams.get('categoria');

    const [listaProductos, setListaProductos] = useState(() => {
    const guardados = localStorage.getItem("productos");
    return guardados ? JSON.parse(guardados) : productos;
    });

    const usuario = JSON.parse(localStorage.getItem("usuario"));
    const esAdmin = usuario?.rol === "Administrador";

    const agregarProducto = (nuevoProducto) => {
    if (!esAdmin) return;

    if (listaProductos.some((producto) => producto.codigo === nuevoProducto.codigo)) {
        alert("Ya existe un producto con ese código");
        return;
    }
    const nuevaLista = [...listaProductos, nuevoProducto];
    setListaProductos(nuevaLista);
    localStorage.setItem("productos", JSON.stringify(nuevaLista));
    };
    const eliminarProducto = (codigo) => {
        if (!esAdmin) return;

        const nuevaLista = listaProductos.filter(
            (producto) => producto.codigo !== codigo
        );
        setListaProductos(nuevaLista);
        localStorage.setItem("productos", JSON.stringify(nuevaLista));
    };

    return (
        <Container className="my-4">
            {esAdmin && (
                <div className="text-end mb-4">
                    <Link
                        to="/agregar-producto"
                        className="btn btn-warning"
                    >
                        + Agregar producto
                    </Link>
                </div>
            )}
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
                <Separador/>
            </Row>

            {/* Listado de productos */}
            <Row className="justify-content-center g-4">
                {listaProductos
                    .filter((producto) => producto.nombre.toLowerCase().includes(busqueda.toLowerCase())
                    &&
                    (
                        !categoriaSeleccionada || producto.categoria === categoriaSeleccionada
                    )
                )
                    .map((producto) => (
                        <Col
                            md={4}
                            className="d-flex justify-content-center"
                            key={producto.codigo}
                        >
                            <TarjetaProducto
                                codigo={producto.codigo}
                                nombre={producto.nombre}
                                imagen={producto.imagen} 
                                valor={producto.precio}
                                disponible={producto.stock > 0}
                                stock={producto.stock}
                                categoria={producto.categoria}
                                esAdmin={esAdmin}
                                onEliminar={() => eliminarProducto(producto.codigo)}
                            />
                        </Col>
                    ))}
            </Row>
        </Container>
    );
}

export default CatalogoProductos;