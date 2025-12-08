// Importação dos estilos do componente 
import "./Header.css"
import NavBar from "./NavBar";

function Header(){
    return(
        <>
            <div className="container-header">
                <NavBar></NavBar>
            </div>
        </>
    )
}
export default Header;