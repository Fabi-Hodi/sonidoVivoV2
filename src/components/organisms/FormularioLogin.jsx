import Boton from '../atoms/Boton';
import Input from '../atoms/Input'

function FormularioLogin(props) {
    return (
        <form onSubmit={props.onSubmit}>
        <div className='mb-2'> {/*lo que hace separa el correo con la contraseña le da un margen */}
            <Input
                id="correo"
                textoLabel="Correo"
                tipo="email"
                placeholder="Ingrese su correo"
                valor={props.correo}
                onChange={props.onCorreoChange}
            />
        </div>
        
        <div className='mb-2'>
            <Input
                id="password"
                textoLabel="Contraseña"
                tipo="password"
                placeholder="Ingrese su contraseña"
                valor={props.password}
                onChange={props.onPasswordChange}
            />
        </div>

        <div className='mb-3'>
            <Boton
                nombreBoton="Iniciar sesión"
                variante="primary"
            />
        </div>

        </form>
    );
}

export default FormularioLogin;