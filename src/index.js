import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
let dialogs = [
    {id: 1, name: "Igor"},
    {id: 2, name: "Alex"},
    {id: 3, name: 'Robert'},
    {id: 4, name: 'Katya'},
    {id: 5, name: 'Priscilla'}
]
let messages = [
    {id: 1, message: "hi"},
    {id: 2, message: 'hello'},
    {id: 3, message: 'there'}
]
let profileInfo = [
    {name:'Igor',city:'Moscow',dateOfBirth:'01.10.98',avatar:'https://download-cs.net/steam/avatars/3426.jpg'}
]
let myPostsInfo = [
    {text:'My posts on the wall'}
]
let myPosts = [
    {message:'hi',likesCount:23,avatar:'https://download-cs.net/steam/avatars/3426.jpg'},
    {message:'how are you?',likesCount: 12,avatar:'https://download-cs.net/steam/avatars/3426.jpg'}
]

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App dialogs={dialogs} messages={messages} profileInfo={profileInfo} myPostsInfo={myPostsInfo} myPosts={myPosts}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
