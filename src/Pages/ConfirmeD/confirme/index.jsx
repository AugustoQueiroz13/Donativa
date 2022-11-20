import React from "react";

import './index.css';

function Confirme() {
    return (
        <div id="main">
            <div className="inne">
                <h1>Confirmação de Doação</h1>
                <span className="image-main"></span>
                <p style={{textAlign: "center", justifyContent:"center"}}>Agradecemos por sua doação! <br/> Sua escolha contribuirá para a melhoria dos estudos de alguem que realmente necessita de ajuda.</p>
                <p style={{textAlign: "center", justifyContent:"center", color:"#b10a79"}}>Clique no botão abaixo para confirmar sua doação.</p>
                <div style={{alignItems:"center", marginLeft:"35%"}} className="btn btn-top btn-dark">
                <a type="button" style={{color: "#fff", justifyContent:"center", width:"13rem", height:"15px"}} href="/home">CONFIRMAR DOAÇÃO</a>
                </div>
            </div>
        </div>
    );
}

export default Confirme;