
import { useMutation } from 'react-query';
import { deleteSubscription } from '../../request/delete/deleteSubscription';
import { useInvalidateSubscriptions } from './useInvalidateSubscriptions';

const useDeleteSubscription = () => {
    const invalidateSubscriptions = useInvalidateSubscriptions();

    const result = useMutation((param) => deleteSubscription(param), {
        onSuccess: () => invalidateSubscriptions(),
    })

    return result;
}

export default useDeleteSubscription



