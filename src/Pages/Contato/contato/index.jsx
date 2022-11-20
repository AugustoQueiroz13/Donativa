import React from "react";

import './index.css';

function Contato() {

    function eventHandler(){
        alert("Mensagem enviada, responderemos em breve!");
    }
    
    return(
        <main id="main">
        <section id="paginacontato">
            <div className="container" id="contato">
                <div className="content">
                    <div className="left-side d-flex">
                        <div className="address details">
                            <h3 className="topic"> <i className="bi bi-geo-alt"></i> Endereço</h3>
                            <div className="text-one">Nome da rua, numero123</div>
                            <div className="text-two">Bairro Cidade</div>
                        </div>
                        <div className="phone details">
                            <h3 className="topic"> <i className="bi bi-telephone"></i> Telefone</h3>
                            <div className="text-one">+00 00 1234 5678</div>
                            <div className="text-two">+00 00 1234 5678</div>
                        </div>
                        <div className="email details">
                            <h3 className="topic"><i className="bi bi-at"></i> Email</h3>
                            <div className="text-one">donativa@gmail.com</div>
                        </div>
                    </div>
                    <div className="right-side">
                        <div className="topic-text">Envie sua mensagem</div>
                        <p>Qualquer duvida ou sugestão nos envie uma mensagem!</p>
                        <form action="#">
                            <div className="input-box">
                                <input type="text" placeholder="Digite seu nome"/>
                            </div>
                            <div className="input-box">
                                <input type="text" placeholder="Digite seu email"/>
                            </div>
                            <div className="input-box message-box">
                                <textarea placeholder="Digite sua mensagem"></textarea>
                            </div>
                            <div>
                                <button type="submit" className="btn" onClick={eventHandler} id="btn-enviar" to="#">Enviar Mensagem</button>
                             </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    </main>
    );
}

export default Contato;