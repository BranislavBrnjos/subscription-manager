import { getSubscriptionDetails } from '../../request/get/getSubscriptions';
import { useQuery } from 'react-query';

const useGetSubscriptionDetails = (id) => {
    const result = useQuery(['subscription', id], () => getSubscriptionDetails(id));

    return result;

}

useGetSubscriptionDetails.propTypes = {

}

export default useGetSubscriptionDetails
