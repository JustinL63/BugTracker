import React from "react"
import classes from "./NavigationItem.module.css"
import {NavLink} from "react-router-dom"

const navigationItem = (props) => (
    <li className={classes.NavigationItem}>
        <NavLink 
            //link to the selected page
            to={props.link}
            //exact path required
            exact
            //link will contain the props of the children
            >{props.children}</NavLink>
    </li>
)

export default navigationItem
