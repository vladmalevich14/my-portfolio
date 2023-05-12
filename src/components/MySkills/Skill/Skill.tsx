import React from 'react';
import styles from './/Skill.module.scss'
import {IconsType} from "../MySkills";
import {Fade, Slide} from "react-awesome-reveal";

type SkillPropsType = {
    title: string
    style: IconsType
}

export const Skill = (props: SkillPropsType) => {
    return <div className={styles.skillMainBlock}>
        <Fade delay={200} triggerOnce>
    <div className={styles.skillContainer}>
            <div className={styles.icon} style={props.style}></div>
            <h3>{props.title}</h3>
    </div>
        </Fade>
    </div>
};
