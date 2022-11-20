import React from "react";
import { Link } from "react-router-dom";

import './index.css';

function ComoPedir() {
    return (
        <section className="container-fluid mt-5 mb-3 p-3" id="como-receber" style={{backgroundColor:"#f1f1f1", borderRadius:"10px", width:"100%"}}>
            <h3>Como receber uma doação</h3>
            <p className="text-center">As doações podem ser requisitadas por pessoas físicas, ou representantes legais de
                escolas e ongs que trabalham com educação.</p>
            <p className="text-center">Saber receber e fazer bom uso daquilo que se recebe também é uma dádiva, então peça
                apenas o que precisa e vamos tentar achar um doador de bom coração para te ajudar!</p>
            <div className="row w-100 p-3">
                <div className="col col-md-5">
                    <div className="container-fluid">
                        <h5>Segurança em primeiro lugar</h5>
                        <p>Ao se cadastrar entrará automaticamente no modo de beneficiado com ranking zero e Link partir daí
                            poderá subir seu ranking na plataforma cumprindo tarefas como o correto preenchimento do
                            perfil, inclusão de links de redes sociais, etc.</p>
                        <p>Quanto melhor for o seu ranking, mais chances terá de receber o que foi pedido.</p>
                        <p>Cada perfil terá direito Link 01 pedido inicial e logo que receber e der o devido feedback ao
                            doador e Link plataforma poderá realizar nova requisição.</p>
                        <p>Os pedidos são custeados integralmente pelos doadores, desde que se enquadrem em uma das
                            nossas categorias. Descreva bem o que você precisa, siga as etapas:</p>
                    </div>
                </div>
                <div className="col col-md-7">
                    <ol className="list-group list-group-numbered">
                        <li className="list-group-item d-flex justify-content-between align-items-start">
                            <div className="ms-2 me-auto">
                                <div className="fw-bold">Realizando o seu cadastro como beneficiado</div>
                                <span> Clicando </span><Link target="_blank" to="/CadastroBeneficiario"
                                    className="link-primary">nesse link</Link> <span> você terá Link plataforma para preencher com
                                        suas informações pessoais, perfis sociais e claro o pedir o que precisa dentro das
                                        categorias existentes</span>
                            </div>
                        </li>
                        <li className="list-group-item d-flex justify-content-between align-items-start">
                            <div className="ms-2 me-auto">
                                <div className="fw-bold">Subindo de Ranking</div>
                                <p> Para que seu pedido seja atendido é necessário ser um usuário bem ranqueado, isso é necessário para evitar pessoas com má intenção, Link segurança dos doadores e beneficiados é nossa prioridade</p>
                            </div>
                        </li>
                        <li className="list-group-item d-flex justify-content-between align-items-start">
                            <div className="ms-2 me-auto">
                                <div className="fw-bold">Recebendo o pedido</div>
                                <span>Caso seja selecionado por um dos doadores, ele receberá suas informações de endereço ou enviará seu pedido digital pela nossa (link) pela própria
                                    plataforma</span>
                                <p className="text-danger">Quando receber avalie o doador, Link plataforma e o pedido, receba pontos de ranking e caso precise realize um novo pedido na plataforma.</p>
                            </div>
                        </li>
                    </ol>
                </div>
            </div>
        </section>
    );
}

export default ComoPedir;