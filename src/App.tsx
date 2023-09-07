import './App.css'
import Smartphone from './components/smartphone'

function App() {
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
