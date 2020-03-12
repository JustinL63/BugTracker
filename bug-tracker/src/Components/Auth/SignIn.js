import React, {Component} from 'react';

class SignIn extends Component {
    state = { 
        email: '',
        password: ''
     }

    onChangeHandler = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    onSubmitHandler = (event) => {
        event.preventDefault()
        console.log(this.state)
    }


    render() { 
        return ( 
            <div className='container'>
                <form className='form' onSubmit={this.onSubmitHandler}>
                <h2>Sign In!</h2>
                    <div className='form-group'>
                        <div className='form-label'>Email</div>
                        <input
                            type='email' 
                            name='email' 
                            placeholder='Please enter your email' 
                            onChange={this.onChangeHandler}/>
                    </div>
                    <div className='form-group'>
                        <div className='form-label'>Password</div>
                        <input
                            type='password' 
                            name='password' 
                            placeholder='Please enter your password' 
                            onChange={this.onChangeHandler}/>
                    </div>
                    <button className='btn btn primary'>Log In</button>
                </form>
            </div>
        );
    }
}
 
export default SignIn;