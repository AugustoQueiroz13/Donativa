import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../Header/img/logo-donativa.png';

import '../Header/index.css';

function Header() {
    return (
        <header>
            <nav id="header" className="navbar fixed-top navbar-expand-md" style={{ alignItems: "center", background: "#fff", width: "100%", margin: "0" }}>
                <div className="container-fluid">
                    <Link className="navbar-brand d-flex align-item-center" to="/"><img className="logo"
                        src={logo} alt="logo Donativa" style={{ position: "fixed", transition: "all ease-in-out 1s", padding: "10px 15px", height: "50px", zIndex: "9997", top: "0", left: "0" }} /></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbar-items"
                        aria-controls="navbar-items" aria-expanded="false" aria-label="Toggle navigation">
                        <i className="bi bi-list"></i>
                    </button>
                    <div className=" collapse navbar-collapse container-fluid navbar-expand-md justify-content-end navbar-nav nav-menu"
                        id="navbar-items">
                        <ul className="navbar-nav" id="ul-items">
                            <li className="nav-menu nav-item"><Link className="nav-item nav-link nav-menu active" aria-current="page"
                                to="/home"> Home</Link></li>
                            <li className="nav-menu nav-item"><Link className="nav-item nav-link" aria-current="page"
                                to="/Doar">Doar</Link></li>
                            <li className="nav-menu nav-item"><Link className="nav-item nav-link" aria-current="page"
                                to="/pedir">Receber</Link></li>
                            <li className="nav-menu nav-item"><Link className="nav-item nav-link" aria-current="page"
                                to="/contato">Contato</Link></li>
                            <li className="nav-menu nav-item"><Link className="nav-item nav-link" aria-current="page"
                                to="/Login">Login</Link></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
}
export default Header;