import { useRef, useEffect} from "react"
import { useForm } from "../hooks/useForm"

export const FormularioComponent = () => {
    const focusRef = useRef()
    console.log(focusRef)
    const inicialForm = {
        email: '',
        userName: '',
        pass: ''
    }
    const { formState, email, userName, pass, onInputChange} = useForm(inicialForm)

    const onSubmit = (event) => {
        event.preventDefault()
        console.log(formState)
    }

    useEffect(() => {
      focusRef.current.focus()
    }, [])
    
    return (
        <form onSubmit={onSubmit}>
            <div className="mb-3">
                <label htmlFor="email">Correo Electronico</label>
                <input
      
                    type="text"
                    className="form-control"
                    name="email"
                    value={email}
                    onChange={onInputChange}
                />
            </div>
            <div className="mb-3">
                <label htmlFor="userName">Nombre de Usuario</label>
                <input
                    type="text"
                    className="form-control"
                    name="userName"
                    value={userName}
                    onChange={onInputChange}
                />
            </div>
            <div className="mb-3">
                <label htmlFor="pass" >Password</label>
                <input
                    ref={focusRef}
                    type="password"
                    className="form-control"
                    name="pass"
                    value={pass}
                    onChange={onInputChange}
                />
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    )
}
