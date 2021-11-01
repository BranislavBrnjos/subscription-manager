import { getSubscriptions } from '../../request/get/getSubscriptions';
import { useQuery } from 'react-query';

const useFetchSubscriptions = () => {

    const result = useQuery('subscriptions', getSubscriptions);

    return result;
}

useFetchSubscriptions.propTypes = {

}

export default useFetchSubscriptions
