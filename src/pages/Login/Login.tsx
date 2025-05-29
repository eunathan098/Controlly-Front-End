import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

export default function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  function acessSistem(e: React.FormEvent) {
    e.preventDefault();

    if (email === "senha@gmail.com" && senha === "senha") {
      navigate("/dashboard");
    } else {
      alert("E-mail ou senha inválidos");
    }
  }

  return (
    <div className="container-form">
      <div className="container-formulario">
        <form
          onSubmit={acessSistem}
          style={{ display: "flex", flexDirection: "column", gap: "12px", width: "300px" }}
        >
          <h2 className="title-form">Controlly</h2>

          <input
            type="email"
            placeholder="E-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder="Senha"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            required
          />

          <button type="submit">Entrar</button>
        </form>
      </div>
    </div>
  );
}
