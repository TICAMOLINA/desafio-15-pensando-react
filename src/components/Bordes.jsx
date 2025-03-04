// rafce
const Bordes = (props) => {
  /* Desestructuro props */
  
  const { color, size } = props

  console.log(color)
  console.log(size)
  
  const objEstilo = {
    border: `${size}px solid ${color}`,
    backgroundColor: (color === 'blueviolet') ? 'blue' : 'black',
    color: 'white'
 }

  return (
    <h4 style={objEstilo}>Bordes</h4>
  )
  /* return (
    <h4 style={{
        border: `${size}px solid ${color}`,
        backgroundColor: 'black',
        color: 'white'
    }}>Bordes</h4>
  ) */
}

export default Bordes


