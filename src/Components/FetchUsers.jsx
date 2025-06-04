import { useState } from "react";

export const FetchUsers = () => {

  const [users, setUsers] = useState([])

  const FetchUser = async() => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const datos = await response.json()
    setUsers(datos)
    console.log(datos)
    console.log('Has llamado a la API')
  }

  const llamarAPI = () => {
    FetchUser()
  }

  return (
    <>
      <button onClick={llamarAPI}>Llamar</button>
    </>
  )
}
