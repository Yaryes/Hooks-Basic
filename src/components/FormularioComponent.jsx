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
    const { formState, email, userName, pass, onInputChange } = useForm(inicialForm)
    const onSubmit = (event) => {
        event.preventDefault()
        console.log(formState)
    }
    useEffect(() => {
        focusRef.current.focus()
    }, [])
    return (
        <form onSubmit={onSubmit}>
            <label className="mb-1">Correo del Usuario</label>
            <div className="input-group input-group-sm mb-3 ">
                <input 
                    type="text" 
                    className="form-control border-success text-light bg-dark"
                    name="email"
                    placeholder="ej: pedro.perez"
                    value={email}
                    onChange={onInputChange}
                />
                <span className="input-group-text" id="basic-addon1">@gmail.cl</span>
            </div>
            <label className="mb-1">Nombre de Usuario</label>
            <div className="input-group input-group-sm mb-3">
                <span className="input-group-text">@</span>
                <input 
                    type="text" 
                    className="form-control border-success bg-dark" 
                    placeholder="Yaryes10"
                />
            </div>
            <div className="mb-3 input-group-sm">
                <label className="mb-1" >Password</label>
                <input
                    ref={focusRef}
                    type="password"
                    className="form-control border-success bg-dark"
                    name="pass"
                    value={pass}
                    placeholder="*****"
                    onChange={onInputChange}
                />
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    )
}
