import React from 'react'
import PropTypes from 'prop-types'
import Button from './Button'

const Pagination = ({isPreviousButtonDisabled, isNextButtonDisabled, onPreviousButtonClick, onNextButtonClick}) => {
    return (
        <div className="c-pagination">
            <Button label="Back" disabled={isPreviousButtonDisabled} onClick={onPreviousButtonClick}/>
            <Button label="Next" disabled={isNextButtonDisabled} onClick={onNextButtonClick}/>
        </div>
    )
}

Pagination.propTypes = {
    isPreviousButtonDisabled: PropTypes.bool,
    isNextButtonDisabled: PropTypes.bool,
    onPreviousButtonClick: PropTypes.func,
    onNextButtonClick: PropTypes.func,
}

export default Pagination
