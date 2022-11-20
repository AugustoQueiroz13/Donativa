import React from "react";
import { Link } from "react-router-dom";

import Capa1 from './imgTopo/img-capa-1.jpg';

import './index.css';

function Topo() {
    return (
        <main id="main" style={{display:"flex", alignItems:"center"}}>
            <section id="inicio" className="row mb-5 mt-3 p-5" style={{width:"100%"}}>
                <div className="row m-0 p-0">
                    <div className="col-md-5" style={{justifyContent:"center", alignItems:"center", flex:"column",textAlign:"center", marginTop:"8rem", marginBottom:"0px"}}>
                        <h2 id="mensagem" style={{height:"auto", textDecoration:"none",color:"#b10a79"}}>AJUDAR A EDUCAÇÃO NO BRASIL </h2> <h2>FAZ BEM A TODOS</h2>
                        <p id="submensagem" style={{color:"#2b7fce", textAlign:"center", textDecoration:"none", fontSize:"17px", marginBottom:"0px"}}> Seja um colaborador e ajude a diminuir a desigualdade no acesso a recursos educacionais no mundo!</p>
                        <div className="container1 px-4 d-flex justify-content-around">
                            <div className="row gx-5 ">
                                <div className="col-6 p-2 btn btn-top btn-dark" style={{width:"10rem", display:"flex", alignItems:"center", justifyContent:"center", marginBottom:"0px", margin:"10px"}} target="_blank"><Link type="button" to="/Doar" style={{color:"#fff"}}>Clique para doar</Link></div>
                                <div className="col-6 p-2  btn btn-top btn-dark" style={{width:"10rem", display:"flex", alignItems:"center", justifyContent:"center",  marginBottom:"0px", margin:"10px"}} target="_blank"><Link type="button" to="" style={{color:"#fff"}}>Receba doações</Link></div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-7" style={{ flex:"column", justifyContent:"center", alignItems:"center", marginBottom:"0px"}}>
                        <div className="container1">
                            <img className="img-fluid" src={Capa1}alt="Imagem de capa" />
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
export default Topo;