import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';

import { PlantillaPublica } from "../components/templates/PlantillaPublica";
import FormularioRegistro from "../components/organisms/FormularioRegistro";
import Mensaje from "../components/atoms/Mensaje";
import { registrarUsuario } from "../services/api";

function CrearCuenta(){
    const [nombreCompleto, setNombreCompleto] = useState('');
    const [fechaNacimiento, setFechaNacimiento] = useState('');
    const [correo, setCorreo] = useState('');
    const [password, setPassword] = useState('');

    // estados de la peticion. cargando, exito y error
    const [cargando, setCargando] = useState(false);
    const [mensajeExito, setMensajeExito] = useState('');
    const [mensajeError, setMensajeError] = useState('');
    const [errores, setErrores] = useState({});

    const navigate = useNavigate();

    const manejarRegistro = async (e) => {
        e.preventDefault();
        setCargando(true);
        setMensajeExito('');
        setMensajeError('');
        setErrores({});

        try {
            // el rol no se envia: el servidor asigna CLIENTE
            await registrarUsuario({
                nombre: nombreCompleto,
                correo: correo,
                password: password,
                fechaNacimiento: fechaNacimiento || null,
            });
            setMensajeExito('Cuenta creada correctamente. Te llevaremos al inicio de sesión...');
            setTimeout(() => navigate('/login'), 2000);
        } catch (error) {
            setMensajeError(error.message);
            setErrores(error.campos || {});
        } finally {
            setCargando(false);
        }
    };

    return(
        <PlantillaPublica>
            <Container>
                <Row className="justify-content-center contenedor-login">
                    <Col md={6}>
                        <div className="login-card">
                            <h1 className="text-center mb-4">
                                Crear Cuenta
                            </h1>

                            <Mensaje tipo="exito" texto={mensajeExito} />
                            <Mensaje tipo="error" texto={mensajeError} />

                            <FormularioRegistro
                                onSubmit={manejarRegistro}
                                nombreCompleto={nombreCompleto}
                                fechaNacimiento={fechaNacimiento}
                                correo={correo}
                                password={password}
                                cargando={cargando}
                                errores={errores}
                                onNombreCompletoChange={(e) => setNombreCompleto(e.target.value)}
                                onFechaNacimientoChange={(e) => setFechaNacimiento(e.target.value)}
                                onCorreoChange={(e) => setCorreo(e.target.value)}
                                onPasswordChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                    </Col>
                </Row>
            </Container>
        </PlantillaPublica>
    );
}

export default CrearCuenta;
