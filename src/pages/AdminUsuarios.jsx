import { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';
import { PlantillaPublica } from '../components/templates/PlantillaPublica';
import Mensaje from '../components/atoms/Mensaje';
import {
    listarUsuarios,
    crearUsuario,
    actualizarUsuario,
    cambiarRolUsuario,
    desactivarUsuario,
    reactivarUsuario,
} from '../services/api';
import { obtenerUsuario } from '../services/sesion';

const ROLES = ['ADMINISTRADOR', 'VENDEDOR', 'CLIENTE'];

const FORMULARIO_VACIO = {
    nombre: '',
    correo: '',
    password: '',
    fechaNacimiento: '',
    direccion: '',
    rol: 'CLIENTE',
};

function textoError(error) {
    if (error.campos && typeof error.campos === 'object') {
        const detalle = Object.values(error.campos).join('. ');
        return detalle ? `${error.message}: ${detalle}` : error.message;
    }
    return error.message;
}

function AdminUsuarios() {
    const yo = obtenerUsuario();
    const [usuarios, setUsuarios] = useState([]);
    const [cargando, setCargando] = useState(true);
    const [mensaje, setMensaje] = useState({ texto: '', tipo: 'exito' });
    const [modalAbierto, setModalAbierto] = useState(false);
    const [editando, setEditando] = useState(null);
    const [formulario, setFormulario] = useState(FORMULARIO_VACIO);
    const [errorModal, setErrorModal] = useState('');
    const [guardando, setGuardando] = useState(false);

    const cargarUsuarios = async () => {
        setCargando(true);
        try {
            const lista = await listarUsuarios();
            setUsuarios(lista);
        } catch (error) {
            setMensaje({ texto: textoError(error), tipo: 'error' });
        } finally {
            setCargando(false);
        }
    };

    useEffect(() => {
        cargarUsuarios();
    }, []);

    const abrirCrear = () => {
        setEditando(null);
        setFormulario(FORMULARIO_VACIO);
        setErrorModal('');
        setModalAbierto(true);
    };

    const abrirEditar = (usuario) => {
        setEditando(usuario);
        setFormulario({
            nombre: usuario.nombre || '',
            correo: usuario.correo || '',
            password: '',
            fechaNacimiento: usuario.fechaNacimiento || '',
            direccion: usuario.direccion || '',
            rol: usuario.rol,
        });
        setErrorModal('');
        setModalAbierto(true);
    };

    const cerrarModal = () => {
        setModalAbierto(false);
    };

    const cambiarCampo = (e) => {
        const { name, value } = e.target;
        setFormulario({ ...formulario, [name]: value });
    };

    const guardar = async (e) => {
        e.preventDefault();
        setErrorModal('');
        setGuardando(true);
        try {
            if (editando) {
                const datos = {
                    nombre: formulario.nombre.trim(),
                    correo: formulario.correo.trim(),
                    direccion: formulario.direccion.trim(),
                };
                if (formulario.password) {
                    datos.password = formulario.password;
                }
                if (formulario.fechaNacimiento) {
                    datos.fechaNacimiento = formulario.fechaNacimiento;
                }
                await actualizarUsuario(editando.id, datos);
                if (formulario.rol !== editando.rol) {
                    await cambiarRolUsuario(editando.id, formulario.rol);
                }
                setMensaje({ texto: 'Usuario actualizado correctamente', tipo: 'exito' });
            } else {
                const datos = {
                    nombre: formulario.nombre.trim(),
                    correo: formulario.correo.trim(),
                    password: formulario.password,
                    rol: formulario.rol,
                };
                if (formulario.fechaNacimiento) {
                    datos.fechaNacimiento = formulario.fechaNacimiento;
                }
                await crearUsuario(datos);
                setMensaje({ texto: 'Usuario creado correctamente', tipo: 'exito' });
            }
            setModalAbierto(false);
            await cargarUsuarios();
        } catch (error) {
            setErrorModal(textoError(error));
        } finally {
            setGuardando(false);
        }
    };

    const desactivar = async (usuario) => {
        if (!window.confirm(`¿Desactivar la cuenta de ${usuario.nombre}?`)) return;
        try {
            await desactivarUsuario(usuario.id);
            setMensaje({ texto: 'Usuario desactivado correctamente', tipo: 'exito' });
            await cargarUsuarios();
        } catch (error) {
            setMensaje({ texto: textoError(error), tipo: 'error' });
        }
    };

    const reactivar = async (usuario) => {
        try {
            await reactivarUsuario(usuario.id);
            setMensaje({ texto: 'Usuario reactivado correctamente', tipo: 'exito' });
            await cargarUsuarios();
        } catch (error) {
            setMensaje({ texto: textoError(error), tipo: 'error' });
        }
    };

    return (
        <PlantillaPublica>
            <Container className="my-5">
                <div className="d-flex justify-content-between align-items-center mb-4">
                    <h1 className="titulo-seccion mb-0">Administración de usuarios</h1>
                    <Button variant="warning" onClick={abrirCrear}>Nuevo usuario</Button>
                </div>

                <Mensaje texto={mensaje.texto} tipo={mensaje.tipo} />

                {cargando ? (
                    <p>Cargando usuarios...</p>
                ) : (
                    <Table striped bordered hover responsive>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Nombre</th>
                                <th>Correo</th>
                                <th>Rol</th>
                                <th>Estado</th>
                                <th>Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            {usuarios.map((u) => (
                                <tr key={u.id}>
                                    <td>{u.id}</td>
                                    <td>{u.nombre}</td>
                                    <td>{u.correo}</td>
                                    <td>{u.rol}</td>
                                    <td>
                                        <Badge bg={u.activo ? 'success' : 'secondary'}>
                                            {u.activo ? 'Activo' : 'Inactivo'}
                                        </Badge>
                                    </td>
                                    <td className="d-flex gap-2">
                                        <Button size="sm" variant="primary" onClick={() => abrirEditar(u)}>
                                            Editar
                                        </Button>
                                        {u.activo ? (
                                            <Button
                                                size="sm"
                                                variant="danger"
                                                disabled={yo?.id === u.id}
                                                onClick={() => desactivar(u)}
                                            >
                                                Desactivar
                                            </Button>
                                        ) : (
                                            <Button size="sm" variant="success" onClick={() => reactivar(u)}>
                                                Reactivar
                                            </Button>
                                        )}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                )}
            </Container>

            <Modal show={modalAbierto} onHide={cerrarModal} centered>
                <Form onSubmit={guardar}>
                    <Modal.Header closeButton>
                        <Modal.Title>{editando ? 'Editar usuario' : 'Nuevo usuario'}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Mensaje texto={errorModal} tipo="error" />

                        <Form.Group className="mb-3">
                            <Form.Label>Nombre</Form.Label>
                            <Form.Control
                                name="nombre"
                                value={formulario.nombre}
                                onChange={cambiarCampo}
                                minLength={2}
                                maxLength={100}
                                required
                            />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Correo</Form.Label>
                            <Form.Control
                                type="email"
                                name="correo"
                                value={formulario.correo}
                                onChange={cambiarCampo}
                                required
                            />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>
                                {editando ? 'Nueva contraseña (opcional)' : 'Contraseña'}
                            </Form.Label>
                            <Form.Control
                                type="password"
                                name="password"
                                value={formulario.password}
                                onChange={cambiarCampo}
                                minLength={8}
                                maxLength={72}
                                required={!editando}
                            />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Fecha de nacimiento</Form.Label>
                            <Form.Control
                                type="date"
                                name="fechaNacimiento"
                                value={formulario.fechaNacimiento}
                                onChange={cambiarCampo}
                            />
                        </Form.Group>

                        {editando && (
                            <Form.Group className="mb-3">
                                <Form.Label>Dirección</Form.Label>
                                <Form.Control
                                    name="direccion"
                                    value={formulario.direccion}
                                    onChange={cambiarCampo}
                                    maxLength={200}
                                />
                            </Form.Group>
                        )}

                        <Form.Group className="mb-3">
                            <Form.Label>Rol</Form.Label>
                            <Form.Select
                                name="rol"
                                value={formulario.rol}
                                onChange={cambiarCampo}
                                disabled={editando && yo?.id === editando.id}
                            >
                                {ROLES.map((rol) => (
                                    <option key={rol} value={rol}>{rol}</option>
                                ))}
                            </Form.Select>
                        </Form.Group>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={cerrarModal}>Cancelar</Button>
                        <Button variant="warning" type="submit" disabled={guardando}>
                            {guardando ? 'Guardando...' : 'Guardar'}
                        </Button>
                    </Modal.Footer>
                </Form>
            </Modal>
        </PlantillaPublica>
    );
}

export default AdminUsuarios;