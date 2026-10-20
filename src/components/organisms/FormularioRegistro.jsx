import Boton from '../atoms/Boton';
import Input from '../atoms/Input';

function FormularioRegistro(props) {
    return (
        <form onSubmit={props.onSubmit}>

            <div className='mb-4 contenedor-input'>
                <Input
                    id="nombreCompleto"
                    textoLabel="Nombre Completo"
                    tipo="text"
                    placeholder="Ingrese su nombre completo"
                    valor={props.nombreCompleto}
                    onChange={props.onNombreCompletoChange}
                />
            </div>

            <div className='mb-4 contenedor-input'>
                <Input
                    id="fechaNacimiento"
                    textoLabel="Ingrese su fecha de nacimiento"
                    tipo="date"
                    valor={props.fechaNacimiento}
                    onChange={props.onFechaNacimientoChange}
                />
            </div>

            <div className='mb-4 contenedor-input'>
                <Input
                    id="correo"
                    textoLabel="Correo"
                    tipo="email"
                    placeholder="Ingrese su correo"
                    valor={props.correo}
                    onChange={props.onCorreoChange}
                />
            </div>

            <div className='mb-4 contenedor-input'>
                <Input
                    id="password"
                    textoLabel="Contraseña"
                    tipo="password"
                    placeholder="Ingrese su contraseña"
                    valor={props.password}
                    onChange={props.onPasswordChange}
                />
            </div>

            <div className='mb-3 boton-login'>
                <Boton
                    nombreBoton="Crear cuenta"
                    variante="primary"
                />
            </div>

        </form>
    );
}

export default FormularioRegistro;