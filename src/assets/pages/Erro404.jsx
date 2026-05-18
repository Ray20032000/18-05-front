import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import {Link} from "react-router-dom";
import styles from "../styles/Login.module.css";

function Erro404() {

    return (
        <div>
            <Header />
            <div className={styles.countainer}>
                <h1>Ops!</h1>
                <h2>Página não encontrada</h2>
                <h3>Erro</h3>
                <img src="/erro.png" alt="Logo de erro" />
                <Link to="/">
                    <button className={styles.volta} type="reset">Voltar pra Home</button>
                </Link>
            </div>
            <Footer />
        </div>);
}
export default Erro404;