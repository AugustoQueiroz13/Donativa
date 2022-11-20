import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";

import './index.css';

function Login() {
    
    const [mover, setMover] = useState(false);
    const handleClick = () => setMover(false);

    return (
        <main>
            <section id="login">
                <div className="login-container" id="login-container">
                    <div className="form-container h-100">
                        <form className="form form-login">
                            <h3 className="form-title">Login Beneficiado</h3>
                            <div className="form-input-container">
                                <input type="email" className="form-input" placeholder="Email" />
                                <input type="password" className="form-input" placeholder="Password" />
                            </div>
                            <div type="submit" className="form-button"><a type="button" href="/PerfilBeneficiario" style={{width:"3rem"}}>Logar</a></div>
                            <Link to="#" className="form-link" id="senhabeneficiado">Esqueceu a senha?</Link><br/>
                            <div className="form-social">
                                <a target="_blank" to="#" className="social-icon"><i className="bi bi-youtube p-2"></i></a>
                                <a target="_blank" to="#" className="social-icon"><i className="bi bi-facebook p-2"></i></a>
                                <a target="_blank" to="#" className="social-icon"><i className="bi bi-twitter p-2"></i></a>
                                <a target="_blank" to="#" className="social-icon"><i className="bi bi-instagram p-2"></i></a>
                            </div><br/>
                            <p className="text-center pe-5 ps-5">Está precisando de algo do nosso projeto?<Link
                                to="/CadastroBeneficiario" className="form-link text-center">faça seu cadastro aqui.</Link></p>
                            <p className="mobile-text">Seja um doador. <a to="#" id="open-login-mobile" mover={mover} onClick={handleClick}>Clique aqui!</a></p>
                        </form>
                        <form className="form form-cadastro">
                            <h3 className="form-title">Login Doador</h3>
                            <div className="form-input-container">
                                <input type="email" className="form-input" placeholder="Email" />
                                <input type="password" className="form-input" placeholder="Password" />
                            </div>
                            <button type="submit" className="form-button"><Link type="button" to="/PerfilDoador">Logar</Link></button>
                            <Link target="_blank" to="" className="form-link" id="senhadoador">Esqueceu senha?</Link><br/>
                            <div className="form-social">
                                <a target="_blank" to="#" className="social-icon"><i className="bi bi-youtube p-2"></i></a>
                                <a target="_blank" to="#" className="social-icon"><i className="bi bi-facebook p-2"></i></a>
                                <a target="_blank" to="#" className="social-icon"><i className="bi bi-twitter p-2"></i></a>
                                <a target="_blank" to="#" className="social-icon"><i className="bi bi-instagram p-2"></i></a>
                            </div><br/>
                            <p className="text-center pe-5 ps-5">Quer doar e não tem login?<Link to="/CadastroDoador" className="form-link text-center">faça seu cadastro aqui.</Link></p>
                            <p className="mobile-text">Seja nosso Beneficiado.<a to="#" id="open-cadastro-mobile" mover={mover} onClick={handleClick}>Clique aqui</a></p>
                        </form>
                    </div>
                    <div className="overlay-container">
                        <div className="overlay">
                            <div className="overlay">
                                <h2 className="form-title form-title-ligth">Seja um Beneficiado!</h2>
                                <p className="form-text form-text-ligth ">Cadastre-se e receba nossos as doações no conforto da sua casa!.</p>
                                <button className="form-button form-button-light" id="beneficiado" mover={mover} onClick={handleClick}>login Beneficiado <i className="bi bi-hand-index-thumb"></i></button>
                            </div>
                            <div className="overlay">
                                <h2 className="form-title form-title-ligth">Seja um doador!</h2>
                                <p className="form-text form-text-ligth ">Cadastre-se e torne-se um doador e mude a vida de milhares de crianças.</p>
                                <button type="button" className="form-button form-button-light" id="doador" mover={mover} onClick={handleClick} >login Doador <i className="bi bi-hand-index-thumb"></i></button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}

export default Login;