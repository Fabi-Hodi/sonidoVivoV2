import Container from 'react-bootstrap/Container'; 
import Row from 'react-bootstrap/Row'; 
import Col from 'react-bootstrap/Col'; 
import '../App.css'; 

import { PlantillaPublica } from "../components/templates/PlantillaPublica"; 
import FormularioContacto from "../components/organisms/FormularioContacto"; 
function Contactanos(){
    return(
        <PlantillaPublica> 
            <Container> 
                <Row className="justify-content-center contenedor-login"> 
                    <Col md={8}> 
                        <div className="login-card"> 
                            <h1 className="text-center mb-4"> 
                                Contáctanos
                            </h1>
                            <FormularioContacto /> 
                        </div>
                    </Col>
                </Row>
            </Container>
        </PlantillaPublica>

    );

}

export default Contactanos; 