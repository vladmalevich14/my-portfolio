import React from 'react';
import {Project} from "./Project/Project";
import styles from './MyProjects.module.scss'
import {Title} from "../common/Title/Title";
import todolist from "../../assets/img/todolist.png"
import social from "../../assets/img/social-network.png"
import counter from "../../assets/img/counter.png"
import bgSkills from "../../assets/img/bgSkills.jpg";
import ParticlesComponent from "../common/Particles/Particles";
import {Slide} from "react-awesome-reveal";

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

    return <div className={styles.mainBlock} style={bgMySkills} id='projects'>
        <ParticlesComponent />
        <div className={styles.mainContainer}>
            <Slide direction={'up'} triggerOnce>
            <Title title={'My projects'} description={'VISIT MY PROJECTS AND KEEP YOUR FEEDBACK'}/>
            </Slide>
            <div className={styles.projectsContainer}>
                <Project link={'https://vladmalevich14.github.io/autocheck-homeworks/#/pre-junior'} style={socialImg} title={'Social Network'}/>
                <Project link={'https://vladmalevich14.github.io/autocheck-homeworks/#/junior'} style={counterImg} title={'Counter'}/>
                <Project link={'https://vladmalevich14.github.io/autocheck-homeworks/#/junior-plus'} style={todolistImg} title={'To Do List'}/>
            </div>
        </div>
    </div>
};
