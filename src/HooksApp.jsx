import { ContadorComponent } from "./components/ContadorComponent"
import { FormularioComponent } from "./components/FormularioComponent"
import { UsuariosComponent } from "./components/UsuariosComponent"
import { CalculosPesados } from "./components/CalculosPesados"
import { CallBackComponent } from "./components/CallBackComponent"
import { ListaTareas } from "./components/ListaTareas"
export const HooksApp = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-6">
            <FormularioComponent></FormularioComponent>
          </div>
          <div className="col-6">
            <CallBackComponent></CallBackComponent>
          </div>
          <hr />
          <div className="col-6">
            <ContadorComponent></ContadorComponent>
          </div>
          <div className="col-6">
            <CalculosPesados></CalculosPesados>
          </div>
          <hr/>
          <div className="col-12">
            <ListaTareas></ListaTareas>          
          </div>
          <div className="col-12">
            <UsuariosComponent></UsuariosComponent>          
          </div>
        </div>
      </div>
    </>
  )
}
