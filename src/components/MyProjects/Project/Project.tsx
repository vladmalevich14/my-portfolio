import React from 'react';
import styles from './Project.module.scss'
import {backgroundImgType} from "../MyProjects";
import {Slide} from "react-awesome-reveal";

type ProjectPropsType = {
    style: backgroundImgType
    title: string
    link: string
}

export const Project = (props: ProjectPropsType) => {
    return <div className={styles.projectMainBlock}>

        <div className={styles.projectBlock} style={props.style}>
                <a href={props.link} className={styles.linkImage} target={'_blank'}>
                    <span>Live Preview</span>
                </a>
        </div>
        <Slide direction={'up'} triggerOnce>
        <div>
            <h3>
                <a href={props.link} className={styles.link}  target={'_blank'}>{props.title}</a>
            </h3>
        </div>
        </Slide>
    </div>
};
