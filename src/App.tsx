import DashBoard from "./pages/Dashboard";
import Login from "./pages/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  
  return (
    <>
      <BrowserRouter basename="/Controlly-Front-End/">
          <Routes>
            <Route path='/' element={<Login></Login>}></Route>
            <Route path='/login' element={<Login></Login>}></Route>
            <Route path='/dashboard' element={<DashBoard></DashBoard>}></Route>
            <Route path='/itens' element={<div> <h1> Tela de Cadastro de itens </h1></div>}></Route>
            <Route path='/estoque' element={<div> <h1> Tela de Estoque </h1></div>}></Route>
          </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
