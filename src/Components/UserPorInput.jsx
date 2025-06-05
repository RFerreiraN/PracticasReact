import { useState } from "react";

export const UserPorInput = () => {

  const [userID, setUserID] = useState(''); // lo usanmos para definir el id del usaurio 
  const [datosUsuario, setDatosUsuario] = useState() // lo usamos para guardar los datos del usuario

  const fetchInput = async () => {
    try {
      const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userID}`);
      const data = await response.json()
      setDatosUsuario(data)
      console.log(data)
    } catch (error) {
      console.error(error)
    }
  }

  const userValue = (event) => {
      setUserID(event.target.value)
  }

  const onSubmitInput = (event) => {
    event.preventDefault()
    fetchInput()
    setUserID('')
  }


  return (
    <>
      <form onSubmit={onSubmitInput}>
        <h1>Busqueda por ID:</h1>

        <input type="text"
          placeholder="Ingrese ID"
          value={userID}
          onChange={userValue}
        />
      </form>

      <ul>
        { datosUsuario ? <li> { datosUsuario.name } </li>
                       : <li>Datos no encontrados</li>                
        }
      </ul>
    </>


  )
}


