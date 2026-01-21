import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

export default function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const API_URL = import.meta.env.VITE_API_URL || "https://controlly-back-end.onrender.com";

  async function acessSistem(e: React.FormEvent) {
    e.preventDefault();

    try {
      const response = await fetch(`${API_URL}/login`,{
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password: senha})
      });

      const data = await response.json();

     if (response.ok) {
        // Login bem-sucedido
        // Aqui você pode salvar o token JWT, se estiver usando
        localStorage.setItem("token", (data.data.token))
        localStorage.setItem("user", JSON.stringify(data.data.user));
        navigate("/dashboard");
      } else {
        alert(data.message || "E-mail ou senha inválidos");
      }
    } catch (error) {
      console.error("Erro ao fazer login:", error);
      alert("Erro na conexão com o servidor");
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
