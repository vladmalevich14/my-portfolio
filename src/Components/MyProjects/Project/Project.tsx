import React from 'react';
import styles from '../Project/Project.module.css'

type ProjectPropsType = {
    title: string
    photoUrl: string
}

export const Project = (props: ProjectPropsType) => {
    return <div className={styles.projectMainBlock}>
        <div className={styles.projectBlock}>
            <img src={props.photoUrl} alt="" className={styles.image}/>
            <div className={styles.linkContainer}>
                <a href="#" className={styles.linkImage}>{props.title}</a>
            </div>
        </div>
        <div>
            <h3>
                <a href="#" className={styles.link}>{props.title}</a>
            </h3>
        </div>
    </div>
};
