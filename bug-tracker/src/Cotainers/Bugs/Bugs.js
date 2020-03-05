import React, {Component} from 'react'
import classes from './Bugs.module.css'

class Bugs extends Component {

    constructor() {
        super()
        this.state = {
            bugName: '',
            bugDescrip: ''
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }


    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
        console.log(this.state.bugName)
    }

    handleSubmit = () => {
        console.log(this.state.bugName)
        console.log(this.state.bugDescrip)
    }


    render() {
        return (
            <div className={classes.Bug}>
                <form>
                    <label>Bug Name</label>
                    <input
                        name='bugName'
                        onChange={this.handleChange}
                        value={this.state.value} 
                        type='text' 
                        placeholder='Bug Name'/>
                    <br/>
                    <label>Bug Description</label>
                    <textarea
                        name='bugDescrip'
                        onChange={this.handleChange}
                        value={this.state.value} 
                        type='text' 
                        placeholder='Please Describe the Bug'/>
                    <br/>
                    <button onClick={this.handleSubmit}>Submit the Bug!</button>
                </form>
            </div>
        )
    }
}

export default Bugs