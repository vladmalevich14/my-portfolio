import React from 'react';
import {Project} from "./Project/Project";
import styles from './MyProjects.module.scss'
import {Title} from "../common/Title/Title";
import todolist from "../../assets/img/todolist.png"
import social from "../../assets/img/social-network.png"
import restaurant from "../../assets/img/restaurant.jpg"
import bgSkills from "../../assets/img/bgSkills.jpg";
import flashCards from "../../assets/img/flashCards.jpg";
import ParticlesComponent from "../common/Particles/Particles";
import {Slide} from "react-awesome-reveal";

export type backgroundImgType = {
    backgroundImage: string
}

export const MyProjects = () => {

    const bgMySkills = {
        backgroundImage: `url(${bgSkills})`
    }

    const restaurantImg: backgroundImgType = {
        backgroundImage: `url(${restaurant})`
    }

    const flashCardsImg: backgroundImgType = {
        backgroundImage: `url(${flashCards})`
    }

    const todolistImg: backgroundImgType = {
        backgroundImage: `url(${todolist})`
    }

    return <div className={styles.mainBlock} style={bgMySkills} id='projects'>
        <ParticlesComponent/>
        <div className={styles.mainContainer}>
            <Slide direction={'up'} triggerOnce>
                <Title title={'My projects'} description={'VISIT MY PROJECTS AND KEEP YOUR FEEDBACK'}/>
            </Slide>
            <div className={styles.projectsContainer}>
                <Project link={'https://vladmalevich14.github.io/to-do-list'} style={todolistImg} title={'Task manager'}/>
                <Project link={'https://vladmalevich.github.io/'}
                         style={restaurantImg}
                         title={'Restaurant Bosco'}/>
                <Project link={'https://question-cards.vercel.app/'} style={flashCardsImg}
                         title={'Flashcards'}/>
            </div>
        </div>
    </div>
};
