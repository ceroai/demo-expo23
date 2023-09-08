import { useEffect } from 'react'
import Smartphone from './components/smartphone'
import { useQueryClient } from 'react-query'
import { useLocation } from 'react-router-dom'
import logo from './assets/images/logo.svg'
import './App.css'

function App() {
  const queryClient = useQueryClient()
  const location = useLocation()

  useEffect(() => queryClient.clear(), [location, queryClient])

  return (
    <div className="App">
      <div className="App__message App__message--left">
        <img
          src={logo}
          alt="Logo CERO"
          style={{ width: '12rem', opacity: 0.8 }}
        />
      </div>
      <Smartphone />
      <div className="App__message App__message--right">
        Espectacular
        <br />
        demo de agendamiento
        <br />
        pase a probar
      </div>
    </div>
  )
}

export default App
