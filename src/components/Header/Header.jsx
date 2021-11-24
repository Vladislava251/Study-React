import React from "react";
import s from "./Header.module.css";

function Header() {
    return (
        <header className={s.header}>
            <img alt="logo" src="https://icon-library.com/images/icon-logo-design/icon-logo-design-4.jpg"></img>
        </header>
    );
}

export default Header;