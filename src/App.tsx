import { useEffect } from 'react'
import Smartphone from './components/smartphone'
import './App.css'
import { useQueryClient } from 'react-query'
import { useLocation } from 'react-router-dom'

function App() {
  const queryClient = useQueryClient()
  const location = useLocation()

  useEffect(() => queryClient.clear(), [location, queryClient])

  return (
    <div className="App">
      <div className="App__message App__message--left">CERO</div>
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
