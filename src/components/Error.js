import React from 'react'
import PropTypes from 'prop-types'

const Error = ({errorMessage}) => {

    return (
        <div>
            <p>{errorMessage || "Something went wrong"}</p>
        </div>
    )
}

Error.propTypes = {
    errorMessage: PropTypes.string,
}

export default Error
