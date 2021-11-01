import React from 'react'
import PropTypes from 'prop-types'
import { ErrorMessage } from 'formik'

const InputContainer = ({label, field, children}) => {
    return (
        <div className="c-input">
            <label className="c-input__label" htmlFor={field.name}>
                {label}
            </label>
            {children}
            <ErrorMessage name={field.name}>
                {(errorMessage) => (
                    <span className="c-input__error">{errorMessage}</span>
                )}
            </ErrorMessage>
        </div>
    )
}

InputContainer.propTypes = {
    label: PropTypes.string,
    field: PropTypes.shape({}),
}

export default InputContainer
