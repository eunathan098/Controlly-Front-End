import Header from '../../../src/components/Header'

// Importação de imagens
import GraficoItens1 from "../../assets/grafico-itens.png"
import GraficoItens2 from "../../assets/grafico-itens-2.png"


// Importação do CSS
import "./Dashboard.css";


function DashBoard(){
  return(
    <>
      <Header></Header>
        <div className="container-content-dashboard">
          <div className="container-dashboard">
          <div className="container-filters">

            <div className="container-name-select">
              <p className="title-name-filter"> Produto: </p>
              <select name="" id="" className="select-filter">
                <option value=""> Todos </option>
                <option value=""> Recentes </option>
                <option value=""> Antigos </option>
                <option value=""> Todos </option>
              </select>
            </div>
            

            <div className="container-name-select">
              <p className="title-name-filter"> Grupo: </p>
              <select name="" id="" className="select-filter">
                <option value=""> Todos </option>
                <option value=""> Recentes </option>
                <option value=""> Antigos </option>
                <option value=""> Todos </option>
              </select>
            </div>

            <div className="container-name-select">
              <p className="title-name-filter"> Mês: </p>
              <select name="" id="" className="select-filter">
                <option value=""> Todos </option>
                <option value=""> Janeiro </option>
                <option value=""> Fevereiro </option>
                <option value=""> Março </option>
                <option value=""> Abril </option>
                <option value=""> Maio </option>
                <option value=""> Junho </option>
                <option value=""> Julho </option>
                <option value=""> Agosto </option>
                <option value=""> Setembro </option>
                <option value=""> Outubro </option>
                <option value=""> Novembro </option>
                <option value=""> Dezembro </option>
              </select>
            </div>

            <div className="container-name-select">
              <p className="title-name-filter"> Entrada/Saída: </p>
              <select name="" id="" className="select-filter">
                <option value=""> Entrada </option>
                <option value=""> Saída </option>
              </select>
            </div>

          </div>

            <div className="container-info-numbers">

              <div className="container-resumes">
                <p className="title"> Total de Itens </p>
                <p className="total"> 4.404.05 </p>

              </div>

              <div className="container-resumes">
                <p className="title"> Itens no último Mês </p>
                <p className="total"> 400 </p>
                
              </div>

              <div className="container-resumes">
                <p className="title"> Itens (Exclusivo) </p>
                <p className="total"> 100 </p>
              </div>
            </div>

            <div className="container-info-grafics">

              <div className="container-resumes-grafics">
                <img src={GraficoItens1} alt="" className="graficoItens"/>

              </div>

              <div className="container-resumes-grafics">
                <img src={GraficoItens2} alt="" className="graficoItens"/>
              </div>

            </div>
          </div>
        </div>
    </>
  )
}
export default DashBoard