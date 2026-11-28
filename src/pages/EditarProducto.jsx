import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Mensaje from "../components/atoms/Mensaje";
import { obtenerProductoPorCodigo, actualizarProducto } from "../services/api";


function EditarProducto(){
    const { codigo } = useParams();
    const navigate = useNavigate();

    // el producto se carga desde la API y se guarda con PUT /productos/{id}
    const [producto, setProducto] = useState(null);
    const [nombre, setNombre] = useState("");
    const [precio, setPrecio] = useState("");
    const [stock, setStock] = useState("");
    const [error, setError] = useState("");

    useEffect(() => {
        obtenerProductoPorCodigo(codigo)
            .then((datos) => {
                setProducto(datos);
                setNombre(datos.nombre);
                setPrecio(datos.precio);
                setStock(datos.stock);
            })
            .catch((err) => setError(err.message));
    }, [codigo]);

    const guardarCambios = async () => {
        setError("");
        // el PUT necesita el producto completo, por eso se envian tambien los datos que no cambian
        const datos = {
            codigo: producto.codigo,
            nombre: nombre.trim(),
            marca: producto.marca,
            modelo: producto.modelo,
            descripcion: producto.descripcion,
            precio: Number(precio),
            stock: Number(stock),
            imagen: producto.imagen,
            categoriaId: producto.categoriaId
        };
        try {
            await actualizarProducto(producto.id, datos);
            alert("Producto actualizado correctamente");
            navigate("/catalogo");
        } catch (err) {
            const detalle = err.campos ? Object.values(err.campos).join('. ') : '';
            setError(detalle ? `${err.message}: ${detalle}` : err.message);
        }
    };

    if (!producto) {
        return (
            <Container className="my-5 text-white">
                <Mensaje texto={error} tipo="error" />
                {!error && <p>Cargando producto...</p>}
            </Container>
        );
    }

    return (
        <Container className="d-flex justify-content-center">
            <div className="agregar-producto-container my-5">

                <h1>Editar Producto</h1>

                <form className="formulario-producto">

                    <Mensaje texto={error} tipo="error" />

                    <div className="mb-3">
                        <label className="form-label">
                            Nombre
                        </label>

                        <input
                            className="form-control"
                            value={nombre}
                            onChange={(e) =>
                                setNombre(e.target.value)
                            }
                        />
                    </div>

                    <div className="mb-3">
                        <label className="form-label">
                            Precio
                        </label>

                        <input
                            className="form-control"
                            type="number"
                            value={precio}
                            onChange={(e) =>
                                setPrecio(e.target.value)
                            }
                        />
                    </div>

                    <div className="mb-3">
                        <label className="form-label">
                            Stock
                        </label>

                        <input
                            className="form-control"
                            type="number"
                            value={stock}
                            onChange={(e) =>
                                setStock(e.target.value)
                            }
                        />
                    </div>

                    <div className="d-flex gap-3">

                        <button
                            type="button"
                            className="btn btn-warning"
                            onClick={guardarCambios}
                        >
                            Guardar cambios
                        </button>

                        <button
                            type="button"
                            className="btn btn-secondary"
                            onClick={() => navigate("/catalogo")}
                        >
                            Cancelar
                        </button>

                    </div>

                </form>

            </div>
        </Container>
        );



}

export default EditarProducto;
