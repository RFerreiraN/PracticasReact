
import { useEffect, useState } from "react";
import { EndPointUsers } from "./EndPointUsers";
import { EndPointComments } from "./EndPointComments";

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
         { endPoint == 'users' ? <EndPointUsers users={users}/> 
                               : <EndPointComments users={users}/> }
      </ul> 
      
       <button onClick={llamarAPI}>Llamar Usuarios</button>
       <button onClick={llamarComentarios}> Traer Comentarios</button>
     
    </>
  )
}


//Crear componentes para mostrar los users y los comments