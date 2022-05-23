import React from 'react';
import './App.css';
import Header from './Components/Header/Header.jsx';
import Navbar from './Components/Navbar/navbar.jsx';
import Dialogs from "./Components/Dialogs/Dialogs";
import Profile from './Components/Profile/Profile.jsx';
import News from "./Components/News/News";
import Music from "./Components/Music/Music";
import {Routes, Route, BrowserRouter as Router} from "react-router-dom";
const App = (props) => {


    return (
        <Router>
            <div className="app-wrapper">
                <Header/>
                <Navbar state={props.state.sideBarFriends.friends}/>
                <div className="app-wrapper-content">
                    <Routes>
                        <Route path='/dialog' element={<Dialogs state={props.state.messagesPage}/>}/>
                        <Route path='/profile' element={<Profile state={props.state.profilePage} addPost={props.addPost} newPostText={props.state.profilePage.propsNewText} updateNewPostText={props.updateNewPostText}/> }/>
                        <Route path='/news' element={<News/>}/>
                        <Route path='/music' element={<Music/>}/>
                    </Routes>
                    {/*<DialogItem />*/}
                </div>



            </div>
        </Router>
    )
}

export default App;
