import React from 'react'
import Login from '../../Components/Login/Login'
import classes from './Layout.module.css'
import Modal from '../UI/Modal/Modal'
import Bugs from '../../Cotainers/Bugs/Bugs'

const Layout = (props) => {
    return (
      <div className={classes.Layout}>
        <Modal show={props.isLoggedIn}>
          <Login/>
        </Modal>
        <Bugs/>
      </div>
    )
}

export default Layout
