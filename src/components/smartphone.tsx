import { useEffect, useRef } from 'react'
import SmartphoneKeyboard from './smartphone-keyboard'
import WhatsappConversation from './whatsapp-conversation'
import WhatsappInput from './whatsapp-input'
import './smartphone.css'

const Smartphone = () => {
  const inputRef = useRef<HTMLTextAreaElement>(null)

  useEffect(() => {
    inputRef.current?.focus()
    ;['click', 'touchstart'].forEach((type) => {
      document.addEventListener(type, (ev) => {
        if (inputRef.current?.contains(ev.target as Node)) return
        inputRef.current?.focus()
      })
    })
    inputRef.current?.addEventListener('keypress', (ev) => {
      if (ev.key === 'Enter' && inputRef.current) {
        ev.preventDefault()
        inputRef.current.innerText = ''
      }
    })
  }, [])

  return (
    <div className="Smartphone">
      <div className="Smartphone__top">esto es guatsap</div>
      <div className="Smartphone__main">
        <WhatsappConversation />
        <WhatsappInput />
      </div>
      <SmartphoneKeyboard />
    </div>
  )
}

export default Smartphone
