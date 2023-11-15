import { useState } from "react"

export const useForm = (inicialForm = {}) => {
    const [formState, setFormState] = useState(inicialForm)
    //*************** MODIFICAR EL CAMPO DEL FORMULARIO ********************//
    const onInputChange = ({ target }) => {
        const {name, value} = target
        setFormState({
            ...formState,
            [name]: value
        })
    }   
  return {
    ...formState,
    formState,
    onInputChange   
  }
}
