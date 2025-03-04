import Fila from "./Fila";

const TablaProductos = ({ productos }) => {
  return (
    <table className="w-full border-collapse border border-gray-400">
      <thead>
        <tr className="bg-gray-800 text-white">
          <th className="border p-2">Nombre</th>
          <th className="border p-2">Categoría</th>
          <th className="border p-2">Precio</th>
        </tr>
      </thead>
      <tbody>
        {productos.map((producto) => (
          <Fila producto={producto} key={producto.id} />
        ))}
      </tbody>
    </table>
  );
};

export default TablaProductos;