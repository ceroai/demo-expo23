import { useEffect } from 'react'
import Smartphone from './components/smartphone'
import { useQueryClient } from 'react-query'
import { useLocation } from 'react-router-dom'
import logo from './assets/images/logo.svg'
import Draggable from 'react-draggable'
import './App.css'

function App() {
  const queryClient = useQueryClient()
  const location = useLocation()

  useEffect(() => queryClient.clear(), [location, queryClient])

  return (
    <div className="App">
      <Draggable>
        <img
          src={logo}
          alt="Logo CERO"
          style={{
            width: '15rem',
            zIndex: 2,
            filter: 'drop-shadow(0 0 0.25rem rgba(0, 0, 0, 0.25))',
          }}
          draggable={false}
        />
      </Draggable>
      <Draggable>
        <div>
          <Smartphone />
        </div>
      </Draggable>
      <Draggable>
        <p className="App__message App__message--right" contentEditable>
          Espectacular demo de agendamiento pase a probar
        </p>
      </Draggable>
    </div>
  )
}

export default App
