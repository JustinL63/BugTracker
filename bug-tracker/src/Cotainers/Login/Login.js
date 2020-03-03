import React, {Component} from 'react'
import classes from './Login.module.css'


class Login extends Component {
    
    state= {
        isLoggedIn: false,
        Person: {
            name: '',
            password: ''
        }
    }

    loginHandler = () => {
       this.setState(prevState => ({
           isLoggedIn: !prevState.isLoggedIn
       }))
    }
    
    handleChange = (event) => {
        this.setState({[event.target.name]: event.target.value})
    }

    handleSubmit = (event) => {
        alert('A name was submitted: ' + this.state.value)
    }

    

    render() {
    
        const logState = this.state.isLoggedIn ? <p>In</p> : <p>Out</p>
        console.log('before return')
        return(
            <div className={classes.Login}>
                <label>name/email</label>
                    <input 
                        type='text'
                        name='email' 
                        placeholder='name/email'
                        onChange={this.handleChange}
                        value={this.state.value}></input>
                    <br/>
                <label>password</label>
                    <input
                        type='password'
                        name='password' 
                        placeholder='password'
                        onChange={this.handleChange}
                        value={this.state.value}></input>
        <button onClick={this.loginHandler}>Log {logState}</button>
            </div>
        )
    }
}

export default Login