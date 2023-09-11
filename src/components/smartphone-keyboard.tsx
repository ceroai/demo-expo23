import { Icon } from '@iconify/react'
import './smartphone-keyboard.css'
import { RootState } from '../redux/ducks'
import { useSelector } from 'react-redux'
import classNames from 'classnames'

const SmartphoneKeyboard = () => {
  const { capsOn } = useSelector((state: RootState) => state.keyboard)

  return (
    <div className="SmartphoneKeyboard">
      <div className="SmartphoneKeyboard__keys_row">
        {(capsOn
          ? ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P']
          : ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p']
        ).map((key) => (
          <button
            key={`key-${key}`}
            className={classNames({
              SmartphoneKeyboard__key: true,
              'SmartphoneKeyboard__key--caps': capsOn,
            })}
          >
            {key}
          </button>
        ))}
      </div>
      <div className="SmartphoneKeyboard__keys_row">
        {(capsOn
          ? ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'Ñ']
          : ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'ñ']
        ).map((key) => (
          <button
            key={`key-${key}`}
            className={classNames({
              SmartphoneKeyboard__key: true,
              'SmartphoneKeyboard__key--caps': capsOn,
            })}
          >
            {key}
          </button>
        ))}
      </div>
      <div className="SmartphoneKeyboard__keys_row">
        <button className="SmartphoneKeyboard__key SmartphoneKeyboard__key--long SmartphoneKeyboard__key--secondary">
          <Icon icon="mdi:arrow-up" />
        </button>
        {(capsOn
          ? ['Z', 'X', 'C', 'V', 'B', 'N', 'M']
          : ['z', 'x', 'c', 'v', 'b', 'n', 'm']
        ).map((key) => (
          <button
            key={`key-${key}`}
            className={classNames({
              SmartphoneKeyboard__key: true,
              'SmartphoneKeyboard__key--caps': capsOn,
            })}
          >
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
}

export default SmartphoneKeyboard
