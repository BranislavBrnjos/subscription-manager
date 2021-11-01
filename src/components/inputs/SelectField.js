import React from 'react'
import PropTypes from 'prop-types'
import InputContainer from './InputContainer'

const SelectField = (props) => {
    return (
        <InputContainer {...props}>
            <select className="c-input__field" name={props.name} id={props.name} {...props} {...props.field}>
                {props?.options.map((option) => {
                    return <option key={option} value={option}>{option}</option>
                })}
            </select>
        </InputContainer>
    )
}

SelectField.propTypes = {
    props: PropTypes.shape({
        name: PropTypes.string,
        field: PropTypes.shape({}),
        type: PropTypes.string,
        options: PropTypes.arrayOf([PropTypes.string])
    }),
}

export default SelectField
