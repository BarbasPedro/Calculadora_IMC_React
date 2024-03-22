import { useState } from "react";
import styles from './Calculo.module.css';

const CalculoImc = ({ idade }) => {
  const [peso, setPeso] = useState(0)
  const [altura, setAltura] = useState(0)
  const imc = (peso / (altura * altura)).toFixed(2)

  const calculaImc = () => {
    if ( peso > 0 && altura > 0) {
      return (
        <p className={styles.seuIMC}>O seu Indice de Massa Corporal é: {imc}</p>
      )
    } else {
      return (
        <p> **Por favor, informe o peso e a altura para calcular seu IMC</p>
      )
    }
  }

  const classificaIMC = () => {
    if (peso > 0 && altura > 0 && idade > 60 && imc > 0) {
      if ( imc < 22 ) {
        return <h2 className={styles.resultadoBaixoPeso}>Resultado: Baixo peso</h2>
      } else if ( imc >= 22 && imc <= 27) {
        return <h2 className={styles.resultadoNormal}>Resultado: Normal</h2>
      } else if ( imc > 27 && imc <= 29.99) {
        return <h2 className={styles.resultadoSobrepeso}>Resultado: Sobrepeso</h2>
      } else {
        return <h2 className={styles.resultadoObesidade}>Resultado: Obesidade</h2>
      }
    } else if (peso > 0 && altura > 0 && idade >= 20 && idade <= 60) {
      if ( imc < 18.5 ) {
        return <h2 className={styles.resultadoBaixoPeso}>Resultado: Baixo peso</h2>
      } else if ( imc >= 18.5 && imc <= 24.99) {
        return <h2 className={styles.resultadoNormal}>Resultado: Normal</h2>
      } else if ( imc > 24.99 && imc <= 29.99) {
        return <h2 className={styles.resultadoSobrepeso}>Resultado: Sobrepeso</h2>
      } else {
        return <h2 className={styles.resultadoObesidade}>Resultado: Obesidade</h2>
      }
    }
  }

  return (
    <>
      <div className="input">
        <label>Digite seu peso: (ex.: 69,2)</label>
        <input type='number' onChange={(e) => setPeso(e.target.value)} placeholder="Quilos"/>
      </div>
      <div className="input">
        <label>Digite sua altura: (ex.: 1,70)</label>
        <input type='number' onChange={(e) => setAltura(e.target.value)} placeholder="Metros"/>
      </div>
      {calculaImc()}
      {classificaIMC()}
    </>
  )
}

  export default CalculoImc
