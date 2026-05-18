import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./assets/pages/Home.jsx";
import Login from "./assets/pages/Login.jsx";
import Cadastro from "./assets/pages/Cadastro.jsx";
import Erro404 from "./assets/pages/Erro404.jsx";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Login" element={<Login />} />
                <Route path="/Cadastro" element={<Cadastro />} />
                <Route path="/*" element={<Erro404/>} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;