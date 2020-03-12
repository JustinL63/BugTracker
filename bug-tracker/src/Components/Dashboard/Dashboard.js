import React, {Component} from 'react';
import Notifactions from '../Dashboard/Notifications'
import ProjectList from '../Projects/ProjectList'


class Dashboard extends Component {
    state = {  }
    render() { 
        return ( 
            <div className='container'>
                <div className='row'>
                <div className="col-sm-6"><ProjectList/></div>
                <div className="col-sm-6"><Notifactions/></div>
                </div>
            </div>
         )
    }
}
 
export default Dashboard;