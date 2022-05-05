import React from 'react';
import './App.css';
import Header from './Components/Header/Header.jsx';
import Navbar from './Components/Navbar/navbar.jsx';
import Dialogs from "./Components/Dialogs/Dialogs";
import Profile from './Components/Profile/Profile.jsx';
import News from "./Components/News/News";
import Music from "./Components/Music/Music";
import {Routes, Route, BrowserRouter as Router} from "react-router-dom";

const App = () => {
    return (
        <Router>
            <div className="app-wrapper">

                <Header/>
                <Navbar/>
                <div className="app-wrapper-content">
                    <Routes>
                        <Route path='/dialogs' element={<Dialogs/>}/>
                        <Route path='/profile' element={<Profile/>}/>
                        <Route path='/news' element={<News/>}/>
                        <Route path='/music' element={<Music/>}/>
                    </Routes>
                    {/*<Dialogs />*/}
                </div>

                {/*<Profile name="Igor B" date="Date of birth: 01.10.98" city = "City: Moscow" />*/}

            </div>
        </Router>
    )
}

export default App;
