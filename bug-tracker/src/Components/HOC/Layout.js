import React from 'react'
import NavBar from '../Navigation/NavBar'
import Login from '../../Cotainers/Login/Login'
import Register from '../../Cotainers/Register/Register'
import Bugs from '../../Cotainers/Bugs/Bugs'

const Layout = (props) => {
    return (
        <div>
            <NavBar/>    
      <br/>
        <Register />
        <Login />
        <br/>
        <Bugs/>
      </div>
    )
}

export default Layout
