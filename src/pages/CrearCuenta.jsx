import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';

import { PlantillaPublica } from "../components/templates/PlantillaPublica";
import FormularioRegistro from "../components/organisms/FormularioRegistro";

function CrearCuenta(props){
    const [nombreCompleto, setNombreCompleto] = useState('');
    const [fechaNacimiento, setFechaNacimiento] = useState('');
    const [correo, setCorreo] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();



    const manejarRegistro = (e) => {
    e.preventDefault();
    const usuariosGuardados = JSON.parse(
        localStorage.getItem("usuarios")
    ) || [];
    const nuevoUsuario = {
        id: Date.now(),
        nombre: nombreCompleto,
        fechaNacimiento: fechaNacimiento,
        correo: correo,
        password: password,
        rol: "cliente",
    };
    usuariosGuardados.push(nuevoUsuario);
    localStorage.setItem(
        "usuarios",
        JSON.stringify(usuariosGuardados)
    );
    alert("Cuenta creada correctamente");
    navigate("/login");
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
                            <FormularioRegistro
                                onSubmit={manejarRegistro}
                                nombreCompleto={nombreCompleto}
                                fechaNacimiento={fechaNacimiento}
                                correo={correo}
                                password={password}
                                onNombreCompletoChange={(e) =>
                                    setNombreCompleto(e.target.value)
                                }
                                onFechaNacimientoChange={(e) =>
                                    setFechaNacimiento(e.target.value)
                                }
                                onCorreoChange={(e) =>
                                    setCorreo(e.target.value)
                                }
                                onPasswordChange={(e) =>
                                    setPassword(e.target.value)
                                }
                            />
                        </div>
                    </Col>
                </Row>
            </Container>
        </PlantillaPublica>
    );
}

export default CrearCuenta;
