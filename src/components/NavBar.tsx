import { useState } from "react";
import "./NavBar.css";
import LogoControlly from "../assets/controlly-logotipo.jpeg";
import LogoMenu from "../assets/menu.png";
import { Link } from "react-router-dom";

function NavBar() {
    const [menuAberto, setMenuAberto] = useState(false);

    function toggleMenu() {
        setMenuAberto(!menuAberto);
    }

    return (
        <>
            <div className="container-header-logo-left">
                <img src={LogoControlly} alt="Logo" height="40px" id="logo-controlly"/>
            </div>

            <div className="container-header-menu-right">
                <img
                    src={LogoMenu}
                    alt="Abrir Menu"
                    id="logo-menu"
                    onClick={toggleMenu}
                />
            </div>

            {/* Menu lateral visível apenas quando menuAberto = true */}
            <div
                className={`container-header-right ${menuAberto ? "ativo" : ""}`}
            >
                <div className="header-container-menu-mobile">
                    <img
                        src={LogoMenu}
                        alt="Fechar Menu"
                        id="icon-menu-mobile"
                        onClick={toggleMenu}
                    />
                </div>

                <ul className="menu-opcoes">
                    <li >
                        <Link to="/dashboard" className="navbar-navigation">Dashboard</Link>
                    </li>
                    <li>
                        <Link to="/itens" className="navbar-navigation">Itens</Link>
                    </li>
                    <li>
                        <Link to="/estoque" className="navbar-navigation">Estoque</Link>
                    </li>
                    <li>
                        <Link to="/resumos" className="navbar-navigation">Resumos</Link>
                    </li>

                    <li>
                        <Link to="/login" className="navbar-navigation">Sair</Link>
                    </li>
                </ul>
            </div>
        </>
    );
}

export default NavBar;
