import React, {Component} from 'react';

class CreateProject extends Component {
    state = { 
        title: '',
        content: ''
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
                <h2>Create Project</h2>
                    <div className='form-group'>
                        <div className='form-label'>Title</div>
                        <input
                            type='text' 
                            name='title' 
                            placeholder='Please enter your title' 
                            onChange={this.onChangeHandler}/>
                    </div>
                    <div className='form-group'>
                        <div className='form-label'>Content</div>
                        <input
                            type='textarea' 
                            name='content' 
                            placeholder='Please enter your content' 
                            onChange={this.onChangeHandler}/>
                    </div>
                    <button className='btn btn primary'>Add Project</button>
                </form>
            </div>
        );
    }
}
 
export default CreateProject;