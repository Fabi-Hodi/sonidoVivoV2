import { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { PlantillaPublica } from '../components/templates/PlantillaPublica';
import Mensaje from '../components/atoms/Mensaje';
import EstadoPedido from '../components/molecules/EstadoPedido';
import {
    listarPedidos,
    obtenerPedido,
    cambiarEstadoPedido,
    cancelarPedido,
} from '../services/api';
import { obtenerUsuario } from '../services/sesion';

// estados a los que puede pasar un pedido (la misma regla la valida el backend)
const SIGUIENTES = {
    PENDIENTE: ['PAGADO', 'CANCELADO'],
    PAGADO: ['ENVIADO', 'CANCELADO'],
    ENVIADO: ['ENTREGADO'],
    ENTREGADO: [],
    CANCELADO: [],
};

function formatearFecha(fecha) {
    return new Date(fecha).toLocaleString('es-CL');
}

function Pedidos() {
    const yo = obtenerUsuario();
    // administrador y vendedor ven todos los pedidos y cambian su estado
    const esPersonal = yo?.rol === 'Administrador' || yo?.rol === 'Vendedor';

    const [pedidos, setPedidos] = useState([]);
    const [cargando, setCargando] = useState(true);
    const [mensaje, setMensaje] = useState({ texto: '', tipo: 'exito' });
    const [detalle, setDetalle] = useState(null);

    useEffect(() => {
        listarPedidos()
            .then((lista) => setPedidos(lista))
            .catch((error) => setMensaje({ texto: error.message, tipo: 'error' }))
            .finally(() => setCargando(false));
    }, []);

    // reemplaza un pedido de la lista por su version actualizada
    const actualizarEnLista = (pedido) => {
        setPedidos(pedidos.map((p) => (p.id === pedido.id ? pedido : p)));
    };

    // GET /pedidos/{id}
    const verDetalle = async (id) => {
        try {
            setDetalle(await obtenerPedido(id));
        } catch (error) {
            setMensaje({ texto: error.message, tipo: 'error' });
        }
    };

    // PATCH /pedidos/{id}/estado (solo administrador y vendedor)
    const cambiarEstado = async (pedido, estado) => {
        if (!estado) return;
        try {
            const actualizado = await cambiarEstadoPedido(pedido.id, estado);
            actualizarEnLista(actualizado);
            setMensaje({ texto: `Pedido ${pedido.id} actualizado a ${estado}`, tipo: 'exito' });
        } catch (error) {
            setMensaje({ texto: error.message, tipo: 'error' });
        }
    };

    // PATCH /pedidos/{id}/cancelar (el cliente cancela su pedido si esta PENDIENTE)
    const cancelar = async (pedido) => {
        if (!window.confirm(`¿Cancelar el pedido ${pedido.id}?`)) return;
        try {
            const actualizado = await cancelarPedido(pedido.id);
            actualizarEnLista(actualizado);
            setMensaje({ texto: `Pedido ${pedido.id} cancelado`, tipo: 'exito' });
        } catch (error) {
            setMensaje({ texto: error.message, tipo: 'error' });
        }
    };

    return (
        <PlantillaPublica>
            <Container className="my-5">
                <h1 className="titulo-seccion mb-4">
                    {esPersonal ? 'Gestión de pedidos' : 'Mis pedidos'}
                </h1>

                <Mensaje texto={mensaje.texto} tipo={mensaje.tipo} />

                {cargando && <p className="text-white">Cargando pedidos...</p>}

                {!cargando && pedidos.length === 0 && (
                    <p className="text-white">No hay pedidos todavía.</p>
                )}

                {pedidos.length > 0 && (
                    <Table striped bordered hover responsive>
                        <thead>
                            <tr>
                                <th>N°</th>
                                <th>Fecha</th>
                                {esPersonal && <th>Cliente</th>}
                                <th>Entrega</th>
                                <th>Total</th>
                                <th>Estado</th>
                                <th>Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            {pedidos.map((p) => (
                                <tr key={p.id}>
                                    <td>{p.id}</td>
                                    <td>{formatearFecha(p.fecha)}</td>
                                    {esPersonal && <td>{p.usuarioNombre}</td>}
                                    <td>{p.tipoEntrega === 'DOMICILIO' ? 'Domicilio' : 'Retiro'}</td>
                                    <td>${p.total}</td>
                                    <td><EstadoPedido estado={p.estado} /></td>
                                    <td className="d-flex gap-2 flex-wrap">
                                        <Button size="sm" variant="primary" onClick={() => verDetalle(p.id)}>
                                            Ver detalle
                                        </Button>

                                        {esPersonal && SIGUIENTES[p.estado].length > 0 && (
                                            <Form.Select
                                                size="sm"
                                                style={{ width: 'auto' }}
                                                value=""
                                                onChange={(e) => cambiarEstado(p, e.target.value)}
                                            >
                                                <option value="">Cambiar estado...</option>
                                                {SIGUIENTES[p.estado].map((estado) => (
                                                    <option key={estado} value={estado}>{estado}</option>
                                                ))}
                                            </Form.Select>
                                        )}

                                        {p.usuarioId === yo?.id && p.estado === 'PENDIENTE' && (
                                            <Button size="sm" variant="danger" onClick={() => cancelar(p)}>
                                                Cancelar
                                            </Button>
                                        )}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                )}
            </Container>

            <Modal show={detalle !== null} onHide={() => setDetalle(null)} centered size="lg">
                {detalle && (
                    <>
                        <Modal.Header closeButton>
                            <Modal.Title>Pedido N° {detalle.id}</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <p><strong>Cliente:</strong> {detalle.usuarioNombre}</p>
                            <p><strong>Fecha:</strong> {formatearFecha(detalle.fecha)}</p>
                            <p><strong>Estado:</strong> <EstadoPedido estado={detalle.estado} /></p>
                            <p>
                                <strong>Entrega:</strong>{' '}
                                {detalle.tipoEntrega === 'DOMICILIO'
                                    ? `Despacho a ${detalle.direccionDespacho}`
                                    : 'Retiro en tienda'}
                            </p>

                            <Table size="sm" bordered>
                                <thead>
                                    <tr>
                                        <th>Producto</th>
                                        <th>Cantidad</th>
                                        <th>Precio unitario</th>
                                        <th>Subtotal</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {detalle.detalles.map((d) => (
                                        <tr key={d.productoId}>
                                            <td>{d.nombre}</td>
                                            <td>{d.cantidad}</td>
                                            <td>${d.precioUnitario}</td>
                                            <td>${d.subtotal}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </Table>

                            <p className="fs-5 text-end"><strong>Total:</strong> ${detalle.total}</p>
                            {detalle.pago && (
                                <p className="text-muted mb-0">
                                    Pago con tarjeta {detalle.pago.tarjeta} · {detalle.pago.estado}
                                </p>
                            )}
                        </Modal.Body>
                    </>
                )}
            </Modal>
        </PlantillaPublica>
    );
}

export default Pedidos;
