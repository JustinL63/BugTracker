import React, { Component } from "react"
import classes from "./BugCreator.module.css"

class BugCreator extends Component {
    state = {
        bug: {
            title: "",
            description: "",
            assignedTo: {
                elementType: "select",
                elementConfig: {
                   options: [
                       {value: "justin", displayValue: "Justin"},
                       {value: "john", displayValue: "John"}
                   ]
                },

            },
           
        }
    }

    onSubmitHandler = (event)=> {
       alert("A name was submitted " + this.state.value)
       event.preventDefault()
    }

    onChangeHandler = (event) => {
        this.setState({value: event.target.value})

    }

    render() {
        return (
            <div className={classes.BugCreator}>
                <form>
                    <label>Title of Bug</label>
                        <input 
                            type="text" 
                            name="title" placeholder="title"
                            value={this.state.value} 
                            onChange={this.onChangeHandler}></input>
                        <br/>
                    <label>Description of Bug</label>
                        <textarea type="text" 
                            name="description" 
                            placeholder="description"
                            value={this.state.value} 
                            onChange={this.onChangeHandler}></textarea>
                        <br/>
                    <label>Assigned To</label>
                        <select>
                            <option value="justin">Justin</option>
                            <option value="john">John</option>
                            <option value="consuela">Consuela</option>
                        </select>
                        <br/>
                    <button onClick={this.onSubmitHandler}>Submit</button>
                </form>
            </div>
        )
    }
}

export default BugCreator