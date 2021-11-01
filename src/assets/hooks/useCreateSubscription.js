
import { useMutation } from 'react-query';
import { postSubscription } from '../../request/post/postSubscription';
import { useInvalidateSubscriptions } from './useInvalidateSubscriptions';

const useCreateSubscription = () => {
    const invalidateSubscriptions = useInvalidateSubscriptions();

    const result = useMutation((param) => postSubscription(param), {
        onSuccess: () => invalidateSubscriptions(),
    })

    return result;

}

export default useCreateSubscription



