import NavBar from '../components/organisms/Navbar';
import CatalogoProductos from '../components/organisms/CatalogoProductos';
import { PlantillaPublica } from "../components/templates/PlantillaPublica";

function Catalogo() {
    return (
        <PlantillaPublica>
            <main className="container my-4">
                <h1 className="text-center mb-4 text-warning">
                    Catálogo de Productos
                </h1>
                <CatalogoProductos />
            </main>
        </PlantillaPublica>
    );
}

export default Catalogo;