import React from "react"
import classes from "./BugCreator.module.css"
import { useForm } from "react-hook-form"
import axios from "../../../Axios-Instance"

const BugCreator = (props) => {

    const { register, handleSubmit } = useForm()
    const onSubmit = data => axios.post("/bugs.json", data)

    return (
        <div className={classes.BugCreator}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label>Title</label>
                    <input type="text" placeholder="Title" name="title" ref={register} />
                    <br/>
                <label>Description</label>
                    <textarea type="text" placeholder="Title" name="description" ref={register} />
                    <br/>
                <label>Assigned To:</label>
                    <select name="assignedTo" ref={register}>
                        <option value="Tom">Tom</option>
                        <option value="Dick">Dick</option>
                        <option value="Harry">Harry</option>
                    </select>
                    <br/>
                <button onClick={onSubmit}>Submit that effing bug!!</button>
            </form>
        </div>
    )
}


export default BugCreator