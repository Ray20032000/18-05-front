import { Link } from "react-router-dom";
import "./../../global.css";
import styles from "./../styles/Cadastro.module.css";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";


function Cadastro() {

    return (
        <div>
            <Header />
            <div className={styles.container}>
                <form onSubmit={Cadastro}>
                    <h1>Cadastrar-se</h1>

                    <label>Nome</label>
                    <input name="email" placeholder="Digite seu nome" type="text" />

                    <label>Telefone</label>
                    <input name="telefone" placeholder="Digite seu telefone" type="tel" />

                    <label>Email</label>
                    <input name="email" placeholder="Digite seu email" type="email" />

                    <label>Senha</label>
                    <input name="senha" placeholder="Digite seu senha" type="password" />

                    <label>Ícone de Perfil</label>
                    <input name="icone" placeholder="Carregar imagem" type="file" />

                    <button type="submit">Cadastrar</button>
                    <Link to="/">Cancelar</Link>
                    <Link to="/esqueci-senha">Esqueci minha senha</Link>
                </form>

                <Footer />
            </div>

        </div>);
}
export default Cadastro;