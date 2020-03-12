import React, {Component} from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import NavBar from './Components/Layout/Navbar'
import Dashboard from '../src/Components/Dashboard/Dashboard'
import ProjectDetails from './Components/Projects/ProjectDetails'
import SignIn from './Components/Auth/SignIn'
import SignUp from './Components/Auth/SignUp'
import CreateProject from './Components/Projects/CreateProject'


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className='App'>
          <NavBar/>
          <Switch>
            <Route path='/' exact component={Dashboard}/>
            <Route path='/signin' component={SignIn}/>
            <Route path='/signup' component={SignUp}/>
            <Route path='/create' component={CreateProject}/>
            <Route path='/project/:id' component={ProjectDetails}/>
          </Switch>
        </div>
      </BrowserRouter>   
    );
  }
}

export default App;
