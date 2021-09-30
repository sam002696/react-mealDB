import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import About from '../Paths/About';
import Home from '../Paths/Home';
import Meals from '../Paths/Meals';
import NotFound from '../Paths/NotFound';

const Header = () => {
    return (
        <Router>
            <nav className=" bg-gray-700 flex items-center justify-between flex-wrap bg-teal-500 p-6">
                <div className="flex items-center flex-shrink-0 text-white mr-6">
                    <svg className="fill-current h-8 w-8 mr-2" width="54" height="54" viewBox="0 0 54 54" xmlns="http://www.w3.org/2000/svg"><path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z" /></svg>
                    <span className="font-serif lg:flex-grow text-2xl">MEAL Database</span>
                </div>
                <div className="block lg:hidden">
                    <button className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
                        <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" /></svg>
                    </button>
                </div>
                <div className="w-full block flex-grow-0 lg:flex lg:items-center lg:w-auto">
                    <div className="font-serif lg:flex-grow text-2xl">
                        <Link to='/home' className=" text-white block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
                            Home
                        </Link>
                        <Link to='/meal' className=" text-white block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
                            Meals
                        </Link>
                        <Link to='/about' className=" text-white block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white">
                            About
                        </Link>
                    </div>
                </div>
            </nav>

            {/* A <Switch> looks through its children <Route>s and
        renders the first one that matches the current URL. */}
            <Switch>
                <Route path="/about">
                    <About></About>
                </Route>
                <Route path="/home">
                    <Home></Home>
                </Route>
                <Route path="/meal/:mealId">
                    <Meals></Meals>
                </Route>
                <Route exact path="/meal">
                    <Meals></Meals>
                </Route>
                <Route exact path="/">
                    <Home></Home>
                </Route>
                <Route path="/*">
                    <NotFound></NotFound>
                </Route>
            </Switch>

        </Router>
    );
};

export default Header;