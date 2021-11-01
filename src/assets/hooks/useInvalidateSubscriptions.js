import { useQueryClient } from "react-query"

export const useInvalidateSubscriptions = () => {
    const queryClient = useQueryClient()

    const invalidateSubscriptions = () => {
        queryClient.invalidateQueries('subscriptions')
    }

    return invalidateSubscriptions;
}