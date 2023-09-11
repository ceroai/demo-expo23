import { useEffect, useCallback, useRef } from 'react'
import { Icon } from '@iconify/react'
import useAddMessageMutation from '../api/useAddMessageMutation'
import { useDispatch, useSelector } from 'react-redux'
import { toggleEditing } from '../redux/ducks/editor'
import { RootState } from '../redux/ducks'
import './whatsapp-input.css'
import { useNavigate, useParams } from 'react-router-dom'

const WhatsappInput = () => {
  const inputRef = useRef<HTMLTextAreaElement>(null)
  const { mutate } = useAddMessageMutation()
  const { editing } = useSelector((state: RootState) => state.editor)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { pollId, phone } = useParams()

  const submitMessage = useCallback(async () => {
    if (inputRef.current?.innerText) {
      const content = inputRef.current?.innerText
      inputRef.current.innerText = ''
      if (['/edit', '/editar', '/editor'].includes(content)) {
        dispatch(toggleEditing())
        return
      }
      if (
        [
          '/rand',
          '/random',
          '/rnd',
          '/new',
          '/reset',
          '/restart',
          '/clear',
          '/clr',
          '/jump',
          '/jmp',
        ].includes(content)
      ) {
        navigate(
          `/${pollId}/569${Math.floor(10_000_000 + 90_000_000 * Math.random())}`
        )
        return
      }
      if (
        ['/prev', '/anterior', '/atras', '/back', '/minus', '/N'].includes(
          content
        )
      ) {
        navigate(`/${pollId}/${Number(phone) - 1}`)
        return
      }
      if (
        [
          '/next',
          '/sgte',
          '/siguiente',
          '/forward',
          '/fwd',
          '/plus',
          '/n',
        ].includes(content)
      ) {
        navigate(`/${pollId}/${Number(phone) + 1}`)
        return
      }
      if (content.startsWith('/')) {
        return
      }
      mutate({ content })
    }
  }, [mutate, dispatch, navigate, pollId, phone])

  useEffect(() => {
    inputRef.current?.focus()
    const stuff = (ev: Event) => {
      if (inputRef.current?.contains(ev.target as Node) || editing) return
      inputRef.current?.focus()
    }
    document.addEventListener('click', stuff)
    const stuff2 = (ev: KeyboardEvent) => {
      if (ev.key === 'Enter' && inputRef.current) {
        ev.preventDefault()
        submitMessage()
      }
    }
    const lastRef = inputRef.current
    lastRef?.addEventListener('keypress', stuff2)
    return () => {
      document.removeEventListener('click', stuff)
      lastRef?.removeEventListener('keypress', stuff2)
    }
  }, [submitMessage, dispatch, editing])

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
        onClick={submitMessage}
      >
        <Icon icon="mdi:send-variant" />
      </button>
    </div>
  )
}

export default WhatsappInput
