import React from 'react';
import {Navbar, Nav} from 'react-bootstrap'
import SignedInLinks from './SignedInLinks'
import SignedOutLinks from './SignedOutLinks'

const NavBar = () => {
    return(
        <Navbar bg="primary" variant="dark">
            <Nav.Link href='/'>Home</Nav.Link>
            <SignedInLinks/>
            <SignedOutLinks/>
        </Navbar>
    )
}

export default NavBar