import {useState} from 'react';

export const UsersPorID = () => {

  const [userId, setUserId] = useState('');
  const [usersObject, setUsersObject] = useState(null)

  const fetchUsers = async () => {
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
        const data = await response.json()
        console.log(data)
        setUsersObject(data)
    } catch (error) {
        console.error( error )
    }
  }

  const userInputValue = (e) => {
      setUserId(e.target.value)
  }

  const buscarPorID = (e) => {
    e.preventDefault()
    if( userId.length == 0 || 
      isNaN(parseFloat(userId)) || 
      userId > 10 || 
      userId < 1 ) return
    fetchUsers()
    setUserId('')
  }

  return (
    <form onSubmit={ buscarPorID }>
      <h2>Busqueda de Usuarios por ID:</h2>
      <input type='text'
             placeholder='Ingrese ID'
             value={userId}
             onChange={ userInputValue }
      />
      <ul>
        { usersObject ? (<li>Nombre: { usersObject.name }</li>)  :  (<li>Introduce un Id entre 1 y 10</li>)}
      </ul>
    </form>
  )
}
