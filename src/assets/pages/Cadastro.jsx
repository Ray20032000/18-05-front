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

                    <div className={styles.botao}>
                        <Link to="/">
                            <button className={styles.cancelar} type="reset">Cancelar</button>
                        </Link>
                        <button type="submit">Cadastrar</button>
                    </div>

                </form>
            </div>
            <Footer />
        </div>);
}
export default Cadastro;