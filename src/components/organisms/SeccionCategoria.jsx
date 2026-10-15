import Categoria from "../molecules/Categoria";


function SeccionCategoria() {
    return (
        <section id="section-categoria">
            
            <Categoria 
                imagen='/src/assets/guitarra.png'  
                nombreCategoria="Guitarras"
                categoria="guitarras"
            />
            
            <Categoria 
                imagen='/src/assets/guitarraElectrica.png'
                nombreCategoria="Guitarras Eléctricas"
            />
            
            <Categoria 
                imagen='/src/assets/bajo.png'
                nombreCategoria="Bajos"
                categoria="bajos"
            />
            
            <Categoria 
                imagen='/src/assets/bateria.png'
                nombreCategoria="Baterías"
            />
            
            <Categoria 
                imagen='/src/assets/piano.png'
                nombreCategoria="Pianos y Teclados"
            />
            
            <Categoria 
                imagen='/src/assets/microfono.png'  
                nombreCategoria="Micrófonos"
            />
            
            <Categoria 
                imagen='/src/assets/estudioGrabacion.png'
                nombreCategoria="Estudio y Grabación"
            />
            
            <Categoria 
                imagen='/src/assets/accesorios.png'
                nombreCategoria="Accesorios"
            />
            
            <Categoria 
                imagen='/src/assets/amplificador.png'
                nombreCategoria="Amplificadores"
            />
            
            <Categoria 
                imagen='/src/assets/pedalesEfecto.png'
                nombreCategoria="Pedales de Efecto"
            />

        </section>
    );
}

export default SeccionCategoria;