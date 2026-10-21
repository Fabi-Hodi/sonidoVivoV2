import Input from '../atoms/Input';
import Boton from '../atoms/Boton';

function FormularioContacto(props){
    return(
        <form onSubmit={props.onSubmit}>
            <div className='mb-4 contenedor-input'>
                <Input
                    id="nombre"
                    tipo='text'
                    placeholder='Ingrese su nombre completo'
                    valor={props.nombre}
                    onChange={props.onNombreChange}
                />
            </div>

            <div className='mb-4 contenedor-input'>
                <Input
                    id='correo'
                    tipo='email'
                    placeholder='Ingrese su correo electronico'
                    valor={props.correo}
                    onChange={props.onCorreoChange}
                />
            </div>


            <div className='mb-4 contenedor-input'>
                <Input
                    id='telefono'
                    tipo='tel'
                    placeholder='ingrese su numero de telefono'
                    valor={props.telefono}
                    onChange={props.onTelefonoChange}
                />
            </div>


            <div className='mb-4 contenedor-input'>
                <select
                    className='form-select'
                    value={props.motivo}
                    onChange={props.onMotivoChange}
                
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


            <div className='mb-4 contenedor-input'>

                <textarea
                    className='form-control'
                    placeholder="Escriba su mensaje"
                    value={props.mensaje}
                    onChange={props.onMensajeChange}
                    rows="5"
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