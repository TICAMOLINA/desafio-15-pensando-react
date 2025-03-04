import BarraBusqueda from "./BarraBusqueda"
import TablaProductos from "./TablaProductos"

const ContenedorPrincipal = () => {
  return (
    <div className="container mx-auto bg-slate-900">
        <h1 className="text-4xl my-5">Búsqueda de Productos</h1>
        <hr />
    <BarraBusqueda />
    <TablaProductos />
    
    </div>
  )
}

export default ContenedorPrincipal