
const BarraBusqueda = () => {
  return (
    <>
      <h2 className="text-2xl font-semibold my-4">
        Busque aquí su producto
      </h2>

      <div className="max-w-lg gap-4 mb-4 border rounded-lg p-6">
        <form>
          <input className="bg-slate-500 w-full p-2 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            type="text" /* value="" */ placeholder="Buscar..." />
            <label>
              <input type="checkbox" />
              {' '}
              Mostrar solo productos en stock
            </label>
        </form>
      </div>
    </>
  )
}

export default BarraBusqueda