import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../App.css';

import { PlantillaPublica } from "../components/templates/PlantillaPublica";
import FormularioRegistro from "../components/organisms/FormularioRegistro";

function CrearCuenta(props){
    return(
        <PlantillaPublica>
            <Container>
                <Row className="justify-content-center contenedor-login">
                    <Col md={6}>
                        <div className="login-card">
                            <h1 className="text-center mb-4">
                                Crear Cuenta
                            </h1>
                            <FormularioRegistro />
                        </div>
                    </Col>
                </Row>
            </Container>
        </PlantillaPublica>
    );
}

export default CrearCuenta;
