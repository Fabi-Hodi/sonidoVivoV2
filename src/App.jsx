import { BrowserRouter, Routes, Route } from "react-router-dom";
import Inicio from "./pages/Inicio";
import Login from "./pages/Login";
import Catalogo from "./pages/Catalogo";
import CrearCuenta from "./pages/CrearCuenta";
import Carrito from "./pages/Carrito";
import Contactanos from "./pages/Contactanos";
import Detalles from './pages/Detalles';
import Pago from './pages/Pago';
import Resultado from './pages/Resultado';
import AgregarProducto from "./pages/AgregarProducto";
import EditarProducto from './pages/EditarProducto';
import AdminUsuarios from './pages/AdminUsuarios';

import AccesoDenegado from "./pages/AccesoDenegado";
import NoEncontrado from "./pages/noEncontrado";
import RutaProtegida from "./rutas/RutaProtegida";
import VerificarSesion from "./rutas/VerificarSesion";
import { CartProvider } from "./context/CartContext";





function App() {
    return (
    <CartProvider>
      <BrowserRouter>
        <VerificarSesion />
        <Routes>
          {/* rutas publicas */}
          <Route path="/" element={<Inicio />} />
          <Route path="/login" element={<Login />} />
          <Route path="/crearCuenta" element={<CrearCuenta />} />
          <Route path="/catalogo" element={<Catalogo />} />
          <Route path="/carrito" element={<Carrito />} />
          <Route path="/contactanos" element={<Contactanos />} />
          <Route path="/detalles/:codigo" element={<Detalles />} />
          <Route path="/noencontrado" element={<NoEncontrado />} />
          <Route path="/acceso-denegado" element={<AccesoDenegado />} />

          {/* rutas que exigen sesion (cualquier rol) */}
          <Route path="/pago" element={<RutaProtegida><Pago /></RutaProtegida>} />
          <Route path="/resultado" element={<RutaProtegida><Resultado /></RutaProtegida>} />

          {/* rutas solo para Administrador */}
          <Route path="/agregar-producto" element={<RutaProtegida roles={["Administrador"]}><AgregarProducto /></RutaProtegida>} />
          <Route path="/editar-producto/:codigo" element={<RutaProtegida roles={["Administrador"]}><EditarProducto /></RutaProtegida>} />
          <Route path="/admin/usuarios" element={<RutaProtegida roles={["Administrador"]}><AdminUsuarios /></RutaProtegida>} />

          {/* cualquier otra ruta */}
          <Route path="*" element={<NoEncontrado />} />
        </Routes>
      </BrowserRouter>
    </CartProvider>
    );

}

export default App;