import React from "react";
import { Link } from "react-router-dom";

import './index.css';

function ComoDoar() {
    return (
        <section className="container-fluid mt-5 mb-3 p-3" id="como-doar" style={{backgroundColor:"#f1f1f1", borderRadius:"10px", width:"100%"}}>
            <h3>Como fazer uma doação</h3>
            <figure className="text-center">
                <blockquote className="blockquote">
                    <p>"Onde intervêm o favor e as doações, abatem-se os obstáculos e desfazem-se as dificuldades"</p>
                </blockquote>
                <figcaption className="blockquote-footer">Miguel de Cervantes <cite title="Source Title"> Livro: Os trabalhos de Persiles e Sigismunda - 1617</cite></figcaption>
            </figure>
            <div className="row w-100 p-3">
                <div className="col col-md-5">
                    <div className="container-fluid">
                        <h5> Segurança em primeiro lugar </h5>
                        <p>Ao se cadastrar entrará automaticamente no modo de doador anônimo, caso queira é possível
                            mudar isso nas configurações do usuário.</p>
                        <p>Além disso nosso algoritmo seleciona e ranqueia os pedidos, evitando pedidos irreais,
                            garantindo assim Link segurança e impacto efetivo da doação.</p>
                        <p>Doar é um ato de amor ao próximo. Ter Link consciência e Link sensação de que está ajudando, da
                            forma que seja, é sempre muito bom. Por isso aqui no <strong> DONATIVA </strong>você pode
                            ajudar de diversas formas Link levar educação e conhecimento Link quem precisa, siga as etapas:
                        </p>
                    </div>
                </div>
                <div className="col col-md-7">
                    <ol className="list-group list-group-numbered">
                        <li className="list-group-item d-flex justify-content-between align-items-start">
                            <div className="ms-2 me-auto">
                                <div className="fw-bold">Realizando o seu cadastro como doador</div>
                                <span>Clicando </span><Link target="_blank" to="/CadastroDoador" className="link-primary">nesse
                                    link</Link> <span> você terá acesso aos perfis e pedidos mais bem ranqueados...</span>
                            </div>
                        </li>
                        <li className="list-group-item d-flex justify-content-between align-items-start">
                            <div className="ms-2 me-auto">
                                <div className="fw-bold">Escolhendo os pedidos e vendo os perfis</div>
                                <p>Logado na plataforma, você terá acesso aos perfis dos beneficiados e também aos
                                    pedidos e requisições deles. Outra forma de escolher os pedidos e buscando por
                                    categorias ou região.</p>
                            </div>
                        </li>
                        <li className="list-group-item d-flex justify-content-between align-items-start">
                            <div className="ms-2 me-auto">
                                <div className="fw-bold">Realize Link doação</div>
                                <span>Após escolher o beneficiado, providencie o envio do pedido físico ou digital ao
                                    endereço informado.</span>
                                <p className="text-danger">Sugerimos o uso dos Correios para coleta/entrega dos pedidos
                                    físicos e nosso sistema interno para o envido de links ou logins para o
                                    beneficiado.</p>
                            </div>
                        </li>
                    </ol>
                </div>
            </div>
        </section>
    );
}

export default ComoDoar;