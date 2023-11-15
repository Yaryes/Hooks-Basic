import { useFetch } from "../hooks/useFetch"

export const UsuariosComponent = () => {

    const { data, isLoading, errors } = useFetch('https://jsonplaceholder.typicode.com/users')
    return (
        <>
            <h1>Lista de Usuarios</h1>
            {
                isLoading
                    ? <h4>Cargando...</h4>
                    : errors
                        ? <p>Ha Ocurrido un errorazo: {errors}</p>
                        : <table className="table table-dark table-hover">
                            <thead>
                                <tr>
                                    <th scope="col">Id</th>
                                    <th scope="col">Nombre</th>
                                    <th scope="col">Correo</th>
                                    <th scope="col">Sitio Web</th>
                                </tr>
                            </thead>
                            <tbody>
                                {data.map(user => {
                                    return (
                                        <tr key={user.id}>
                                            <th scope="row">{user.id}</th>
                                            <td>{user.name}</td>
                                            <td>{user.email}</td>
                                            <td>{user.website}</td>
                                        </tr>
                                    )
                                })}
                            </tbody>
                        </table>
            }
        </>
    )
}
