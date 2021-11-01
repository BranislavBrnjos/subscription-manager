import React from 'react'
import PropTypes from 'prop-types'
import { Field, Form, Formik } from 'formik';
import TextField from './inputs/TextField';
import NumberField from './inputs/NumberField';
import SelectField from './inputs/SelectField';
import Button from './Button';
import TextAreaField from './inputs/TextAreaField';
import Error from './Error';

const frequencyOptions = ["Monthly", "Annual"];

const SubscriptionForm = ({onSubmit, validationSchema, initialValues, isSuccess, successMessage, isError}) => {

    if(isError) {
        return <Error />
    }

    return (
        <div className="c-subscription-form">
            <Formik 
                onSubmit={(values) => {
                    onSubmit(values)
                }}
                validationSchema={validationSchema}
                initialValues={initialValues}
                enableReinitialize
            >
                <Form>
                    <Field label="Subscription Name:" name="name" component={TextField}/>
                    <Field label="Subscription Price:" name="price" component={NumberField}/>
                    <Field label="Subscription Plan:" name="frequency" options={frequencyOptions} component={SelectField}/>
                    <Field label="Subscription Description:" name="description" component={TextAreaField}/>
                    <Button label="Submit" type="submit"/>
                </Form>
            </Formik>
            {isSuccess && <p className="c-subscription-form__success">{successMessage}</p>}
        </div>
    )
}

SubscriptionForm.propTypes = {
    onSubmit: PropTypes.func,
    validationSchema: PropTypes.shape({}),
    initialValues: PropTypes.shape({}),
    isSuccess: PropTypes.bool,
    successMessage: PropTypes.string,
    isError: PropTypes.bool,
}

export default SubscriptionForm
