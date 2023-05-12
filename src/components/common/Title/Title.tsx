import React from 'react';
import styles from "./Title.module.scss";

export const Title = (props: {title: string, description: string}) => {
    return (
        <div className={styles.titleWrapper}>
            <span className={styles.description}>{props.description}</span>
            <h2 className={styles.title}>{props.title}</h2>
        </div>
    );
};