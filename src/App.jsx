import { useState } from "react";
import CalculoImc from "./components/CalculoImc"
import Tabela from "./components/Tabela"

import './global.css'

function App() {
  const [idade, setIdade] = useState(0);

  return (
    <div className="container">
      <p className="tema">IMC</p>
      <h1 className="titulo">Calculadora IMC</h1>
      <p className="introducao">IMC é a sigla para Índice de Massa Corpórea, parâmetro adotado pela Organização Mundial de Saúde para calcular o peso ideal de cada pessoa.O índice é calculado da seguinte maneira: divide-se o peso do paciente pela sua altura elevada ao quadrado. Diz-se que o indivíduo tem peso normal quando o resultado do IMC está entre 18,5 e 24,9. Quer descobrir seu IMC? Comece inserindo sua idade para ter acesso à tabela correspondente à sua faixa etária e preencha seu peso e sua altura nos campos abaixo e compare com os índices da tabela.</p>
      <div className="input">
        <label className="digiteIdade">Digite sua idade:</label>
        <input type="number" onChange={(e) => setIdade(parseInt(e.target.value))} />
      </div>
      <Tabela idade={idade} className="tabela"/>
      <CalculoImc idade={idade}/>
    </div>
  )
}

export default App
