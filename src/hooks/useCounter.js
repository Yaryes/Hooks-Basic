import { useState } from "react"

export const useCounter = (valorInicial = 0) => {
    const [contador, setContador] = useState(valorInicial)

    const incrementar = (valor = 1) => {
        setContador(contador + valor)
    }
    const descrimentar = (valor = 1, negativo) => {
        if(!negativo && contador < 1) return
        setContador(contador - valor)
    }
    const reset = () => {
        setContador(0)
    }

  return {
    contador,
    incrementar,
    descrimentar,
    reset
  }
}
