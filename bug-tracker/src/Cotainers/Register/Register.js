import React, {Component} from 'react'
import classes from './Register.module.css'

class Register extends Component {
    state = {
        NewPerson: {
            firstName: '',
            lastName: '',
            email: '',
            password: ''
        }
    }


    render() {
        return(
            <div className={classes.Register}>
                <label>First Name</label>
                <input type='text' name='firstName' placeholder='First Name'></input>
                    <br/>
                <label>Last Name</label>
                <input type='text' name='lastName' placeholder='Last Name'></input>
                    <br/>
                <label>Email</label>
                <input type='email' name='email' placeholder='Email'></input>
                    <br/>
                <label>Password</label>
                <input type='password' name='password' placeholder='Password'></input>
                    <br/>
                <button>Submit</button>    
            </div>
        )
    }
}

export default Register