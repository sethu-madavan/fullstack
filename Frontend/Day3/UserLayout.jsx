import React from 'react'
import Header from '../Header'
import Footer from '../Footer'
import { PropTypes } from 'prop-types';

const UserLayout = ({ component: Child }) => {
    return (
        <div>
            <Header />
            <Child />
            <Footer />  
        </div>
    )
}

UserLayout.propTypes = {
    component: PropTypes.element.isRequired
}



export default UserLayout