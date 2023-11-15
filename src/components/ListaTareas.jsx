import { useReducer } from "react"
import { useForm } from "../hooks/useForm"

const iniciarState = [{
    id: new Date().getTime(),
    tarea: 'Explicar Portafolio',
    finalizada: false
}]
const tareaReducer = (state = iniciarState, action = {}) => {
    switch (action.type) {
        case '[TAREA] Agregar Tarea':
            return [...state, action.payload]
        case '[TAREA] Finalizar Tarea':
            return state.map(tarea => {
                if (tarea.id === action.payload.id) {
                    return {
                        ...tarea,
                        finalizada: !tarea.finalizada
                    }
                }return  tarea
            })
        case '[TAREA] Eliminar Tarea':
            return state.filter(tarea => tarea.id !== action.payload)
        case '[TAREA] Borrar Tareas':
            console.log(state,action)
            return action.payload

        default:
            return state
    }
    return state
}

export const ListaTareas = () => {

    const [tareaState, dispatch] = useReducer(tareaReducer, iniciarState)
    const { tarea, formState, onInputChange } = useForm({ tarea: '' })

    const agregarTarea = (event) => {
        event.preventDefault()
        if (formState.tarea === '') return
        console.log(formState)
        const tarea = {
            id: new Date().getTime(),
            tarea: formState.tarea,
            finalizada: false
        }
        const action = {
            type: '[TAREA] Agregar Tarea',
            payload: tarea
        }
        dispatch(action)
    }

    const finalizarTarea = ({ id }) => {
        console.log(tareaState)
        const action = {
            type: '[TAREA] Finalizar Tarea',
            payload: id
        }
        dispatch(action)
    }

    const EliminarTareas = ({ id }) =>{
        const action = {
            type: '[TAREA] Eliminar Tarea',
            payload: id
        }
        dispatch(action)
    }
    const reset = () =>{
        const action = {
            type: '[TAREA] Borrar Tareas',
            payload: []
        }
        dispatch(action)
    }

    return (
        <>
            <form onSubmit={agregarTarea}>
                <div className="mb-3">
                    <input
                        type="text"
                        className="form-control"
                        name="tarea"
                        placeholder="Ingrese Tarea Nueva"
                        value={tarea}
                        onChange={onInputChange}
                    />
                </div>
                <button type="submit" className="btn btn-primary">Agregar Tarea</button>
                <button className="btn btn-danger" onClick={reset}>Eliminar Tareas</button>
            </form>
            <ul className="list-group">
                {tareaState.map(item => {
                    return (
                        <li key={item.id} className="list-group-item bg-dark text-white d-flex justify-content-between">
                            <span>{item.tarea}</span>
                            <div className="">
                                <input
                                    type="checkbox"
                                    value={item.finalizada}
                                    onChange={() => finalizarTarea(item)}
                                />
                                <button 
                                    type="button"
                                    className="btn btn-danger" 
                                    onClick={()=> EliminarTareas(item)}>Borrar Tarea
                                </button>
                            </div>
                        </li>
                    )
                })}
            </ul>
        </>
    )
}
