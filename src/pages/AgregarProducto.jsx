import '../App.css'; 
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import productos from "../data/productos.json";

function AgregarProducto() {
    const navigate = useNavigate();

    const usuario = JSON.parse(localStorage.getItem("usuario"));
    const esAdmin = usuario?.rol === "Administrador";

    const [nuevoProducto, setNuevoProducto] = useState({
        codigo: "",
        nombre: "",
        categoria: "",
        marca: "",
        modelo: "",
        precio: "",
        stock: "",
        descripcion: ""
    });

    const cambiarDato = (e) => {
        const { name, value } = e.target;

        setNuevoProducto({
            ...nuevoProducto,
            [name]: value
        });
    };

    const guardarProducto = (e) => {
        e.preventDefault();

        if (!esAdmin) return;

        const guardados = localStorage.getItem("productos");
        const listaProductos = guardados
            ? JSON.parse(guardados)
            : productos;

        const codigo = nuevoProducto.codigo.trim();

        if (
            listaProductos.some(
                (producto) =>
                    producto.codigo.toLowerCase() === codigo.toLowerCase()
            )
        ) {
            alert("Ya existe un producto con ese código");
            return;
        }

        const productoFinal = {
            ...nuevoProducto,
            codigo: codigo,
            nombre: nuevoProducto.nombre.trim(),
            precio: Number(nuevoProducto.precio),
            stock: Number(nuevoProducto.stock)
        };

        const nuevaLista = [...listaProductos, productoFinal];

        localStorage.setItem(
            "productos",
            JSON.stringify(nuevaLista)
        );

        alert("Producto agregado correctamente");
        navigate("/catalogo");
    };

    if (!esAdmin) {
        return (
            <Container className="my-5">
                <h2>No tienes permiso para acceder a esta página.</h2>
            </Container>
        );
    }

    return (
        <Container className="agregar-producto-container my-5">
            <h1 className="text-center mb-4">
                Agregar producto
            </h1>

            <Form onSubmit={guardarProducto} className="formulario-producto">

                <Form.Group className="mb-3">
                    <Form.Label>Código</Form.Label>
                    <Form.Control
                        type="text"
                        name="codigo"
                        value={nuevoProducto.codigo}
                        onChange={cambiarDato}
                        required
                    />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control
                        type="text"
                        name="nombre"
                        value={nuevoProducto.nombre}
                        onChange={cambiarDato}
                        required
                    />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Categoría</Form.Label>
                    <Form.Select
                        name="categoria"
                        value={nuevoProducto.categoria}
                        onChange={cambiarDato}
                        required
                    >
                        <option value="">Seleccionar categoría</option>
                        {[...new Set(productos.map(p => p.categoria))].map(
                            (categoria) => (
                                <option key={categoria} value={categoria}>
                                    {categoria}
                                </option>
                            )
                        )}
                    </Form.Select>
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Marca</Form.Label>
                    <Form.Control
                        type="text"
                        name="marca"
                        value={nuevoProducto.marca}
                        onChange={cambiarDato}
                        required
                    />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Modelo</Form.Label>
                    <Form.Control
                        type="text"
                        name="modelo"
                        value={nuevoProducto.modelo}
                        onChange={cambiarDato}
                        required
                    />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Precio</Form.Label>
                    <Form.Control
                        type="number"
                        name="precio"
                        min="1"
                        value={nuevoProducto.precio}
                        onChange={cambiarDato}
                        required
                    />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Stock</Form.Label>
                    <Form.Control
                        type="number"
                        name="stock"
                        min="0"
                        value={nuevoProducto.stock}
                        onChange={cambiarDato}
                        required
                    />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Descripción</Form.Label>
                    <Form.Control
                        as="textarea"
                        rows={3}
                        name="descripcion"
                        value={nuevoProducto.descripcion}
                        onChange={cambiarDato}
                        required
                    />
                </Form.Group>

                <div className="d-flex gap-3">
                    <Button variant="warning" type="submit">
                        Guardar producto
                    </Button>

                    <Button
                        variant="secondary"
                        type="button"
                        onClick={() => navigate("/catalogo")}
                    >
                        Cancelar
                    </Button>
                </div>

            </Form>
        </Container>
    );
}

export default AgregarProducto;
