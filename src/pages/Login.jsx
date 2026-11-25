import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../App.css';
import { useState } from 'react';
import { Link, useLocation, useNavigate, useSearchParams } from 'react-router-dom';

import FormularioLogin from '../components/organisms/FormularioLogin';
import Mensaje from '../components/atoms/Mensaje';
import { PlantillaPublica } from '../components/templates/PlantillaPublica';
import { iniciarSesion } from '../services/api';
import { guardarSesion } from '../services/sesion';

function Login() {
    const [correo, setCorreo] = useState('');
    const [password, setPassword] = useState('');

    // estados de la peticion: cargando, exito y error
    const [cargando, setCargando] = useState(false);
    const [mensajeExito, setMensajeExito] = useState('');
    const [mensajeError, setMensajeError] = useState('');

    const navigate = useNavigate();
    const location = useLocation();
    const [parametros] = useSearchParams();

    // aviso cuando se llega desde una ruta protegida o porque el token vencio
    const aviso = parametros.get('sesion') === 'expirada'
        ? 'Tu sesión expiró. Inicia sesión nuevamente.'
        : location.state?.mensaje;

    const manejarLogin = async (e) => {
        e.preventDefault();
        setCargando(true);
        setMensajeExito('');
        setMensajeError('');

        try {
            const respuesta = await iniciarSesion(correo, password);
            guardarSesion(respuesta.accessToken, respuesta.usuario);

            setMensajeExito(`Bienvenido, ${respuesta.usuario.nombre}`);
            // Si venía desde una ruta protegida, vuelve a ella
            const destino = location.state?.desde || '/';
            setTimeout(() => navigate(destino), 1200);
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

                            {!mensajeExito && !mensajeError && <Mensaje tipo="error" texto={aviso} />}
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
