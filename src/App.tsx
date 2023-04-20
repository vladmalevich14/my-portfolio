import React from 'react';
import './App.css';
import {Header} from "./Components/Header/Header";
import {Main} from "./Components/Main/Main";
import {MySkills} from "./Components/MySkills/MySkills";
import {MyProjects} from "./Components/MyProjects/MyProjects";
import {Contacts} from "./Components/Contacts/Contacts";
import {Footer} from "./Components/Footer/Footer";

function App() {
    return <div className='App'>
        <Header/>
        <Main/>
        <MySkills/>
        <MyProjects/>
        <Contacts />
        <div className='separator'></div>
        <Footer />
    </div>
}

export default App;
