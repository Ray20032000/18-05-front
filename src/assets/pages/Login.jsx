import { Link } from "react-router-dom";
import "./../../global.css";
import styles from "./../styles/Login.module.css";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";

function Login() {

    return (
        <div>
            <Header />
            <form onSubmit={Login}>
                <h1>Logar</h1>

                <label>Email</label>
                <input name="email" placeholder="Digite seu email" type="email" />

                <label>Senha</label>
                <input name="senha" placeholder="Digite seu senha" type="password" />

                <button type="submit">Cadastrar</button>
                <Link to="/">Cancelar</Link>
                <Link to="/esqueci-senha">Esqueci minha senha</Link>
            </form>

            <Footer />
        </div>);
}
export default Login;