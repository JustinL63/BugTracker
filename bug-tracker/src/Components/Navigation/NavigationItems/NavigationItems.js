import React from "react"
import NavigationItem from "../NavigationItem/NavigationItem"
import classes from "./NavigationItems.module.css"

const navigationItems = (props) => (
    <ul className={classes.NavigationItems}>
        <NavigationItem link="/bugcreator">Bug Creator</NavigationItem>
        <NavigationItem link="/openbugs">Open Bugs</NavigationItem>
        <NavigationItem link="/login">Log In</NavigationItem>
    </ul>
    
)

export default navigationItems