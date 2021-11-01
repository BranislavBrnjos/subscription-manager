import React from 'react'
import { useHistory, useLocation } from 'react-router-dom'
import { HOME_PAGE, PAGE_NAMES } from '../assets/constants/pages'

import Button from './Button'

const Breadcrumbs = () => {
    const location = useLocation();
    const {pathname} = location;
    const subpage = PAGE_NAMES[pathname];
    const history = useHistory();


    return (
        <div className="c-breadcrumbs">
            <Button label="Home" onClick={() => {
                history.push(HOME_PAGE)
            }} />

            {subpage && <Button disabled label={subpage} />}
        </div>
    )
}

Breadcrumbs.propTypes = {

}

export default Breadcrumbs
