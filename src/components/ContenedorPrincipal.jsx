import BarraBusqueda from "./BarraBusqueda"
import TablaProductos from "./TablaProductos"

const ContenedorPrincipal = ({ productos }) => {

  return (
    <div className="container mx-auto bg-slate-900 w-3xl">
        <h1 className="text-4xl my-5">Búsqueda de Productos</h1>
        <hr />
    <BarraBusqueda />
    <TablaProductos productos={productos}/>
    
    </div>
  )
}

export default ContenedorPrincipal