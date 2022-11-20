import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Login from "./Components/Login";

import Contato from "./Pages/Contato/contato";
import CadBeneficiario from "./Pages/CadBeneficiario/FormB";
import CadDoador from "./Pages/CadDoador/FormDoador";
import Home from "./Pages/Home";
import Doar from "./Pages/Doacao/doar";
import PerfilDoador from "./Pages/PerfilD";
import Perfil from "./Pages/Perfil";
import Confirmar from "./Pages/ConfirmeD";
import Modal from "./Components/Modal";


function Rotas() {
    return(
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/home" element={<Home />} />
                <Route path="/contato" element={<Contato />} />
                <Route path="/CadastroBeneficiario" element={<CadBeneficiario />} />
                <Route path="/CadastroDoador" element={<CadDoador />} />
                <Route path="/PerfilBeneficiario" element={<Perfil />} />
                <Route path="/PerfilDoador" element={<PerfilDoador />} />   
                <Route path="/Login" element={<Login />} />   
                <Route path="/Doar" element={<Doar />} />    
                <Route path="/Confirme" element={<Confirmar />} />   
                <Route path="/pedir" element={<Modal />} />
            </Routes>
            <Footer />
    </Router>
    );
}

export default Rotas;