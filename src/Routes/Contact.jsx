import React from 'react'
import Form from '../Components/Form'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Contact = () => {
  return (
    <div>
      <h2>Cual es su consulta?</h2>
      <p>envie sus datos y lo contactamos</p>
      <Form/>
    </div>
  )
}

export default Contact

