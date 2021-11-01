
import { useMutation } from 'react-query';
import { editSubscription } from '../../request/update/updateSubscription';
import { useInvalidateSubscriptions } from './useInvalidateSubscriptions';

const useEditSubscription = () => {
    const invalidateSubscriptions = useInvalidateSubscriptions();

    const result = useMutation((param) => editSubscription(param), {
        onSuccess: () => invalidateSubscriptions(),
    })

    return result;

}

export default useEditSubscription;



