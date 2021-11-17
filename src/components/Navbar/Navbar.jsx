import React from "react";
import { NavLink } from "react-router-dom";
import s from "./Navbar.module.css";

function Navbar() {
    return (
        <nav className={s.nav}>
            <div className={s.item}>
                <NavLink exact to="/profile" activeClassName={s.activeLink}>Profile</NavLink>
            </div>
            <div className={s.item}>
                <NavLink exact to="/dialogs" activeClassName={s.activeLink}>Message</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="#s">News</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="#s">Music</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="#s">Settings</NavLink>
            </div>
        </nav>
    );
}

export default Navbar;