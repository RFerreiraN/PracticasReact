import { useEffect, useState } from "react"

export const UsuarioIndividual = () => {

  const [usuario, setUsuario] = useState({});
  const [ numberUser, setNumberUser ] = useState(1)

  const fetchIndividual = async() => {
      try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${numberUser}`);
        const datosJson = await response.json();
        setUsuario(datosJson)
        console.log(datosJson)
      } catch (error) {
        console.error( error )
      }
  }

  const nextUser = () => {
    if ( numberUser >= 10 ) return
      setNumberUser( numberUser + 1)
  }

  const previusUser = () => {
    if ( numberUser <= 1 ) return
    setNumberUser( numberUser -1)
  }

  useEffect(() => {
    fetchIndividual()
  }, [ numberUser ])

  return (
    <>
     <h1>Detalles del Usuario</h1>
      <ul>
        <li> {usuario.name} </li>
      </ul>
      <button onClick={previusUser}>{'<'}</button>
      <button onClick={nextUser}>{'>'}</button>
    </>
  )
}
