import convertirAPesos from "../utils/convertirAPesos"

const Fila = ({ producto }) => {
  const name = producto.stocked ? ( producto.nombre ) : ( <span className="text-red-500"> {producto.nombre} </span>
  )

  return (
    <>
    <tr >
      <td className="text-gray-400 px-6 py-4">{name}</td>
      <td className="text-gray-400 px-6 py-4">{producto.categoria}</td>
      <td className="text-gray-400 px-6 py-4">{convertirAPesos(producto.precio)}</td>
    </tr>
    </>
  )
}

export default Fila
