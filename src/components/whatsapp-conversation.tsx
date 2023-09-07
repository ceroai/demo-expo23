import { useEffect } from 'react'
import { Message } from '../api/types'
import useMessagesQuery from '../api/useMessagesQuery'
import './whatsapp-conversation.css'
import WhatsappMessage from './whatsapp-message'

const WhatsappConversation = () => {
  const { data: messages } = useMessagesQuery()

  useEffect(() => {
    document.querySelector('.WhatsappConversation')?.scrollTo({ top: 1e10 })
  }, [messages?.length])

  return (
    <div className="WhatsappConversation">
      {(messages || []).map((message: Message, i) => (
        <WhatsappMessage key={`message-${i}`} message={message} />
      ))}
    </div>
  )
}

export default WhatsappConversation
