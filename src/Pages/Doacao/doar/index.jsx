import React from "react";
import { Link } from "react-router-dom";

import pic1 from './img/pic01.jpg';
import pic2 from './img/pic02.jpg';
import pic3 from './img/pic03.jpg';
import pic4 from './img/pic04.jpg';
import pic5 from './img/pic05.jpg';
import pic6 from './img/pic06.jpg';
import pic7 from './img/pic07.jpg';
import pic8 from './img/pic08.jpg';
import pic9 from './img/pic09.jpg';

import './index.css';

function Doar() {
    return (
        <div id="main" style={{marginTop:"6rem"}}>
            <div class="inner">
                <header>
                    <h1 style={{textAlign:"center"}}>Encontre abaixo os itens que você pode doar ao projeto.</h1><br />
                    <p style={{textAlign: "center"}}>Escolha entre os itens listados abaixo o que se enquadra a sua disponibilidade para doar e ajudar outras pessoas. <br />Sua doação poderá ser algum equipamento, periféricos, móveis, livros e outros itens!</p>
                </header>
                <section class="tiles">
                    <article class="style1">
                        <span class="image">
                            <img src={pic1} alt="" />
                        </span>
                        <Link to="/Confirme">
                            <h2>Cadeiras</h2>
                            <div class="content">
                                <p>Clique aqui para doar</p>
                            </div>
                        </Link>
                    </article>
                    <article class="style2">
                        <span class="image">
                            <img src={pic2} alt="" />
                        </span>
                        <Link to="/Confirme">
                            <h2>Computador</h2>
                            <div class="content">
                                <p>Clique aqui para doar</p>
                            </div>
                        </Link>
                    </article>
                    <article class="style3">
                        <span class="image">
                            <img src={pic3} alt="" />
                        </span>
                        <Link to="/Confirme">
                            <h2>Monitores</h2>
                            <div class="content">
                                <p>Clique aqui para doar</p>
                            </div>
                        </Link>
                    </article>
                    <article class="style4">
                        <span class="image">
                            <img src={pic4} alt="" />
                        </span>
                        <Link to="/Confirme">
                            <h2>Notebooks</h2>
                            <div class="content">
                                <p>Clique aqui para doar</p>
                            </div>
                        </Link>
                    </article>
                    <article class="style5">
                        <span class="image">
                            <img src={pic5} alt="" />
                        </span>
                        <Link to="/Confirme">
                            <h2>Móveis</h2>
                            <div class="content">
                                <p>Clique aqui para doar</p>
                            </div>
                        </Link>
                    </article>
                    <article class="style6">
                        <span class="image">
                            <img src={pic6} alt="" />
                        </span>
                        <Link to="/Confirme">
                            <h2>Periféricos</h2>
                            <div class="content">
                                <p>Clique aqui para doar</p>
                            </div>
                        </Link>
                    </article>
                    <article class="style2">
                        <span class="image">
                            <img src={pic7} alt="" />
                        </span>
                        <Link to="/Confirme">
                            <h2>Livros</h2>
                            <div class="content">
                                <p>Clique aqui para doar</p>
                            </div>
                        </Link>
                    </article>
                    <article class="style3">
                        <span class="image">
                            <img src={pic8} alt="" />
                        </span>
                        <Link to="/Confirme">
                            <h2>Material Escolar</h2>
                            <div class="content">
                                <p>Clique aqui para doar</p>
                            </div>
                        </Link>
                    </article>
                    <article class="style1">
                        <span class="image">
                            <img src={pic9} alt="" />
                        </span>
                        <Link to="/Confirme">
                            <h2>Bolsas de Estudos</h2>
                            <div class="content">
                                <p>Clique aqui para doar</p>
                            </div>
                        </Link>
                    </article>

                </section>
            </div>
        </div>
    );
}

export default Doar;