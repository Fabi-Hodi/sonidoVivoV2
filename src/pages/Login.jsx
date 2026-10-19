import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../App.css'; 
import { Link } from 'react-router-dom';

import FormularioLogin from '../components/organisms/FormularioLogin';
import { PlantillaPublica } from '../components/templates/PlantillaPublica';


function Login() {
    return (
        <PlantillaPublica>
            <Container> 
                <Row className="justify-content-center contenedor-login"> 
                    <Col md={6}> 
                        <div className="login-card">
                            <h1 className="text-center mb-4"> 
                                Iniciar sesión
                            </h1>
                            
                            <FormularioLogin /> 
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