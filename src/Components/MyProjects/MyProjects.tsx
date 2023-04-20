import React from 'react';
import {Project} from "./Project/Project";
import styles from './MyProjects.module.css'
import {Title} from "../common/Title/Title";
import todolist from "../assets/img/todolist.png"
import social from "../assets/img/social-network.png"
import counter from "../assets/img/counter.png"
import bgSkills from "../assets/img/bgSkills.jpg";

export type backgroundImgType = {
    backgroundImage: string
}

export const MyProjects = () => {

    const bgMySkills = {
        backgroundImage: `url(${bgSkills})`
    }

    const socialImg: backgroundImgType = {
        backgroundImage: `url(${social})`
    }

    const counterImg: backgroundImgType = {
        backgroundImage: `url(${counter})`
    }

    const todolistImg: backgroundImgType = {
        backgroundImage: `url(${todolist})`
    }

    return <div className={styles.mainBlock} style={bgMySkills}>
        <div className={styles.mainContainer}>
            <Title title={'My projects'} description={'VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK'}/>
            <div className={styles.projectsContainer}>
                <Project style={socialImg} title={'Social Network'}/>
                <Project style={counterImg} title={'Portfolio'}/>
                <Project style={todolistImg} title={'To Do List'}/>
            </div>
        </div>
    </div>
};
