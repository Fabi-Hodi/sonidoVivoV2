import Container from 'react-bootstrap/Container'; 
import Row from 'react-bootstrap/Row'; 
import Col from 'react-bootstrap/Col'; 
import { useState } from 'react';
import '../App.css'; 

import { PlantillaPublica } from "../components/templates/PlantillaPublica"; 
import FormularioContacto from "../components/organisms/FormularioContacto"; 
function Contactanos(){
    const [nombre, setNombre] = useState('');
    const [correo, setCorreo] = useState('');
    const [telefono, setTelefono] = useState('');
    const [motivo, setMotivo] = useState('');
    const [mensaje, setMensaje] = useState('');



    const [enviado, setEnviado] = useState(false);
    const manejarEnvio = (e) => {
    e.preventDefault();

    setEnviado(true);

    setNombre('');
    setCorreo('');
    setTelefono('');
    setMotivo('');
    setMensaje('');

    setTimeout(() => {
        setEnviado(false);
    }, 3000); 
}
    return(
        <PlantillaPublica> 
            <Container> 
                <Row className="justify-content-center contenedor-login"> 
                    <Col md={8}> 
                        <div className="login-card"> 
                            <h1 className="text-center mb-4"> 
                                Contáctanos
                            </h1>
                            <FormularioContacto onSubmit={manejarEnvio}
                            nombre={nombre}
                            correo={correo}
                            telefono={telefono}
                            motivo={motivo}
                            mensaje={mensaje}

                            onNombreChange={(e) => setNombre(e.target.value)}
                            onCorreoChange={(e) => setCorreo(e.target.value)}
                            onTelefonoChange={(e) => setTelefono(e.target.value)}
                            onMotivoChange={(e) => setMotivo(e.target.value)}
                            onMensajeChange={(e) => setMensaje(e.target.value)}
                            /> 
                            {enviado && (
                                <div className="mensaje-enviado">
                                    Formulario enviado correctamente ✅
                                </div>
                            )}
                        </div>
                    </Col>
                </Row>
            </Container>
        </PlantillaPublica>

    );

}

export default Contactanos; 