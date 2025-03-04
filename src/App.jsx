import ContenedorPrincipal from "./components/ContenedorPrincipal"
import PRODUCTOS from "./constants/PRODUCTOS"


const App = () => {
  return (
    <>
      <ContenedorPrincipal productos={PRODUCTOS} />

    </>
  )
}

export default App