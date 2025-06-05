import { use, useState } from "react";

export const UserPorId = () => {

  const [usersId, setUsersId] = useState('');
  const [user, setUser] = useState(null)

  const fetchEmpleados = async () => {

    if( !usersId || isNaN(usersId) ) return

    try {
      const response = await fetch(`https://jsonplaceholder.typicode.com/users/${usersId}`);
      const data = await response.json()
      setUser(data)
      console.log(data)
    } catch (error) {
      console.error( error )
    }
  }

  const inputValue = (e) => {
      setUsersId(e.target.value)
  }

  const onSubmitInput = (e) => {
    e.preventDefault()
    if ( usersId < 1 || usersId > 10) return
    fetchEmpleados()
    setUsersId('')
  }

  return (
    <>
      <h1>Buscar de Empleados por ID: </h1>
      <form onSubmit={onSubmitInput}>
        <input type="text" placeholder="Ingrese Id de Empleado" value={usersId} onChange={inputValue}/>
      </form>
      <ul>
          { user ? <li>Nombre: {user.name } <br /> Email: {user.email} <br /> Username : {user.username}</li>                
                 : <li>Introduzca ID</li>
          }
      </ul>
      
    </>
  )
}
