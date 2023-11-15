import { useMemo, useState } from "react"
export const CalculosPesados = () => {
    const [listaNumeros, setListaNumeros] = useState([9,2,3,4,15,6,8,6,7,5,4,4,5,6,7])
    const [show, setShow] = useState(true)
    const getCalculo = (listaNumeros) => useMemo(() =>{
            console.log('Calculando')
            return listaNumeros.reduce( (a,b) => a*b )
        }, [listaNumeros])

    const agregarNumero = () => {
        setListaNumeros([...listaNumeros, listaNumeros[listaNumeros.length - 1] + 1])
        console.log(listaNumeros)
    }
  return (
    <>
        <h3>Calculadora: </h3>
        <h5>{ getCalculo(listaNumeros)}</h5>
        <button className="btn btn-primary" onClick={() => setShow(!show)}>{show ? 'Show' : 'Hide'}</button>
        <button className="btn btn-primary" onClick={() => agregarNumero()}>Agregar Numero</button>
    </>
  )
}
