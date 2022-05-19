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
                <Navbar/>
                <div className="app-wrapper-content">
                    <Routes>
                        <Route path='/dialog' element={<Dialogs dialogs={props.dialogs} messages={props.messages}/>}/>
                        <Route path='/profile' element={<Profile profileInfo={props.profileInfo} myPostsInfo={props.myPostsInfo} myPosts={props.myPosts}/> }/>
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
