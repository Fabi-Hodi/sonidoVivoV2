
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../App.css'; 

import FormularioLogin from '../components/organisms/FormularioLogin';

function Login() {
    return (
        
        <Container> 
            <Row className="justify-content-center"> 
                <Col md={6}> 
                    <h1 className="text-center mb-4" style={{color: 'brown'}}> 
                        Iniciar sesión prueba
                    </h1>
                    
                    <FormularioLogin /> 
                </Col>
            </Row>
        </Container>
    );

}

export default Login;