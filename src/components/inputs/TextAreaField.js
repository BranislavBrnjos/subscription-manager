import React from 'react'
import PropTypes from 'prop-types'
import InputContainer from './InputContainer'

const TextAreaField = (props) => {
    return (
        <InputContainer {...props}>
            <textarea className="c-input__field" name={props.name} id={props.name} {...props} {...props.field}/>
        </InputContainer>
    )
}

TextAreaField.propTypes = {
        props: PropTypes.shape({
        label: PropTypes.string,
        name: PropTypes.string,
        field: PropTypes.shape({}),
    })
}

export default TextAreaField
