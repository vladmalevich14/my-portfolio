import React from 'react';
import {Skill} from "./Skill/Skill";
import styles from './MySkills.module.css'

export const MySkills = () => {
    return <div className={styles.skillsBlock}>
        <div className={styles.skillsWrapper}>
            <h2>My skills</h2>
            <div className={styles.skillContainer}>
                <Skill title={'React'}
                       description={'The Inbio code is awesome well documented code. And Its customization is very easily'}/>
                <Skill title={'Redux'}
                       description={'The Inbio code is awesome well documented code. And Its customization is very easily'}/>
                <Skill title={'TypeScript'}
                       description={'The Inbio code is awesome well documented code. And Its customization is very easily'}/>
                <Skill title={'JavaScript'}
                       description={'The Inbio code is awesome well documented code. And Its customization is very easily'}/>
                <Skill title={'HTML'}
                       description={'The Inbio code is awesome well documented code. And Its customization is very easily'}/>
                <Skill title={'CSS'}
                       description={'The Inbio code is awesome well documented code. And Its customization is very easily'}/>
            </div>
        </div>
    </div>
};