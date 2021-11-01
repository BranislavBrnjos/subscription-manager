import React, { useEffect, useState } from 'react'

import { useGetQueryParams } from '../assets/hooks/useGetQueryParams'
import useEditSubscription from '../assets/hooks/useEditSubscription'
import PageLoader from '../components/PageLoader'
import useGetSubscriptionDetails from '../assets/hooks/useGetSubscriptionDetails'
import { subscriptionSchema } from '../assets/schema/subscriptionSchema'
import { useHistory } from 'react-router'
import { HOME_PAGE } from '../assets/constants/pages'
import SubscriptionForm from '../components/SubscriptionForm'
import Error from '../components/Error'

const EditSubscription = () => {
    const {id} = useGetQueryParams();
    const {data, isLoading, isError} = useGetSubscriptionDetails(id);
    const [initialValues, setInitialValues] = useState({name: '', price: '', frequency: 'Monthly', description: ''});
    const editSubscription = useEditSubscription();
    const subscription = data?.data?.subscription;
    const history = useHistory();
    
    
    useEffect(() => {
        if(!id) {
            history.push(HOME_PAGE)
        }
    }, [history, id])

    useEffect(() => {    
        if(subscription) {
            const {name, price, frequency, description} = subscription;

            setInitialValues({name, price, frequency, description})
        }
    }, [subscription])

    if(isError) {
        return <Error errorMessage="Something went wrong. It might had to do with refreshing the page. Please go back to home page, and select which Subscription you would like to edit." />
    }

    return (
        <div className="c-subscription-form-wrap">
            <h1>Edit a subscription</h1>
                <SubscriptionForm 
                    onSubmit={(values) => {
                        const data = {values, id: id};
                            editSubscription.mutate(data)
                    }}
                    isLoading={editSubscription.isLoading}
                    initialValues={initialValues}
                    validationSchema={subscriptionSchema}
                    isSuccess={editSubscription.isSuccess}
                    successMessage="You have edited a Subscription Successfully"
                    isError={editSubscription.isError}
                />
            <PageLoader isLoading={editSubscription.isLoading || isLoading}/>
        </div>
    )
}

EditSubscription.propTypes = {

}

export default EditSubscription
