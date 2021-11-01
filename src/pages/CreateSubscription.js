import React from 'react'
import PageLoader from '../components/PageLoader'
import useCreateSubscription from '../assets/hooks/useCreateSubscription'
import { subscriptionSchema } from '../assets/schema/subscriptionSchema'
import SubscriptionForm from '../components/SubscriptionForm'

const CreateSubscription = props => {

    const createSubscription = useCreateSubscription();

    return (
        <div className="c-subscription-form-wrap">
            <h1>Create a subscription</h1>
            <SubscriptionForm 
                onSubmit={(values) => createSubscription.mutate(values)}
                isLoading={createSubscription.isLoading}
                initialValues={{name: '', price: '', frequency: 'Monthly', description: ''}}
                validationSchema={subscriptionSchema}
                isSuccess={createSubscription.isSuccess}
                successMessage="You have created a new Subscription Successfully"
                isError={createSubscription.isError}
            />
            <PageLoader isLoading={createSubscription.isLoading}/>
        </div>
    )
}

CreateSubscription.propTypes = {

}

export default CreateSubscription
