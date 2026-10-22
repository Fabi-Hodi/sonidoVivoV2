import Input from '../atoms/Input';
import Boton from '../atoms/Boton';

function FormularioContacto(props){
    return(
        <form onSubmit={props.onSubmit}>
            <div className='contenedor-contacto'>
                <Input
                    id="nombre"
                    tipo='text'
                    placeholder='Ingrese su nombre completo'
                    valor={props.nombre}
                    onChange={props.onNombreChange}
                    required
                />
            </div>

            <div className='contenedor-contacto'>
                <Input
                    id='correo'
                    tipo='email'
                    placeholder='Ingrese su correo electronico'
                    valor={props.correo}
                    onChange={props.onCorreoChange}
                    required
                />
            </div>


            <div className='contenedor-contacto '>
                <Input
                    id='telefono'
                    tipo='tel'
                    placeholder='ingrese su numero de telefono'
                    valor={props.telefono}
                    onChange={props.onTelefonoChange}
                />
            </div>


            <div className='contenedor-contacto'>
                <select
                    className='form-select'
                    value={props.motivo}
                    onChange={props.onMotivoChange}
                    required
                
                >
                    <option value="">
                        Seleccione una opcion
                    </option>

                    <option value="Rembolso">
                        Rembolso
                    </option>

                    <option value="Reclamo">
                        Reclamo
                    </option>
                    

                    <option value="Problema pedido">
                        Problema de pedido
                    </option>
                    

                    <option value="otro">
                        otro
                    </option>

                </select>
            </div>


            <div className='contenedor-contacto'>

                <textarea
                    className='form-control'
                    placeholder="Escriba su mensaje"
                    value={props.mensaje}
                    onChange={props.onMensajeChange}
                    rows="5"
                    required
                />

            </div>

            <div className='mb-3 boton-login'>
                <Boton
                    nombreBoton="Enviar consulta"
                    variante="primary"
                />


            </div>
 
        </form>
    );
}

export default FormularioContacto;