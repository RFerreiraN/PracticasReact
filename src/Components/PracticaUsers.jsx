import { useState } from 'react';

const Items = ({nombre, visto}) => {
  return(
    <li>{ nombre }{ visto ? '✅' : '⛔ '}</li>
  )
}

export const PracticaUsers = () => {

    const [empleadosDB, setEmpleadosDB] = useState([]);
    const [empleado, setEmpleado] = useState('');

    const empleadoInputValue = (event) => {
        setEmpleado( event.target.value )
    }

    const agregarEmpleado = (event) => {
        event.preventDefault()

        if(empleado.length == 0) return
        
        const nuevoEmpleado = {
          id : crypto.randomUUID(),
          nombre : empleado,
          visto : true
        }

        setEmpleadosDB([...empleadosDB, nuevoEmpleado])
        setEmpleado('')
    }

  return (
    <form onSubmit={ agregarEmpleado }>
      <h1>Listado de trabajadores: </h1>
      <input type='text' 
             placeholder='Ingrese datos del Trabajador' 
             value={ empleado } 
             onChange={ empleadoInputValue }/>
      <ul>
        { empleadosDB.map( trabajador => <Items key={trabajador.id} nombre={trabajador.nombre} visto={trabajador.visto}/>)}
      </ul>
    </form>
  )
}
