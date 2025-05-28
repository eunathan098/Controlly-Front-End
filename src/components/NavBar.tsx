import { useState } from "react";
import "./NavBar.css";

import LogoControlly from "../assets/controlly-logotipo.jpeg";
import LogoMenu from "../assets/menu.png";

function NavBar() {
    const [menuAberto, setMenuAberto] = useState(false);

    function toggleMenu() {
        setMenuAberto(!menuAberto);
    }

    return (
        <>
            <div className="container-header-logo-left">
                <img src={LogoControlly} alt="Logo" height="40px" />
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
                    <li>DashBoard</li>
                    <li>Cadastros</li>
                    <li>Estoque</li>
                    <li>Resumos</li>
                </ul>
            </div>
        </>
    );
}

export default NavBar;
