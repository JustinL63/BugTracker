import React, {Component} from 'react';
import {BrowserRouter} from 'react-router-dom'
import NavBar from './Components/Layout/Navbar'


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <NavBar/>
          <h1>Tutorial Project</h1>
        </div>
      </BrowserRouter>   
    );
  }
}

export default App;
