import React from 'react'
import PropTypes from 'prop-types'
import Loader from "react-loader-spinner";

const PageLoader = ({isLoading}) => {

    if(!isLoading) {
        return null;
    }

    return (
        <div className="c-page-loader">
            <Loader 
                type="Puff"
                color="#00BFFF"
                height={100}
                width={100}
            />
        </div>
    )
}

PageLoader.propTypes = {
    isLoading: PropTypes.bool,
}

export default PageLoader
