import React, { useState } from 'react'
import Sidebar from './Sidebar'
import Content from './Content';

const MainComp = () => {

    const [activeLink, setActiveLink] = useState("link1");

    return (
        <div className='flex'>
            <Sidebar setActiveLink={setActiveLink}/>
            <Content activeLink={activeLink} />
        </div>
    )
}

export default MainComp