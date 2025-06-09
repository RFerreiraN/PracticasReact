import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { UsersApp } from './Components/UsersApp.jsx'
import { UsuarioIndividual } from './Components/UsuarioIndividual.jsx'
import { UserPorInput } from './Components/UserPorInput.jsx'
import { UserPorId } from './Components/UserPorId.jsx'
import { PracticaUsers } from './Components/PracticaUsers.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <PracticaUsers/>
  </StrictMode>,
)
