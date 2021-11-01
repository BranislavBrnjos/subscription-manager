import React from 'react'
import { useGetQueryParams } from '../assets/hooks/useGetQueryParams';
import PageLoader from '../components/PageLoader';
import { isEmpty } from 'lodash-es';
import Error from '../components/Error';
import useGetSubscriptionDetails from '../assets/hooks/useGetSubscriptionDetails';

const SubscriptionDetails = () => {
    const {id} = useGetQueryParams();
    const {data, isLoading, isError} = useGetSubscriptionDetails(id);

    if(isLoading) {
        return <PageLoader isLoading={isLoading}/>
    }

    const subscription = data?.data?.subscription;

    if(isEmpty(subscription) || isError) {
        return <Error errorMessage="Something went wrong. It might had to do with refreshing the page. Please go back to home page, and select which Subscription you would like to view." />
    }

    const subscriptionKeys = Object.keys(subscription);

    return (
       <ul className="c-subscription-details">
           {subscriptionKeys.map((key) => {
               return <li className="c-subscription-details__item" key={key}><span>{`${key}:`}</span> <span>{subscription[key] || '-'}</span></li>
           })}
       </ul>
    )
}

export default SubscriptionDetails
