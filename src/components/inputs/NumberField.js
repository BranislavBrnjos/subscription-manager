import React from 'react'
import PropTypes from 'prop-types'
import BaseInputField from './BaseInputField'

const NumberField = props => {
    return (
        <BaseInputField type="number" {...props}/>
    )
}

NumberField.propTypes = {
    props: PropTypes.shape({}),
}

export default NumberField
