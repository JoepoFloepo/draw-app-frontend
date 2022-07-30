import React from 'react';
import {NavLink} from "react-router-dom";
import classes from "./NavBar.module.css"
import logo from "../../assets/img.png"
import earth from "../../assets/img_1.png"

const NavBar = () => {

    return (
        <nav className={classes.navBar}>
            <div className={classes.container}>
                <NavLink className={classes.logoLink} activeClassName={classes.active} to="/main">
                    <img src={logo}
                         className={classes.logo}
                         alt="Draw App logo"/>
                    <p className={classes.logoText}>Drawing website</p>
                </NavLink>
                <ul className={classes.navList}>{/*TODO should not be sticky but hidden unless opened*/}
                    {/*TODO find a better name for main*/}

                    <li>
                        <img src={earth} className={classes.icon} alt="Earth"/>
                        <NavLink activeClassName={classes.active} className={classes.navLink}
                                 to="/compositions">Compositions</NavLink>
                    </li>
                    <li><NavLink activeClassName={classes.active} className={classes.navLink}
                                 to="/profile">Profile</NavLink></li>

                </ul>
            </div>
        </nav>
    );
};

export default NavBar;