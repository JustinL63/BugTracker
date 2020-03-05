import React, {Component} from 'react'
import classes from './Login.module.css'


class LoginForm extends Component {
    //This file creates the LogIn Form to authenticate an established user
    constructor(props) {
        super(props)
        let isLoggedIn = false
            this.state = {
                user: {
                    email: '',
                    password: ''
                },
                isLoggedIn
            } 

            this.handleSubmit = this.handleSubmit.bind(this)
            this.handleChange = this.handleChange.bind(this)
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        this.setState({
            isLoggedIn: true
        })
        console.log(this.state.email +  ' ' + this.state.password + ' was submitted')
        event.preventDefault()
    }

    logInHandler = () => {
        this.setState({isLoggedIn: true})
    }


    render() {
        return(
          <div className={classes.LoginForm}>
                <h2>Please Log In</h2>
                    <form onSubmit={this.handleSubmit}>
                        <label>Email</label>
                        <input 
                            value={this.state.email}
                            onChange={this.handleChange}
                            type='email' 
                            placeholder='Email' 
                            name='email'/>
                            <br/>
                        <label>Password</label>
                        <input
                            value={this.state.password} 
                            onChange={this.handleChange}
                            type='password' 
                            placeholder='Password' 
                            name='password'/>
                            <br/>
                        <button onClick={this.handleSubmit}>Log In</button>
                    </form>
               
          </div>
        )
    }
}

export default LoginForm