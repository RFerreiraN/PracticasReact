import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { UsersApp } from './Components/UsersApp.jsx'
import { UsuarioIndividual } from './Components/UsuarioIndividual.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <UsuarioIndividual/>
  </StrictMode>,
)
