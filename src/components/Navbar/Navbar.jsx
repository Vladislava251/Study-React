import React from "react";
import { NavLink } from "react-router-dom";
import s from "./Navbar.module.css";

function Navbar() {
    return (
        <nav className={s.nav}>
            <div className={s.item}>
                <NavLink to="/profile" className={({ isActive }) => isActive ? s.activeLink : ''}>Profile</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/dialogs" className={({ isActive }) => isActive ? s.activeLink : ''}>Message</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/users" className={({ isActive }) => isActive ? s.activeLink : ''}>Users</NavLink>
            </div>
            {/* <div className={s.item}>
                <NavLink to="#s" className={({ isActive }) => isActive ? s.activeLink : ''}>News</NavLink>
            </div>
            <div className={s.item}>
            <NavLink to="#s" className={({ isActive }) => isActive ? s.activeLink : ''}>Music</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="#s" className={({ isActive }) => isActive ? s.activeLink : ''}>Settings</NavLink>
            </div> */}
        </nav>
    );
}

export default Navbar;