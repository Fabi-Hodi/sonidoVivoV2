import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './App.css'; 

import NavBar from './components/organisms/Navbar';
import FormularioLogin from './components/organisms/FormularioLogin';
import TarjetaProducto from './components/molecules/TarjetaProducto';

function App() {
    return (
        <>
        <NavBar />

        <Container> 
            <Row className="justify-content-center"> 
                <Col md={6}> 
                    <h1 className="text-center mb-4" style={{color: 'brown'}}> 
                        Iniciar sesión
                    </h1>
                    
                    <FormularioLogin /> 
                </Col>
            </Row>
        </Container>


        <TarjetaProducto
        nombre="guitarra"
        imagen="img/guitarras/GA1.png"
        valor={250000}
        disponible={true}
        /> 
        </>

    );

}

export default App;