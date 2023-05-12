import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Main} from "./components/Main/Main";
import {MySkills} from "./components/MySkills/MySkills";
import {MyProjects} from "./components/MyProjects/MyProjects";
import {Contacts} from "./components/Contacts/Contacts";
import {Footer} from "./components/Footer/Footer";

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
