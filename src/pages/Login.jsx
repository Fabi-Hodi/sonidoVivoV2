import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../App.css'; 
import usuarios from '../data/usuarios.json';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import FormularioLogin from '../components/organisms/FormularioLogin';
import { PlantillaPublica } from '../components/templates/PlantillaPublica';


function Login() {
    const [correo, setCorreo] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const manejarLogin = (e) => {
    e.preventDefault();

    const usuariosLocales = JSON.parse(
        localStorage.getItem("usuarios")
    ) || [];

    const todosLosUsuarios = [
    ...usuarios,
    ...usuariosLocales
    ];

    const usuario = todosLosUsuarios.find(
    (u) =>
        u.correo === correo &&
        u.password === password
    );

    if (usuario) {
        localStorage.setItem(
            "usuario",
            JSON.stringify(usuario)
        );
        navigate("/");
        
    } else {
        alert("Correo o contraseña incorrectos");
    }
}

    return (
        <PlantillaPublica>
            <Container> 
                <Row className="justify-content-center contenedor-login"> 
                    <Col md={6}> 
                        <div className="login-card">
                            <h1 className="text-center mb-4"> 
                                Iniciar sesión
                            </h1>
                            
                            <FormularioLogin
                                onSubmit={manejarLogin}
                                correo={correo}
                                password={password}

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