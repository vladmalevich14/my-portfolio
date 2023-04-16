import React from 'react';
import styles from '../Project/Project.module.css'
import {backgroundImgType} from "../MyProjects";

type ProjectPropsType = {
    style: backgroundImgType
    title: string
}

export const Project = (props: ProjectPropsType) => {
    return <div className={styles.projectMainBlock}>
        <div className={styles.projectBlock} style={props.style}>
            <div className={styles.imageFilter}></div>
                <a href="#" className={styles.linkImage}>
                    <span>Live Preview</span>
                </a>
        </div>
        <div>
            <h3>
                <a href="#" className={styles.link}>{props.title}</a>
            </h3>
        </div>
    </div>
};
