import { useEffect, useCallback, useRef } from 'react'
import { Icon } from '@iconify/react'
import './whatsapp-input.css'
import useAddMessageMutation from '../api/useAddMessageMutation'

const WhatsappInput = () => {
  const inputRef = useRef<HTMLTextAreaElement>(null)
  const { mutate } = useAddMessageMutation()

  const submit = useCallback(async () => {
    if (inputRef.current?.innerText) {
      const content = inputRef.current?.innerText
      inputRef.current.innerText = ''
      mutate({ content })
    }
  }, [mutate])

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
        submit()
      }
    })
  }, [submit])

  return (
    <div className="WhatsappInput">
      <button className="WhatsappInput__emoticon_button" title="Emoji">
        <Icon icon="mdi:emoticon-outline" />
      </button>
      <span
        ref={inputRef}
        className="WhatsappInput__input"
        role="textbox"
        contentEditable
      ></span>
      <button
        className="WhatsappInput__submit"
        title="Enviar mensaje"
        onClick={submit}
      >
        <Icon icon="mdi:send-variant" />
      </button>
    </div>
  )
}

export default WhatsappInput
