import { useEffect, useState } from "react";
import Header from "../../components/Header";
import "./Estoque.css";
interface ItemEstoque {
  id: number;
  nome: string;
  quantidade: number;
  preco: number;
  grupo: string;
}

export default function Estoque() {
  const [itens, setItens] = useState<ItemEstoque[]>([]);

  useEffect(() => {
    const dados: ItemEstoque[] = [
      { id: 1, nome: "Produto A", quantidade: 10, preco: 15.5, grupo: "Bebidas" },
      { id: 2, nome: "Produto B", quantidade: 5, preco: 8.9, grupo: "Snacks" },
      { id: 3, nome: "Produto C", quantidade: 20, preco: 12.0, grupo: "Limpeza" },
    ];
    setItens(dados);
  }, []);

  return (
    <>
      <Header />

      <div className="container-content-estoque">
        <h1 className="estoque-title">Tela de Estoque</h1>

        <div className="container-estoque-itens">
          <div className="container-filters">
            {/* Filtro por Produto */}
            <div className="container-name-select">
              <p className="title-name-filter">Produto:</p>
              <select className="select-filter">
                <option value="">Todos</option>
                <option value="recentes">Recentes</option>
                <option value="antigos">Antigos</option>
              </select>
            </div>

            {/* Filtro por Grupo */}
            <div className="container-name-select">
              <p className="title-name-filter">Grupo:</p>
              <select className="select-filter">
                <option value="">Todos</option>
                <option value="bebidas">Bebidas</option>
                <option value="limpeza">Doces</option>
                <option value="snacks">Salgados</option>
              </select>
            </div>

            {/* Filtro por Mês */}
            <div className="container-name-select">
              <p className="title-name-filter">Mês:</p>
              <select className="select-filter">
                <option value="">Todos</option>
                {[
                  "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho",
                  "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"
                ].map((mes, i) => (
                  <option key={i} value={mes.toLowerCase()}>{mes}</option>
                ))}
              </select>
            </div>

            {/* Filtro por Entrada/Saída */}
            <div className="container-name-select">
              <p className="title-name-filter">Entrada/Saída:</p>
              <select className="select-filter">
                <option value="entrada">Entrada</option>
                <option value="saida">Saída</option>
              </select>
            </div>
          </div>

          {/* Tabela de Itens */}
          <table className="tabela-estoque">
            <thead className="table-name-colunas">
              <tr>
                <th>Nome</th>
                <th>Quantidade</th>
                <th>Preço (R$)</th>
                <th>Grupo</th>
              </tr>
            </thead>
            <tbody>
              {itens.map((item) => (
                <tr key={item.id}>
                  <td>{item.nome}</td>
                  <td>{item.quantidade}</td>
                  <td>{item.preco.toFixed(2)}</td>
                  <td>{item.grupo}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
