import React, {Component} from 'react'
import classes from './Bugs.module.css'

class Bugs extends Component {
    state = {
        bugName: '',
        bugDescrip: ''
    }


    render() {
        return (
            <div className={classes.Bug}>
                <label>Bug Name</label>
                <input type='text' placeholder='Bug Name'/>
                <label>Bug Description</label>
                <textarea type='text' placeholder='Please Describe the Bug'/>
            </div>
        )
    }
}

export default Bugs