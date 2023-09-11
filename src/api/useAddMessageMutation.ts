import { useMutation, UseMutationResult, useQueryClient } from 'react-query'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { Message } from './types'
import { getConversationQueryKey } from './useMessagesQuery'

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
        const key = getConversationQueryKey(pollId as string, phone as string)
        let cachedConversation =
          (queryClient.getQueryData(key) as Message[]) || []
        queryClient.cancelQueries(key)
        queryClient.setQueryData(key, [
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
