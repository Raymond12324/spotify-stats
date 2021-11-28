import React from 'react'
import './Body.css'
import List from './ListSongs'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import { useDataLayerValue } from "../ContextApi/DataLayer";

function Body() {

    


    return (
        
        <div className="main__body">
            <h1>Spotify App</h1>
            <br/>
            <hr/>
            <Router>
                <Switch>
                    <Route path='/'>
                        <List/>
                    </Route>
                    <Route path='Long'>
                        <List/>
                    </Route>
                </Switch>
            </Router>
                    
        </div>
    )
}

export default Body
