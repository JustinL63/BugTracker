import React from 'react';
import './App.css';
import Layout from "./HOC/Layout/Layout"
import {Route, Switch} from "react-router-dom"
import BugCreator from "./Components/Bugs/BugCreator/BugCreator"
import LogIn from "./Components/LogIn/LogIn"

function App() {
  return (
    <div className="App">
      <header className="App-header">
         <Layout>
            <Switch>
              <Route path="/bugcreator" component={BugCreator}/>
              <Route path="/login" component={LogIn}/>
              <Route path="/bugs"/>
              <Route path="/"/>
            </Switch>
         </Layout>
      </header>
    </div>
  );
}

export default App;
