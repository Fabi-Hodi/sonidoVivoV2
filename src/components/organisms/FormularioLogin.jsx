import Boton from '../atoms/Boton';
import Input from '../atoms/Input';

function FormularioLogin(props) {
    return (
        <form onSubmit={props.onSubmit}>
            <div className='mb-4 contenedor-input'>
                <Input
                    id="correo"
                    textoLabel="Correo"
                    tipo="email"
                    placeholder="Ingrese su correo"
                    valor={props.correo}
                    onChange={props.onCorreoChange}
                    required
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
                    required
                />
            </div>

            <div className='mb-3 boton-login'>
                <Boton
                    nombreBoton={props.cargando ? "Ingresando..." : "Iniciar sesión"}
                    variante="primary"
                    deshabilitado={props.cargando}
                />
            </div>
        </form>
    );
}

export default FormularioLogin;
