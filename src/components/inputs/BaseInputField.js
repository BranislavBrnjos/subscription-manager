import React from 'react'
import PropTypes from 'prop-types'
import InputContainer from './InputContainer'

const BaseInputField = (props) => {
    return (
        <InputContainer {...props}>
            <input className="c-input__field" type={props.type} name={props.name} id={props.name} {...props.field}/>
        </InputContainer>
    )
}

BaseInputField.propTypes = {
    props: PropTypes.shape({
        label: PropTypes.string,
        name: PropTypes.string,
        field: PropTypes.shape({}),
        type: PropTypes.string,
    }),
}

export default BaseInputField
