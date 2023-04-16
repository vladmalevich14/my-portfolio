import React from 'react';
import styles from './/Skill.module.css'
import {IconsType} from "../MySkills";

type SkillPropsType = {
    title: string
    style: IconsType
}

export const Skill = (props: SkillPropsType) => {
    return <div className={styles.skillMainBlock}>
    <div className={styles.skillContainer}>
            <div className={styles.icon} style={props.style}></div>
            <h3>{props.title}</h3>
    </div>
    </div>
};
