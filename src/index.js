import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

let dialogs = [
  {id: 1, name: "Dimych"},
  {id: 2, name: "Andrew"},
  {id: 3, name: "Sveta"},
  {id: 4, name: "Sasha"},
  {id: 5, name: "Victor"},
  {id: 6, name: "Valera"}
];

let messages = [
  {id: 1, message: "Hi"},
  {id: 1, message: "How is your IT-Kamasutra?"},
  {id: 1, message: "Yo"},
  {id: 1, message: "Yo"},
  {id: 1, message: "Yo"}
];

let posts = [
  {id: 1, message: "Hi, how are you?", count: 15},
  {id: 2, message: "It's my first post.", count: 20}
];

ReactDOM.render(
  <React.StrictMode>
    <App dialogs={dialogs} 
         messages={messages}
         posts={posts}/>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
