import React from "react";
import { Link } from "react-router-dom";

import Doador from "./img/yae.png";

import './index.css';

function PerfilD() {
    return (
        <div className="container">
            <h1 style={{marginBottom: "2rem"}}> Perfil </h1>
            <img className="avatar" src={Doador} alt="Avatar" />

            <div className="about">
                <h5>Sobre mim</h5>
                <textarea placeholder="Olá, eu sou representante da empresa ..., estou aqui para realizar doações a pessoas que estão precisando!" style={{width:"35rem", textAlign:"center"}}></textarea>
            </div>
            <div>
                <h4>Detalhes</h4>
                <span className="negrito" style={{color:" #b10a79"}}>Nome:</span>
                <p>Raiden Ei</p>
                <span className="negrito" style={{color:" #b10a79"}}>Idade:</span>
                <p>34 anos</p>
                <span className="negrito" style={{color:" #b10a79"}}>Localização:</span>
                <p>Inazuma- Teyvat</p>
                <span className="negrito">Empresa</span>
                <p>Livraria</p>
                <Link>
                <button className="button1" to="">Fazer uma Doação</button>
                </Link>

                <div className="icon">
                    <a target="_blank" href=""><i class="bi bi-facebook p-2" style={{color: "black", size: "50px", height: "75px", alignItems:"center",margin: "auto", textAlign: "center"}}></i></a>
                    <a target="_blank" href=""><i class="bi bi-twitter p-2" style={{color: "black", size: "50px", height: "75px", alignItems:"center",margin: "auto", textAlign: "center"}}></i></a>
                    <a target="_blank"href=""><i class="bi bi-instagram p-2" style={{color: "black", size: "50px", height: "75px", alignItems:"center",margin: "auto", textAlign: "center"}}></i></a>
                </div>
            </div>
        </div>
    );
}

export default PerfilD;