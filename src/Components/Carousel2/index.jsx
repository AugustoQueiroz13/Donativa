import React from "react";
import { Link } from "react-router-dom";

import Biblioteca from './img/biblioteca-card.jpg';
import Leitura from './img/leitura-card.jpg';
import Notebook from './img/notebook-card.jpg';
import Influencer from './img/influenciadora-card.jpg';
import pcescola from './img/pcs-escolas-card.jpg';
import Estudante from './img/estudante-card.jpg';

import './index.css';

function Carousel2() {
    return(
        <section id="historias" className=" mt-1 p-2 card-text">
            <div className="container1 pb-2 pt-2">
                <h3>Confira nosso blog - Histórias impactadas</h3>
                <div id="carouselHistorias" className="carousel carousel-dark slide" data-bs-ride="carousel">
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#carouselHistorias" data-bs-slide-to="0" className="active"
                            aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselHistorias" data-bs-slide-to="1"
                            aria-label="Slide 2"></button>
                    </div>
                    <div className="carousel-inner">
                        <div className="carousel-item active" data-bs-interval="10000">
                            <div className="row row-cols-1 row-cols-md-3 g-4">
                                <div className="col">
                                    <div className="card  card-text p-2">
                                        <figure><img src={Biblioteca} alt="Biblioteca" id="img-card"/>
                                        </figure>
                                        <div className="texto-card">
                                            <h5>Montando uma biblioteca</h5>
                                            <p>Como Link ONG Recode Pro montou com ajuda da <strong>DONATIVA</strong> uma
                                                biblioteca com cerca de 1000 exemplares!</p>
                                        </div>
                                        <div><Link to="#" type="button" className="btn btn-dark">Saiba mais</Link></div>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="card  card-text p-2">
                                        <figure><img src={Leitura} alt="Leitura" id="img-card"/></figure>
                                        <div className="texto-card">
                                            <h5>Incentivando Link leitura</h5>
                                            <p>Link comunidade em São Paulo que disseminou o hábito da leitura através dos
                                                livros doados pelo projeto <strong>DONATIVA.</strong></p>
                                        </div>
                                        <div><Link to="#" type="button" className="btn btn-dark">Saiba mais</Link></div>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="card  card-text p-2">
                                        <figure><img src={Notebook} alt="Notebook" id="img-card"/></figure>
                                        <div className="texto-card">
                                            <h5>Educar para vida</h5>
                                            <p>Link estudante que resolveu problemas na sua comunidade desenvolvendo um app
                                                simples e venceu um disputado concurso de inovação.</p>
                                        </div>
                                        <div><Link to="#" type="button" className="btn btn-dark">Saiba mais</Link></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item" data-bs-interval="10000">
                            <div className="row row-cols-1 row-cols-md-3 g-4">
                                <div className="col justify-content-center">
                                    <div className="card  card-text p-2">
                                        <figure><img src={pcescola} alt="desktops" id="img-card"/>
                                        </figure>
                                        <div className="texto-card">
                                            <h5>Sala de multimeios ampliada</h5>
                                            <p>Link Escola Municipal Lar do Saber em Itajaí, SC, ampliou sua sala de
                                                computação com mais 3 desktops e 2 notebooks doados com ajuda do
                                                programa</p>
                                        </div>
                                        <div><Link to="#" type="button" className="btn btn-dark">Saiba mais</Link></div>
                                    </div>
                                </div>
                                <div className="col justify-content-center">
                                    <div className="card  card-text p-2">
                                        <figure><img src={Estudante} alt="Eduardo-Sales" id="img-card"/>
                                        </figure>
                                        <div className="texto-card">
                                            <h5> Passei em três universidades de ponta </h5>
                                            <p> Eduardo Sales foi aprovado em 3 universidades de renome nos EUA, ele
                                                conseguiu isso com ajuda das doações que conseguiu aqui.</p>
                                        </div>
                                        <div><Link to="#" type="button" className="btn btn-dark">Saiba mais</Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="col justify-content-center">
                                    <div className="card  card-text p-2">
                                        <figure><img src={Influencer} alt="Marina-Teixeira"
                                                id="img-card"/></figure>
                                        <div className="texto-card">
                                            <h5>Link influenciadora da educação</h5>
                                            <p> Marina Teixeira, nos ajudou muito quando divulgou pros seus mais de 500
                                                mil seguidores, nem ela poderia acreditou no impacto e retorno positivo
                                            </p>
                                        </div>
                                        <div><Link to="#" type="button" className="btn btn-dark">Saiba mais</Link></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselHistorias"
                            data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselHistorias"
                            data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
            </div>    
        </section>
    );
}

export default Carousel2;