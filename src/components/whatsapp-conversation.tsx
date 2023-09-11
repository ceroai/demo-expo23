import { useEffect } from 'react'
import { Message } from '../api/types'
import useMessagesQuery from '../api/useMessagesQuery'
import WhatsappMessage from './whatsapp-message'
import Loader from './loader'
import './whatsapp-conversation.css'

const WhatsappConversation = () => {
  const { data: messages, isLoading, errorUpdateCount } = useMessagesQuery()

  useEffect(() => {
    document.querySelector('.WhatsappConversation')?.scrollTo({ top: 1e10 })
  }, [messages?.length])

  return (
    <div className="WhatsappConversation">
      {isLoading && errorUpdateCount === 0 && (
        <div className="WhatsappConversation__loader_container">
          <Loader />
          Conectando...
        </div>
      )}
      {!messages && errorUpdateCount >= 1 && (
        <p className="WhatsappConversation__no_messages">
          Escriba un mensaje para iniciar la interacción
        </p>
      )}
      {(messages || []).map((message: Message, i) => (
        <WhatsappMessage key={`message-${i}`} message={message} />
      ))}
    </div>
  )
}

export default WhatsappConversation
