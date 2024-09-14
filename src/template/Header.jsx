import React from "react";
import '../custom.css'; // Certifique-se de que o caminho para o CSS está correto

function Header() {
    return (
        <nav className="navbar default-layout-navbar col-lg-12 col-12 p-0 d-flex flex-row fixed-top">
            <div className="text-center navbar-brand-wrapper d-flex align-items-center justify-content-center">
                <a className="navbar-brand brand-logo" href="/"><img src="/img/logo.svg" alt="logo" /></a>
                <a className="navbar-brand brand-logo-mini" href="/"><img src="/img/logo-mini.svg" alt="logo-mini" /></a>
            </div>
            <div className="navbar-menu-wrapper d-flex align-items-center">
                <button className="navbar-toggler" type="button" data-toggle="minimize">
                    <span className="mdi mdi-menu"></span>
                </button>
                <ul className="navbar-nav navbar-nav-left">
                    <li className="nav-item">
                        <a className="nav-link" href="/">Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/sobremim">Sobre Mim</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/contato">Contato</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Header;
