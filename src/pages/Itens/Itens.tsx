import { useState } from "react";
import Header from "../../components/Header";
import "./Itens.css";
import botaoAdicionar from "../../assets/icons/adicionar.png";

interface Product {
  name: string;
  description: string;
  grupo: string;
  quantity: number;
  price: number;
}

function Itens() {
  const [products, setProducts] = useState<Product[]>([]);
  const [name, setName] = useState("")
  const [description, setDescription] = useState("");
  const [grupo, setGrupo] = useState("")
  const [quantity, setQuantity] = useState(0);
  const [price, setPrice] = useState(0);
  const totalProducts = quantity * price

  function addProduct(e: React.FormEvent) {
    e.preventDefault();

    if (!name || description || !grupo || !quantity || !price) {
        alert("Preencha os campos vazios");
        return;
    }

    // const productData = {
    //   name,
    //   description,
    //   price,
    //   quantity
    // }

    const newProduct: Product = { name, description, grupo, quantity, price };
    setProducts([...products, newProduct]);

    // Limpa os campos
    setName("");
    setQuantity(0);
    setPrice(0);

    alert("Produto adicionado com sucesso...");
  }

  function addItens() {
    alert("Este botão acionaria o formulário ...");
  }

  return (
    <>
      <Header />
      <div className="container-content-itens">
        <div className="container-header-itens">
          <img
            src={botaoAdicionar}
            alt=""
            id="icon-header-itens"
            onClick={addItens}
          />
        </div>

        <div className="container-form-itens">
          <div className="form-itens">
            <h1 className="header-form-itens-title">Cadastro de produto</h1>

            <form id="form-itens" onSubmit={addProduct}>
              <label>
                <span> Nome: </span>
                  <input type="text"
                  placeholder="Nome do produto"
                  value={name}
                  onChange={(e) => setName(e.target.value)}/>
              </label>

              <label>
                <span> Descrição: </span>
                <input type="text"
                placeholder="Descrição do produto"
                value={description}
                onChange={(e) => setDescription(e.target.value)} />
              </label>

              <label>
                <span> Grupo: </span>
                  <select value={grupo} onChange={(e)=> setGrupo(e.target.value)}>
                    <option value=""> Selecione: </option>
                    <option value="Bebidas"> Bebidas </option>
                    <option value="Doces"> Doces </option>
                    <option value="Salgados"> Salgados</option>
                  </select>
              </label>

              <label>
                <span>Quantidade:</span>
                  <input
                    type="number"
                    placeholder="Quantidade"
                    value={quantity}
                    onChange={(e) => setQuantity(Number(e.target.value))}
                  />
              </label>

              <label>
                <span>Preço Unitário:</span>
                  <input
                    type="number"
                    placeholder="Preço"
                    value={price}
                    onChange={(e) => setPrice(Number(e.target.value))}
                  />
              </label>
              <input type="submit" value="Adicionar produto" id="btn-add-product" />
            </form>
            <p>
              <strong>Total:</strong>
              R$ {totalProducts.toFixed(2)}
            </p>
          </div>
        </div>

        <div id="container-itens">
          {products.map((p, index) => (
            <div key={index} className="item">
              <p>Produto: {p.name}</p>
              <p>Quantidade: {p.quantity}</p>
              <p>Preço: R$ {p.price}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
export default Itens;
