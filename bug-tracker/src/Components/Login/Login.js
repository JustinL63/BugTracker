import React, {Component} from 'react'
import classes from './Login.module.css'
import LoginForm from './LoginForm'



class Login extends Component {

    render() {
        return(
          <div className={classes.Login}>
              <LoginForm/>
          </div>
        )
    }
}

export default Login