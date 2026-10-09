import { useNavigate } from 'react-router-dom'
import  NavBar  from '../organisms/Navbar'
import  Footer  from '../organisms/Footer'


export function PlantillaPublica(props) {
  // useNavigate entrega la función navigate: navigate('/catalogo') cambia de página.
  const navigate = useNavigate()

  return (
    <div className="d-flex flex-column min-vh-100">
      <NavBar
        onNavegar={navigate}
        onBuscar={(texto) => navigate(`/buscar/${encodeURIComponent(texto)}`)}
      />

      <main className="contenido flex-grow-1">
        {props.children}
      </main>
      <Footer onNavegar={navigate} />
    </div>
  )
}