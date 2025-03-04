
const BarraBusqueda = ({ filtrarTexto, enStock, filtrarTextoModificado, enStockModificado}) => {
  return (
    <>
      <h2 className="text-gray-200 text-2xl font-semibold my-4 ml-10">
        Busque aquí su producto
      </h2>

      <div className="max-w-lg gap-4 mb-4 border border-amber-50 rounded-lg p-6">
        <form>
          <input className="bg-slate-500 w-full p-2 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            type="text" 
            value={filtrarTexto}
            placeholder="Buscar..." 
            onChange={(e) => filtrarTextoModificado(e.target.value)}/>
            
            <label className="text-gray-200">
              <input
              type="checkbox"
              checked={enStock} 
              onChange={(e) => enStockModificado(e.target.checked)}/>
              {' '}
              Mostrar solo productos en stock
            </label>
        </form>
      </div>
    </>
  )
}

export default BarraBusqueda