import { useEffect, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import TarjetaProducto from '../molecules/TarjetaProducto';
import Separador from '../atoms/Separador';
import Mensaje from '../atoms/Mensaje';
import { listarProductos, borrarProducto } from '../../services/api';
import { obtenerUsuario } from '../../services/sesion';

function CatalogoProductos() {
    const [busqueda, setBusqueda] = useState('');
    const [searchParams] = useSearchParams();
    const categoriaSeleccionada = searchParams.get('categoria');

    // los productos ahora vienen de la API (GET /productos)
    const [listaProductos, setListaProductos] = useState([]);
    const [cargando, setCargando] = useState(true);
    const [mensaje, setMensaje] = useState({ texto: '', tipo: 'exito' });

    const usuario = obtenerUsuario();
    const esAdmin = usuario?.rol === "Administrador";

    useEffect(() => {
        listarProductos()
            .then((productos) => setListaProductos(productos))
            .catch((error) => setMensaje({ texto: error.message, tipo: 'error' }))
            .finally(() => setCargando(false));
    }, []);

    // el backend no borra el producto, lo desactiva (deja de aparecer en el catalogo)
    const eliminarProducto = async (producto) => {
        if (!window.confirm(`¿Eliminar ${producto.nombre} del catálogo?`)) return;
        try {
            await borrarProducto(producto.id);
            setListaProductos(listaProductos.filter((p) => p.id !== producto.id));
            setMensaje({ texto: 'Producto eliminado correctamente', tipo: 'exito' });
        } catch (error) {
            setMensaje({ texto: error.message, tipo: 'error' });
        }
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

            <Mensaje texto={mensaje.texto} tipo={mensaje.tipo} />

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

            {cargando && <p className="text-center text-white">Cargando productos...</p>}

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
                            key={producto.id}
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
                                onEliminar={() => eliminarProducto(producto)}
                            />
                        </Col>
                    ))}
            </Row>
        </Container>
    );
}

export default CatalogoProductos;
