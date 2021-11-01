import React from 'react'
import PropTypes from 'prop-types'
import BaseInputField from './BaseInputField'

const TextField = props => {
    return (
        <BaseInputField type="text" {...props}/>
    )
}

TextField.propTypes = {
    props: PropTypes.shape({}) 
}

export default TextField
