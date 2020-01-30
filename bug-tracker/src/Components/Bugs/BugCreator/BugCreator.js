import React, { Component } from "react"
import classes from "./BugCreator.module.css"

class BugCreator extends Component {
    state = {
        bug: {
            title: {
                elementType: "input",
                elementConfig: {
                    type: "text",
                    placeholder: "Please Name Your Bug"
                },
                value: "",
                validation: {
                    required: true
                }
            },
            Description: {
                elementType: "input",
                elementConfig: {
                    type: "text",
                    placeholder: "Give a description of the problem"
                },
                value: "",
                validation: {
                    required: true
                }
            },
            assignedTo: {
                elementType: "select",
                elementConfig: {
                   options: [
                       {value: "justin", displayValue: "Justin"},
                       {value: "john", displayValue: "John"}
                   ]
                },
                value: "",
                validation: {
                    required: true
                }
            },
           
        }
    }

    onSubmitHandler = (event)=> {
        this.setState({name: event.target.value})
        console.log(this.state.name)
    }

    onChangeHandler = (event) => {
        this.setState({name: event.target.value})

    }

    render() {
        return (
            <div className={classes.BugCreator}>
                <form>
                    <label>Title of Bug</label>
                        <input type="text" name="title" placeholder="title" onChange={this.onChangeHandler}></input>
                        <br/>
                    <label>Description of Bug</label>
                        <input type="textarea" name="description" placeholder="description" onChange={this.onChangeHandler}></input>
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