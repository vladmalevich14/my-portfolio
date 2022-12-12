import React from 'react';
import styles from './/Skill.module.css'

type SkillPropsType = {
    title: string
    description: string
}

export const Skill = (props: SkillPropsType) => {
    return <div className={styles.skillMainBlock}>
    <div className={styles.skillContainer}>
            <div className={styles.icon}></div>
            <h3>{props.title}</h3>
            <span className={styles.skillDescription}>{props.description}</span>
    </div>
    </div>
};
