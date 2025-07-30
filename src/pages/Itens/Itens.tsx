import Header from "../../components/Header";
import "./Itens.css";

// Importação de icones
import botaoAdicionar from "../../assets/icons/adicionar.png";

// Adição de novo item
function addItens(){
    alert("esta funçãoo adicionará um novo Item");
}


function Itens(){
    return(
        <>
            <Header></Header>
                <div className="container-content-itens">
                    <div className="container-header-itens">
                        <img src={botaoAdicionar} alt="" id="icon-header-itens"
                        onClick={addItens}/>
                    </div>

                    <div className="container-form-itens">
                        <div className="form-itens">

                            <h1 className="header-form-itens-title"> Cadastro de produto </h1>
                        <form action="">
                            <label>
                                <div className="container-name-item">
                                    <span> Nome: </span>
                                </div>
                                <input type="text" placeholder="Nome do produto" />
                            </label>

                            <label>
                                <div className="container-name-item">
                                    <span> Quantidade: </span>
                                </div>
                                <input type="number" placeholder="Quantidade" />
                            </label>

                            <label>
                                <div className="container-name-item">
                                    <span> Preço: </span>
                                </div>
                                <input type="number" placeholder="Preço" />
                            </label>

                            <label>
                                <div className="container-name-item">
                                    <span> Grupo: </span>
                                </div>
                                <input type="text" placeholder="Grupo do produto" />
                            </label>
                        </form>
                        </div>
                    </div>
                    <div className="container-itens">
                        <p> Vazio </p>
                        {/* <table className="tabela-itens">
                            <thead className="table-name-colunas-itens">
                                <tr>
                                    <th>Nome</th>
                                    <th>Quantidade</th>
                                    <th>Preço (R$)</th>
                                    <th>Grupo</th>
                                </tr>
                            </thead>    
                        </table> */}
                    </div>
                </div>
        </>
    )
}
export default Itens