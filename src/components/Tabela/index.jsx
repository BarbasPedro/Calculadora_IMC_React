import styles from './Tabela.module.css';

const Tabela = ({ idade }) => {
  const selecionaTabela = (idade) => {
    if ( idade > 60) {
      return (
        <table className={styles.tabela}>
          <thead>
            <tr>
              <th colSpan={2} className={styles.tituloTabela}>
                VALORES DO IMC: PESSOAS ACIMA DE 60 ANOS
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className={styles.primeiraLinha}>
              <td>VALOR DO IMC</td>
              <td>CLASSIFICAÇÃO</td>
            </tr>
            <tr className={styles.baixoPeso}>
              <td>Menor que 22</td>
              <td>Baixo peso</td>
            </tr>
            <tr className={styles.normal}>
              <td>De 22 a 27</td>
              <td>Normal</td>
            </tr>
            <tr className={styles.sobrepeso}>
              <td>de 27 a 29,99</td>
              <td>Sobrepeso</td>
            </tr>
            <tr className={styles.obesidade}>
              <td>Maior que 30</td>
              <td>Obesidade</td>
            </tr>
          </tbody>
        </table>
      )
    } else if (idade >= 20)  {
      return (
        <table className={styles.tabela}>
              <thead>
                <tr>
                  <th colSpan={2} className={styles.tituloTabela}>
                    VALORES DO IMC: PESSOAS DE 20 A 60 ANOS
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className={styles.primeiraLinha}>
                  <td>VALOR DO IMC</td>
                  <td>CLASSIFICAÇÃO</td>
                </tr>
                <tr className={styles.baixoPeso}>
                  <td>Menor que 18,5</td>
                  <td>Baixo peso</td>
                </tr>
                <tr className={styles.normal}>
                  <td>De 18,5 a 24,99</td>
                  <td>Normal</td>
                </tr>
                <tr className={styles.sobrepeso}>
                  <td>De 24,99 a 29,99</td>
                  <td>Sobrepeso</td>
                </tr>
                <tr className={styles.obesidade}>
                  <td>Maior que 30</td>
                  <td>Obesidade</td>
                </tr>
              </tbody>
        </table>
      )
    } else if (idade === 0 || isNaN(idade)) {
      return (
        <p>Informe a sua idade para ter acesso á tabela de valores correspondente á sua faixa etária</p>
      )
    } else {
      return (
        <p>Informe uma idade acima de 19 anos</p>
      )
    }
  }

  return (
    <>
      {selecionaTabela(idade)}
    </>
  )
}

export default Tabela
