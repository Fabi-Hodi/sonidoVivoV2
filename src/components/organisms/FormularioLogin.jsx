import GrupoFormu from '../molecules/GrupoFormu';
import Boton from '../atoms/Boton';

function FormularioLogin(props) {
    return (
        <form onSubmit={props.onSubmit}>

            <GrupoFormu
                id="correo"
                textoLabel="Correo"
                tipo="email"
                placeholder="Ingrese su correo"
                valor={props.correo}
                onChange={props.onCorreoChange}
            />

            <GrupoFormu
                id="password"
                textoLabel="Contraseña"
                tipo="password"
                placeholder="Ingrese su contraseña"
                valor={props.password}
                onChange={props.onPasswordChange}
            />

            <Boton
                texto="Iniciar sesión"
                variante="primary"
            />

        </form>
    );
}

export default FormularioLogin;