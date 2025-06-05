import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { UsersApp } from './Components/UsersApp.jsx'
import { UsuarioIndividual } from './Components/UsuarioIndividual.jsx'
import { UserPorInput } from './Components/UserPorInput.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <UserPorInput/>
  </StrictMode>,
)
