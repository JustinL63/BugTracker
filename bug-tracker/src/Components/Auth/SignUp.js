import React, { Component } from 'react';

class SignUp extends Component {
    state = { 
        email: '',
        password: '',
        firstName: '',
        lastName: '',
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
                    <h2>Sign Up!</h2>
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
                    <div className='form-group'>
                        <div className='form-label'>First Name</div>
                        <input
                            type='text' 
                            name='firstName' 
                            placeholder='Please enter your First Name' 
                            onChange={this.onChangeHandler}/>
                    </div>
                    <div className='form-group'>
                        <div className='form-label'>Last Name</div>
                        <input
                            type='text' 
                            name='lastName' 
                            placeholder='Please enter your Last Name' 
                            onChange={this.onChangeHandler}/>
                    </div>
                    <button className='btn btn primary'>Log In</button>
                </form>
            </div>
        );
    }
}
 
export default SignUp;