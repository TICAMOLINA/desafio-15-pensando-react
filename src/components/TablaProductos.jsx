import { useEffect, useState } from "react";
import Fila from "./Fila";

const TablaProductos = ({ productos, filtrarTexto, enStock }) => {
  const [contador, setContador] = useState(0);

  const productosFiltrados = productos.filter((product) => {
    if (
      product.nombre.toLowerCase().indexOf(
        filtrarTexto.toLowerCase()
      ) === -1
    ) {
      return false;
    }
    if (enStock && !product.stocked) {
      return false;
    }
    return true;
  })

  useEffect(() => {
    setContador(productosFiltrados.length);
  }, [productosFiltrados]);

  return (
    <div className="mt-4">

      <p className="text-white text-lg font-bold mb-2">
        Productos disponibles: {contador}
      </p>


      <table className="w-full border-collapse border border-gray-400">
        <thead>
          <tr className="bg-gray-800 text-white">
            <th className="border p-2">Nombre</th>
            <th className="border p-2">Categoría</th>
            <th className="border p-2">Precio</th>
          </tr>
        </thead>
        <tbody>
          {productosFiltrados.map((producto) => (
            <Fila producto={producto} key={producto.id} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TablaProductos;