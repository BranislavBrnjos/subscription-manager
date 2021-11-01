import React from 'react'
import { isEmpty } from 'lodash-es';

const Total = ({data}) => {

    const calculateExpanses = (subscriptions, type) => {
        if(subscriptions) {
            const reducer = (previousValue, currentValue) => previousValue + currentValue;

            const subscriptionsByType = subscriptions.filter((item) => {return item.frequency === type});
            
            if(isEmpty(subscriptionsByType)) {
                return 0;
            }

            const subscriptionsByTypePrices = subscriptionsByType.map((item) => item?.price);
            const subscriptionByTypeExpenses = subscriptionsByTypePrices.reduce(reducer);

            return subscriptionByTypeExpenses;
        }
    }

    return (
        <div className="c-total">
            <p>Total Annually: $ {calculateExpanses(data, 'Annual')}</p>
            <p>Total Monthly: $ {calculateExpanses(data, 'Monthly')}</p>
        </div>
    )
}

Total.propTypes = {

}

export default Total
