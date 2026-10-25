import productos from "../data/productos.json";
import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Container from "react-bootstrap/Container";


function EditarProducto(){
    const { codigo } = useParams();
    const guardados = localStorage.getItem("productos");

    const listaProductos = guardados
        ? JSON.parse(guardados)
        : productos;

    const producto = listaProductos.find(
        (p) => p.codigo === codigo
    );

    const [nombre, setNombre] = useState(producto.nombre);
    const [precio, setPrecio] = useState(producto.precio);
    const [stock, setStock] = useState(producto.stock);


    const navigate = useNavigate();
    const guardarCambios = () => {
    const nuevaLista = listaProductos.map(
        (p) =>
            p.codigo === codigo
                ? {
                    ...p,
                    nombre,
                    precio: Number(precio),
                    stock: Number(stock)
                }
                : p
    );
    localStorage.setItem(
        "productos",
        JSON.stringify(nuevaLista)
    );
    alert("Producto actualizado correctamente");
    navigate("/catalogo");
    };



    return (
        <Container className="d-flex justify-content-center">
            <div className="agregar-producto-container my-5">

                <h1>Editar Producto</h1>

                <form className="formulario-producto">

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