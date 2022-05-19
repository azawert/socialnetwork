import React from "react";
import classes from './navbar.module.css'
import {NavLink} from "react-router-dom";


const Navbar = () => {
    return (
        <nav className={classes.nav}>
          <div className={classes.item}>
            <NavLink to="/profile" className={classList => classList.isActive? classes.active : classes.item}>Profile</NavLink>
          </div>
          <div className={classes.item}>
            <NavLink to="/dialog" className={classList => classList.isActive? classes.active : classes.item}>Messages</NavLink>
          </div>
          <div className={classes.item}>
            <NavLink to="/news" className={classList => classList.isActive? classes.active : classes.item}>News</NavLink>
          </div>
          <div className={classes.item}>
            <NavLink to="/music" className={classList => classList.isActive? classes.active : classes.item}>Music</NavLink>
          </div>
          <div className={classes.item}>
            <NavLink to="#s">Settings</NavLink>
          </div>
        </nav>

)}

export default Navbar;