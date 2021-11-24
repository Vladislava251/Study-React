import React from "react";
import s from "./Header.module.css";
import { NavLink } from 'react-router-dom';

function Header() {
    return (
        <header className={s.header}>
            <NavLink to="/"><img alt="logo" src="https://icon-library.com/images/icon-logo-design/icon-logo-design-4.jpg"></img></NavLink>
        </header>
    );
}

export default Header;