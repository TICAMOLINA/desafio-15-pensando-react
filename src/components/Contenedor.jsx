//rafce

const Contenedor = (props) => {

  console.log(props) // cuando pase componente dentro de la etiqueta apertura y cierre, lo voy recibir en una props espe (children)

  return (
    <div>
      <h1>Mi primera página REACT</h1>
      <hr />
      {props.children}
    </div>
  )
}

export default Contenedor