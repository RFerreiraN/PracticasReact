import { useEffect, useState } from "react";

export const FetchUsers = () => {

  const [users, setUsers] = useState([]);
  const [endPoint, setEndPoint] = useState('users')

  const fetchUser = async() => {
    try {
       const response = await fetch(`https://jsonplaceholder.typicode.com/${endPoint}`);
       const datos = await response.json()
       setUsers(datos)
       console.log(datos)
       console.log('Has llamado a la API')
    } catch (error) {
      console.error( error )
    }
   
  }

  const llamarAPI = () => {
    fetchUser()
  }

  const llamarComentarios = () => {
    setEndPoint('comments')
  }


  return (
    <>
      <ul>
         { users.map( user => <li key={user.id}>  { user.name } </li>)}
      </ul>
      <p>
          <button onClick={llamarAPI}>Llamar Usuarios</button>
      </p>

      <p>
          <button onClick={llamarComentarios}> Traer Comentarios</button>
      </p>
      
    </>
  )
}


//