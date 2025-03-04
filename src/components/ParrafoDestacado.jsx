
const ParrafoDestacado = (props) => { // las props se reciben dentro de un obj

    console.log(props)
  
    return (
      <p style={{ color: props.colorParrafo}}>{props.textoParrafo}</p>
    )
  }
  
  export default ParrafoDestacado