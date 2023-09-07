import { Icon } from '@iconify/react'
import './smartphone-keyboard.css'

const SmartphoneKeyboard = () => (
  <div className="SmartphoneKeyboard">
    <div className="SmartphoneKeyboard__keys_row">
      {['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'].map((key) => (
        <button key={`key-${key}`} className="SmartphoneKeyboard__key">
          {key}
        </button>
      ))}
    </div>
    <div className="SmartphoneKeyboard__keys_row">
      {['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'Ñ'].map((key) => (
        <button key={`key-${key}`} className="SmartphoneKeyboard__key">
          {key}
        </button>
      ))}
    </div>
    <div className="SmartphoneKeyboard__keys_row">
      <button className="SmartphoneKeyboard__key SmartphoneKeyboard__key--long SmartphoneKeyboard__key--secondary">
        <Icon icon="mdi:arrow-up" />
      </button>
      {['Z', 'X', 'C', 'V', 'B', 'N', 'M'].map((key) => (
        <button key={`key-${key}`} className="SmartphoneKeyboard__key">
          {key}
        </button>
      ))}
      <button className="SmartphoneKeyboard__key SmartphoneKeyboard__key--long SmartphoneKeyboard__key--secondary">
        <Icon icon="mdi:backspace-outline" />
      </button>
    </div>
    <div className="SmartphoneKeyboard__keys_row">
      <button className="SmartphoneKeyboard__key"></button>
    </div>
  </div>
)

export default SmartphoneKeyboard
