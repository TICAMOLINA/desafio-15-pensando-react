// ! Ejemplos de nombres de componentes
// * TextoPrincipal
// * Contenedor
// * ParrafoDestacado
// * Card
// * Footer

// rafce
const TextoPrincipal = (props) => {

    console.log(props)
  
    return (
      <h2>{props.texto}</h2>
    )
  }
  
  export default TextoPrincipal