import { useCounter } from "../hooks/useCounter"

export const ContadorComponent = () => {
  
  const { contador, incrementar, descrimentar, reset } = useCounter(0)

  return (
      <>
          <h3>Contador: {contador}</h3>
          <button className="btn btn-primary" onClick={() => incrementar(1) }>1+</button>
          <button className="btn btn-dark" onClick={() => reset() }>Reset</button>
          <button className="btn btn-success" onClick={() => descrimentar(1,false)}>-1</button>
      </>
    )
}
