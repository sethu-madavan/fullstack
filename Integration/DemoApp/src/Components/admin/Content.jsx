import React, { useEffect, useState } from 'react'
import Plans from './Plans';
import Dashboard from '../Dashboard';
import UserDetails from './UserDetails';
import RechargeHistory from './RechargeHistory';
import OverAll from './OverAll';

const Content = ({ activeLink }) => {

    const [content, setContent] = useState(null);

    useEffect(() => {
        const map = {
            link1: <Dashboard/>,
            link2: <OverAll/>,
            link3: <RechargeHistory />,
            link4: <UserDetails />
        }
        setContent(map[activeLink]);
    }, [activeLink]);

    return (
        <div>
            {content}
        </div>
    )
}

export default Content