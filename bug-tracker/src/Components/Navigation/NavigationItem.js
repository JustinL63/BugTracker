import React from 'react'
import classes from './Navigation.module.css'

const NavigationItem = (props) => {
    return (
        <div className={classes.NavigationItem}>
            <li>link 1</li>
            <li>link 2</li>
        </div>
    )
}

export default NavigationItem