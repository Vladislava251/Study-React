import React from "react";
import { NavLink, Routes, Route, BrowserRouter } from "react-router-dom";
import s from "./Dialogs.module.css";

const DialogItem = (props) => {
    return (
        <div className={s.dialog + ' ' + s.active}>
            <NavLink to={`/dialogs/${props.id}`}>{props.name}</NavLink>
        </div>
    );
};

const Message = (props) => {
    return <div className={s.message}>{props.message}</div>;
};

function Dialogs(props) {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem name="Dimych" id="1" />
                <DialogItem name="Andrew" id="2" />
                <DialogItem name="Sveta" id="3" />
                <DialogItem name="Sasha" id="4" />
                <DialogItem name="Victor" id="5" />
                <DialogItem name="Valera" id="6" />
            </div>
            <div className={s.messages}>
                <Message message="Hi" />
                <Message message="How is your IT-Kamasutra?" />
                <Message message="Yo" />
                <Message message="Yo" />
                <Message message="Yo" />
                <Message message="Yo" />
            </div>
        </div>
    );
}

export default Dialogs;