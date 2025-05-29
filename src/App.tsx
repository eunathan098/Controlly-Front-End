import DashBoard from "./pages/Dashboard/Dashboard"
import Estoque from "./pages/Estoque/Estoque";
import Itens from "./pages/Itens/Itens";
import Login from "./pages/Login/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Resumos from "./pages/Resumos/Resumos";

function App() {
  
  return (
    <>
      <BrowserRouter basename="/Controlly-Front-End/">
          <Routes>
            <Route path='/' element={<Login></Login>}></Route>
            <Route path='/login' element={<Login></Login>}></Route>
            <Route path='/dashboard' element={<DashBoard></DashBoard>}></Route>
            <Route path='/itens' element={<Itens></Itens>}></Route>
            <Route path='/estoque' element={<Estoque></Estoque>}></Route>
            <Route path='/resumos' element={<Resumos></Resumos>}></Route>

          </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
