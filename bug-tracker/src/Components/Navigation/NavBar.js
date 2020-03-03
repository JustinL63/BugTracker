import React from 'react'
import classes from './Navigation.module.css'
import SideDrawer from '../SideDrawer/SideDrawer'
import NavigationItem from './NavigationItem'

const NavBar = (props) => {
    return (
        <div className={classes.NavBar}>
            <ul>
                <SideDrawer/>
                <NavigationItem />
                <li>account</li>
            </ul>
        </div>
    )
}

export default NavBar