import Smartphone from './components/smartphone'
import logo from './assets/images/logo.svg'
import Draggable from 'react-draggable'
import './App.css'
import { RootState } from './redux/ducks'
import { useSelector } from 'react-redux'

function App() {
  const { editing } = useSelector((state: RootState) => state.editor)

  return (
    <div className="App">
      {editing && (
        <p className="App__editing_message">
          Vuelve a escribir /edit para salir del modo edición
        </p>
      )}
      <Draggable disabled={!editing}>
        <img
          src={logo}
          alt="Logo CERO"
          style={{
            width: '15rem',
            zIndex: 2,
            filter: 'drop-shadow(0 0 0.25rem rgba(0, 0, 0, 0.25))',
            cursor: editing ? 'move' : 'default',
            userSelect: 'none',
          }}
          draggable={false}
        />
      </Draggable>
      <Draggable disabled={!editing}>
        <div style={{ cursor: editing ? 'move' : 'default' }}>
          <Smartphone />
        </div>
      </Draggable>
      <Draggable disabled={!editing}>
        <p
          className="App__message App__message--right"
          contentEditable={editing}
          style={{ cursor: editing ? 'move' : 'default' }}
        >
          Demo de agendamiento
        </p>
      </Draggable>
    </div>
  )
}

export default App
