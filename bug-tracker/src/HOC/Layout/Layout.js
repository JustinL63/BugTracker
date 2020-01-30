import React, {Component} from "react"
import Aux from "../Auxillary/Auxillary"
import Toolbar from "../../Components/Navigation/Toolbar/Toolbar"
import BugCreator from "../../Components/Bugs/BugCreator/BugCreator"

class Layout extends Component {

//The Layout will contain the main items I want rendered to the home page shown in App.js

    render() {
        return(
            <Aux>
                <Toolbar />
                <h2>SideDrawer</h2>
                <BugCreator />
            </Aux>
        )
    }

}

export default Layout