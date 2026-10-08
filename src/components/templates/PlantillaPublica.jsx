import { useNavigate } from 'react-router-dom'
import { Navbar } from '../../organisms/Navbar/Navbar'
import { Footer } from '../../organisms/Footer/Footer'


export function PlantillaPublica(props) {
  // useNavigate entrega la función navigate: navigate('/catalogo') cambia de página.
  const navigate = useNavigate()

  return (
    <>
      <Navbar
        categorias={categorias}
        onNavegar={navigate}
        onBuscar={(texto) => navigate(`/buscar/${encodeURIComponent(texto)}`)}
      />
      <main className="contenido">
        {props.children}
      </main>
      <Footer onNavegar={navigate} />
    </>
  )
}