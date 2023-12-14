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
          <div className="col-4">
            <FormularioComponent></FormularioComponent>
          </div>
          <div className="col-8">
            <div className="row">
              <div className="col-7">
                <CallBackComponent></CallBackComponent>
              </div>
              <div className="col-6">
                <ContadorComponent></ContadorComponent>
              </div>
            </div>
          </div>
          <hr />
          {/* 
          <div className="col-6">
            <CalculosPesados></CalculosPesados>
          </div>
          <hr/>
          <div className="col-12">
            <ListaTareas></ListaTareas>          
          </div>
          <div className="col-12">
            <UsuariosComponent></UsuariosComponent>          
          </div> */}
        </div>
      </div>
    </>
  )
}
