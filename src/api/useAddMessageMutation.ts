import { useMutation, UseMutationResult, useQueryClient } from 'react-query'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { Message } from './types'
import { CONVERSATION_QUERY_KEY } from './useMessagesQuery'

const useAddMessageMutation = (): UseMutationResult<unknown, unknown> => {
  const { pollId, phone } = useParams()
  const queryClient = useQueryClient()

  return useMutation<any, any, any>(
    async ({ content }) => {
      const { data } = await axios.post(
        `https://api.expohospital2023.cero.ai/message/${pollId}/${phone}`,
        { text: content }
      )
      return data
    },
    {
      onMutate: async ({ content }) => {
        let cachedConversation =
          (queryClient.getQueryData(CONVERSATION_QUERY_KEY) as Message[]) || []
        queryClient.cancelQueries(CONVERSATION_QUERY_KEY)
        queryClient.setQueryData(CONVERSATION_QUERY_KEY, [
          ...cachedConversation,
          {
            from: 'USER',
            timestamp: new Date(),
            content,
          },
        ])
        // ['comments', serviceId, patientId, interactionStart]
      },
      onError: (err, nuevaAlerta, context: any) => {},
    }
  )
}

export default useAddMessageMutation
