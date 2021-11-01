import React from 'react'
import PropTypes from 'prop-types'

const Button = ({onClick, type="button", label, disabled, className}) => {
    return (
        <button className={`c-button ${className || ''}`}onClick={onClick} type={type} disabled={disabled}>
           {label} 
        </button>
    )
}

Button.propTypes = {
    onClick: PropTypes.func,
    label: PropTypes.string,
    type: PropTypes.string,
    disabled: PropTypes.bool,
    className: PropTypes.string,
}

export default Button
