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
            <div className=' flex justify-around p-4'>

                <div className='p-10 bg-white shadow-sm flex roundedborder border '>



                    <div class="w-full">
                        <label class="block uppercase tracking-wide text-xs font-bold mb-2" for="grid-state">
                            Song or artist
                        </label>
                        <div class="relative">
                            <select class="block appearance-none w-full  border border-gray-200 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white " id="grid-state">
                                <option>Songs</option>
                                <option>artist</option>

                            </select>
                            <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 ">
                                <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                            </div>
                        </div>
                    </div>






                </div>
                <div className='p-10 bg-white shadow-sm flex rounded border hover:bg-green-300'>
                <div class="w-full">
                        <label class="block uppercase tracking-wide  text-xs font-bold mb-2" for="grid-state">
                            Time
                        </label>
                        <div class="relative">
                            <select class="block appearance-none w-full border border-gray-200  py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white" id="grid-state">
                                <option>4 weeks</option>
                                <option>6 Month</option>
                                <option>All Time</option>

                            </select>
                            <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 ">
                                <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <hr />
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
