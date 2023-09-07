export type APIResponse = {
  data: {
    conversations: APIConversation[]
  }
}

export type APIConversation = {
  start: string
  messages: APIMessage[]
}

export type APIMessage = {
  timestamp: string
  message: string
  type: 'user' | 'bot'
}

export type Message = {
  from: 'USER' | 'BOT'
  content: string
  timestamp: Date
}

export type Conversation = Message[]
