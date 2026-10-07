import CatalogoProductos from '../organisms/catalogoProductos'

function Catalogo() {
    return (
        <main className="container my-4">
            <h1 className="text-center mb-4 text-warning">
                Catálogo de Productos
            </h1>
            
            <CatalogoProductos />
        </main>
    );
}

export default Catalogo;