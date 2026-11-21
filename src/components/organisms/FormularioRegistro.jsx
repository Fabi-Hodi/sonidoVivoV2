import Boton from '../atoms/Boton';
import Input from '../atoms/Input';

function FormularioRegistro(props) {
    const errores = props.errores || {};

    return (
        <form onSubmit={props.onSubmit} noValidate>

            <div className='mb-4 contenedor-input'>
                <Input
                    id="nombreCompleto"
                    textoLabel="Nombre Completo"
                    tipo="text"
                    placeholder="Ingrese su nombre completo"
                    valor={props.nombreCompleto}
                    onChange={props.onNombreCompletoChange}
                    error={errores.nombre}
                    required
                />
            </div>

            <div className='mb-4 contenedor-input'>
                <Input
                    id="fechaNacimiento"
                    textoLabel="Ingrese su fecha de nacimiento"
                    tipo="date"
                    valor={props.fechaNacimiento}
                    onChange={props.onFechaNacimientoChange}
                    error={errores.fechaNacimiento}
                    required
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
                    error={errores.correo}
                    required
                />
            </div>

            <div className='mb-4 contenedor-input'>
                <Input
                    id="password"
                    textoLabel="Contraseña"
                    tipo="password"
                    placeholder="Ingrese su contraseña (mínimo 8 caracteres)"
                    valor={props.password}
                    onChange={props.onPasswordChange}
                    error={errores.password}
                    required
                />
            </div>

            <div className='mb-3 boton-login'>
                <Boton
                    nombreBoton={props.cargando ? "Creando cuenta..." : "Crear cuenta"}
                    variante="primary"
                    deshabilitado={props.cargando}
                />
            </div>

        </form>
    );
}

export default FormularioRegistro;
