import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import {Link} from "react-router-dom";
import Home from "./Home.jsx";

function Erro404() {

    return (
        <div>
            <Header />
            <div>
                <h1>Ops!</h1>
                <h2>Página não encontrada</h2>
                <h3>Erro</h3>
                <img src="/erro.png" alt="Logo de erro" />
                <Link to={Home}>Voltar para Home</Link>
            </div>
            <Footer />
        </div>);
}
export default Erro404;