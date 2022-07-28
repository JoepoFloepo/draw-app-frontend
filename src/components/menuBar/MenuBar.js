import React from 'react';
import {NavLink} from "react-router-dom";
import classes from "./MenuBar.module.css"


const MenuBar = () => {

    return (
        <header className={classes.menubar}>
            <nav>
                <ul>
                    {/*TODO should not be sticky but hidden unless opened*/}
                    {/*TODO find a better name for main*/}
                    <li><NavLink activeClassName={classes.active} to="/main">Main</NavLink></li>
                    <li><NavLink activeClassName={classes.active} to="/compositions">Compositions</NavLink></li>
                    <li><NavLink activeClassName={classes.active} to="/profile">Profile</NavLink></li>
                    <li><NavLink activeClassName={classes.active} to="/login">Login</NavLink></li>
                    <li><NavLink activeClassName={classes.active} to="/register">Register</NavLink></li>
                </ul>
            </nav>
        </header>
    );
};

export default MenuBar;