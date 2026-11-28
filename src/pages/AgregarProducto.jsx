import '../App.css';
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Mensaje from "../components/atoms/Mensaje";
import { crearProducto, listarCategorias } from "../services/api";

function AgregarProducto() {
    const navigate = useNavigate();

    // las categorias se cargan desde la API (GET /categorias)
    const [categorias, setCategorias] = useState([]);
    const [error, setError] = useState('');
    const [guardando, setGuardando] = useState(false);

    const [nuevoProducto, setNuevoProducto] = useState({
        codigo: "",
        nombre: "",
        categoriaId: "",
        marca: "",
        modelo: "",
        precio: "",
        stock: "",
        descripcion: ""
    });

    useEffect(() => {
        listarCategorias()
            .then((lista) => setCategorias(lista))
            .catch((err) => setError(err.message));
    }, []);

    const cambiarDato = (e) => {
        const { name, value } = e.target;

        setNuevoProducto({
            ...nuevoProducto,
            [name]: value
        });
    };

    // envia el producto a la API (POST /productos). el codigo repetido lo valida el backend (409)
    const guardarProducto = async (e) => {
        e.preventDefault();
        setError('');
        setGuardando(true);

        const productoFinal = {
            ...nuevoProducto,
            codigo: nuevoProducto.codigo.trim(),
            nombre: nuevoProducto.nombre.trim(),
            marca: nuevoProducto.marca.trim(),
            precio: Number(nuevoProducto.precio),
            stock: Number(nuevoProducto.stock),
            categoriaId: Number(nuevoProducto.categoriaId),
            imagen: "/img/productosNuevos/nuevo.png"
        };

        try {
            await crearProducto(productoFinal);
            alert("Producto agregado correctamente");
            navigate("/catalogo");
        } catch (err) {
            const detalle = err.campos ? Object.values(err.campos).join('. ') : '';
            setError(detalle ? `${err.message}: ${detalle}` : err.message);
        } finally {
            setGuardando(false);
        }
    };

    return (
        <Container className="agregar-producto-container my-5">
            <h1 className="text-center mb-4">
                Agregar producto
            </h1>

            <Form onSubmit={guardarProducto} className="formulario-producto">

                <Mensaje texto={error} tipo="error" />

                <Form.Group className="mb-3">
                    <Form.Label>Código</Form.Label>
                    <Form.Control
                        type="text"
                        name="codigo"
                        placeholder="Ej: GA006"
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
                        name="categoriaId"
                        value={nuevoProducto.categoriaId}
                        onChange={cambiarDato}
                        required
                    >
                        <option value="">Seleccionar categoría</option>
                        {categorias.map((categoria) => (
                            <option key={categoria.id} value={categoria.id}>
                                {categoria.nombre}
                            </option>
                        ))}
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
                    <Button variant="warning" type="submit" disabled={guardando}>
                        {guardando ? "Guardando..." : "Guardar producto"}
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
