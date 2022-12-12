import React from 'react';
import {Project} from "./Project/Project";
import styles from './MyProjects.module.css'

export const MyProjects = () => {
    return <div className={styles.mainBlock}>
        <div className={styles.mainContainer}>
            <div className={styles.title}><h2>My projects</h2></div>
            <div className={styles.projectsContainer}>
                <Project title={'Social network'}
                         photoUrl={"https://miditator.ru/upload/iblock/0ba/temnyy_shablon_so_slayderom.jpg"}/>
                <Project title={'Counter'}
                         photoUrl={"https://miditator.ru/upload/iblock/0ba/temnyy_shablon_so_slayderom.jpg"}/>
                <Project title={'ToDoList'}
                         photoUrl={"https://miditator.ru/upload/iblock/0ba/temnyy_shablon_so_slayderom.jpg"}/>
            </div>
        </div>
    </div>
};
