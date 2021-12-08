import React from 'react'
import './Body.css'
import List from '../ListItems/ListSongs';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Navbar from '../Navbar/Navbar';



function Body() {




    return (

        <div className="main__body">
            <Navbar></Navbar>
            
        
            <Router>
                <Switch>
                    <Route path='/'>
                        <List />
                    </Route>
                    <Route path='Long'>
                        <List />
                    </Route>
                </Switch>
            </Router>

        </div>
    )
}

export default Body
