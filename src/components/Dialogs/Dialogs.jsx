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
    <div className={s.message}>{props.message}</div>
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
                <Routes>
                    <Route path="/dialogs/1" element={<Message message="Hi" />} />
                    <Route path="/dialogs/2" element={<Message message="How is your IT-Kamasutra?" />} />
                    <Route path="/dialogs/3" element={<Message message="Yo" />} />
                    <Route path="/dialogs/4" element={<Message message="Yo" />} />
                    <Route path="/dialogs/5" element={<Message message="Yo" />} />
                    <Route path="/dialogs/6" element={<Message message="Yo" />} />
                </Routes>
            </div>
        </div>
    );
}

export default Dialogs;