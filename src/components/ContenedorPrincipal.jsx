import { useState } from "react";
import BarraBusqueda from "./BarraBusqueda"
import TablaProductos from "./TablaProductos"


const ContenedorPrincipal = ({ productos }) => {
  const [filtrarTexto, setfiltrarTexto] = useState('');
  const [enStock, setEnStock] = useState(false);




  return (
    <div className="container mx-auto bg-slate-900 w-3xl">
        <h1 className="text-center text-white text-4xl my-5">Búsqueda de Productos</h1>
        <hr className="text-amber-50" />
    <BarraBusqueda 
    filtrarTexto={filtrarTexto} 
    enStock={enStock}
    filtrarTextoModificado={setfiltrarTexto}
    enStockModificado={setEnStock}
    />
    <TablaProductos 
    productos={productos}
    filtrarTexto={filtrarTexto}
    enStock={enStock} />
    
    </div>
  )
}

export default ContenedorPrincipal