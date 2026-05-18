import { Link } from "react-router-dom";
import React, { useState } from "react";
import "./../../global.css";
import styles from "./../styles/Login.module.css";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";

function Login() {

    return (
        <div>
            <Header />
            <div className={styles.countainer}>
                <form onSubmit={Login}>
                    <h1>Logar</h1>

                    <label>Email</label>
                    <input name="email" placeholder="Digite seu email" type="email" />

                    <label>Senha</label>
                    <input name="senha" placeholder="Digite seu senha" type="password" />



                    <div className={styles.botao}>
                        <Link to="/">
                            <button className={styles.cancelar} type="reset">Cancelar</button>
                        </Link>
                        <button type="submit">Entrar</button>
                    </div>


                    <Link className={styles.esqueci} to="/esqueci-senha">Esqueci minha senha</Link>
                </form>


            </div>
            <Footer />
        </div>);
}
export default Login;