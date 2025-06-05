import { useEffect, useState } from "react";

export const UserPorInput = () => {

  const [userID, setUserID] = useState('');
  

  const userValue = ( event ) => {
    setUserID(event.target.value)
    console.log(userID)
  }

  const fetchInput = async() => {
    try {
      const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userID}`);
      const data = await response.json()
      console.log(data)
    } catch (error) {
      console.error( error )
    }
  }

  const onSubmitInput = (event) => {
      event.preventDefault()
      
      setUserID('')
  }

  useEffect(() => { 
    fetchInput()
  }, [])

  return (
    <form onSubmit={onSubmitInput}>
      <h1>Busqueda por ID:</h1>

      <input type="text"
             placeholder="Ingrese ID"
             value={userID}  
             onChange={userValue}      
      />
    </form>
  )
}
