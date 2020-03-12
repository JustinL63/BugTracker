import React from 'react';
import {NavLink} from 'react-router-dom'

const SignedInLinks = () => {
    return(
        <ul style={{float: 'right'}}>
            <li><NavLink to='/create'>New Project</NavLink></li>
            <li><NavLink to='/'>Log Out</NavLink></li>
            <li><NavLink to='/'>Personal Info</NavLink></li>
        </ul>
    )

}

export default SignedInLinks