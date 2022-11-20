import React from "react";
import { Link } from "react-router-dom";

import Beneficiario from '../img/shogun icon.jpg';
import './index.css';

function Perfil() {
    return (
        <div className="body">
            <div className="container">
                <h1 style={{ marginBottom: "2rem" }}> Perfil </h1>
                <img className="avatar" src={Beneficiario} alt="Avatar" />

                <div className="about">
                    <h5>Sobre mim</h5>
                    <textarea placeholder="Olá, eu sou ..., sou estudante na escola... e atualmente estou precisando de uma doação de um ..., se você puder me ajudar, me deixaria muito feliz!" style={{ width: "35rem", textAlign: "center" }}></textarea>
                </div>
                <div>
                    <h4>Detalhes</h4>
                    <span className="negrito" style={{ color: " #b10a79" }}>Nome:</span>
                    <p>Raiden Ei</p>
                    <span className="negrito" style={{ color: " #b10a79" }}>Idade:</span>
                    <p>34 anos</p>
                    <span className="negrito" style={{ color: " #b10a79" }}>Localização:</span>
                    <p>Inazuma- Teyvat</p>
                    <Link>
                        <button type="button" class="btn button1" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo">Pedir uma Doação</button>
                    </Link>

                    <div className="icon">
                        <Link target="_blank" to=""><i class="bi bi-facebook p-2" style={{ color: "black", size: "50px", height: "75px", alignItems: "center", margin: "auto", textAlign: "center" }}></i></Link>
                        <Link target="_blank" to=""><i class="bi bi-twitter p-2" style={{ color: "black", size: "50px", height: "75px", alignItems: "center", margin: "auto", textAlign: "center" }}></i></Link>
                        <Link target="_blank" to=""><i class="bi bi-instagram p-2" style={{ color: "black", size: "50px", height: "75px", alignItems: "center", margin: "auto", textAlign: "center" }}></i></Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Perfil;