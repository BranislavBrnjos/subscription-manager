import React from 'react'
import PageLoader from '../components/PageLoader';
import Error from '../components/Error';
import SubscriptionsTable from '../components/SubscriptionsTable';
import Total from '../components/Total';
import useFetchSubscriptions from '../assets/hooks/useFetchSubscriptions';
import Button from '../components/Button';
import { CREATE_SUBSCRIPTION } from '../assets/constants/pages';
import { useHistory } from 'react-router';

const AllSubscriptions = () => {
    const {data, isLoading, isError} = useFetchSubscriptions();
    const history = useHistory();

    if(isError) {
        return <Error />
    }    

    if(isLoading) {
        return <PageLoader isLoading={isLoading}/>
    }

    return (
        <div>
            <SubscriptionsTable tableData={data?.data?.subscriptions}/>
            <Button label="Create New Subscription" onClick={() => history.push(CREATE_SUBSCRIPTION)} />
            <Total data={data?.data?.subscriptions} />
           
        </div>
    )
}


export default AllSubscriptions
