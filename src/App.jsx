import { BrowserRouter, Routes, Route } from "react-router-dom";
import Inicio from "./pages/Inicio";
import Login from "./pages/Login";
import Catalogo from "./pages/Catalogo";





function App() {
    return (
    <BrowserRouter>
      <Routes>
        <Route path="/Inicio" element={<Inicio />} />
        <Route path="/login" element={<Login />} />
        <Route path="/Catalogo" element={<Catalogo />} />
        
      </Routes>
    </BrowserRouter>
    );

}

export default App;