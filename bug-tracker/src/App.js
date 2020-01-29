import React from 'react';
import './App.css';
import Layout from "./HOC/Layout/Layout"
import {Route, Switch} from "react-router-dom"

function App() {
  return (
    <div className="App">
      <header className="App-header">
         <Layout>
            <Switch>
              <Route path="/bugcreator"/>
              <Route path="/openbugs"/>
              <Route path="/"/>
            </Switch>
         </Layout>
      </header>
    </div>
  );
}

export default App;
