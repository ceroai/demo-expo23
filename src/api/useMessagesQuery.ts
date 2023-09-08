import { useQuery, useQueryClient, UseQueryResult } from 'react-query'
import { parseISO } from 'date-fns'
import _ from 'lodash'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import {
  APIConversation,
  APIMessage,
  APIResponse,
  Conversation,
  Message,
} from './types'

export const CONVERSATION_QUERY_KEY = 'conversation'

const useMessagesQuery = (): UseQueryResult<Conversation, unknown> => {
  const { pollId, phone } = useParams()
  const queryClient = useQueryClient()

  return useQuery<Conversation, any, any>(
    CONVERSATION_QUERY_KEY,
    async () => {
      const { data }: { data: APIResponse } = await axios.get(
        `https://api.expohospital2023.cero.ai/chat/${pollId}/${phone}`
      )
      if (!data || _.isEmpty(data.data.conversations)) {
        return []
      }
      const lastConversation = _.last(
        data.data.conversations
      ) as APIConversation
      const conversationMessages = lastConversation.messages.map(
        (message: APIMessage): Message => ({
          from: message.type === 'bot' ? 'BOT' : 'USER',
          content: message.message,
          timestamp: parseISO(message.timestamp),
        })
      )
      const cachedConversation = queryClient.getQueryData(
        CONVERSATION_QUERY_KEY
      ) as Message[]
      if (!cachedConversation) {
        return conversationMessages
      }
      const conversationBotMessages = conversationMessages.filter(
        (m) => m.from === 'BOT'
      )
      const conversationUserMessages = cachedConversation.filter(
        (m) => m.from === 'USER'
      )
      const allMessages = _.sortBy(
        [...conversationBotMessages, ...conversationUserMessages],
        'timestamp'
      )
      console.log({ conversationBotMessages, conversationUserMessages })
      return allMessages
    },
    { refetchOnWindowFocus: false, refetchInterval: 3_000 }
  )
}

export default useMessagesQuery
