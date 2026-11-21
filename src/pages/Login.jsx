import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../App.css';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import FormularioLogin from '../components/organisms/FormularioLogin';
import Mensaje from '../components/atoms/Mensaje';
import { PlantillaPublica } from '../components/templates/PlantillaPublica';
import { iniciarSesion } from '../services/api';

// la API devuelve el rol en mayusculas (ej. "ADMINISTRADOR").
// la app lo usa como "Administrador", asi que se adapta aqui.
function formatearRol(rol) {
    return rol.charAt(0) + rol.slice(1).toLowerCase();
}

function Login() {
    const [correo, setCorreo] = useState('');
    const [password, setPassword] = useState('');

    // estados de la peticion. cargando, exito y error
    const [cargando, setCargando] = useState(false);
    const [mensajeExito, setMensajeExito] = useState('');
    const [mensajeError, setMensajeError] = useState('');

    const navigate = useNavigate();

    const manejarLogin = async (e) => {
        e.preventDefault();
        setCargando(true);
        setMensajeExito('');
        setMensajeError('');

        try {
            const respuesta = await iniciarSesion(correo, password);

            // el token se envia en las siguientes peticiones a la API
            localStorage.setItem('token', respuesta.accessToken);
            localStorage.setItem('usuario', JSON.stringify({
                ...respuesta.usuario,
                rol: formatearRol(respuesta.usuario.rol),
            }));

            setMensajeExito(`Bienvenido, ${respuesta.usuario.nombre}`);
            setTimeout(() => navigate('/'), 1200);
        } catch (error) {
            setMensajeError(error.message);
        } finally {
            setCargando(false);
        }
    };

    return (
        <PlantillaPublica>
            <Container>
                <Row className="justify-content-center contenedor-login">
                    <Col md={6}>
                        <div className="login-card">
                            <h1 className="text-center mb-4">
                                Iniciar sesión
                            </h1>

                            <Mensaje tipo="exito" texto={mensajeExito} />
                            <Mensaje tipo="error" texto={mensajeError} />

                            <FormularioLogin
                                onSubmit={manejarLogin}
                                correo={correo}
                                password={password}
                                cargando={cargando}
                                onCorreoChange={(e) => setCorreo(e.target.value)}
                                onPasswordChange={(e) => setPassword(e.target.value)}
                            />

                            <Link to="/crearcuenta" className="d-block text-center mt-3 nueva-cuenta">
                                ¿Aún no tienes una cuenta? Presióname
                            </Link>
                        </div>
                    </Col>
                </Row>
            </Container>
        </PlantillaPublica>
    );
}

export default Login;
